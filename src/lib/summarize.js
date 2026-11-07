/**
 * Deterministic extractive summarization.
 *
 * No model calls: sentences are ranked by term frequency, SEO vocabulary
 * density, title overlap and position, and actionable sentences are promoted
 * into "practices" that feed the generated skills.
 */

import { sentences, normalizeWhitespace, similarity, truncateAtWord, tokenSet, tokens } from './text.js';

export const SEO_TERMS = new Set(
  `seo google bing ranking rank rankings index indexing crawl crawler sitemap canonical schema snippet serp query keyword content link links traffic page pages site url urls
   snippet ctr impressions click clicks performance vitals lcp inp cls ttfb core web algorithm update penalty manual action recovery
   backlink backlinks domain authority ai overviews llm geo aeo query intent convert conversion session organic mobile desktop
   template structured data markup json-ld hreflang redirect redirects migration audit monitoring dashboard report reporting
   publisher news blog study data percent results increase decrease drop gain lift improve`
    .split(/\s+/)
    .filter(Boolean)
);

const ACTION_START =
  /^(use|add|ensure|avoid|test|measure|set|make sure|implement|remove|fix|prioritize|create|update|keep|check|monitor|track|include|write|build|focus|start|review|replace|reduce|improve|optimize|verify|consider|run|submit|follow|target|audit|document|report|beware|choose|map|structure|migrate|redirect|clean|prune|link|publish|refresh|debug|validate|compare|benchmark|crawl|block|allow|serve|prerender|compress|defer|preload|cache|segment|draft|expand|trim|delete|move|split|merge|combine|consolidate|leverage|invest|research|identify|analy[sz]e|attach|embed|host|pick|select|define|avoid|skip|strip|rewrite|shorten|reorder|cluster|classify|label|flag|surface|expose|display|render|load|store|fetch|send|submit|signal|probe|scan|survey|estimate|forecast|allocate)\b/i;

const ACTION_PHRASE =
  /\b(you should|we recommend|it'?s (best|important|critical|essential) to|best practice|pro tip|quick win|make sure|be sure to|instead of|do not|don'?t|never|must|worth (checking|doing)|key takeaway|the fix is|to fix this)\b/i;

const NOISE =
  /\b(cookie|subscribe to|newsletter|sign up for|all rights reserved|follow us on|share this|advertisement|sponsored|affiliate link|read more|listen to (this|the) (podcast|episode)|watch the (video|webinar)|register (now|for)|comment below|leave a comment|drop a comment|good luck|hit the like)\b/i;

const HEADING_LINE = /^#{1,6}\s/;

