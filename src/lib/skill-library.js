/**
 * Skill library: collect published third-party SEO agent skills.
 *
 * Articles are what search engines published; this module is for what people
 * published *for agents* — SKILL.md packs for Claude Code, Codex, Cursor and
 * friends. They are discovered through curated indexes and GitHub search,
 * fetched at their source, sorted into the same SEO taxonomy as the knowledge
 * base, and rendered into library/<category>/ for offline reading.
 *
 * Licence rule: full text is copied only from permissively licensed packs
 * (with attribution). Everything else is catalogued by name, description and
 * link, so nothing is redistributed without a grant.
 */

import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

import { ensureDir, readJson, writeJson } from './config.js';
import { fetchText } from './http.js';
import { createLogger, sleep } from './log.js';
import { normalizeWhitespace, truncateAtWord } from './text.js';

const log = createLogger('library');

import { isDead, isStale } from './health.js';

export const FALLBACK_CATEGORY = { id: 'general-seo', title: 'General SEO' };

const PERMISSIVE_LICENSES = new Map(
  [
    'mit',
    'apache-2.0',
    'bsd-2-clause',
    'bsd-3-clause',
    'isc',
    'cc0-1.0',
    'cc-by-4.0',
    'unlicense',
    '0bsd'
  ].map((license) => [license, license === 'apache-2.0' ? 'Apache-2.0' : license.toUpperCase()])
);

/** Curated list sections that imply a topic when the skill text is thin. */
const SECTION_TOPICS = {
  'technical seo and auditing': 'technical-crawling-indexing',
  'geo, aeo and ai visibility': 'ai-search-geo',
  'content, keywords and publishing': 'keyword-research',
  'framework and language specific': 'technical-crawling-indexing'
};

const SKIP_PATH = /(^|\/)(node_modules|\.github|tests?|examples?|fixtures|vendor|third_party)\//i;

/** Distinct search-marketing concepts; generic packs also ship non-SEO skills. */
const SEO_CONCEPTS = [
  'seo',
  'search engine',
  'serp',
  'keyword',
  'backlink',
  'crawl',
  'indexing',
  'indexability',
  'sitemap',
  'schema',
  'structured data',
  'hreflang',
  'canonical',
  'redirect',
  'internal link',
  'on-page',
  'organic traffic',
  'ranking',
  'link building',
  'local seo',
  'google business',
  'ai overview',
  'ai search',
  'answer engine',
  'llms.txt',
  'generative engine',
  'content brief',
  'topical authority',
  'search visibility',
  'ai visibility',
  'search term',
  'search intent',
  'search console',
  'featured snippet',
  'meta description',
  'title tag',
  'core web vitals'
];

const PATH_HINTS = /(seo|geo|aeo|serp|keyword|backlink|crawl|index|sitemap|schema|hreflang|canonical|redirect|technical|audit|llms|ai-search|organic|ranking|content|local|link)/i;

/** Stricter than PATH_HINTS: words that alone prove an SEO skill. */
const NAME_HINTS = /(seo|geo|aeo|serp|keyword|backlink|crawl|sitemap|schema|hreflang|canonical|redirect|llms|ai-search|organic|ranking|search-console|search-visib|ai-visib|search-term|featured-snippet|core-web-vitals)/i;

/** Name/path signals beat keyword scoring, which broad descriptions skew. */
const CATEGORY_HINTS = [
  [/geo|aeo|ai-search|ai-visib|llms|answer-engine|generative/, 'ai-search-geo'],
  [/schema|structured-data|json-ld|rich-result/, 'structured-data-rich-results'],
  [/hreflang|international|multilingual|locale/, 'international-multilingual'],
  [/local|gmb|google-business|maps?\b/, 'local-seo'],
  [/backlink|link-building|digital-pr|outreach/, 'link-building'],
  [/keyword|serp|cluster|search-intent|niche/, 'keyword-research'],
  [/migrat|redirect|https\b/, 'migrations-redirects'],
  [/ecommerce|e-commerce|merchant|shopify|product-page/, 'ecommerce-seo'],
  [/content|brief|writer|blog|editorial|topical/, 'content-strategy-topical-authority'],
  [/technical|audit|crawl|index|sitemap|robots|canonical|core-web-vitals|performance|page-speed/, 'technical-crawling-indexing'],
  [/on-page|title|meta-description|content-optim/, 'on-page-seo'],
  [/analytics|report|measurement|tracking|dashboard/, 'analytics-measurement'],
  [/spam|penalty|recovery|algorithm/, 'algorithm-updates'],
  [/snippet|featured|ctr/, 'serp-features']
];

function seoConceptHits(text) {
  // Slugs write "search-visibility"; concepts are stored with spaces.
  const value = String(text || '')
    .toLowerCase()
    .replace(/[-_]+/g, ' ');
  let hits = 0;
  for (const concept of SEO_CONCEPTS) if (value.includes(concept)) hits++;
  return hits;
}

