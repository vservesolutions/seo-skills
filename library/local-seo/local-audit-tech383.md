---
name: "local-audit"
description: "Measure what the site actually earns, using Google Search Console. Use when the user mentions \"Search Console\", \"GSC\", \"is my SEO working\", \"which pages should I fix\", \"why did my traffic drop\", \"page 2 rankings\", \"keyword cannibalization\", or wants a monthly performance report. Mines the page-2 goldmine, finds title and meta problems behind low click-through, detects cannibalization, and produces a 30-day sprint with finished copy rather than instructions. 中文触发：Search Console、GSC、SEO 有没有效果、该修哪个页面、流量为什么掉了、 第二页排名、关键词打架、月度报告。 Tier 1 — Search Console is free. Degrades to structural review…"
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "tech383/local-seo-kit"
repo_url: "https://github.com/tech383/local-seo-kit"
source: "https://github.com/tech383/local-seo-kit/blob/HEAD/skills/local-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/tech383/local-seo-kit/HEAD/skills/local-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · tech383/local-seo-kit · skills/local-audit/SKILL.md · MIT
     Source: https://github.com/tech383/local-seo-kit/blob/HEAD/skills/local-audit/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Local performance audit

Tier 1 — needs Google Search Console, which is free and is the user's own property. Without it, a reduced structural review is still possible; see Degradation.

## When to use

**Use**
- Establishing a baseline before making changes
- Finding which pages to fix, in what order
- Diagnosing a traffic drop
- Monthly or quarterly reporting
- Detecting cannibalization

**Don't use**
- Profile fields → `gbp-optimize`
- Building new pages → `local-landing-pages`
- Listing consistency → `nap-citations`

## Required input

**Needed**
- Search Console access for the property, or an export of the last 90 days (queries, pages, clicks, impressions, CTR, average position)
- The site's target keywords

**Helpful**
- Analytics for conversion behaviour
- Dates of any significant site changes, to line up against movements

**If missing**: no Search Console → see Degradation. Do not substitute estimates for measured data.

## Steps

### 1. Pull the baseline

Last 90 days: all queries, all pages, clicks, impressions, CTR, average position. Compare the most recent 30 days against the previous 30.

### 2. The page-2 goldmine

**The highest-value analysis available here.** Find every query ranking between position 11 and 20 with at least ~100 monthly impressions.

Moving a query from 15 to 5 is worth more than publishing ten new pages, because the demand is already proven and the page already half-ranks.

For each one, open the page that ranks and check:

- Is the query in the title tag?
- Is it in the H1?
- Is it in the first 100 words?
- How long is the page?
- Does anything internally link to it?
- What does the meta description currently say?

Most page-2 rankings fail on one or two of those. That's the whole fix.

### 3. Four more patterns

| Pattern | Signature | Fix |
|---|---|---|
| **Near-miss** | Position 4-15 on a high-value query | One optimization pass to reach the top three |
| **High impressions, low clicks** | Well-ranked, poor CTR | Title and meta description problem, not a ranking problem |
| **Zero-impression pages** | Indexed, no impressions | Either dead weight or an untapped page with no targeting |
| **Cannibalization** | The wrong page ranks for a query | Consolidate, differentiate, or redirect |

**Cannibalization is the one most often missed.** Two pages competing for the same query usually means neither reaches the top three. Decide which page should own it, and make the other one clearly about something else.

### 4. Diagnosing a drop

Order matters, cheapest explanation first:

1. **Seasonality** — compare against the same period last year before anything else. Most "drops" are calendars
2. **A specific page or query** — did everything fall, or one thing? A single page falling is a page problem
3. **Impressions vs clicks** — impressions down means ranking or demand; clicks down with impressions flat means the result itself got less attractive
4. **Timing against site changes** — line the drop up against deploys
5. **Only then, algorithm updates** — check whether the dates coincide with a known update

Reaching for "it must be an algorithm update" first is the most common diagnostic error, and it stops people looking for the cause they could actually fix.

