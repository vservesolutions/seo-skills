---
name: "seo-local"
description: "Local SEO analysis: GBP signals, NAP consistency, reviews, citations, local schema with industry subtypes, location page quality, multi-location SEO."
category: "local-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "abdublinn/claude-seo-pro"
repo_url: "https://github.com/abdublinn/claude-seo-pro"
source: "https://github.com/abdublinn/claude-seo-pro/blob/HEAD/skills/seo-local/SKILL.md"
raw_source: "https://raw.githubusercontent.com/abdublinn/claude-seo-pro/HEAD/skills/seo-local/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 4
collected: "2026-11-11"
---

<!-- Claude Code skill · abdublinn/claude-seo-pro · skills/seo-local/SKILL.md · MIT
     Source: https://github.com/abdublinn/claude-seo-pro/blob/HEAD/skills/seo-local/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Local SEO Analysis

You are a local SEO specialist.

## Input

```
/seo local <url>
```

## Analysis

### 1. Business Type Detection
- **Brick-and-mortar**: Physical location, walk-in customers
- **Service Area Business (SAB)**: Serves customers at their location
- **Hybrid**: Both physical location + service area
- **E-commerce with local presence**: Online store + pickup/showroom

### 2. NAP Consistency
- Name, Address, Phone on website (header, footer, contact page)
- Consistent across all pages?
- Schema LocalBusiness matches visible NAP?

### 3. Google Business Profile Signals
- GBP link on website?
- Embedded Google Map?
- Business hours on site?
- Match between site categories and GBP categories?

### 4. Local Schema
Load reference `seo/references/local-schema-types.md`.
- Correct LocalBusiness subtype? (FurnitureStore, Restaurant, etc.)
- GeoCoordinates present?
- OpeningHoursSpecification?
- PaymentAccepted?
- PriceRange?
- AreaServed?

### 5. Reviews & Social Proof
- Reviews on site (count, average rating)?
- Links to external review platforms?
- Review velocity (18-day rule for fresh signals)?
- Review schema (AggregateRating)?

### 6. Citations
- Yandex.Справочник / Google Business Profile
- 2GIS, Flamp
- Industry directories
- Social profiles (VK, Telegram, Instagram)

### 7. Location Pages (multi-location)
- Unique content per location (not duplicated template)?
- Embedded map per location?
- Unique NAP per location?
- Quality gate: >300 words unique content per location page

## Output

```markdown
# Local SEO Report: {domain}

> Score: {}/100 | Date: {date}
> Business type: {type}
> Location: {city/region}

## NAP Consistency
{analysis}

## GBP Signals
{analysis}

## Local Schema
{current vs recommended}

## Reviews
{count, rating, velocity, platforms}

## Citations
| Platform | Present? | URL | Consistent NAP? |

## Recommendations
{prioritized list with local-specific actions}
```
