import assert from 'node:assert/strict';
import { test } from 'node:test';

import { summarize } from '../src/lib/summarize.js';
import { BLOG_TEXT } from './fixtures.xml.js';

test('produces a summary from the source text', () => {
  const { summary } = summarize(BLOG_TEXT, { title: 'Core Web Vitals fixes' });
  assert.ok(summary.length > 80);
  assert.match(summary, /LCP|INP|image/i);
});

test('extracts actionable key points without duplicates', () => {
  const { keyPoints } = summarize(BLOG_TEXT, { title: 'Core Web Vitals fixes' });
  assert.ok(keyPoints.length >= 2, `expected key points, got ${JSON.stringify(keyPoints)}`);
  assert.ok(keyPoints.every((point) => point.length >= 45 && point.length <= 241));
  assert.ok(keyPoints.some((point) => /preload/i.test(point)));
  assert.ok(keyPoints.some((point) => /^Avoid|^Use|^Test/i.test(point)));
  const unique = new Set(keyPoints.map((point) => point.toLowerCase()));
  assert.equal(unique.size, keyPoints.length);
});

test('returns empty results for empty input', () => {
  assert.deepEqual(summarize('', {}), { summary: '', keyPoints: [] });
});
