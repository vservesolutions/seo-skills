---
name: "international-seo-reporting"
description: "Report international SEO per market: Search Console, Bing and analytics segmentation by locale, indexed pages, visibility by country, ranking-URL match rates, organic conversions and revenue by market, local search engine data, local referring domains, localisation quality versus the home market, market scorecards and scale, adjust or pause decisions. Use whenever someone asks for international SEO reporting, performance by country, multilingual SEO KPIs, whether international SEO pays, market scorecards or tracking the right country version ranking."
category: "analytics-measurement"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/international-seo-reporting/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/international-seo/international-seo-reporting/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · international-seo/international-seo-reporting/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/international-seo/international-seo-reporting/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# International SEO Reporting by Market

Global organic reports hide international problems. Total traffic can grow while a priority market falls, the wrong country version ranks, or a launched language never takes off. International reporting has to answer per market: is each version indexed, ranking in the right country, growing and converting, and is it worth the investment?

This skill builds reporting for international SEO: market segmentation in Search Console, Bing and analytics, ranking-URL checks by country, localised conversion tracking, local engine data, market scorecards and investment reviews.

## Operating principles
1. **Report per market.** Country plus language is the unit, not the site.
2. **Check the right version ranks.** Traffic to the wrong country version is a targeting problem, not a win.
3. **Measure business outcomes locally.** Conversions, revenue and leads per market, in local currency where helpful.
4. **Include every engine that matters.** Bing, Baidu, Yandex, Naver or Seznam where they hold share.
5. **Tie reports to investment decisions.** Each market review ends with scale, adjust or pause.

## Market metrics
| Metric | Source | Purpose |
|---|---|---|
| Indexed pages per locale | Search Console page indexing (folder or property filters) | Coverage |
| Impressions and clicks by country | Search Console performance by country | Visibility and demand |
| Ranking URL match rate | Search Console country filter vs intended version | Targeting health |
| Organic sessions and conversions by locale | Analytics with language or folder segments | Business outcome |
| Revenue or pipeline by market | Commerce or CRM | Return on investment |
| Local engine traffic and indexing | Bing, Baidu, Yandex, Naver, Seznam tools | Coverage beyond Google |
| Local referring domains | Backlink tools filtered by country | Local authority |
| Localisation quality signals | Engagement and conversion versus home market | Content quality proxy |

## When to use, and when not to
Use it after launching markets, for monthly and quarterly reviews, when leadership asks whether international SEO pays, and when global reports look healthy but markets disagree.

Don't use it for paid media reporting (the Performance Marketing reporting skill) or single-market dashboards (the Content and Growth reporting skills).

## Inputs to ask for, in one message
1. Markets, locales and URL patterns.
2. Search Console and Bing access by property or folder.
3. Analytics setup with language, country and folder dimensions.
4. Commerce or CRM data by market.
5. Local engine access where relevant.
6. Investment per market (localisation, links, tools, people).

## Workflow

### Step 1. Set up segmentation
Search Console properties or folder filters per locale; analytics content groups or segments by folder and language; consistent naming across tools.

### Step 2. Build the market scorecard
One row per market with indexing, visibility, ranking-URL match, sessions, conversions, revenue and trend.

### Step 3. Check ranking-URL matches
Monthly: for top queries in each country, is the intended version ranking?

### Step 4. Add local engines
Where local engines matter, add their traffic and indexing data.

### Step 5. Compare quality
Conversion and engagement per market versus the home market to spot localisation problems.

### Step 6. Review investment
Compare results with spend per market; decide scale, adjust or pause.

### Step 7. Report and act
Monthly market report with actions and owners; quarterly investment review.

## Market scorecard template
```
| Market | Indexed pages | Clicks (MoM, YoY) | Ranking URL match | Organic conversions | Revenue | Local referring domains | Status | Action |
| de-DE | 1,240 | +8% / +46% | 94% | 310 | €41k | 85 | On track | Scale content |
| es-MX | 620 | +2% / +9% | 71% | 40 | MX$180k | 12 | Watch | Fix targeting vs es-ES |
```

