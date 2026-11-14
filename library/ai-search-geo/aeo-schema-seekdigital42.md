---
name: "aeo-schema"
description: "Analyze existing structured data, identify gaps, and generate AI-optimized JSON-LD schema markup for maximum entity recognition and citability."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "seekdigital42/aeo-seo-claude"
repo_url: "https://github.com/seekdigital42/aeo-seo-claude"
source: "https://github.com/seekdigital42/aeo-seo-claude/blob/HEAD/skills/aeo-schema/SKILL.md"
raw_source: "https://raw.githubusercontent.com/seekdigital42/aeo-seo-claude/HEAD/skills/aeo-schema/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-14"
---

<!-- Unspecified skill · seekdigital42/aeo-seo-claude · skills/aeo-schema/SKILL.md · MIT
     Source: https://github.com/seekdigital42/aeo-seo-claude/blob/HEAD/skills/aeo-schema/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# AEO Schema Sub-Skill

## Purpose
Analyze existing structured data, identify gaps, and generate AI-optimized JSON-LD schema markup for maximum entity recognition and citability.

## Why Schema Matters for AEO
Schema.org structured data helps AI systems understand:
- What a business is (entity type)
- What it does (products, services)
- Who it is (author, organization, brand identity)
- What others say about it (reviews, ratings)
- How it's connected to other entities (sameAs links)

Well-implemented schema is one of the highest-ROI AEO investments because it directly feeds AI knowledge graph signals.

## Analysis Steps

### Step 1 — Schema Detection
Fetch the page source and extract all JSON-LD blocks. Also check for Microdata and RDFa as fallbacks.

### Step 2 — Schema Audit

For each detected schema block, evaluate:
- [ ] Valid JSON (no syntax errors)
- [ ] Correct @type for business context
- [ ] Required properties present
- [ ] Recommended properties present
- [ ] sameAs links included (for Organization)
- [ ] No deprecated properties (e.g. `@context` format)

### Step 3 — Gap Analysis
Compare detected schemas against the recommended set for the detected business type:

| Business Type | Priority Schema Types |
|--------------|----------------------|
| SaaS / Software | Organization, SoftwareApplication, FAQPage, Article |
| B2B Services | Organization, ProfessionalService, FAQPage, Article |
| E-commerce | Organization, Product, Offer, BreadcrumbList |
| Local Business | LocalBusiness, Organization, FAQPage |
| Media / Blog | Organization, WebSite, Article, Person |
| Any | WebSite (with SearchAction) |

## Schema Templates

### Organization (Baseline — All Sites)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[Brand Name]",
  "url": "[https://example.com]",
  "logo": "[https://example.com/logo.png]",
  "description": "[One to two sentence brand description]",
  "foundingDate": "[YYYY]",
  "sameAs": [
    "https://www.linkedin.com/company/[handle]",
    "https://twitter.com/[handle]",
    "https://www.youtube.com/@[handle]",
    "https://en.wikipedia.org/wiki/[Brand]",
    "https://www.wikidata.org/wiki/[Q-number]",
    "https://www.crunchbase.com/organization/[handle]",
    "https://g2.com/products/[handle]"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "url": "[https://example.com/contact]"
  }
}
```

### FAQPage (High-Impact for AEO)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text — match actual buyer queries]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Self-contained answer, 120–180 words, fact-rich]"
      }
    }
  ]
}
```

### Article + Person (E-E-A-T)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article title]",
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "author": {
    "@type": "Person",
    "name": "[Author Name]",
    "url": "[https://example.com/author/name]",
    "sameAs": [
      "https://www.linkedin.com/in/[handle]",
      "https://twitter.com/[handle]"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "[Brand Name]",
    "logo": {
      "@type": "ImageObject",
      "url": "[https://example.com/logo.png]"
    }
  },
  "description": "[Article description]"
}
```

### ProfessionalService (B2B Services)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "[Brand Name]",
  "url": "[https://example.com]",
  "description": "[Service description]",
  "areaServed": "[Country or Region]",
  "serviceType": "[Service category]",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "[Service name]",
          "description": "[Service description]"
        }
      }
    ]
  }
}
```

## Schema Score (0–100)

```
schema_score = (
  coverage_score * 0.40 +   # Are the right schema types present?
  correctness_score * 0.35 + # Is the schema valid and complete?
  aeoo_richness_score * 0.25  # Does schema include AI-specific signals (sameAs, FAQPage)?
)
```

## Output Format

1. **Schema Score** (0–100) with rating
2. **Detected Schemas** — List with type, location, validation status
3. **Missing High-Priority Schemas** — What's absent and why it matters for AEO
4. **Ready-to-Deploy Code** — Full JSON-LD for each recommended schema, customized to the site
5. **Implementation Notes** — Where to place each schema block, how to test with Google's Rich Results Test
