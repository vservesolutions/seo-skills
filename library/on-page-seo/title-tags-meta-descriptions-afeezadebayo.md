---
name: "title-tags-meta-descriptions"
description: "Write, audit and test title tags and meta descriptions that match intent, earn clicks and survive Google rewrites: length by pixels not characters, query and brand placement, templates for large sites, duplicates and missing tags, title-to-H1 alignment, CTR analysis from Search Console, and before-and-after tests. Use whenever someone asks to write or fix title tags, SEO titles, meta descriptions, page titles in Google, low click-through rate, Google rewriting titles, or bulk title templates for category or product pages."
category: "on-page-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/title-tags-meta-descriptions/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/content-seo/title-tags-meta-descriptions/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · content-seo/title-tags-meta-descriptions/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/title-tags-meta-descriptions/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Title Tags and Meta Descriptions

The title tag is the strongest on-page hint about what a page covers and usually becomes the clickable headline in search results. The meta description doesn't affect rankings, but it often becomes the snippet under that headline and can win or lose the click. Google rewrites both when it thinks another text describes the page better, so the job is to write versions accurate and useful enough that Google keeps them.

This skill writes them page by page or as templates, audits them across a site and measures the effect on clicks.

## Operating principles
1. **Describe the page truthfully.** The title says what the page is; the description says what the reader gets. Misleading titles get rewritten and bounce.
2. **Lead with the query's meaning.** Put the main topic early, in the words searchers use.
3. **Be specific.** Numbers, years, formats and audiences beat adjectives.
4. **Unique per page.** Duplicate titles confuse search engines and readers.
5. **Measure clicks, not opinions.** Judge changes by Search Console CTR for the same queries and positions.

## Length
Google truncates by width in pixels, not characters. As a working guide, titles of about 50 to 60 characters and descriptions of about 140 to 160 characters usually display in full on desktop, but wide letters, capitals and mobile layouts change that. Put the important words first so truncation doesn't hide them.

## When to use, and when not to
Use it for new pages, low-CTR pages, missing or duplicate tags, Google rewriting titles badly, rebrands and bulk templates for category, product, location or programmatic pages.

Don't use it to fix a page whose content doesn't match the query; fix the page first (`on-page-seo`, `search-intent-serp-analysis`).

## Inputs to ask for, in one message
1. The URLs, their main queries and the page content or H1.
2. Search Console data by page and query: impressions, clicks, CTR, average position.
3. Brand name and how it should appear.
4. A crawl export with current titles, descriptions and H1s, for audits.
5. Any character limits set by the CMS or style guide.

## Workflow

### Step 1. Audit
From the crawl, list missing, duplicate, very long, very short and boilerplate titles and descriptions, and titles that don't match the H1 or the main query.

### Step 2. Find the click opportunities
In Search Console, find pages with high impressions and CTR well below similar pages at the same average position. These are the first rewrites.

### Step 3. Check the live results
See how competing titles are written for the query and how Google shows your current title. If Google rewrites it, note what it uses instead; that is a clue to what it thinks the page is about.

### Step 4. Write the title
Formula to start from, not to follow blindly:
`[Main topic in searchers' words]: [specific benefit, format or qualifier] | [Brand]`
- Keep the brand at the end, or leave it out when space is tight and the brand isn't searched.
- Use the qualifiers searchers use: year for time-sensitive topics, "template", "for beginners", "vs".
- Match the H1's meaning without copying it word for word if the H1 is longer.

### Step 5. Write the description
One or two sentences: what the page offers, a concrete detail and a reason to click. Include the main topic naturally; Google bolds matching words. End with an action where it fits.

### Step 6. Templates for large sites
Build templates from structured fields with fallbacks, for example `{Product name} {Key attribute}: {Price from} | {Brand}`. Check outputs for empty fields, odd plurals and duplicates before release.

### Step 7. Test and measure
Change a batch of comparable pages, keep a similar batch unchanged, and compare CTR for the same queries over 4 to 6 weeks, controlling for position changes.

