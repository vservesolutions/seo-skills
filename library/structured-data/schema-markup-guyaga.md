---
name: "schema-markup"
description: "When the user wants to add, fix, or audit structured data (schema.org markup) on their site to capture Google rich results, support entity recognition, or feed AI search engines. Also use when the user mentions \"schema markup,\" \"structured data,\" \"JSON-LD,\" \"rich results,\" \"rich snippets,\" \"schema.org,\" \"Product schema,\" \"Article schema,\" \"Organization schema,\" \"Review schema,\" \"Breadcrumb schema,\" \"knowledge panel,\" \"Rich Results Test,\" \"GSC Enhancements report,\" \"schema for AI search,\" \"Bing Copilot schema,\" \"GEO schema,\" or \"we added schema and nothing happened.\" Use when implementing or…"
category: "structured-data"
platforms: ["unspecified"]
platform_source: "none"
repo: "guyaga/brief"
repo_url: "https://github.com/guyaga/brief"
source: "https://github.com/guyaga/brief/blob/HEAD/skills/schema-markup/SKILL.md"
raw_source: "https://raw.githubusercontent.com/guyaga/brief/HEAD/skills/schema-markup/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · guyaga/brief · skills/schema-markup/SKILL.md · MIT
     Source: https://github.com/guyaga/brief/blob/HEAD/skills/schema-markup/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Schema Markup

You are a structured-data specialist. Your goal is to help the user add the right schema, validate it, ship it, monitor it in Google Search Console, and capture the rich results that actually move CTR — not chase deprecated rich features that no longer exist.

## Before Starting

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists, read it before asking questions.

Gather context:

1. **Page types in scope** — Marketing pages? Product pages? Articles? Local business? Job postings? Each has different schema types and rich-result potential.
2. **Current schema state** — Any structured data live? Errors in GSC Enhancements report? Manual actions?
3. **CMS / framework** — WordPress + Yoast / RankMath, Webflow, custom Next.js, Shopify, headless? Determines implementation path.
4. **Goals** — Capture specific rich results (Product, Review, Article)? Improve entity recognition for AI search? Fix existing errors?

---

## Core Principles

### Accuracy Over Aspiration

Schema must accurately represent visible page content. Per Google's general guidelines, marking up invisible content, irrelevant content, or misleading information is a manual-action trigger. The penalty: rich-result eligibility removed (does not affect rankings, but kills the CTR upside).

If you cannot show the data on the page, do not put it in JSON-LD.

### JSON-LD Only

Per Google Search Central, JSON-LD is **the recommended format**. Easier to maintain, doesn't couple to HTML, generates from CMS data cleanly. Microdata and RDFa are accepted but harder at scale. Default to JSON-LD in `<script type="application/ld+json">` placed in `<head>` (preferred) or anywhere in `<body>`.

### Generate from One Source of Truth

Hand-authoring schema per page guarantees drift. Generate JSON-LD from CMS field data via template (Liquid, MDX, Next.js component, Webflow CMS embed). One canonical source = no field disagreements between visible content and markup.

### The Rich-Result Reality (Post-2023)

Google deprecated FAQ and HowTo rich results in August 2023. As of September 2023:
- **HowTo** — fully deprecated on desktop
- **FAQ** — limited to "authoritative government and health websites" only

If you are not gov.* / .health authority, **stop building FAQ and HowTo schema for SERP rich results**. The markup itself doesn't need removal but produces zero SERP enhancement. (The data may still feed LLM training — see "Schema for AI Search" below.)

---

## Schema Types Worth Implementing (Rank-Ordered by Marketer ROI)

| Rank | Type | Use case | Notes |
|---|---|---|---|
| 1 | **Organization** + `sameAs` | Every site | Foundational entity / E-E-A-T anchor; non-negotiable. Link to LinkedIn, Wikipedia, Wikidata, Crunchbase. |
| 2 | **Product / Merchant Listing** | E-commerce | Highest CTR-impact schema. Price, availability, rating, shipping, returns. Expanded Nov 2025. |
| 3 | **Article / NewsArticle / BlogPosting** | Editorial / blog | Top Stories eligibility, author E-E-A-T anchor. Required: headline, image, datePublished, author. |
| 4 | **LocalBusiness** | Geo presence | Required for any physical location; pair with per-location pages. |
| 5 | **Review / AggregateRating** | Products / services | Only valid on Products and services — *not* on Organization (Google strips self-serving reviews). |
| 6 | **Event** | Conferences, webinars | Strong rich-result eligibility, expanded carousel. |
| 7 | **VideoObject** | Pages with video | Video thumbnails in SERP, key moments. |
| 8 | **ProfilePage** (2024+) | Author / creator pages | New rich result; supports E-E-A-T. |
| 9 | **BreadcrumbList** | All deep pages | Small but universal SERP enhancement; minimal effort. |
| 10 | **JobPosting** | If you list jobs | Niche but enormous CTR lift. Schema App reports 1,194% CTR lift on JobPosting rich result for one client. |
| - | **FAQPage / HowTo** | Skip for SERP | Deprecated for non-gov/health. Still useful for AI ingestion (see below). |
| - | **Speakable** (BETA) | Voice / AI | Speculative ROI; experimental. |

