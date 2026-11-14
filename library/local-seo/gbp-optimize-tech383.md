---
name: "gbp-optimize"
description: "Google Business Profile optimization — categories, attributes, services, description, photos. Use when the user mentions \"GBP\", \"Google Business Profile\", \"not showing on Google Maps\", \"map pack\", \"local pack\", \"which business category\", \"business description\", or asks why a business isn't visible in local results. Category audit is the fastest-moving lever in local SEO and is the right starting point for most engagements. Photo guidance deliberately excludes EXIF geotagging, which controlled tests have debunked. 中文触发：谷歌商家资料、GBP、地图包、本地包、商家类目怎么选、商家简介怎么写、谷歌地图搜不到我、 商家属性、商家照片策略。 Does not generate…"
category: "local-seo"
platforms: ["codex"]
platform_source: "detected"
repo: "tech383/local-seo-kit"
repo_url: "https://github.com/tech383/local-seo-kit"
source: "https://github.com/tech383/local-seo-kit/blob/HEAD/skills/gbp-optimize/SKILL.md"
raw_source: "https://raw.githubusercontent.com/tech383/local-seo-kit/HEAD/skills/gbp-optimize/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Codex skill · tech383/local-seo-kit · skills/gbp-optimize/SKILL.md · MIT
     Source: https://github.com/tech383/local-seo-kit/blob/HEAD/skills/gbp-optimize/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Google Business Profile optimization

Tier 0 — works from publicly visible information. Tier 2 sources add fuller competitor field data.

## When to use

**Use**
- Auditing or optimizing categories, attributes, services, description, photos
- Diagnosing "why am I not in the map pack"
- Comparing GBP fields against competitors

**Don't use**
- Reviews and replies → `review-response`
- Website structured data → `local-schema`
- City landing pages → `local-landing-pages`
- Citation consistency → `nap-citations`

## Required input

**Needed**
- The business's own GBP link
- 2-3 competitors who appear in the local pack for the target keywords
- 3-5 target keywords
- Industry (determines compliance constraints)
- Whether there is a publicly staffed physical address

**If missing**: no competitors identified → have the user search the target keywords and note the top three in the local pack first. Do not skip this. **A category audit without a comparison set is meaningless.**

## Steps

### 1. Category audit ⭐ start here

**Wrong categories make everything downstream irrelevant.** This is also the fastest-moving item in local SEO.

`[E3]` Primary category choice is among the highest-impact controllable factors in local pack ranking, and choosing it wrong is among the largest negative factors (consistent across annual local ranking factor surveys; not verified by controlled experiment).

**Method**
1. For each target keyword, record the top three in the local pack
2. Extract each one's primary category and all secondary categories
3. Cross-tabulate; mark categories competitors have that this business lacks

**Priority**

| Coverage | Verdict |
|---|---|
| All 3 have it | Add it |
| 2 of 3 | Strongly recommended |
| 1 of 3 | Differentiation opportunity — evaluate first |

**The real value is pattern recognition**: e.g. every business ranking for "emergency plumber" also carries "water damage restoration" as a secondary. That correlation is invisible without the cross-tab.

**Constraints**
- One primary category. Pick the one representing core revenue, not the broadest one
- Do not stack secondaries. Only add categories for services actually offered — **false categories are misrepresentation and a suspension risk**

### 2. Attribute audit

Attributes are the profile tags: free estimates, open 24 hours, wheelchair accessible, online appointments.

**Method**: compare all visible attributes against competitors; group into all-have / most-have / one-has.

`[E3]` Attributes affect both match surface and click intent (practitioner consensus; not verified by controlled experiment).

**Constraint**: only tick attributes that are actually true. "Open 24 hours" with nobody answering at 2am buys negative reviews.

### 3. Services section

**One of the few places on a GBP where the copy is entirely yours** — reviews are written by customers, Q&A by anyone.

**Method**
1. Extract the full service list and descriptions, yours and competitors'
2. **Cross-check the website**: services on the site but missing from GBP are invisible in the map pack
3. Write 2-3 sentence, 40-60 word descriptions: primary service term + one real service area + one concrete outcome

**Common failure**: a new service gets added to the site and never to the GBP. If the business does trenchless pipe repair but the GBP doesn't list it, that search happens without them.

### 4. Description

750 characters. Most businesses leave it empty, paste from the website, or stuff keywords.

