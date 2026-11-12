---
name: "seo-local"
description: "Audit real local-business pages, location details, and Google Business Profile eligibility from verified business information. Use for physical or eligible service-area businesses; an online-only SaaS should use general discovery guidance."
summary: "Audits local business pages, location details, and Google Business Profile eligibility."
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "ronaldships/foundvia-discovery"
repo_url: "https://github.com/ronaldships/foundvia-discovery"
source: "https://github.com/ronaldships/foundvia-discovery/blob/HEAD/skills/seo-local/SKILL.md"
raw_source: "https://raw.githubusercontent.com/ronaldships/foundvia-discovery/HEAD/skills/seo-local/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 30
collected: "2026-11-12"
---

<!-- Unspecified skill · ronaldships/foundvia-discovery · skills/seo-local/SKILL.md · MIT
     Source: https://github.com/ronaldships/foundvia-discovery/blob/HEAD/skills/seo-local/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Local business discovery

First confirm the business model: staffed customer-facing location, eligible service-area business, or online-only operation. Check current Business Profile eligibility before recommending a profile. Do not fabricate addresses, storefronts, locations, reviews, or service areas.

## Check customer-facing information

Compare business name, address/service area, phone, hours, and destination URL with the owner's records. Resolve contradictions that confuse customers; different harmless abbreviations are not automatically ranking failures. Record where information was verified and what remains unknown.

For each real location, inspect its own contact details, access information, services, and useful local evidence. Do not create city pages by replacing place names in the same text. A service-area page must describe service actually provided there; it is not evidence of a physical branch.

Use the appropriate LocalBusiness subtype only when it describes the business. Markup must agree with the visible page. Geo coordinates are descriptive data, not a local-pack ranking guarantee. Self-serving reviews of a LocalBusiness/Organization are not eligible for Google's review stars; do not relabel a business as Product to evade this.

## Deliver and verify

Provide an evidence table and a specific correction for each affected location. Validate structured data and visible contact details; verify Business Profile changes only with authorized access. Preparing a correction is separate from publishing a profile update or replying to customers.

Read [multi-location pattern](references/multi-location-pattern.md) when relevant. Sources: [eligibility](https://support.google.com/business/answer/13763036), [LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business).
