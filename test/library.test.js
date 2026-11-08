import assert from 'node:assert/strict';
import test from 'node:test';

import { buildClassifier } from '../src/lib/classify.js';
import { loadTopics } from '../src/lib/config.js';
import {
  detectPlatforms,
  mergePlatforms,
  normalizeLicense,
  parseAwesomeTable,
  parseFrontmatter,
  parsePlatforms,
  skillRecord,
  slugify
} from '../src/lib/skill-library.js';

const topics = await loadTopics();
const classify = buildClassifier(topics);
const topicIds = new Set(topics.map((topic) => topic.id));
const now = new Date('2026-11-07T00:00:00Z');
const settings = { maxSkillBytes: 200_000, minDescriptionChars: 30 };
const baseMeta = {
  repo: 'owner/pack',
  stars: 120,
  license: 'MIT',
  platforms: ['claude-code'],
  coverage: '',
  listCategory: '',
  from: 'test'
};

function build(name, description, { body = '# Skill\n\nDo the work.', meta = {} } = {}) {
  const markdown = `---\nname: ${name}\ndescription: ${JSON.stringify(description)}\n---\n\n${body}\n`;
  return skillRecord({
    repo: 'owner/pack',
    skillPath: `skills/${name}/SKILL.md`,
    markdown,
    meta: { ...baseMeta, ...meta },
    classify,
    settings,
    now,
    topicIds
  });
}

