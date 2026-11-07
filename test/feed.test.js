import assert from 'node:assert/strict';
import { test } from 'node:test';

import { parseFeed } from '../src/lib/feed.js';
import { decodeEntities, parseXml, textOf } from '../src/lib/xml.js';
import { RSS_FIXTURE, ATOM_FIXTURE, RDF_FIXTURE } from './fixtures.xml.js';

const YOUTUBE_FIXTURE = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns:yt="http://www.youtube.com/xml/schemas/2015" xmlns:media="http://search.yahoo.com/mrss/" xmlns="http://www.w3.org/2005/Atom">
 <title>Example SEO Channel</title>
 <author><name>Example SEO Channel</name><uri>https://www.youtube.com/channel/UCexample</uri></author>
 <entry>
  <id>yt:video:abc123</id>
  <yt:videoId>abc123</yt:videoId>
  <title>How to audit internal links</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=abc123"/>
  <published>2026-11-02T10:00:00+00:00</published>
  <author><name>Example SEO Channel</name><uri>https://www.youtube.com/channel/UCexample</uri></author>
  <media:group>
   <media:description>Internal links pass equity. Audit orphan pages, click depth and anchor text before adding new pages.</media:description>
  </media:group>
 </entry>
</feed>`;

test('parseXml handles CDATA, comments and entities', () => {
  const doc = parseXml('<root><!-- note --><a>1 &amp; 2</a><b><![CDATA[<p>raw</p>]]></b></root>');
  assert.equal(textOf(doc).replace(/\s+/g, ' ').trim(), '1 & 2 <p>raw</p>');
});

test('decodeEntities resolves named and numeric entities', () => {
  assert.equal(decodeEntities('a &amp; b &#8211; c &#x2014; d'), 'a & b \u2013 c \u2014 d');
  assert.equal(decodeEntities('&unknown; stays'), '&unknown; stays');
});

test('parseFeed reads RSS items, dates and full content', () => {
  const feed = parseFeed(RSS_FIXTURE, 'https://example.com/blog/feed');
  assert.equal(feed.title, 'Example SEO Blog');
  assert.equal(feed.items.length, 2);

  const first = feed.items[0];
  assert.equal(first.title, 'Core Web Vitals: what changed in 2026');
  assert.equal(first.url, 'https://example.com/blog/core-web-vitals-2026?utm_source=rss');
  assert.equal(first.publishedAt, '2026-11-03T10:00:00.000Z');
  assert.equal(first.author, 'Jane Doe');
  assert.match(first.html, /Preload the hero image/);
  assert.deepEqual(first.categories, ['performance']);

  const second = feed.items[1];
  assert.equal(second.title, 'Crawl & index: a > b');
  assert.equal(second.url, 'https://example.com/blog/crawl-and-index');
});

test('parseFeed resolves relative Atom links and html summaries', () => {
  const feed = parseFeed(ATOM_FIXTURE, 'https://example.org/feed.xml');
  assert.equal(feed.items.length, 1);
  const item = feed.items[0];
  assert.equal(item.url, 'https://example.org/hreflang-mistakes');
  assert.equal(item.publishedAt, '2026-10-01T08:00:00.000Z');
  assert.equal(item.author, 'Sam Lee');
  assert.match(item.html, /Missing x-default/);
});

test('parseFeed reads RDF (RSS 1.0) items', () => {
  const feed = parseFeed(RDF_FIXTURE, 'https://example.net/index.rdf');
  assert.equal(feed.title, 'Example Roundtable');
  assert.equal(feed.items.length, 1);
  assert.equal(feed.items[0].url, 'https://example.net/google-update');
  assert.equal(feed.items[0].publishedAt, '2026-11-01T00:00:00.000Z');
});

test('parseFeed reads YouTube Atom feeds and nested media descriptions', () => {
  const feed = parseFeed(YOUTUBE_FIXTURE, 'https://www.youtube.com/feeds/videos.xml?channel_id=UCexample');
  assert.equal(feed.title, 'Example SEO Channel');
  assert.equal(feed.items.length, 1);

  const item = feed.items[0];
  assert.equal(item.url, 'https://www.youtube.com/watch?v=abc123');
  assert.equal(item.publishedAt, '2026-11-02T10:00:00.000Z');
  assert.equal(item.author, 'Example SEO Channel');
  assert.match(item.html, /Internal links pass equity/);
});