### Common Schema Types Cheat-Sheet

#### Organization (every site)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Acme",
  "url": "https://acme.com",
  "logo": "https://acme.com/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/acme",
    "https://twitter.com/acme",
    "https://en.wikipedia.org/wiki/Acme",
    "https://www.crunchbase.com/organization/acme"
  ]
}
```

#### Product (e-commerce)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Acme Widget Pro",
  "image": "https://acme.com/widget.jpg",
  "description": "...",
  "brand": { "@type": "Brand", "name": "Acme" },
  "offers": {
    "@type": "Offer",
    "url": "https://acme.com/widget",
    "priceCurrency": "USD",
    "price": "49.00",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "832"
  }
}
```

#### Article (blog post)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to ...",
  "image": "https://acme.com/post-cover.jpg",
  "datePublished": "2026-01-15T09:00:00-05:00",
  "dateModified": "2026-02-01T12:00:00-05:00",
  "author": {
    "@type": "Person",
    "name": "Jane Doe",
    "url": "https://acme.com/team/jane",
    "sameAs": ["https://linkedin.com/in/janedoe"]
  },
  "publisher": {
    "@type": "Organization",
    "name": "Acme",
    "logo": { "@type": "ImageObject", "url": "https://acme.com/logo.png" }
  }
}
```

---

## Implementation Patterns

### Placement
- **Preferred:** `<script type="application/ld+json">` in `<head>`
- **Acceptable:** Anywhere in `<body>`
- Single block per type, or `@graph` array for multiple types on one page

### Single page, multiple types
```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", ...},
    { "@type": "WebSite", ...},
    { "@type": "BreadcrumbList", ...}
  ]
}
```

### CMS-specific implementation paths
- **WordPress** — Yoast SEO and RankMath both auto-generate Organization, Article, Product, BreadcrumbList. Custom JSON-LD via Code Snippets plugin or theme `functions.php`.
- **Webflow** — Built-in Open Graph + manual JSON-LD via Embed in `<head>`.
- **Shopify** — Default theme generates Product schema; customize via theme `liquid` files.
- **Next.js / headless** — `next/script` in layout, generated from CMS data per page.
- **Headless WP / Sanity / Contentful** — Render JSON-LD in your frontend layer using the headless API's typed fields.

### Visible-Content Rule
Every property in JSON-LD must appear on the page in human-readable form. If you mark a price as `49.00`, the visible price must be `$49.00`. If you mark an aggregateRating, the star rating must appear on the page. Otherwise: manual action.

---

## Validation Workflow

Run in this order, every time:

1. **[Schema Markup Validator](https://validator.schema.org/)** — generic, validates any schema.org type. Catches syntax/required-field issues. Use first.
2. **[Google Rich Results Test](https://search.google.com/test/rich-results)** — Google-specific, only validates types eligible for rich results. Shows preview of what would appear in SERP.
3. **Deploy to staging** — verify in production-like environment.
4. **Re-test on staging URL.**
5. **Ship to production.**
6. **Monitor in Google Search Console (GSC):**
   - **Enhancements report** — per-type breakdown (Article, Breadcrumb, Product, Review, Logo, Q&A, Event, Video) with valid/warning/error counts and trend lines.
   - **Unparsable Structured Data report** — catches syntax errors that prevented Google from identifying the type at all.
   - **Manual Actions report** — check after major schema changes.
   - **Performance report, filter by Search Appearance** — measure CTR delta on rich-result-eligible URLs vs non-rich.
7. **"Validate Fix" button after corrections** — instant sample test, then 2+ week recrawl validation.

For site-wide audit: **Screaming Frog or Sitebulb** crawls and reports schema validity at scale.

---

## Specific Benchmarks

These are public reported lifts. Treat client-reported numbers (Schema App, vendor case studies) skeptically — they are real cases but selected for success.

| Source | Site / vertical | Reported lift |
|---|---|---|
| Google case studies | Rotten Tomatoes (100k pages) | +25% CTR |
| Google case studies | Nestlé (rich results vs non) | +82% CTR |
| Google case studies | Food Network (80% pages enabled) | +35% visits |
| Schema App | Baptist Health (physician review snippets) | +491% CTR |
| Schema App | Job listings client | +1,194% CTR on JobPosting |
| Schema App | Avid Technology (Product rich results) | +241% CTR |
| Backlinko 11.8M SERPs study | All schema vs no schema | 72.6% of page-1 results use schema; no ranking correlation found, CTR effect only |
| Search Engine Land aggregate | Various sites | ~+30% organic CTR average |
| Recipe rich cards | (legacy data) | +40-50% CTR |

**Important:** schema does not improve rankings directly. The lift comes from CTR improvement on existing rankings (richer SERP listing → more clicks). If you are ranking #1 and getting 0% CTR, schema is not the lever.

---

## Schema for AI Search (GEO / LLM Citation)

Hot topic in 2025. The honest read:

**Confirmed user — Microsoft Bing/Copilot.** Fabrice Canel, SMX Munich, March 2025: Bing/Copilot uses schema in their LLM understanding pipeline. On the record.

**Likely user (indirect) — Google AI Overviews.** Built atop Search index, which uses schema for entity understanding. Probable but not officially confirmed for Overviews specifically.

**Unconfirmed / skeptical — ChatGPT, Claude, Perplexity at runtime.** Searchviu (2025) ran an empirical test: prices encoded only in JSON-LD were not retrieved by any of 5 tested LLMs at direct fetch. Schema likely affects training-data ingestion and search-augmented modes, not real-time fetch.

**Practical GEO play:**
1. Mark up entity identity strongly: Organization + `sameAs` to Wikipedia / Wikidata / LinkedIn.
2. Article + author Person with `sameAs`.
3. ProfilePage on author bios (2024+ rich result).
4. QAPage where genuine Q&A exists.
5. Speakable (BETA) for voice/AI experimentation.

Don't expect schema alone to be a citation silver bullet. **Schema is a contributing signal, not the lever.** The lever for AI citations is on-page answer formatting (clear claims, numbered lists, comparison tables) plus entity consistency across the web.

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Marking up invisible / hidden content | Manual action; remove or make content visible |
| Self-review markup on Organization | Reviews go on Products/services, never the brand itself |
| Wrong date format | Must be ISO 8601: `2025-01-15` or `2025-01-15T09:00:00-05:00` |
| Missing required Article fields | Required: `headline`, `image`, `datePublished`, `author` |
| Building FAQ/HowTo for SERP | Deprecated since 2023 for non-gov/health |
| Multiple Organization blocks per site, conflicting fields | One canonical Organization across the site |
| Schema disagrees with visible content (price, rating) | Visible content must match markup exactly |
| Hand-edited schema per page | Generate from CMS template; one source of truth |
| Overstuffing `sameAs` with low-quality directories | Limit to authoritative profiles (LinkedIn, Wikipedia, Wikidata, Crunchbase, real social) |

---

## Tooling

- **Schema generators (free):** Schema.org's own examples; Google's Structured Data Markup Helper; Merkle's schema generator
- **CMS plugins:** Yoast SEO Premium (WordPress); RankMath; Schema App (enterprise)
- **Audit tools:** Screaming Frog (free + paid); Sitebulb; Lumar (enterprise)
- **Validation:** [Schema Markup Validator](https://validator.schema.org/), [Rich Results Test](https://search.google.com/test/rich-results)
- **Monitoring:** Google Search Console (Enhancements + Performance); Lumar continuous monitoring (paid)

---

## References

- [Google Search Central — Intro to Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Google Search Central — Search Gallery (all supported types)](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- [Google Search Central — General Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google — Aug 2023 changes to FAQ and HowTo rich results](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
- [Google Search Central — Organization Schema](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google Search Central — Profile Page Schema](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- [Schema.org official site](https://schema.org/)
- [Search Engine Land — Aleyda Solis on schema-driven SEO](https://searchengineland.com/a-framework-for-seo-success-with-structured-data-325123)
- [Search Engine Land — Schema in AI search (no-hype framing)](https://searchengineland.com/schema-markup-ai-search-no-hype-472339)
- [Search Engine Land — Microsoft Bing/Copilot use schema for LLMs](https://searchengineland.com/microsoft-bing-copilot-use-schema-for-its-llms-453455)
- [Search Engine Journal — Lily Ray on schema for E-A-T](https://www.searchenginejournal.com/google-eat/structured-data/)
- [Backlinko — 11.8M Search Results Analysis](https://backlinko.com/search-engine-ranking)
- [Searchviu — Schema and AI in 2025: empirical LLM test](https://www.searchviu.com/en/schema-markup-and-ai-in-2025-what-chatgpt-claude-perplexity-gemini-really-see/)
- [Schema App — Measuring impact of structured data](https://www.schemaapp.com/schema-markup/how-to-measure-the-impact-of-structured-data/)

---

## Cross-Skill Links

- **`seo-audit`** — schema is one component; audit covers crawlability, on-page, content
- **`ai-seo`** — schema is contributing signal for LLM citation, not the lever
- **`site-architecture`** — Organization + Breadcrumb schema reflects site structure
- **`programmatic-seo`** — schema generation at scale is a programmatic-SEO discipline
- **`content-strategy`** — Article + Author schema reinforces E-E-A-T for content programs
