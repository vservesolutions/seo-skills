---
name: "keyword-cannibalisation"
description: "Find and fix pages on the same site that compete for the same searches: detect overlap from Search Console page and query data, separate real cannibalisation from healthy double listings, then merge, redirect, re-target, canonicalise or re-link so each intent has one clear page. Use whenever someone mentions keyword cannibalisation or cannibalization, pages competing with each other, rankings swapping between URLs, two posts on the same topic, the wrong page ranking, or unstable positions."
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/keyword-cannibalisation/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/content-seo/keyword-cannibalisation/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · content-seo/keyword-cannibalisation/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/keyword-cannibalisation/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Keyword Cannibalisation

Cannibalisation happens when two or more pages on one site serve the same intent, so search engines keep switching between them or rank neither as well as one strong page would. It is common on blogs that published similar posts over the years, on sites with overlapping category and guide pages, and after migrations.

Not every overlap is a problem. Two of your pages ranking together at the top is a good outcome. This skill tells the difference and fixes the cases that cost traffic.

## Operating principles
1. **Intent, not words.** Pages compete when they answer the same need, not because they share a keyword.
2. **Evidence from Search Console.** Look for queries where several URLs take impressions and the ranking URL keeps changing.
3. **Healthy overlap is fine.** A guide and a product page both ranking for a mixed-intent query can be ideal.
4. **One intent, one page.** Fixes aim for a clear owner per intent.
5. **Keep the value.** Merges keep the best content, the stronger URL and the links of both pages.

## When to use, and when not to
Use it when rankings swap between URLs, when the wrong page ranks, after content audits find duplicate topics, and before publishing a page on a topic you may already cover.

Don't use it for technical duplicates such as parameter or protocol variants (use the Technical SEO canonicalization skill) or for a page that simply underperforms on its own (`on-page-seo`).

## Inputs to ask for, in one message
1. Search Console data by query and page for 3 to 16 months.
2. A crawl with titles, H1s, canonicals, word counts and inlinks.
3. Backlinks by URL and conversions by landing page.
4. Any queries or topics already suspected.

## Workflow

### Step 1. Find candidates
From Search Console, list queries where two or more of your URLs each have a meaningful share of impressions. Add pages with very similar titles or H1s from the crawl.

### Step 2. Check the pattern
For each query, chart which URL ranked by day or week. Frequent switching, both pages stuck lower than expected, or the less relevant page ranking all point to cannibalisation. Two pages steady near the top is usually fine.

### Step 3. Check intent
Read the live results and both pages. Do they serve the same need in the same format? If one is a guide and one is a product page, and results show both types, they may coexist with clearer targeting.

### Step 4. Choose a fix
| Situation | Fix |
|---|---|
| Same intent, both pages useful | Merge into the stronger URL, 301 the other |
| Same intent, one page weak and unlinked | Redirect the weak page, or remove it if it has no value |
| Different intents, unclear targeting | Re-target: rewrite titles, H1s and content so each page owns its intent; link between them |
| Both pages needed for users (for example print or region versions) | Canonical from the variant to the main page |
| Internal links point at the wrong page | Change anchors and links so the owner page gets them |

### Step 5. Pick the surviving URL
Choose the URL with the most links, traffic and conversions, and the cleaner address. Move the best content from the other page into it.

### Step 6. Implement
Merge content, set 301 redirects, update internal links, sitemaps and navigation, and remove the retired URL from any templates.

### Step 7. Measure
Watch the query set for 6 to 12 weeks: one URL should settle and position should improve or hold with higher clicks.

## Preventing it
- Check the site for existing pages before briefing new content.
- Keep a topic register mapping each intent to one URL.
- Use the topical map to give every page a distinct job.
- Link to the owner page with consistent, descriptive anchors.

## Worked example
A travel insurance site had three posts on "travel insurance for pre-existing conditions", written in 2021, 2023 and 2025. Search Console showed all three taking impressions for the main query, with the ranking URL changing every few days and positions between 9 and 15. The 2023 post had most backlinks; the 2025 post had the most current information. The 2025 content was merged into the 2023 URL, the other two were redirected to it, and internal links were updated. Within eight weeks one URL ranked steadily in position 4, and clicks for the query group roughly doubled.

## Output format
```
# Cannibalisation review: <site>, <date>
## Summary (query groups affected, pages involved, expected gain)
## Findings
| Query group | URLs competing | Impression split | Ranking pattern | Same intent? | Fix | Surviving URL |
## Implementation steps (content to move, redirects, links to update)
## Measurement plan
```

## Merge playbook
1. Choose the surviving URL (most links, traffic and conversions; cleaner address).
2. Outline the merged page: keep every section that ranks or earns links from both pages.
3. Rewrite into one coherent page; remove repetition.
4. Keep the surviving URL; 301 the retired URL to it.
5. Update internal links, navigation, sitemaps and any canonical tags.
6. Request indexing for the surviving URL.
7. Watch the query group for six to twelve weeks.

## Diagnosing from Search Console
1. Export the Performance report by query and page for 3 to 16 months.
2. Filter to queries with two or more ranking URLs.
3. For each, chart which URL ranked each week and its position.
4. Flag queries where the ranking URL changes often, or where the less relevant URL ranks.
5. Check impressions split: if both URLs share impressions and neither holds a top position, overlap is likely hurting.
6. Read both pages and the live results before deciding to merge, differentiate or leave them.

## Differentiating instead of merging
When both pages deserve to exist, give each a distinct intent: one for buying (category or product), one for learning (guide). Update titles, H1s and introductions to match, and link between them with descriptive anchors so search engines and readers see their different jobs.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Category page and blog post compete | Give the category page buying intent and the post learning intent; link between them |
| Location pages compete across cities | Make each page clearly local, or consolidate if content is identical |
| Old and new versions of an annual guide | Keep one evergreen URL and update it each year |
| Product variants on separate URLs | Consolidate to one page with options, or canonicalise variants |
| Two pages both steady in the top three | Leave them; it's a strength |

## Handoffs to related skills
- Redirect rules and tests: the Technical SEO `redirects-status-codes` skill
- Link updates: the Technical SEO `internal-linking` skill
- Rewriting merged content: `seo-content-writing`
- Preventing new overlap: `topical-map`, `content-brief`
- Finding overlap across the site: `content-seo-audit`

## Quality bar: what an excellent review includes
- Evidence of competition from Search Console, not just similar titles.
- An intent judgement for each pair.
- A surviving URL chosen on links, traffic and conversions.
- Redirects, link updates and a measurement plan.

## Common mistakes
- Merging pages that serve different intents.
- Choosing the newer URL by default and losing older links.
- Using noindex instead of merging, which wastes the weaker page's signals.
- Forgetting to update internal links after a merge.
- Treating every shared query as a problem.

## Questions to ask before you recommend changes
- Which page converts better, and which has the stronger links?
- Is there a business reason to keep both pages?
- Who can redirect URLs and update links?

## Self-check before you answer
- Is each case backed by Search Console query and page data?
- Did I confirm the intents match before merging?
- Does the surviving URL keep the best content and links?
- Are redirects and internal links part of the plan?

## Official documentation
- Consolidate duplicate URLs: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Redirects and Google Search: https://developers.google.com/search/docs/crawling-indexing/301-redirects
- Search Console Performance report: https://support.google.com/webmasters/answer/7576553

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/content-seo/keyword-cannibalisation/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
