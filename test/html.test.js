import assert from 'node:assert/strict';
import { test } from 'node:test';

import { extractPage, htmlText } from '../src/lib/html.js';
import { ARTICLE_HTML } from './fixtures.xml.js';

test('extractPage pulls metadata from meta tags', () => {
  const page = extractPage(ARTICLE_HTML, 'https://example.com/blog/fix-lcp');
  assert.equal(page.title, 'How to fix LCP');
  assert.equal(page.siteName, 'Example Blog');
  assert.equal(page.publishedAt, '2026-10-05T09:30:00.000Z');
  assert.equal(page.canonical, 'https://example.com/blog/fix-lcp');
  assert.match(page.description, /Largest Contentful Paint/);
});

test('extractPage keeps article prose and drops scripts, nav and boilerplate', () => {
  const page = extractPage(ARTICLE_HTML, 'https://example.com/blog/fix-lcp');
  assert.match(page.text, /preload the hero image/i);
  assert.match(page.text, /CDN close to your audience/);
  assert.doesNotMatch(page.text, /should not appear/);
  assert.doesNotMatch(page.text, /Share this article/);
  assert.doesNotMatch(page.text, /^Home/);
});

test('extractPage falls back to JSON-LD dates', () => {
  const html = `<html><head><title>Post</title></head><body><article>
    <p>${'A sufficiently long paragraph about crawling and indexing behaviour. '.repeat(3)}</p>
    <script type="application/ld+json">{"@type":"Article","datePublished":"2026-09-01T12:00:00Z","author":{"name":"Ada"}}</script>
  </article></body></html>`;
  const page = extractPage(html, 'https://example.com/post');
  assert.equal(page.publishedAt, '2026-09-01T12:00:00.000Z');
  assert.equal(page.author, 'Ada');
});

test('htmlText strips markup and decodes entities', () => {
  assert.equal(htmlText('<p>Crawl &amp; index</p>'), 'Crawl & index');
});
