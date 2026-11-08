import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { buildClassifier } from '../src/lib/classify.js';
import { loadTopics } from '../src/lib/config.js';
import { collectLibrary } from '../src/lib/skill-library.js';

const topics = await loadTopics();
const classify = buildClassifier(topics);

function response(body, headers) {
  return {
    ok: true,
    status: 200,
    headers: new Headers(headers),
    json: async () => body
  };
}

const repoSample = (repo) => ({
  full_name: repo,
  description: 'SEO agent skills',
  license: { spdx_id: 'MIT' },
  stargazers_count: 10,
  pushed_at: '2026-11-01T00:00:00Z'
});

/**
 * Discovery has to page through results and use code search, and it must not
 * mistake the search quota (which reports 0-1 remaining after a few calls) for
 * the core quota that decides how many packs can be scanned.
 */
test('paged repo search and code search both feed the pack queue', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'seo-library-'));
  const configFile = path.join(dir, 'skill-library.json');
  await fs.writeFile(
    configFile,
    JSON.stringify({
      settings: {
        searchQueries: ['seo agent skill'],
        // One result per page keeps both pages "full", so page 2 is fetched.
        searchPerQuery: 1,
        searchPages: 2,
        searchDelayMs: 0,
        codeSearchDelayMs: 0,
        codeSearchTerms: ['seo'],
        maxReposPerRun: 5,
        maxSkillsPerRepo: 5,
        delayMs: 0,
        minDescriptionChars: 30,
        tokenEnv: 'TEST_GITHUB_TOKEN'
      },
      lists: [],
      repos: []
    })
  );

  const seen = [];
  const original = globalThis.fetch;
  process.env.TEST_GITHUB_TOKEN = 'test-token';
  globalThis.fetch = async (url) => {
    const href = String(url);
    seen.push(href);
    if (href.includes('/search/repositories')) {
      const page = new URL(href).searchParams.get('page');
      const repo = page === '1' ? 'alpha/seo-skills' : 'beta/seo-skills';
      return response({ items: [repoSample(repo)] }, {
        'x-ratelimit-resource': 'search',
        'x-ratelimit-remaining': '1'
      });
    }
    if (href.includes('/search/code')) {
      return response({ items: [{ repository: repoSample('gamma/seo-skills') }] }, {
        'x-ratelimit-resource': 'search',
        'x-ratelimit-remaining': '0'
      });
    }
    if (href.includes('/git/trees/HEAD')) {
      return response({ tree: [{ type: 'blob', path: 'skills/seo-audit/SKILL.md' }] }, {
        'x-ratelimit-resource': 'core',
        'x-ratelimit-remaining': '4990'
      });
    }
    // Raw file fetches are irrelevant here; the discovery queue is the subject.
    throw new Error('offline');
  };

  try {
    const result = await collectLibrary({
      paths: {
        libraryConfigFile: configFile,
        libraryFile: path.join(dir, 'library.jsonl'),
        libraryStateFile: path.join(dir, 'library-state.json')
      },
      topics,
      classify,
      dryRun: true,
      now: new Date('2026-11-08T00:00:00Z')
    });

    assert.equal(result.candidates, 3, 'both search pages and the code-search pack are queued');
    assert.equal(result.reports.search.filter((entry) => entry.ok).length, 2, 'page 2 is fetched');
    assert.equal(result.reports.codeSearch[0].added, 1);
    assert.equal(result.rateRemaining, 4990, 'search quota is not treated as core quota');
    assert.equal(result.scannedRepos, 3, 'no pack is skipped because the search quota ran out');
  } finally {
    globalThis.fetch = original;
    delete process.env.TEST_GITHUB_TOKEN;
    await fs.rm(dir, { recursive: true, force: true });
  }
});
