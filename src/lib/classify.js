/** Topic classification and content-type detection. */

import { normalizeWhitespace } from './text.js';

const PLATFORMS = [
  ['wordpress', /\bwordpress\b/i],
  ['shopify', /\bshopify\b/i],
  ['webflow', /\bwebflow\b/i],
  ['magento', /\bmagento\b/i],
  ['wix', /\bwix\b/i],
  ['squarespace', /\bsquarespace\b/i],
  ['nextjs', /\bnext\.?js\b/i],
  ['react', /\breact(\.?js)?\b/i],
  ['cloudflare', /\bcloudflare\b/i],
  ['indexnow', /\bindexnow\b/i],
  ['bing', /\bbing\b/i],
  ['google', /\bgoogle\b/i],
  ['openai', /\bopenai\b/i],
  ['chatgpt', /\bchatgpt\b/i],
  ['perplexity', /\bperplexity\b/i],
  ['gemini', /\bgemini\b/i],
  ['youtube', /\byoutube\b/i]
];

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function detectType(title, sourceName, sourceId) {
  const name = `${sourceId} ${sourceName}`.toLowerCase();
  if (/release|changelog/.test(name) || /\brelease notes\b|\bchangelog\b|\bversion \d/i.test(title)) {
    return 'release';
  }
  if (/stackexchange|reddit|quora|forum/.test(name)) return 'discussion';
  if (/\b(guide|how to|how-to|tutorial|checklist|complete|ultimate|playbook|step[- ]by[- ]step|beginner|template|framework|case study)\b/i.test(title)) {
    return 'guide';
  }
  if (/\b(study|survey|data|report|benchmark|analysis|experiment)\b/i.test(title)) return 'research';
  return 'news';
}

/**
 * Build a classifier bound to the topic configuration.
 * Keyword matches in the title weigh 3x; multi-word phrases weigh 2x.
 */
export function buildClassifier(topics) {
  // Sub-skills inherit their category so a finding is reachable from both.
  const parentOf = new Map(topics.filter((topic) => topic.parent).map((topic) => [topic.id, topic.parent]));
  const compiled = topics.map((topic) => ({
    id: topic.id,
    keywords: topic.keywords.map((keyword) => {
      const normalized = String(keyword).toLowerCase().trim();
      return {
        normalized,
        weight: normalized.includes(' ') ? 2 : 1,
        pattern: new RegExp(`\\b${escapeRegExp(normalized).replace(/\s+/g, '\\s+')}\\b`, 'gi')
      };
    })
  }));

  return function classify({ title = '', text = '', sourceName = '', sourceId = '' } = {}) {
    const head = normalizeWhitespace(title).toLowerCase();
    const body = normalizeWhitespace(text).toLowerCase();
    const scored = [];

    for (const topic of compiled) {
      let score = 0;
      let hits = 0;
      for (const keyword of topic.keywords) {
        keyword.pattern.lastIndex = 0;
        const inBody = (body.match(keyword.pattern) || []).length;
        keyword.pattern.lastIndex = 0;
        const inTitle = (head.match(keyword.pattern) || []).length;
        if (!inBody && !inTitle) continue;
        hits++;
        score += keyword.weight * (Math.min(inBody, 4) + inTitle * 3);
      }
      if (score > 0) scored.push({ id: topic.id, score, hits });
    }

    scored.sort((a, b) => b.score - a.score || b.hits - a.hits || a.id.localeCompare(b.id));
    const type = detectType(title, sourceName, sourceId);

    const tags = [];
    for (const [tag, pattern] of PLATFORMS) {
      if (pattern.test(head) || pattern.test(body.slice(0, 8000))) tags.push(tag);
    }

    if (!scored.length) {
      return { topics: [], primaryTopic: null, tags: tags.slice(0, 5), type };
    }

    const top = scored[0].score;
    const floor = Math.max(3, top * 0.25);
    const kept = scored
      .filter((entry) => entry.score >= floor)
      .slice(0, 3)
      .map((entry) => ({
        id: entry.id,
        score: Math.round(entry.score * 10) / 10,
        share: Math.round((entry.score / top) * 100) / 100
      }));

    const withParents = [...kept];
    for (const entry of kept) {
      const parent = parentOf.get(entry.id);
      if (parent && !withParents.some((item) => item.id === parent)) {
        withParents.push({ id: parent, score: entry.score, share: 1, inherited: true });
      }
    }

    return {
      topics: withParents.slice(0, 4),
      primaryTopic: kept[0]?.id ?? null,
      tags: [...new Set([...tags.slice(0, 4), type])].slice(0, 6),
      type
    };
  };
}
