---
name: "competitive-intelligence"
description: "Read the competitive landscape across classic and AI search. Identifies the real SERP competitors, maps what they own that the brand does not, tracks SERP feature ownership and AI citation share of voice, decodes the content and format patterns they win with, and turns it into comparison and alternatives pages that convert. Use when someone wants competitor analysis, a SERP gap, a share-of-voice read, a battlecard, or to build a \"X vs Y\" or \"alternatives to X\" page. The point is to learn their strategy, not copy their pages."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "avikbal-dm/claude-seo-skills"
repo_url: "https://github.com/avikbal-dm/claude-seo-skills"
source: "https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/competitive-intelligence/SKILL.md"
raw_source: "https://raw.githubusercontent.com/avikbal-dm/claude-seo-skills/HEAD/plugins/growth-os/skills/competitive-intelligence/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-12"
---

<!-- Unspecified skill · avikbal-dm/claude-seo-skills · plugins/growth-os/skills/competitive-intelligence/SKILL.md · MIT
     Source: https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/competitive-intelligence/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Competitive Intelligence

## What this does

Your competitors in search are not always your competitors in business. The site outranking you for a money query might be a publisher, a directory, or a player you have never pitched against. This skill finds who actually wins the SERPs that matter, learns why, and turns that into moves you can make.

The goal is the strategy behind their wins, not their pages. Copying a competitor's page inherits their ceiling. Understanding why it wins lets you beat it.

## When to use it

Use it for competitor analysis, a SERP or content gap, a share-of-voice read across classic and AI search, or to build comparison and alternatives pages. It feeds `search-demand-map` with the gaps worth chasing and `content-engine` with the formats that win.

## Data you pull

- **Ahrefs**: organic competitors by keyword overlap, their top pages and the terms driving their traffic, their content gaps against you, and their backlink and referring-domain strength.
- **The live SERPs**: who ranks for your priority queries and in what format, plus which SERP features they own.
- **AI visibility tracking**: share of voice in AI answers, and which competitors the engines cite for your category prompts.

## Method

### 1. Find the real SERP competitors

Identify who actually ranks for your priority queries, by keyword overlap and SERP presence, not by who you consider a rival. Separate the business competitors from the search competitors. Both matter, but they need different responses.

### 2. Map what they own and you do not

Pull the terms and topics where competitors rank and you are absent or weak. Score each by lead value and attainability. A competitor's high-volume informational win is less urgent than their grip on a commercial query your buyers use.

### 3. Read SERP feature and citation ownership

Note which competitors hold the featured snippet, the People Also Ask answers, the rich results, and the AI citations for your category. Owning the feature is often worth more than the blue link, especially on zero-click AI surfaces.

### 4. Decode the pattern, not the page

For the queries they win, find the shared traits: the page type, the depth, the structure, the evidence, the freshness. That pattern is the reusable insight. The individual page is not.

### 5. Build comparison and alternatives pages

For the queries where buyers compare vendors, build comparison and alternatives pages that win the click and the decision. Keep them fair and accurate, because a misleading comparison is a legal and trust risk, and buyers see through a rigged table. An honest comparison that is genuinely useful converts better than a biased one anyway.

### 6. Track share of voice over time

Competitive position is a moving target. Track your share of voice against the key players across classic and AI search on a cadence, so you see a competitor's move while you can still respond.

## Output

A competitive read: the real SERP competitors, the prioritized gaps worth closing, who owns which SERP features and AI citations, the winning patterns to adopt, and a plan for comparison and alternatives pages. Order by lead value, not by which competitor annoys you most.

## Speed to results

Comparison and alternatives pages for commercial queries can rank and convert relatively fast when the demand exists and the competition is weak. Closing a broad content or authority gap is slower. Take the fast commercial wins first.

## Guardrails

- Your SERP competitors are not always your business competitors. Treat them separately.
- Learn the strategy, do not clone the page. A copy inherits the original's ceiling.
- Keep comparison pages honest. Accuracy is a legal, trust, and conversion requirement.
- Do not chase every competitor term. Chase the ones with lead value.

## Hands off to

`search-demand-map` for the gaps worth targeting, `content-engine` to build to the winning pattern, `structured-data-engine` to win the same SERP features, `ai-search-visibility` to close the citation gap, and `growth-intelligence` to track share of voice.

---

## About the author

Avik Bal is a B2B digital marketing practitioner specializing in web architecture, SEO, content strategy, and marketing analytics. He has helped enterprise software, fintech, and technology companies drive growth through scalable digital marketing programs. Avik is the author of *CITED: The Growth Operating System for AI Search*.

Part of the Growth Operating System. https://github.com/avikbal-dm/claude-seo-skills
