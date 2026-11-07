/** The daily pipeline: feeds -> full text -> findings -> skills -> dashboard. */

import fs from 'node:fs/promises';
import path from 'node:path';
import { ensureDir, loadSources, loadTopics, projectPaths, readJson, writeJson } from './config.js';
import { fetchText, FEED_ACCEPT, HTML_ACCEPT } from './http.js';
import { parseFeed } from './feed.js';
import { extractPage, htmlParagraphs } from './html.js';
import { isCrawlable } from './robots.js';
import { buildClassifier } from './classify.js';
import { summarize } from './summarize.js';
import {
  findingId,
  hash,
  mergeFindings,
  normalizeUrl,
  pruneFindings,
  readFindings,
  writeFindings
} from './kb.js';
import { renderDashboard, renderSkills } from './render.js';
import { createLogger, setLogLevel, sleep } from './log.js';
import { normalizeWhitespace, truncateAtWord } from './text.js';

const log = createLogger('update');
const SKIP_RETRY_DAYS = 14;
const KEEP_RUN_REPORTS = 60;

function timestamp(value) {
  const time = new Date(value || 0).getTime();
  return Number.isFinite(time) ? time : 0;
}

async function writeRunReport(paths, report, now) {
  await ensureDir(paths.runsDir);
  const name = now.toISOString().replace(/[:.]/g, '-').slice(0, 19) + '.json';
  await writeJson(path.join(paths.runsDir, name), report);
  try {
    const entries = (await fs.readdir(paths.runsDir)).filter((file) => file.endsWith('.json')).sort();
    for (const stale of entries.slice(0, Math.max(0, entries.length - KEEP_RUN_REPORTS))) {
      await fs.unlink(path.join(paths.runsDir, stale));
    }
  } catch {
    // Report pruning is best-effort.
  }
}

/**
 * Tidy text without destroying paragraph breaks: the summarizer uses blank
 * lines to keep headings and list labels from merging into sentences.
 */
