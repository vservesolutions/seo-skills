/** Render the knowledge base into SKILL.md files, an index and a dashboard. */

import fs from 'node:fs/promises';
import path from 'node:path';
import { ensureDir } from './config.js';
import { platformLabel } from './skill-library.js';
import { isActionable, SEO_TERMS } from './summarize.js';
import { normalizeWhitespace, sentences, similarity, tokens, truncateAtWord } from './text.js';

const AVOID_PATTERN = /^(avoid|do not|don'?t|never|beware|stop|skip)\b/i;

function isoDay(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toISOString().slice(0, 10);
}

function recency(dateValue, now) {
  const date = new Date(dateValue || 0);
  if (Number.isNaN(date.getTime())) return 0;
  const days = (now.getTime() - date.getTime()) / 86_400_000;
  return Math.max(0, 1 - days / 900);
}

function firstSentence(text, max = 220) {
  const value = sentences(text)[0] || normalizeWhitespace(text);
  return truncateAtWord(value, max);
}

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function frontmatterValue(value) {
  return `"${String(value ?? '').replace(/"/g, '\\"').replace(/\s+/g, ' ').trim()}"`;
}

function confidenceFor(count, sourceCount) {
  if (count >= 15 && sourceCount >= 4) return 'high';
  if (count >= 5 && sourceCount >= 2) return 'medium';
  if (count >= 1) return 'low';
  return 'none';
}

function seoTermCount(text) {
  let hits = 0;
  for (const token of tokens(text)) if (SEO_TERMS.has(token)) hits++;
  return hits;
}

function collectPoints(findings, now) {
  const pool = [];
  for (const finding of findings) {
    // Changelogs and Q&A threads inform the news feed, not the practice list.
    if (finding.type === 'discussion' || finding.type === 'release') continue;
    // Short recap blurbs rarely contain verifiable technique detail.
    if ((finding.wordCount || 0) < 250) continue;
    for (const point of finding.keyPoints || []) {
      const text = normalizeWhitespace(point);
      if (!text || text.length < 40) continue;
      // Only advice, or statements dense with SEO terminology, belong here.
      if (!isActionable(text) && seoTermCount(text) < 2) continue;
      const action = isActionable(text) ? 0.18 : 0;
      // Deeper articles (full text fetched) yield better-scoped practices than
      // short feed excerpts, so prefer them when scores are close.
      const depth = (finding.wordCount || 0) >= 400 ? 0.15 : 0;
      pool.push({
        text,
        findingId: finding.id,
        date: finding.publishedAt || finding.firstSeen || finding.fetchedAt || null,
        source: finding.source || 'unknown',
        url: finding.url,
        score:
          (Number(finding.authority ?? 3) / 5) * 0.32 +
          recency(finding.publishedAt, now) * 0.5 +
          action +
          depth
      });
    }
  }

  pool.sort((a, b) => b.score - a.score);
  const doPoints = [];
  const avoidPoints = [];
  const seen = [];
  const perFinding = new Map();
  for (const point of pool) {
    // Two practices per article keeps skills broad instead of source-dominated.
    const used = perFinding.get(point.findingId) || 0;
    if (used >= 2) continue;
    if (seen.some((kept) => similarity(kept, point.text) > 0.7)) continue;
    seen.push(point.text);
    if (AVOID_PATTERN.test(point.text)) {
      if (avoidPoints.length < 8) {
        avoidPoints.push(point);
        perFinding.set(point.findingId, used + 1);
      }
    } else if (doPoints.length < 20) {
      doPoints.push(point);
      perFinding.set(point.findingId, used + 1);
    }
    if (doPoints.length >= 20 && avoidPoints.length >= 8) break;
  }
  return { doPoints, avoidPoints };
}

function pointLine(point, index) {
  const date = isoDay(point.date);
  const attribution = date ? `${point.source}, ${date}` : point.source;
  return `${index}. ${point.text} — *${attribution}*`;
}

/** A finding belongs to a skill when that skill is among its topics. */
function hasTopic(finding, topicId) {
  return (finding.topics || []).some((topic) => topic.id === topicId);
}

function buildSkillMarkdown(topic, findings, now) {
  const topicFindings = findings.filter((finding) => hasTopic(finding, topic.id));
  const sorted = [...topicFindings].sort((a, b) => {
    const left = new Date(a.publishedAt || a.firstSeen || 0).getTime();
    const right = new Date(b.publishedAt || b.firstSeen || 0).getTime();
    return right - left;
  });
  const sources = [...new Set(topicFindings.map((finding) => finding.source).filter(Boolean))];
  const { doPoints, avoidPoints } = collectPoints(topicFindings, now);
  const lastUpdated = sorted
    .map((finding) => isoDay(finding.publishedAt || finding.firstSeen))
    .filter(Boolean)
    .sort()
    .at(-1) || isoDay(now.toISOString());
  const confidence = confidenceFor(topicFindings.length, sources.length);
  const coverage = sorted
    .map((finding) => isoDay(finding.publishedAt))
    .filter(Boolean)
    .sort();

  const lines = [];
  lines.push('---');
  lines.push(`name: seo-${topic.id}`);
  lines.push(`description: ${frontmatterValue(`${topic.description} Auto-generated from ${topicFindings.length} findings across ${sources.length} sources.`)}`);
  lines.push(`last_updated: ${lastUpdated}`);
  lines.push(`findings: ${topicFindings.length}`);
  lines.push(`sources: ${sources.length}`);
  lines.push(`confidence: ${confidence}`);
  lines.push('---');
  lines.push('');
  lines.push(`# ${topic.title}`);
  lines.push('');
  lines.push(topic.description);
  lines.push('');
  lines.push('## When to use');
  lines.push('');
  lines.push(topic.whenToUse || 'Use when working on this area of SEO.');
  lines.push('');

  lines.push('## Core practices');
  lines.push('');
  if (doPoints.length) {
    doPoints.forEach((point, index) => lines.push(pointLine(point, index + 1)));
  } else if (topicFindings.length) {
    lines.push(
      `_No verified practices yet: ${topicFindings.length} finding(s) exist, but none contain detailed, actionable guidance. Practices appear as sources publish in-depth articles._`
    );
  } else {
    lines.push('_No findings yet for this topic. Run `npm run update` to collect sources._');
  }
  lines.push('');

  if (avoidPoints.length) {
    lines.push('## Pitfalls to avoid');
    lines.push('');
    avoidPoints.forEach((point, index) => lines.push(pointLine(point, index + 1)));
    lines.push('');
  }

  lines.push('## Recent developments');
  lines.push('');
  if (sorted.length) {
    for (const finding of sorted.slice(0, 10)) {
      const date = isoDay(finding.publishedAt || finding.firstSeen);
      const detail = firstSentence(finding.summary || '', 240);
      const meta = [date, finding.source].filter(Boolean).join(' · ');
      lines.push(`- **${finding.title || 'Untitled'}**${meta ? ` — ${meta}` : ''}${detail ? ` — ${detail}` : ''} ([link](${finding.url}))`);
    }
  } else {
    lines.push('_No findings yet._');
  }
  lines.push('');

  lines.push('## References');
  lines.push('');
  const references = [];
  const seenUrls = new Set();
  for (const finding of sorted) {
    if (seenUrls.has(finding.url)) continue;
    seenUrls.add(finding.url);
    references.push(finding);
    if (references.length >= 12) break;
  }
  if (references.length) {
    for (const reference of references) {
      const date = isoDay(reference.publishedAt || reference.firstSeen);
      lines.push(`- [${reference.title || reference.url}](${reference.url}) — ${reference.source}${date ? ` · ${date}` : ''}`);
    }
  } else {
    lines.push('_No references yet._');
  }
  lines.push('');

  lines.push('## How this skill stays current');
  lines.push('');
  lines.push(`- Regenerated on ${isoDay(now.toISOString())} by \`npm run update\` from the local knowledge base (\`data/findings.jsonl\`).`);
  if (coverage.length) {
    lines.push(`- Coverage window: ${coverage[0]} → ${coverage.at(-1)}.`);
  }
  lines.push(`- ${topicFindings.length} findings from ${sources.length} sources; confidence is **${confidence}**.`);
  lines.push('- Add sources in `config/sources.json`, topics in `config/topics.json`, then run `npm run update`.');
  lines.push('');

  return lines.join('\n');
}

function buildIndexMarkdown(skills, now, findingsCount) {
  const lines = [];
  lines.push('# SEO Skills Index');
  lines.push('');
  lines.push(
    `Generated ${isoDay(now.toISOString())}. ${skills.length} skills across ${skills.filter((skill) => !skill.parent).length} categories, from ${findingsCount} findings.`
  );
  lines.push('');
  lines.push('A category skill aggregates every finding in its area; sub-skills go deeper where evidence exists.');
  lines.push('');
  const byParent = new Map();
  for (const skill of skills) {
    const key = skill.parent || skill.slug;
    if (!byParent.has(key)) byParent.set(key, []);
    byParent.get(key).push(skill);
  }

  for (const category of skills.filter((skill) => !skill.parent)) {
    const entries = byParent.get(category.slug) || [category];
    lines.push(`## ${category.title} · ${category.findings} findings`);
    lines.push('');
    lines.push('| Skill | What it covers | Findings | Updated | Confidence |');
    lines.push('| --- | --- | ---: | --- | --- |');
    for (const skill of entries) {
      const name = skill.parent ? `↳ ${skill.title}` : skill.title;
      lines.push(`| [${name}](${skill.slug}/SKILL.md) | ${skill.description} | ${skill.findings} | ${skill.findings ? skill.lastUpdated : '—'} | ${skill.confidence} |`);
    }
    lines.push('');
  }
  lines.push('');
  lines.push('Machine-readable: [`index.json`](index.json).');
  lines.push('');
  return lines.join('\n');
}

/**
 * Write one SKILL.md per topic plus INDEX.md / index.json.
 * @returns {{skills: Array<object>, generatedAt: string}}
 */
export async function renderSkills(findings, topics, { skillsDir, now = new Date() } = {}) {
  await ensureDir(skillsDir);
  const skills = [];

  for (const topic of topics) {
    const topicFindings = findings.filter((finding) => hasTopic(finding, topic.id));
    // Sub-skills only get a file when there is evidence; categories always exist.
    if (topic.parent && !topicFindings.length) continue;
    const sources = [...new Set(topicFindings.map((finding) => finding.source).filter(Boolean))];
    const lastUpdated =
      topicFindings
        .map((finding) => isoDay(finding.publishedAt || finding.firstSeen))
        .filter(Boolean)
        .sort()
        .at(-1) || isoDay(now.toISOString());

    const markdown = buildSkillMarkdown(topic, findings, now);
    const dir = path.join(skillsDir, topic.id);
    await ensureDir(dir);
    await fs.writeFile(path.join(dir, 'SKILL.md'), markdown, 'utf8');

    skills.push({
      slug: topic.id,
      name: `seo-${topic.id}`,
      title: topic.title,
      description: topic.description,
      whenToUse: topic.whenToUse || '',
      path: `skills/${topic.id}/SKILL.md`,
      parent: topic.parent || null,
      findings: topicFindings.length,
      sources: sources.length,
      lastUpdated,
      confidence: confidenceFor(topicFindings.length, sources.length)
    });
  }

  const index = {
    generatedAt: now.toISOString(),
    counts: {
      skills: skills.length,
      findings: findings.length,
      sources: new Set(findings.map((finding) => finding.sourceId || finding.source)).size
    },
    skills
  };

  await fs.writeFile(path.join(skillsDir, 'index.json'), JSON.stringify(index, null, 2) + '\n', 'utf8');
  await fs.writeFile(path.join(skillsDir, 'INDEX.md'), buildIndexMarkdown(skills, now, findings.length), 'utf8');

  // Keep the folder in step with index.json: a topic that loses its last finding
  // would otherwise leave a stale, unreferenced skill directory behind.
  const rendered = new Set(skills.map((skill) => skill.slug));
  for (const entry of await fs.readdir(skillsDir, { withFileTypes: true })) {
    if (!entry.isDirectory() || rendered.has(entry.name)) continue;
    await fs.rm(path.join(skillsDir, entry.name), { recursive: true, force: true });
  }

  return index;
}

/** Render the self-contained local dashboard. */
export async function renderDashboard({ findings, skillsIndex, sourcesCount, dashboardFile, now = new Date(), library = null }) {
  const skills = skillsIndex.skills || [];
  // The dashboard is an SEO surface: unclassified items stay searchable in the
  // knowledge base but would only add noise here.
  const latest = findings
    .filter((finding) => finding.primaryTopic)
    .sort(
      (a, b) =>
        new Date(b.publishedAt || b.firstSeen || 0).getTime() -
        new Date(a.publishedAt || a.firstSeen || 0).getTime()
    )
    .slice(0, 60);

  const skillCard = (skill) => {
    const search = esc(`${skill.title} ${skill.description} ${skill.whenToUse}`.toLowerCase());
    const badge = skill.parent ? 'sub-skill' : `${skill.confidence} confidence`;
    return `<a class="card" href="../${esc(skill.path)}" data-search="${search}">
  <span class="badge">${esc(badge)}</span>
  <h3>${esc(skill.title)}</h3>
  <p>${esc(skill.description)}</p>
  <footer><span>${skill.findings} finding${skill.findings === 1 ? '' : 's'}</span><span>${skill.sources} source${skill.sources === 1 ? '' : 's'}</span><span>${skill.findings ? esc(skill.lastUpdated) : 'no data yet'}</span></footer>
</a>`;
  };

  const skillCategories = skills.filter((skill) => !skill.parent);
  const shortLabel = (title) => String(title).split(/[:–—(]/)[0].trim();

  const skillTabs = skillCategories.length
    ? `<div class="tabs" data-tabgroup="skills" role="tablist" aria-label="Skill categories">
${skillCategories
  .map(
    (category) => `  <button class="tab" type="button" role="tab" data-category="${esc(category.slug)}">${esc(shortLabel(category.title))} <span class="count">${skills.filter((skill) => skill.slug === category.slug || skill.parent === category.slug).length}</span></button>`
  )
  .join('\n')}
  <button class="tab" type="button" role="tab" data-category="all">All <span class="count">${skills.length}</span></button>
</div>`
    : '';

  const skillGroups = skillCategories
    .map((category) => {
      const children = skills.filter((skill) => skill.parent === category.slug);
      return `      <div class="group" data-tabgroup="skills" data-category="${esc(category.slug)}">
        <h3 class="group-title">${esc(category.title)} <span class="count">${children.length + 1} skill${children.length ? 's' : ''} · ${category.findings} finding${category.findings === 1 ? '' : 's'}</span></h3>
        <div class="grid">
${[category, ...children].map(skillCard).join('\n')}
        </div>
      </div>`;
    })
    .join('\n');

  const librarySkills = library?.skills || [];
  const libraryGroups = (library?.categories || [])
    .map((category) => ({
      ...category,
      skills: librarySkills.filter((skill) => skill.category === category.id)
    }))
    .filter((category) => category.skills.length);

  const libraryTabs = libraryGroups.length
    ? `<div class="tabs" data-tabgroup="library" role="tablist" aria-label="Library categories">
${libraryGroups
  .map(
    (group) => `  <button class="tab" type="button" role="tab" data-category="${esc(group.id)}">${esc(group.title)} <span class="count">${group.skills.length}</span></button>`
  )
  .join('\n')}
  <button class="tab" type="button" role="tab" data-category="all">All <span class="count">${librarySkills.length}</span></button>
</div>`
    : '';

  const libraryCard = (skill) => {
    const local = skill.hasContent && skill.file;
    const href = local ? `../${skill.file}` : skill.url;
    const search = esc(
      `${skill.name} ${skill.description} ${skill.repo} ${skill.categoryTitle} ${(skill.platforms || []).map(platformLabel).join(' ')}`.toLowerCase()
    );
    const platforms = (skill.platforms || []).map(platformLabel).join(' · ') || 'Unspecified';
    return `<a class="card" href="${esc(href)}"${local ? '' : ' target="_blank" rel="noreferrer"'} data-search="${search}">
  <span class="badge">${esc(platforms)}</span>
  <h3>${esc(skill.name)}</h3>
  <p>${esc(truncateAtWord(skill.description, 200))}</p>
  <footer><span>${esc(skill.repo)}</span><span>${esc(skill.license)}${local ? '' : ' · link only'}</span><span>★ ${new Intl.NumberFormat('en-US').format(skill.stars || 0)}</span></footer>
</a>`;
  };

  const librarySection = libraryGroups.length
    ? `    <section id="library">
      <h2>Skill library <span class="count">${librarySkills.length} third-party skills · ${library.counts.packs} packs</span></h2>
      <p class="lede">SKILL.md packs published for Claude Code, Codex, Cursor and other agents, grouped by SEO category. Full text is copied only where the licence allows it.</p>
${libraryTabs}
${libraryGroups
  .map(
    (group) => `      <div class="group" data-tabgroup="library" data-category="${esc(group.id)}">
        <h3 class="group-title">${esc(group.title)} <span class="count">${group.skills.length}</span></h3>
        <div class="grid">
${group.skills.map(libraryCard).join('\n')}
        </div>
      </div>`
  )
  .join('\n')}
    </section>

`
    : '';

  const rows = latest
    .map((finding) => {
      const topics = (finding.topics || []).map((topic) => topic.id).join(' ');
      const search = esc(`${finding.title} ${finding.summary} ${topics} ${finding.source} ${(finding.tags || []).join(' ')}`.toLowerCase());
      const date = isoDay(finding.publishedAt || finding.firstSeen);
      const tagList = (finding.topics || [])
        .slice(0, 2)
        .map((topic) => `<span class="chip">${esc(topic.id)}</span>`)
        .join('');
      return `<li class="finding" data-search="${search}">
  <div class="finding-meta"><span>${esc(finding.source || '')}</span><span>${esc(date)}</span>${tagList}</div>
  <a class="finding-title" href="${esc(finding.url)}" target="_blank" rel="noreferrer">${esc(finding.title || finding.url)}</a>
  <p>${esc(firstSentence(finding.summary || '', 260))}</p>
</li>`;
    })
    .join('\n');

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SEO Skills — self-updating knowledge base</title>
<style>
  :root {
    color-scheme: light dark;
    --bg: #f5f7fc;
    --panel: #ffffff;
    --panel-2: #fafbff;
    --ink: #0e1320;
    --muted: #5a6474;
    --line: #e2e7f2;
    --accent: #2f5bff;
    --accent-2: #8b3ff0;
    --accent-3: #00a37a;
    --chip: #eef2fd;
    --shadow: 0 1px 2px rgba(14, 19, 32, .05), 0 14px 34px -20px rgba(14, 19, 32, .30);
    --shadow-lift: 0 2px 6px rgba(14, 19, 32, .06), 0 26px 54px -24px rgba(47, 91, 255, .45);
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #090c13;
      --panel: #121824;
      --panel-2: #0e131d;
      --ink: #e9eefb;
      --muted: #99a4b9;
      --line: #222a3a;
      --accent: #7ea2ff;
      --accent-2: #b48cff;
      --accent-3: #4fd1a5;
      --chip: #1a2231;
      --shadow: 0 1px 2px rgba(0, 0, 0, .5), 0 20px 44px -24px rgba(0, 0, 0, .9);
      --shadow-lift: 0 26px 56px -22px rgba(126, 162, 255, .30);
    }
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100vh;
    background: var(--bg);
    background-image:
      radial-gradient(900px 480px at 8% -8%, rgba(47, 91, 255, .16), transparent 62%),
      radial-gradient(760px 420px at 96% -4%, rgba(139, 63, 240, .14), transparent 60%);
    background-repeat: no-repeat;
    color: var(--ink);
    font: 16px/1.6 ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .wrap { max-width: 1120px; margin: 0 auto; padding: 40px 24px 72px; }
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-transform: uppercase;
    letter-spacing: .12em;
    font-size: 11px;
    font-weight: 700;
    color: var(--accent);
    background: var(--chip);
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 6px 12px;
    margin: 0 0 16px;
  }
  .eyebrow::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--accent-3); }
  h1 {
    font-size: clamp(34px, 5vw, 52px);
    line-height: 1.04;
    margin: 0 0 14px;
    letter-spacing: -.035em;
    background: linear-gradient(105deg, var(--ink) 10%, var(--accent) 62%, var(--accent-2));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .lede { color: var(--muted); max-width: 62ch; margin: 0 0 30px; font-size: 16.5px; }
  .stats { display: flex; flex-wrap: wrap; gap: 12px; margin: 0 0 40px; padding: 0; list-style: none; }
  .stats li {
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, var(--panel), var(--panel-2));
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 16px 18px 14px;
    min-width: 136px;
    box-shadow: var(--shadow);
  }
  .stats li::before { content: ""; position: absolute; inset: 0 0 auto; height: 3px; background: linear-gradient(90deg, var(--accent), var(--accent-2)); }
  .stats strong { display: block; font-size: 26px; line-height: 1.15; letter-spacing: -.02em; }
  .stats span { color: var(--muted); font-size: 12.5px; }
  h2 { font-size: 20px; letter-spacing: -.015em; margin: 0 0 16px; display: flex; align-items: center; gap: 10px; }
  h2::before { content: ""; width: 4px; height: 18px; border-radius: 2px; background: linear-gradient(180deg, var(--accent), var(--accent-2)); }
  .section-head { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: space-between; margin-bottom: 16px; }
  .section-head h2 { margin: 0; }
  input[type=search] {
    flex: 1 1 240px;
    max-width: 380px;
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 11px 14px;
    font: inherit;
    color: var(--ink);
    box-shadow: var(--shadow);
    transition: border-color .16s ease, box-shadow .16s ease;
  }
  input[type=search]::placeholder { color: var(--muted); }
  input[type=search]:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 4px var(--chip); }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
  .group + .group { margin-top: 28px; }
  .group-title { font-size: 15px; margin: 0 0 12px; color: var(--muted); font-weight: 600; }
  .count { color: var(--muted); font-weight: 400; font-size: 13px; letter-spacing: 0; }
  .card {
    display: flex;
    flex-direction: column;
    gap: 9px;
    background: linear-gradient(180deg, var(--panel), var(--panel-2));
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 18px;
    text-decoration: none;
    color: inherit;
    box-shadow: var(--shadow);
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  }
  .card:hover { transform: translateY(-3px); border-color: var(--accent); box-shadow: var(--shadow-lift); }
  .card:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
  .card h3 { margin: 0; font-size: 16.5px; line-height: 1.35; letter-spacing: -.01em; }
  .card p { margin: 0; color: var(--muted); font-size: 14px; }
  .card footer { display: flex; flex-wrap: wrap; gap: 10px; color: var(--muted); font-size: 12px; margin-top: auto; padding-top: 10px; border-top: 1px dashed var(--line); }
  .badge {
    align-self: flex-start;
    background: var(--chip);
    color: var(--accent);
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 3px 10px;
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .07em;
  }
  section + section { margin-top: 48px; }
  .jump { display: flex; flex-wrap: wrap; gap: 10px; margin: 0 0 32px; }
  .jump a {
    color: var(--accent);
    text-decoration: none;
    border: 1px solid var(--line);
    background: var(--panel);
    border-radius: 999px;
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 600;
    box-shadow: var(--shadow);
    transition: transform .16s ease, border-color .16s ease;
  }
  .jump a:hover { transform: translateY(-1px); border-color: var(--accent); }
  .tabs { display: flex; gap: 8px; overflow-x: auto; padding: 2px 2px 12px; margin: 0 0 18px; }
  .tab {
    flex: 0 0 auto;
    font: inherit;
    font-size: 13px;
    font-weight: 600;
    color: var(--muted);
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 7px 14px;
    cursor: pointer;
    white-space: nowrap;
    box-shadow: 0 1px 2px rgba(14, 19, 32, .04);
    transition: color .16s ease, border-color .16s ease, transform .16s ease;
  }
  .tab:hover { color: var(--accent); border-color: var(--accent); transform: translateY(-1px); }
  .tab[aria-selected="true"] {
    color: #fff;
    background: linear-gradient(120deg, var(--accent), var(--accent-2));
    border-color: transparent;
    box-shadow: 0 10px 24px -10px rgba(47, 91, 255, .6);
  }
  .tab[aria-selected="true"] .count { color: rgba(255, 255, 255, .78); }
  .group[hidden] { display: none; }
  .findings { list-style: none; margin: 0; padding: 0; border: 1px solid var(--line); border-radius: 16px; background: var(--panel); overflow: hidden; box-shadow: var(--shadow); }
  .finding { padding: 18px; border-bottom: 1px solid var(--line); transition: background .15s ease; }
  .finding:hover { background: var(--panel-2); }
  .finding:last-child { border-bottom: 0; }
  .finding-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; color: var(--muted); font-size: 12px; margin-bottom: 4px; }
  .finding-meta > span:first-child { color: var(--accent); font-weight: 600; }
  .chip { background: var(--chip); border: 1px solid var(--line); border-radius: 999px; padding: 2px 8px; font-size: 11px; }
  .finding-title { color: inherit; font-weight: 600; text-decoration: none; }
  .finding-title:hover { text-decoration: underline; }
  .finding p { margin: 6px 0 0; color: var(--muted); font-size: 14px; }
  #empty { color: var(--muted); padding: 20px 0; }
  footer.page { margin-top: 56px; color: var(--muted); font-size: 13px; border-top: 1px solid var(--line); padding-top: 20px; }
  @media (prefers-reduced-motion: reduce) {
    .card, .tab, .jump a, input[type=search], .finding { transition: none; }
    .card:hover, .tab:hover, .jump a:hover { transform: none; }
  }
  code { background: var(--chip); padding: 1px 6px; border-radius: 6px; font-size: 13px; }
