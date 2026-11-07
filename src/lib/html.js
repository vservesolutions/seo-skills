/** Turn an article HTML document into metadata plus readable body text. */

import { decodeEntities } from './xml.js';
import { normalizeWhitespace, stripTags, truncateAtWord } from './text.js';

const DROP_BLOCKS =
  /<(script|style|noscript|svg|canvas|iframe|form|nav|header|footer|aside|figure|video|audio|select|template)\b[^>]*>[\s\S]*?<\/\1>/gi;

const BOILERPLATE =
  /^(advertisement|share this|share on|subscribe|sign up|follow us|read more|related (articles|posts|reading)|recommended|written by|about the author|leave a comment|comments?$|cookie|privacy policy|terms of service|all rights reserved|skip to content|←|→)/i;

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function metaContent(html, names) {
  for (const name of names) {
    const tagRe = new RegExp(
      `<meta\\b[^>]*(?:name|property|itemprop)\\s*=\\s*["']${escapeRegExp(name)}["'][^>]*>`,
      'i'
    );
    const tag = tagRe.exec(html)?.[0];
    if (!tag) continue;
    const content = /content\s*=\s*("([^"]*)"|'([^']*)')/i.exec(tag);
    if (content) {
      const value = normalizeWhitespace(decodeEntities(content[2] ?? content[3] ?? ''));
      if (value) return value;
    }
  }
  return '';
}

function cleanTitle(raw, siteName) {
  let title = normalizeWhitespace(decodeEntities(stripTags(raw)));
  if (!title) return '';
  if (siteName) {
    const suffix = new RegExp(`\\s*[|•·–—-]\\s*${escapeRegExp(siteName)}\\s*$`, 'i');
    title = title.replace(suffix, '');
  }
  const parts = title.split(/\s+[|•·]\s+/);
  if (parts.length > 1 && parts[0].length >= 15) title = parts[0];
  else {
    const dash = title.split(/\s+[–—]\s+/);
    if (dash.length > 1 && dash[0].length >= 15) title = dash[0];
  }
  return normalizeWhitespace(title);
}

function pickRegion(html) {
  const body = /<body[^>]*>([\s\S]*)<\/body>/i.exec(html)?.[1] ?? html;
  const articles = [...body.matchAll(/<article\b[^>]*>([\s\S]*?)<\/article>/gi)].map((m) => m[1]);
  if (articles.length) {
    return articles.sort((a, b) => b.length - a.length)[0];
  }
  const main = /<main\b[^>]*>([\s\S]*?)<\/main>/i.exec(body)?.[1];
  return main || body;
}

function paragraphsOf(region) {
  const cleaned = region
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(DROP_BLOCKS, ' ')
    .replace(/<br\s*\/?>/gi, '\n');

  const blocks = [];
  const blockRe = /<(p|h2|h3|h4|li|blockquote)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let match;
  while ((match = blockRe.exec(cleaned))) {
    const text = normalizeWhitespace(decodeEntities(stripTags(match[2])));
    if (text.length < 40) continue;
    if (BOILERPLATE.test(text)) continue;
    if ((text.match(/https?:\/\//g) || []).length > 2) continue;
    blocks.push({ tag: match[1].toLowerCase(), text });
  }

  const seen = new Set();
  const lines = [];
  for (const block of blocks) {
    const key = block.text.toLowerCase().slice(0, 90);
    if (seen.has(key)) continue;
    seen.add(key);
    lines.push(block.tag.startsWith('h') ? `## ${block.text}` : block.text);
  }
  return lines.join('\n\n');
}

/**
 * Extract the useful parts of an HTML page.
 * @returns {{title: string, description: string, publishedAt: string|null, author: string, siteName: string, canonical: string, text: string}}
 */
export function extractPage(html, baseUrl = '') {
  const source = String(html ?? '');
  const siteName = metaContent(source, ['og:site_name', 'application-name']);
  const rawTitle = metaContent(source, ['og:title', 'twitter:title']) || /<title[^>]*>([\s\S]*?)<\/title>/i.exec(source)?.[1] || '';
  const headline =
    metaContent(source, ['headline']) ||
    normalizeWhitespace(decodeEntities(stripTags(/<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(source)?.[1] || '')));

  const title = cleanTitle(rawTitle, siteName) || normalizeWhitespace(headline);

  const description =
    metaContent(source, ['description', 'og:description', 'twitter:description']) ||
    normalizeWhitespace(decodeEntities(stripTags(/<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(source)?.[1] || '')));

  const publishedRaw =
    metaContent(source, [
      'article:published_time',
      'article:modified_time',
      'datePublished',
      'date',
      'og:updated_time',
      'pubdate'
    ]) ||
    /"datePublished"\s*:\s*"([^"]+)"/i.exec(source)?.[1] ||
    /<time\b[^>]*datetime\s*=\s*["']([^"']+)["']/i.exec(source)?.[1] ||
    '';

  let publishedAt = null;
  if (publishedRaw) {
    const parsed = new Date(publishedRaw);
    if (!Number.isNaN(parsed.getTime())) publishedAt = parsed.toISOString();
  }

  const author =
    metaContent(source, ['author', 'article:author', 'twitter:creator']) ||
    /"author"\s*:\s*\{[^}]*"name"\s*:\s*"([^"]+)"/i.exec(source)?.[1] ||
    '';

  const canonical =
    /<link\b[^>]*rel\s*=\s*["']canonical["'][^>]*href\s*=\s*["']([^"']+)["']/i.exec(source)?.[1] ||
    /<link\b[^>]*href\s*=\s*["']([^"']+)["'][^>]*rel\s*=\s*["']canonical["']/i.exec(source)?.[1] ||
    '';

  const region = pickRegion(source);
  let text = paragraphsOf(region);
  if (text.length < 500) {
    const fallback = normalizeWhitespace(
      stripTags(region.replace(/<!--[\s\S]*?-->/g, ' ').replace(DROP_BLOCKS, ' '))
    );
    if (fallback.length > text.length) text = fallback;
  }

  let resolvedCanonical = '';
  try {
    if (canonical && baseUrl) resolvedCanonical = new URL(canonical, baseUrl).toString();
  } catch {
    resolvedCanonical = '';
  }

  return {
    title: truncateAtWord(title, 300),
    description: truncateAtWord(description, 500),
    publishedAt,
    author: truncateAtWord(normalizeWhitespace(decodeEntities(stripTags(author))), 120),
    siteName,
    canonical: resolvedCanonical,
    text
  };
}

/** Plain text from an HTML fragment (used for feed summaries). */
export function htmlText(fragment) {
  return normalizeWhitespace(
    stripTags(
      decodeEntities(
        String(fragment ?? '')
          .replace(/<!--[\s\S]*?-->/g, ' ')
          .replace(DROP_BLOCKS, ' ')
      )
    )
  );
}

/**
 * Paragraph-preserving text from a feed fragment.
 * Falls back to flat text when the fragment has no usable block markup.
 */
export function htmlParagraphs(fragment) {
  const source = String(fragment ?? '');
  if (!source) return '';
  const structured = paragraphsOf(source.replace(/<!--[\s\S]*?-->/g, ' '));
  if (structured.length >= 200) return structured;
  return htmlText(source);
}
