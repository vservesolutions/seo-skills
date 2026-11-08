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

/**
 * Search results churn between runs. A pack that has been scanned before must
 * still come back into the queue from the state file, or it is never refreshed.
 */
test('an explicit --repo pack is scanned even when discovery never saw it', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'seo-library-only-'));
  const configFile = path.join(dir, 'skill-library.json');
  await fs.writeFile(
    configFile,
    JSON.stringify({
      settings: {
        searchQueries: [],
        codeSearchTerms: [],
        maxReposPerRun: 3,
        maxSkillsPerRepo: 3,
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
    if (href.includes('/repos/zeta/seo-skills/git/trees/HEAD')) {
      // A pack may publish one skill at the repository root.
      return response({ tree: [{ type: 'blob', path: 'SKILL.md' }] }, {
        'x-ratelimit-resource': 'core',
        'x-ratelimit-remaining': '4990'
      });
    }
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
      only: ['zeta/seo-skills'],
      dryRun: true,
      now: new Date('2026-11-08T00:00:00Z')
    });

    assert.equal(result.scannedRepos, 1, 'the named pack is scanned');
    assert.equal(result.reports.repos[0].paths, 1, 'a root-level SKILL.md is found');
    assert.ok(seen.some((href) => href.includes('/repos/zeta/seo-skills/git/trees')));
  } finally {
    globalThis.fetch = original;
    delete process.env.TEST_GITHUB_TOKEN;
    await fs.rm(dir, { recursive: true, force: true });
  }
});

/**
 * Skills are deleted upstream. Keeping their records makes the catalogue claim
 * files that no longer exist, so a rescan has to prune them.
 */
test('a skill deleted upstream is pruned from the library', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'seo-library-prune-'));
  const configFile = path.join(dir, 'skill-library.json');
  const libraryFile = path.join(dir, 'library.jsonl');
  const stateFile = path.join(dir, 'library-state.json');
  await fs.writeFile(
    configFile,
    JSON.stringify({
      settings: {
        searchQueries: [],
        codeSearchTerms: [],
        maxReposPerRun: 3,
        maxSkillsPerRepo: 3,
        delayMs: 0,
        minDescriptionChars: 30,
        tokenEnv: 'TEST_GITHUB_TOKEN'
      },
      lists: [],
      repos: []
    })
  );
  await fs.writeFile(
    libraryFile,
    JSON.stringify({
      id: 'delta/seo-skills:skills/old/SKILL.md',
      repo: 'delta/seo-skills',
      path: 'skills/old/SKILL.md',
      name: 'old-seo-audit',
      description: 'Audits technical SEO.',
      category: 'technical-crawling-indexing',
      license: 'MIT',
      hasContent: true,
      contentSha: 'abc',
      content: '# Old',
      stars: 5
    }) + '\n'
  );
  await fs.writeFile(
    stateFile,
    JSON.stringify({ repos: { 'delta/seo-skills': { scannedAt: '2026-01-01T00:00:00Z', skills: 1, paths: 1, stars: 5 } } })
  );

  const original = globalThis.fetch;
  process.env.TEST_GITHUB_TOKEN = 'test-token';
  globalThis.fetch = async (url) => {
    const href = String(url);
    if (href.includes('/git/trees/HEAD')) {
      return response({ tree: [{ type: 'blob', path: 'skills/new/SKILL.md' }] }, {
        'x-ratelimit-resource': 'core',
        'x-ratelimit-remaining': '4990'
      });
    }
    throw new Error('offline');
  };

  try {
    const result = await collectLibrary({
      paths: { libraryConfigFile: configFile, libraryFile, libraryStateFile: stateFile },
      topics,
      classify,
      dryRun: true,
      now: new Date('2026-11-08T00:00:00Z')
    });

    assert.equal(result.total, 0, 'the deleted skill is not kept');
    assert.equal(result.reports.repos[0].pruned, 1);
  } finally {
    globalThis.fetch = original;
    delete process.env.TEST_GITHUB_TOKEN;
    await fs.rm(dir, { recursive: true, force: true });
  }
});

test('a previously scanned pack is rescanned even when discovery misses it', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'seo-library-state-'));
  const configFile = path.join(dir, 'skill-library.json');
  const stateFile = path.join(dir, 'library-state.json');
  await fs.writeFile(
    configFile,
    JSON.stringify({
      settings: {
        searchQueries: [],
        codeSearchTerms: [],
        maxReposPerRun: 3,
        maxSkillsPerRepo: 3,
        delayMs: 0,
        minDescriptionChars: 30,
        tokenEnv: 'TEST_GITHUB_TOKEN'
      },
      lists: [],
      repos: []
    })
  );
  await fs.writeFile(
    stateFile,
    JSON.stringify({
      repos: { 'delta/seo-skills': { scannedAt: '2026-01-01T00:00:00Z', skills: 1, paths: 1, stars: 5 } }
    })
  );

  const seen = [];
  const original = globalThis.fetch;
  process.env.TEST_GITHUB_TOKEN = 'test-token';
  globalThis.fetch = async (url) => {
    const href = String(url);
    seen.push(href);
    if (href.includes('/git/trees/HEAD')) {
      return response({ tree: [{ type: 'blob', path: 'skills/seo-audit/SKILL.md' }] }, {
        'x-ratelimit-resource': 'core',
        'x-ratelimit-remaining': '4990'
      });
    }
    throw new Error('offline');
  };

  try {
    const result = await collectLibrary({
      paths: {
        libraryConfigFile: configFile,
        libraryFile: path.join(dir, 'library.jsonl'),
        libraryStateFile: stateFile
      },
      topics,
      classify,
      dryRun: true,
      now: new Date('2026-11-08T00:00:00Z')
    });

    assert.equal(result.candidates, 1, 'the remembered pack is a candidate even though discovery returned nothing');
    assert.ok(
      seen.some((href) => href.includes('/repos/delta/seo-skills/git/trees')),
      'the remembered pack is fetched again'
    );
    assert.equal(result.scannedRepos, 1);
  } finally {
    globalThis.fetch = original;
    delete process.env.TEST_GITHUB_TOKEN;
    await fs.rm(dir, { recursive: true, force: true });
  }
});
