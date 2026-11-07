import assert from 'node:assert/strict';
import { test } from 'node:test';

import { findingId, mergeFindings, normalizeUrl, pruneFindings } from '../src/lib/kb.js';

test('normalizeUrl strips tracking params, fragments and trailing slashes', () => {
  assert.equal(
    normalizeUrl('https://Example.com/post/?utm_source=rss&utm_medium=feed#section'),
    'https://example.com/post'
  );
  assert.equal(normalizeUrl('not a url'), 'not a url');
});

test('findingId is stable across tracking variants', () => {
  const a = findingId('https://example.com/post?utm_campaign=newsletter');
  const b = findingId('https://example.com/post/');
  assert.equal(a, b);
  assert.equal(a.length, 12);
});

test('mergeFindings adds new items and updates changed ones', () => {
  const base = {
    id: 'abc123',
    url: 'https://example.com/post',
    title: 'Original',
    fetchedAt: '2026-11-01T00:00:00.000Z',
    publishedAt: '2026-10-30T00:00:00.000Z',
    contentHash: 'old',
    keyPoints: ['Use sitemaps to help crawling.'],
    topics: []
  };
  const incoming = [
    {
      ...base,
      title: 'Original (updated)',
      fetchedAt: '2026-11-05T00:00:00.000Z',
      contentHash: 'new',
      keyPoints: ['Submit a sitemap and monitor index coverage weekly.']
    },
    {
      id: 'def456',
      url: 'https://example.com/second',
      title: 'Second',
      fetchedAt: '2026-11-05T00:00:00.000Z',
      publishedAt: '2026-11-04T00:00:00.000Z',
      contentHash: 'x',
      keyPoints: [],
      topics: []
    }
  ];

  const result = mergeFindings([base], incoming);
  assert.equal(result.added, 1);
  assert.equal(result.updated, 1);
  assert.equal(result.findings.length, 2);
  assert.equal(result.findings[0].id, 'def456', 'newest finding sorts first');

  const updated = result.findings.find((finding) => finding.id === 'abc123');
  assert.equal(updated.title, 'Original (updated)');
  assert.equal(updated.firstSeen, '2026-11-01T00:00:00.000Z', 'first seen timestamp is preserved');
  assert.equal(updated.keyPoints.length, 2, 'key points from both versions are kept');
});

test('pruneFindings drops entries older than the retention window', () => {
  const now = new Date('2026-11-06T00:00:00.000Z');
  const findings = [
    { id: 'a', publishedAt: '2026-10-01T00:00:00.000Z' },
    { id: 'b', publishedAt: '2019-01-01T00:00:00.000Z' }
  ];
  const kept = pruneFindings(findings, 1095, now);
  assert.deepEqual(kept.map((finding) => finding.id), ['a']);
});