function cleanText(value) {
  return String(value ?? '')
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function pruneSkipped(skipped, now) {
  const cutoff = now.getTime() - SKIP_RETRY_DAYS * 86_400_000;
  const next = {};
  for (const [id, iso] of Object.entries(skipped || {})) {
    if (timestamp(iso) >= cutoff) next[id] = iso;
  }
  return next;
}

/**
 * Run one collection pass.
 * @param {object} options
 * @param {number} [options.perSource] max new items per source
 * @param {number} [options.maxFulltext] max full article fetches this run
 * @param {string[]} [options.only] restrict to source ids
 * @param {boolean} [options.full] ignore HTTP caches
 * @param {boolean} [options.dryRun] do not write anything
 * @param {boolean} [options.noFulltext] never fetch article pages
 * @param {boolean} [options.quiet]
 * @param {string} [options.root]
 */
export async function runUpdate(options = {}) {
  const now = options.now ?? new Date();
  const paths = projectPaths(options.root);
  if (options.quiet) setLogLevel('warn');

  const topics = await loadTopics(options.root);
  const { settings, userAgent, sources } = await loadSources(options.root);
  const classifier = buildClassifier(topics);

  const state = await readJson(paths.stateFile, { version: 1, sources: {}, skipped: {}, totals: {} });
  state.sources = state.sources || {};
  state.skipped = state.skipped || {};

  const existing = await readFindings(paths.findingsFile);
  const known = new Set(existing.map((finding) => finding.id));
  const seenThisRun = new Set();
  const skipped = pruneSkipped(state.skipped, now);

  const active = sources.filter(
    (source) => source.enabled !== false && (!options.only?.length || options.only.includes(source.id))
  );
  if (!active.length) throw new Error('No enabled sources match this run.');

  const report = {
    startedAt: now.toISOString(),
    finishedAt: null,
    durationMs: 0,
    sources: [],
    added: 0,
    updated: 0,
    fulltextFetches: 0,
    candidateCount: 0,
    errors: []
  };

  // Phase 1 — refresh feeds and collect unseen items.
  const candidates = [];
  for (const source of active) {
    const cache = state.sources[source.id] || {};
    const sourceReport = {
      id: source.id,
      name: source.name,
      status: 'ok',
      feedItems: 0,
      queued: 0,
      fulltext: 0,
      unchanged: false,
      error: null
    };

    try {
      const response = await fetchText(source.url, {
        timeoutMs: settings.timeoutMs,
        etag: options.full ? null : cache.etag || null,
        lastModified: options.full ? null : cache.lastModified || null,
        userAgent,
        accept: FEED_ACCEPT,
        maxBytes: 8_000_000
      });

      if (response.notModified) {
        sourceReport.unchanged = true;
        state.sources[source.id] = {
          ...cache,
          lastCheckedAt: now.toISOString(),
          consecutiveFailures: 0
        };
        report.sources.push(sourceReport);
        log.info(`${source.name}: unchanged (304)`);
        continue;
      }

      const feed = parseFeed(response.body, source.url);
      sourceReport.feedItems = feed.items.length;

      const limit = options.perSource ?? source.perSourceLimit ?? settings.perSourceLimit;
      const ordered = [...feed.items].sort((a, b) => timestamp(b.publishedAt) - timestamp(a.publishedAt));
      let queued = 0;

      for (const item of ordered) {
        const id = findingId(item.url);
        if (known.has(id) || seenThisRun.has(id) || skipped[id]) continue;
        // YouTube Shorts carry almost no detail beyond a clickbait title.
        if (source.type === 'youtube' && /\/shorts\//.test(item.url)) continue;
        if (item.publishedAt && timestamp(item.publishedAt) < now.getTime() - settings.dropAfterDays * 86_400_000) {
          continue;
        }
        seenThisRun.add(id);
        candidates.push({ id, source, item });
        queued++;
        if (queued >= limit) break;
      }

      sourceReport.queued = queued;
      state.sources[source.id] = {
        etag: response.headers.etag || null,
        lastModified: response.headers.lastModified || null,
        lastCheckedAt: now.toISOString(),
        lastItemAt: ordered[0]?.publishedAt || null,
        lastStatus: response.status,
        consecutiveFailures: 0,
        lastError: null
      };
    } catch (error) {
      sourceReport.status = 'error';
      sourceReport.error = error.message;
      report.errors.push({ source: source.id, message: error.message });
      state.sources[source.id] = {
        ...cache,
        lastCheckedAt: now.toISOString(),
        consecutiveFailures: (cache.consecutiveFailures || 0) + 1,
        lastError: error.message
      };
      log.warn(`${source.name}: ${error.message}`);
    }

    report.sources.push(sourceReport);
  }

  report.candidateCount = candidates.length;
  log.info(`Collected ${candidates.length} new candidate items from ${active.length} sources`);

  // Phase 2 — newest first, spend the full-text budget where gap-per-item is highest.
  candidates.sort(
    (a, b) =>
      timestamp(b.item.publishedAt) - timestamp(a.item.publishedAt) ||
      (b.source.trust ?? 3) - (a.source.trust ?? 3)
  );

  let fulltextBudget = options.noFulltext ? 0 : options.maxFulltext ?? settings.maxFulltextPerRun;
  const incoming = [];
  const sourceReportById = new Map(report.sources.map((entry) => [entry.id, entry]));

  for (const candidate of candidates) {
    const { source, item, id } = candidate;
    const sourceReport = sourceReportById.get(source.id);
    let page = null;

    if (fulltextBudget > 0 && settings.fulltext && source.fulltext !== false) {
      let allowed = true;
      if (settings.respectRobots) {
        allowed = await isCrawlable(item.url, { userAgent, timeoutMs: Math.min(settings.timeoutMs, 10000) });
      }
      if (allowed) {
        try {
          const response = await fetchText(item.url, {
            timeoutMs: settings.timeoutMs,
            retries: 1,
            userAgent,
            accept: HTML_ACCEPT,
            maxBytes: 3_000_000
          });
          page = extractPage(response.body, response.url);
          report.fulltextFetches++;
          if (sourceReport) sourceReport.fulltext++;
          fulltextBudget--;
        } catch (error) {
          log.debug(`Full text failed for ${item.url}: ${error.message}`);
        }
        await sleep(settings.delayMs);
      } else {
        log.debug(`Robots disallow full text for ${item.url}`);
      }
    }

    const fallbackText = htmlParagraphs(item.html);
    const text = cleanText(page?.text && page.text.length > fallbackText.length ? page.text : fallbackText);

    if (text.length < settings.minTextLength) {
      skipped[id] = now.toISOString();
      log.debug(`Skipped thin content: ${item.url}`);
      continue;
    }

    const title = truncateAtWord(
      normalizeWhitespace(page?.title || item.title || '')
        .replace(/\s+/g, ' ')
        // Some feeds append social handles: "Headline via @site, @author".
        .replace(/\s+via\s+@\S+(?:,\s*@\S+)*\s*$/i, ''),
      300
    );
    const publishedAt = page?.publishedAt || item.publishedAt || null;
    const classified = classifier({
      title,
      text,
      sourceName: source.name,
      sourceId: source.id
    });
    const { summary, keyPoints } = summarize(text, { title });

    // Video text is only the description, so an off-topic video adds noise without
    // contributing to any skill. Articles are kept even when unclassified.
    if (source.type === 'youtube' && !classified.topics.length) {
      skipped[id] = now.toISOString();
      log.debug(`Skipped off-topic video: ${item.url}`);
      continue;
    }

    incoming.push({
      id,
      url: normalizeUrl(item.url),
      title: title || item.url,
      source: source.name,
      sourceId: source.id,
      author: truncateAtWord(normalizeWhitespace(page?.author || item.author || ''), 120),
      publishedAt,
      fetchedAt: now.toISOString(),
      summary,
      keyPoints,
      topics: classified.topics,
      primaryTopic: classified.primaryTopic,
      tags: classified.tags,
      type: classified.type,
      authority: Number(source.trust ?? 3),
      contentHash: hash(`${title}\n${text.slice(0, 6000)}`, 16),
      wordCount: text.split(/\s+/).length
    });

    known.add(id);
    log.info(`${source.name}: + ${truncateAtWord(title || item.url, 80)}`);
  }

  const merged = mergeFindings(existing, incoming);
  const findings = pruneFindings(merged.findings, settings.dropAfterDays, now);
  report.added = merged.added;
  report.updated = merged.updated;
  report.totalFindings = findings.length;
  report.finishedAt = new Date().toISOString();
  report.durationMs = Date.now() - now.getTime();

  if (options.dryRun) {
    return { report, findings, skillsIndex: null, written: false };
  }

  await writeFindings(paths.findingsFile, findings);
  const skillsIndex = await renderSkills(findings, topics, { skillsDir: paths.skillsDir, now });
  await renderDashboard({
    findings,
    skillsIndex,
    sourcesCount: sources.filter((source) => source.enabled !== false).length,
    dashboardFile: paths.dashboardFile,
    now
  });

  state.version = 1;
  state.lastRun = now.toISOString();
  state.skipped = skipped;
  state.totals = {
    findings: findings.length,
    skills: skillsIndex.skills.length,
    sources: sources.filter((source) => source.enabled !== false).length
  };
  await writeJson(paths.stateFile, state);
  await writeRunReport(paths, report, now);

  return { report, findings, skillsIndex, written: true };
}
