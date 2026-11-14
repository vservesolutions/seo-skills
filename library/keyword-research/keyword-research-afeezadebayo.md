---
name: "keyword-research"
description: "Find, size, group and prioritise the searches a business should target: seed lists from customers and products, expansion with Search Console, Google suggestions and third-party tools, labelled volume and difficulty estimates, intent and funnel stage, business value scoring, clustering by shared results, and a target list mapped to existing or new pages. Use whenever someone asks for keyword research, keyword ideas, a keyword list, search volume, keyword difficulty, long-tail keywords, what customers search for, or which topics to write about next."
category: "keyword-research"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/keyword-research/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/content-seo/keyword-research/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · content-seo/keyword-research/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/keyword-research/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Keyword Research

Keyword research is finding out what people type when they need what you offer, how often, what they expect to see, and which of those searches are worth the effort to win. Done well, it gives a short list of targets mapped to pages, not a spreadsheet of thousands of phrases nobody acts on.

This skill builds that list from first-party data first, uses third-party tools for scale, and labels every estimate as an estimate.

## Operating principles
1. **Start with the customer and the business,** not the tool. Products, problems, objections and the words customers use come first.
2. **First-party data beats estimates.** Search Console queries show real demand for your site; tool volumes are modelled guesses.
3. **Group by intent, not by wording.** Keywords that return the same results belong to one page.
4. **Value over volume.** A 90-search phrase that converts can beat a 9,000-search phrase that never will.
5. **Every target maps to a page,** existing or planned. A keyword with no page is a note, not a plan.

## When to use, and when not to
Use it for new sites, new sections or products, content planning, finding gaps against competitors, and checking whether existing pages target the right phrases.

Don't use it to decide page structure for a whole topic (`topical-map`), to analyse a single result page in depth (`search-intent-serp-analysis`) or to write the page (`content-brief`, `seo-content-writing`).

## Inputs to ask for, in one message
1. What the business sells, to whom, in which countries and languages.
2. The products, services or topics that matter most commercially.
3. Search Console query data for 12 to 16 months, if the site exists.
4. Two to five competitors that rank for what you want.
5. Access to or exports from a keyword tool (Semrush, Ahrefs, Google Keyword Planner or similar), if available.
6. Customer language: sales call notes, support tickets, reviews, community questions.

## Workflow

### Step 1. Build seeds
List products, problems solved, use cases, audiences, alternatives and comparisons. Add customer phrases from tickets, reviews and calls. Aim for 20 to 50 seed terms.

### Step 2. Expand
- Search Console: queries with impressions but few clicks, and queries where you rank 8 to 30.
- Google: autocomplete, People also ask and related searches for each seed.
- Tools: matching terms, questions and competitor ranking keywords.
- Communities: Reddit, Quora, industry forums and review sites for real questions.

### Step 3. Clean
Remove duplicates, misspellings you don't want to target, irrelevant meanings and brand terms of competitors you won't target. Normalise singular and plural.

### Step 4. Label each keyword
| Field | Values |
|---|---|
| Volume | Estimated monthly searches, labelled "estimate" with tool and country |
| Difficulty | Tool score, labelled "estimate"; check against the actual results |
| Intent | Informational, commercial investigation, transactional, navigational |
| Funnel stage | Problem aware, solution aware, product aware, ready to buy |
| Business value | 0 none, 1 indirect, 2 relevant, 3 core product or service |
| Current rank | From Search Console or a rank tool |

### Step 5. Cluster
Group keywords that share most of their top 10 results; those share one page. Name each cluster by its main query. Clusters with different result types (guides versus product pages) stay separate even if the words look similar.

