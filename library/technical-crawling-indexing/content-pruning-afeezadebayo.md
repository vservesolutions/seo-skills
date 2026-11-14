---
name: "content-pruning"
description: "Decide which low-value pages to remove, merge, redirect or noindex, and do it without losing traffic, links or conversions: build the candidate list from data, protect pages with value, choose the right action and status code, update links and sitemaps, and measure the effect on the rest of the site. Use whenever someone asks about content pruning, deleting old blog posts, thin content, too many low-quality pages, removing pages after a core update, consolidating content, or whether to noindex or delete pages."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/content-pruning/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/content-seo/content-pruning/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · content-seo/content-pruning/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/content-pruning/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Content Pruning and Consolidation

Pruning means removing or combining pages that no longer help anyone: thin posts, outdated announcements, near-duplicates and pages nobody visits. A leaner site is easier to keep accurate, easier to crawl and gives readers fewer dead ends. Pruning isn't a ranking trick, though. Deleting pages blindly can throw away links, long-tail traffic and conversions.

This skill picks candidates from data, protects pages with value and removes the rest in the right way.

## Operating principles
1. **Improve before removing.** If a page has demand, fix it (`content-refresh`); pruning is for pages without a future.
2. **Protect value.** Pages with backlinks, conversions, steady long-tail clicks or a user need stay, merge or redirect; they are never simply deleted.
3. **Choose the right action.** Merge, redirect, noindex and delete each solve a different problem.
4. **Clean up after yourself.** Internal links, sitemaps and navigation must stop pointing at removed URLs.
5. **Work in batches and measure.** Remove a batch, watch for 6 to 12 weeks, then continue.

