---
name: "local-schema"
description: "Generate and validate LocalBusiness structured data (JSON-LD) for local businesses. Use when the user needs schema markup, structured data, JSON-LD, LocalBusiness markup, or mentions \"rich results\", \"knowledge panel\", or \"Google doesn't understand my business\". Covers subtype selection, areaServed for service-area businesses with no public address, multi-location @id and branchOf wiring, and auditing for deprecated types. Also covers entity building via Wikidata and industry directories. 中文触发：结构化数据、schema 标记、JSON-LD、LocalBusiness、富媒体结果、知识面板、 服务范围商家、多门店标记、谷歌不认识我的商家。 Does not change GBP…"
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "tech383/local-seo-kit"
repo_url: "https://github.com/tech383/local-seo-kit"
source: "https://github.com/tech383/local-seo-kit/blob/HEAD/skills/local-schema/SKILL.md"
raw_source: "https://raw.githubusercontent.com/tech383/local-seo-kit/HEAD/skills/local-schema/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · tech383/local-seo-kit · skills/local-schema/SKILL.md · MIT
     Source: https://github.com/tech383/local-seo-kit/blob/HEAD/skills/local-schema/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Local business structured data

Tier 0 — no external data source required.

## When to use

**Use**
- Generating or correcting LocalBusiness JSON-LD
- Auditing existing markup for deprecated or wrong subtypes
- Markup for service-area businesses with no public address
- Multi-location schema wiring
- Entity building: Wikidata, Crunchbase, industry associations

**Don't use**
- GBP categories, attributes, description → `gbp-optimize`
- City page body copy → `local-landing-pages`
- Review replies → `review-response`

## Required input

**Needed**
- Legal business name (the version matching the GBP, site and registration)
- Business type / industry
- Whether there is a publicly staffed physical address
- Website URL

**With a physical location**: full address, coordinates, opening hours
**Service-area business**: the cities or postal ranges actually served
**Multi-location**: the location list and headquarters details

**If missing**: any required field absent → `PARTIAL`, emit `[NEEDS INPUT: <field>]`, **do not guess or fill**. Coordinates especially may not be estimated — **wrong coordinates are worse than none**, because they route people to the wrong place.

## Steps

### 1. Determine the business shape

This decides everything downstream. Settle it first.

| Shape | Signature | Key difference |
|---|---|---|
| **Physical location** | Customers come to you | Include `address` + `geo` |
| **Service-area (SAB)** | You travel to them, no public premises | **`areaServed` only — no public `address`** |
| **Hybrid** | Both | Include both |

`[E1]` Google requires service-area businesses to hide the physical address and declare a service area instead (Google Business Profile Help Centre, 2024).

### 2. Pick the most specific subtype

**Don't default to `LocalBusiness`.** schema.org offers many specific subtypes; use the most specific accurate one.

Full mapping in `references/subtypes.md`. High-frequency cases:

| Industry | Use | Not |
|---|---|---|
| Restaurant | `Restaurant` | `LocalBusiness` |
| Law firm | `LegalService` | `Attorney` (deprecated on schema.org) |
| Plumbing | `Plumber` | `HomeAndConstructionBusiness` |
| HVAC | `HVACBusiness` | `LocalBusiness` |
| Dental | `Dentist` | `MedicalBusiness` |

