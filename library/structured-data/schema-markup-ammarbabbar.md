---
name: "schema-markup"
description: "Use when the user wants to add, fix, review or validate structured data (JSON-LD schema), or asks which schema type fits a page: LocalBusiness and its subtypes (RoofingContractor, HVACBusiness, Plumber, RealEstateAgent...), Organization, Service, BreadcrumbList, Article, FAQPage, Review or Product. Writes valid JSON-LD that matches visible page content."
category: "structured-data"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/schema-markup/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/schema-markup/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/schema-markup/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/schema-markup/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Schema Markup

You write clean, valid JSON-LD that describes the business and its pages accurately. Schema helps search engines and AI systems understand entities. It does not guarantee rich results.

## Before you start

1. Read `.agents/seo-context.md` for exact NAP, services, areas, hours and profiles.
2. Look at the page you are marking up. Schema must describe content that is visible on that page.
3. Check what schema already exists (plugins like Yoast, Rank Math or theme schema often add some). Avoid duplicate or conflicting entities.

## Choosing types

- **Homepage**: the most specific LocalBusiness subtype (e.g. `RoofingContractor`, `HVACBusiness`, `Plumber`, `Electrician`, `GeneralContractor`, `HousePainter`, `Locksmith`, `MovingCompany`, `RealEstateAgent`). If no subtype fits (for example junk removal), use `LocalBusiness` or `HomeAndConstructionBusiness`. Never invent types.
- **Service page**: `Service` with `serviceType`, `provider` (reference the business `@id`) and `areaServed`
- **Location page**: `Service` or a `LocalBusiness` reference with `areaServed` for that city. Only use a separate LocalBusiness with its own address if there is a real physical office there.
- **Blog post**: `BlogPosting` or `Article` with a real `author` (`Person`), `datePublished`, `dateModified`
- **All pages below home**: `BreadcrumbList`
- **FAQ**: `FAQPage` only if the Q&A is visible on the page. Since 2023 Google shows FAQ rich results only for well-known authoritative government and health sites, so do not promise stars or dropdowns.

## Rules

- Use one `@id` per entity (e.g. `https://example.com/#business`) and reference it, instead of repeating the business on every page.
- NAP must match the page and the Google Business Profile exactly.
- `sameAs`: Google Business Profile (Maps URL), Facebook, LinkedIn, YouTube, Yelp, BBB and other real profiles.
- Do not add `aggregateRating` / `Review` for the business on its own site. Self-serving reviews for LocalBusiness and Organization are not eligible for review stars and can be treated as spammy markup.
- For service-area businesses that hide their address, do not publish a street address in schema. Use `areaServed` and a city/region-level `address` only if it is public.
- No markup for content that is hidden, fake or not on the page.

## Example: homepage

```json
{
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://example.com/#business",
  "name": "Example Roofing",
  "url": "https://example.com/",
  "logo": "https://example.com/logo.png",
  "image": "https://example.com/images/crew.jpg",
  "telephone": "+1-214-555-0100",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Dallas",
    "addressRegion": "TX",
    "postalCode": "75201",
    "addressCountry": "US"
  },
  "areaServed": [
    {"@type": "City", "name": "Dallas"},
    {"@type": "City", "name": "Plano"}
  ],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "18:00"
  }],
  "sameAs": [
    "https://maps.google.com/?cid=XXXXXXXX",
    "https://www.facebook.com/exampleroofing"
  ]
}
```

## Example: service page

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://example.com/services/roof-repair/#service",
  "serviceType": "Roof repair",
  "name": "Roof Repair in Dallas",
  "provider": {"@id": "https://example.com/#business"},
  "areaServed": {"@type": "City", "name": "Dallas"},
  "url": "https://example.com/services/roof-repair/"
}
```

All values above are placeholders. Replace them with real data from the context file and never ship placeholders.

## Validation

1. Google Rich Results Test (rich result eligibility)
2. Schema Markup Validator at validator.schema.org (syntax and types)
3. After launch: GSC Enhancements reports

## Output format

- Which types go on which page, and why
- Ready-to-paste JSON-LD per page or template
- Where to add it on their platform (plugin settings, theme header, tag manager as a last resort)
- Validation checklist

## Related skills

`seo-audit`, `on-page-seo`, `local-seo-audit`, `service-pages`, `location-pages`
