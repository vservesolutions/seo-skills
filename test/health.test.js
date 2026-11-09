import assert from 'node:assert/strict';
import test from 'node:test';

import { checkRepos, isDead, isStale, mergeHealth, STALE_DAYS } from '../src/lib/health.js';
import { groupSkills, groupKey } from '../src/lib/skill-library.js';

const now = new Date('2026-11-09T00:00:00Z');

function response(status, body = {}, headers = {}) {
  return {
    ok: status >= 200 && status < 300,
    status,
    headers: new Headers(headers),
    json: async () => body
  };
}

test('staleness is measured from the last push, not the collection date', () => {
  assert.equal(isStale('2026-11-01T00:00:00Z', now), false);
  assert.equal(isStale('2024-01-01T00:00:00Z', now), true);
  assert.equal(isStale('', now), false, 'a pack with no push date is not called stale');
  const exactly = new Date(now.getTime() - STALE_DAYS * 86_400_000).toISOString();
  assert.equal(isStale(exactly, now), false, 'the boundary itself is still fresh');
});

test('a pack is dead only when it is archived or gone', () => {
  assert.equal(isDead({ status: 'ok', archived: false }), false);
  assert.equal(isDead({ status: 'ok', archived: true }), true);
  assert.equal(isDead({ status: 'missing' }), true);
  assert.equal(isDead(undefined), false, 'an unchecked pack is not dead');
});

test('merging health keeps packs that were not rechecked', () => {
  const merged = mergeHealth({ 'a/b': { status: 'ok' } }, { 'c/d': { status: 'missing' } });
  assert.deepEqual(Object.keys(merged).sort(), ['a/b', 'c/d']);
});

test('names that differ only in punctuation or case share a group', () => {
  assert.equal(groupKey('SEO Audit'), groupKey('seo-audit'));
  assert.equal(groupKey('seo_audit'), groupKey('seo audit'));
  assert.notEqual(groupKey('seo-audit'), groupKey('technical-seo'));
});

test('grouping keeps the most useful copy and marks the rest as versions', () => {
  const skills = [
    { name: 'SEO Audit', repo: 'a/one', stars: 900, hasContent: false, repoUpdatedAt: '2026-01-01' },
    { name: 'seo-audit', repo: 'b/two', stars: 12, hasContent: true, repoUpdatedAt: '2025-01-01' },
    { name: 'seo_audit', repo: 'c/three', stars: 50, hasContent: true, repoUpdatedAt: '2026-06-01' },
    { name: 'technical-seo', repo: 'd/four', stars: 5, hasContent: true }
  ];
  const groups = groupSkills(skills);
  assert.equal(groups.size, 2);
  const audit = groups.get('seoaudit');
  assert.equal(audit.length, 3);
  assert.equal(audit[0].repo, 'c/three', 'full text first, then stars');
  assert.deepEqual(audit.map((skill) => skill.isPrimary), [true, false, false]);
  assert.deepEqual(audit.map((skill) => skill.groupSize), [3, 3, 3]);
  assert.equal(groups.get('technicalseo')[0].isPrimary, true);
});

test('a deleted pack is recorded as missing, an archived one keeps its metadata', async () => {
  const calls = [];
  const result = await checkRepos(['gone/repo', 'live/archived'], {
    now,
    delayMs: 0,
    fetchImpl: async (url, options) => {
      calls.push({ url, options });
      if (url.endsWith('gone/repo')) return response(404, { message: 'Not Found' });
      return response(200, {
        archived: true,
        pushed_at: '2023-05-01T00:00:00Z',
        stargazers_count: 12,
        license: { spdx_id: 'MIT' }
      });
    }
  });
  assert.equal(calls.length, 2);
  assert.equal(result.updates['gone/repo'].status, 'missing');
  assert.equal(result.updates['live/archived'].archived, true);
  assert.equal(result.updates['live/archived'].license, 'MIT');
  assert.equal(result.checked, 1);
  assert.equal(result.rateLimited, false);
  assert.equal(calls[0].options.headers.authorization, undefined, 'anonymous requests stay anonymous');
});

test('a rate-limit answer stops the run instead of failing every remaining pack', async () => {
  let calls = 0;
  const result = await checkRepos(['a/one', 'b/two', 'c/three'], {
    token: 'tok',
    now,
    delayMs: 0,
    fetchImpl: async (url) => {
      calls++;
      if (url.endsWith('a/one')) return response(200, { archived: false, pushed_at: '2026-10-01T00:00:00Z' });
      return response(403, { message: 'API rate limit exceeded' }, { 'x-ratelimit-remaining': '0' });
    }
  });
  assert.equal(calls, 2, 'stops at the first refusal');
  assert.equal(result.rateLimited, true);
  assert.equal(result.checked, 1);
  assert.match(result.errors[0], /rate limit/);
});
