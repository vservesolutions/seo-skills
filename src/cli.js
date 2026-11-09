#!/usr/bin/env node
/** CLI entry point for the self-updating SEO knowledge base. */

import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { parseArgs } from 'node:util';

import { buildClassifier } from './lib/classify.js';
import { loadSources, loadTopics, projectPaths, readJson, writeJson } from './lib/config.js';
import { readFindings, writeFindings } from './lib/kb.js';
import { renderDashboard, renderSkills } from './lib/render.js';
import { auditSkills, llmConfig, readCache } from './lib/llm.js';
import { FALLBACK_CATEGORY, collectLibrary, groupKey, platformLabel, readLibrary, reindexLibrary, renderLibrary, writeLibrary } from './lib/skill-library.js';
import { checkRepos, isStale, loadHealth, mergeHealth, saveHealth } from './lib/health.js';
import { runUpdate } from './lib/update.js';
import { setLogLevel } from './lib/log.js';
import { fetchText, FEED_ACCEPT } from './lib/http.js';
import { parseFeed } from './lib/feed.js';
import { installDaily, removeDaily, runLoop, showSchedule } from './lib/scheduler.js';

const OPTIONS = {
  help: { type: 'boolean', short: 'h' },
  json: { type: 'boolean' },
  full: { type: 'boolean' },
  'dry-run': { type: 'boolean' },
  'no-fulltext': { type: 'boolean' },
  quiet: { type: 'boolean' },
  time: { type: 'string' },
  port: { type: 'string' },
  host: { type: 'string' },
  limit: { type: 'string' },
  only: { type: 'string' },
  'per-source': { type: 'string' },
  'max-fulltext': { type: 'string' },
  'max-repos': { type: 'string' },
  'skills-per-repo': { type: 'string' },
  'no-library': { type: 'boolean' },
  reindex: { type: 'boolean' },
  verbose: { type: 'boolean' },
  repo: { type: 'string' },
  all: { type: 'boolean' },
  'all-versions': { type: 'boolean' },
  category: { type: 'string' },
  platform: { type: 'string' }
};

const HELP = `SEO Skills — a self-updating SEO knowledge base

Usage: node src/cli.js <command> [options]

Commands:
  update            Fetch sources, extract findings, rebuild skills + dashboard
  build             Rebuild skills + dashboard from the existing knowledge base
  status            Last run, source health and knowledge base size
  skills            List generated skills
  search <query>    Search collected findings
  library           List collected third-party SEO agent skills by category
  collect           Refresh the skill library from published packs
  health            Check packs for archived, deleted or stale repositories
  enrich            Optional model pass: summaries + SEO audit of stored skills
  doctor            Check every configured source and its feed
  serve             Serve the dashboard at http://127.0.0.1:4321
  schedule          install | remove | show | loop  (daily self-update)
  help              Show this message

Update options:
  --per-source <n>     New items per source this run
  --max-fulltext <n>   Article pages to fetch this run
  --only <ids>         Comma-separated source ids
  --full               Ignore HTTP caches and refetch every feed
  --no-fulltext        Use feed summaries only (fastest)
  --no-library         Skip the third-party skill library refresh
  --dry-run            Collect and report without writing anything
  --quiet              Only warnings and errors

Library options:
  --max-repos <n>      Packs to scan this run (GitHub rate limited)
  --skills-per-repo <n>  SKILL.md files to take per pack
  --repo <a/b,c/d>     Scan only these packs
  --category <id>      Filter the listing by SEO category
  --platform <name>    Filter by agent: claude-code, codex, cursor, …
  --reindex            Recompute platform + provenance from stored data
  --verbose            Show the exact source URL for each skill
  --all-versions       List every copy instead of the best copy per skill name

Health options:
  --limit <n>          Packs to check this run (GitHub rate limited, default 100)
  --all                Recheck packs that were checked in the last 7 days

Enrich options (needs SEO_LLM_KEY):
  --limit <n>          Skills to review this run (free tiers are rate limited)
  --repo <a/b>         Review only these packs
  --all                Re-review skills already audited by this model
  --dry-run            Report what would change without writing

Examples:
  npm run update
  node src/cli.js update --only google-search-central --max-fulltext 3
  node src/cli.js search "core web vitals"
  node src/cli.js library --category ai-search-geo
  node src/cli.js schedule install --time 06:30
`;

