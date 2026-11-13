---
name: "seo-ecommerce"
description: "E-commerce SEO, product schema validation, faceted navigation indexing control, out-of-stock URL management, and Google Merchant Center optimization."
summary: "Manages e-commerce SEO including product schema, faceted navigation indexing, and stock management."
category: "ecommerce-seo"
platforms: ["claude-code", "windsurf", "antigravity"]
platform_source: "declared"
repo: "seoskillsai/seo-skills-ai"
repo_url: "https://github.com/seoskillsai/seo-skills-ai"
source: "https://github.com/seoskillsai/seo-skills-ai/blob/HEAD/skills/seo-ecommerce/SKILL.md"
raw_source: "https://raw.githubusercontent.com/seoskillsai/seo-skills-ai/HEAD/skills/seo-ecommerce/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 21
collected: "2026-11-13"
---

<!-- Claude Code, Windsurf, Antigravity skill · seoskillsai/seo-skills-ai · skills/seo-ecommerce/SKILL.md · MIT
     Source: https://github.com/seoskillsai/seo-skills-ai/blob/HEAD/skills/seo-ecommerce/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# E-Commerce SEO & Product Schema Engine

Optimizes product catalogs, category hierarchies, and Google Shopping structured data.

---

## 🛍️ Core E-Commerce Standards

1. **Rich Product JSON-LD Schema:**
   - Must include `name`, `image`, `description`, `sku`, `brand`, `offers` (price, priceCurrency, availability), and `aggregateRating`.
2. **Faceted Navigation Crawl Control:**
   - Apply `rel="canonical"` or `robots.txt` disallow rules on multi-filter search combinations (e.g. `?color=blue&size=m&sort=price`) to prevent infinite crawl loops.
3. **Out-of-Stock URL Management:**
   - Keep URLs live with `availability: "https://schema.org/OutOfStock"`, display related product recommendations, and collect back-in-stock email alerts (never 404 temporary out-of-stock items).
