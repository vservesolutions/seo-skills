---
name: "seo-audit"
description: "Audit a website or web app for SEO and AEO (answer-engine optimization) and produce a prioritized, evidence-backed report. Use this whenever the user asks to \"audit SEO\", \"check SEO\", \"improve search ranking\", \"review meta tags / Open Graph / structured data\", \"why isn't my site showing up on Google\", \"make my site rank\", \"check my sitemap/robots.txt\", or mentions crawlability, indexing, rich results, JSON-LD, canonical tags, social share previews, or getting cited by AI assistants (ChatGPT, Perplexity, Google AI Overviews). Also trigger when someone ships a marketing site, landing page…"
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "chsistrying/claude-seo-skills"
repo_url: "https://github.com/chsistrying/claude-seo-skills"
source: "https://github.com/chsistrying/claude-seo-skills/blob/HEAD/skills/seo-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/chsistrying/claude-seo-skills/HEAD/skills/seo-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · chsistrying/claude-seo-skills · skills/seo-audit/SKILL.md · MIT
     Source: https://github.com/chsistrying/claude-seo-skills/blob/HEAD/skills/seo-audit/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO + AEO Audit

Produce an audit a developer can act on the same day: concrete findings, each with evidence
(the actual tag, the actual HTTP response) and a fix, ranked by impact. Do **not** hand back a
generic "add alt text and use keywords" listicle — those are worthless. The value is in checking
*this* site and reporting what is actually broken.

SEO (ranking in search results) and AEO (getting quoted by AI answer engines) share the same
foundation: a crawler must be able to fetch your URL and read real content and metadata in the
**raw HTML response**, without running your JavaScript. Most of the highest-impact findings come
from that one fact, so establish it first.

## Step 0 — Establish what you're auditing

Before checking anything, figure out three things. Guessing here wastes the whole audit.

1. **Is there a live URL?** If yes, you audit what crawlers actually receive (best signal). If
   not, audit the build output / source and say so — some checks (real HTTP status, redirects)
   can't be verified without a deployment.
2. **What renders the HTML?** Static file, server-rendered (SSR), statically generated (SSG), or
   client-rendered (CSR/SPA)? Look at the framework: a plain Vite/CRA React or Vue SPA is CSR by
   default; Next/Nuxt/Astro/SvelteKit are usually SSR/SSG; a `.html` file is static. This single
   fact drives the most important check below.
3. **What are the routes/pages?** Home, product/landing pages, blog posts, legal pages. You'll
   sample across types — a per-page problem (e.g. every route serving the same title) only shows
   up when you compare pages.

## Step 1 — The rendering test (do this first, it finds the biggest problems)

A crawler for Google *can* execute JS, but it does so on a delay and imperfectly. **Bing,
DuckDuckGo, and nearly every AI crawler (GPTBot, PerplexityBot, ClaudeBot, Bytespider) and every
social/link-preview scraper (Slack, Discord, iMessage, X/Twitter, LinkedIn, Facebook, WhatsApp)
do not run JS at all.** They read only the raw HTML. So the question that decides half your
findings is: **what is in the raw HTML before JavaScript runs?**

Test it. Fetch the raw HTML of several different routes — a JS-free fetch (`curl -sL <url>`, or
WebFetch, which does not execute page JS) — and inspect, per route:

- Is the **`<title>`** specific to that page, or does every route return the same (usually the
  homepage's) title?
- Are **`<meta name="description">`**, **Open Graph** (`og:title`/`og:description`/`og:image`),
  and **`<link rel="canonical">`** present and *correct for that route*?
- Is the **main body content** (article text, product copy, headings) present in the HTML, or is
  the body essentially `<div id="root"></div>` with nothing inside?
- Is the **JSON-LD** (`<script type="application/ld+json">`) present in the raw HTML?

Interpreting the result:

- **CSR trap (very common, very damaging).** If every route returns the same title/meta and an
  empty body shell, the site is client-rendered and its per-page SEO exists *only after JS runs*.
  Consequences to report explicitly, because the user usually doesn't realize the scope:
  - Every shared link (blog post, product page) shows the generic homepage preview — killing
    social CTR.
  - Bing / AI engines index an empty shell for every URL → the content is invisible to them.
  - **The canonical trap:** if the static `index.html` hardcodes `rel="canonical"` to the
    homepage, *every* route ships that canonical in raw HTML. Crawlers can collapse all pages
    into the homepage and drop them from the index. This is severe — flag it as P0.
  - Fix: prerender or server-render the routes. Name concrete options for their stack (e.g. for a
    Vite SPA: a prerender plugin / `react-snap` / migrate to SSG; for Next.js: ensure pages aren't
    forced client-only). Prerendering the static, public routes usually solves it with the least
    change.
- **SSR/SSG/static.** If each route already ships correct, unique metadata and real content, note
  it as a strength and move on to the finer checks — the foundation is sound.

If there is no live URL, reason from the source: an `index.html` with a single root div and a
client router is CSR; check whether the build step prerenders.

## Step 2 — Run the category checks

Work through `references/checklist.md` (indexability, metadata, structured data, social,
sitemap/robots, content/semantics, performance signals, AEO). Read it now — it is the substance
of the audit. For each category, report what you actually observed on this site with the evidence,
not a definition of the category.

Structured data (JSON-LD) has its own reference because it's where rich results and AI citations
are won or lost: read `references/structured-data.md` when checking schema, and validate any
JSON-LD you find (correct `@type`, required properties present, values matching visible content,
no fabricated `aggregateRating`/review data — fake ratings get manual actions).

Prefer real tools over eyeballing where available: fetch `robots.txt` and `sitemap.xml` and
confirm they parse and the URLs 200; check that `sitemap.xml` matches the actual routes (stale or
missing entries are common); verify redirects and status codes with the live URL.

## Step 3 — Report

Lead with what matters. Use this structure:

```
# SEO + AEO Audit — <site>

**Verdict:** <2-3 sentences: overall health + the single most important thing to fix>

## 🔴 P0 — Critical (silently breaking indexing/sharing)
- **<finding>** — <evidence: the actual tag/response>. Impact: <what it costs>. Fix: <concrete step>.

## 🟡 P1 — Should fix
...

## 🟢 P2 — Nice to have
...

## Strengths (already done well)
- <don't just list problems — note what's correct so the user doesn't "fix" working things>
```

Rules that keep the report useful:

- **Rank by impact, not by category.** A wrong canonical outranks a missing `twitter:site`. The
  user acts top-down, so order must reflect real cost.
- **Every finding carries evidence.** Quote the actual title that repeated, the canonical URL that
  was wrong, the HTTP status. "Meta descriptions could be improved" is noise; "all 12 blog posts
  return `<title>Homepage Title</title>` in raw HTML — verified via curl" is a finding.
- **Every finding carries a fix** specific to their stack, not a textbook definition.
- **Note strengths.** It calibrates trust and stops the user from breaking things that work.
- **Don't invent problems.** If the foundation is solid, say so. A short honest audit beats a
  padded one.

## What NOT to do

- Don't keyword-stuff recommendations or suggest doorway/cloaking tactics — modern search
  penalizes them and AEO ignores them.
- Don't recommend fake reviews, fake ratings, or fabricated structured data.
- Don't produce a generic checklist with no reference to what this site actually does.
- Don't over-index on tiny wins (a missing `theme-color`) while a CSR/canonical problem is
  silently deindexing the whole site.
