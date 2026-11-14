---
name: "on-page-seo"
description: "Optimise a single page for its target query and intent: title, H1 and heading structure, introduction, topic and entity coverage against the ranking pages, answer blocks for snippets and AI answers, internal links in and out, URL, images, structured data, freshness signals and page experience, returned as a scored checklist and exact edits. Use whenever someone asks to optimise a page, on-page SEO, why a page isn't ranking, how to rank a specific page higher, page-two keywords, heading structure, or to score a page against competitors."
category: "on-page-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/on-page-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/content-seo/on-page-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · content-seo/on-page-seo/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/on-page-seo/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# On-Page SEO Optimisation

On-page SEO is everything on the page itself that helps it rank for the searches it is meant to serve: the topic is clear, the content matches what searchers want, the structure is easy to scan, related pages link to it and nothing technical gets in the way. Most pages that sit on page two have a few specific gaps, not a fundamental problem.

This skill compares one page against its target query and the pages that rank, then gives exact edits in priority order.

## Operating principles
1. **Intent first.** If the page type doesn't match the results, no amount of tuning fixes it.
2. **Cover what readers need, not keyword counts.** Compare subtopics and entities with ranking pages; ignore density targets.
3. **Make the main answer easy to find.** Search engines and AI answers extract clear, self-contained passages.
4. **One page, one main job.** Don't stretch a page to target unrelated queries.
5. **Edits, not advice.** Deliver the new title, the new heading, the paragraph to add and the link to place.

## When to use, and when not to
Use it for pages stuck in positions 5 to 20, new pages before publishing, pages that lost rankings, and any important landing page.

Don't use it for site-wide audits (`content-seo-audit`), for two pages competing (`keyword-cannibalisation`) or for crawl and index faults (Technical SEO skills).

## Inputs to ask for, in one message
1. The URL and its target query and market.
2. Search Console data for the page: queries, clicks, impressions, position, 3 to 16 months.
3. The page content or permission to fetch it.
4. Pages that rank in the top five for the target query.
5. Related pages on the site that could link to it.

## Workflow

### Step 1. Confirm intent and target
Check the live results for the main query (see `search-intent-serp-analysis`). Confirm the page type and angle match. Use Search Console to see which queries the page already shows for; the real target may differ from the planned one.

### Step 2. Check the head of the page
| Element | Check |
|---|---|
| Title tag | Topic first, specific, unique, fits on screen |
| H1 | One H1 that states the topic in searchers' words |
| Introduction | Answers or promises within the first two short paragraphs |
| URL | Short, readable, stable; don't change an established URL for a keyword |
| Meta description | Accurate, specific, invites the click |

### Step 3. Compare coverage
List the subtopics, questions and entities (products, standards, tools, people, places) covered by the top five pages. Mark which ones the page covers well, weakly or not at all. Add what helps the reader; skip what only pads.

### Step 4. Improve structure
H2s for main sections and H3s for subsections, in reading order, phrased so a skimmer understands the page from headings alone. Use lists for steps, tables for comparisons and short answer paragraphs under question headings.

### Step 5. Add evidence and expertise
First-hand examples, original data, screenshots, named author with credentials, dates and sources. These are often the difference between page two and page one for competitive queries.

### Step 6. Fix internal links
Find 3 to 10 relevant pages that should link to this page and suggest anchors; add links out to related pages and the next step. Make sure no internal link points to a redirect.

### Step 7. Check media, markup and experience
Images with descriptive file names, alt text and captions (`image-seo`); structured data that matches the page; the page loads fast and has no intrusive interstitials.

### Step 8. Score and prioritise
Score each element 0 to 2 and order edits by expected effect and effort.

## On-page checklist
- [ ] Page type matches the dominant intent
- [ ] Title and H1 lead with the topic
- [ ] Answer or promise in the opening
- [ ] Main subtopics and questions covered
- [ ] Clear H2 and H3 structure
- [ ] Short answer passages under question headings
- [ ] First-hand evidence and sourced facts
- [ ] Author and dates where relevant
- [ ] 3+ relevant internal links in, links out to next steps
- [ ] Images optimised with alt text
- [ ] Matching structured data
- [ ] No technical blockers (indexable, canonical to itself, fast)

## Worked example
A B2B software page targeting "employee onboarding checklist" sat at position 11 (Search Console, 90 days). The top five were downloadable checklists with phase-by-phase sections; the page was a product feature description with a short list. Edits: retitled to "Employee Onboarding Checklist: Free Template for Your First 90 Days", added a downloadable template, restructured into pre-boarding, first day, first week and first 90 days, added answers to three People also ask questions, added a quote from the company's head of people with real examples, and placed links from six related blog posts. The page moved to position 4 within eight weeks.

## Output format
```
# On-page review: <URL> for "<query>", <date>
## Intent check (match or mismatch, with evidence)
## Scorecard
| Element | Score 0-2 | Finding | Edit |
## Coverage gaps versus top 5 (subtopics, questions, entities)
## Exact edits (new title, H1, headings, paragraphs to add, links to place)
## Priority order and re-check date
```

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Page ranks for a different query than planned | Optimise for the query it already wins if it fits the business; adjust the plan |
| Page type doesn't match intent | Recommend a new page of the right type rather than forcing this one |
| Top results are much longer | Add what readers need, not length; missing subtopics matter more than word count |
| Page is a product or category page | Focus on product facts, filters, reviews and internal links rather than long copy |
| YMYL topic | Add author credentials, review dates and primary sources before other changes |
| Ranking dropped suddenly | Check technical changes, cannibalisation and update dates before rewriting |

## Internal linking for one page
1. Search the site for pages that mention the topic (site search or a crawl's text search).
2. Pick three to ten that are relevant and get traffic or links themselves.
3. Add a link where the topic is discussed, with an anchor that describes the target.
4. Make sure the page links out to the next step and to related deeper pages.
5. Remove links to redirects or retired pages on the way.

## Measuring the change
Record position, impressions, clicks and CTR for the page's main queries before editing. Re-check after six to eight weeks, comparing the same queries and allowing for seasonality. Note other changes made in the same period.

## Handoffs to related skills
- Intent check: `search-intent-serp-analysis`
- Titles and descriptions: `title-tags-meta-descriptions`
- Rewriting sections: `seo-content-writing`
- Images: `image-seo`
- Evidence and authorship: `eeat-content-quality`
- Markup and speed: the Technical SEO `structured-data` and `core-web-vitals` skills
- Citability in AI answers: the AEO & GEO `answer-ready-content` skill

## Quality bar: what an excellent review includes
- An intent verdict backed by the live results.
- A scorecard with exact edits, not general advice.
- Internal links in and out with suggested anchors.
- A priority order and a measurement plan.

## Common mistakes
- Adding keywords instead of answering more questions.
- Changing the URL of a page that already ranks.
- Copying competitor headings without adding anything better.
- Ignoring internal links, the fastest on-page win for many pages.
- Judging results after a few days.

## Questions to ask before you recommend edits
- What should the reader do after reading this page?
- Who can supply expert input or original data?
- Can templates (not just this page) be changed if the issue is site-wide?

## Self-check before you answer
- Did I confirm intent from the live results?
- Are gaps based on what readers need, not keyword density?
- Did I give exact edits with priorities?
- Did I include internal links in and out?

## Official documentation
- SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Creating helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Influencing your title links: https://developers.google.com/search/docs/appearance/title-link
- Link best practices: https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- Page experience: https://developers.google.com/search/docs/appearance/page-experience

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/content-seo/on-page-seo/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
