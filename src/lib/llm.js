/**
 * Optional language-model pass over the skill library.
 *
 * The collector stays keyword-driven and works with no credentials: this module
 * turns itself off when SEO_LLM_KEY is unset. When a key is present it asks an
 * OpenAI-compatible endpoint (Google Gemini's free tier by default, or Groq,
 * OpenRouter, Cerebras, …) to audit whether a stored skill is really a
 * search-marketing skill and to write a one-line description of it.
 *
 * The model is advisory only: it never adds or removes a skill. Its verdicts are
 * recorded so the keyword filter can be tuned against them.
 */

import { createHash } from 'node:crypto';

const DEFAULT_BASE = 'https://generativelanguage.googleapis.com/v1beta/openai';
const DEFAULT_MODEL = 'gemini-2.5-flash-lite';
const MAX_SUMMARY_CHARS = 160;

/** Read the optional LLM settings; disabled unless a key is configured. */
export function llmConfig(env = process.env) {
  const key = String(env.SEO_LLM_KEY || '').trim();
  return {
    enabled: Boolean(key),
    key,
    base: String(env.SEO_LLM_BASE || DEFAULT_BASE).replace(/\/+$/, ''),
    model: String(env.SEO_LLM_MODEL || DEFAULT_MODEL),
    batchSize: clampInt(env.SEO_LLM_BATCH, 20, 1, 50),
    maxItems: clampInt(env.SEO_LLM_MAX, 400, 1, 5000),
    timeoutMs: 45_000
  };
}

function clampInt(value, fallback, min, max) {
  const parsed = Number.parseInt(String(value ?? ''), 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, parsed));
}

/** Stable identity for a cached verdict: the text the model actually saw. */
export function skillFingerprint(skill) {
  return createHash('sha256')
    .update(`${skill.name || ''}\n${skill.description || ''}`.trim().toLowerCase())
    .digest('hex')
    .slice(0, 24);
}

function systemPrompt(categories) {
  return [
    'You audit a library of third-party AI agent skills (SKILL.md files) for search marketing relevance.',
    'For each item decide whether a practising SEO would install it to do search-marketing work:',
    'technical SEO, on-page, content SEO, keyword/topic research, links, local, ecommerce, international,',
    'analytics, rank tracking, structured data, or visibility in AI answers and AI search.',
    'Reject generic software, design, sales, ads-only or social-media skills that merely mention a website.',
    '',
    `Choose exactly one category id from this list: ${categories.join(', ')}.`,
    'Use "unclear" when the text is too thin to judge.',
    'Write summary as one factual sentence (max 25 words) describing what the skill does. No marketing language.',
    '',
    'Respond with JSON only: {"results":[{"id":"…","seo":true,"category":"…","confidence":0.0,"summary":"…"}]}'
  ].join('\n');
}

function userPrompt(items) {
  return JSON.stringify(
    items.map((item) => ({
      id: item.id,
      name: item.name,
      repo: item.repo,
      description: String(item.description || '').slice(0, 400)
    }))
  );
}

/** Parse a model reply defensively; fenced or chatty output is tolerated. */
export function parseResults(content, allowedCategories) {
  let text = String(content || '').trim();
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced) text = fenced[1].trim();
  if (!text.startsWith('{')) {
    const first = text.indexOf('{');
    const last = text.lastIndexOf('}');
    if (first === -1 || last <= first) return [];
    text = text.slice(first, last + 1);
  }
  let payload;
  try {
    payload = JSON.parse(text);
  } catch {
    return [];
  }
  const rows = Array.isArray(payload) ? payload : payload.results;
  if (!Array.isArray(rows)) return [];

  const allowed = new Set(allowedCategories);
  const results = [];
  for (const row of rows) {
    if (!row || typeof row !== 'object') continue;
    const id = String(row.id || '').trim();
    if (!id) continue;
    const category = String(row.category || '').trim().toLowerCase();
    const summary = String(row.summary || '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, MAX_SUMMARY_CHARS);
    results.push({
      id,
      seo: row.seo === true,
      category: allowed.has(category) ? category : 'unclear',
      confidence: Number.isFinite(Number(row.confidence))
        ? Math.min(1, Math.max(0, Number(row.confidence)))
        : null,
      summary: summary.length >= 12 ? summary : ''
    });
  }
  return results;
}

