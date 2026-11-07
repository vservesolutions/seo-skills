import assert from 'node:assert/strict';
import { test } from 'node:test';

import { buildClassifier } from '../src/lib/classify.js';
import { loadTopics } from '../src/lib/config.js';

const topics = await loadTopics();
const classify = buildClassifier(topics);

test('classifies performance content as core web vitals', () => {
  const result = classify({
    title: 'Core Web Vitals: LCP and INP thresholds changed',
    text: 'Largest Contentful Paint now requires a faster LCP, and Interaction to Next Paint replaced FID for INP scores.',
    sourceName: 'Example Blog',
    sourceId: 'example'
  });
  assert.equal(result.primaryTopic, 'core-web-vitals-performance');
  assert.ok(result.topics[0].score > 0);
});

test('classifies hreflang content as international SEO', () => {
  const result = classify({
    title: 'Hreflang and x-default mistakes',
    text: 'Missing hreflang return tags and wrong language tags break international targeting for ccTLD setups.',
    sourceName: 'Example',
    sourceId: 'example'
  });
  assert.equal(result.primaryTopic, 'international-seo');
});

test('classifies AI answer content as ai-search-geo', () => {
  const result = classify({
    title: 'AI Overviews are absorbing organic clicks',
    text: 'Brand mentions now drive visibility in AI Overviews and AI Mode, and some teams publish llms.txt for AI crawlers.',
    sourceName: 'Example',
    sourceId: 'example'
  });
  assert.equal(result.primaryTopic, 'ai-search-geo');
});

test('returns no topics for unrelated content', () => {
  const result = classify({
    title: 'Company appoints new chief financial officer',
    text: 'The board announced quarterly earnings and a new finance leadership structure.',
    sourceName: 'Example',
    sourceId: 'example'
  });
  assert.equal(result.primaryTopic, null);
  assert.deepEqual(result.topics, []);
});

test('detects content type and platform tags', () => {
  const guide = classify({
    title: 'How to audit internal links in WordPress',
    text: 'A step by step checklist for internal linking audits in WordPress, including orphan page detection.',
    sourceName: 'Example',
    sourceId: 'example'
  });
  assert.equal(guide.type, 'guide');
  assert.ok(guide.tags.includes('wordpress'));

  const release = classify({
    title: 'Schema.org release notes for version 29.0',
    text: 'New structured data properties were added to schema.org.',
    sourceName: 'Schema.org Releases',
    sourceId: 'schemaorg-releases'
  });
  assert.equal(release.type, 'release');
});
