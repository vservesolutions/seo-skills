---
name: "local-seo"
description: "Entry point and router for local SEO work. Load this when a request is broad — \"help me with local SEO\", \"why am I not showing up on Google\", \"I want to rank in my city\", \"audit my local presence\", \"where do I start\", \"build me a plan\" — or when it isn't obvious which specific skill applies. Detects business shape and industry, routes to the right two or three skills rather than loading everything, and carries the 12-week sequenced programme. Use the specific skill directly when the request is already specific. 中文触发：本地 SEO、谷歌搜不到我、想在本地排名、从哪开始、给我一个计划、本地优化、 地图包上不去、整体诊断。"
category: "local-seo"
platforms: ["codex"]
platform_source: "detected"
repo: "tech383/local-seo-kit"
repo_url: "https://github.com/tech383/local-seo-kit"
source: "https://github.com/tech383/local-seo-kit/blob/HEAD/skills/local-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/tech383/local-seo-kit/HEAD/skills/local-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Codex skill · tech383/local-seo-kit · skills/local-seo/SKILL.md · MIT
     Source: https://github.com/tech383/local-seo-kit/blob/HEAD/skills/local-seo/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Local SEO — router and programme

Tier 0 at the core. Individual skills may reach higher tiers.

## When to use

**Use**
- The request is broad or the right skill isn't obvious
- The user wants a programme, not a single task
- Diagnosing "why am I invisible" with no starting hypothesis

**Don't use**
- The request already names the work — go straight there. "Write me some GBP posts" needs `gbp-posts`, not this
- Continuing from an existing state file's next action

> **This skill exists to control context, not to gatekeep.** Loading ten skills to answer one question wastes the window and dilutes the answer. Route to two or three.

## Required input

**Needed**
- Which business
- What the user actually wants

**If missing**: no state file for this business → hand to `client-state` for intake **before** any analysis. That is the single most common correct first move.

## Steps

### 1. State check — always first

No state file → `client-state`. Do not analyse anything before intake; the answers change the routing.

### 2. Determine business shape

This changes which advice applies, so settle it before routing.

| Shape | Test | Consequence |
|---|---|---|
| **Physical location** | Customers come in | Address and coordinates everywhere; proximity works in their favour locally |
| **Service-area (SAB)** | Business travels, no public premises | **Address must be hidden**; `areaServed` throughout; map pack reach is limited to the area around the operating base |
| **Hybrid** | Both | Both |

Also determine industry — healthcare, legal, financial and children's services trigger mandatory compliance handling in `review-response`.

### 3. Route

Load two or three. Not everything.

| What the user says | Load, in order |
|---|---|
| "Why am I not in the map pack?" | `gbp-optimize` → if profile is clean, `nap-citations` |
| "How do I rank in {other city}?" | `local-landing-pages` (align on organic vs pack **first**) |
| "My info is wrong on some site" | `nap-citations` |
| "How do I handle this review?" | `review-response` |
| "Get me more reviews" | `review-response` (mode C, then request scripting) |
| "My website copy is weak" | `review-response` (mode B — customer language) → `local-landing-pages` |
| "Add schema / structured data" | `local-schema` |
| "What should I post?" | `gbp-posts` |
| "Is my SEO working?" | `local-reporting` for the answer, `local-audit` if it needs diagnosis |
| "What's changed recently?" | `playheads-kb-tool` |
| "Give me a full plan" | The 12-week programme below |

**Default first move when nothing else is indicated**: `gbp-optimize`, category audit. It is the fastest-moving lever available and it costs fifteen minutes.

### 4. Global gates — enforced regardless of which skill runs

These are in `AGENTS.md` §6 and apply everywhere:

1. Never invent local facts — landmarks, cases, pricing, testimonials come from the user
2. Never generate `address` / `geo` for a location with no staffed premises
3. Never facilitate review gating
4. Never recommend a deprecated schema type
5. Industry compliance is checked before any review reply is written

