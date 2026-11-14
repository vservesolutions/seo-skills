---
name: "product-page-seo"
description: "Use when optimizing an individual ecommerce product or category page for search."
category: "ecommerce-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "djgene01/ecommerce-toolkit"
repo_url: "https://github.com/djgene01/ecommerce-toolkit"
source: "https://github.com/djgene01/ecommerce-toolkit/blob/HEAD/ecommerce-toolkit/skills/product-page-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/djgene01/ecommerce-toolkit/HEAD/ecommerce-toolkit/skills/product-page-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · djgene01/ecommerce-toolkit · ecommerce-toolkit/skills/product-page-seo/SKILL.md · MIT
     Source: https://github.com/djgene01/ecommerce-toolkit/blob/HEAD/ecommerce-toolkit/skills/product-page-seo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Product Page SEO Optimizer

## Overview
Rewrite and structure a single product/category page to rank for its primary keyword and convert: title, meta, headings, description, schema, and image guidance.

## When to Use
- "Optimize this product page"
- "Write a product title/meta for X"

## Workflow

1. **Inputs** — need: URL or current content, primary keyword (run keyword-research if unknown), key specs, differentiators, price/availability.
2. **Fetch current page** — extract existing title/meta/H1/description so improvements are diffs, not rewrites from scratch.
3. **Title** — pattern: `Primary Keyword — Differentiator | Brand` ≤60 chars. Front-load the keyword.
4. **Meta description** — ≤155 chars, includes keyword + one benefit + implicit CTA. Not a keyword dump.
5. **H1 & structure** — H1 = product name with keyword variant; H2s for Description / Specs / Reviews / FAQ; 3-5 FAQ questions mined from real customer questions.
6. **Description copy** — benefits before features; scannable bullets for specs; natural keyword use 2-3 times, never stuffed.
7. **Product schema checklist** — JSON-LD `Product` with `name`, `image`, `description`, `sku`, `brand`, `offers` (price, currency, availability), plus `AggregateRating` only if reviews exist. Never fabricate ratings/prices in schema.
8. **Images** — descriptive filenames (`oak-standing-desk-60x30.jpg` not `IMG_1234.jpg`), alt text describing the image naturally, WebP format note.

## Deliverable
Diff table (field | before | after) + ready-to-paste JSON-LD block + image checklist.

## Common Pitfalls
- Duplicating the manufacturer description — thin/duplicate content kills product rankings; rewrite uniquely.
- Schema price mismatching the displayed price (Google penalty risk).
- Same title template across every product with only the model swapped — differentiate top sellers individually.

## Verification Checklist
- [ ] Title ≤60 chars, keyword front-loaded
- [ ] Schema validates against Google Rich Results requirements (mentally check required fields)
- [ ] No fabricated review data in markup
