---
name: "growth-audit"
description: "Run a revenue-weighted, full-funnel growth audit of a website. Pulls real data from Ahrefs, Google Search Console, GA4, Microsoft Clarity, Core Web Vitals field data, and the client's lead or CRM records, then ranks every finding by business impact instead of generic severity labels. Use when someone asks for a site audit, an SEO audit, a growth audit, a website health check, a \"why are we not getting leads\" diagnosis, or wants to know what to fix first. The output is a prioritized action plan tied to projected leads and pipeline, not a 200-item checklist."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "avikbal-dm/claude-seo-skills"
repo_url: "https://github.com/avikbal-dm/claude-seo-skills"
source: "https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/growth-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/avikbal-dm/claude-seo-skills/HEAD/plugins/growth-os/skills/growth-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · avikbal-dm/claude-seo-skills · plugins/growth-os/skills/growth-audit/SKILL.md · MIT
     Source: https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/growth-audit/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Growth Audit

## What this does

Most audits hand back a long list of issues sorted by a tool's idea of severity. That list is noise. A growth audit answers one question instead: where is this site losing qualified demand and leads, and which fixes return the most pipeline for the least effort.

Work from evidence, not opinion. Every finding cites the data that produced it. Where the data is thin, say so and lower the confidence, rather than asserting.

## When to use it, and when not

Use it for a full-site or section-level read when the goal is business outcomes. Use a single-page review or a narrow technical pass for smaller scopes. If the request is purely "fix this one error," skip the pipeline and just fix it.

## Operating principle

Rankings and traffic are inputs. Leads and revenue are the output. A page that ranks well but never converts is a problem, not a win. Judge everything against the funnel: demand, acquisition, experience, conversion. Hold that order, because a conversion fix on a page with no demand earns nothing, and demand sent to a broken page leaks out the bottom.

## Data you pull, and what each one tells you

- **Ahrefs**: organic keywords and positions, traffic value, referring domains and authority, top pages, content gaps against competitors, and AI visibility through Brand Radar where available.
- **Google Search Console**: real query and page performance, clicks, impressions, CTR, average position, and the gap between impressions and clicks that signals title or intent mismatch.
- **GA4**: which channels and landing pages bring traffic that engages and converts, engagement rate, key events, and the page paths that precede a lead.
- **Microsoft Clarity**: heatmaps, session recordings, scroll depth, rage clicks, dead clicks, and quick-back behavior that exposes friction no metric names on its own.
- **Core Web Vitals (CrUX field data)**: LCP, INP, and CLS at the 75th percentile over the rolling 28-day window. Thresholds are LCP at or under 2.5s, INP at or under 200ms, CLS at or under 0.1. INP is the one most B2B sites fail, and it needs JavaScript work, not an image swap.
- **Lead or CRM data**: which pages and queries actually produce leads, lead quality by source, and the sales stage where those leads stall. This is the layer the borrowed playbooks skip, and it is the one that makes the audit yours.

If a data source is missing, name the gap and proceed with what exists. Do not invent numbers to fill a hole.

## Business context intake, before any data

Get these on the table first, because they change how you read everything after:

- The offer and the buyer. Who is the ICP, and what counts as a qualified lead here.
- The primary conversion. For B2B that is usually a demo, a contact, or a content download, not a purchase.
- The sales cycle and deal size, so you can weight slow, high-value pages correctly.
- Target accounts or segments, if account-based.
- The CMS and stack, since that decides what is cheap to fix and what is not.

## The audit pipeline

Run these in order. Each stage produces findings, and each finding carries its source and a confidence level.

### 1. Demand and visibility (Ahrefs, GSC)

Map what the site ranks for against what its buyers actually search. Find high-intent queries where it ranks on page two, pages that lost positions, and commercial terms competitors own that the site does not. Separate brand from non-brand, because brand traffic flatters every average.

### 2. Acquisition and engagement (GA4)

Identify the landing pages that bring traffic which engages, and the ones that bring traffic which bounces. A page with traffic and near-zero engagement is either the wrong intent or a broken experience. Tag which is which before recommending anything.

### 3. Experience and speed (Core Web Vitals, Clarity)

Read field CWV at p75, then watch what users actually do. Rage clicks on a non-button, dead clicks on a fake link, a scroll wall above the form, a quick-back after a slow load. Clarity shows the friction that GA4 only hints at. Pair the two.

### 4. Conversion and leads (GA4, CRM)

Trace the path from landing page to lead. Find where qualified sessions drop before converting, which forms leak, and which high-traffic pages produce no leads at all. Cross-check against CRM to see whether the leads a page does produce are any good.

### 5. Technical integrity (crawl, index, render, schema)

Confirm the important pages are crawlable, indexable, and rendered, that canonical and internal linking send authority to the pages that earn revenue, and that schema is present where it can win a SERP feature. Technical debt only matters here to the degree it blocks demand or conversion.

### 6. Competitive and AI-search gap

Where do competitors win the SERP, and where do AI answer engines cite them and not you. Note the queries where being cited in an AI Overview or AI Mode answer matters more than the blue link, since those surfaces are increasingly zero-click.

## Scoring: rank by impact, not severity

For each finding, estimate four things, then sort:

- **Value at stake**: the demand, traffic, or leads the issue touches. Use real numbers from the data above.
- **Conversion relevance**: how close the page or issue sits to a lead. A pricing or solution page outranks a blog footer.
- **Confidence**: how strong the evidence is. Field data and CRM beat lab data and assumption.
- **Effort**: rough build cost, informed by the stack.

Priority rises with value, relevance, and confidence, and falls with effort. Group findings into Now, Next, and Later. Put a projected outcome on the Now items, framed as a range, never a false-precision single number.

## Output

A short, ordered plan, not a checklist. For each Now item: the finding, the evidence behind it, the fix, the owner, and the expected lift in leads or pipeline as a range. Then Next and Later in lighter detail. Close with the data gaps that limited the audit, stated plainly, because a buyer who knows the limits trusts the rest.

## Guardrails

- No recommendation without a data source behind it.
- Keep observation separate from interpretation. State what the data shows, then give the reading as a judgment.
- Lab scores describe a test. Field data describes users. Weight field data higher.
- Flag low-confidence findings as directional, not proven.

## Hands off to

`technical-foundation` for the speed and crawl fixes, `search-demand-map` for the demand gaps, `content-engine` for the content work, `conversion-cro` for the experience fixes, and `growth-intelligence` to track whether the plan moved the number.

---

## About the author

Avik Bal is a B2B digital marketing practitioner specializing in web architecture, SEO, content strategy, and marketing analytics. He has helped enterprise software, fintech, and technology companies drive growth through scalable digital marketing programs. Avik is the author of *CITED: The Growth Operating System for AI Search*.

Part of the Growth Operating System. https://github.com/avikbal-dm/claude-seo-skills
