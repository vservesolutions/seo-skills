---
name: "content-refresh"
description: "Find pages losing organic traffic, diagnose why (outdated information, intent shift, new competitors, lost links, cannibalisation, technical or seasonal causes), and refresh them with real updates: current facts, new sections, better answers, evidence, internal links and honest dated changes, then measure recovery against a baseline. Use whenever someone mentions content decay, declining blog traffic, updating old posts, refreshing content, pages that used to rank, historical optimisation, or which articles to update first."
category: "analytics-measurement"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/content-refresh/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/content-seo/content-refresh/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · content-seo/content-refresh/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/content-refresh/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Content Refresh and Decay Recovery

Pages lose traffic over time. Facts go out of date, searchers start wanting a different format, competitors publish better pages, links disappear and new pages on your own site start competing. Refreshing an existing page that already has history and links is often faster and cheaper than publishing a new one.

This skill finds decaying pages, works out why each one declined and plans a refresh that fixes the cause.

## Operating principles
1. **Diagnose before you rewrite.** A seasonal dip or a technical fault won't be fixed by new paragraphs.
2. **Refresh the substance, not the date.** Change facts, examples, sections and evidence; then update the date.
3. **Keep the URL.** A refreshed page keeps its links and history on the same address.
4. **Start where the upside is biggest.** Pages with the most lost clicks and the most business value come first.
5. **Measure against a baseline,** with enough time for re-crawling and re-ranking.

## When to use, and when not to
Use it for blogs and resource centres with pages older than a year, after traffic declines, on a regular quarterly schedule, and before publishing new pages on topics you already cover.

Don't use it when two pages split the same query (`keyword-cannibalisation`), when pages should go (`content-pruning`) or when the cause is technical (Technical SEO skills).

## Inputs to ask for, in one message
1. Search Console data by page, comparing the last 3 months with the same period a year earlier.
2. Analytics conversions by landing page.
3. Publish and last-updated dates for each page.
4. Backlink history for important pages, if available.
5. Any recent technical changes or migrations.

## Workflow

### Step 1. Find decaying pages
List pages with a meaningful drop in clicks year on year, and with steady or falling impressions. Exclude pages whose decline matches site-wide seasonality.

### Step 2. Diagnose each page
| Cause | Signs | Fix |
|---|---|---|
| Outdated information | Old prices, years, screenshots, tools or rules | Update facts, examples and screenshots |
| Intent shift | Results now show a different format or angle | Rework the page to the new format (`search-intent-serp-analysis`) |
| Stronger competitors | New pages cover more, with better evidence | Add depth, original data, expert input |
| Lost rankings for some queries | Query-level drops in Search Console | Cover those subtopics properly |
| Cannibalisation | Another of your pages now ranks for the same queries | Merge or separate (`keyword-cannibalisation`) |
| Lost links | Referring domains fell | Reclaim links, earn new ones |
| Technical | Indexing, canonical or speed changes | Fix first, then judge content |
| SERP features | AI Overview or other features took clicks, positions stable | Aim for citation, improve CTR, add what summaries can't |

### Step 3. Plan the refresh
For each page: the cause, the sections to add, change or cut, facts to update with sources, evidence to add, internal links to add, and a new title or meta if CTR is weak.

### Step 4. Refresh
Rewrite outdated sections, add missing subtopics and questions, replace generic examples with real ones, update screenshots with capture dates, and remove anything no longer true. Keep what still ranks.

### Step 5. Date the update truthfully
Update the "last updated" date and `dateModified` only when the content changed meaningfully. A short "What changed" note helps readers on time-sensitive topics.

### Step 6. Re-promote
Add links from newer related pages, update the sitemap `lastmod` and request indexing for the most important pages.

### Step 7. Measure
Compare clicks, impressions and position for the page's queries 6 to 12 weeks after the refresh against the period before.

## Refresh schedule
| Content type | Review cycle |
|---|---|
| Prices, rates, rules, laws | When they change, and at least every 3 to 6 months |
| Tool and software guides | Every 6 months |
| Evergreen how-to guides | Every 12 months |
| Opinion and news | Rarely; link to newer coverage instead |