function categoryFor({ name, classification, meta, topicIds, parentOf }) {
  // Only the skill's own name: parent folders such as "seo-geo/" would
  // otherwise drag every skill in the pack into one category.
  const label = String(name).toLowerCase();
  for (const [pattern, id] of CATEGORY_HINTS) {
    if (pattern.test(label) && topicIds.has(id)) return id;
  }
  if (classification.primaryTopic) {
    // Library shelves are categories; a sub-skill is filed under its parent.
    return parentOf.get(classification.primaryTopic) || classification.primaryTopic;
  }
  const section = SECTION_TOPICS[String(meta.listCategory || '').toLowerCase()];
  return section || FALLBACK_CATEGORY.id;
}

function hash(value) {
  return crypto.createHash('sha256').update(String(value)).digest('hex').slice(0, 16);
}

export function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'skill';
}

function unquote(value) {
  const text = String(value ?? '').trim();
  if (!text) return '';
  const quoted = /^"(.*)"$/s.exec(text) || /^'(.*)'$/s.exec(text);
  const inner = quoted ? quoted[1] : text;
  return inner.replace(/\\"/g, '"').replace(/\\n/g, '\n').trim();
}

/** Minimal YAML frontmatter reader: scalars, quoted strings and block scalars. */
export function parseFrontmatter(markdown) {
  const text = String(markdown || '').replace(/^\uFEFF/, '');
  if (!/^---\r?\n/.test(text)) return { data: {}, body: text };
  const close = text.slice(4).search(/\r?\n---(\r?\n|$)/);
  if (close === -1) return { data: {}, body: text };
  const head = text.slice(4, 4 + close);
  const body = text
    .slice(4 + close)
    .replace(/^\r?\n---\r?\n?/, '')
    .replace(/^\r?\n/, '');
  const data = {};
  const lines = head.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim() || /^\s/.test(line)) continue;
    const match = /^([A-Za-z0-9_-]+)\s*:\s*(.*)$/.exec(line);
    if (!match) continue;
    const key = match[1];
    let value = match[2].trim();
    if (/^[>|][+-]?$/.test(value)) {
      const block = [];
      while (i + 1 < lines.length && (/^\s+\S/.test(lines[i + 1]) || !lines[i + 1].trim())) {
        block.push(lines[++i].replace(/^\s{2}/, ''));
      }
      value = block.join(value.startsWith('|') ? '\n' : ' ').trim();
    }
    data[key] = unquote(value);
  }
  return { data, body };
}