## Why Google rewrites titles
Google may replace a title that is too long, stuffed with keywords, the same across many pages, missing, out of date or doesn't match the content. It may use the H1, prominent text or anchor text instead. Fix the cause rather than fighting the rewrite.

## Examples
| Page | Weak title | Better title |
|---|---|---|
| Guide | SEO Tips and Tricks for Your Website, Best SEO Guide | Technical SEO Checklist: 42 Checks for 2026 - Brand |
| Product category | Shoes, Shoes Online, Buy Shoes | Women's Running Shoes: 120+ Styles, Free Returns - Brand |
| Local service | Home, Plumber | Emergency Plumber in Leeds, 24/7, Fixed Call-Out Fee |
| Comparison | Tool A vs Tool B | Tool A vs Tool B: Pricing, Features and Which to Choose |

## Worked example
A recipe site's top 200 pages averaged 2.1% CTR at an average position of 4 (Search Console, 28 days). Titles were the dish name only. New titles added the time and a key attribute, for example "Chicken Tikka Masala: 40-Minute Restaurant-Style Recipe". After six weeks, the changed pages averaged 3.4% CTR at the same average position, while a held-back group of 50 similar pages stayed flat.

## Output format
```
# Titles and descriptions: <site>, <date>
## Audit summary (missing, duplicate, long, mismatched)
## Rewrites
| URL | Main query | Impr. | CTR | Pos. | Current title | New title (chars) | Current description | New description (chars) |
## Templates (if any) with field rules and fallbacks
## Test plan and measurement dates
```

## Patterns by page type
| Page type | Title pattern | Description pattern |
|---|---|---|
| Guide | [Topic]: [specific outcome or format] | What the reader will be able to do, plus one concrete detail |
| Comparison | [A] vs [B]: [criteria] and which to choose | Who each option suits and the deciding factor |
| Category | [Category] for [audience]: [range or benefit] | Range, key filters, delivery or returns promise |
| Product | [Brand] [Product] [key attribute] | The main benefit, a proof point and price or availability if stable |
| Local service | [Service] in [Place], [differentiator] | Area covered, response time, how to book |
| Template or tool | Free [template or tool]: [what it does] | Formats available and how long it takes to use |

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Page ranks for several query groups | Write for the group with most impressions and value; cover others in the H1 or description |
| Brand is long | Use a short brand form or drop it on long titles |
| Prices change often | Keep prices out of titles; use stable benefits |
| Google keeps rewriting a good title | Check the H1 and main heading match; shorten; remove repeated phrases |
| Very low impressions | Titles won't fix demand; look at ranking and intent first |
| Legal or regulated claims | Avoid superlatives and guarantees that need proof |

## Testing checklist
- Choose comparable pages (same template, similar positions).
- Change one thing at a time (title or description, not both, when you need clean results).
- Keep a held-back group.
- Compare the same queries over four to six weeks.
- Account for position changes before crediting the title.

## Handoffs to related skills
- Intent mismatch: `search-intent-serp-analysis`
- Page content gaps: `on-page-seo`
- Duplicate titles from overlapping pages: `keyword-cannibalisation`
- Metadata for new pages: `content-brief`
- Duplicate titles caused by parameter URLs: the Technical SEO `canonicalization` skill

## Common mistakes
- Stuffing several keyword variants into one title.
- The same title or description across many pages.
- Clickbait that the page doesn't deliver.
- Counting characters instead of checking how the result displays.
- Judging a change after a few days or without considering position.

## Questions to ask before you write
- Should the brand appear on every page, and in what form?
- Which pages matter most for clicks and revenue?
- Can the CMS produce templates with fallbacks?

## Self-check before you answer
- Does each title describe the page truthfully with the topic first?
- Are titles and descriptions unique?
- Did I base priorities on Search Console CTR and position?
- Is there a measurement plan?

## Official documentation
- Influencing your title links in search results: https://developers.google.com/search/docs/appearance/title-link
- Control your snippets in search results: https://developers.google.com/search/docs/appearance/snippet
- Search Console Performance report: https://support.google.com/webmasters/answer/7576553

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/content-seo/title-tags-meta-descriptions/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
