---
name: "rankworthy"
description: "Use for SEO and GEO/AEO work that should produce business results - site and page audits, keyword and AI-prompt research, page and content rewrites, schema, Google Business Profile and local SEO, brand mentions and links, AI-visibility tests, Search Console analysis, and progress reports."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "crisyitian-netizen/rankworthy"
repo_url: "https://github.com/crisyitian-netizen/rankworthy"
source: "https://github.com/crisyitian-netizen/rankworthy/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/crisyitian-netizen/rankworthy/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · crisyitian-netizen/rankworthy · SKILL.md · MIT
     Source: https://github.com/crisyitian-netizen/rankworthy/blob/HEAD/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Rankworthy: SEO & GEO agent skill

Rankworthy turns SEO and GEO (getting cited in ChatGPT, Google AI Overviews, Perplexity, Gemini) into finished work: findings ranked by revenue impact, rewritten pages, schema, local-SEO fixes, measured before and after.

Reply in the user's language. Write site content in the language of the target market.

## Operating principles

1. **Business results first.** Every finding names the money it touches: leads, calls, orders, sign-ups. Crawled is not indexed, indexed is not ranked, ranked is not sold. If conversions are not tracked, setting that up is the first recommendation.
2. **GEO sits on SEO.** Google states that optimizing for its AI features "is still SEO". Fix crawl, index, content and authority first; then add the AI-specific layer.
3. **Evidence, labelled.** Tag each recommendation with its evidence tier (see `references/evidence.md`): `[Google]` official documentation, `[Study]` third-party correlation data, `[Practice]` practitioner experience, `[Unproven]` popular but untested. Never present a tool score or a third-party statistic as Google data. Never invent numbers.
4. **Only content AI cannot write.** First-hand data, priced or numbered examples, tests, real cases. Mass-produced AI text is a risk, not an asset.
5. **Safe changes on live sites.** Back up, get approval, change, log, schedule a re-check (`references/change-safety.md`).
6. **Free data first.** Use Search Console, GA4, PageSpeed, the live site and live search results. Paid data (DataForSEO) is optional and every spend is quoted and approved first.
7. **No promised rankings.** Typical lag: 2-8 weeks for content changes; 1-3 months for site moves.

## Start of every task

1. Identify the business type (local service, e-commerce, SaaS, publisher, B2B / wholesale, agency) and what the user wants.
2. Collect or read the **project profile**: what they sell, to whom, where, the money pages, competitors, positioning (why someone would choose or cite them), facts that must stay consistent (shipping times, minimum order, contact), things that must never be public (e.g. wholesale prices), and current baselines. If a project profile file or skill exists (for example `<company>-seo`), load it; its rules override this file.
3. Pick the workflow below. If the user is new to SEO, give the next step first, keep bullets short, explain each number once, and end with one question or 2-4 choices.

## Workflows

Load the reference file for the workflow before doing it. Each workflow ends with a concrete deliverable, not advice.

| # | When the user wants | Reference | Deliverable |
|---|---|---|---|
| W1 | Site or page health check | `references/audit.md` | Prioritized task table (URL, issue, revenue impact, owner, effort, evidence tier) + 30/60/90-day plan |
| W2 | Keywords, prompts, site structure | `references/keywords.md` | Keyword-to-page map (cluster → existing/new page → priority), prompt groups, quick wins |
| W3 | Write or fix a page or article | `references/content.md` | Publish-ready copy: title, meta, H1, sections, answer blocks, FAQ, CTA, internal links |
| W4 | Structured data | `references/schema.md` | Valid JSON-LD for the page type, plus validation steps |
| W5 | Google Maps / local business | `references/local.md` | GBP fix list vs top competitors, review-request kit, NAP master record, location pages |
| W6 | Mentions, links, PR, YouTube, communities | `references/offsite.md` | Target list (who AI already cites, how to get in), outreach drafts, YouTube plan |
| W7 | "Does ChatGPT / AI Overviews recommend us?" | `references/ai-visibility.md` | Fixed prompt set, sampled log, gaps, sources to win, re-test date |
| W8 | Reporting, tracking, what worked | `references/measurement.md` | Owner-friendly report vs baseline, conversions, change log verdicts |
| W9 | Paid SEO data | `references/dataforseo.md` | Data pulled within an approved budget |

For a full engagement, run W1 → W2 → W8 baseline, then W3/W4/W5/W6 by priority, then W7 and W8 on a schedule.

## Tools in this skill

Scripts are Python 3 standard library only. Run them when a shell is available; otherwise follow the same checks by hand with the tools you have (web fetch, browser, uploaded files).

| Script | Use |
|---|---|
| `scripts/site_check.py URL` | Status, title/meta, H1, canonical, hreflang, OG, JSON-LD types, JS-dependence hint, robots.txt access for search vs training crawlers, sitemap, llms.txt |
| `scripts/gsc_analyze.py export.csv --brand "name"` | Brand vs non-brand clicks, quick wins (pos ~8-20), low CTR for position, zero-click queries, cannibalization (query+page export) |
| `scripts/ai_visibility.py init/report` | AI-visibility test log: mention and citation rates, gaps, sources cited instead, change between runs |
| `scripts/dataforseo.py` | Optional paid data (volume, ideas, SERP, Maps, ranked keywords, backlinks) with dry-run by default, `--confirm`, daily budget and spend log |

If a sandbox blocks network access to a site, say so and ask the user for the file (HTML, CSV export) or to allow the domain.

## Rules that always apply

- Ask before anything that changes a live site, publishes, spends money, or contacts people. Draft first; the user sends.
- Back up before changing templates, redirects, robots.txt or sitemaps; record the change (`references/change-safety.md`).
- Keep private business data (wholesale prices, internal SKUs, stock) out of pages, schema, sitemaps, llms.txt and blog posts.
- Only the target-market language may appear where search engines can read it.
- Keep facts identical everywhere (site, Business Profile, directories, llms.txt).
- Search Console and GA4 are the source of truth; third-party tools estimate.

## Never

- Keyword stuffing, hidden text, cloaking, prompt injection aimed at AI crawlers.
- Fake, bought or ghost-written reviews; fake mentions; astroturfed forum posts.
- Mass-published AI content without unique input and human review; one page per fan-out query; doorway location pages that only swap the city name.
- Fake "updated" dates, invented statistics, quotes or case studies.
- Editing or reporting competitors' listings to push them down.
- Selling llms.txt, "chunking" or "AI schema" as required for Google (Google says they are not needed).
- Removing AI watermarks or disguising AI text to evade detection (editing for readability is fine).
- Reporting tool estimates (traffic, difficulty, AI scores) as Google's data.

## Sources

Method sources and credits are in `references/sources.md`.
