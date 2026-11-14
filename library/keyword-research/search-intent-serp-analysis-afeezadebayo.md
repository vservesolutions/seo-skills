---
name: "search-intent-serp-analysis"
description: "Work out what a searcher wants from a query by reading the live results: dominant and mixed intent, content type and format, angle, depth, freshness, SERP features (AI Overviews, featured snippets, People also ask, video, local pack, shopping), who ranks and why, and what a page must offer to compete, turned into a clear page recommendation. Use whenever someone asks what Google wants for a keyword, why a page doesn't rank despite good content, which content type to create, whether to target a query with a blog post or a product page, or how to analyse the SERP."
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/search-intent-serp-analysis/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/content-seo/search-intent-serp-analysis/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · content-seo/search-intent-serp-analysis/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/search-intent-serp-analysis/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Search Intent and SERP Analysis

The results page is Google's current answer to the question "what do people searching this want?" Before writing or fixing a page, read that answer. A brilliant guide won't rank for a query where Google shows product listings, and a sales page won't rank where it shows how-to articles.

This skill reads the live results for a query, describes the intent and the format that wins, and says what a page must offer to compete.

## Operating principles
1. **The results are the evidence.** Describe what ranks now, not what you think should rank.
2. **Intent has four layers:** the goal (learn, compare, buy, go somewhere), the content type, the format and the angle.
3. **Mixed results mean mixed intent.** When Google shows several types, decide which slice you can serve best.
4. **Location, language and device change results.** Check the market you actually target.
5. **Match the intent, then beat the results.** Matching gets you considered; being clearly more useful gets you chosen.

## When to use, and when not to
Use it before writing or rewriting any page, when a good page doesn't rank, when choosing between a blog post and a landing page, when results changed after an update, and when deciding whether a keyword is worth targeting at all.

Don't use it to build a full keyword list (`keyword-research`) or to plan a whole topic (`topical-map`).

## Inputs to ask for, in one message
1. The query or queries, and the target country, language and device.
2. The page you want to rank, if it exists.
3. Your business type and what you can realistically publish (a guide, a tool, a product page, a comparison).
4. Screenshots or exports of the results if the agent can't search the target market itself.

## Workflow

### Step 1. Capture the results
Record the top 10 organic results and every SERP feature in order: AI Overview, featured snippet, People also ask, video, images, local pack, shopping, news, forums, knowledge panel. Note the date, country and device.

### Step 2. Classify each result
| Field | Examples |
|---|---|
| Site type | Brand, publisher, marketplace, forum, government, tool |
| Content type | Guide, listicle, comparison, product or category page, tool, template, video |
| Format | Steps, table, checklist, long-form, calculator |
| Angle | For beginners, current year, cheapest, best for a use case, by an expert |
| Depth | Word count range, number of subtopics covered |
| Freshness | Published or updated date |

### Step 3. Name the dominant intent
State the share of results by content type, for example "7 of 10 are comparison listicles; 2 are vendor pages; 1 is a forum thread". The largest group is the dominant intent; a strong second group is a secondary intent.

### Step 4. Read the SERP features
| Feature | What it tells you |
|---|---|
| AI Overview | Google answers part of the query directly; aim to be cited and to offer what the summary can't |
| Featured snippet | A short, direct answer format wins: a definition, list or table |
| People also ask | Subquestions the page should answer |
| Video results | Searchers want to see the task done |
| Local pack | Local intent; a location page or Business Profile matters |
| Shopping or product grids | Transactional intent; category and product pages compete |
| Forum results | Searchers want first-hand experience and opinions |

### Step 5. Find the common ground and the gaps
List what most top pages cover (the table stakes) and what few or none cover well: original data, worked examples, current prices, screenshots, expert view, a tool or template.

### Step 6. Check who ranks
Note the type and strength of ranking sites. If the top results are all large brands with strong links, the query may be a long-term target; if forums and small sites rank, there is room for a better page.