`[E3]` A more specific subtype helps search engines understand the business (the intent of schema.org's type hierarchy; ranking effect not isolated by controlled experiment).

### 3. Check for deprecated types

Audit existing markup against `references/schema-lifecycle.md`.

`[E1]` HowTo rich results were removed from Google Search (Google Search Central, 2023-09).
`[E1]` FAQPage rich results were restricted to authoritative government and health sites (Google Search Central, 2023-08).

Deprecated markup isn't penalized, but **continuing to maintain it is wasted effort** and creates the impression that useful work is happening.

### 4. Generate the JSON-LD

Templates in `references/templates.md` — physical location, SAB, multi-location.

**Field requirements**
- `name` — identical across GBP, website and registration
- `telephone` — with country code, matching the GBP
- `address` — physical locations only; `addressCountry` uses the ISO two-letter code
- `geo` — at least 5 decimal places `[E3]` (roughly metre precision; common practice, not verified by controlled experiment)
- `openingHoursSpecification` — structured, never free text
- `sameAs` — GBP, official social, Wikidata if present. **Only properties the business actually owns**
- `areaServed` — required for SABs; `City` or `GeoCircle`

**Multi-location**: a stable `@id` per location (canonical URL plus anchor), each branch pointing at headquarters via `branchOf`.

### 5. Validate

Run both. They report differently; pass both.

- https://search.google.com/test/rich-results
- https://validator.schema.org/

### 6. Entity building (optional)

| Platform | Barrier | Notes |
|---|---|---|
| **Wikidata** | No notability threshold | Self-creatable, consumed directly by Google's Knowledge Graph. **First choice for entity building** |
| Crunchbase | Low | Company entity record |
| LinkedIn company page | Low | Strong brand signal |
| Industry association / chamber | Membership | Delivers a citation and a link too |

> ❌ **Do not attempt a Wikipedia article.** See Myths.

## Hard gates

Refuse to generate, returning `FAILED` or `PARTIAL` with an explanation:

1. **`address` / `geo` for a business with no staffed location** — fabricating location signals is a common suspension trigger. Use `areaServed`
2. **Estimated coordinates** — refuse. Wrong coordinates route customers to the wrong place
3. **`name` inconsistent with GBP or the site** — have the user settle the canonical version first; inconsistent markup creates a trust conflict
4. **`areaServed` for cities not actually served**
5. **Markup using a deprecated type** — refuse and give the replacement
6. **`sameAs` entries the business doesn't own**

## Myths

`[E4]` ❌ **Create a Wikipedia article to build entity signals.**
Wikipedia's notability standard (WP:N) requires substantial coverage in multiple independent, reliable sources — self-published material, sponsored posts and directory entries don't count. WP:COI additionally requires disclosure when writing about yourself or a client, and community scrutiny of commercial articles is heavy. A local service business will almost certainly be speedy-deleted and leave a record behind. **Use Wikidata instead** — no notability threshold, and consumed by the Knowledge Graph all the same.

`[E4]` ❌ **Schema is a direct ranking factor.**
Structured data helps engines understand a page and can produce enhanced results, but it is not itself a ranking signal. Treat it as an investment in comprehension and display. Do not promise ranking gains.

## Output

Per `specs/output-schema.md`. Core deliverables:

1. **Complete, paste-ready JSON-LD** — not a fragment, not instructions
2. Issues found in existing markup, each with an evidence tag
3. Validation steps
4. Placeholder list, if any

**Bad**

> We recommend adding LocalBusiness structured data to your site to help search engines understand your business. Be sure to include name, address, telephone and other required fields.

That's instructions, not a deliverable. The user still has to write it.

**Good**

> You're a service-area business — vans, no walk-in premises — so you **must not** carry an `address`. Your current markup does, using your office address, which is a fabricated location signal.
>
> Here's the corrected block; replace the one in `<head>`:
> ```json
> { "@context": "https://schema.org", "@type": "Plumber", ... }
> ```
> One gap: `[NEEDS INPUT: coordinates]`. I won't estimate these — pull the real ones for your office location off a map and keep 5 decimal places.

## Knowledge base

`references/` here is a snapshot taken at packaging time. Query the **knowledge base** to verify current status (see `docs/tool-routing.md`) when:

- A cited fact's review date is more than 3 months old
- The user asks "what's current" or "does this still hold"
- A schema type's status may have changed

If the knowledge base is unreachable, continue from the snapshot and note its date in Limitations. **Never block.**

## Handoff

| Finding | Next | Skill |
|---|---|---|
| GBP category and schema subtype disagree | Align GBP categories | `gbp-optimize` |
| City page needs local markup | Build the page first | `local-landing-pages` |
| Name or phone inconsistent across platforms | Citation audit | `nap-citations` |
| Want AI search engines to recognise the business | AI visibility | `ai-visibility` |
