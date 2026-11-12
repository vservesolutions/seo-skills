---
name: "seo-geo-audit"
description: "Use when auditing a website or blog for technical SEO and AI-answer-engine discoverability (GEO) — checking whether ChatGPT, Perplexity, Gemini, Claude and Google can crawl, understand, and cite a site. Covers canonicals, hreflang, structured data, robots.txt, llms.txt, edge caching, sitemaps, and AI-crawler access."
summary: "Audits websites for technical SEO and AI-answer-engine discoverability across major AI platforms."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "zeebees/seo-geo-audit"
repo_url: "https://github.com/zeebees/seo-geo-audit"
source: "https://github.com/zeebees/seo-geo-audit/blob/HEAD/skills/seo-geo-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/zeebees/seo-geo-audit/HEAD/skills/seo-geo-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 14
collected: "2026-11-12"
---

<!-- Unspecified skill · zeebees/seo-geo-audit · skills/seo-geo-audit/SKILL.md · MIT
     Source: https://github.com/zeebees/seo-geo-audit/blob/HEAD/skills/seo-geo-audit/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO / GEO Audit

## Overview

Audit a live site for technical search and AI-answer-engine discoverability, and
emit the result as a single evidence-bearing table.

You already know general SEO. This skill exists for the parts that get missed:
checks that require *fetching the site a specific way* rather than reading its
markup, and facts that changed recently. Run `references/checks.md` — it is the
check list and the report skeleton in one.

**Core principle: a check is not done until you have the bytes.** Reading a
`robots.txt` that allows `PerplexityBot` is not evidence that `PerplexityBot`
can fetch the site. Fetch it *as* `PerplexityBot` and compare.

## When to Use

- "Audit my site for SEO", "why doesn't ChatGPT cite us", "GEO audit", "AI visibility"
- Before or after a blog launch, migration, or CDN change
- When a site is technically fine but absent from AI answers

Not for: content/editorial quality, keyword research, backlink analysis. Those
are different jobs — say so explicitly rather than silently skipping them.

## Workflow

1. **Scope it.** Identify the canonical host, one representative article URL, the
   index/listing URL, and every language variant. Audit at least one article
   *and* one listing page — they differ in structured data. Every page you audit
   must **return `2xx` HTML**. A stale sitemap entry now serving a 404, or a PDF
   listed in the sitemap, is not a page; auditing it invents missing titles and
   viewports. Pick another URL. Not every site is a blog, either: on a marketing
   site the "article" is just a representative content page.
2. **Gather evidence first, judge second.** Work through `references/checks.md`
   top to bottom, running the stated command for each check and saving the
   output. Do not skip a check because the answer seems obvious from markup you
   already read — several checks exist precisely because markup lies.
3. **Emit the table** (contract below). One row per check in the reference,
   including the ones that passed.
4. **List what you could not check.** Anything needing owner-level access
   (Search Console, Bing Webmaster, GA4, real-user Core Web Vitals, backlinks)
   goes in a short closing list, not in the table.
5. **Offer a PDF** (optional). Only if the report is a deliverable for someone
   else, and only if asked — do not generate one unprompted.

## PDF Output — strictly optional

**The markdown table is the deliverable.** The audit is complete without a PDF.
Never make the report conditional on PDF tooling, never install anything to
produce one, and never withhold or delay findings because rendering failed.

If the user asks for a PDF:

```bash
node scripts/report-to-pdf.mjs report.md audit.pdf --site example.com
```

Requirements are Node (any version from the last few years) and any
Chromium-based browser already on the machine — Chrome, Chromium or Edge.
**There are no npm dependencies, no `npm install`, and no framework involved**;
the script imports only `node:fs`, `node:child_process` and `node:path`.

Degrade in this order, and say which one happened:

| Situation | What to do |
|---|---|
| Chrome not found | The script writes the styled HTML anyway and exits `2` with its path. Hand over the HTML — it prints to PDF from any browser |
| Browser present, wrong path | Re-run with `CHROME=/path/to/chrome` |
| No browser at all | Run with `--html` and deliver the HTML |
| Node not installed | Deliver the markdown table. That is the deliverable; do not install Node to make a PDF |

**Escape literal `|` inside table cells as `\|`** or the row splits into the wrong
number of columns. The renderer unescapes them.

## Report Contract

The deliverable is **one markdown table**, plus a one-line verdict above it and
the could-not-check list below it. No sections, no narrative write-up.

| Column | Contents |
|---|---|
| **Check** | The check name from `references/checks.md`, verbatim |
| **Pass/Fail** | `PASS` · `PASS*` · `FAIL` · `WARN` · `ABSENT` · `N/A` |
| **Severity** | `P1` breaks indexing or citation · `P2` real measurable loss · `P3` polish · `—` for PASS · `N/A` where the check does not apply |
| **Action** | One imperative sentence, specific to what you observed |
| **Evidence** | Verbatim observed bytes — one header line, tag, or command output. Never a paraphrase |

**Every row carries all five cells. No blanks.** A `PASS` row still states its
severity (`—`) and an action — what to keep doing, so it does not silently
regress ("Keep the apex 301; re-test after any DNS change"). An `N/A` row states
why it does not apply ("Single-language site"). A cell you cannot fill means the
check was not really run — go run it.

Two verdicts exist because the obvious four are not enough:

- **`ABSENT`** — a `[bet]`-tier item is missing. **Never score this as `FAIL`.**
  `llms.txt`, `FAQPage`, `.md` alternates and RSS are optional bets; a site
  without them is not broken. Severity is always `P3`. Write the action as an
  offer ("optional — add if cheap"), not a defect.
- **`PASS*`** — the check passes on its own terms but something adjacent
  undercuts it. Say both halves in the action. The canonical example: bot and
  human get the same content, so there is no cloaking — but both are an empty
  JS shell, so the pass buys nothing. `PASS*` on cloaking, `FAIL` on C5.

Row order: `FAIL`/`WARN` first sorted by severity, then `PASS*`, `PASS`,
`ABSENT`, `N/A`.

**One row per check, even across many pages.** If you audited several pages,
fold a page-level check into one row and give its reach in the Action cell ("on 11
of 12 pages"). The one-line verdict counts **distinct failing checks**. One empty
JS shell seen on 11 pages is one critical issue, not eleven.

Keep evidence cells short — one header line or one tag. If output is long,
truncate with `…` rather than reflowing it into prose.

## Confidence Tiers

`references/checks.md` tags every check with a tier. Carry the tag into the
Action cell when it is not `[proven]`, so the reader knows what they are buying:

- **`[proven]`** — documented behavior, or it plainly breaks something. State plainly.
- **`[bet]`** — plausible, unmeasured, cheap. Say "cheap bet, unproven" in the fix.
- **`[contested]`** — official docs downplay it, field experience disagrees. Say so and give both sides.

Do not upgrade a `[bet]` to a recommendation because it would make the report
look more decisive.

## Common Mistakes

- **Auditing markup instead of behavior.** Half these checks require a specific
  request — a bot user-agent, a second fetch, a bare-apex hostname. Reading HTML
  cannot answer them.
- **Reporting only failures.** Passes belong in the table; they are what tells
  the owner not to regress.
- **Stale facts.** Several things changed in 2026 (see `references/checks.md`).
  Trust the reference over your training data.
- **One page audited.** Article and listing pages carry different schema and
  often different cache rules.
- **Turning "inconclusive" into "broken".** A probe that redirected, timed out or
  was refused tells you nothing about the site. Report `N/A` and say why. A false
  P1 does more harm than a missing verdict.
- **Claiming more than the bytes show.** You read the HTML the server delivered,
  not what JavaScript adds later. Write "the delivered HTML has no X", never "the
  site has no X".