### Step 7. Recommend the page
State the content type, format, angle, sections that must be covered, the gap to fill, the SERP features to target and whether an existing page fits or a new one is needed.

## Intent shifts
Results change. Re-check intent for important queries every few months and after core updates. A query that showed guides last year may now show tools or forums, and the page needs to change with it.

## Worked example
A project management SaaS wanted to rank its feature page for "gantt chart template". The results in the UK showed 8 template downloads (spreadsheets and printable files), 1 video and 1 tool page; People also ask asked how to make a gantt chart in Excel and Google Sheets. The feature page didn't match. The recommendation: a free downloadable template page with Excel and Google Sheets versions, a short how-to with screenshots, a video, and a clear link to the product for teams that outgrow a spreadsheet. The feature page stayed focused on product queries.

## Output format
```
# SERP analysis: "<query>", <country>, <device>, <date>
## Dominant intent and secondary intent
## SERP features in order
## Top 10 results
| # | URL | Site type | Content type | Format | Angle | Depth | Updated |
## Table stakes (what most pages cover)
## Gaps (what you can offer that others don't)
## Recommendation (page type, format, angle, sections, features to target, existing or new page)
```

## Reading mixed and unusual results
| Pattern in the results | What it usually means | Recommendation |
|---|---|---|
| Guides and product pages split evenly | Mixed intent: learn and buy | Choose the slice you serve best; link the other page type |
| Forums and Reddit threads high up | Searchers want first-hand experience | Add real experience, opinions and specifics |
| Mostly big brands | High trust or authority bar | Long-term target; win related long-tail first |
| Very recent dates everywhere | Freshness matters | Plan a review schedule and dated updates |
| Tools and calculators | Searchers want to do, not read | Build a tool or template, with explanation |
| Video carousel near the top | Visual demonstration helps | Add a video and video markup |
| Local pack | Local intent | Location pages and Business Profile, not a blog post |

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Results differ by device | Analyse the device most of your audience uses; note the difference |
| Results differ by country | Run the analysis per target market |
| Personalised or logged-in results | Use a clean browser profile or a tool that fetches neutral results |
| Query is ambiguous (several meanings) | Identify which meaning dominates; don't target a meaning Google rarely shows |
| AI Overview answers the question fully | Aim to be cited, and offer what a summary can't: tools, data, depth |

## Handoffs to related skills
- Writing the brief from the analysis: `content-brief`
- Fixing an existing page that mismatches intent: `on-page-seo`
- Writing titles that match intent: `title-tags-meta-descriptions`
- Intent shift on older pages: `content-refresh`
- AI Overview and AI Mode specifics: the AEO & GEO `ai-overviews-ai-mode` skill

## Quality bar: what an excellent analysis includes
- Intent stated with counts from real results, with date, country and device.
- Every SERP feature recorded with what it implies.
- Table stakes separated from real gaps.
- A recommendation specific enough to brief a writer today.

## Common mistakes
- Writing a blog post for a query that shows product pages, or the reverse.
- Checking results in the wrong country or while logged in with personal history.
- Copying the structure of the top result instead of improving on it.
- Ignoring forum results as a sign that people want first-hand experience.
- Treating intent as fixed forever.

## Questions to ask before you recommend a page
- Which market and device matter most?
- Can the business produce the format that ranks (a tool, a template, original data)?
- Is there an existing page that already fits the intent?

## Self-check before you answer
- Did I base intent on the actual results, with counts?
- Did I record SERP features and what each implies?
- Did I separate table stakes from real gaps?
- Is the recommendation specific enough to brief a writer?

## Official documentation
- How Google Search works: https://developers.google.com/search/docs/fundamentals/how-search-works
- Creating helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Featured snippets and your website: https://developers.google.com/search/docs/appearance/featured-snippets
- Search Quality Rater Guidelines (needs met and intent): https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/content-seo/search-intent-serp-analysis/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
