/**
 * Pack health: is the repository a skill came from still alive, maintained and licensed?
 *
 * The library copies text from other people's repositories, so a pack that is deleted or
 * archived silently rots the catalogue. This module checks repositories one at a time and
 * records the answer; nothing here deletes a skill, it only marks one dead or stale.
 */

import { readJson, writeJson } from './config.js';

/** No push in this long and a pack is shown as stale. */
export const STALE_DAYS = 540;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** True when the pack has not been pushed to for longer than `days`. */
export function isStale(pushedAt, now = new Date(), days = STALE_DAYS) {
  const then = Date.parse(pushedAt || '');
  if (!Number.isFinite(then)) return false;
  return now.getTime() - then > days * 86_400_000;
}

/** A repository that is gone or archived should not appear in the library. */
export function isDead(health) {
  if (!health) return false;
  return Boolean(health.archived) || health.status === 'missing';
}

/** Overlay freshly checked entries on the known ones. */
export function mergeHealth(previous = {}, updates = {}) {
  return { ...previous, ...updates };
}

export async function loadHealth(file) {
  const data = await readJson(file, {});
  return data && typeof data === 'object' && !Array.isArray(data) ? data : {};
}

export async function saveHealth(file, health) {
  const ordered = {};
  for (const repo of Object.keys(health).sort()) ordered[repo] = health[repo];
  await writeJson(file, ordered);
}

/**
 * Check up to `limit` repositories. Stops at the first rate-limit answer instead of
 * burning the rest of the run on failures.
 *
 * @returns {{updates: object, errors: string[], checked: number, rateLimited: boolean}}
 */
export async function checkRepos(
  repos,
  { token = '', limit = 100, now = new Date(), fetchImpl = fetch, delayMs = 250 } = {}
) {
  const updates = {};
  const errors = [];
  let checked = 0;
  let rateLimited = false;

  for (const repo of repos.slice(0, Math.max(0, limit))) {
    const headers = {
      accept: 'application/vnd.github+json',
      'user-agent': 'SEOSkillsBot/1.0 (+local SEO research collector)'
    };
    if (token) headers.authorization = `Bearer ${token}`;
    try {
      const response = await fetchImpl(`https://api.github.com/repos/${repo}`, {
        headers,
        signal: AbortSignal.timeout(20_000)
      });
      // A missing header is not the same as an exhausted quota: Number(null) is 0, which
      // would stop the loop after the first successful check.
      const remainingHeader = response.headers?.get?.('x-ratelimit-remaining');
      const remaining =
        remainingHeader === null || remainingHeader === undefined || remainingHeader === ''
          ? Number.NaN
          : Number(remainingHeader);

      if (response.status === 404 || response.status === 410) {
        updates[repo] = { status: 'missing', checkedAt: now.toISOString() };
      } else if (response.status === 403 || response.status === 429) {
        rateLimited = true;
        errors.push(`${repo}: GitHub rate limit`);
        break;
      } else if (!response.ok) {
        errors.push(`${repo}: HTTP ${response.status}`);
      } else {
        const json = await response.json();
        updates[repo] = {
          status: 'ok',
          archived: Boolean(json.archived),
          pushedAt: json.pushed_at || '',
          stars: Number(json.stargazers_count) || 0,
          license: json.license?.spdx_id || '',
          checkedAt: now.toISOString()
        };
        checked++;
      }

      if (Number.isFinite(remaining) && remaining <= 0) {
        rateLimited = true;
        break;
      }
      if (delayMs) await sleep(delayMs);
    } catch (error) {
      errors.push(`${repo}: ${error.message}`);
    }
  }

  return { updates, errors, checked, rateLimited };
}
