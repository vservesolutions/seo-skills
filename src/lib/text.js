/** Text utilities shared by extraction, classification and rendering. */

const STOPWORDS = new Set(
  `a an the and or but if then than that this these those of to in on for with as at by from is are was were be been being
   it its it's their they we you your our i he she them has have had do does did not no so such can could will would may
   might must more most other some any about into over under again further once here there all each few both own same
   only very just also new now get got make made which who whom what when where why how out up down off few many much
   like want need see look use using used one two three first last next per via etc`
    .split(/\s+/)
    .filter(Boolean)
);

export function normalizeWhitespace(value) {
  return String(value ?? '')
    .replace(/[\u00a0\u2000-\u200b\u202f\u2060\ufeff]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function stripTags(value) {
  return normalizeWhitespace(
    String(value ?? '')
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
  );
}

export function sentences(text) {
  // Split on paragraph boundaries first: joining blocks with whitespace would
  // glue headings and list labels onto the sentences that follow them.
  const blocks = String(text ?? '').split(/\n{2,}/);
  const out = [];

  for (const block of blocks) {
    const cleaned = normalizeWhitespace(block);
    if (!cleaned || cleaned.length < 25) continue;
    if (/^#{1,6}\s/.test(cleaned)) continue;

    const rough = cleaned.split(/(?<=[.!?])\s+(?=[A-Z0-9"'“‘(\[])/);
    for (const chunk of rough) {
      const value = chunk.trim();
      if (!value) continue;
      if (value.length <= 420) {
        out.push(value);
        continue;
      }
      // Extremely long "sentences" are usually unconverted markup: split again.
      for (const piece of value.split(/(?<=[.!?])\s+|\s+[;|]\s+/)) {
        const trimmed = piece.trim();
        if (trimmed.length > 24) out.push(trimmed);
      }
    }
  }

  return out.filter((s) => s.length >= 25);
}

export function tokens(text) {
  const matches = normalizeWhitespace(text)
    .toLowerCase()
    .match(/[\p{L}\p{N}][\p{L}\p{N}'-]*/gu);
  if (!matches) return [];
  return matches.filter((token) => token.length > 2 && !STOPWORDS.has(token));
}

export function tokenSet(text) {
  return new Set(tokens(text));
}

export function jaccard(a, b) {
  const setA = a instanceof Set ? a : tokenSet(a);
  const setB = b instanceof Set ? b : tokenSet(b);
  if (!setA.size || !setB.size) return 0;
  let intersection = 0;
  for (const value of setA) if (setB.has(value)) intersection++;
  return intersection / (setA.size + setB.size - intersection);
}

/** Fuzzy duplicate check between two pieces of prose. */
export function similarity(a, b) {
  return jaccard(a, b);
}

export function truncateAtWord(value, max) {
  const text = normalizeWhitespace(value);
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace > max * 0.6 ? slice.slice(0, lastSpace) : slice;
  return cut.replace(/[\s,;:.–—-]+$/u, '') + '…';
}

export function isMostlyEnglish(text) {
  const value = String(text ?? '');
  if (!value) return false;
  const letters = value.replace(/[^\p{L}]/gu, '');
  if (!letters) return false;
  const ascii = letters.replace(/[^\x20-\x7E]/g, '');
  return ascii.length / letters.length > 0.95;
}

export function titleCase(value) {
  return normalizeWhitespace(value).replace(/\b([a-z])/g, (m) => m.toUpperCase());
}
