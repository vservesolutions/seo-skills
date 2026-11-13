---
name: "clickd-schema-markup"
description: "Generates, wires and validates JSON-LD structured data (Organization, LocalBusiness, Product, Service, Article, FAQPage, BreadcrumbList and WebSite) from the visible facts on a site's pages, and checks every page with clickd. Use when asked to add or fix schema.org JSON-LD markup, when rich result fields are missing or invalid, or when clickd reports structured-data, schema-valid or entity-links findings."
category: "structured-data"
platforms: ["unspecified"]
platform_source: "none"
repo: "subinternal/clickd"
repo_url: "https://github.com/subinternal/clickd"
source: "https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-schema-markup/SKILL.md"
raw_source: "https://raw.githubusercontent.com/subinternal/clickd/HEAD/skills/clickd-schema-markup/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · subinternal/clickd · skills/clickd-schema-markup/SKILL.md · MIT
     Source: https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-schema-markup/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

<!-- subinternal:header -->
```
╭──────────────────────────────────────────────────────────────────────╮
│        ▄                                                             │
│      ▄ █    clickd                                                   │
│    ▄ █ █    schema markup                                            │
│  ▄ █ █ █                                                             │
│                                                                      │
│  skill 2.3.0  ·  by subinternal  ·  clickd.com/skills/schema-markup  │
╰──────────────────────────────────────────────────────────────────────╯
```

Print this header once, exactly as it is, in a code block, as the first thing you show when this skill starts. Then go on.
<!-- /subinternal:header -->

# Schema markup

Add clean, valid `application/ld+json` structured data to a site's templates so search engines and AI assistants can read who the business is, what each page offers, and how entities connect. Every field comes from facts visible on the page.

What this does not do: valid schema makes a page eligible for rich results where Google supports that type, and gives AI systems unambiguous entity facts, but it does not guarantee rich snippets or higher rankings.

Connect to `https://clickd.com/mcp` (or `https://clickd.com/mcp/all`) to use `clickd_schema_create`, `clickd_check`, `clickd_pages`, `clickd_rescan` and `clickd_changes`. With no key or MCP setup, validate a product or page at `https://clickd.com/tools/schema-markup-checker.json?url=https://example.com`.

## 1. Audit existing JSON-LD and match types to templates

Inspect what structured data the site currently outputs and pick the right schema.org type for each template.

- Call `clickd_pages({ site, path })` or `clickd_brief({ site })` to see which pages fail `structured-data`, `schema-valid`, `entity-links` or `author-byline`.
- Match each template to the schema type its visible content supports:
  - Home and about pages: `Organization` (or a specific `LocalBusiness` subtype such as `Dentist`, `Plumber`, `LegalService`, `Restaurant` when the business serves customers at a physical address or service area) plus `WebSite`.
  - Product pages: `Product` with nested `Offer` (`price`, `priceCurrency`, `availability`, `url`) and `Brand`.
  - Service pages: `Service` with `provider` and `areaServed`.
  - Articles and guides: `Article` or `BlogPosting` with `headline`, `datePublished`, `dateModified` and `author`.
  - Pages with visible Q&A sections: `FAQPage` (only when every question and answer is visible on the page).
  - Deep pages with a trail: `BreadcrumbList`.

Verify: list each template, the schema `@type` it will emit, and the data source in the repo that supplies its fields.

## 2. Generate JSON-LD from visible page data only

Build the JSON-LD object from the same variables the page template renders into HTML so the two can never drift apart.

- Call `clickd_schema_create({ kind, url })` (or pass the page's verified `fields`) to draft a valid schema.org JSON-LD block for `Organization`, `LocalBusiness`, `Product`, `Service`, `Article` or `FAQPage`.
- Never hardcode ratings (`aggregateRating`), review counts, prices, stock status or dates that do not appear visibly on the page. Marked-up content that is hidden from readers violates Google's structured data spam policies.
- Include `sameAs` profile URLs on `Organization` or `LocalBusiness` only for official profiles linked on the site itself (GitHub, LinkedIn, X, YouTube, Wikipedia, Google Business Profile).

Verify: every property in the generated JSON-LD block maps to a visible element or data variable on the rendered page.

## 3. Render safely in the page head

Output the JSON-LD inside `<script type="application/ld+json">` in the server-rendered HTML response.

- Serialize with `JSON.stringify(data)` and escape `<` as `\u003c` so a title or description containing `</script>` can never break out of the script tag.
- Use `"@context": "https://schema.org"` (with `https`, never `http`), absolute `https://` URLs for `url`, `image` and `@id`, and ISO 8601 dates (`YYYY-MM-DD`) for `datePublished` and `dateModified`.
- Keep one clean `<script type="application/ld+json">` (or an `@graph` array) per page rather than duplicating conflicting `Organization` blocks across plugins and layouts.

Verify: `curl -sL` on the rendered page extracts valid JSON from every `<script type="application/ld+json">` tag with `JSON.parse`.

## 4. Check live with clickd

Deploy the template changes and verify that every JSON-LD block parses and satisfies clickd's schema rules.

- For product pages, call `clickd_check({ url, kind: "product" })` (or fetch `https://clickd.com/tools/schema-markup-checker.json?url=https://example.com`) to verify `Product` and `Offer` fields against live HTML.
- Call `clickd_rescan({ site, reason: "added and validated JSON-LD schema markup" })`, poll `clickd_changes({ site, job })` until done, and record the work with `clickd_log_work`.

Verify: `clickd_changes({ site, job })` shows `structured-data`, `schema-valid` and `entity-links` passing on the updated templates.

## Report back

```
Site: <domain>
Templates updated: <list of templates and @type added>
Visible data source: <where fields come from in code>
Live check: JSON.parse <valid on all pages>, clickd schema rules <passing>
```

## Sources

- [Intro to How Structured Data Markup Works](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data): how Google reads JSON-LD structured data and why JSON-LD is the recommended format.
- [General Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies): the rule that structured data must represent content visible to readers on the page.
- [Search Gallery and Rich Results](https://developers.google.com/search/docs/appearance/structured-data/search-gallery): the schema types and required properties Google Search supports for rich results.
- [Full Hierarchy of Types](https://schema.org/docs/full.html): the complete vocabulary of types and subtypes for `Organization`, `LocalBusiness`, `Product`, `Service` and `Article`.
