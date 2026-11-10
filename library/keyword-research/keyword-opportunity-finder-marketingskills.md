---
name: "keyword-opportunity-finder"
description: "Find high-impression, low-CTR terms, striking-distance keywords, and topic gaps from GSC data. Use when Codex needs to surface keyword growth opportunities from search performance data."
summary: "Surfaces striking-distance keywords and topic gaps from Google Search Console data."
category: "keyword-research"
platforms: ["unspecified"]
platform_source: "none"
repo: "marketingskills/seo"
repo_url: "https://github.com/marketingskills/seo"
source: "https://github.com/marketingskills/seo/blob/HEAD/skills/keyword-opportunity-finder/SKILL.md"
raw_source: "https://raw.githubusercontent.com/marketingskills/seo/HEAD/skills/keyword-opportunity-finder/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 10
collected: "2026-11-10"
---

<!-- Unspecified skill · marketingskills/seo · skills/keyword-opportunity-finder/SKILL.md · MIT
     Source: https://github.com/marketingskills/seo/blob/HEAD/skills/keyword-opportunity-finder/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Keyword Opportunity Finder

## Overview

Analyze GSC query data to find keywords where the site can gain traffic with relatively low effort: impressions are high but CTR is low (fixable with title/meta improvements), or rank position is just outside the top 3-5 (striking distance).

## Inputs

- GSC query export (clicks, impressions, CTR, avg position) or live data
- Optional: competitor URL for gap analysis

## Workflow

1. Load query data from live GSC or pasted export.
2. Segment queries into opportunity categories:
   - High impression, low CTR (< median CTR for the site)
   - Positions 4-10 (striking distance to top 3)
   - Position 11-20 (easy top-10 opportunity with content improvement)
   - Rapidly gaining impressions but flat clicks (CTR opportunity)
3. Filter out queries already in top 3 or with very low search volume.
4. For each opportunity, estimate the traffic gain from improving to median CTR or top-3 position.
5. Rank by expected traffic gain and difficulty.
6. Cross-reference with SERP features (featured snippets, PAAs, video).

## Output

Ranked list of keyword opportunities with current position, estimated uplift, and recommended action.
