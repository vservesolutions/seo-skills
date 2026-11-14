---
name: "local-content"
description: "Keyword and content planning for local businesses — find what competitors rank for and you don't, and map the whole keyword set to buyer intent so effort goes where the calls are. Use when the user mentions \"keyword research\", \"keyword gap\", \"content gap\", \"what should I write about\", \"content plan\", \"which keywords should I target\", or \"what blog posts should I do\". Sorts keywords into four buyer-journey stages and assigns each to the right page type. 中文触发：关键词研究、关键词缺口、内容缺口、写什么内容、内容规划、 该做哪些词、搜索意图分层、选词。 Tier 2 for volume data; the intent framework itself runs at Tier 0."
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "tech383/local-seo-kit"
repo_url: "https://github.com/tech383/local-seo-kit"
source: "https://github.com/tech383/local-seo-kit/blob/HEAD/skills/local-content/SKILL.md"
raw_source: "https://raw.githubusercontent.com/tech383/local-seo-kit/HEAD/skills/local-content/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · tech383/local-seo-kit · skills/local-content/SKILL.md · MIT
     Source: https://github.com/tech383/local-seo-kit/blob/HEAD/skills/local-content/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Local content planning

Tier 2 for search volume and difficulty. **The intent framework — the most valuable part — needs no paid source at all.** See Degradation.

## When to use

**Use**
- Deciding which keywords to pursue and in what order
- Finding topics competitors rank for and this business doesn't
- Sorting an existing keyword list by buyer intent
- Planning content briefs

**Don't use**
- Writing a specific city page → `local-landing-pages`
- Which pages to fix on the existing site → `local-audit`
- GBP services or description copy → `gbp-optimize`

## Required input

**Needed**
- Business type, primary services, service areas
- 2-3 competitor domains
- The existing site structure

**Tier 2 additions**: access to a keyword data source, or an export of competitor keyword data

**If missing**: no keyword source → run the Tier 0 method below. Do not invent search volumes. A fabricated "1,200/mo" is worse than "unknown" because it gets used for prioritization.

## Steps

### 1. Intent staging ⭐ — do this first, and it costs nothing

**Most local businesses spend their whole budget on Stage 2 and wonder why the phone doesn't ring.**

| Stage | The searcher | Example shape | Where it belongs |
|---|---|---|---|
| **S1 — problem unaware** | Has a problem, doesn't know its name | "water coming through ceiling", "AC making a rattling noise" | Problem-identification content. Builds early trust |
| **S2 — problem aware** | Knows the problem, researching fixes | "how to fix a leaking roof", "why is my AC not cooling" | Educational content funnelling to service pages |
| **S3 — solution aware** | Comparing approaches and providers | "repair or replace a water heater", "how to choose an HVAC company" | Comparison pages and FAQs |
| **S4 — ready to hire** | Wants someone now | "emergency plumber {city}", "{service} near me" | **Service pages and the GBP. This is where the money is** |

`[E3]` Stage 4 terms convert at substantially higher rates than Stage 2 terms despite lower volume (practitioner consensus across local service verticals; not verified by controlled experiment — treat the direction as reliable and any specific multiple as unsupported).

**Do not quote a conversion multiple.** The direction is well established; the numbers circulating in the industry are not.

**The output that matters**: which 5 Stage 4 terms to win in the next 90 days, and what each one needs.

### 2. Gap analysis

Two filters over the same competitor comparison.

**Commercial filter** — terms competitors rank 1-20 for and this business doesn't rank for at all, then narrow to:
- Monthly volume roughly 100-2,000 (the local intent band — above this is usually national or informational)
- Contains a city name, service term, "near me", "emergency", "best", or "local"
- Difficulty low enough to be realistic for this site's authority

**Content filter** — same gap set, narrowed differently:
- Monthly volume roughly 50-500
- Contains a question word — how, why, what, when, can, does
- Relates to a problem this business actually solves

### 3. Assign, don't accumulate

Every keyword gets a destination, or it gets dropped.

| Stage | Destination | Action |
|---|---|---|
| S4 | Service page, or service × city page | Optimize existing, or `local-landing-pages` |
| S3 | Comparison page or FAQ | Usually one page can hold several |
| S2 | Educational article, internally linked to the service page | The link is not optional — traffic without a path to the service page is decoration |
| S1 | Problem-identification content | Slowest return, best trust |

