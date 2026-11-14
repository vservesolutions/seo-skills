---
name: "seo-local"
description: "Local SEO — Google Business Profile optimization, NAP consistency, citation health, review signals, LocalBusiness schema, multi-location and service-area businesses. Use when user says \"local SEO\", \"Google Business Profile\", \"GBP\", \"map pack\", \"citations\", \"NAP consistency\", \"service area\", or \"multi-location\". Also use when the user asks how to get more local customers or store visits, how to rank in the map pack, or how to handle reviews for a physical location."
category: "local-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "meshcode-ai/skills"
repo_url: "https://github.com/meshcode-ai/skills"
source: "https://github.com/meshcode-ai/skills/blob/HEAD/skills/seo-local/SKILL.md"
raw_source: "https://raw.githubusercontent.com/meshcode-ai/skills/HEAD/skills/seo-local/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 4
collected: "2026-11-14"
---

<!-- Claude Code skill · meshcode-ai/skills · skills/seo-local/SKILL.md · MIT
     Source: https://github.com/meshcode-ai/skills/blob/HEAD/skills/seo-local/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Local SEO

Determine business type first: storefront / service-area business (SAB) / hybrid — the rules differ.

## Dimensions (Priority)
1. **GBP**: primary category (biggest lever), services, hours, photos, Q&A, posts
2. **NAP consistency**: identical name/address/phone across site footer, GBP, and top citation sites — inconsistency suppresses the map pack
3. **Reviews**: volume, velocity, response rate, keyword mentions inside reviews
4. **Citations**: core directories + industry directories; remove duplicate and erroneous listings
5. **On-page**: unique local content, embedded map, `LocalBusiness` schema (geo, openingHours, areaServed)
6. **Local links**: chamber of commerce, local press, sponsorships

AI assistants also pull local answers from GBP + review data, so completeness drives the map pack and AI search together.

## Output
Map-pack readiness score; a three-tier list of quick wins (≤1 day) / mid-tier / high-impact; per-location table for multi-location businesses.
