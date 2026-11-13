---
name: "wordstat"
description: "Collect reliable Yandex Wordstat frequencies and turn them into SEO recommendations, keyword vocabularies, H1 and subtitle guidance, demand research, or market sizing. Use when the user mentions wordstat, вордстат, частотность, частоты фраз, SEO semantics, SEO dictionary, H1, keyword research, search demand, Yandex Search API Wordstat, or resumable collection with retry/quota handling."
category: "on-page-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "IgorShkarin/yandex-wordstat-collector"
repo_url: "https://github.com/IgorShkarin/yandex-wordstat-collector"
source: "https://github.com/IgorShkarin/yandex-wordstat-collector/blob/HEAD/skills/wordstat/SKILL.md"
raw_source: "https://raw.githubusercontent.com/IgorShkarin/yandex-wordstat-collector/HEAD/skills/wordstat/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 3
collected: "2026-11-13"
---

<!-- Unspecified skill · IgorShkarin/yandex-wordstat-collector · skills/wordstat/SKILL.md · MIT
     Source: https://github.com/IgorShkarin/yandex-wordstat-collector/blob/HEAD/skills/wordstat/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Wordstat

Use the bundled `wordstat-di` collector for Yandex Wordstat work. Prefer reliable state and coverage reporting over raw API calls.

## Quick Start

```bash
node ./bin/wordstat.js \
  --phrases "куда вложить деньги,робо эдвайзер" \
  --regions 225,213 \
  --out-dir docs/analysis/wordstat \
  --max-requests 50
```

## Required Reporting

Always report:

- requested phrase-region pairs;
- completed pairs;
- incomplete pairs, especially `totalCount: null`;
- failed pairs and request IDs when present;
- quota ledger;
- top seed totals;
- top expanded phrases;
- exact next command when incomplete or failed pairs remain.

## Cost-Aware Delegation

When subagent tools are available, use the fastest economical model for bounded,
independent work if either condition is true:

- at least two tasks can run in parallel; or
- the source set exceeds 50 phrases or the full SEO deliverable is requested.

Delegate normalization, deduplication, part-of-speech tagging, draft vocabulary
lists, example-phrase assembly, and count/coverage checks. Use at most two junior
subagents, give each one narrow deliverable, and forbid recursive delegation.
Keep API collection deterministic in the CLI. Never pass API keys or unrelated
user context to a subagent.

The main agent owns the search objective, regions, request budget, intent
clustering, final phrase selection, interpretation, SEO judgment, validation,
and final response. Skip delegation when coordination would cost more than doing
a small task directly.

## SEO Deliverable

When the user asks how a target phrase, H1, subtitle, or page can rank, read
`references/seo-content.md` and produce its complete contract:

- recommended H1 and `<p>` subtitle;
- exactly 25 nouns, 25 adjectives, and 25 verbs;
- exactly 25 natural example phrases;
- exactly 10 prioritized recommendations for the H1 and subtitle pair.

Base conclusions on completed Wordstat data. Label generated vocabulary as
recommendations, not observed frequencies. Do not guarantee rankings or recommend
keyword stuffing.

## Reliability Rules

- Never treat `totalCount: null` as completed.
- Use `--retry-incomplete` to recover incomplete and failed pairs.
- Use `--export-incomplete-phrases` when smaller batches are needed.
- Use `--summary-only` for read-only status checks.
- Treat Yandex API `403 Permission denied` as an access setup issue first: check service-account role `search-api.webSearch.user`, API-key scope `yc.search-api.execute`, and active billing.
- Do not print API keys.

## References

- Read `references/wordstat-api.md` for state schema, CLI flags, and known pitfalls.
- Read `references/seo-content.md` for SEO vocabulary and H1/subtitle analysis.
