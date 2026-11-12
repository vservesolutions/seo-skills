---
name: "searchcans-product-serp-brief"
description: "Create a localized product-search evidence brief from Google Shopping, Google web results, Google Images, and optional Reader extracts of explicit merchant URLs. Use for e-commerce category research, competitor assortment discovery, product-page planning, and market-specific merchandising briefs."
category: "keyword-research"
platforms: ["unspecified"]
platform_source: "none"
repo: "SearchCans/searchcans-skills"
repo_url: "https://github.com/SearchCans/searchcans-skills"
source: "https://github.com/SearchCans/searchcans-skills/blob/HEAD/skills/searchcans-product-serp-brief/SKILL.md"
raw_source: "https://raw.githubusercontent.com/SearchCans/searchcans-skills/HEAD/skills/searchcans-product-serp-brief/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "Apache-2.0"
stars: 3
collected: "2026-11-12"
---

<!-- Unspecified skill · SearchCans/searchcans-skills · skills/searchcans-product-serp-brief/SKILL.md · Apache-2.0
     Source: https://github.com/SearchCans/searchcans-skills/blob/HEAD/skills/searchcans-product-serp-brief/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SearchCans Product SERP Brief

Turn one product query into a current, market-specific observation pack. It gathers Shopping, web, and image results together so an agent can compare product listings, merchant names, search intent, and visual search presence without claiming a universal catalog or a live price database.

## Define the product question

Confirm the query, target `country` and `language`, and the decision it supports. Use a specific product/category query rather than a vague “best” query when the output will inform assortment or page planning.

```bash
python scripts/product_serp_brief.py "portable espresso maker" \
  --country us --language en --max-products 10 \
  --read-url "https://merchant.example/product" \
  --out product-brief.json
```

`--read-url` is deliberately explicit: do not automatically fetch Google Shopping product links or merchant pages. Add only URLs relevant to the investigation and within the requested source budget.

## Use prices and assets responsibly

`merchant_observations.observed_numeric_price_range` describes parsable values displayed on one Google Shopping SERP in the selected market. It is time-stamped, not currency-normalized, and never a price, stock, shipping, review, or availability guarantee.

Image URLs and thumbnails are discovery references only. Their appearance does not grant permission to download, reuse, train on, or republish an asset.

Use [the report template](references/product-brief-report.md) to separate:

1. Market/query and collection limits.
2. Observed product/merchant/price patterns.
3. Search and visual page-type signals.
4. Page-level claims backed by successful Reader extracts.
5. Gaps and human validation needed before a commercial action.

## Let the account set safe scope

The default `--account-mode auto` checks the Account API once, accounts for three SERP calls plus explicit Reader URLs, caps only the Reader portion if appropriate, and keeps concurrency within reported lanes. Use `warn`, `enforce`, or `off` when the task calls for a different budget policy. The JSON includes only sanitized account-guard fields.

## Official website

[SearchCans](https://www.searchcans.com/)

## Resources

- `scripts/product_serp_brief.py` retrieves the localized product evidence pack.
- `references/product-brief-report.md` defines the analyst brief and caveats.
