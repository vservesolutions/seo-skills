---
name: "schema-structured-data-graphs"
description: "Builds, validates, and injects Schema.org JSON-LD multi-entity graphs (Person, VideoObject, AggregateRating, OfferCatalog, LocalBusiness, FAQPage, TechArticle) for search engine rich snippets and Knowledge Graph integration."
category: "structured-data"
platforms: ["unspecified"]
platform_source: "none"
repo: "Fahad-Mahmood/agentic-seo-skills"
repo_url: "https://github.com/Fahad-Mahmood/agentic-seo-skills"
source: "https://github.com/Fahad-Mahmood/agentic-seo-skills/blob/HEAD/skills/3-MODERN-AI-AEO-AND-GEO/schema-structured-data-graphs/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Fahad-Mahmood/agentic-seo-skills/HEAD/skills/3-MODERN-AI-AEO-AND-GEO/schema-structured-data-graphs/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · Fahad-Mahmood/agentic-seo-skills · skills/3-MODERN-AI-AEO-AND-GEO/schema-structured-data-graphs/SKILL.md · MIT
     Source: https://github.com/Fahad-Mahmood/agentic-seo-skills/blob/HEAD/skills/3-MODERN-AI-AEO-AND-GEO/schema-structured-data-graphs/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Schema.org Structured Data Graphs

## Overview

Schema.org JSON-LD structured data translates your web application into machine-readable entity graphs that unlock Google Rich SERP snippets (star ratings, video thumbnails, price ranges, breadcrumb hierarchies, and FAQ accordions).

---

## Supported Schema Architectures

### 1. Person Schema with AggregateRating & OfferCatalog
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Hamza Tariq",
  "jobTitle": "High Retention YouTube Editor",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lahore",
    "addressRegion": "Punjab",
    "addressCountry": "PK"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.98,
    "reviewCount": 24,
    "bestRating": 5
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Video Editing Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "YouTube Long Form Edit",
        "price": 35000,
        "priceCurrency": "PKR",
        "availability": "https://schema.org/InStock"
      }
    ]
  },
  "sameAs": [
    "https://youtube.com/@HamzaEdits",
    "https://linkedin.com/in/hamza-tariq"
  ]
}
```

### 2. VideoObject Schema (Showreel Proof)
```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Hamza Tariq Video Editing Showreel",
  "description": "Showcase of high-retention documentary cuts and sound design.",
  "thumbnailUrl": ["https://pakiedit.com/avatar.jpg"],
  "uploadDate": "2026-01-15T00:00:00Z",
  "duration": "PT2M30S",
  "embedUrl": "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": { "@type": "WatchAction" },
    "userInteractionCount": 1540
  }
}
```
