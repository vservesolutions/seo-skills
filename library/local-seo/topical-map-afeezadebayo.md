---
name: "topical-map"
description: "Plan a topic the way search engines and readers understand it: define the core entity and audience, break the topic into pillars, clusters and supporting pages with one intent each, map existing pages, find gaps, set hub-and-spoke internal links, and sequence publishing so authority builds where the business needs it. Use whenever someone asks for a topical map, topic clusters, pillar pages, content hubs, a content plan or editorial calendar for SEO, topical authority, or how to organise a blog or resource centre."
category: "local-seo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/topical-map/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/content-seo/topical-map/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · content-seo/topical-map/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/topical-map/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Topical Maps and Content Clusters

A topical map is a plan of every page a site needs to cover a subject properly, how those pages relate to each other and in what order to publish them. It turns a keyword list into a structure: a hub that covers the topic broadly, clusters that cover each subtopic, and links that tie them together.

This skill builds the map from the business outward, so the site becomes the obvious source on the topics it sells, rather than a pile of loosely related posts.

## Operating principles
1. **Business first.** Topics are chosen because they lead to the product, service or audience the business serves.
2. **One page, one intent.** Each node in the map answers one main need; overlapping nodes are merged before anything is written.
3. **Cover the topic, not the keyword list.** Include the subtopics a knowledgeable reader expects, even when tools show low volume.
4. **Links are part of the plan.** Every page knows its parent, siblings and children before it is written.
5. **Depth before breadth.** Finish a cluster before starting the next; a half-covered topic signals little.

## When to use, and when not to
Use it for new sites and sections, resource centres, blog resets, entering a new product area, and when an existing blog has no structure.

Don't use it for one-off pages (`content-brief`), for the link mechanics of an existing site (the Technical SEO internal linking skill) or for listing keywords without structure (`keyword-research`).

## Inputs to ask for, in one message
1. The business, its products or services, audience and markets.
2. The topic or topics to map, and how they connect to revenue.
3. Keyword research or Search Console data, if available.
4. A list of existing pages with URLs, titles and main queries.
5. Competitors seen as authorities on the topic.
6. Publishing capacity per month and any deadlines.

## Workflow

### Step 1. Define the core
Write one sentence: the topic, the audience and why the business is credible on it. List the main entities: products, concepts, tools, people, standards and problems that belong to the topic.

### Step 2. Break the topic down
| Level | Role | Example (topic: payroll for small businesses) |
|---|---|---|
| Pillar or hub | Broad guide or landing page for the whole topic | Payroll for small businesses |
| Cluster | A subtopic with its own set of queries | Payroll taxes, running payroll, payroll software, compliance |
| Supporting page | One specific question, task or comparison | How to calculate employer national insurance; best payroll software for under 10 staff |

Sources for subtopics: People also ask, related searches, competitor navigation, textbooks and standards, customer questions, keyword clusters.

### Step 3. Assign intent and format
For each node: main query, intent, content type (guide, comparison, template, tool, glossary entry, product page) and the funnel stage it serves.

### Step 4. Map existing content
Match existing URLs to nodes. Mark each node: covered well, covered weakly (needs a refresh), split across pages (needs merging) or missing.

### Step 5. Plan links
Every supporting page links up to its cluster page and pillar; cluster pages link down to all their supporting pages and across to related clusters; commercial pages are linked from the guides that lead to them, with descriptive anchors.

### Step 6. Prioritise and sequence
Score nodes on business value, demand, current position and effort. Publish in cluster batches: the cluster page plus its most valuable supporting pages first, then fill in.

### Step 7. Set review points
After each batch, check impressions and rankings for the cluster in Search Console after 8 to 12 weeks, and adjust the next batch.

## Topical authority, plainly
Google has not published a "topical authority" score. In practice, sites that cover a subject thoroughly, accurately and with first-hand expertise tend to rank more pages on that subject and earn more links. Treat the map as a way to be useful and complete, not as a formula.

## Worked example
A cross-border payments company wanted to rank for international money transfer topics. The map defined one hub (sending money abroad), six clusters (fees and exchange rates, transfer times, safety and regulation, methods, country corridors and business payments) and 74 supporting pages. Mapping existing content found 19 pages covering 23 nodes, 4 pairs that overlapped and 51 missing nodes. The first quarter shipped the fees cluster and the 10 highest-value corridor pages, all linked to the relevant product pages.

## Output format
```
# Topical map: <topic>, <business>, <date>
## Core statement and entities
## Map
| Level | Node | Main query | Intent | Format | Parent | Existing URL | Status | Priority |
## Link plan (parents, siblings, commercial links)
## Publishing sequence by batch, with review dates
```

## Sizing the map
| Site situation | Typical scope | Advice |
|---|---|---|
| New site, small team | 1 pillar, 3 to 5 clusters, 20 to 40 pages | Finish one cluster before starting the next |
| Established blog without structure | Map existing posts first | Merges and refreshes often beat new pages |
| Large resource centre | Several pillars | Assign an owner per pillar |
| Programmatic sections | Templates as nodes | Map templates and their index pages, not every URL |

## Map maintenance
| Trigger | Action |
|---|---|
| New product or feature | Add a cluster or nodes linked to the product page |
| Node page published | Update its status and add planned links from parent and siblings |
| Node underperforms after six months | Check intent, depth and links before adding more nodes |
| Two nodes start competing | Merge them and redirect |
| Quarterly review | Re-check demand, competitors and the publishing sequence |
Keep the map in a shared sheet or tool with columns for node, intent, parent, target URL, status, owner and last review date.

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| A topic leads to no product | Keep it only if it builds trust with the right audience; otherwise drop it |
| Two nodes share most results | Merge them into one page |
| Competitors cover a subtopic you can't speak to credibly | Leave it out or partner with an expert; thin coverage hurts trust |
| Regulated topics (finance, health, legal) | Plan expert review into the sequence and budget |
| Product pages and guides overlap | Give guides the learning intent and link to product pages for buying intent |

## Handoffs to related skills
- Demand and clusters: `keyword-research`
- Intent for each node: `search-intent-serp-analysis`
- Briefs for each page: `content-brief`
- Overlaps between existing pages: `keyword-cannibalisation`
- Weak existing pages: `content-refresh`
- Implementing links on the live site: the Technical SEO `internal-linking` skill
- Conversational questions for AI search: the AEO & GEO `query-fan-out-mapping` skill

## Quality bar: what an excellent map includes
- A core statement that ties the topic to the business.
- One intent and one parent per node, with existing pages mapped.
- A link plan written before writing starts.
- A publishing sequence the team can actually deliver, with review dates.
- Clear reasons for what was left out.

## Common mistakes
- Mapping keywords instead of topics, creating a page for every variant.
- Topics with no route to the product or audience.
- Publishing scattered pages across many clusters at once.
- Leaving out internal links until after publishing.
- Treating a published map as finished; it changes as results change.

## Questions to ask before you recommend a map
- Which topics lead to revenue, and which build trust earlier in the journey?
- How many pages can the team publish and maintain each month?
- What expertise and evidence can the business show on each cluster?

## Self-check before you answer
- Does every node have one intent and one parent?
- Is existing content mapped, with merges flagged?
- Are links planned before writing starts?
- Is the sequence realistic for the team's capacity?

## Official documentation
- Creating helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- SEO Starter Guide (organise your site): https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Link best practices: https://developers.google.com/search/docs/crawling-indexing/links-crawlable

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/content-seo/topical-map/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
