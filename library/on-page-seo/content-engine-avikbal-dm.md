---
name: "content-engine"
description: "Turn a demand map into content that ranks, gets cited, and produces leads. Runs gap analysis against real competitors, builds E-E-A-T and citability into every piece, sequences the publishing queue by time-to-rank, and specifies the images and diagrams each article needs. Use when someone wants a content strategy, a content brief, a content gap analysis, help deciding what to publish first, E-E-A-T improvement, or article structure that earns rankings and AI citations. Everything is scored against pipeline, not word count."
category: "on-page-seo"
platforms: ["unspecified"]
platform_source: "none"
repo: "avikbal-dm/claude-seo-skills"
repo_url: "https://github.com/avikbal-dm/claude-seo-skills"
source: "https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/content-engine/SKILL.md"
raw_source: "https://raw.githubusercontent.com/avikbal-dm/claude-seo-skills/HEAD/plugins/growth-os/skills/content-engine/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-12"
---

<!-- Unspecified skill · avikbal-dm/claude-seo-skills · plugins/growth-os/skills/content-engine/SKILL.md · MIT
     Source: https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/content-engine/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Content Engine

## What this does

This skill decides what to write, in what order, and how to build it so it ranks, earns AI citations, and moves buyers. It works off the demand map, fills the gaps competitors are exploiting, and sequences the queue so the fastest wins ship first.

Content is a means, not the goal. A page that ranks and reads well but never produces a lead is a cost. Judge every piece against the pipeline it can influence.

## When to use it

Use it after `search-demand-map` to convert clusters into briefs and a publishing order, to audit existing content for gaps and decay, or to build a single high-stakes piece properly. For pure rewriting and humanizing, pair it with a dedicated writing skill.

## Data you pull

- **Ahrefs**: competitor top pages, the terms they rank for that the site does not, content gaps at the cluster level, and the referring domains that signal which pieces earn links.
- **Google Search Console**: existing pages that rank just off the first page, pages losing impressions over time (decay), and the queries a page already serves but does not satisfy.
- **GA4 and lead data**: which existing content sits on the path to a lead, so new content can be modeled on what already converts, not just what attracts.

## Method

### 1. Gap analysis against real competitors

Compare the site's coverage against the competitors who actually win the SERPs that matter. Find the clusters they own and the site does not. Score each gap by traffic opportunity and, more importantly, by how close the topic sits to a buying decision.

### 2. Decay before new

Before writing anything new, find the pages that already rank and are slipping. Refreshing a decaying page that once ranked is usually faster and cheaper than a new piece. Handle decay first.

### 3. Sequence by time-to-rank

Order the queue by how fast each piece can rank, not by topic neatness. Weigh keyword difficulty, the strength of the competitors holding the SERP, the site's authority on the topic, and whether a SERP feature is winnable. Quick wins first builds the authority that carries the harder pieces.

### 4. Build E-E-A-T and citability in

For each brief, specify the experience and expertise signals: a named author with credentials, first-hand detail, original data or examples, and clear sourcing. Structure for citation: a direct answer near the top, scannable sections, and self-contained passages an AI engine can lift. This is where content becomes citable, not just rankable.

### 5. Specify the visuals

Name the images and diagrams each piece needs, with their purpose and alt text. Technical content earns more AI Overview selection with relevant diagrams, so a flowchart or annotated screenshot is a ranking input, not decoration.

### 6. Tie the brief to a conversion

Every brief states the next step it should drive: the related commercial page it links to, or the offer it sets up. Content with no path to a lead is a hobby.

## Output

A scored content plan: the gaps worth filling, the decaying pages worth refreshing, a first-next-later publishing order with the reasoning, and a brief per piece covering intent, structure, E-E-A-T signals, visuals, internal links, and the conversion it serves.

## Guardrails

- More words is not the goal. Answering the query fully and getting cited is.
- Refresh before you write new, when the data supports it.
- A brief without a conversion path is incomplete.
- Specific beats generic. Original data, real examples, and first-hand detail are what rank and get cited in an AI-search world.

## Hands off to

`structured-data-engine` to mark up the piece for rich results, `ai-search-visibility` to make it citable in AI answers, `authority-engine` when a piece needs links to compete, and `conversion-cro` to make sure the page converts the traffic it earns.

---

## About the author

Avik Bal is a B2B digital marketing practitioner specializing in web architecture, SEO, content strategy, and marketing analytics. He has helped enterprise software, fintech, and technology companies drive growth through scalable digital marketing programs. Avik is the author of *CITED: The Growth Operating System for AI Search*.

Part of the Growth Operating System. https://github.com/avikbal-dm/claude-seo-skills
