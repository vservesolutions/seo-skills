---
name: "audit-ai-readiness"
description: "Check if AI engines can read and quote a website - whether robots.txt blocks the crawlers that Perplexity, ChatGPT, Claude, Gemini and Grok cite from, and what structured data (JSON-LD schema) a page is missing, with paste-ready fixes in priority order. Use when the user asks \"why is my page never cited by AI\", \"is my site blocked for AI crawlers\", \"check my robots.txt for GPTBot / PerplexityBot / ClaudeBot\", \"audit my schema / structured data for AI\", or \"is my page ready for AI search\"."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "Geondex/skills"
repo_url: "https://github.com/Geondex/skills"
source: "https://github.com/Geondex/skills/blob/HEAD/skills/audit-ai-readiness/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Geondex/skills/HEAD/skills/audit-ai-readiness/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · Geondex/skills · skills/audit-ai-readiness/SKILL.md · MIT
     Source: https://github.com/Geondex/skills/blob/HEAD/skills/audit-ai-readiness/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Audit AI readiness

Answer the question "My page is never cited. Can AI engines even read it?" This skill checks two things and gives the fixes in order:

1. Does robots.txt block the crawlers that AI engines cite from? (free)
2. Does the page have the structured data engines use? (1 credit per URL)

Shared details (auth, errors, limits): see the `geondex-api` skill.

## Be honest with the user

Being readable is needed, but it is not enough. Structured data is hygiene, not the main lever. AI engines mostly cite pages that other sites mention and link to. A perfect score does not mean the page will be cited. `check-ai-visibility` is the real measurement. Say this once, plainly, when you present the results.

## Prerequisites

- `GEONDEX_API_KEY` is set.
- A domain (for the crawler check) and one or more full page URLs (for the audit).

## Workflow

### 1. Crawler check (free)

```bash
curl -s -G https://geondex.com/api/v1/crawlers -H "Authorization: Bearer $GEONDEX_API_KEY" --data-urlencode "domain=example.com"
```

Results are cached for one hour.

Response fields:

- `data.hasRobotsTxt`: `false` means there is no robots.txt. That means everything is allowed, not blocked.
- `data.crawlers[]`: `{ agent, engine, kind, blocked, advisoryOnly? }`. `kind` is `citation` (the crawler fetches pages that the engine cites in answers) or `training` (only collects data to train models).
- `data.blockedCitation[]`: citation crawlers that are really blocked. **This is the list that matters.**
- `data.blockedTraining[]`: training-only crawlers that are blocked.

How to read it:

- `blockedCitation` is not empty: this is the first fix, before anything else. That engine cannot fetch the site to cite it. Show which `agent` and which `engine`.
- Only `blockedTraining` is not empty: this is a choice, not a problem. Blocking training crawlers does not stop citations. Do not tell the user to unblock them unless they want to.
- `advisoryOnly: true`: this agent fetches pages even when robots.txt says no, so the rule does not really block it.

### 2. Page audit (1 credit per URL)

Tell the user the cost first: 1 credit per URL.

```bash
curl -s https://geondex.com/api/v1/audit -H "Authorization: Bearer $GEONDEX_API_KEY" -H "content-type: application/json" -d '{"url":"https://example.com/pricing"}'
```

`url` must be a full `http://` or `https://` URL to a public page. Audit the page that should be cited for the buyer's question, not only the homepage.

Response fields:

- `data.score`: 0 to 100 citation-readiness.
- `data.schemaTypes[]`: the schema.org types found on the page, like `Organization` or `Product`.
- `data.issues[]`: `{ code, severity, title, fix?, detail?, snippet? }`.
  - `severity`: `error`, `warn` or `tip`.
  - `fix`: what to do, in plain text.
  - `snippet`: paste-ready JSON-LD, when there is one.

### 3. Present the fixes in priority order

1. **Blocked citation crawlers** (from step 1). Show the robots.txt lines to change.
2. **`error` issues**. Broken or wrong structured data.
3. **`warn` issues**. Missing schema that engines use, for example `Organization`.
4. **`tip` issues**. Nice to have.

For each fix: the `title`, one line from `fix`, and the `snippet` in a code block if there is one. Put the score and the list of `schemaTypes` at the top.

If you work in the user's code, you can apply the fixes: add the JSON-LD in a `<script type="application/ld+json">` tag, or edit robots.txt. Show the diff and ask before you change files. Replace placeholder values in a snippet (like a logo URL) with the real ones, and do not invent facts.

### 4. Close with the next step

- The real lever: get mentioned and linked on the sites that AI engines already cite for the user's questions. `check-ai-visibility` shows them in `citedInstead`.
- After the fixes are live, and some time has passed, re-check with `check-ai-visibility` using the same question to see if anything changed.

## Errors

- `400 blocked_host` or `invalid_domain`: use a public domain or URL.
- `400 invalid_request`: the URL is not a valid `http(s)` URL.
- `502 fetch_failed`: the page could not be fetched (down, blocked, or returned an error status). Check that it opens in a browser. Safe to retry once.
- Full table: `geondex-api`.
