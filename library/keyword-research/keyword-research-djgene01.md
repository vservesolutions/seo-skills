---
name: "keyword-research"
description: "Use when doing keyword research for ecommerce products, categories, or niches."
category: "keyword-research"
platforms: ["unspecified"]
platform_source: "none"
repo: "djgene01/ecommerce-toolkit"
repo_url: "https://github.com/djgene01/ecommerce-toolkit"
source: "https://github.com/djgene01/ecommerce-toolkit/blob/HEAD/ecommerce-toolkit/skills/keyword-research/SKILL.md"
raw_source: "https://raw.githubusercontent.com/djgene01/ecommerce-toolkit/HEAD/ecommerce-toolkit/skills/keyword-research/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · djgene01/ecommerce-toolkit · ecommerce-toolkit/skills/keyword-research/SKILL.md · MIT
     Source: https://github.com/djgene01/ecommerce-toolkit/blob/HEAD/ecommerce-toolkit/skills/keyword-research/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Ecommerce Keyword Research

## Overview
Build a keyword map for a store: commercial-intent terms mapped to the right page types (product, category, blog), with long-tail clusters and content-gap opportunities.

## When to Use
- "Find keywords for my [niche/product]"
- Launching a new category or product line
- Planning a content calendar

## Workflow

1. **Seed extraction** — from the user's product list, site navigation, and competitor category names. If they gave no site, ask for 3-5 products + target market before proceeding.
2. **Expansion** — generate variants per seed:
   - Modifiers: buy, best, cheap, wholesale, review, vs, near me, "for <use-case>", size/color/model qualifiers
   - Question forms: how to choose, what size, does X work with Y
   - Use web_search on seeds to mine autocomplete/People-Also-Ask phrasing; note actual result titles as intent evidence.
3. **Intent classification** — label each: Transactional / Commercial-investigation / Informational / Navigational.
4. **Page-type mapping** — transactional→product pages, commercial→category/comparison, informational→blog/guides. One primary keyword per URL; flag cannibalization risks (two mapped keywords that belong on the same page).
5. **Difficulty triage** — without API data, estimate qualitatively: brand-dominated SERPs = hard; forums/Reddit ranking = easy win; thin marketplace listings = medium. Say clearly these are estimates, not tool volumes.
6. **Deliverable** — table: `keyword | intent | target page | est. difficulty | priority`. Plus 5 "quick win" long-tails and 3 content-gap topics competitors rank for.

## Common Pitfalls
- Presenting invented search volumes as fact — always label estimates as estimates.
- Mapping informational queries to product pages — that's why stores have blogs.
- Ignoring buyer-language differences ("sneakers" vs "trainers") — match the market's vocabulary.

## Verification Checklist
- [ ] ≥25 keywords across all four intent types
- [ ] Every keyword has a designated target page type
- [ ] Estimates explicitly labeled as qualitative
