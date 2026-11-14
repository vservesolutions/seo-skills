---
name: "content-brief"
description: "Write SEO content briefs a writer can follow without guessing: the reader and their goal, main and supporting queries, intent and format from the live results, a heading outline, the questions to answer, the original evidence and expertise to include, internal links, title and meta options, word range, and acceptance checks before publishing. Use whenever someone asks for a content brief, article brief, writer brief, outline for an SEO article, or wants to hand a topic to a freelance writer or an AI writer with clear instructions."
category: "site-architecture-internal-links"
platforms: ["claude-code"]
platform_source: "declared"
repo: "afeezadebayo/marketing-skills"
repo_url: "https://github.com/afeezadebayo/marketing-skills"
source: "https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/content-brief/SKILL.md"
raw_source: "https://raw.githubusercontent.com/afeezadebayo/marketing-skills/HEAD/content-seo/content-brief/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "CC-BY-4.0"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · afeezadebayo/marketing-skills · content-seo/content-brief/SKILL.md · CC-BY-4.0
     Source: https://github.com/afeezadebayo/marketing-skills/blob/HEAD/content-seo/content-brief/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Content Briefs

A brief is the contract between the person who chose the topic and the person who writes it. A good brief means the first draft is close to publishable: it matches what searchers want, covers what the page must cover, includes evidence only the business can provide and links where it should. A thin brief produces a generic article that looks like every other result.

This skill turns a target query into a brief a human or AI writer can follow.

## Operating principles
1. **Start from the reader, not the keyword.** Who is searching, what do they already know, and what do they need to do next?
2. **Base the format on the live results.** Run `search-intent-serp-analysis` first, or do the same checks inside the brief.
3. **Brief the gap, not the copy.** Name what top results miss and how this page will be more useful.
4. **Require first-hand evidence.** Data, screenshots, examples, quotes from the expert: things a generic writer or model can't invent.
5. **Make it checkable.** End with acceptance checks so an editor can approve or return the draft quickly.

## When to use, and when not to
Use it for every new SEO page and for major rewrites, especially when the writer is external or an AI model.

Don't use it to choose topics (`keyword-research`, `topical-map`) or to write the page itself (`seo-content-writing`).

## Inputs to ask for, in one message
1. The target query and market, and the page's place in the topical map if there is one.
2. The business, product and the action the reader should take after reading.
3. The subject-matter expert available and what evidence they can supply.
4. Existing pages on the topic, to avoid overlap and to link.
5. Brand voice and style rules.

## Workflow

### Step 1. Define the reader and the job
One paragraph: who the reader is, what problem brought them here, what they know already and what they should be able to do after reading.

### Step 2. Set the queries
Main query, 3 to 10 supporting queries and questions from People also ask, Search Console and keyword tools. Confirm none of them belong to another existing page.

### Step 3. Read the results
Summarise the dominant intent, content type, format, typical depth, freshness and SERP features. List the table stakes and the gaps.

### Step 4. Outline
Write the H1 and the H2 and H3 structure in reading order. Under each heading, list the points to make and the questions to answer. Put the direct answer near the top for queries with a clear answer.

### Step 5. Specify evidence and expertise
For each section, say what proof to include: a statistic with its source, a screenshot, a worked example, a quote or a test. Name who provides it.

### Step 6. Specify links
List 3 to 8 internal links out (with suggested anchors) and the pages that should link in after publishing. List the external sources to cite.

### Step 7. Write the metadata options
Two or three title options, two meta description options and a short slug, following `title-tags-meta-descriptions`.

### Step 8. Add acceptance checks
The checks the editor will apply before publishing.

## Brief template
```
# Brief: <working title>
Target query: <query> | Market: <country, language> | Page type: <guide, comparison, template...>
Reader: <who, their situation, what they need to do next>
Purpose for the business: <the action we want, the product it leads to>
Supporting queries and questions: <list>
SERP summary: dominant intent, format, depth, features (AI Overview, snippet, PAA, video)
Table stakes: <what every top page covers>
Our angle and gap: <what we add that others don't>
Outline:
  H1:
  H2: ... (points, questions, evidence, owner)
Evidence required: <data, screenshots, examples, expert quotes, with owners>
Internal links out: <URL, anchor> | Links in after publishing: <URL>
Sources to cite: <official or primary sources>
Title options: <2-3> | Meta options: <2> | Slug: <slug>
Length: <range based on the results, not a target to pad to>
Voice and style: <rules>
Acceptance checks: <list>
```