function toInt(value, fallback = undefined) {
  if (value === undefined || value === null || value === '') return fallback;
  const parsed = Number.parseInt(String(value), 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(Number(value) || 0);
}

function relativeTime(iso) {
  if (!iso) return '';
  const then = new Date(iso).getTime();
  if (!Number.isFinite(then)) return '';
  const minutes = Math.round((Date.now() - then) / 60000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  return `${days}d ago`;
}

function isoMinute(iso) {
  if (!iso) return '—';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toISOString().replace('T', ' ').slice(0, 16) + ' UTC';
}

async function listRuns(paths, limit = 5) {
  try {
    const files = (await fs.readdir(paths.runsDir)).filter((file) => file.endsWith('.json')).sort().reverse();
    const runs = [];
    for (const file of files.slice(0, limit)) {
      try {
        runs.push(await readJson(path.join(paths.runsDir, file), null));
      } catch {
        // Ignore unreadable report files.
      }
    }
    return runs.filter(Boolean);
  } catch {
    return [];
  }
}

/** Collect third-party skills and rebuild the library folder. */
async function refreshLibrary({ limit, skillsPerRepo, only = [], dryRun = false, now = new Date() } = {}) {
  const paths = projectPaths();
  const topics = await loadTopics();
  const classify = buildClassifier(topics);
  const result = await collectLibrary({ paths, topics, classify, limit, skillsPerRepo, only, dryRun, now });
  if (dryRun) return { result, index: null, paths };
  const records = await readLibrary(paths.libraryFile);
  const index = await renderLibrary(records, topics, {
    libraryDir: paths.libraryDir,
    now,
    health: await loadHealth(paths.repoHealthFile)
  });
  return { result, index, paths };
}

async function commandUpdate(values) {
  const started = Date.now();
  const result = await runUpdate({
    perSource: toInt(values['per-source']),
    maxFulltext: toInt(values['max-fulltext']),
    only: values.only ? String(values.only).split(',').map((id) => id.trim()).filter(Boolean) : [],
    full: Boolean(values.full),
    dryRun: Boolean(values['dry-run']),
    noFulltext: Boolean(values['no-fulltext']),
    quiet: Boolean(values.quiet)
  });

  const report = result.report;
  const unchanged = report.sources.filter((source) => source.unchanged).length;
  const failed = report.sources.filter((source) => source.status === 'error');
  const paths = projectPaths();
  let libraryIndex = null;
  let libraryResult = null;

  if (result.written && !values['no-library']) {
    const refreshed = await refreshLibrary({
      limit: toInt(values['max-repos']),
      skillsPerRepo: toInt(values['skills-per-repo']),
      now: new Date()
    });
    libraryIndex = refreshed.index;
    libraryResult = refreshed.result;

    if (libraryIndex) {
      const { sources } = await loadSources();
      await renderDashboard({
        findings: await readFindings(paths.findingsFile),
        skillsIndex: result.skillsIndex,
        sourcesCount: sources.filter((source) => source.enabled !== false).length,
        dashboardFile: paths.dashboardFile,
        now: new Date(),
        library: libraryIndex
      });
    }
  }

  const seconds = ((Date.now() - started) / 1000).toFixed(1);

  console.log('');
  console.log(`SEO skills update · ${isoMinute(report.startedAt)}`);
  console.log(`  Sources      ${formatNumber(report.sources.length)} checked · ${unchanged} unchanged · ${failed.length} failed`);
  console.log(`  Candidates   ${formatNumber(report.candidateCount)} new items · ${formatNumber(report.fulltextFetches)} full-text fetches`);
  console.log(`  Knowledge    ${formatNumber(report.added)} added · ${formatNumber(report.updated)} updated · ${formatNumber(report.totalFindings)} total`);
  if (result.written) {
    console.log(`  Skills       ${formatNumber(result.skillsIndex.skills.length)} written to skills/ · index at skills/INDEX.md`);
    if (libraryIndex) {
      console.log(
        `  Library      ${formatNumber(libraryIndex.counts.skills)} skills · ${formatNumber(libraryResult.added)} new · ${formatNumber(libraryIndex.counts.packs)} packs`
      );
      if (libraryResult.failedRepos) {
        console.log(`               ${libraryResult.failedRepos} pack(s) failed — see library/index.json`);
      }
    } else {
      console.log('  Library      skipped');
    }
    console.log(`  Dashboard    site/index.html`);
  } else {
    console.log('  Dry run      nothing written');
  }
  console.log(`  Time         ${seconds}s`);

  if (failed.length) {
    console.log('');
    console.log('  Failures:');
    for (const source of failed) console.log(`    - ${source.name}: ${source.error}`);
  }
  console.log('');
}

async function commandBuild() {
  const paths = projectPaths();
  const topics = await loadTopics();
  const { sources } = await loadSources();
  const findings = await readFindings(paths.findingsFile);
  const now = new Date();

  // Taxonomy edits (new skills, new keywords) must not require refetching:
  // reclassify stored findings against the current config first.
  const classifier = buildClassifier(topics);
  let reclassified = 0;
  for (const finding of findings) {
    const result = classifier({
      title: finding.title || '',
      text: [finding.summary || '', ...(finding.keyPoints || [])].join('\n'),
      sourceName: finding.source || '',
      sourceId: finding.sourceId || ''
    });
    if (!result.primaryTopic) continue;
    if (result.primaryTopic !== finding.primaryTopic) reclassified++;
    finding.topics = result.topics;
    finding.primaryTopic = result.primaryTopic;
    finding.tags = result.tags;
  }
  await writeFindings(paths.findingsFile, findings);

  const skillsIndex = await renderSkills(findings, topics, { skillsDir: paths.skillsDir, now });

  const libraryRecords = await readLibrary(paths.libraryFile);
  const libraryIndex = libraryRecords.length
    ? await renderLibrary(libraryRecords, topics, {
        libraryDir: paths.libraryDir,
        now,
        health: await loadHealth(paths.repoHealthFile)
      })
    : null;

  await renderDashboard({
    findings,
    skillsIndex,
    sourcesCount: sources.filter((source) => source.enabled !== false).length,
    dashboardFile: paths.dashboardFile,
    now,
    library: libraryIndex
  });

  console.log(
    `Rebuilt ${skillsIndex.skills.length} skills from ${formatNumber(findings.length)} findings (reclassified ${formatNumber(reclassified)}).`
  );
  console.log(`Skills:    ${path.join(paths.skillsDir, 'INDEX.md')}`);
  console.log(
    `Library:   ${libraryIndex ? `${formatNumber(libraryIndex.counts.skills)} third-party skills · ${formatNumber(libraryIndex.counts.packs)} packs` : 'empty — run: npm run collect'}`
  );
  console.log(`Dashboard: ${paths.dashboardFile}`);
}

async function commandStatus() {
  const paths = projectPaths();
  const findings = await readFindings(paths.findingsFile);
  const state = await readJson(paths.stateFile, { sources: {} });
  const { sources } = await loadSources();
  const enabled = sources.filter((source) => source.enabled !== false);
  const sourceState = state.sources || {};
  const failing = Object.entries(sourceState).filter(([, entry]) => (entry.consecutiveFailures || 0) > 0);
  const reporting = Object.keys(sourceState).length;
  const skillsIndex = await readJson(path.join(paths.skillsDir, 'index.json'), null);
  const runs = await listRuns(paths);

  console.log('');
  console.log('SEO Skills');
  console.log('');
  console.log(
    `  Last run       ${state.lastRun ? `${isoMinute(state.lastRun)} (${relativeTime(state.lastRun)})` : 'never — run: npm run update'}`
  );
  console.log(`  Knowledge base ${formatNumber(findings.length)} findings · data/findings.jsonl`);
  console.log(
    `  Skills         ${skillsIndex ? `${skillsIndex.skills.length} generated · built ${isoMinute(skillsIndex.generatedAt)}` : 'not built yet — run: npm run build'}`
  );
  const libraryIndex = await readJson(path.join(paths.libraryDir, 'index.json'), null);
  console.log(
    `  Library        ${libraryIndex ? `${formatNumber(libraryIndex.counts.skills)} skills · ${formatNumber(libraryIndex.counts.packs)} packs · ${formatNumber(libraryIndex.counts.fullText)} with full text` : 'empty — run: npm run collect'}`
  );
  console.log(`  Dashboard      site/index.html (npm run serve)`);
  console.log(
    `  Sources        ${enabled.length} enabled · ${reporting} have run · ${failing.length} failing`
  );

  if (failing.length) {
    console.log('');
    console.log('  Failing sources:');
    for (const [id, entry] of failing) {
      const name = enabled.find((source) => source.id === id)?.name || id;
      console.log(`    - ${name}: ${entry.lastError || 'unknown error'} (${entry.consecutiveFailures} consecutive)`);
    }
  }

  if (runs.length) {
    console.log('');
    console.log('  Recent runs:');
    for (const run of runs) {
      console.log(
        `    ${isoMinute(run.startedAt)}  +${String(run.added ?? 0).padStart(3)} new  ${String(run.fulltextFetches ?? 0).padStart(3)} full text  ${String(run.totalFindings ?? 0).padStart(5)} total  ${((run.durationMs || 0) / 1000).toFixed(1)}s`
      );
    }
  }
  console.log('');
}

async function commandSkills(values) {
  const paths = projectPaths();
  const index = await readJson(path.join(paths.skillsDir, 'index.json'), null);
  if (!index) {
    console.error('No skills built yet — run: npm run update');
    process.exitCode = 1;
    return;
  }
  if (values.json) {
    console.log(JSON.stringify(index, null, 2));
    return;
  }

  const rows = index.skills.map((skill) => [
    skill.title,
    String(skill.findings),
    skill.confidence,
    `skills/${skill.slug}/SKILL.md`
  ]);
  const header = ['SKILL', 'FINDINGS', 'CONFIDENCE', 'PATH'];
  const widths = header.map((title, column) => Math.max(title.length, ...rows.map((row) => row[column].length)));

  console.log('');
  console.log(header.map((title, column) => title.padEnd(widths[column])).join('  '));
  for (const row of rows) console.log(row.map((cell, column) => cell.padEnd(widths[column])).join('  '));
  console.log('');
  const libraryIndex = await readJson(path.join(paths.libraryDir, 'index.json'), null);
  console.log(`${index.skills.length} generated skills · built ${isoMinute(index.generatedAt)}`);
  if (libraryIndex) {
    console.log(
      `${formatNumber(libraryIndex.counts.skills)} third-party skills collected in library/ · list them with: npm run library`
    );
  }
  console.log('');
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Short terms need word boundaries so "inp" does not match "partnership". */
function termMatches(haystack, term) {
  if (term.length <= 3) return new RegExp(`\\b${escapeRegExp(term)}\\b`, 'i').test(haystack);
  return haystack.includes(term);
}

function scoreFinding(finding, query, terms) {
  const title = String(finding.title || '').toLowerCase();
  const summary = String(finding.summary || '').toLowerCase();
  const points = (finding.keyPoints || []).join(' ').toLowerCase();
  const topics = (finding.topics || []).map((topic) => topic.id).join(' ').toLowerCase();
  const tags = (finding.tags || []).join(' ').toLowerCase();

  let score = 0;
  if (query && title.includes(query)) score += 30;
  if (query && summary.includes(query)) score += 8;
  for (const term of terms) {
    if (termMatches(title, term)) score += 6;
    if (termMatches(topics, term)) score += 4;
    if (termMatches(tags, term)) score += 3;
    if (termMatches(points, term)) score += 3;
    if (termMatches(summary, term)) score += 1;
  }
  return score;
}

async function commandSearch(values, positionals) {
  const query = positionals.slice(1).join(' ').trim();
  if (!query) {
    console.error('Usage: node src/cli.js search <query>');
    process.exitCode = 1;
    return;
  }

  const paths = projectPaths();
  const findings = await readFindings(paths.findingsFile);
  const normalized = query.toLowerCase();
  const terms = [...new Set(normalized.split(/\s+/).filter((term) => term.length > 2))];
  const limit = toInt(values.limit, 8);

  const ranked = findings
    .map((finding) => ({ finding, score: scoreFinding(finding, normalized, terms) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  if (values.json) {
    console.log(JSON.stringify(ranked.map((entry) => entry.finding), null, 2));
    return;
  }

  if (!ranked.length) {
    console.log(`No findings match "${query}". Try a broader term, or run npm run update.`);
    return;
  }

  console.log('');
  console.log(`${ranked.length} result${ranked.length === 1 ? '' : 's'} for "${query}"`);
  console.log('');
  ranked.forEach(({ finding }, index) => {
    const date = (finding.publishedAt || finding.firstSeen || '').slice(0, 10);
    console.log(`${index + 1}. ${finding.title}`);
    console.log(`   ${finding.source}${date ? ` · ${date}` : ''} · ${finding.url}`);
    if (finding.summary) console.log(`   ${finding.summary.slice(0, 240)}${finding.summary.length > 240 ? '…' : ''}`);
    const topics = (finding.topics || []).map((topic) => topic.id).join(', ');
    if (topics) console.log(`   skills: ${topics}`);
    console.log('');
  });
}

async function commandCollect(values) {
  const started = Date.now();
  const dryRun = Boolean(values['dry-run']);

  if (values.reindex) {
    const paths = projectPaths();
    const topics = await loadTopics();
    const records = reindexLibrary(await readLibrary(paths.libraryFile));
    await writeLibrary(paths.libraryFile, records);
    const index = await renderLibrary(records, topics, {
    libraryDir: paths.libraryDir,
    now: new Date(),
    health: await loadHealth(paths.repoHealthFile)
  });
    console.log('');
    console.log('SEO skill library · reindexed from stored data (no network)');
    console.log(`  Skills       ${formatNumber(index.counts.skills)} · ${formatNumber(index.counts.packs)} packs`);
    console.log(`  Platforms    ${platformSummary(index.skills)}`);
    console.log('');
    return;
  }
  const { result, index } = await refreshLibrary({
    limit: toInt(values['max-repos']),
    skillsPerRepo: toInt(values['skills-per-repo']),
    only: values.repo ? String(values.repo).split(',').map((repo) => repo.trim()).filter(Boolean) : [],
    dryRun
  });
  const seconds = ((Date.now() - started) / 1000).toFixed(1);

  console.log('');
  console.log('SEO skill library · third-party agent skills');
  console.log(`  Packs        ${formatNumber(result.scannedRepos)} scanned · ${formatNumber(result.failedRepos)} failed · ${formatNumber(result.candidates)} known`);
  console.log(`  Skills       ${formatNumber(result.added)} new · ${formatNumber(result.refreshed)} refreshed`);
  console.log(`  Library      ${formatNumber(result.total)} collected · ${formatNumber(result.active)} unique · ${formatNumber(result.duplicates)} duplicates skipped`);
  if (index) {
    const summary = index.categories.map((category) => `${category.title} (${category.count})`).join(' · ');
    console.log(`  Categories   ${summary || 'none'}`);
    console.log(`  Files        ${path.join(projectPaths().libraryDir, 'INDEX.md')}`);
  } else {
    console.log('  Dry run      nothing written');
  }
  if (Number.isFinite(result.rateRemaining)) {
    console.log(`  GitHub API   ${formatNumber(result.rateRemaining)} calls left this hour`);
  }
  const skipped = result.reports.repos.filter((repo) => !repo.ok && /rate limit/.test(repo.error || ''));
  if (skipped.length) console.log(`  Note         ${skipped.length} pack(s) queued for the next run`);
  console.log(`  Time         ${seconds}s`);
  console.log('');
}

function platformSummary(skills) {
  const counts = new Map();
  for (const skill of skills) {
    for (const platform of skill.platforms || []) {
      counts.set(platform, (counts.get(platform) || 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([platform, count]) => `${platformLabel(platform)} (${count})`)
    .join(' · ');
}

async function commandLibrary(values, positionals) {
  const paths = projectPaths();
  const index = await readJson(path.join(paths.libraryDir, 'index.json'), null);
  if (!index) {
    console.error('No skill library yet — run: npm run collect');
    process.exitCode = 1;
    return;
  }

  const query = positionals.slice(1).join(' ').trim().toLowerCase();
  let skills = index.skills;
  if (values.category) {
    const wanted = String(values.category).toLowerCase();
    skills = skills.filter(
      (skill) =>
        skill.category.toLowerCase() === wanted ||
        skill.categoryTitle.toLowerCase().includes(wanted)
    );
  }
  if (values.platform) {
    const wanted = String(values.platform).toLowerCase();
    skills = skills.filter((skill) => (skill.platforms || []).includes(wanted));
  }
  if (query) {
    skills = skills.filter((skill) =>
      `${skill.name} ${skill.description} ${skill.repo}`.toLowerCase().includes(query)
    );
  }

  if (values.json) {
    console.log(JSON.stringify(skills, null, 2));
    return;
  }

  // By default a name appears once: the best copy, with the other copies counted.
  if (!values['all-versions']) {
    const best = new Map();
    for (const skill of skills) {
      const key = skill.group || groupKey(skill.name);
      const current = best.get(key);
      if (!current || (skill.isPrimary && !current.isPrimary)) best.set(key, skill);
    }
    skills = [...best.values()];
  }

  console.log('');
  console.log(
    `Skill library · ${formatNumber(index.counts.groups ?? index.counts.skills)} distinct skills · ${formatNumber(index.counts.skills)} versions · ${formatNumber(index.counts.packs)} packs · built ${isoMinute(index.generatedAt)}`
  );
  if (!skills.length) {
    console.log('');
    console.log('Nothing matches that filter.');
    console.log('');
    return;
  }

  const limit = toInt(values.limit, 0);
  let shown = 0;
  console.log('');
  console.log(
    `  ${'SKILL'.padEnd(30)}  ${'PLATFORM'.padEnd(26)}  ${'PACK'.padEnd(36)}  ${'LICENCE'.padEnd(12)}  ${'STARS'.padStart(6)}  ACCESS`
  );
  for (const category of index.categories) {
    const inCategory = skills.filter((skill) => skill.category === category.id);
    if (!inCategory.length) continue;
    let rows = inCategory;
    if (limit) {
      rows = rows.slice(0, Math.max(0, limit - shown));
      if (!rows.length) continue;
    }
    console.log('');
    console.log(`${category.title} · ${inCategory.length}`);
    for (const skill of rows) {
      const access = skill.hasContent ? 'full text' : 'link only';
      const platforms = (skill.platforms || []).map(platformLabel).join(', ') || 'Unspecified';
      const label = skill.groupSize > 1 ? `${skill.name} +${skill.groupSize - 1}` : skill.name;
      console.log(
        `  ${label.padEnd(30).slice(0, 30)}  ${platforms.padEnd(26).slice(0, 26)}  ${String(skill.repo).padEnd(36).slice(0, 36)}  ${String(skill.license).padEnd(12)}  ${String(skill.stars).padStart(6)}  ${access}`
      );
      if (values.verbose) {
        console.log(`      ${skill.url}`);
        console.log(`      platform: ${skill.platformSource || 'none'} · found via: ${skill.discoveredVia || 'config'}`);
      }
      shown++;
    }
    if (limit && shown >= limit) break;
  }
  console.log('');
  console.log('Full text: library/<category>/<skill>.md · index: library/INDEX.md');
  console.log('');
}

/**
 * Check the repositories behind the library: archived, deleted or abandoned packs.
 *
 * Health is advisory: a dead pack hides its skills from the rendered library, a stale one
 * gets a badge. Nothing is deleted from the catalogue, so a repository that comes back is
 * restored on the next run.
 */
async function commandHealth(values) {
  const started = Date.now();
  const paths = projectPaths();
  const records = await readLibrary(paths.libraryFile);
  if (!records.length) {
    console.error('No skill library yet — run: npm run collect');
    process.exitCode = 1;
    return;
  }

  const health = await loadHealth(paths.repoHealthFile);
  const repos = [...new Set(records.filter((record) => !record.duplicateOf).map((record) => record.repo))];
  const now = new Date();
  const recent = (repo) => {
    if (values.all) return false;
    const age = now.getTime() - Date.parse(health[repo]?.checkedAt || '');
    return Number.isFinite(age) && age < 7 * 86_400_000;
  };
  const lastChecked = (repo) => Date.parse(health[repo]?.checkedAt || '') || 0;
  const queue = repos.filter((repo) => !recent(repo)).sort((a, b) => lastChecked(a) - lastChecked(b));

  console.log('');
  if (!queue.length) {
    console.log(`Pack health is current for all ${formatNumber(repos.length)} packs (checked in the last 7 days).`);
    console.log('');
    return;
  }

  const limit = toInt(values.limit, 100);
  const result = await checkRepos(queue, { token: process.env.GITHUB_TOKEN || '', limit, now });
  const merged = mergeHealth(health, result.updates);
  await saveHealth(paths.repoHealthFile, merged);

  const known = Object.values(merged);
  const dead = known.filter((entry) => entry.status === 'missing' || entry.archived).length;
  const stale = known.filter((entry) => entry.status === 'ok' && isStale(entry.pushedAt, now)).length;

  console.log('SEO skill library · pack health');
  console.log(`  Checked      ${formatNumber(result.checked)} pack(s) in ${((Date.now() - started) / 1000).toFixed(1)}s`);
  console.log(`  Known        ${formatNumber(known.length)} of ${formatNumber(repos.length)} packs`);
  console.log(`  Dead         ${formatNumber(dead)} (archived or deleted — hidden from the library)`);
  console.log(`  Stale        ${formatNumber(stale)} (no push in 18 months — shown with a badge)`);
  if (result.errors.length) console.log(`  Errors       ${result.errors.length}: ${result.errors.slice(0, 3).join('; ')}`);
  if (result.rateLimited) console.log('  Rate limit   reached — run again later, or set GITHUB_TOKEN for 1,000 requests/hour');
  console.log(`  Written      ${paths.repoHealthFile}`);
  console.log('');
  console.log('  Rebuild the library with: node src/cli.js build');
  console.log('');
}

/**
 * Optional language-model pass over the collected library.
 *
 * The model only annotates: it writes a one-line summary and records whether it
 * agrees that a stored skill is SEO work. Nothing is added or removed, so an
 * unset key, an expired key or a rate limit cannot damage the library.
 */
async function commandEnrich(values) {
  const started = Date.now();
  const paths = projectPaths();
  const topics = await loadTopics();
  const config = llmConfig();
  const dryRun = Boolean(values['dry-run']);

  if (!config.enabled) {
    console.log('');
    console.log('Model audit is optional and currently off (SEO_LLM_KEY is not set).');
    console.log('');
    console.log('  1. Create a free key  https://aistudio.google.com/apikey  (no card, ~1,500 requests/day)');
    console.log('  2. export SEO_LLM_KEY=<key>   — or add it as the GitHub Actions secret SEO_LLM_KEY');
    console.log('  3. node src/cli.js enrich --limit 200');
    console.log('');
    console.log('  Any OpenAI-compatible provider works — set SEO_LLM_BASE and SEO_LLM_MODEL, for example Groq:');
    console.log('    SEO_LLM_BASE=https://api.groq.com/openai/v1 SEO_LLM_MODEL=openai/gpt-oss-120b');
    console.log(`  Defaults: ${config.base} · ${config.model}`);
    console.log('');
    return;
  }

  const records = await readLibrary(paths.libraryFile);
  const only = values.repo ? String(values.repo).split(',').map((repo) => repo.trim()).filter(Boolean) : [];
  const active = records.filter((record) => !record.duplicateOf && (!only.length || only.includes(record.repo)));
  const current = (record) => Boolean(record.audit && record.audit.model === config.model);
  const queue = active
    .filter((record) => (values.all ? true : !current(record)))
    .sort((a, b) => Number(current(a)) - Number(current(b)) || (b.stars || 0) - (a.stars || 0) || a.name.localeCompare(b.name));
  const limit = toInt(values.limit, 0);
  const selected = limit ? queue.slice(0, limit) : queue;

  const cache = await readCache(fs, paths.llmCacheFile);
  const outcome = await auditSkills(
    selected.map((record) => ({ id: record.id, name: record.name, repo: record.repo, description: record.description })),
    { config, cache, categories: [...topics.map((topic) => topic.id), FALLBACK_CATEGORY.id], log: (message) => console.warn(`  ! ${message}`) }
  );

  const flagged = [];
  const moved = [];
  let summaries = 0;
  for (const record of selected) {
    const verdict = outcome.results.get(record.id);
    if (!verdict) continue;
    record.audit = {
      seo: verdict.seo,
      category: verdict.category,
      confidence: verdict.confidence,
      model: verdict.model,
      at: verdict.at
    };
    if (verdict.seo && verdict.summary) {
      record.summary = verdict.summary;
      summaries++;
    }
    const row = { name: record.name, repo: record.repo, category: record.category, confidence: verdict.confidence };
    if (!verdict.seo) flagged.push(row);
    else if (verdict.category !== 'unclear' && verdict.category !== record.category) moved.push({ ...row, modelCategory: verdict.category });
  }

  const answered = outcome.results.size;
  const agreeing = answered - flagged.length;
  const remaining = active.filter((record) => !current(record)).length;
  const seconds = ((Date.now() - started) / 1000).toFixed(1);

  console.log('');
  console.log(`SEO skill library · model audit (${config.model})`);
  console.log(`  Reviewed     ${formatNumber(answered)} of ${formatNumber(selected.length)} targeted · ${formatNumber(outcome.cached)} from cache · ${formatNumber(outcome.requests)} request(s)`);
  console.log(`  Keyword pass ${answered ? `${formatNumber(agreeing)} agreed (${((agreeing / answered) * 100).toFixed(1)}%)` : 'no verdicts'} · ${formatNumber(flagged.length)} flagged as not SEO`);
  console.log(`  Categories   ${formatNumber(moved.length)} would move category · ${formatNumber(summaries)} summaries written`);
  console.log(`  Left         ${formatNumber(remaining)} of ${formatNumber(active.length)} skills still unaudited for this model${outcome.skipped ? ` · ${formatNumber(outcome.skipped)} over this run's budget` : ''}`);
  if (outcome.errors.length) console.log(`  Errors       ${outcome.errors.length} batch(es) failed: ${outcome.errors[0]}`);
  console.log(`  Time         ${seconds}s`);

  if (!answered) {
    console.log('');
    console.log('Nothing was written — no verdicts came back.');
    console.log('');
    process.exitCode = outcome.errors.length ? 1 : 0;
    return;
  }
  if (dryRun) {
    console.log('  Dry run      nothing written');
    console.log('');
    return;
  }

  await writeLibrary(paths.libraryFile, records);
  await writeJson(paths.llmCacheFile, cache);
  await writeJson(paths.llmAuditFile, {
    generatedAt: new Date().toISOString(),
    model: config.model,
    reviewed: answered,
    flagged: flagged.slice(0, 500),
    moved: moved.slice(0, 500),
    errors: outcome.errors
  });
  const index = await renderLibrary(records, topics, {
    libraryDir: paths.libraryDir,
    now: new Date(),
    health: await loadHealth(paths.repoHealthFile)
  });
  console.log(`  Written      ${path.join(paths.libraryDir, 'INDEX.md')} · ${formatNumber(index.counts.skills)} skills`);
  console.log(`  Review file  ${paths.llmAuditFile} (flagged + category moves)`);
  console.log('  Dashboard    run: node src/cli.js build');
  console.log('');
}

async function commandDoctor() {
  const { sources, userAgent } = await loadSources();
  const enabled = sources.filter((source) => source.enabled !== false);
  console.log('');
  console.log(`Checking ${enabled.length} enabled sources…`);
  console.log('');
  let failures = 0;
  for (const source of enabled) {
    try {
      const response = await fetchText(source.url, {
        timeoutMs: 25000,
        retries: 0,
        userAgent,
        accept: FEED_ACCEPT,
        maxBytes: 8_000_000
      });
      if (response.notModified) {
        console.log(`[ok]   ${source.name} — unchanged (304)`);
        continue;
      }
      const feed = parseFeed(response.body, source.url);
      const newest = feed.items
        .map((item) => item.publishedAt)
        .filter(Boolean)
        .sort()
        .at(-1);
      console.log(
        `[ok]   ${source.name} — ${feed.items.length} items${newest ? ` · newest ${newest.slice(0, 10)}` : ''}`
      );
    } catch (error) {
      failures++;
      console.log(`[fail] ${source.name} — ${error.message}`);
      console.log(`       ${source.url}`);
    }
  }
  console.log('');
  console.log(failures ? `${failures} source(s) failed.` : 'All sources responded.');
  console.log('');
}

async function commandServe(values) {
  const paths = projectPaths();
  const port = toInt(values.port, 4321);
  const host = values.host || '127.0.0.1';

  const hasDashboard = await fs
    .stat(paths.dashboardFile)
    .then(() => true)
    .catch(() => false);
  if (!hasDashboard) {
    console.error('No dashboard yet — run: npm run build');
    process.exitCode = 1;
    return;
  }

  const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.md': 'text/markdown; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain; charset=utf-8'
  };

  const server = http.createServer(async (request, response) => {
    try {
      const url = new URL(request.url, `http://${request.headers.host || host}`);
      let pathname;
      try {
        pathname = decodeURIComponent(url.pathname);
      } catch {
        pathname = url.pathname;
      }
      if (pathname === '/') pathname = '/index.html';

      let baseDir = paths.siteDir;
      let relative = pathname;
      if (pathname === '/api/skills.json') {
        baseDir = paths.skillsDir;
        relative = '/index.json';
      } else if (pathname === '/api/library.json') {
        baseDir = paths.libraryDir;
        relative = '/index.json';
      } else if (pathname.startsWith('/skills/')) {
        baseDir = paths.skillsDir;
        relative = pathname.slice('/skills'.length);
      } else if (pathname.startsWith('/library/')) {
        baseDir = paths.libraryDir;
        relative = pathname.slice('/library'.length);
      }

      const baseResolved = path.resolve(baseDir);
      let filePath = path.resolve(baseDir, `.${relative}`);
      if (filePath !== baseResolved && !filePath.startsWith(baseResolved + path.sep)) {
        response.writeHead(403, { 'content-type': 'text/plain; charset=utf-8' });
        response.end('Forbidden');
        return;
      }

      const stats = await fs.stat(filePath).catch(() => null);
      if (stats?.isDirectory()) filePath = path.join(filePath, 'index.html');

      const body = await fs.readFile(filePath).catch(() => null);
      if (!body) {
        response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
        response.end('Not found');
        return;
      }

      response.writeHead(200, {
        'content-type': contentTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
        'cache-control': 'no-store'
      });
      response.end(body);
    } catch {
      response.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' });
      response.end('Server error');
    }
  });

  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, host, resolve);
  });

  console.log(`SEO skills dashboard: http://${host}:${port}/`);
  console.log(`PID: ${process.pid}`);
  console.log('Press Ctrl+C to stop.');

  process.on('SIGINT', () => {
    server.close(() => process.exit(0));
  });
}

async function commandSchedule(values, positionals) {
  const action = positionals[1] || 'show';
  const time = values.time || '06:00';

  if (action === 'install') {
    const result = await installDaily(time);
    console.log('');
    console.log(result.message);
    console.log('');
    return;
  }
  if (action === 'remove') {
    const result = await removeDaily();
    console.log(result.message);
    return;
  }
  if (action === 'loop') {
    await runLoop(time);
    return;
  }
  if (action === 'show') {
    const result = await showSchedule();
    console.log(result.message);
    return;
  }
  console.error(`Unknown schedule action "${action}" — use install, remove, show or loop.`);
  process.exitCode = 1;
}

async function main() {
  let parsed;
  try {
    parsed = parseArgs({
      args: process.argv.slice(2),
      options: OPTIONS,
      allowPositionals: true,
      strict: true
    });
  } catch (error) {
    console.error(error.message);
    console.error('Run "node src/cli.js help" for usage.');
    process.exitCode = 1;
    return;
  }

  const { values, positionals } = parsed;
  const command = positionals[0] || (values.help ? 'help' : 'help');
  if (values.quiet) setLogLevel('warn');
  if (values.help || command === 'help' || command === '--help') {
    console.log(HELP);
    return;
  }

  switch (command) {
    case 'update':
      await commandUpdate(values);
      break;
    case 'build':
      await commandBuild();
      break;
    case 'status':
      await commandStatus();
      break;
    case 'skills':
      await commandSkills(values);
      break;
    case 'search':
      await commandSearch(values, positionals);
      break;
    case 'library':
      await commandLibrary(values, positionals);
      break;
    case 'collect':
      await commandCollect(values);
      break;
    case 'health':
      await commandHealth(values);
      break;
    case 'enrich':
      await commandEnrich(values);
      break;
    case 'doctor':
      await commandDoctor();
      break;
    case 'serve':
      await commandServe(values);
      break;
    case 'schedule':
      await commandSchedule(values, positionals);
      break;
    default:
      console.error(`Unknown command "${command}".`);
      console.error('Run "node src/cli.js help" for usage.');
      process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
});
