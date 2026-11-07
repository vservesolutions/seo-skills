/** Normalize RSS 2.0, Atom and RDF feeds into a single item shape. */

import { parseXml, firstNamed, findAll, textOf, attrOf } from './xml.js';
import { normalizeWhitespace, truncateAtWord } from './text.js';

function resolveUrl(maybeRelative, base) {
  const value = normalizeWhitespace(maybeRelative);
  if (!value) return '';
  try {
    return new URL(value, base).toString();
  } catch {
    return '';
  }
}

function parseDate(...candidates) {
  for (const value of candidates) {
    const text = normalizeWhitespace(value);
    if (!text) continue;
    const date = new Date(text);
    if (!Number.isNaN(date.getTime())) return date.toISOString();
  }
  return null;
}

function feedTitle(root) {
  const channel = firstNamed(root, ['channel']);
  if (channel) return normalizeWhitespace(textOf(firstNamed(channel, ['title'])));
  const feed = firstNamed(root, ['feed']);
  if (feed) return normalizeWhitespace(textOf(firstNamed(feed, ['title'])));
  // parseXml can hand back the feed element itself (YouTube feeds have a single root).
  return normalizeWhitespace(textOf(firstNamed(root, ['title'])));
}

function atomLink(entry) {
  const links = findAll(entry, ['link']);
  let fallback = '';
  for (const link of links) {
    const href = attrOf(link, 'href');
    const rel = (attrOf(link, 'rel') || 'alternate').toLowerCase();
    if (href && rel === 'alternate') return href;
    if (href && !fallback) fallback = href;
    if (!href && !fallback) {
      const text = normalizeWhitespace(textOf(link));
      if (text.startsWith('http')) fallback = text;
    }
  }
  return fallback;
}

function rssLink(item) {
  const links = findAll(item, ['link']);
  for (const link of links) {
    const href = attrOf(link, 'href');
    if (href) return href;
    const text = normalizeWhitespace(textOf(link));
    if (text) return text;
  }
  const guid = firstNamed(item, ['guid']);
  if (guid) {
    const isPerma = (attrOf(guid, 'ispermalink') || '').toLowerCase();
    const value = normalizeWhitespace(textOf(guid));
    if (value.startsWith('http') && isPerma !== 'false') return value;
  }
  return '';
}

function htmlOf(item) {
  const candidates = [
    firstNamed(item, ['content:encoded']),
    firstNamed(item, ['content']),
    firstNamed(item, ['summary']),
    firstNamed(item, ['description']),
    // YouTube puts the description inside <media:group>, so search descendants.
    findAll(item, ['media:description'])[0]
  ].filter(Boolean);

  let best = '';
  for (const node of candidates) {
    const value = textOf(node).trim();
    if (value.length > best.length) best = value;
  }
  return best;
}

/**
 * Parse a feed document.
 * @returns {{ title: string, items: Array<object> }}
 */
export function parseFeed(xmlText, feedUrl = '') {
  const doc = parseXml(xmlText);
  const root =
    firstNamed(doc, ['rss']) ||
    firstNamed(doc, ['feed']) ||
    firstNamed(doc, ['rdf:rdf']) ||
    firstNamed(doc, ['rdf']) ||
    doc;

  const entries = findAll(root, ['item', 'entry']);
  const items = [];
  const seen = new Set();

  for (const entry of entries) {
    const title = normalizeWhitespace(textOf(firstNamed(entry, ['title'])));
    const isAtom = entry.name === 'entry';
    const rawUrl = isAtom ? atomLink(entry) : rssLink(entry);
    const url = resolveUrl(rawUrl, feedUrl);
    if (!url || seen.has(url)) continue;

    const publishedAt = parseDate(
      textOf(firstNamed(entry, ['published'])),
      textOf(firstNamed(entry, ['updated'])),
      textOf(firstNamed(entry, ['pubdate'])),
      textOf(firstNamed(entry, ['dc:date'])),
      textOf(firstNamed(entry, ['date']))
    );

    // Prefer <author><name>: Atom authors also carry a <uri> that would otherwise
    // be glued onto the name ("Channel https://youtube.com/channel/...").
    const authorNode = firstNamed(entry, ['author']);
    const author =
      normalizeWhitespace(textOf(firstNamed(authorNode, ['name']))) ||
      normalizeWhitespace(attrOf(authorNode, 'name')) ||
      normalizeWhitespace(textOf(authorNode)) ||
      normalizeWhitespace(textOf(firstNamed(entry, ['dc:creator']))) ||
      '';

    const categories = findAll(entry, ['category'])
      .map((category) => normalizeWhitespace(attrOf(category, 'term') || textOf(category)))
      .filter(Boolean);

    items.push({
      guid: normalizeWhitespace(textOf(firstNamed(entry, ['id', 'guid']))) || url,
      title: truncateAtWord(title, 300),
      url,
      publishedAt,
      author,
      html: htmlOf(entry),
      categories
    });
    seen.add(url);
  }

  return { title: feedTitle(root), items };
}
