---
name: "search-demand-map"
description: "Map the search demand a business should own, scored by lead value and buying stage rather than raw volume. Pulls keywords, positions, and gaps from Ahrefs and Google Search Console, classifies intent and SERP features, groups terms into topic clusters, and ranks opportunities by how close they sit to a qualified lead. Use when someone wants keyword research, a content or keyword strategy, intent classification, topic clusters, a pillar and hub plan, or asks what to target or write next. The output is a prioritized demand map tied to pipeline, not a spreadsheet of high-volume terms."
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "avikbal-dm/claude-seo-skills"
repo_url: "https://github.com/avikbal-dm/claude-seo-skills"
source: "https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/search-demand-map/SKILL.md"
raw_source: "https://raw.githubusercontent.com/avikbal-dm/claude-seo-skills/HEAD/plugins/growth-os/skills/search-demand-map/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-12"
---

<!-- Unspecified skill · avikbal-dm/claude-seo-skills · plugins/growth-os/skills/search-demand-map/SKILL.md · MIT
     Source: https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/search-demand-map/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Search Demand Map

## What this does

Keyword research usually optimizes for volume. Volume is a trap. A 10,000-search informational term can be worth less than a 90-search bottom-funnel query that buyers type right before they choose a vendor. This skill maps demand by what it is worth to the business, then shows what to chase first.

Demand splits into stages. The map respects that, because a top-funnel term and a vendor-comparison term need different pages, different content, and a different place in the queue.

## When to use it

Use it to build a keyword or content strategy, to find the gap between what a site ranks for and what its buyers search, or to decide what to write next. Run it before `content-engine`, which turns the map into briefs and a publishing order.

## Data you pull

- **Ahrefs**: keyword universe, search volume, difficulty, parent topics, traffic value, the terms competitors rank for that the site does not, and the SERP overview for each target.
- **Google Search Console**: the queries the site already earns impressions for, including the page-two terms where a small push captures real clicks, and the impression-to-click gap that flags intent or title mismatch.
- **Lead or CRM data**: which queries and pages actually produce qualified leads, so the scoring rewards terms that convert rather than terms that merely attract.

## Method

### 1. Seed from the business, not the tool

Start with the buyer's problems and the words they use, drawn from sales calls, the offer, and won deals. Tools expand the seed. They should not set it, or you inherit whatever a competitor happened to target.

### 2. Build the universe and dedupe by intent

Pull the full keyword set, then group terms that share a SERP, because Google treats them as one query. Ranking for the cluster head usually pulls the variants along. Do not write a separate page for each near-duplicate.

### 3. Classify intent and stage

Label every cluster by intent: informational, commercial investigation, transactional, or navigational. Map each to a buying stage. This decides the page type and where it sits in the funnel.

### 4. Read the SERP, not just the metric

For each target, look at what actually ranks. The SERP tells you the page type Google rewards and which features are in play. If the SERP is all comparison pages and yours is a blog post, difficulty score is irrelevant. You have the wrong format.

### 5. Score by lead value

Rank opportunities on four things: commercial intent, position in the buying stage, the gap between current and reachable rank, and the lead value the data shows for similar pages. A reachable page-two commercial term beats a number-one informational term most of the time.

### 6. Shape the clusters into hubs

Group the winning clusters into hub-and-spoke structures: a pillar for the broad topic, spokes for the specific queries, and an internal link plan that concentrates authority on the commercial pages.

## Output

A demand map: clusters ranked by lead value, each with its intent, stage, target page type, the SERP features in play, and a clear first, next, later order. Flag the quick wins where the site already ranks on page two for a commercial term.

## Guardrails

- Volume is a vanity metric until you weight it by intent and lead value.
- One cluster, one page. Resist a page per keyword.
- Let the live SERP override the difficulty score when they disagree.
- Keep brand and non-brand separate so brand demand does not flatter the plan.

## Hands off to

`content-engine` to brief and sequence the work, `structured-data-engine` where a SERP feature is worth winning, `ai-search-visibility` for the queries that resolve inside AI answers, and `search-experience` to confirm the page type matches what the SERP rewards.

---

## About the author

Avik Bal is a B2B digital marketing practitioner specializing in web architecture, SEO, content strategy, and marketing analytics. He has helped enterprise software, fintech, and technology companies drive growth through scalable digital marketing programs. Avik is the author of *CITED: The Growth Operating System for AI Search*.

Part of the Growth Operating System. https://github.com/avikbal-dm/claude-seo-skills