## When to use, and when not to
Use it after a content audit, on sites with many thin or outdated pages, after a core update where quality is the likely issue, and before a migration (so you don't move dead weight).

Don't use it to fix pages that compete with each other (`keyword-cannibalisation`) or pages with demand that simply underperform (`content-refresh`).

## Inputs to ask for, in one message
1. Search Console clicks and impressions by page for 12 to 16 months.
2. Analytics sessions and conversions by landing page, including assisted conversions.
3. Backlinks by URL.
4. A crawl with status, indexability, word count, publish date and inlinks.
5. Pages that must stay for legal, product, support or partner reasons.

## Workflow

### Step 1. Build the candidate list
Start from indexable pages with very low clicks and impressions over 12 months, or flagged by a content audit as thin, outdated or duplicate.

### Step 2. Remove protected pages from the list
Take out pages with external links worth keeping, any conversions or assisted conversions, steady long-tail traffic, internal use (support, sales enablement, legal) or a clear user need.

### Step 3. Read each remaining page
Confirm it really has no value. Some pages look weak in data but serve customers well, or cover a topic that just needs time.

### Step 4. Choose the action
| Situation | Action | Status |
|---|---|---|
| Overlaps a stronger page on the same topic | Merge useful parts, redirect | 301 to the stronger page |
| No value, but has a few links or visits | Redirect to the closest relevant page | 301 |
| No value, no links, no traffic | Delete | 410 (or 404) |
| Useful to some users but not for search (old event recaps, internal notices) | Keep live, noindex | 200 with noindex |
| Outdated but has demand | Refresh instead | 200 |

Never redirect everything to the homepage; unrelated redirects are often treated as soft 404s.

### Step 5. Implement in batches
Apply actions to a batch of similar pages. Update internal links to point at final URLs, remove pruned URLs from XML sitemaps, navigation and related-content modules, and record each change with a reason and date.

### Step 6. Measure
Compare site-wide organic clicks, clicks to the pages that received redirects and indexing reports over 6 to 12 weeks. Pause if the batch caused unexpected losses.

## Signals that pruning will help
- Large share of indexed pages with no clicks for a year.
- Many short, dated or duplicate posts on the same themes.
- Search Console shows many pages "Crawled, currently not indexed".
- A recent core update hit the site and a review found widespread low-value content.

## Worked example
A marketing agency blog had 820 posts, 540 of which had no clicks in 12 months (Search Console). Removing protected pages left 390 candidates; reading them reduced the list to 330. Of those, 74 were merged into 30 stronger guides, 61 old posts with links were redirected to their closest current posts, 160 thin posts with no links were removed with 410, and 35 event recaps were kept with noindex. Internal links to removed pages were updated. Over the next three months, site-wide clicks held steady at first and then rose, and the share of indexed pages earning clicks went up.

## Output format
```
# Content pruning plan: <site>, <date>
## Summary (candidates, protected, actions by type)
## Decisions
| URL | Clicks 12m | Links | Conversions | Reason | Action | Target URL | Status | Batch |
## Clean-up checklist (links, sitemaps, navigation)
## Measurement plan and pause criteria
```

## Decision tree
1. Does the page have external links worth keeping? Yes: merge or redirect, never delete.
2. Does it convert or assist conversions? Yes: keep and improve.
3. Does it have search demand it could meet? Yes: refresh instead.
4. Do users still need it outside search (support, events, legal)? Yes: keep with noindex.
5. Does a stronger page cover the same topic? Yes: merge and 301.
6. None of the above: delete with 410.

## Batch plan example
| Batch | Pages | Action | Pause if |
|---|---|---|---|
| 1 | 40 thin tag pages | Noindex template | Organic clicks fall more than 5% site-wide |
| 2 | 30 overlapping posts | Merge into 12 guides, 301 | Merged guides lose rankings after 6 weeks |
| 3 | 60 dead posts with no links | 410 | Unexpected traffic or link loss appears |
Run one batch, wait four to six weeks, review site-wide and section metrics, then continue. Batching keeps any mistake small and makes cause and effect visible.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Thousands of thin tag or author archives | Noindex or remove the archive type at template level rather than page by page |
| Old press releases | Keep a press archive if journalists use it; noindex low-value ones |
| Expired products with links | Redirect to the successor or closest category |
| User-generated content (forum threads) | Prune empty or spam threads; keep threads with answers and traffic |
| Sections with legal retention needs | Keep accessible; noindex if not useful in search |
| Pruning after a core update | Prune in batches and improve remaining content at the same time; pruning alone rarely restores traffic |

## Communicating the plan
Share the decision rules before the list, so stakeholders understand why pages go. Give owners a chance to flag pages they rely on. Keep a log of every change with a reason, so pages can be restored if needed.

## Handoffs to related skills
- Candidates: `content-seo-audit`
- Pages worth saving: `content-refresh`
- Merges: `keyword-cannibalisation`, `seo-content-writing`
- Redirects and status codes: the Technical SEO `redirects-status-codes` skill
- Noindex rules: the Technical SEO `robots-directives` skill
- Sitemap clean-up: the Technical SEO `xml-sitemaps` skill

## Quality bar: what an excellent plan includes
- Protection rules applied before any decision.
- A reason, action and status code for every page.
- Clean-up of links, sitemaps and navigation.
- Batches with pause criteria and measurement.

## Common mistakes
- Deleting by age or word count alone.
- Losing backlinks by deleting instead of redirecting.
- Mass redirects to the homepage.
- Leaving internal links and sitemap entries pointing at removed pages.
- Pruning everything at once, so you can't tell what helped or hurt.

## Questions to ask before you recommend pruning
- Which pages are used by sales, support or partners?
- How are conversions and assisted conversions tracked?
- Who can apply redirects and update links?

## Self-check before you answer
- Did I protect every page with links, conversions or a user need?
- Does each page have the right action and status code?
- Is clean-up of links and sitemaps included?
- Is the work batched with measurement and pause points?

## Official documentation
- Creating helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Redirects and Google Search: https://developers.google.com/search/docs/crawling-indexing/301-redirects
- HTTP status codes and Google Search: https://developers.google.com/search/docs/crawling-indexing/http-network-errors
- Block indexing with noindex: https://developers.google.com/search/docs/crawling-indexing/block-indexing

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/content-seo/content-pruning/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