### 5. The 30-day sprint

| Week | Work |
|---|---|
| 1 | Title and H1 for the top 10 page-2 queries |
| 2 | Content additions for thin pages (under ~500 words) |
| 3 | Internal linking — name exactly which page links to which |
| 4 | Meta description rewrites for the high-impression, low-CTR set |

**Write the actual copy.** Deliver the title tag, the H1, the meta description as finished text. "Optimize your title tag" is not a deliverable — the user has to do the work again.

## Degradation

No Search Console → say so, and run what's still possible:

- Structural review: title, H1, word count, internal links, meta descriptions
- Site structure and internal linking map
- Obvious cannibalization from titles and topics

**Cannot be determined without it**: which queries actually rank, real impressions and clicks, CTR, position changes, what a drop consists of.

Output `PARTIAL` with the limitations table from `specs/limitations-disclaimer.md`. **Do not estimate traffic figures.** Search Console is free — recommending the user connect it is a better answer than a plausible number.

## Evidence

`[E1]` Search Console reports Google's own measured impressions, clicks, CTR and average position for a verified property (Google Search Central documentation; re-checked 2026-08).

`[E3]` Improving pages already ranking on page two is generally higher-return than publishing new pages for the same terms, because demand and partial relevance are already established (practitioner consensus; not verified by controlled experiment).

## Hard gates

1. **Never estimate traffic, impressions or rankings when Search Console isn't connected.** Report the gap
2. **Never attribute a change to an algorithm update without checking seasonality and site changes first** — and label it as a hypothesis when you do
3. **Never report an average position as a precise ranking.** It is an average across queries, devices and locations, not a position anyone actually sees
4. **Never measure city page performance with map pack rank.** Use the query-level organic data for that page
5. **Never deliver instructions in place of copy** — titles, H1s and metas ship as finished text

## Myths

`[E4]` ❌ **Average position is your ranking.**
It averages across devices, locations and query variants. A local business can show 8.2 while genuinely appearing at 3 for nearby searchers and 20 for distant ones. Diagnose at query level.

`[E4]` ❌ **A traffic drop means a penalty.**
The overwhelming majority are seasonality, a single page changing, or a SERP layout shift. Penalties are rare and usually accompanied by a manual action notice in Search Console — check there before speculating.

## Output

Per `specs/output-schema.md`.

**Bad**

> Your site has 47 keywords in positions 11-20. We recommend optimizing these pages to improve rankings. Focus on title tags, content quality and internal linking.

A count and three generic levers. Nothing is prioritized and nothing is written.

**Good**

> **Eleven queries on page two with real impression volume.** Four of them fail on the same thing: the query isn't in the title tag. That's a same-day fix.
>
> The biggest single item isn't on that list though — you have two pages competing for "emergency drain cleaning". Neither reaches the top three, and they've been trading positions for months. Pick one; I'd keep the service page and retarget the blog post at the diagnostic query.
>
> Separately, your homepage gets high impressions and poor clicks — that's the meta description, not the ranking. Rewritten below.
>
> Full titles, H1s and metas written out, 30-day sprint ordered by return. Next action: the cannibalization fix, because it's blocking the highest-value query you have.

## Knowledge base

`references/` here is a snapshot taken at packaging time. Query the **knowledge base** (see `docs/tool-routing.md`) when a cited fact is past its review date, when the user asks about a recent algorithm update, or when Search Console's reporting appears to have changed.

If the knowledge base is unreachable, continue from the snapshot and note its date in Limitations. **Never block.**

## Handoff

| Finding | Next | Skill |
|---|---|---|
| A city query has no dedicated page | Build it | `local-landing-pages` |
| Page copy needs customer language | Language extraction | `review-response` |
| Site performs but the pack doesn't | Profile work | `gbp-optimize` |
| Pages lack structured data | Generate JSON-LD | `local-schema` |
| A drop lines up with a known update | Check what changed | `playheads-kb-tool` |
| Findings need packaging for the owner or a client | Monthly report | `local-reporting` |
