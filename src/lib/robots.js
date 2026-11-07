/** Minimal robots.txt support for full-text article fetches. */

import { fetchText } from './http.js';
import { createLogger } from './log.js';

const log = createLogger('robots');
const cache = new Map();
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function ruleMatches(pattern, path) {
  if (!pattern) return false;
  if (pattern === '/') return true;
  const anchored = pattern.endsWith('$');
  const raw = anchored ? pattern.slice(0, -1) : pattern;
  if (raw.includes('*')) {
    const body = raw
      .split('*')
      .map((piece) => escapeRegExp(piece))
      .join('.*');
    try {
      return new RegExp(`^${body}${anchored ? '$' : ''}`).test(path);
    } catch {
      return false;
    }
  }
  return path.startsWith(raw);
}

function parseRobots(text, uaToken) {
  const groups = [];
  let current = null;
  let expectingAgents = false;

  for (const rawLine of String(text ?? '').split(/\r?\n/)) {
    const line = rawLine.replace(/#.*$/, '').trim();
    if (!line) continue;
    const [rawKey, ...rest] = line.split(':');
    if (!rawKey || rest.length === 0) continue;
    const key = rawKey.trim().toLowerCase();
    const value = rest.join(':').trim();

    if (key === 'user-agent') {
      if (!current || !expectingAgents) {
        current = { agents: new Set(), rules: [] };
        groups.push(current);
        expectingAgents = true;
      }
      current.agents.add(value.toLowerCase());
      continue;
    }
    expectingAgents = false;
    if (!current) continue;
    if (key === 'allow') current.rules.push({ allow: true, path: value });
    if (key === 'disallow') current.rules.push({ allow: false, path: value });
  }

  const token = String(uaToken || '').toLowerCase();
  const matching = groups.filter(
    (group) => group.agents.has('*') || [...group.agents].some((agent) => agent && token.includes(agent))
  );
  // A specific group overrides the wildcard group entirely.
  const specific = matching.filter((group) => !group.agents.has('*') || group.agents.size > 1);
  const chosen = specific.length ? specific : matching;
  return chosen.flatMap((group) => group.rules);
}

async function rulesFor(origin, userAgent, timeoutMs) {
  const cached = cache.get(origin);
  if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) return cached.rules;

  let rules = [];
  try {
    const response = await fetchText(new URL('/robots.txt', origin).toString(), {
      timeoutMs,
      retries: 0,
      accept: 'text/plain,*/*;q=0.5',
      maxBytes: 500_000
    });
    if (!response.notModified && response.status === 200) {
      rules = parseRobots(response.body, userAgent);
    }
  } catch (error) {
    // Missing or unreachable robots.txt means no restrictions.
    log.debug(`robots.txt unavailable for ${origin}: ${error.message}`);
  }

  cache.set(origin, { rules, fetchedAt: Date.now() });
  return rules;
}

/**
 * Is this URL crawlable for our user agent?
 * @returns {Promise<boolean>}
 */
export async function isCrawlable(url, { userAgent = 'SEOSkillsBot/1.0', timeoutMs = 10000 } = {}) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return false;
  }
  if (!/^https?:$/.test(parsed.protocol)) return false;

  const rules = await rulesFor(parsed.origin, userAgent, timeoutMs);
  if (!rules.length) return true;

  const path = parsed.pathname + parsed.search;
  let best = null;
  for (const rule of rules) {
    if (!rule.path) continue;
    if (!ruleMatches(rule.path, path)) continue;
    if (
      !best ||
      rule.path.length > best.path.length ||
      (rule.path.length === best.path.length && rule.allow && !best.allow)
    ) {
      best = rule;
    }
  }
  return best ? best.allow : true;
}