// Feed excerpts are often cut mid-sentence or start mid-thought; those fragments
// read like advice but carry no usable instruction.
const FRAGMENT_START =
  /^(and|but|plus|also|so|then|however|moreover|in addition|instead|else|or|yet|compare that|that said|meanwhile|for example|here'?s|this is why|which|that|because|while|when|if|as|of|to|with|from|than|it|they|their|these|those)\b/i;

function isTruncated(sentence) {
  return /(…|\.\.\.)$/.test(sentence) || /\.\.\.\s/.test(sentence);
}

const PROMO_START =
  /^(for more on|for more|read the full|check out|learn more|see how|download|get the|join (us|our)|watch the|listen to|subscribe|register|book a|grab (our|the)|try (our|the))/i;

function isNoise(sentence) {
  return (
    NOISE.test(sentence) ||
    HEADING_LINE.test(sentence) ||
    sentence.length > 400 ||
    FRAGMENT_START.test(sentence) ||
    isTruncated(sentence)
  );
}

function positionBonus(index, total) {
  if (total <= 1) return 0.1;
  return 0.15 * (1 - index / total);
}

function termDensity(sentence) {
  const words = tokens(sentence);
  if (!words.length) return 0;
  let hits = 0;
  for (const word of words) if (SEO_TERMS.has(word)) hits++;
  return hits / Math.sqrt(words.length);
}

function titleOverlap(sentence, titleTokens) {
  if (!titleTokens.size) return 0;
  const sentenceTokens = tokenSet(sentence);
  let hits = 0;
  for (const token of titleTokens) if (sentenceTokens.has(token)) hits++;
  return hits / titleTokens.size;
}

export function isActionable(sentence) {
  return ACTION_START.test(sentence) || ACTION_PHRASE.test(sentence);
}

function cleanPoint(sentence) {
  let value = normalizeWhitespace(sentence).replace(/^[\s\-–—*•·]+/, '').replace(/^\d+[.)]\s*/, '');
  value = value.replace(
    /^(in (this|the) (article|post|guide)|here'?s (how|what)|so,?|and|but|basically|essentially)\s+/i,
    ''
  );
  value = value.replace(
    /^(you (should|need to|must|can|will|might want to)|we recommend( that you)?|it'?s (important|critical|essential) to|make sure (that )?(you )?|the key is to|one (thing|tip) is to)\s+/i,
    ''
  );
  value = value.replace(/\s*\((read|source|via|image|photo)[^)]*\)\s*$/i, '');
  value = value.replace(/^["'“”‘’]+|["'“”‘’]+$/g, '');
  value = value.replace(/[\s,;:–—-]+$/u, '');
  if (!value) return '';
  value = value.charAt(0).toUpperCase() + value.slice(1);
  if (!/[.!?]$/.test(value)) value += '.';
  return truncateAtWord(value, 240);
}

/**
 * @returns {{summary: string, keyPoints: string[]}}
 */
export function summarize(text, { title = '', maxPoints = 6, maxSummarySentences = 4 } = {}) {
  const all = sentences(text).filter((sentence) => !isNoise(sentence));
  if (!all.length) return { summary: '', keyPoints: [] };

  const frequencies = new Map();
  for (const sentence of all) {
    for (const token of tokenSet(sentence)) {
      frequencies.set(token, (frequencies.get(token) || 0) + 1);
    }
  }
  const maxFrequency = Math.max(1, ...frequencies.values());
  const titleTokens = tokenSet(title);

  const scored = all.map((sentence, index) => {
    const unique = tokenSet(sentence);
    let tf = 0;
    for (const token of unique) tf += (frequencies.get(token) || 0) / maxFrequency;
    tf = tf / Math.sqrt(unique.size || 1);

    const numeric = /\d/.test(sentence) ? 0.1 : 0;
    const score =
      tf * 0.55 +
      termDensity(sentence) * 0.22 +
      titleOverlap(sentence, titleTokens) * 0.15 +
      positionBonus(index, all.length) +
      numeric;

    return { sentence, index, score };
  });

  const summaryParts = [...scored]
    .sort((a, b) => b.score - a.score)
    .slice(0, maxSummarySentences)
    .sort((a, b) => a.index - b.index)
    .map((entry) => entry.sentence);
  const summary = truncateAtWord(summaryParts.join(' '), 700);

  const candidates = [...scored]
    .sort((a, b) => {
      const actionDelta = Number(isActionable(b.sentence)) - Number(isActionable(a.sentence));
      return actionDelta || b.score - a.score;
    })
    .map((entry) => cleanPoint(entry.sentence))
    .filter((point) => point && point.length >= 45)
    .filter((point) => tokens(point).length >= 8)
    // Questions are prompts, not guidance; first-person text is narration.
    .filter((point) => !point.endsWith('?'))
    .filter((point) => !/^(I|I'm|I've|We|We're|My|Our|Me|He|She|They|Them|His|Her|Their)\b/.test(point))
    .filter((point) => !PROMO_START.test(point))
    // Podcast/video timestamps and chapter lists are not practices.
    .filter((point) => !/\b\d{1,2}:\d{2}\b/.test(point))
    // A practice that needed truncation is an unreadable half-sentence.
    .filter((point) => !point.endsWith('…'));

  const keyPoints = [];
  for (const point of candidates) {
    if (keyPoints.some((kept) => similarity(kept, point) > 0.7)) continue;
    keyPoints.push(point);
    if (keyPoints.length >= maxPoints) break;
  }

  return { summary, keyPoints };
}