**Method**: identify what all competitors mention (table stakes), what none mention (open ground), what only this business mentions (differentiation).

**Requirements**
- The first ~250 characters matter most (visible before truncation)
- Use customer language, not trade jargon — source it from `review-response`'s language extraction
- Include real service areas
- No keyword stacking

> ⚠️ **Do not promise A/B testing.** GBP has no native A/B capability. "Run version 1 for 30 days and compare impressions" is confounded by seasonality and competitor activity — the attribution doesn't hold. Prepare multiple versions for a human to choose from; don't frame it as a measurable experiment.

### 5. Photos

**Consistency beats volume.** 50 photos in one day then six months of silence is worse than 3-5 every week.

**Method**
1. Compare against competitors: total count, additions in last 30/90 days, type mix, stock-photo suspicion, weekly average
2. Build an 8-week upload plan: weekly count, shot list, type mix

**Suggested mix**

| Type | Share |
|---|---|
| Job site / service in progress | 40% |
| Before-and-after | 25% |
| Team and vehicles | 20% |
| Premises | 15% |

**Constraints**
- Real photography, no stock
- Shot at real service locations
- Filenames may include service and place terms (this matters for website images)

> 🚫 **This skill does not include EXIF geotagging.** See Myths.

## Hard gates

Refuse to produce:

1. **False categories** — services not offered. Misrepresentation, suspension risk
2. **Attributes that aren't true**
3. **A public address for a business without a staffed location** — service-area businesses hide the address and declare a service area
4. **Stock imagery presented as real work**
5. **Service areas in the description the business doesn't actually serve**
6. **Healthcare / legal content touching client or patient information** → see `review-response`'s industry compliance reference

## Myths

`[E4]` ❌ **EXIF geotagging photos improves local rankings.**

Two public tests point the other way:

- Sterling Sky added three geotagged images each to five profiles not undergoing other SEO work: **no measurable local pack movement, no traffic change**. They also observed directly that **GBP stripped the geotags on upload** (2024-01).
- A 10-week study reported by Search Engine Land (27 businesses, 5-week control, two geotagged images weekly, tracked by geo-grid): 1 of 7 metrics improved ("near me" inside the targeted area); **the other six were flat or negative**, with "service + city" queries **declining** (2024).

`[E1]` Google Search Advocate John Mueller has said publicly that geotagging images is not needed for SEO (via Search Engine Land, 2024).

**Net**: real labour cost, zero or negative return. Listed under "Parked" in `AGENTS.md`; revisit only with new controlled evidence.

`[E4]` ❌ **More secondary categories is always better.** False categories are a suspension risk. Secondaries must map to services actually delivered.

## Output

Per `specs/output-schema.md`.

**Bad**

> Consider optimizing your GBP categories and attributes, completing your service descriptions, and uploading photos regularly to improve local rankings.

No specific category, no gap named, no order of work.

**Good**

> The big one is your **primary category**: you're set to "Contractor" while all three in the local pack for "emergency drain cleaning Toronto" use "Plumber". That one item likely outweighs everything else here. Change it this week.
>
> Two secondaries missing: "Drainage service" (all 3 have it) and "Water damage restoration" (2 of 3). You do both, so add both. The third gap, "Septic system service", you don't offer — skip it.
>
> Services section has a hole: your site lists "trenchless pipe repair" and your GBP doesn't. That search currently happens without you.
>
> Photos: 2 added in 90 days against a competitor average of 3 per week. 8-week shot list below.

## Knowledge base

`references/` here is a snapshot taken at packaging time. Query the **knowledge base** to verify current status (see `docs/tool-routing.md`) when:

- A cited fact's review date is more than 3 months old
- The user asks "what's current" or "does this still hold"
- The situation isn't covered locally

If the knowledge base is unreachable, continue from the snapshot and note its date in Limitations. **Never block.**

## Handoff

| Finding | Next | Skill |
|---|---|---|
| Categories set, website markup needs to match | Generate JSON-LD | `local-schema` |
| Review velocity behind competitors | Review system | `review-response` |
| Description needs customer language | Language extraction | `review-response` |
| A service has no page for a target city | Build city page | `local-landing-pages` |
| Name/phone inconsistent across platforms | Citation audit | `nap-citations` |
| Competitors surfacing in AI search | AI visibility | `ai-visibility` |
