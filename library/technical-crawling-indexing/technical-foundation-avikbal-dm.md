---
name: "technical-foundation"
description: "Audit and fix the technical base that decides whether a site can be crawled, indexed, rendered, and used. Covers crawlability, indexation, rendering, internal linking, site structure, security, and Core Web Vitals read from CrUX field data, plus deploy-time drift checks so wins do not silently regress. Use when someone asks for a technical SEO audit, has crawl or indexing problems, wants Core Web Vitals or page speed work, asks about robots, sitemaps, canonicals, rendering, or wants to know why good pages are not getting indexed or ranked. Programmatic and pages-at-scale checks live here too."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "avikbal-dm/claude-seo-skills"
repo_url: "https://github.com/avikbal-dm/claude-seo-skills"
source: "https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/technical-foundation/SKILL.md"
raw_source: "https://raw.githubusercontent.com/avikbal-dm/claude-seo-skills/HEAD/plugins/growth-os/skills/technical-foundation/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · avikbal-dm/claude-seo-skills · plugins/growth-os/skills/technical-foundation/SKILL.md · MIT
     Source: https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/technical-foundation/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Technical Foundation

## What this does

Technical SEO is plumbing. It rarely wins on its own, but it can lose everything. If a page cannot be crawled, indexed, or rendered, nothing else you do reaches a buyer. This skill finds the blocks between your content and the search engine, and between your page and the user, then fixes them in the order that protects revenue.

Spend effort where a block touches demand or conversion. A canonical error on a money page outranks a missing meta description on a tag archive every time.

## When to use it

Use it for a technical pass, an indexation problem, a speed or Core Web Vitals project, a migration check, or a pages-at-scale build. For a single broken page, just fix it. For a full business read, run `growth-audit` first and let it route the technical items here.

## Data you pull

- **Google Search Console**: Index coverage and page indexing reports, the crawl stats report, URL Inspection for render and indexation status, and the queries the affected pages serve.
- **Core Web Vitals (CrUX field data)**: LCP, INP, and CLS at the 75th percentile over the rolling 28-day window. Good is LCP at or under 2.5s, INP at or under 200ms, CLS at or under 0.1. Read field data, not lab scores, because field data is what Google uses.
- **A crawler** (Ahrefs Site Audit or equivalent): the full crawl picture, broken links, redirect chains, orphan pages, and internal link distribution.
- **Server logs** where available: how bots actually spend crawl budget, which matters on large sites.

## Method

### 1. Crawlability

Confirm robots rules, sitemaps, and internal links let bots reach the pages that earn revenue. Find orphan money pages, redirect chains, and crawl traps that waste budget on junk.

### 2. Indexation

Use the page indexing report to find pages excluded when they should not be, and indexed when they should not be. Index bloat dilutes authority. Missing index on a commercial page is lost revenue. Treat both.

### 3. Rendering

For JavaScript-heavy pages, confirm the content and links survive rendering. Inspect the rendered HTML, not just the source. A page that renders empty to the bot ranks for nothing.

### 4. Structure and internal linking

Check that authority flows to the pages that convert. Strong internal linking to commercial pages is one of the cheapest ranking levers there is, and most sites under-use it.

### 5. Core Web Vitals

Read field CWV at p75. INP is the metric most sites fail, and it needs JavaScript work: break long tasks, defer non-critical scripts, yield to the main thread. LCP responds to image preloading, critical CSS, and font handling. CLS needs explicit dimensions on every image, embed, and ad slot. Frame each as a conversion issue where it sits on a money page, because a form that lags on submit loses leads.

### 6. Security and hygiene

HTTPS, correct status codes, clean canonicals, and no mixed content. Boring, and load-bearing.

### 7. Programmatic and scale

For template-generated pages, guard against thin content, index bloat, and duplicate patterns. Set the rules before the pages ship, not after Google has crawled ten thousand of them.

## Drift checks

After a deploy, re-check the items most likely to break: robots, canonicals, indexation on key templates, and CWV on changed pages. Set alerts at 80 percent of the CWV thresholds, so an INP regression past 160ms or an LCP creep past 2.0s surfaces before it hits your 28-day field window and your rankings.

## Output

A prioritized fix list, each item with its evidence, the fix, the owner, and whether it blocks demand, conversion, or neither. Lead with the blocks on money pages.

## Guardrails

- Field data describes users. Lab data describes a test. Weight field data higher.
- Not every technical issue matters. Rank by whether it touches a page that earns.
- Confirm a fix in the field before calling it done, since lab improvements do not always reach the 75th percentile.

## Hands off to

`structured-data-engine` for schema, `search-demand-map` once the pages can be found, `conversion-cro` when a speed issue is costing leads, and `growth-intelligence` to watch for regressions over time.

---

## About the author

Avik Bal is a B2B digital marketing practitioner specializing in web architecture, SEO, content strategy, and marketing analytics. He has helped enterprise software, fintech, and technology companies drive growth through scalable digital marketing programs. Avik is the author of *CITED: The Growth Operating System for AI Search*.

Part of the Growth Operating System. https://github.com/avikbal-dm/claude-seo-skills
