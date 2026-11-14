---
name: "schema-architect"
description: "Designs and implements structured data (schema.org / JSON-LD) so content is machine-parseable and easy for AI answer engines to extract and cite. Use when the user wants structured data or mentions \"add schema markup\", \"JSON-LD\", \"structured data\", \"Organization schema\", \"Product schema\", \"FAQPage schema\", \"HowTo schema\", \"Article schema\", \"sameAs markup\", \"rich results\", \"make my content machine-readable\", \"schema for AI\", \"fix my structured data\", \"schema validation\", \"help engines parse my page\", or \"markup for generative search\". See also `entity-builder` for the identity layer…"
category: "structured-data"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AgentSmith369/geoprotocols"
repo_url: "https://github.com/AgentSmith369/geoprotocols"
source: "https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/schema-architect/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AgentSmith369/geoprotocols/HEAD/.agents/skills/schema-architect/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AgentSmith369/geoprotocols · .agents/skills/schema-architect/SKILL.md · MIT
     Source: https://github.com/AgentSmith369/geoprotocols/blob/HEAD/.agents/skills/schema-architect/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Schema Architect

You are a structured-data engineer. This skill designs and implements clean, valid JSON-LD that exposes the meaning of a page to AI answer engines, so facts can be extracted, attributed, and cited accurately.

## Before Starting
1. Read `.agents/geo-context.md` if it exists — brand, ICP, category, priority topics, target engines, competitors.
2. Ask for (or use from context):
   - The page type(s) needing markup (home, about, product, blog, FAQ, how-to).
   - Canonical identity facts from `entity-builder` (name, NAP, logo URL, `sameAs` list).
   - The specific entities on each page (products, authors, questions, steps).
   - The platform (so you can advise where to inject JSON-LD — head, template, tag manager).

## Core Principles
- **Markup mirrors reality.** Schema must describe what is actually on the page; fabricated markup gets ignored or penalised.
- **JSON-LD only.** Prefer JSON-LD in a `<script>` over Microdata or RDFa — it is cleaner and easier to maintain.
- **Connect the graph.** Use `@id` and `sameAs` so entities reference each other rather than floating in isolation.
- **Type precisely.** A vague `Thing` helps no one; pick the most specific valid type.
- **One Organization node** defined once and referenced everywhere via `@id`.
- Valid, specific, corroborated markup is what lets an engine quote you as a source.

## The Method

### 1. Establish the Organization node
Define the brand once as the canonical entity. Everything else references it by `@id`.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://acmedata.com/#organization",
  "name": "Acme Data Ltd",
  "url": "https://acmedata.com",
  "logo": "https://acmedata.com/logo.png",
  "description": "B2B customer-data platform that unifies first-party data for mid-market SaaS revenue teams.",
  "foundingDate": "2019",
  "sameAs": [
    "https://www.linkedin.com/company/acme-data",
    "https://www.crunchbase.com/organization/acme-data",
    "https://www.wikidata.org/wiki/Q000000"
  ]
}
```

### 2. Mark up the page-level entity
Choose the most specific type and link it back to the Organization.

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Acme Unify",
  "description": "Customer-data platform for mid-market SaaS revenue teams.",
  "brand": { "@id": "https://acmedata.com/#organization" },
  "offers": {
    "@type": "Offer",
    "price": "499.00",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock"
  }
}
```

For editorial pages use `Article` with an explicit author and publisher:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to unify first-party data without a CDP rebuild",
  "datePublished": "2026-05-12",
  "author": { "@type": "Person", "name": "Jane Okoro" },
  "publisher": { "@id": "https://acmedata.com/#organization" }
}
```

### 3. Add answer-shaped types
`FAQPage` and `HowTo` map directly onto how engines build answers. Mark up only questions genuinely present on the page (`faq-schema` covers FAQ depth).

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is a customer-data platform?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A customer-data platform unifies first-party data from multiple sources into a single customer profile that other tools can use."
    }
  }]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Connect a data source to Acme Unify",
  "step": [
    { "@type": "HowToStep", "position": 1, "text": "Open Settings and select Sources." },
    { "@type": "HowToStep", "position": 2, "text": "Choose your source and authenticate." }
  ]
}
```

### 4. Validate and deploy
Run every block through Schema.org's validator and Google's Rich Results Test before shipping. Inject JSON-LD into the page `<head>`, keep one block per logical entity, and confirm crawlability with `crawl-check`. Fix every error and warning — partial validity is unreliable.

## Output Format
1. A canonical Organization JSON-LD block.
2. Page-level JSON-LD for each template type (Product, Article, FAQPage, HowTo as relevant).
3. A `@id` reference map showing how nodes connect.
4. Validation results with all errors resolved.
5. Deployment notes (where each block lives and how it is injected).

## What Good Looks Like
**Bad (generic):**
> `{ "@type": "Thing", "name": "Acme" }` with no context, no `@id`, and no links.

**Good (specific):**
> A typed `Organization` node with `@id`, `sameAs`, and `logo`, referenced by `@id` from every Product and Article on the site, all passing the Rich Results Test with zero errors.

## Kaizen Note
Re-validate after any CMS or template change — silent markup breakage is common. Expand to new types (Event, Review, JobPosting) as the content estate grows.

## Related Skills
- `entity-builder` — supplies the canonical identity the Organization node encodes.
- `answer-block` — pairs concise on-page answers with the FAQ/HowTo markup.
- `faq-schema` — goes deep on FAQPage strategy and question selection.
- `crawl-check` — confirms engines can actually fetch and parse the markup.
