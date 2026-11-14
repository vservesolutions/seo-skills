---
name: "content-seo-audit"
description: "Run a complete content and on-page SEO audit of a site or section: inventory every indexable page, join Search Console, analytics and crawl data, score each page on intent match, quality, E-E-A-T, on-page elements and performance, and decide keep, improve, merge, redirect or remove, with a prioritised action plan. Use whenever someone asks for a content audit, content inventory, blog audit, on-page SEO audit, wants to know which pages to update, merge or delete, or sees organic traffic falling across many articles."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/content-seo-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/content-seo/content-seo-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · content-seo/content-seo-audit/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/content-seo-audit/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Content SEO Audit

Most sites carry more pages than they can keep in good shape. Some earn traffic, some used to, some never did, and a few compete with each other for the same searches. A content audit looks at every indexable page with real data and decides what to do with each one, so effort goes where it will move traffic and leads.

This skill runs that audit end to end and hands each finding to the specialist skill that can go deeper.

## Operating principles
1. **Data before opinion.** Every decision rests on clicks, impressions, conversions, links and a reading of the page, not on its age or how it looks.
2. **Judge pages against the query, not in isolation.** A page is good if it satisfies the searches it can rank for better than the alternatives.
3. **Five outcomes only:** keep, improve, merge, redirect or remove. Every page gets one.
4. **Protect what earns.** Never remove or merge a page that brings links, conversions or steady traffic without a plan to keep that value.
5. **Prioritise by impact and effort,** quick wins first.

## When to use, and when not to
Use it for a site or section with more than a few dozen pages, after a traffic decline across many pages, before a content strategy reset, before a migration, or when nobody knows which pages still matter.

Don't use it for a single page (use `on-page-seo` or `content-refresh`), for crawling and indexing faults (use the Technical SEO skills) or for keyword research on new topics (`keyword-research`).

## Inputs to ask for, in one message
1. Search Console Performance by page and by page plus query, 16 months if available.
2. Analytics landing page data for organic traffic: sessions, engagement, conversions, revenue, for 12 months.
3. A crawl with status, indexability, title, meta description, H1, word count, publish and modified dates, author, inlinks and canonical.
4. Backlink data by target URL.
5. The business goals: which products, services or conversions matter most.
6. Any rules about pages that must stay (legal, partner, product pages).

## Workflow

### Step 1. Build the inventory
Join crawl, Search Console, analytics and backlink data on URL. Keep only indexable, canonical pages; list non-indexable pages separately for a technical check. Add page type, topic and the main query each page ranks for.

### Step 2. Add trend data
Compare the last 3 months with the same period a year earlier and with the previous 3 months. Flag pages losing more than a set share of clicks as decaying.

### Step 3. Score each page
| Dimension | What to check | Score 0 to 2 |
|---|---|---|
| Demand | Impressions for queries the page targets | 0 none, 1 some, 2 strong |
| Performance | Clicks, position, CTR against similar pages | 0 poor, 1 average, 2 strong |
| Intent match | Does the format and angle match the current results? | 0 mismatch, 1 partial, 2 match |
| Quality and E-E-A-T | Accuracy, depth, first-hand evidence, author, freshness | 0 weak, 1 fair, 2 strong |
| On-page | Title, H1, headings, meta description, internal links, images | 0 weak, 1 fair, 2 strong |
| Business value | Conversions, assisted conversions, link value, strategic fit | 0 none, 1 some, 2 high |

### Step 4. Decide the outcome
| Pattern | Outcome |
|---|---|
| Strong performance and value | Keep; light maintenance |
| Demand exists, page underperforms | Improve (`content-refresh`, `on-page-seo`) |
| Two or more pages split the same query | Merge (`keyword-cannibalisation`) |
| No demand, no value, but has links or traffic history | Merge or redirect to the closest page |
| No demand, no value, no links | Remove with 410, or noindex if users still need it (`content-pruning`) |

### Step 5. Read a sample by hand
Numbers miss quality. Read at least the top 20 pages by traffic and 20 random pages from each outcome group. Note patterns: outdated facts, thin sections, missing authors, broken examples.