## Worked example
An HR software blog had 60 posts losing more than 30% of clicks year on year. Diagnosis split them into 24 with outdated rules and screenshots, 14 where results had shifted to templates, 9 cannibalised by newer posts, 8 with stable rankings but lower CTR after AI Overviews appeared, and 5 hit by a canonical bug. The canonical bug was fixed first; the outdated posts were refreshed with current rules and new screenshots; the template-intent posts gained downloadable templates; the cannibalised pairs were merged. After ten weeks, clicks to the refreshed group were back above the previous year's level (Search Console).

## Output format
```
# Content refresh plan: <site>, <date>
## Decaying pages
| URL | Clicks now | Clicks a year ago | Change | Cause | Action | Priority |
## Refresh briefs (per page: sections to add, change, cut; facts to update; evidence; links)
## Measurement plan and dates
```

## Refresh depth: light, medium or full
| Depth | When | What changes | Effort |
|---|---|---|---|
| Light | Facts and dates out of date, structure still fine | Figures, screenshots, links, date note | Under an hour |
| Medium | Missing subtopics, weaker evidence than competitors | New sections, examples, data, internal links, title | Half a day |
| Full | Intent shifted or the page no longer serves its query | New format and structure on the same URL | One to three days |

## Refresh brief template
```
Page: <URL>
Cause of decline: <outdated facts / intent shift / competitor depth / cannibalisation / CTR loss>
Depth: <light / medium / full>
Keep: <sections and queries that still perform>
Change: <sections to update, add or remove>
New evidence: <data, screenshots, expert input>
Title and description: <new options>
Internal links to add: <pages and anchors>
Re-check date: <6 to 12 weeks>
```
A short brief keeps refreshes focused on the diagnosed cause instead of rewriting pages that only needed new figures.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Page decays every year in the same months | Seasonal: refresh before the season, not during the dip |
| Clicks fell but rankings and impressions held | Likely CTR loss to SERP features; improve title and add what summaries can't give |
| Several pages decay at once after a release | Suspect a technical cause first |
| Refreshed page didn't recover | Re-check intent, competitors and cannibalisation; consider merging |
| Page has a fixed publication context (news, event) | Don't rewrite history; link to newer coverage instead |

## What to keep during a refresh
- The URL.
- Sections that still rank for valuable queries (check Search Console by query).
- Accurate content that earned links.
- Structured data that still matches the page.

## Handoffs to related skills
- Intent shifts: `search-intent-serp-analysis`
- Rewriting: `seo-content-writing`
- Final checks: `on-page-seo`, `title-tags-meta-descriptions`
- Competing pages: `keyword-cannibalisation`
- Pages with no future: `content-pruning`
- Technical causes: the Technical SEO `crawlability-indexation-audit` skill

## Quality bar: what an excellent plan includes
- A diagnosed cause for every page.
- Refresh depth chosen per page, with effort.
- Substantive changes, with dates updated only when content changed.
- A baseline and a re-check date.

## Common mistakes
- Changing the date without changing the content.
- Rewriting the whole page and losing the sections that ranked.
- Moving refreshed content to a new URL.
- Refreshing seasonal pages in the off season and calling it a recovery.
- Ignoring the cause and adding words.

## Questions to ask before you recommend a refresh
- Which pages drive conversions, not only traffic?
- What changed in the business or market since the page was written?
- Who can supply up-to-date facts and expert input?

## Self-check before you answer
- Did I diagnose a cause for each page before planning changes?
- Are seasonal and technical causes ruled out?
- Are updates substantive and dated truthfully?
- Is there a baseline and a measurement date?

## Official documentation
- Creating helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Influencing bylines and dates in Google Search: https://developers.google.com/search/docs/appearance/publication-dates
- Search Console Performance report: https://support.google.com/webmasters/answer/7576553
- Google Search Status Dashboard: https://status.search.google.com/

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/content-seo/content-refresh/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