/** Markers that prove which agent a skill was written for. */
const PLATFORM_MARKERS = [
  ['claude-code', /((^|[/.\s])\.claude\/skills\b|\$\{CLAUDE_PLUGIN_ROOT\}|\/plugin marketplace add\b|\ballowed-tools\s*:|\buser-invocable\s*:|\bargument-hint\s*:|\bclaude (code|desktop|plugin)\b)/i],
  ['codex', /(^|[/.\s])\.codex\/|\bcodex (cli|plugin)\b|\bAGENTS\.md\b/i],
  ['cursor', /(^|[/.\s])\.cursor\/rules\b|\.cursorrules\b|\bcursor (ide|editor|rules)\b/i],
  ['openclaw', /(^|[/.\s])\.openclaw\b|\bopenclaw\b/i],
  ['gemini-cli', /\bgemini cli\b|(^|[/.\s])\.gemini\//i],
  ['windsurf', /(^|[/.\s])\.windsurf(rules)?\b|\bwindsurf\b/i],
  ['copilot', /copilot-instructions\.md|\bgithub copilot\b/i],
  ['antigravity', /\bantigravity\b/i]
];

export const PLATFORM_LABELS = {
  'claude-code': 'Claude Code',
  codex: 'Codex',
  cursor: 'Cursor',
  openclaw: 'OpenClaw',
  'gemini-cli': 'Gemini CLI',
  windsurf: 'Windsurf',
  copilot: 'Copilot',
  antigravity: 'Antigravity',
  'any-agent': 'Any agent',
  unspecified: 'Unspecified'
};

export function platformLabel(platform) {
  return PLATFORM_LABELS[platform] || platform;
}

/** Platforms proven by the skill's own instructions. */
export function detectPlatforms(markdown) {
  const text = String(markdown || '');
  return PLATFORM_MARKERS.filter(([, pattern]) => pattern.test(text)).map(([platform]) => platform);
}

/**
 * Declared support comes from the pack's own listing; detection comes from the
 * skill text. Keep both, but collapse "any agent" once a real platform is known.
 */
export function mergePlatforms(declared = [], detected = []) {
  const union = [...new Set([...declared, ...detected])];
  const specific = union.filter((platform) => platform !== 'any-agent');
  const platforms = specific.length ? specific : union;
  return {
    platforms: platforms.length ? platforms : ['unspecified'],
    platformSource: declared.length && detected.length ? 'declared+detected' : detected.length ? 'detected' : declared.length ? 'declared' : 'none'
  };
}

export function parsePlatforms(text) {
  const value = String(text || '').toLowerCase();
  const platforms = [];
  if (/claude/.test(value)) platforms.push('claude-code');
  if (/codex/.test(value)) platforms.push('codex');
  if (/cursor/.test(value)) platforms.push('cursor');
  if (/openclaw/.test(value)) platforms.push('openclaw');
  if (/antigravity/.test(value)) platforms.push('antigravity');
  if (/gemini/.test(value)) platforms.push('gemini-cli');
  if (/windsurf/.test(value)) platforms.push('windsurf');
  if (!platforms.length && /(any agent|ai agents?|portable|all agents)/.test(value)) platforms.push('any-agent');
  return [...new Set(platforms)];
}

/**
 * Parse the "Repo | covers | works with | licence | stars | updated" tables used
 * by curated SEO skill indexes. Rows without a github repo link are ignored.
 */
export function parseAwesomeTable(markdown) {
  const entries = [];
  let section = '';
  for (const line of String(markdown || '').split(/\r?\n/)) {
    const heading = /^##\s+(.+?)\s*$/.exec(line);
    if (heading) {
      section = heading[1].trim();
      continue;
    }
    if (!line.startsWith('|')) continue;
    const cells = line.split('|').map((cell) => cell.trim());
    const link = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/.exec(cells[1] || '');
    if (!link) continue;
    const repo = /^([\w.-]+)\/([\w.-]+)$/.exec(link[1].trim());
    if (!repo) continue;
    entries.push({
      repo: `${repo[1]}/${repo[2]}`,
      url: link[2],
      coverage: cells[2] || '',
      worksWith: cells[3] || '',
      platforms: parsePlatforms(cells[3] || ''),
      license: cells[4] || '',
      stars: Number.parseInt((cells[5] || '').replace(/[^\d]/g, ''), 10) || 0,
      repoUpdatedAt: (cells[6] || '').trim(),
      listCategory: section
    });
  }
  return entries;
}

export function normalizeLicense(value) {
  const raw = String(value || '').trim();
  if (!raw || /^(none|noassertion|unknown|other)$/i.test(raw)) {
    return { spdx: 'none', permissive: false };
  }
  const bare = raw.replace(/^licen[cs]e:\s*/i, '').trim();
  const known = PERMISSIVE_LICENSES.get(bare.toLowerCase());
  if (known) return { spdx: known, permissive: true };
  return { spdx: bare, permissive: false };
}

async function githubJson(url, token, attempt = 1) {
  const headers = {
    accept: 'application/vnd.github+json',
    'user-agent': 'SEOSkillsBot/1.0 (+local SEO research collector)'
  };
  if (token) headers.authorization = `Bearer ${token}`;
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(25_000) });
  const resource = response.headers.get('x-ratelimit-resource') || '';
  const remaining = Number(response.headers.get('x-ratelimit-remaining'));
  const payload = await response.json().catch(() => ({}));
  // A single GitHub 5xx should not cost a whole pack; retry once before giving up.
  if (!response.ok && response.status >= 500 && attempt < 2) {
    await sleep(2_000);
    return githubJson(url, token, attempt + 1);
  }
  if (!response.ok) {
    const error = new Error(
      response.status === 403 && remaining === 0
        ? 'GitHub API rate limit reached'
        : `GitHub API ${response.status}: ${payload.message || url}`
    );
    error.remaining = remaining;
    throw error;
  }
  return { json: payload, remaining, resource };
}

async function listSkillPaths(repo, token) {
  const { json, remaining } = await githubJson(
    `https://api.github.com/repos/${repo}/git/trees/HEAD?recursive=1`,
    token
  );
  const paths = (json.tree || [])
    // A pack can ship its skill as a single SKILL.md at the repository root.
    .filter((entry) => entry.type === 'blob' && /(^|\/)SKILL\.md$/i.test(entry.path))
    .map((entry) => entry.path)
    .filter((entry) => !SKIP_PATH.test(entry));
  return { paths, remaining };
}

function rawUrl(repo, skillPath) {
  const encoded = skillPath.split('/').map(encodeURIComponent).join('/');
  return `https://raw.githubusercontent.com/${repo}/HEAD/${encoded}`;
}

function blobUrl(repo, skillPath) {
  const encoded = skillPath.split('/').map(encodeURIComponent).join('/');
  return `https://github.com/${repo}/blob/HEAD/${encoded}`;
}

