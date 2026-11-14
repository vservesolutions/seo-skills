---
name: "seo-ai-optimizer"
description: "Optimize a website or platform for search engines (SEO) AND for AI answer engines and app directories (AEO/GEO) — Google, Bing, ChatGPT Apps, Perplexity, Gemini, Claude/MCP. Audits the whole codebase, produces a prioritized improvement list, builds an admin checklist page with submission instructions and check-off progress, and tracks Google ranking before/after. Use when asked to improve SEO, rank on Google, get cited by AI, submit to the ChatGPT app store, or build an SEO admin dashboard. Triggers: \"improve SEO\", \"rank on Google\", \"SEO audit\", \"AI SEO\", \"AEO\", \"GEO\", \"llms.txt\", \"ChatGPT…"
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "davepartner/seo-ai-optimizer"
repo_url: "https://github.com/davepartner/seo-ai-optimizer"
source: "https://github.com/davepartner/seo-ai-optimizer/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/davepartner/seo-ai-optimizer/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · davepartner/seo-ai-optimizer · SKILL.md · MIT
     Source: https://github.com/davepartner/seo-ai-optimizer/blob/HEAD/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO & AI Discovery Optimizer

Make a website or platform **rank on search engines** and **get found/cited by AI** — then give the admin
a clean page to work through and watch the numbers move.

It is **framework- and language-agnostic**: it audits whatever the app is built with, then builds the
admin page and the fixes in that stack. It optimizes for two audiences at once:

1. **Search engines** — Google, Bing (classic SEO: crawl, index, rank).
2. **AI answer engines & app directories** — ChatGPT Apps, Perplexity, Gemini, Claude/MCP (AEO/GEO:
   be **crawlable**, **machine-readable**, and **quotable**).

> **Honesty rule:** not every "AI SEO trick" works. `llms.txt` is cheap to add but many AI crawlers
> ignore it; the reliable levers are **crawlability, structured data, clear content, entity clarity, and
> real citations**. This skill says what actually helps.

---

## The pipeline

```
Scan ─▶ Audit ─▶ Build admin page ─▶ Submit ─▶ Implement ─▶ Measure (before/after)
```

0. **Scan** the platform + source code — routes, templates, metadata, rendering, sitemaps, robots,
   structured data, and existing SEO artifacts (`references/discovery.md`).
1. **Audit** against the checklist, split into **code-level findings** and **content/AI findings**
   (`references/source-audit.md`, `references/technical-seo.md`, `content-seo.md`, `ai-discovery.md`).
2. **Build the admin page** — sections of checkable items, progress, "how to submit" details, the
   source-audit list, and the ranking chart (`references/admin-ui.md`).
3. **Submit** where required — Google Search Console, Bing/IndexNow, ChatGPT Apps, MCP directory, etc.
   (`references/submissions.md`).
4. **Implement** the safe wins — without breaking URLs, canonicals, redirects, or the UI.
5. **Measure** — capture the Google baseline (impressions, clicks, CTR, average position) and compare
   before/after (`references/ranking-tracking.md`, `examples/ranking.mjs`).

---

## The admin page (the deliverable)

A page in the admin (e.g. **"SEO & AI"**) with:

- **Sections** — Technical · Content & E-E-A-T · AI Discovery · Submissions · Measurement.
- **Checkable items** — each shows what to do, **why it matters**, and **how** (with a link). The admin
  ticks them off; progress bars per section + overall.
- **Submission guide** — step-by-step where to submit (GSC, Bing, IndexNow, ChatGPT Apps, MCP) with links.
- **Source-audit results** — the code-level findings from scanning the repo, each with the fix and file.
- **Ranking before/after** — a chart of Google impressions/clicks/CTR/position from the baseline to now.
- **Priority** — remaining items sorted by impact × effort, so the admin knows what to do next.

Full spec: `references/admin-ui.md`. The checklist data lives in `examples/seo-checklist.json`.

---

## AI discovery (AEO / GEO) — what actually helps

- **Be crawlable by AI.** In `robots.txt`, allow the **search/retrieval** crawlers that produce
  citations — `OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot` — and decide your policy on
  **training** crawlers (`GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`). See `references/ai-discovery.md`.
- **Be machine-readable.** JSON-LD `Organization`, `WebSite`, `BreadcrumbList`, `Article`, `Product`,
  `FAQPage`, `HowTo`, `LocalBusiness`. Clear entity/brand info.
- **Be quotable.** Concise answers, definitions, FAQs, dates, and sources. AI cites content that is
  explicit and verifiable.
- **`llms.txt`** — add it (cheap), but **don't rely on it**; most AI crawlers still read HTML directly.
- **ChatGPT Apps / app store** — build an **MCP server** via the **Apps SDK**, then submit through the
  **plugin/app submission portal** (OAuth + domain verification + app guidelines). See
  `references/submissions.md`.

## Google ranking before/after

- Capture a **baseline** from **Google Search Console** (Performance → impressions, clicks, CTR, average
  position) **before** changes; store it.
- Re-measure after; compare with `examples/ranking.mjs` (`compareSnapshots`) and show the deltas on the
  admin page. Note: GSC "average position" is an average, not your literal rank per query — treat it as
  directional.

---

## Safety (don't wreck the SEO you have)

- **Never change or remove existing URLs** without a **301**; preserve canonicals and redirects.
- No cloaking, no sneaky redirects, no hidden text, no doorway pages — they cause penalties.
- Additive `robots.txt`/`sitemap` changes only; test that key pages still return 200 and are indexable.
- Don't touch the UI unless asked; keep Core Web Vitals in the good range.
- Snapshot the baseline **before** editing, so the before/after is real.

---

## References

- `references/discovery.md` — scan the platform + source code.
- `references/technical-seo.md` — crawl, index, canonicals, sitemaps, robots, rendering, CWV, structured data.
- `references/content-seo.md` — titles, headings, E-E-A-T, internal links, FAQ.
- `references/ai-discovery.md` — AI crawlers, robots policy, llms.txt, machine-readable content, citations.
- `references/submissions.md` — exact submission steps: GSC, Bing/IndexNow, ChatGPT Apps, MCP, others.
- `references/admin-ui.md` — the "SEO & AI" admin page (sections, checkboxes, submissions, chart).
- `references/source-audit.md` — how to audit the codebase and produce the improvement list.
- `references/ranking-tracking.md` — Google Search Console baseline + before/after.
- `references/report-template.md` — the audit report format.
- `examples/seo-checklist.json` — the structured checklist data (sections + items).
- `examples/checklist.mjs` / `ranking.mjs` — tested progress + before/after helpers.
- Run `npm install && npm test` (checklist + ranking tests).