async function postOnce({ config, messages, fetchImpl }) {
  const response = await fetchImpl(`${config.base}/chat/completions`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${config.key}`
    },
    body: JSON.stringify({
      model: config.model,
      temperature: 0,
      response_format: { type: 'json_object' },
      messages
    }),
    signal: AbortSignal.timeout(config.timeoutMs)
  });
  if (!response.ok) {
    const body = await response.text().catch(() => '');
    const error = new Error(`LLM request failed: ${response.status} ${body.slice(0, 200)}`.trim());
    error.status = response.status;
    error.retryAfter = Number(response.headers?.get?.('retry-after')) || 0;
    throw error;
  }
  const payload = await response.json();
  return payload?.choices?.[0]?.message?.content ?? '';
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Audit a list of skills. Cached fingerprints are never re-sent.
 *
 * @returns {{results: Map<string, object>, requests: number, cached: number,
 *            skipped: number, errors: string[], config: object}}
 */
export async function auditSkills(items, { config, cache = {}, categories = [], fetchImpl = fetch, log = () => {} } = {}) {
  const results = new Map();
  const outcome = { results, requests: 0, cached: 0, skipped: 0, errors: [], config };

  if (!config?.enabled) {
    outcome.skipped = items.length;
    return outcome;
  }

  const pending = [];
  for (const item of items) {
    const fingerprint = item.fingerprint || skillFingerprint(item);
    const hit = cache[fingerprint];
    if (hit) {
      results.set(item.id, { ...hit, cached: true });
      outcome.cached++;
    } else {
      pending.push({ ...item, fingerprint });
    }
  }

  if (pending.length > config.maxItems) {
    outcome.skipped = pending.length - config.maxItems;
    pending.length = config.maxItems;
  }

  const allowed = ['unclear', ...categories];
  for (let offset = 0; offset < pending.length; offset += config.batchSize) {
    const batch = pending.slice(offset, offset + config.batchSize);
    const messages = [
      { role: 'system', content: systemPrompt(allowed) },
      { role: 'user', content: userPrompt(batch) }
    ];
    let content = '';
    try {
      try {
        content = await postOnce({ config, messages, fetchImpl });
      } catch (error) {
        const retryable = error.status === 429 || error.status >= 500;
        if (!retryable) throw error;
        // Free tiers throttle aggressively; one short pause is usually enough.
        await sleep(Math.min(5000, Math.max(1000, (error.retryAfter || 2) * 1000)));
        content = await postOnce({ config, messages, fetchImpl });
      }
      outcome.requests++;
      const rows = parseResults(content, allowed);
      const byId = new Map(rows.map((row) => [row.id, row]));
      for (const item of batch) {
        const row = byId.get(item.id);
        if (!row) continue;
        const value = {
          seo: row.seo,
          category: row.category,
          confidence: row.confidence,
          summary: row.summary,
          model: config.model,
          at: new Date().toISOString()
        };
        results.set(item.id, value);
        cache[item.fingerprint] = value;
      }
      if (rows.length < batch.length) {
        log(`LLM returned ${rows.length}/${batch.length} verdicts for one batch`);
      }
    } catch (error) {
      // A failed batch leaves those skills unaudited; the library is unaffected.
      outcome.errors.push(error.message);
      log(`LLM batch failed: ${error.message}`);
    }
  }

  return outcome;
}

/** Read a JSON cache file; a missing or corrupt cache is an empty one. */
export async function readCache(fs, file) {
  try {
    const parsed = JSON.parse(await fs.readFile(file, 'utf8'));
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}
