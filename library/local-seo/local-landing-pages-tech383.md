---
name: "local-landing-pages"
description: "Build service-by-city landing pages with doorway-page defences. Use when the user mentions \"city pages\", \"location pages\", \"service area pages\", \"ranking in nearby towns\", \"how do I show up in the next city over\", or \"bulk generate landing pages\". Runs three admission gates, a uniqueness scorecard and a swap test, and refuses to ship pages with no differentiating material. Clarifies the boundary between organic results and the map pack, which is the most common source of \"city pages don't work\". 中文触发：城市页、地区页、服务区页面、周边城市排名、批量生成落地页、门页、 怎么在别的城市排上去。 Does not touch GBP settings (use gbp-optimize)…"
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "tech383/local-seo-kit"
repo_url: "https://github.com/tech383/local-seo-kit"
source: "https://github.com/tech383/local-seo-kit/blob/HEAD/skills/local-landing-pages/SKILL.md"
raw_source: "https://raw.githubusercontent.com/tech383/local-seo-kit/HEAD/skills/local-landing-pages/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · tech383/local-seo-kit · skills/local-landing-pages/SKILL.md · MIT
     Source: https://github.com/tech383/local-seo-kit/blob/HEAD/skills/local-landing-pages/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Service × city landing pages

Tier 0 — no external data source, but **hard-dependent on the user's first-party material**.

## When to use

**Use**
- Building landing pages for cities in a service area
- Diagnosing why existing city pages aren't working
- Deciding whether a given city warrants its own page

**Don't use**
- Trying to enter another city's **map pack** → see the boundary note; city pages can't do that
- GBP settings → `gbp-optimize`
- Schema code → `local-schema`

---

## Before anything: what city pages can and cannot do

**City pages win organic results, not the map pack.**

| | Map pack / Maps | Organic results |
|---|---|---|
| Driven by | GBP quality + **physical distance to the searcher** | Page relevance + site authority |
| Can a city page move it | ❌ Barely | ✅ This is the arena |

`[E3]` Physical proximity is the single largest factor in local pack ranking (consistent across annual local ranking factor surveys; not verified by controlled experiment).

**So**: a page for a city 30 km away will not enter that city's map pack without a real address there. It can absolutely win the organic result for "service + city" — which sits right below the pack and converts well for local service intent.

> "City pages don't work" almost always means someone measured a page-level tactic with a map-pack yardstick. **Align on this with the user before starting.**

## Required input

**Needed**
- Primary and secondary services
- Candidate city list
- Current site structure (which city pages already exist)
- **First-party material per city** (see Gate 2)

**If missing**: thin material is the normal case, not an exception. Route it through Gate 2. **Do not backfill with generated content.**

## Steps

### Gate 1 — rank by revenue, not by coverage

Order cities by **actual revenue over the last 12 months**. With no history, estimate from population × target-customer density ÷ competition, and label it an estimate.

> The test is "have we made money here, or can we", not "is it close on the map".

### Gate 2 — uniqueness material inventory (decisive)

**Before writing a single word, check whether there is anything real for this city.**

| Material | Have it |
|---|---|
| A real completed job here (with photos) | ☐ |
| A real customer testimonial or case from here | ☐ |
| Real pricing from actual jobs here | ☐ |
| Something specific to this city (water quality, housing stock age, climate, building types, local regulation) | ☐ |
| Named staff / response time / neighbourhoods covered | ☐ |
| A genuine local connection (sponsorship, chamber, partner business) | ☐ |

**Verdict**
- **≥3 ticked** → build a standalone page
- **<3** → **no standalone page**, route to the regional hub option below

What separates a city page from a doorway page **is first-party data** — jobs actually done, real prices, real people. Competitors can't copy it and a model can't invent it.

### Gate 3 — volume ceiling

| Pages | Handling |
|---|---|
| 1-20 | Proceed |
| 21-30 | Each page passes Gate 2 individually; no batch approval |
| **31-50** | ⚠️ Warn: require a written differentiation strategy from the user |
| **>50** | 🛑 Hard stop, refuse |

`[E3]` Common practice is to start with 15-20 priority cities; page sets in the hundreds are routinely treated as doorway pages (practitioner consensus and public cases; not verified by controlled experiment).

### 4. Build the page

Structure in `references/page-structure.md`.

The four 🔑 blocks are load-bearing and **must come from real material**: local proof, local pricing, customer testimonial, local FAQ.
Service detail, credentials, process and warranty may be reused across pages.

### 5. Uniqueness score (out of 100 — **below 60, refuse to ship**)