### 5. Set expectations honestly, up front

Three things worth saying before work starts, because getting them wrong wastes months:

**Map pack and organic results are different games.** The pack is driven by profile quality and physical distance; pages barely move it. Organic is driven by page relevance and site authority. A page targeting a city 30 km away can win the organic result there and will still not enter that pack.
`[E3]` Proximity is the largest single factor in local pack ranking (consistent across annual local ranking factor surveys; not verified by controlled experiment).

**Timelines.** Category and attribute changes can move within days. Page work takes 4-8 weeks. Citation corrections often show inside 30 days. Nothing here is same-week except the profile fixes.

**Evidence grades.** Recommendations arrive tagged. `[E3]` means industry consensus without a controlled test — worth doing, but not a guarantee, and it will be labelled as such rather than sold as certainty.

---

## The 12-week programme

Ordering matters more than the individual tactics. Profile before website, website before authority, measurement last.

| Week | Work | Skill | Why here |
|---|---|---|---|
| 0 | Intake | `client-state` | Everything downstream depends on business shape |
| **1** | Categories + attributes | `gbp-optimize` | Fastest-moving lever. Changes can show within days |
| **2** | Competitor reviews, reply system, posting calendar | `review-response`, `gbp-posts` | Produces a velocity target and a content cadence that then runs itself |
| **3** | Services, description, photos | `gbp-optimize` | Profile now complete |
| **4** | Search Console baseline, page-2 mining | `local-audit` | Establishes what the site already earns before changing it |
| **5-6** | City pages, customer-language rewrite | `local-landing-pages`, `review-response` mode B | Site and messaging catch up to the profile |
| **7-8** | Citations and NAP | `nap-citations` | Authority starts pointing the right way. Often visible inside 30 days |
| **9-10** | Schema, entity building | `local-schema` | The compounding layer |
| **11-12** | Measure, double down, cut what didn't work | `local-reporting`, `local-audit` | Closes the loop. Reporting states what moved; the audit says why |

**Do not run these in parallel.** Two reasons: the profile work changes what the site work should target, and simultaneous changes make attribution impossible — you learn nothing about what actually moved.

**If only one week is available**: week 1. Categories alone are worth more than most of the rest combined when they're wrong.

## Hard gates

1. **Never load more than four skills for one request** — if it seems necessary, the request needs splitting
2. **Never analyse before intake** when no state file exists
3. **Never promise map pack movement from page-level work**
4. **Never present an `[E3]` claim in certainty language**
5. All global gates in `AGENTS.md` §6 apply through this router

## Myths

`[E4]` ❌ **There is a single fix that gets a business into the map pack.**
Pack placement combines profile quality, proximity and prominence. Proximity is not controllable. Anyone selling one lever is selling something else.

`[E4]` ❌ **Doing everything at once gets results faster.**
It makes attribution impossible. When something moves, you won't know which change did it, and you'll keep paying for the ones that did nothing.

## Output

Per `specs/output-schema.md`.

**Bad**

> I'll help you with your local SEO! Let's start by looking at your Google Business Profile, then we'll optimize your website, build citations, and create content.

A list of everything, in no order, with no reasoning.

**Good**

> Before anything else: you're a service-area business, so **you will not get into the map pack in the towns 40 minutes out**, whatever we do. Real address, or nothing. Worth knowing now rather than in month three.
>
> What you *can* win there is the organic result under the pack, which converts well for this kind of search.
>
> Starting with your categories — you're on "Contractor" and the three profiles ranking above you all use "Plumber". Fifteen minutes, and it can move within the week.
>
> Full 12-week sequence attached. Next action: category audit.

## Knowledge base

Route to `playheads-kb-tool` when the user asks what's current, or when a fact being relied on is past its review date. The router itself makes few factual claims — the individual skills carry them.

## Handoff

This skill hands off by design. Full routing table in step 3; the 12-week programme names the skill for each phase.