</style>
</head>
<body>
<div class="wrap">
  <header>
    <p class="eyebrow">Self-updating knowledge base</p>
    <h1>SEO Skills</h1>
    <p class="lede">Collected from ${sourcesCount} SEO sources, deduplicated into one knowledge base, and rebuilt into agent-ready skills. Each daily run only fetches what changed.</p>
    <ul class="stats">
      <li><strong>${skills.length}</strong><span>generated skills</span></li>
      <li><strong>${findings.length}</strong><span>findings</span></li>
      <li><strong>${skills.filter((skill) => !skill.parent).length}</strong><span>categories</span></li>
      <li><strong>${librarySkills.length}</strong><span>library skills</span></li>
      <li><strong>${esc(isoDay(now.toISOString()))}</strong><span>last build</span></li>
    </ul>
  </header>

  <main>
    <nav class="jump">
      <a href="#skills">Generated skills · ${skills.length}</a>
      <a href="#library">Skill library · ${librarySkills.length}</a>
      <a href="findings.html">Latest findings · ${latest.length}</a>
    </nav>

    <section id="skills">
      <div class="section-head">
        <h2>Generated skills</h2>
        <input id="q" type="search" placeholder="Filter skills and library…" aria-label="Filter">
      </div>
${skillTabs}
      <div class="grid">