| Item | Points |
|---|---|
| ≥1 real job described for this city (place, date, work done) | 20 |
| ≥1 real photo taken in this city (not stock) | 15 |
| ≥1 verifiable customer testimonial from this city | 15 |
| A technical or environmental factor specific to this city | 15 |
| Real pricing from actual jobs | 10 |
| FAQ specific to this city (not generic) | 10 |
| >60% unique text vs the site's other city pages | 15 |

### 6. Swap test (mandatory before publishing)

> Replace every instance of the city name with a different city. **If it still reads fine — it's a doorway page. Send it back.**

Failing means the page contains no local information beyond the name. Simplest and most effective check available.

### 7. Publish and interlink

- **Stagger publication**, default 2-3 pages per week. Twenty structurally identical pages appearing overnight is the textbook bulk-generation signal
- **Must be in the main navigation** — a "Service areas" menu with city pages beneath it. Orphaned pages are far more likely to be read as doorways
- ≥3 internal links in per page: main service page → city page, related content → city page, neighbouring city pages to each other

### 8. Measure

- **Timeline**: 4-8 weeks before rankings move, not days
- **Where**: Search Console — impressions and average position for the "service + city" query on that specific page. **Do not measure this with map pack rank**
- **Warning sign**: indexed but persistently zero impressions → usually insufficient uniqueness, treated as near-duplicate. Return to Gate 2. **Do not respond by adding more pages**

## Hard gates

1. **Gate 2 under 3 ticks** → no standalone page; route to hub
2. **Uniqueness score below 60** → refuse
3. **Swap test failed** → refuse
4. **Total pages over 50** → hard stop
5. **Never invent local facts** — landmarks, neighbourhoods, cases, pricing and testimonials must come from user-supplied material. Missing → emit `[NEEDS INPUT: <specific item>]` and list it in Limitations. **Never fill it with model-generated content**
6. **Never generate `address` / `geo` structured data for a city with no staffed location** — use `areaServed`. Fabricated addresses are a common suspension trigger

> **Gate 5 is what makes this usable at all.** Invented "local detail" reads perfectly, but the landmark may not exist and the neighbourhood name may be wrong. A local reader spots it instantly, and a search engine does not credit local presence just because a place name appears in the text.

## Three alternatives when material is thin

Don't force it.

1. **Regional hub page** — one page covering several nearby towns, a short section each. Fewer pages, every paragraph real
2. **Gather material first** — do 3-5 jobs in the city, photograph them, collect reviews, then build. Slower, but the page has weight the day it ships
3. **Establish real presence** — if the city genuinely warrants the map pack, the only route is a real address and its own GBP. A city page is not a substitute

## Myths

`[E4]` ❌ **More city pages means wider coverage means better rankings.**
Public cases show large sets of low-differentiation city pages taking heavy losses after core updates. Volume isn't an asset; uniqueness is.

`[E4]` ❌ **A city page gets you into that city's map pack.**
The pack is driven by GBP and proximity; page-level influence is weak. Conflating the two is the most common reason people conclude city pages don't work.

## Output

Per `specs/output-schema.md`. Per page, attach: uniqueness score breakdown, swap test result, placeholder list.

**Bad**

> Generated 12 city landing pages, each with a title, body copy, FAQ and CTA, optimized for local keywords.

Says nothing about where the material came from or whether anything passed a gate. This is almost certainly 12 doorway pages.

**Good**

> Of 12 candidate cities, **4 cleared the material gate** and have full pages (scores 72-88).
>
> The other 8 came in under 3 ticks — mostly missing real cases and local pricing. I didn't build standalone pages for them; they're folded into 2 regional hub pages instead.
>
> The 4 built pages contain 3 instances of `[NEEDS INPUT: customer testimonial]`. You'll need to supply real ones — I can't write those.
>
> Markham failed the swap test (swapping in "Richmond Hill" left it entirely coherent) and has been sent back for a rewrite.

## Knowledge base

`references/` here is a snapshot taken at packaging time. Query the **knowledge base** to verify current status (see `docs/tool-routing.md`) when:

- A cited fact's review date is more than 3 months old
- The user asks "what's current" or "does this still hold"
- The industry or situation isn't covered locally

If the knowledge base is unreachable, continue from the snapshot and note its date in Limitations. **Never block.**

## Handoff

| Finding | Next | Skill |
|---|---|---|
| Page needs local structured data | Generate JSON-LD | `local-schema` |
| Missing testimonial material | Review request scripting | `review-response` |
| City warrants the map pack | Real presence and local signals | `gbp-optimize` |
| Business info inconsistent across platforms | Citation audit | `nap-citations` |