## Ranking-URL match check
1. List the top 20 to 50 queries by impressions for each market.
2. In Search Console, filter by the market's country and check which page ranks for each query.
3. Mark a match when the page belongs to the intended locale.
4. Match rate = matches ÷ queries checked.
5. Investigate any market below about 90%; common causes are missing return tags, cross-language canonicals and same-language versions with no local differences.

## Investment review questions
- Is the market on track against its six- or twelve-month target?
- Is conversion close to the home market? If not, is localisation, pricing or payment the cause?
- What did content, links and tools cost this quarter, and what did the market return?
- Should the next quarter scale, adjust or pause investment?

## Analytics setup tips
- Create content groups or segments by locale folder (/de/, /fr-ch/).
- Record page language and market as custom dimensions where the folder doesn't show them.
- Use consistent market names across Search Console, analytics and finance reports.

## Monthly market report template
```
# International SEO report: <month>
## Summary: markets on track, watch, at risk (one line each)
## Scorecard (indexing, clicks, match rate, conversions, revenue, local links)
## Ranking URL mismatches and fixes in progress
## Local engines (where relevant)
## Quality: conversion vs home market for equivalent pages
## Decisions: scale, adjust, pause per market
## Actions and owners
```

## Status definitions
| Status | Meaning |
|---|---|
| On track | Meeting targets; match rate high; conversion close to home market |
| Watch | One metric off target or trend slowing |
| At risk | Several metrics off target or falling for two months |

## Common reporting traps
- Counting clicks from the wrong country version as success for the intended market.
- Comparing markets in different currencies without conversion.
- Ignoring seasonal patterns that differ by country (holidays, fiscal years, school years).
- Using global keyword rankings instead of local rank checks.

## Tooling by market
| Need | Tools |
|---|---|
| Google visibility by country | Search Console (country filter, folder properties) |
| Bing visibility | Bing Webmaster Tools |
| Local engines | Baidu Search Resource Platform, Yandex Webmaster, Naver Search Advisor, Seznam Webmaster |
| Rank tracking | Tools set to each country and language |
| Conversions and revenue | Analytics with locale segments; commerce or CRM by market |

## Sharing reports with market teams
Give each market lead their own view with the same definitions as the global scorecard, so local decisions and global investment reviews use the same numbers.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| One language for several countries | Report by country within the language version |
| Domain property only | Use URL filters for folders; add folder properties if useful |
| Currency differences | Report local currency plus a converted total |
| Small markets with noisy data | Use quarterly views and trends |
| Local engine data limited | Combine referrer data in analytics with webmaster tools |

## Handoffs to related skills
- Diagnosing problems found: `international-seo-audit`, `geo-language-targeting`, `hreflang-implementation`
- Market decisions: `international-market-selection`
- Local engines: `local-search-engines`
- Overall growth reporting methods: the Growth Marketing `growth-reporting` skill

## Worked example
A software company's global organic traffic grew 25% year on year and international SEO looked healthy. A market scorecard showed Germany and the Netherlands growing strongly, Mexico flat with only 71% of top queries ranking the es-MX version (Spain's pages ranked instead) and French conversions far below the home market. The team fixed es-MX targeting and hreflang, reviewed French pricing and payment pages, and paused investment in Italian until French recovered. Quarterly reviews then tied each market's content and link budget to its results.

## Output format
```
# International SEO report: <period>
## Summary by market (on track, watch, at risk)
## Market scorecard
## Ranking URL mismatches
## Local engine view
## Quality comparison versus home market
## Investment review and decisions
## Actions and owners
```

## Common mistakes
- Reporting only global totals.
- Counting wrong-version traffic as success.
- Ignoring Bing and local engines.
- No conversion or revenue data by market.
- No link between results and investment.

## Questions to ask before you build
- Which markets matter most, and what does success look like in each?
- Can analytics separate markets by folder or language?
- How much is invested in each market?

## Self-check before you answer
- Is every metric reported per market?
- Are ranking-URL matches checked?
- Are local engines included where they matter?
- Does each review end with scale, adjust or pause?

## Official documentation
- Google Search Console performance report: https://support.google.com/webmasters/answer/7576553
- Bing Webmaster Tools: https://www.bing.com/webmasters/
- GA4 content groups: https://support.google.com/analytics/answer/11523339

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/international-seo/international-seo-reporting/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