**A keyword with no assigned page is not a plan.** It's a list.

### 4. Prioritize

Order by: existing partial rank → S4 before S2 → realistic difficulty → volume. In that order.

**A term already sitting on page two beats a new term at every volume level** — the demand is proven and the page half-ranks already. Hand those to `local-audit` rather than writing something new.

### 5. Briefs

For each committed keyword: target term · secondary terms · the questions the page must answer · destination URL · word count range · internal links in and out · the CTA.

## Degradation — the Tier 0 method

No keyword data source? The intent framework still works, and it is the part that changes decisions.

| Instead of | Use |
|---|---|
| Volume data | Search Console query data (free) — real demand for terms already earning impressions |
| Competitor keyword export | Read their site: page titles, H1s, navigation, service lists |
| Difficulty scores | Look at who ranks. Three national directories on page one means hard. Three local competitors means realistic |
| Volume-based prioritization | Intent staging plus the user's own knowledge of which jobs are profitable |

**The user knows things a keyword tool doesn't** — which jobs pay, which are seasonal, which they'd rather not do. Ask.

Output `PARTIAL` and note in Limitations that volume and difficulty are unavailable and prioritization is qualitative.

> This is not a consolation path. Intent staging with no volume data routinely beats volume-sorted lists with no intent staging.

## Hard gates

1. **Never invent search volumes or difficulty scores.** Unknown is a usable input; a fabricated number silently corrupts every downstream priority
2. **Never present a keyword list without page assignments** — an unassigned list is not a plan
3. **Never propose one page per keyword variant.** "Plumber Springfield" and "Springfield plumber" are the same page
4. **Never plan city pages here** — hand to `local-landing-pages`, which runs the material gates. Bypassing them produces doorway pages
5. **Never quote a Stage 4 conversion multiple as fact.** The direction is `[E3]`; the numbers aren't
6. **Never recommend content volume as a strategy** — see Myths

## Myths

`[E4]` ❌ **Publishing more content improves rankings.**
Volume without differentiation falls under scaled content abuse. What moves is coverage of questions your customers actually ask, answered better than the current results.

`[E4]` ❌ **High-volume keywords are the valuable ones.**
For local service businesses the reverse usually holds. "Plumber" has enormous volume and almost no purchase intent behind it at any specific business. "Emergency drain cleaning {suburb}" has a fraction of the volume and a person holding a phone.

## Output

Per `specs/output-schema.md`. Deliver: keywords staged S1-S4 with totals per stage · the gap table · page assignments · the 5 Stage 4 targets for 90 days · briefs for the committed set.

**Bad**

> Found 247 keyword opportunities. Top terms by volume: plumber (18,100), plumbing services (8,100), plumber near me (6,600). Recommend creating content targeting these high-volume terms.

Sorted by the least useful column, no intent, no assignments, and the top term is nearly worthless for a single local business.

**Good**

> **The pattern first: 80% of what you currently rank for is Stage 2.** Educational traffic. It explains the gap between your traffic numbers and your call volume — those visitors are researching, not hiring.
>
> Stage 4 is where you're thin, and it's a short list — 14 terms total, low volume, high intent. Five worth taking in 90 days, all of them "{service} + {suburb}" combinations where two of your three competitors already rank and you have nothing.
>
> Three of those five don't need new pages — your existing service page already ranks 12-16 for them. That's `local-audit` work, not content work, and it's faster.
>
> The other two need pages, handed to `local-landing-pages`. Fair warning: one of them will probably fail the material gate — you've done almost no work in that suburb, and a page with nothing real in it will hurt more than help.

## Knowledge base

`references/` here is a snapshot. Query the **knowledge base** (see `docs/tool-routing.md`) when a cited fact is past its review date, when the user asks what's current, or when search behaviour in their vertical may have shifted.

If the knowledge base is unreachable, continue from the snapshot and note its date in Limitations. **Never block.**

## Handoff

| Finding | Next | Skill |
|---|---|---|
| Term already ranks page two | Optimize the existing page | `local-audit` |
| Needs a service × city page | Build it, through the gates | `local-landing-pages` |
| Page copy needs customer language | Language extraction | `review-response` |
| Service missing from the profile | Services section | `gbp-optimize` |
| Terms are how customers ask AI assistants | AI visibility | `ai-visibility` |