export async function readLibrary(file) {
  try {
    const raw = await fs.readFile(file, 'utf8');
    return raw
      .split('\n')
      .filter((line) => line.trim())
      .map((line) => {
        try {
          return JSON.parse(line);
        } catch {
          return null;
        }
      })
      .filter(Boolean);
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

export async function writeLibrary(file, records) {
  await ensureDir(path.dirname(file));
  const temp = `${file}.tmp`;
  const body = records.map((record) => JSON.stringify(record)).join('\n') + (records.length ? '\n' : '');
  await fs.writeFile(temp, body, 'utf8');
  await fs.rename(temp, file);
}

export function skillRecord({ repo, skillPath, markdown, meta, classify, settings, now, topicIds, parentOf = new Map() }) {
  const { data, body } = parseFrontmatter(markdown);
  const fallbackName = skillPath.split('/').at(-2) || 'skill';
  const name = normalizeWhitespace(data.name || fallbackName).slice(0, 120);
  // The skill's own text beats the pack blurb: otherwise a PDF or video skill
  // inside an SEO pack is described (and filtered) as if it were SEO.
  const description = truncateAtWord(
    normalizeWhitespace(data.description || firstBodyLine(body) || meta.coverage || ''),
    600
  );
  if (description.length < settings.minDescriptionChars) return null;

  // Skip the non-SEO skills that broad marketing packs also contain.
  const hits = seoConceptHits(`${name} ${description}`);
  const pathHint = PATH_HINTS.test(`${name} ${skillPath}`);
  // A name like "improve-search-visibility" is as strong a signal as a path.
  const nameHint = NAME_HINTS.test(name);
  if (hits < 2 && !(hits >= 1 && (pathHint || nameHint))) return null;

  const declared = normalizeLicense(data.license);
  const packLicense = normalizeLicense(meta.license);
  const license = declared.spdx !== 'none' ? declared : packLicense;
  const text = body.slice(0, settings.maxSkillBytes);

  let classification = { topics: [], primaryTopic: null, tags: [] };
  try {
    classification = classify({
      title: `${name} ${description.slice(0, 240)}`,
      text: `${description}\n${text.slice(0, 8000)}`
    });
  } catch {
    // Classification is advisory; an unreadable skill should not stop a run.
  }

  // Copying a skill needs either a clear topic or an SEO-shaped name; broad
  // marketing packs otherwise contribute content-writing and ads skills.
  if (!classification.primaryTopic && !NAME_HINTS.test(name)) return null;

  const category = categoryFor({ name, classification, meta, topicIds, parentOf });
  const owner = repo.split('/')[0];

  // The index's "works with" column is authoritative; when it is blank the
  // pack's own description often still names the agent.
  const declaredPlatforms = meta.platforms?.length
    ? meta.platforms
    : detectPlatforms(meta.coverage || '');
  const detectedPlatforms = detectPlatforms(markdown);
  const { platforms, platformSource } = mergePlatforms(declaredPlatforms, detectedPlatforms);

  return {
    id: `${repo}:${skillPath}`,
    slug: `${slugify(name)}-${slugify(owner)}`,
    repo,
    repoUrl: `https://github.com/${repo}`,
    packDescription: meta.coverage || '',
    path: skillPath,
    ref: 'HEAD',
    name,
    description,
    category,
    topics: (classification.topics || []).map((topic) => topic.id),
    platforms,
    platformDeclared: declaredPlatforms,
    platformDetected: detectedPlatforms,
    platformSource,
    license: license.spdx,
    licensePermissive: license.permissive,
    stars: Number(meta.stars) || 0,
    repoUpdatedAt: meta.repoUpdatedAt || '',
    listCategory: meta.listCategory || '',
    discoveredVia: meta.from || 'config',
    discoveryQuery: meta.query || '',
    url: blobUrl(repo, skillPath),
    rawUrl: rawUrl(repo, skillPath),
    contentSha: hash(normalizeWhitespace(text) || description),
    bytes: Buffer.byteLength(text, 'utf8'),
    hasContent: license.permissive,
    content: license.permissive ? text.trim() : '',
    firstSeen: now.toISOString(),
    lastSeen: now.toISOString(),
    checkedAt: now.toISOString()
  };
}

function firstBodyLine(body) {
  for (const line of String(body || '').split(/\r?\n/)) {
    const text = line.replace(/^#+\s*/, '').trim();
    if (text && !text.startsWith('<!--') && text.length > 20) return text;
  }
  return '';
}

function markDuplicates(records) {
  const bySha = new Map();
  const ordered = [...records].sort((a, b) => (b.stars || 0) - (a.stars || 0) || a.id.localeCompare(b.id));
  for (const record of ordered) {
    record.duplicateOf = null;
    if (!record.hasContent || !record.contentSha) continue;
    const primary = bySha.get(record.contentSha);
    if (primary) record.duplicateOf = primary.id;
    else bySha.set(record.contentSha, record);
  }
  return records;
}

/**
 * Fetch new skills. Bounded per run: GitHub's anonymous API allows ~60 calls an
 * hour, so repos are scanned in popularity order and revisited after rescanDays.
 */
export async function collectLibrary({
  paths,
  topics,
  classify,
  limit,
  skillsPerRepo,
  only = [],
  dryRun = false,
  now = new Date()
}) {
  const config = await readJson(paths.libraryConfigFile, null);
  if (!config) throw new Error(`No library config at ${paths.libraryConfigFile}`);
  const settings = {
    maxReposPerRun: 40,
    maxSkillsPerRepo: 60,
    maxSkillBytes: 120_000,
    rescanDays: 7,
    delayMs: 150,
    minDescriptionChars: 30,
    includeSearch: true,
    searchQueries: [],
    searchPerQuery: 100,
    searchPages: 2,
    searchDelayMs: 2000,
    codeSearchDelayMs: 6500,
    includeCodeSearch: true,
    codeSearchTerms: [],
    tokenEnv: 'GITHUB_TOKEN',
    ...(config.settings || {})
  };
  const token = process.env[settings.tokenEnv] || '';
  const topicIds = new Set(topics.map((topic) => topic.id));
  const parentOf = new Map(topics.filter((topic) => topic.parent).map((topic) => [topic.id, topic.parent]));
  const maxRepos = Math.max(1, Number(limit) || settings.maxReposPerRun);
  const perRepo = Math.max(1, Number(skillsPerRepo) || settings.maxSkillsPerRepo);

  const candidates = new Map();
  const reports = { lists: [], search: [], codeSearch: [], repos: [] };
  let rateRemaining = null;

  for (const list of config.lists || []) {
    try {
      const response = await fetchText(list.url, {
        timeoutMs: 25_000,
        maxBytes: 4_000_000,
        retries: 1,
        accept: 'text/plain,text/markdown;q=0.9,*/*;q=0.5'
      });
      const entries = parseAwesomeTable(response.body);
      for (const entry of entries) {
        const existing = candidates.get(entry.repo);
        // A curated row with richer metadata wins over a later sparse one.
        if (!existing || entry.stars > (existing.stars || 0)) {
          candidates.set(entry.repo, { ...entry, from: list.id || 'curated-list' });
        }
      }
      reports.lists.push({ id: list.id, ok: true, entries: entries.length });
    } catch (error) {
      reports.lists.push({ id: list.id, ok: false, error: error.message });
      log.warn(`list ${list.id}: ${error.message}`);
    }
  }

  // Discovery has to keep moving. A single page of one query bank returns the
  // same handful of packs every run, so the library plateaus; paging through
  // results and querying SKILL.md contents is what surfaces new packs.
  if (settings.includeSearch && !only.length) {
    const perPage = Math.max(1, Math.min(100, Number(settings.searchPerQuery) || 100));
    const pages = Math.max(1, Number(settings.searchPages) || 1);
    let rateLimited = false;
    for (const query of settings.searchQueries || []) {
      if (rateLimited) break;
      for (let page = 1; page <= pages; page++) {
        try {
          const { json, remaining, resource } = await githubJson(
            `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=${perPage}&page=${page}`,
            token
          );
          // Search has its own quota; only core calls say how many packs we can scan.
          if (Number.isFinite(remaining) && resource !== 'search') rateRemaining = remaining;
          const items = json.items || [];
          let added = 0;
          for (const item of items) {
            if (candidates.has(item.full_name)) continue;
            candidates.set(item.full_name, {
              repo: item.full_name,
              coverage: item.description || '',
              platforms: [],
              license: item.license?.spdx_id || '',
              stars: item.stargazers_count || 0,
              repoUpdatedAt: (item.pushed_at || '').slice(0, 10),
              listCategory: '',
              from: 'github-search',
              query
            });
            added++;
          }
          reports.search.push({ query, page, ok: true, added, found: items.length });
          if (items.length < perPage) break;
          // The search API allows 30 authenticated requests a minute.
          if (settings.searchDelayMs) await sleep(settings.searchDelayMs);
        } catch (error) {
          reports.search.push({ query, page, ok: false, error: error.message });
          if (/rate limit|secondary rate/i.test(error.message)) {
            rateLimited = true;
            break;
          }
        }
      }
    }
  }

  // Code search reaches packs that never describe themselves as SEO: the query
  // matches SKILL.md contents, and every hit names the repo that published it.
  if (settings.includeCodeSearch && token && !only.length) {
    for (const term of settings.codeSearchTerms || []) {
      try {
        const { json, remaining, resource } = await githubJson(
          `https://api.github.com/search/code?q=${encodeURIComponent(`filename:SKILL.md ${term}`)}&per_page=100`,
          token
        );
        if (Number.isFinite(remaining) && resource !== 'search') rateRemaining = remaining;
        let added = 0;
        for (const item of json.items || []) {
          const found = item.repository || {};
          const repo = found.full_name;
          if (!repo || candidates.has(repo)) continue;
          candidates.set(repo, {
            repo,
            coverage: found.description || '',
            platforms: [],
            license: found.license?.spdx_id || '',
            stars: found.stargazers_count || 0,
            repoUpdatedAt: (found.pushed_at || '').slice(0, 10),
            listCategory: '',
            from: 'github-code-search',
            query: term
          });
          added++;
        }
        reports.codeSearch.push({ term, ok: true, added });
      } catch (error) {
        // Code search is authenticated-only; without a token it is skipped.
        reports.codeSearch.push({ term, ok: false, error: error.message });
        if (/rate limit|secondary rate/i.test(error.message)) break;
      }
      // Code search allows 10 authenticated requests a minute.
      if (settings.codeSearchDelayMs) await sleep(settings.codeSearchDelayMs);
    }
  }

  for (const entry of config.repos || []) {
    const repo = typeof entry === 'string' ? entry : entry.repo;
    if (!repo || candidates.has(repo)) continue;
    candidates.set(repo, {
      repo,
      coverage: entry.coverage || '',
      platforms: entry.platforms || [],
      license: entry.license || '',
      stars: Number(entry.stars) || 0,
      repoUpdatedAt: '',
      listCategory: entry.category || '',
      from: 'config'
    });
  }

  const state = await readJson(paths.libraryStateFile, { repos: {} });
  const scanned = state.repos || {};
  const rescanMs = settings.rescanDays * 86_400_000;

  // A pack found once must stay in the queue: search results churn, and a pack
  // that falls out of them would otherwise never be refreshed or re-checked.
  for (const [repo, entry] of Object.entries(scanned)) {
    if (candidates.has(repo)) continue;
    candidates.set(repo, {
      repo,
      coverage: '',
      platforms: [],
      license: entry.license || '',
      stars: Number(entry.stars) || 0,
      repoUpdatedAt: '',
      listCategory: '',
      from: 'state'
    });
  }

  // `--repo` is an explicit request: scanning only discovery hits silently
  // skipped packs the caller named but this run had not rediscovered.
  for (const repo of only) {
    if (candidates.has(repo)) continue;
    const entry = scanned[repo] || {};
    candidates.set(repo, {
      repo,
      coverage: '',
      platforms: [],
      license: entry.license || '',
      stars: Number(entry.stars) || 0,
      repoUpdatedAt: '',
      listCategory: '',
      from: 'command-line'
    });
  }

  const due = (repo) => {
    const at = scanned[repo]?.scannedAt ? Date.parse(scanned[repo].scannedAt) : 0;
    return !at || now.getTime() - at > rescanMs;
  };

  const queue = [...candidates.values()]
    .filter((entry) => !only.length || only.includes(entry.repo))
    .sort((a, b) => {
      const aDue = due(a.repo);
      const bDue = due(b.repo);
      if (aDue !== bDue) return aDue ? -1 : 1;
      if (aDue) return (b.stars || 0) - (a.stars || 0) || a.repo.localeCompare(b.repo);
      return (
        Date.parse(scanned[a.repo]?.scannedAt || 0) - Date.parse(scanned[b.repo]?.scannedAt || 0) ||
        (b.stars || 0) - (a.stars || 0)
      );
    })
    .slice(0, maxRepos);

  const records = new Map((await readLibrary(paths.libraryFile)).map((record) => [record.id, record]));
  let added = 0;
  let refreshed = 0;

  outer: for (const candidate of queue) {
    if (Number.isFinite(rateRemaining) && rateRemaining <= 2) {
      reports.repos.push({ repo: candidate.repo, ok: false, error: 'skipped: GitHub rate limit' });
      break;
    }
    try {
      const { paths: skillPaths, remaining } = await listSkillPaths(candidate.repo, token);
      if (Number.isFinite(remaining)) rateRemaining = remaining;
      const selected = skillPaths
        .map((entry) => ({
          path: entry,
          score: seoConceptHits(`${entry} ${path.basename(path.dirname(entry))}`) + (PATH_HINTS.test(entry) ? 1 : 0)
        }))
        .sort(
          (a, b) =>
            b.score - a.score ||
            a.path.split('/').length - b.path.split('/').length ||
            a.path.localeCompare(b.path)
        )
        .slice(0, perRepo)
        .map((entry) => entry.path);

      let stored = 0;
      for (const skillPath of selected) {
        try {
          const response = await fetchText(rawUrl(candidate.repo, skillPath), {
            timeoutMs: 20_000,
            maxBytes: settings.maxSkillBytes * 2,
            retries: 1,
            accept: 'text/plain,text/markdown;q=0.9,*/*;q=0.5'
          });
          const record = skillRecord({
            repo: candidate.repo,
            skillPath,
            markdown: response.body,
            meta: candidate,
            classify,
            settings,
            now,
            topicIds,
            parentOf
          });
          if (!record) {
            // A previously stored skill that no longer qualifies is dropped.
            records.delete(`${candidate.repo}:${skillPath}`);
            continue;
          }
          const previous = records.get(record.id);
          if (previous) {
            record.firstSeen = previous.firstSeen || record.firstSeen;
            refreshed++;
          } else {
            added++;
          }
          records.set(record.id, record);
          stored++;
        } catch (error) {
          log.warn(`${candidate.repo}/${skillPath}: ${error.message}`);
        }
        if (settings.delayMs) await sleep(settings.delayMs);
      }

      // Files are deleted upstream; keep the catalogue in step with the pack.
      const present = new Set(skillPaths);
      let pruned = 0;
      for (const [id, record] of records) {
        if (record.repo === candidate.repo && !present.has(record.path)) {
          records.delete(id);
          pruned++;
        }
      }

      scanned[candidate.repo] = {
        scannedAt: now.toISOString(),
        skills: stored,
        pruned,
        paths: skillPaths.length,
        stars: candidate.stars || 0,
        license: normalizeLicense(candidate.license).spdx,
        discovery: candidate.from || ''
      };
      reports.repos.push({ repo: candidate.repo, ok: true, skills: stored, pruned, paths: skillPaths.length });
    } catch (error) {
      scanned[candidate.repo] = {
        ...(scanned[candidate.repo] || {}),
        lastError: error.message,
        failedAt: now.toISOString()
      };
      reports.repos.push({ repo: candidate.repo, ok: false, error: error.message });
      if (/rate limit/i.test(error.message)) break outer;
    }
  }

  const all = markDuplicates([...records.values()]);
  const active = all.filter((record) => !record.duplicateOf);

  if (!dryRun) {
    await writeLibrary(paths.libraryFile, all);
    await writeJson(paths.libraryStateFile, {
      updatedAt: now.toISOString(),
      rateRemaining,
      repos: scanned
    });
  }

  return {
    written: !dryRun,
    added,
    refreshed,
    total: all.length,
    active: active.length,
    duplicates: all.length - active.length,
    scannedRepos: reports.repos.filter((repo) => repo.ok).length,
    failedRepos: reports.repos.filter((repo) => !repo.ok).length,
    candidates: candidates.size,
    rateRemaining,
    reports
  };
}

function quote(value) {
  return `"${String(value ?? '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\s+/g, ' ').trim()}"`;
}

function skillFile(record, now) {
  const platformNames = (record.platforms || []).map(platformLabel).join(', ') || 'Unspecified';
  const header = [
    '---',
    `name: ${quote(record.name)}`,
    `description: ${quote(record.description)}`,
    ...(record.summary ? [`summary: ${quote(record.summary)}`] : []),
    `category: ${quote(record.category)}`,
    `platforms: [${(record.platforms || []).map(quote).join(', ')}]`,
    `platform_source: ${quote(record.platformSource || 'none')}`,
    `repo: ${quote(record.repo)}`,
    `repo_url: ${quote(record.repoUrl || `https://github.com/${record.repo}`)}`,
    `source: ${quote(record.url)}`,
    `raw_source: ${quote(record.rawUrl || '')}`,
    `ref: ${quote(record.ref || 'HEAD')}`,
    `discovered_via: ${quote(record.discoveredVia || 'config')}`,
    `license: ${quote(record.license)}`,
    `stars: ${record.stars || 0}`,
    `collected: ${quote(now.toISOString().slice(0, 10))}`,
    '---',
    '',
    `<!-- ${platformNames} skill · ${record.repo} · ${record.path} · ${record.license}`,
    `     Source: ${record.url}`,
    `     Detected by: ${record.platformSource || 'none'} · Regenerated on every run; edit the upstream skill, not this copy. -->`,
    ''
  ].join('\n');
  return `${header}\n${String(record.content || '').trim()}\n`;
}

function discoveryLabel(record) {
  if (record.discoveredVia === 'github-search') return 'GitHub search';
  if (record.discoveredVia === 'github-code-search') return 'GitHub code search';
  if (record.discoveredVia === 'config') return 'config';
  if (record.discoveredVia === 'state') return 'earlier run';
  if (record.discoveredVia === 'command-line') return 'command line';
  return 'curated list';
}

function indexRow(record) {
  const fileName = record.fileName || record.slug;
  const label = record.hasContent
    ? `[${record.name}](${record.category}/${fileName}.md)`
    : `[${record.name} ↗](${record.url})`;
  const description = truncateAtWord(record.summary || record.description, 160).replace(/\|/g, '\\|');
  const platforms = (record.platforms || []).map(platformLabel).join(', ') || 'Unspecified';
  const license = record.hasContent ? record.license : `${record.license} (link only)`;
  return `| ${label} | ${description} | ${platforms} | [${record.repo}](${record.repoUrl || `https://github.com/${record.repo}`}) | ${discoveryLabel(record)} | ${license} | ${record.stars || 0} |`;
}

/**
 * Recompute derived provenance fields from stored records without refetching.
 * Used to upgrade data collected before platform detection existed.
 */
/** Two skills share a group when their names differ only in punctuation or case. */
export function groupKey(name) {
  return String(name || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function compareCopies(a, b) {
  // Prefer a copy that can actually be handed over, then the most popular, then the freshest.
  if (Boolean(b.hasContent) !== Boolean(a.hasContent)) return b.hasContent ? 1 : -1;
  if ((b.stars || 0) !== (a.stars || 0)) return (b.stars || 0) - (a.stars || 0);
  const updated = (Date.parse(b.repoUpdatedAt || '') || 0) - (Date.parse(a.repoUpdatedAt || '') || 0);
  if (updated) return updated;
  return String(a.repo).localeCompare(String(b.repo));
}

/**
 * Group versions of the same skill and mark the best copy.
 *
 * "seo-audit" published by 46 different packs is one idea, not 46 ideas; the library shows
 * the best copy and keeps the others reachable from it.
 */
export function groupSkills(skills) {
  const groups = new Map();
  for (const skill of skills) {
    const key = groupKey(skill.name);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(skill);
  }
  for (const [key, members] of groups) {
    members.sort(compareCopies);
    members.forEach((skill, index) => {
      skill.group = key;
      skill.groupSize = members.length;
      skill.isPrimary = index === 0;
    });
  }
  return groups;
}

export function reindexLibrary(records) {
  for (const record of records) {
    record.repoUrl = record.repoUrl || `https://github.com/${record.repo}`;
    record.ref = record.ref || 'HEAD';
    record.discoveredVia = record.discoveredVia || 'config';
    record.discoveryQuery = record.discoveryQuery || '';
    let declared;
    if (Array.isArray(record.platformDeclared)) {
      declared = record.platformDeclared.length
        ? record.platformDeclared
        : detectPlatforms(record.packDescription || '');
    } else {
      // Records collected before platform tracking stored only the declared list.
      declared = record.platforms || [];
    }
    const detected = record.content ? detectPlatforms(record.content) : [];
    const merged = mergePlatforms(declared, detected);
    record.platformDeclared = declared;
    record.platformDetected = detected;
    record.platforms = merged.platforms;
    record.platformSource = merged.platformSource;
  }
  return records;
}

/** Render the library as category folders plus INDEX.md and index.json. */
export async function renderLibrary(records, topics, { libraryDir, now = new Date(), health = {} }) {
  const titles = new Map(topics.map((topic) => [topic.id, topic.title]));
  titles.set(FALLBACK_CATEGORY.id, FALLBACK_CATEGORY.title);

  const healthOf = (record) => health[record.repo] || null;
  // Skills from a deleted or archived pack are hidden; staleness is shown, not hidden.
  const active = records.filter((record) => !record.duplicateOf && !isDead(healthOf(record)));
  const hidden = records.filter((record) => !record.duplicateOf && isDead(healthOf(record))).length;
  for (const record of active) {
    const pack = healthOf(record);
    record.stale = Boolean(pack && pack.status === 'ok' && isStale(pack.pushedAt, now));
    record.repoPushedAt = pack?.pushedAt || record.repoUpdatedAt || '';
  }
  groupSkills(active);
  const groups = new Map();
  for (const record of active) {
    if (!groups.has(record.category)) groups.set(record.category, []);
    groups.get(record.category).push(record);
  }

  const ordered = [...topics.map((topic) => topic.id), FALLBACK_CATEGORY.id].filter((id) => groups.has(id));
  for (const id of groups.keys()) if (!ordered.includes(id)) ordered.push(id);

  await fs.rm(libraryDir, { recursive: true, force: true });
  await ensureDir(libraryDir);

  const skills = [];
  for (const id of ordered) {
    const dir = path.join(libraryDir, id);
    await ensureDir(dir);
    const entries = groups.get(id).sort((a, b) => (b.stars || 0) - (a.stars || 0) || a.name.localeCompare(b.name));
    const used = new Set();
    for (const record of entries) {
      record.file = '';
      if (record.hasContent) {
        // One author can publish two packs with the same skill name; keep both.
        const fileSlug = used.has(record.slug) ? `${record.slug}-${hash(record.id).slice(0, 6)}` : record.slug;
        used.add(fileSlug);
        record.fileName = fileSlug;
        const file = path.join(dir, `${fileSlug}.md`);
        await fs.writeFile(file, skillFile(record, now), 'utf8');
        record.file = path.relative(path.dirname(libraryDir), file).split(path.sep).join('/');
      }
      skills.push({
        name: record.name,
        slug: record.slug,
        description: record.description,
        summary: record.summary || '',
        category: record.category,
        categoryTitle: titles.get(record.category) || record.category,
        repo: record.repo,
        repoUrl: record.repoUrl || `https://github.com/${record.repo}`,
        path: record.path,
        url: record.url,
        rawUrl: record.rawUrl || '',
        ref: record.ref || 'HEAD',
        discoveredVia: record.discoveredVia || 'config',
        platformSource: record.platformSource || 'none',
        license: record.license,
        platforms: record.platforms || [],
        stars: record.stars || 0,
        repoUpdatedAt: record.repoUpdatedAt || '',
        hasContent: Boolean(record.hasContent),
        file: record.file,
        group: record.group,
        groupSize: record.groupSize || 1,
        isPrimary: record.isPrimary !== false,
        stale: Boolean(record.stale),
        repoPushedAt: record.repoPushedAt || ''
      });
    }
  }

  const categories = ordered.map((id) => ({
    id,
    title: titles.get(id) || id,
    count: groups.get(id).length
  }));

  const index = {
    generatedAt: now.toISOString(),
    counts: {
      skills: skills.length,
      groups: new Set(skills.map((skill) => skill.group)).size,
      hidden,
      stale: skills.filter((skill) => skill.stale).length,
      packs: new Set(skills.map((skill) => skill.repo)).size,
      fullText: skills.filter((skill) => skill.hasContent).length,
      categories: categories.length
    },
    categories,
    skills
  };

  const lines = [
    '# Skill library',
    '',
    `Third-party SEO agent skills collected from published packs, grouped by category.`,
    '',
    `Collected ${now.toISOString().slice(0, 10)} · ${index.counts.groups} distinct skills in ${index.counts.skills} versions · ${index.counts.packs} packs · ${index.counts.fullText} with full text.`,
    '',
    'One row per distinct skill name: further copies from other packs are listed on the dashboard card and in index.json.',
    '',
    'Each row records the agent the skill belongs to, the pack it came from, and how it was found. Full text is copied only from permissively licensed packs, with attribution in each file; other entries are catalogued and linked.',
    ''
  ];
  for (const category of categories) {
    lines.push(`## ${category.title} · ${category.count}`, '');
    lines.push('| Skill | What it does | Platform | Pack | Found via | Licence | ★ |');
    lines.push('| --- | --- | --- | --- | --- | --- | ---: |');
    for (const record of groups.get(category.id).sort((a, b) => (b.stars || 0) - (a.stars || 0)).filter((record) => record.isPrimary)) {
      lines.push(indexRow(record));
    }
    lines.push('');
  }
  await fs.writeFile(path.join(libraryDir, 'INDEX.md'), lines.join('\n'), 'utf8');
  await fs.writeFile(path.join(libraryDir, 'index.json'), JSON.stringify(index, null, 2) + '\n', 'utf8');

  return index;
}