### Step 6. Prioritise
Score each cluster: potential (demand times realistic click share), value, and effort (difficulty against your site's authority and existing content). Favour clusters where you already rank on page two or three, or where an existing page needs only improvement.

### Step 7. Map to pages
Assign each priority cluster to an existing URL or a new page, with one main keyword and supporting keywords. Flag clusters already split across two pages for `keyword-cannibalisation`.

## Reading the numbers with care
- Tool volumes are modelled from clickstream and ad data; they can be wrong by a wide margin, especially for small markets and new terms.
- Keyword Planner shows ranges for most accounts and groups close variants.
- Search Console impressions depend on where you rank; low impressions may mean you are not visible yet, not that demand is low.
- Zero-volume terms can still bring visits; customer phrases often appear as zero in tools.

## Worked example
A payroll SaaS for small businesses started with 30 seeds from product pages and support tickets. Expansion produced 2,400 terms; cleaning left 1,100. Clustering by shared results gave 140 clusters. Prioritising by value and current rank highlighted 25 clusters: 9 already ranked on page two through weak pages, 11 needed new comparison and how-to pages, and 5 were product terms mapped to feature pages. The final plan was 25 targets mapped to 25 URLs, with volumes labelled as Semrush estimates for the UK and US.

## Output format
```
# Keyword research: <business>, <market>, <date>
## Summary (clusters found, priority clusters, quick wins)
## Priority clusters
| Cluster | Main keyword | Supporting keywords | Est. volume (tool, country) | Intent | Value | Current rank | Target URL | Action |
## Full keyword list (spreadsheet)
## Notes on data sources and limits
```

## Building seed lists that work
| Source | What it gives you | Example |
|---|---|---|
| Product and feature pages | The core vocabulary | "payroll", "pension auto-enrolment" |
| Sales calls | Buying triggers and objections | "switching from our accountant" |
| Support tickets | Problems and how-to questions | "how to correct a payslip" |
| Reviews (yours and competitors') | Words customers use to praise or complain | "easy for a two-person team" |
| Community threads | Long, real questions | "cheapest way to pay first employee" |
| Competitor navigation | Topics the market expects | Guides, templates, calculators |

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| Brand-new market with no data | Rely on customer interviews, community questions and competitor rankings; label volumes as low-confidence estimates |
| Niche B2B with tiny volumes | Prioritise by value and intent; a handful of searches can be worth more than thousands of consumer clicks |
| Keywords with mixed intent | Check the results; target the intent the business can serve, and note the other |
| Competitor brand terms | Usually avoid targeting directly; comparison pages may suit "X alternatives" searches if they are fair |
| Several languages or countries | Research each market separately; translations rarely match how locals search |
| Seasonal terms | Use Google Trends and 12 to 24 months of data before judging demand |

## Handoffs to related skills
- Turning clusters into a site structure: `topical-map`
- Checking intent for a cluster: `search-intent-serp-analysis`
- Briefing a page: `content-brief`
- Clusters already split across pages: `keyword-cannibalisation`
- Conversational questions for AI search: the AEO & GEO `query-fan-out-mapping` skill

## Quality bar: what excellent research includes
- Clusters grouped by shared results, each with one target URL.
- Every estimate labelled with tool, country and date.
- Priorities explained by value, realistic click share and effort.
- Quick wins identified from existing rankings.
- A short list the team can act on this quarter, not only a long spreadsheet.

## Common mistakes
- Chasing the biggest volumes with no link to the product.
- Presenting tool volumes as facts.
- One page per keyword variant, which creates cannibalisation.
- Ignoring Search Console queries the site already shows for.
- Delivering a long list with no page mapping or priority.

## Questions to ask before you recommend targets
- Which products or services should get traffic first?
- Which countries and languages count?
- What content already exists, and what can the team produce each month?
- How strong is the site compared with the sites ranking now?

## Self-check before you answer
- Is every estimate labelled with its tool and country?
- Are clusters based on shared results, not just shared words?
- Is every priority cluster mapped to one page?
- Did I rank by value and effort, not volume alone?

## Official documentation
- Google Search Console Performance report: https://support.google.com/webmasters/answer/7576553
- Google Keyword Planner: https://support.google.com/google-ads/answer/7337243
- How Google Search works: https://developers.google.com/search/docs/fundamentals/how-search-works
- Google Trends: https://trends.google.com/

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/content-seo/keyword-research/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
