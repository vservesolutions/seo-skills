import assert from 'node:assert/strict';
import test from 'node:test';

import { auditSkills, llmConfig, parseResults, skillFingerprint } from '../src/lib/llm.js';

const categories = ['technical-seo', 'content-seo', 'analytics-measurement'];

const item = (id, name = `skill-${id}`) => ({ id, name, repo: 'acme/seo', description: `${name} for SEO audits` });

/** Minimal OpenAI-compatible response with one verdict per requested id. */
function reply(ids, extra = {}) {
  return {
    ok: true,
    status: 200,
    headers: new Headers(),
    json: async () => ({
      choices: [
        {
          message: {
            content: JSON.stringify({
              results: ids.map((id) => ({
                id,
                seo: true,
                category: 'technical-seo',
                confidence: 0.9,
                summary: `Audits ${id} issues.`,
                ...extra
              }))
            })
          }
        }
      ]
    })
  };
}

test('no key means the whole pass is a no-op', async () => {
  const config = llmConfig({});
  assert.equal(config.enabled, false);
  let calls = 0;
  const outcome = await auditSkills([item('a'), item('b')], {
    config,
    categories,
    fetchImpl: async () => {
      calls++;
      return reply(['a', 'b']);
    }
  });
  assert.equal(calls, 0);
  assert.equal(outcome.results.size, 0);
  assert.equal(outcome.skipped, 2);
});

test('gemini is the default endpoint and groq can be swapped in by env', () => {
  const gemini = llmConfig({ SEO_LLM_KEY: 'k' });
  assert.equal(gemini.base, 'https://generativelanguage.googleapis.com/v1beta/openai');
  assert.equal(gemini.model, 'gemini-3.5-flash-lite');

  const groq = llmConfig({
    SEO_LLM_KEY: 'k',
    SEO_LLM_BASE: 'https://api.groq.com/openai/v1/',
    SEO_LLM_MODEL: 'llama-3.3-70b-versatile'
  });
  assert.equal(groq.base, 'https://api.groq.com/openai/v1');
  assert.equal(groq.model, 'llama-3.3-70b-versatile');
});

test('items are batched and every verdict is recorded', async () => {
  const config = { ...llmConfig({ SEO_LLM_KEY: 'k', SEO_LLM_DELAY: '0' }), batchSize: 4, maxItems: 100 };
  const items = Array.from({ length: 10 }, (_, index) => item(String(index)));
  const sizes = [];
  const outcome = await auditSkills(items, {
    config,
    categories,
    fetchImpl: async (_url, options) => {
      const sent = JSON.parse(options.body).messages.at(-1).content;
      const ids = JSON.parse(sent).map((row) => row.id);
      sizes.push(ids.length);
      return reply(ids);
    }
  });
  assert.deepEqual(sizes, [4, 4, 2]);
  assert.equal(outcome.requests, 3);
  assert.equal(outcome.results.size, 10);
  assert.equal(outcome.results.get('7').category, 'technical-seo');
});

test('a cached fingerprint is never sent again', async () => {
  const config = llmConfig({ SEO_LLM_KEY: 'k' });
  const skill = item('a', 'audit-crawler');
  const cache = {};
  let calls = 0;
  const fetchImpl = async (_url, options) => {
    calls++;
    const sent = JSON.parse(options.body).messages.at(-1).content;
    return reply(JSON.parse(sent).map((row) => row.id));
  };

  await auditSkills([skill], { config, categories, cache, fetchImpl });
  const second = await auditSkills([skill], { config, categories, cache, fetchImpl });

  assert.equal(calls, 1);
  assert.equal(second.cached, 1);
  assert.equal(second.requests, 0);
  assert.equal(second.results.get('a').seo, true);
  assert.ok(cache[skillFingerprint(skill)], 'verdict is stored under the fingerprint');
});

test('malformed and chatty replies are tolerated instead of crashing', async () => {
  const config = { ...llmConfig({ SEO_LLM_KEY: 'k', SEO_LLM_DELAY: '0' }), batchSize: 1 };
  let call = 0;
  const outcome = await auditSkills([item('a'), item('b')], {
    config,
    categories,
    log: () => {},
    fetchImpl: async (_url, options) => {
      const ids = JSON.parse(JSON.parse(options.body).messages.at(-1).content).map((row) => row.id);
      const body =
        call++ === 0
          ? 'sorry, I cannot help with that'
          : `\`\`\`json\n{"results":[{"id":"${ids[0]}","seo":false,"category":"not-a-real-category","summary":"x"}]}\n\`\`\``;
      return { ok: true, status: 200, headers: new Headers(), json: async () => ({ choices: [{ message: { content: body } }] }) };
    }
  });
  assert.equal(outcome.errors.length, 0);
  assert.equal(outcome.results.has('a'), false, 'unparsable reply leaves that skill unaudited');
  // Unknown categories fall back to "unclear" and a too-short summary is dropped.
  assert.equal(outcome.results.get('b').category, 'unclear');
  assert.equal(outcome.results.get('b').summary, '');
});

test('a 429 is retried, then a hard failure is reported without losing the run', async () => {
  const config = { ...llmConfig({ SEO_LLM_KEY: 'k', SEO_LLM_DELAY: '0' }), batchSize: 5 };
  let calls = 0;
  const outcome = await auditSkills([item('a')], {
    config,
    categories,
    log: () => {},
    fetchImpl: async () => {
      calls++;
      if (calls === 1) {
        return {
          ok: false,
          status: 429,
          headers: new Headers({ 'retry-after': '0.1' }),
          text: async () => 'rate limited'
        };
      }
      return reply(['a']);
    }
  });
  assert.equal(calls, 2);
  assert.equal(outcome.requests, 1);
  assert.equal(outcome.results.get('a').seo, true);

  const failing = await auditSkills([item('b')], {
    config,
    categories,
    log: () => {},
    fetchImpl: async () => ({ ok: false, status: 401, headers: new Headers(), text: async () => 'bad key' })
  });
  assert.equal(failing.results.size, 0);
  assert.match(failing.errors[0], /401/);
});

test('verdicts are aligned by position when the model echoes different ids', async () => {
  const config = { ...llmConfig({ SEO_LLM_KEY: 'k', SEO_LLM_DELAY: '0' }), batchSize: 2 };
  const logs = [];
  const outcome = await auditSkills([item('a'), item('b')], {
    config,
    categories,
    log: (line) => logs.push(line),
    fetchImpl: async () => reply(['first', 'second'])
  });
  assert.equal(outcome.results.size, 2, 'a same-length reply is not discarded');
  assert.equal(outcome.results.get('a').seo, true);
  assert.match(logs[0], /aligned 2 verdicts by position/);
});

test('parseResults ignores malformed rows and clamps confidence', () => {
  const rows = parseResults(
    '{"results":[{"id":"a","seo":true,"category":"Content-SEO","confidence":4,"summary":"Audits crawl budget waste."},{"id":"","seo":true},{"nope":1}]}',
    categories
  );
  assert.equal(rows.length, 1);
  assert.equal(rows[0].category, 'content-seo');
  assert.equal(rows[0].confidence, 1);
});
