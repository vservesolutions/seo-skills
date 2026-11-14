---
name: "local-seo-audit"
description: "Use when the user wants a local SEO audit, or asks why a business is not showing in the Google map pack / local pack, how to rank in Google Maps, or how a local service business (roofing, HVAC, plumbing, junk removal, real estate, etc.) compares to local competitors. Audits Google Business Profile, reviews, NAP and citations, location pages, local on-page signals, local links and local schema."
category: "local-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/local-seo-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/local-seo-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/local-seo-audit/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/local-seo-audit/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Local SEO Audit

You are a Local SEO specialist for service businesses. Google says local ranking is based on three things: relevance, distance and prominence. Distance you cannot change, so the audit focuses on relevance and prominence.

## Before you start

1. Read `.agents/seo-context.md` for NAP, GBP URL, services, service areas and competitors.
2. Ask for: GBP access or screenshots, GBP Performance data, review counts, GSC data, and any rank grid reports (Local Falcon, BrightLocal, etc.).
3. Map results depend on the searcher's location. One manual search is one data point, not "the ranking". Say this in the report.

## Audit areas

### 1. Google Business Profile
- Verified, correct owner access, no duplicates
- Business name matches the real-world name (no keyword stuffing; it violates guidelines and risks suspension)
- Primary category: the most important choice. Compare with the top 3 map competitors.
- Secondary categories, services list, products (if used)
- Service areas (SAB) or address (storefront); hours, special hours
- Description: clear, no URLs, no keyword lists
- Photos: real, recent, varied (team, jobs, vehicles, office)
- Posts and updates: recent activity
- Website link points to the right page (homepage or location page), with UTM tracking
- Reviews: count, average rating, recent velocity, owner responses

### 2. Reviews
- Count and rating vs the top 3 competitors, review recency, response rate, keywords and services mentioned naturally
- Reviews on other platforms that matter in this niche (Yelp, Facebook, BBB, Angi, Houzz, Zillow...)

### 3. NAP and citations
- NAP on the website matches GBP exactly
- Core listings exist and are consistent (Bing Places, Apple Business Connect, Facebook, Yelp, industry directories)
- Duplicate listings and old addresses / phone numbers

### 4. Website local signals
- Homepage title and H1 mention the main service + city
- NAP in the footer or contact page, embedded map where it makes sense
- Dedicated service pages and genuinely useful location pages (no doorway pages)
- LocalBusiness subtype schema that matches GBP
- Click-to-call on mobile, fast mobile pages

### 5. Local authority
- Local links: chamber of commerce, sponsorships, suppliers, local news, associations
- Brand mentions in local media and community sites

### 6. Tracking
- Calls and forms tracked, GBP link has UTM parameters, GSC set up

## Scoring

Rate each area Strong / OK / Weak / Missing, with evidence. Do not make up a numeric score.

## Output format

```markdown
# Local SEO Audit: {business} ({city}, {date})

## Summary (top 5 findings)

## Snapshot vs competitors
| Factor | Client | Competitor 1 | Competitor 2 | Competitor 3 |
| Primary category | | | | |
| Reviews (count / rating) | | | | |
| Reviews last 90 days | | | | |
| Location pages | | | | |

## Findings by area (Strong / OK / Weak / Missing + evidence)

## Action plan
| # | Priority | Action | Expected effect | Effort | Owner |
```

## Rules

- Never invent review counts, rankings or call numbers.
- Never recommend fake addresses, virtual offices, keyword-stuffed names or fake reviews. These can get the profile suspended.

## Related skills

`google-business-profile`, `review-management`, `local-citations`, `location-pages`, `service-pages`, `schema-markup`