### Step 6. Prioritise
Score each action by expected impact (traffic and business value at stake) and effort (hours to fix). Order quick wins first: high impact, low effort.

### Step 7. Plan the work
Group actions into batches by owner and template. Set a re-check date per batch, usually 6 to 12 weeks after release.

## What good looks like
- Every page has one main purpose and one main query group.
- Titles and H1s match what searchers want.
- Content shows first-hand experience where it matters: data, screenshots, examples, named authors.
- Important pages are linked from related content.
- No two pages compete for the same intent.

## Worked example
A SaaS blog had 410 posts. The inventory showed 38 posts brought 81% of organic clicks over 12 months (Search Console), 96 posts had no clicks at all, and 22 pairs of posts targeted the same queries. The plan kept and maintained the top 38, refreshed 54 posts with demand but falling clicks, merged the 22 pairs into 22 stronger posts, redirected 31 old posts with backlinks to their closest replacements, and removed 65 thin posts with no links. Twelve weeks after the first two batches, clicks to refreshed posts were up and the blog had 140 fewer pages to maintain.

## Output format
```
# Content SEO audit: <site or section>, <date>
## Summary (pages audited, share of clicks from top pages, outcome counts)
## Inventory (spreadsheet): URL, type, topic, main query, clicks, trend, conversions, links, scores, outcome, owner
## Patterns found in the manual review
## Prioritised action plan
| # | Action | Pages | Impact | Effort | Skill to use | Owner | Re-check |
```

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Seasonal pages with no clicks out of season | Judge on the same season last year, not the last three months |
| New pages under six months old | Mark as "too early" unless clearly thin or duplicate; re-audit later |
| Pages with links but no traffic | Never remove; merge or redirect to keep the link value |
| Pages that convert but get little traffic | Keep and improve visibility; they are worth more than traffic suggests |
| Legal, policy or support pages | Keep regardless of search data; exclude from pruning decisions |
| Pages ranking for queries unrelated to the business | Low value even with traffic; consider refocusing or removing |
| Programmatic or templated sections | Audit by template and sample, then apply decisions to the whole group |
| Multilingual sites | Audit each language separately; a page weak in one market may be strong in another |

## Scoring at scale
For sites with thousands of pages, score automatically first: demand and performance from Search Console, value from analytics, links from backlink data. Then read a stratified sample from each score band. Adjust the automatic rules where the reading disagrees, and re-run. Record the rules so the next audit is comparable.

## Handoffs to specialist skills
- Pages to improve: `content-refresh` for decaying pages, `on-page-seo` for single-page gaps
- Overlapping pages: `keyword-cannibalisation`
- Pages to remove, merge or redirect: `content-pruning`
- Quality and trust gaps: `eeat-content-quality`
- Weak titles and descriptions: `title-tags-meta-descriptions`
- Missing topics: `topical-map` and `keyword-research`
- Indexing or rendering faults found on the way: the Technical SEO skills, starting with `technical-seo-audit`

## Quality bar: what an excellent audit includes
- One outcome for every indexable page, backed by data and a reason.
- A manual reading of samples, with the patterns it found.
- Protection rules for pages with links, conversions or legal value, applied before any removal.
- A prioritised plan with owners, batches and re-check dates.
- Honest limits: missing data, seasonality and anything the numbers can't show.

## Common mistakes
- Deleting pages on age or word count alone.
- Ignoring backlinks and conversions when pruning.
- Treating every traffic drop as a content problem when it is seasonal or technical.
- Auditing without reading pages.
- Producing a spreadsheet with no owners or dates.

## Questions to ask before you recommend changes
- Which pages must stay for legal, product or partner reasons?
- What conversions matter most, and how are they tracked?
- Who can update, merge and redirect pages, and how fast?
- Has anything technical changed recently that could explain drops?

## Self-check before you answer
- Does every page have an outcome backed by data?
- Did I read a sample of pages, not only the numbers?
- Are pages with links or conversions protected?
- Does every action have an owner, a skill to use and a re-check date?

## Official documentation
- Creating helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Search Console Performance report: https://support.google.com/webmasters/answer/7576553
- Google Search Status Dashboard: https://status.search.google.com/

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/content-seo/content-seo-audit/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