test('parseFrontmatter reads quoted scalars, block scalars and nested metadata', () => {
  const markdown = `---
name: seo-audit
description: >
  Long text
  across lines
license: MIT
metadata:
  version: 2.2.2
---

# Body

Content.
`;
  const { data, body } = parseFrontmatter(markdown);
  assert.equal(data.name, 'seo-audit');
  assert.equal(data.description, 'Long text across lines');
  assert.equal(data.license, 'MIT');
  assert.equal(data.version, undefined);
  assert.match(body, /^# Body/);
});

test('parseFrontmatter returns the whole document when there is no frontmatter', () => {
  const { data, body } = parseFrontmatter('# Just markdown\n');
  assert.deepEqual(data, {});
  assert.equal(body, '# Just markdown\n');
});

test('parseAwesomeTable keeps rows with github repos and their metadata', () => {
  const markdown = `## Large packs

| Repo | What it covers | Works with | Licence | Stars | Updated |
| --- | --- | --- | --- | --- | --- |
| [aaron-he-zhu/aaron-marketing-skills](https://github.com/aaron-he-zhu/aaron-marketing-skills) | 16 SEO and GEO skills | Claude Code, Codex, Cursor | Apache-2.0 | 3049 | 2026-11-02 |
| not a repo | nothing | none | none | 0 | 2026-01-01 |

## Next section
`;
  const entries = parseAwesomeTable(markdown);
  assert.equal(entries.length, 1);
  assert.equal(entries[0].repo, 'aaron-he-zhu/aaron-marketing-skills');
  assert.deepEqual(entries[0].platforms, ['claude-code', 'codex', 'cursor']);
  assert.equal(entries[0].license, 'Apache-2.0');
  assert.equal(entries[0].stars, 3049);
  assert.equal(entries[0].listCategory, 'Large packs');
});

test('licence policy only allows redistribution for permissive licences', () => {
  assert.equal(normalizeLicense('MIT').permissive, true);
  assert.equal(normalizeLicense('license: mit').spdx, 'MIT');
  assert.equal(normalizeLicense('Apache-2.0').permissive, true);
  assert.equal(normalizeLicense('none').permissive, false);
  assert.equal(normalizeLicense('NOASSERTION').permissive, false);
  assert.equal(normalizeLicense('AGPL-3.0').permissive, false);
  assert.equal(normalizeLicense('').permissive, false);
});

test('parsePlatforms maps pack wording to agent slugs', () => {
  assert.deepEqual(parsePlatforms('Claude Code, Codex'), ['claude-code', 'codex']);
  assert.deepEqual(parsePlatforms('Cursor, OpenClaw'), ['cursor', 'openclaw']);
  assert.deepEqual(parsePlatforms('Any agent'), ['any-agent']);
  assert.deepEqual(parsePlatforms(''), []);
});

test('skills are filed under the category their name implies', () => {
  const technical = build(
    'seo-technical-audit',
    'Technical SEO audit covering crawl budget, indexing, sitemaps and robots.txt for large sites.'
  );
  assert.equal(technical.category, 'technical-crawling-indexing');

  const geo = build(
    'geo-audit',
    'GEO audit for AI search citations across ChatGPT, Perplexity and Google AI Overviews.'
  );
  assert.equal(geo.category, 'ai-search-geo');

  const keywords = build(
    'keyword-cluster',
    'Build keyword clusters and search intent maps for a niche, with SERP gap analysis.'
  );
  assert.equal(keywords.category, 'keyword-research');
});

test('non-SEO skills from broad marketing packs are rejected', () => {
  assert.equal(
    build('make-content', 'Writes marketing content: articles, single posts, newsletters and scripts.'),
    null
  );
  assert.equal(
    build('ab-testing', 'Plan, design and implement an A/B test or growth experimentation program.'),
    null
  );
});

test('permissive licences keep full text, everything else is catalogued only', () => {
  const mit = build('seo-audit', 'Full SEO audit of crawl, indexing and on-page issues for any site.');
  assert.equal(mit.hasContent, true);
  assert.match(mit.content, /# Skill/);

  const unlicensed = build('seo-audit', 'Full SEO audit of crawl, indexing and on-page issues for any site.', {
    meta: { license: 'none' }
  });
  assert.equal(unlicensed.hasContent, false);
  assert.equal(unlicensed.content, '');
  assert.equal(unlicensed.license, 'none');
});

test('a hyphenated search-visibility name is enough to keep the skill', () => {
  const record = build(
    'improve-search-visibility',
    'Runs the agreed buyer questions on AI surfaces and scores how often the brand is named.'
  );
  assert.ok(record, 'expected the AI search visibility skill to be collected');
});

test('a skill with no search-marketing signal is still skipped', () => {
  assert.equal(build('make-product-photos', 'Make studio photos of a product without a shoot.'), null);
});

test('skill files take their licence from the SKILL.md when the pack has none', () => {
  const markdown = `---
name: seo-schema
description: Generate and validate Schema.org JSON-LD for rich results.
license: MIT
---

# Schema
`;
  const record = skillRecord({
    repo: 'owner/pack',
    skillPath: 'skills/seo-schema/SKILL.md',
    markdown,
    meta: { ...baseMeta, license: 'none' },
    classify,
    settings,
    now,
    topicIds
  });
  assert.equal(record.license, 'MIT');
  assert.equal(record.hasContent, true);
});

test('a specific topic also carries its parent category', () => {
  const result = classify({
    title: 'How to improve crawl budget',
    text: 'Crawl budget and crawl rate determine how much Google can fetch. Reduce crawl demand.'
  });
  assert.equal(result.primaryTopic, 'crawl-budget');
  assert.ok(result.topics.some((topic) => topic.id === 'technical-crawling-indexing'));
});

test('platform markers inside a skill are detected', () => {
  assert.deepEqual(detectPlatforms('Run `"${CLAUDE_PLUGIN_ROOT}/scripts/x"` to start.'), ['claude-code']);
  assert.deepEqual(detectPlatforms('Copy the folder to .codex/skills/ and run codex cli.'), ['codex']);
  assert.deepEqual(detectPlatforms('Add this to .cursor/rules before editing.'), ['cursor']);
  assert.deepEqual(detectPlatforms('Read the docs at example.com.'), []);
});

test('a detected platform replaces a vague "any agent" claim', () => {
  const merged = mergePlatforms(['any-agent'], ['claude-code']);
  assert.deepEqual(merged.platforms, ['claude-code']);
  assert.equal(merged.platformSource, 'declared+detected');

  const declaredOnly = mergePlatforms(['claude-code', 'codex'], []);
  assert.deepEqual(declaredOnly.platforms, ['claude-code', 'codex']);
  assert.equal(declaredOnly.platformSource, 'declared');

  const empty = mergePlatforms([], []);
  assert.deepEqual(empty.platforms, ['unspecified']);
  assert.equal(empty.platformSource, 'none');
});

test('records carry provenance: repo url, ref, platform evidence and discovery path', () => {
  const record = build('seo-audit', 'Full SEO audit of crawl, indexing and on-page issues for any site.', {
    body: '# Skill\n\nCopy to .claude/skills/ and run.',
    meta: { platforms: ['claude-code'], from: 'awesome-seo-agent-skills' }
  });
  assert.equal(record.repoUrl, 'https://github.com/owner/pack');
  assert.equal(record.ref, 'HEAD');
  assert.equal(record.discoveredVia, 'awesome-seo-agent-skills');
  assert.deepEqual(record.platforms, ['claude-code']);
  assert.equal(record.platformSource, 'declared+detected');
  assert.match(record.url, /^https:\/\/github\.com\/owner\/pack\/blob\/HEAD\/skills\/seo-audit\/SKILL\.md$/);
});

test('slugify produces stable file names', () => {
  assert.equal(slugify('SEO Audit!'), 'seo-audit');
  assert.equal(slugify("Writer's Block"), 'writers-block');
  assert.equal(slugify(''), 'skill');
});
