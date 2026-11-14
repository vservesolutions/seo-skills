---
name: "local-reporting"
description: "Monthly local SEO report built around calls and revenue rather than vanity metrics. Use when the user mentions \"monthly report\", \"SEO report\", \"how's it going\", \"is this working\", \"report for my client\", \"show me the numbers\", or wants something to share with a team. Pulls Search Console, Google Business Profile insights and Analytics into a one-page read, states plainly what moved and what didn't, and names one action for next month. 中文触发：月度报告、SEO 报告、效果怎么样、有没有用、给客户的报告、数据怎么样、 这个月的情况、看看数字。 Refuses to report progress that didn't happen."
category: "local-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "tech383/local-seo-kit"
repo_url: "https://github.com/tech383/local-seo-kit"
source: "https://github.com/tech383/local-seo-kit/blob/HEAD/skills/local-reporting/SKILL.md"
raw_source: "https://raw.githubusercontent.com/tech383/local-seo-kit/HEAD/skills/local-reporting/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · tech383/local-seo-kit · skills/local-reporting/SKILL.md · MIT
     Source: https://github.com/tech383/local-seo-kit/blob/HEAD/skills/local-reporting/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Monthly reporting

Tier 1 — Search Console, GBP insights and Analytics are all free and all the user's own property.

## When to use

**Use**
- Monthly or quarterly performance reporting
- A report to hand to a client or a team
- Answering "is any of this working"

**Don't use**
- Diagnosing a specific problem → `local-audit`
- A one-off "why did traffic drop" → `local-audit`, which has the diagnostic order

## Required input

**Needed**: Search Console for the property. Reporting period and the comparison period.

**Should have**: GBP insights (calls, direction requests, website clicks), Analytics if conversions are tracked, notes on what work was actually done during the period

**If missing**: no record of what was done → the report can state what changed but not attribute it. Say so rather than implying a causal link.

## Steps

### 1. Decide what counts before pulling anything

**The metric that matters is calls and jobs, not sessions.** A month where traffic fell and calls rose is a good month, and a report that leads with traffic will call it a bad one.

Priority order:

| Tier | Metric | Source |
|---|---|---|
| **1** | Calls, direction requests, form submissions | GBP insights, Analytics |
| **2** | Clicks from organic search, and to which pages | Search Console |
| **3** | Impressions, average position, CTR | Search Console |
| **Not reported** | Domain authority, keyword counts, "SEO score" | — |

Vendor authority scores are not Google metrics and do not belong in a report to a business owner. They invite decisions based on a number nobody outside the vendor uses.

### 2. Pull the comparison

Current period vs the previous one, **and vs the same period last year where at least 12 months exist.**

Year-over-year matters more than month-over-month for most local businesses. A roofer's August is not comparable to their February, and month-over-month reporting turns ordinary seasonality into a crisis or a triumph every few months.

### 3. What moved, and did we cause it

Three questions per movement, in order:

1. **Is it seasonal?** Check last year first
2. **Is it concentrated?** One page or query moving is different from everything moving
3. **Does it line up with work we did?** Timing against the actual change log

**Attribution requires a change log.** Without one, report the movement and say attribution isn't possible. Claiming credit for an unexplained rise costs more than it gains — the same reasoning applies when it falls.

### 4. The one-page report

```markdown
# {Business} — {Month}

## The short version
{3-4 sentences. Calls first. What moved, whether we caused it, what's next.}

## Calls and enquiries
{GBP calls, direction requests, website clicks · vs last month · vs last year}

## Search performance
{Clicks, impressions, average position · biggest gainers · biggest losers}

## What we did this month
{The change log. If nothing shipped, say nothing shipped.}

## Three wins
## Three problems
## Next month: {exactly one thing}
```

Five minutes to read, shareable without explanation.

### 5. Reporting a bad month

Lead with it. A report that buries a decline under four paragraphs of impression growth destroys trust the moment the owner notices their phone was quieter.

> Calls were down 18% against last month. About half of that is seasonal — last year's same stretch dropped 11%. The other half is the service page falling from 4 to 9 after the site update on the 12th. That's fixable and it's next month's first job.

Specific, honest, has a cause and a plan. **This is more valuable to the relationship than a good month reported vaguely.**

## Evidence

`[E1]` Search Console reports Google's measured clicks, impressions, CTR and average position for a verified property (Google Search Central; re-checked 2026-08).

`[E1]` GBP performance reporting provides calls, direction requests and website clicks originating from the profile (Google Business Profile Help Centre; re-checked 2026-08).

`[E3]` Business outcome metrics track engagement better than traffic volume for local service businesses (practitioner consensus; not verified by controlled experiment).

## Hard gates

1. **Never report a metric that wasn't measured.** No estimated calls, no inferred conversions. Missing → say it's missing
2. **Never claim credit without a change log** — report the movement, state that attribution isn't available
3. **Never bury a decline.** It goes in the short version, not the appendix
4. **Never report average position as a ranking** — it averages across devices, locations and query variants
5. **Never include vendor authority scores** as if they were Google metrics
6. **Never report a month where nothing shipped as though something did.** "No work shipped this month" is a legitimate line and occasionally the most useful one in the report

## Myths

`[E4]` ❌ **More traffic means the SEO is working.**
Traffic without calls usually means the wrong intent stage is being won — Stage 2 educational terms rather than Stage 4 hiring terms. See `local-content`.

`[E4]` ❌ **Domain authority scores measure Google standing.**
They are third-party models, not Google outputs. Useful for rough comparison inside one vendor's tool; meaningless in a report to a business owner and actively harmful when someone starts optimizing for the score.

## Output

Per `specs/output-schema.md`, delivered as the one-page structure above.

**Bad**

> Great month! Impressions up 34%, average position improved from 12.4 to 11.8, and we added 6 new keywords in the top 100. Domain authority is now 24. Keep up the momentum!

Every number chosen because it went up. No calls, no attribution, no next step, and an authority score that means nothing to the reader.

**Good**

> **Calls were flat at 31, and that's the honest headline.** Clicks rose 22% but it landed on the wrong pages — the guide we published in June is pulling researchers, not buyers.
>
> The real movement is the drain service page: 14 → 6 after the title fix on the 8th. It's the one change this month with a clear line to a result.
>
> Down: two city pages lost impressions. Both are ones we flagged as thin at build time, and this is what that looks like.
>
> Next month: one thing — get the drain page from 6 into the top 3. It's the closest thing you have to a call-generating position.

## Knowledge base

Rarely needed. Query the **knowledge base** if Search Console or GBP reporting appears to have changed, or when a movement lines up with a possible algorithm update and the user asks what happened.

If it's unreachable, report from the data you have. Reporting never depends on it. **Never block.**

## Handoff

| Finding | Next | Skill |
|---|---|---|
| A drop needs diagnosis | Diagnostic order | `local-audit` |
| Traffic up, calls flat | Intent staging | `local-content` |
| Calls down but rankings held | Profile and reviews | `gbp-optimize`, `review-response` |
| A city page underperforms | Uniqueness gates | `local-landing-pages` |
| Nothing shipped this month | Get a programme running | `local-seo` |
