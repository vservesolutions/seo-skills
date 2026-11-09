---
name: "seo-schema-builder"
description: "Generates and validates schema.org structured data as JSON-LD for rich results — Organization, LocalBusiness, Product, Service, Article, Breadcrumb, FAQPage, Event, Recipe, Review/AggregateRating, and more. Enforces strict no-fabrication rules: it refuses to invent ratings, reviews, prices, availability, authors or any value not backed by real, on-page data. Use when someone asks for structured data, JSON-LD, schema markup, rich results / rich snippets, or wants a page eligible for enhanced search appearances."
category: "structured-data"
platforms: ["any-agent"]
platform_source: "declared"
repo: "gaguero/seo-agent-skills"
repo_url: "https://github.com/gaguero/seo-agent-skills"
source: "https://github.com/gaguero/seo-agent-skills/blob/HEAD/seo-schema-builder/SKILL.md"
raw_source: "https://raw.githubusercontent.com/gaguero/seo-agent-skills/HEAD/seo-schema-builder/SKILL.md"
ref: "HEAD"
discovered_via: "awesome-seo-agent-skills"
license: "MIT"
stars: 0
collected: "2026-11-09"
---

<!-- Any agent skill · gaguero/seo-agent-skills · seo-schema-builder/SKILL.md · MIT
     Source: https://github.com/gaguero/seo-agent-skills/blob/HEAD/seo-schema-builder/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Schema / JSON-LD Builder

Structured data helps search engines understand a page and unlocks rich results.
But it is also the single easiest place for an AI agent to fabricate data and earn
a manual penalty. **This skill's first job is to refuse fake markup.**

## The non-negotiable rule

> Only mark up content that is **real, accurate, and visible to the user on the
> page**. If a required value isn't backed by real data, do **not** invent it —
> output "data needed" and stop.

Never generate: ratings/review counts you don't have, reviews you didn't receive,
prices/availability you can't confirm, authors who don't exist, or markup for
content that isn't on the page. Google's structured-data policies prohibit this and
it risks manual actions.

## Workflow

1. **Identify the page type** → pick the matching schema type(s):
   | Page | Primary type(s) |
   |------|-----------------|
   | Brand/home | `Organization` (+ `sameAs`, logo) |
   | Local business / location | `LocalBusiness` (subtype) + NAP + `geo` + `openingHours` |
   | Product | `Product` + `Offer` (+ `AggregateRating`/`Review` **only if real**) |
   | Service | `Service` |
   | Blog/news/guide | `Article` / `BlogPosting` / `NewsArticle` + `author` + dates |
   | Any deep page | `BreadcrumbList` |
   | Genuine Q&A on page | `FAQPage` (see strict rules below) |
   | Event | `Event` + dates + location + `offers` |
   | Recipe / How-to | `Recipe` / `HowTo` |

2. **Collect real values** from the page (or ask). Map each schema property to a
   visible, verifiable source. If a value isn't on the page and can't be confirmed,
   either omit the optional property or report it as required-but-missing.

3. **Generate JSON-LD** — always `<script type="application/ld+json">`, placed in
   `<head>` or `<body>`. Prefer JSON-LD over Microdata/RDFa. One graph or multiple
   scripts both fine; use `@id` to link nodes (e.g. Article → Organization publisher).

4. **Validate** before shipping:
   - Run `scripts/validate.py <file-or-url>` for structural/required-field checks
     and fabrication smells.
   - Then the **Rich Results Test** (https://search.google.com/test/rich-results)
     for eligibility, and **validator.schema.org** for vocabulary correctness.

## Type-specific guardrails

- **Review / AggregateRating** — only if the page genuinely displays real reviews/
  ratings collected from real customers. Self-serving reviews of your own
  business/products are not eligible. No real reviews → no review markup. Period.
- **FAQPage** — only for questions-and-answers **actually shown on the page**, that
  are genuinely informational. Don't fabricate FAQs to game snippets; don't use
  FAQPage for ads/promos or a single question. (Google has narrowed FAQ rich-result
  display — value it for clarity/AEO, not guaranteed snippets.)
- **Product Offer** — `price`, `priceCurrency`, `availability` must be current and
  match the page. Don't guess currency or stock.
- **LocalBusiness** — NAP (name, address, phone) must be **identical** to the
  site's visible NAP and other citations. Include `geo`, `openingHoursSpecification`,
  `areaServed`, `url`, `image`. Pick the most specific subtype (e.g. `Resort`,
  `CarRental`, `TravelAgency`).
- **Article** — real `author` (Person/Organization), `datePublished`,
  `dateModified`, `headline`, `image`, `publisher`.

## Output

- The JSON-LD block(s), ready to paste.
- A line-by-line note of which value came from where (so a human can verify).
- An explicit list of any required fields that are **missing real data**, blocking
  those types until supplied.

Run the result through `seo-quality-gates` before publishing.

See [references/schema-types.md](references/schema-types.md) for templates and
required fields, and [scripts/validate.py](scripts/validate.py) for local checks.
