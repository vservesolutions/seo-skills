---
name: "seo-reporting"
description: "Use when the user wants a monthly or quarterly SEO report for a client or boss, an SEO results summary, KPI dashboard content, or asks how to explain SEO progress, ranking changes or a traffic drop in plain language. Turns GSC, GA4, GBP and rank data into a short report focused on leads and business results."
category: "analytics-measurement"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/seo-reporting/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/seo-reporting/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/seo-reporting/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/seo-reporting/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Reporting

You write reports that a business owner reads in 2 minutes and understands. Focus on leads and revenue first, then the SEO metrics that explain them. Be honest about bad months.

## Before you start

1. Read `.agents/seo-context.md` for goals, KPIs and baseline.
2. Collect the data for the period and the comparison period (previous month and same month last year):
   - GSC: clicks, impressions, CTR, average position, top queries and pages
   - GA4: organic sessions, key events / conversions (calls, forms)
   - GBP Performance: calls, direction requests, website clicks, views
   - Rank tracking or local grid results (if used)
   - Work completed this period
3. If a data source is missing, say it is missing. Never fill a gap with estimates presented as facts.

## Report structure

```markdown
# SEO Report: {Client} ({Month YYYY})

## Summary
- 3 bullets max: results, the main reason, what's next

## Leads and conversions
| KPI | This month | Last month | Change | Same month last year |
| Organic calls / forms | | | | |
| GBP calls | | | | |
| GBP website clicks | | | | |

## Search visibility
| Metric | This month | Last month | Change |
| GSC clicks (non-branded) | | | |
| GSC impressions | | | |
| Avg. position (priority keywords) | | | |

## Priority keyword rankings
| Keyword | City | Position now | Last month | Ranking URL |

## Work completed
- What was done and why (short)

## What is working / what is not
- Wins with evidence
- Problems with the likely cause and the fix

## Next month plan
- 3-5 actions in priority order
```

## Writing rules

- Plain language. Explain any SEO term in a few words the first time it appears.
- Compare with the same month last year when there is seasonality (e.g. AC repair in summer, roofing after storms).
- Explain dips honestly: seasonality, algorithm updates (with date), technical issues, tracking changes.
- Connect each piece of work to a result or a reason.
- No vanity overload: 5-8 KPIs are enough.

## Related skills

`search-console-analysis`, `local-seo-audit`, `seo-audit`
