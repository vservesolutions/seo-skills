import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs/promises';
import path from 'node:path';

import { renderSkills, renderDashboard } from '../src/lib/render.js';

const now = new Date('2026-11-06T12:00:00.000Z');

const topics = [
  {
    id: 'technical-crawling-indexing',
    title: 'Technical SEO: Crawling, Indexing and Rendering',
    description: 'How search engines crawl and index URLs.',
    whenToUse: 'Use when a page is not indexed.',
    keywords: ['sitemap']
  },
  {
    id: 'international-seo',
    title: 'International and Multilingual SEO',
    description: 'Hreflang and locale targeting.',
    whenToUse: 'Use when serving multiple markets.',
    keywords: ['hreflang']
  }
];

const findings = [
  {
    id: 'a1',
    url: 'https://example.com/sitemaps',
    title: 'Sitemap best practices',
    source: 'Example Blog',
    sourceId: 'example',
    publishedAt: '2026-11-01T00:00:00.000Z',
    firstSeen: '2026-11-02T00:00:00.000Z',
    summary: 'Sitemaps help crawlers discover new URLs quickly. Keep them under 50,000 URLs.',
    keyPoints: [
      'Keep XML sitemaps under 50,000 URLs and 50MB so crawlers can process them.',
      'Avoid listing noindex or redirected URLs in your sitemap because they waste crawl budget.'
    ],
    topics: [{ id: 'technical-crawling-indexing', score: 12, share: 1 }],
    primaryTopic: 'technical-crawling-indexing',
    tags: ['news'],
    type: 'news',
    authority: 5,
    wordCount: 850
  }
];

test('renderSkills writes SKILL.md, INDEX.md and index.json', async () => {
  const skillsDir = path.join(process.cwd(), 'test', '.tmp-skills');
  await fs.rm(skillsDir, { recursive: true, force: true });

  const index = await renderSkills(findings, topics, { skillsDir, now });

  assert.equal(index.skills.length, 2);
  assert.equal(index.counts.findings, 1);
  const technical = index.skills.find((skill) => skill.slug === 'technical-crawling-indexing');
  assert.equal(technical.findings, 1);
  assert.equal(technical.confidence, 'low');

  const skillPath = path.join(skillsDir, 'technical-crawling-indexing', 'SKILL.md');
  const markdown = await fs.readFile(skillPath, 'utf8');
  assert.match(markdown, /^---\nname: seo-technical-crawling-indexing/m);
  assert.match(markdown, /## Core practices/);
  assert.match(markdown, /Keep XML sitemaps under 50,000 URLs/);
  assert.match(markdown, /Example Blog, 2026-11-01/);
  assert.match(markdown, /## Pitfalls to avoid/);
  assert.match(markdown, /## Recent developments/);
  assert.match(markdown, /## References/);

  const emptySkill = await fs.readFile(path.join(skillsDir, 'international-seo', 'SKILL.md'), 'utf8');
  assert.match(emptySkill, /No findings yet for this topic/);

  const indexJson = JSON.parse(await fs.readFile(path.join(skillsDir, 'index.json'), 'utf8'));
  assert.equal(indexJson.skills.length, 2);
  assert.ok(await fs.readFile(path.join(skillsDir, 'INDEX.md'), 'utf8'));

  // Re-rendering with the same inputs must produce identical output.
  await renderSkills(findings, topics, { skillsDir, now });
  const again = await fs.readFile(skillPath, 'utf8');
  assert.equal(again, markdown);

  // A topic that is no longer rendered must not leave a stale directory behind.
  const staleDir = path.join(skillsDir, 'retired-topic');
  await fs.mkdir(staleDir, { recursive: true });
  await fs.writeFile(path.join(staleDir, 'SKILL.md'), 'stale', 'utf8');
  await renderSkills(findings, topics, { skillsDir, now });
  await assert.rejects(fs.stat(staleDir));

  await fs.rm(skillsDir, { recursive: true, force: true });
});

test('renderDashboard puts each category behind a tab', async () => {
  const skillsDir = path.join(process.cwd(), 'test', '.tmp-tab-skills');
  const siteDir = path.join(process.cwd(), 'test', '.tmp-tab-site');
  await fs.rm(skillsDir, { recursive: true, force: true });

  const index = await renderSkills(findings, topics, { skillsDir, now });
  const dashboardFile = path.join(siteDir, 'index.html');
  await renderDashboard({ findings, skillsIndex: index, sourcesCount: 1, dashboardFile, now });

  const html = await fs.readFile(dashboardFile, 'utf8');
  assert.match(html, /<div class="tabs" data-tabgroup="skills"/);
  assert.match(html, /data-category="technical-crawling-indexing"/);
  assert.match(html, /data-category="international-seo"/);
  assert.match(html, /data-category="all"/);
  assert.match(html, /data-tabgroup="skills" data-category="international-seo"/);
  assert.match(html, /aria-selected/);

  await fs.rm(siteDir, { recursive: true, force: true });
  await fs.rm(skillsDir, { recursive: true, force: true });
});