## Acceptance checks to include
- The first two paragraphs answer the main question or state what the reader will get.
- Every heading in the outline is covered, or the change is explained.
- Every statistic has a named source and date.
- Required evidence is present and real.
- Internal links are in place with descriptive anchors.
- No sections are padded to reach a word count.
- Style rules are followed.

## Briefing an AI writer
Give the model the full brief, the expert's notes and the evidence files, and tell it not to invent statistics, quotes, product features or examples. Ask it to mark anything it couldn't verify. A human editor still checks facts and adds first-hand material before publishing.

## Worked example
A cybersecurity company briefed "how to write an incident response plan". The results showed long guides with templates; People also ask covered the phases, who should be involved and how often to test. Most top pages offered a generic template; none showed a real tabletop exercise. The brief asked for a downloadable template, a walkthrough of one anonymised exercise run by the company's head of security with timings, a phase-by-phase outline, links to the company's incident response service page and to two related guides, and citations to NIST guidance. The first draft passed review with minor edits.

## Brief types
| Page type | What the brief must add |
|---|---|
| How-to guide | Steps in order, the outcome of each, screenshots needed, common errors |
| Comparison or "best of" | Selection criteria, honest table columns, how each option was tested, disclosure rules |
| Product or feature page | Buyer questions, proof (customers, numbers), objections, pricing facts, CTA |
| Definition or explainer | A 40 to 60 word definition, examples, related terms to link |
| Template or tool page | The asset itself, how to use it, when to move to the product |
| Refresh of an existing page | Sections to keep, change and cut; facts to update; what must not move (URL) |

## Edge cases and judgement calls
| Situation | What to do |
|---|---|
| No expert available | Narrow the angle to what the team knows first-hand, or delay the page |
| Regulated topic | Add a named reviewer, review date and sources requirement |
| Results show mixed intent | Brief one intent clearly and link to the page that serves the other |
| Writer is an AI model | Include source material and "don't invent" rules; require a list of unverified claims |
| Very competitive query | Brief original data or a tool as the differentiator, not just more words |

## Handoffs to related skills
- Choosing what to brief: `keyword-research`, `topical-map`
- Results summary: `search-intent-serp-analysis`
- Writing the page: `seo-content-writing`
- Titles and metas: `title-tags-meta-descriptions`
- Evidence and authorship standards: `eeat-content-quality`
- Making the page citable in AI answers: the AEO & GEO `answer-ready-content` skill

## Quality bar: what an excellent brief includes
- A reader and a job the writer can picture.
- An angle that is clearly better than the current results.
- Evidence requirements with named owners.
- Links in and out, metadata options and acceptance checks.
- Nothing the writer has to guess.

## Common mistakes
- Briefs that list keywords but not the reader's goal.
- Copying competitor headings without naming the gap.
- Fixed word counts that encourage padding.
- No evidence requirements, so the draft is generic.
- No internal links or metadata, so the editor adds them late.

## Questions to ask before you write the brief
- Who is the expert, and what can they share?
- What should the reader do after reading?
- Which existing pages must this page not overlap with?

## Self-check before you answer
- Could a writer start without asking questions?
- Is the angle clearly different from the top results?
- Are evidence owners named?
- Are acceptance checks specific and testable?

## Official documentation
- Creating helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search's guidance on AI-generated content: https://developers.google.com/search/blog/2023/02/google-search-and-ai-content
- Control your title links: https://developers.google.com/search/docs/appearance/title-link
- Control your snippets: https://developers.google.com/search/docs/appearance/snippet

---
Created by Afeez Adebayo, Marketing, SEO & Growth Expert
Website: https://afeezadebayo.com
LinkedIn: https://www.linkedin.com/in/afeez-adebayo/
X: https://x.com/za_icon
Source: https://afeezadebayo.com/skills-md/marketing/content-seo/content-brief/

Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). You may copy, share and adapt this skill, including for commercial use, as long as you credit Afeez Adebayo and link to the source URL above. Keep this notice in any copy or adapted version.