${skillGroups || '<p>No skills yet. Run <code>npm run update</code>.</p>'}
      </div>
    </section>

${librarySection}  </main>

  <footer class="page">
    Generated ${esc(now.toISOString())} · Run <code>npm run update</code> to refresh · <a href="../skills/index.json">index.json</a> · <a href="../library/INDEX.md">library index</a>
  </footer>
</div>
<script>
(function () {
  var input = document.getElementById('q');
  var items = Array.prototype.slice.call(document.querySelectorAll('[data-search]'));
  var bars = Array.prototype.slice.call(document.querySelectorAll('.tabs'));
  var groups = Array.prototype.slice.call(document.querySelectorAll('.group[data-category]'));

  function applyBar(bar, name) {
    bar.setAttribute('data-active', name);
    Array.prototype.forEach.call(bar.querySelectorAll('.tab'), function (tab) {
      tab.setAttribute('aria-selected', tab.getAttribute('data-category') === name ? 'true' : 'false');
    });
    var scope = bar.getAttribute('data-tabgroup');
    groups.forEach(function (group) {
      if (group.getAttribute('data-tabgroup') !== scope) return;
      group.hidden = name !== 'all' && group.getAttribute('data-category') !== name;
    });
  }

  bars.forEach(function (bar) {
    bar.addEventListener('click', function (event) {
      var tab = event.target.closest ? event.target.closest('.tab') : null;
      if (tab) applyBar(bar, tab.getAttribute('data-category'));
    });
    var selected = bar.querySelector('.tab[aria-selected="true"]') || bar.querySelector('.tab');
    if (selected) applyBar(bar, selected.getAttribute('data-category'));
  });

  input.addEventListener('input', function () {
    var query = input.value.trim().toLowerCase();
    // While searching, look across every category; clearing restores the active tab.
    if (query) {
      groups.forEach(function (group) { group.hidden = false; });
    } else {
      bars.forEach(function (bar) { applyBar(bar, bar.getAttribute('data-active') || 'all'); });
    }

    items.forEach(function (item) {
      var haystack = item.getAttribute('data-search') || '';
      item.hidden = Boolean(query) && haystack.indexOf(query) === -1;
    });

    if (query) {
      groups.forEach(function (group) {
        group.hidden = !group.querySelector('[data-search]:not([hidden])');
      });
    }
  });
})();
</script>
</body>
</html>
`;

  // Reuse the index page's <style> block so both pages share one stylesheet.
  const styleBlock = (html.match(/<style>[\s\S]*?<\/style>/) || [''])[0];

  const findingsHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Latest SEO findings — SEO Skills</title>
${styleBlock}
</head>
<body>
<div class="wrap">
  <header>
    <p class="eyebrow">Collected knowledge</p>
    <h1>Latest findings</h1>
    <p class="lede">The ${latest.length} most recent items from ${sourcesCount} SEO sources, newest first. Each one is deduplicated and classified, then used to rebuild the skills; the full history is in <code>data/findings.jsonl</code>.</p>
  </header>

  <main>
    <nav class="jump">
      <a href="index.html">← Skills and library</a>
      <a href="../skills/INDEX.md">Skill index</a>
    </nav>

    <section id="findings">
      <div class="section-head">
        <h2>All ${latest.length} findings</h2>
        <input id="q" type="search" placeholder="Filter findings…" aria-label="Filter findings">
      </div>
      <ul class="findings">
${rows || '<li class="finding"><p>No findings yet. Run <code>npm run update</code>.</p></li>'}
      </ul>
      <p id="empty" hidden>Nothing matches that filter.</p>
    </section>
  </main>

  <footer class="page">
    Generated ${esc(now.toISOString())} · <a href="index.html">SEO Skills dashboard</a> · <a href="../skills/index.json">index.json</a>
  </footer>
</div>
<script>
(function () {
  var input = document.getElementById('q');
  var empty = document.getElementById('empty');
  var items = Array.prototype.slice.call(document.querySelectorAll('[data-search]'));
  input.addEventListener('input', function () {
    var query = input.value.trim().toLowerCase();
    var shown = 0;
    items.forEach(function (item) {
      var match = !query || (item.getAttribute('data-search') || '').indexOf(query) !== -1;
      item.hidden = !match;
      if (match) shown++;
    });
    empty.hidden = shown > 0;
  });
})();
</script>
</body>
</html>`;

  await ensureDir(path.dirname(dashboardFile));
  await fs.writeFile(dashboardFile, html, 'utf8');
  await fs.writeFile(path.join(path.dirname(dashboardFile), 'findings.html'), findingsHtml, 'utf8');
}
