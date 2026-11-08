---
name: "seo-content-brief"
description: "Use this skill when you need a B2B SEO content brief that a writer can turn into a page that ranks and converts: \"write an SEO brief\", \"content brief for this keyword\", \"plan a blog post that ranks\", \"outline for a landing page\". Analyses search intent, what currently ranks and what it misses, picks the angle and format, builds the outline with headings, questions to answer, entities, internal links, schema and the conversion path, and sets the success metrics."
category: "content-strategy"
platforms: ["claude-code"]
platform_source: "declared"
repo: "prosyo-ai/gtm-skill"
repo_url: "https://github.com/prosyo-ai/gtm-skill"
source: "https://github.com/prosyo-ai/gtm-skill/blob/HEAD/plugin/skills/seo-content-brief/SKILL.md"
raw_source: "https://raw.githubusercontent.com/prosyo-ai/gtm-skill/HEAD/plugin/skills/seo-content-brief/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 12
collected: "2026-11-08"
---

<!-- Claude Code skill · prosyo-ai/gtm-skill · plugin/skills/seo-content-brief/SKILL.md · MIT
     Source: https://github.com/prosyo-ai/gtm-skill/blob/HEAD/plugin/skills/seo-content-brief/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

Use this before any page is written for search. A good brief makes the writer's job specific: who it is for, what it must answer better than what ranks today, and what the reader should do next.

## Inputs

- The target keyword or topic.
- Product, audience and the problem it connects to.
- Existing pages on the site (to link and avoid cannibalising).

## The play

### 1. Read the intent
Look at what ranks today and classify the intent: informational (how to, what is), commercial (best, vs, alternatives, tools), transactional (pricing, template, free tool) or navigational. The format of the top results is the format searchers expect; fight it only with a reason.

### 2. Find the gap
For the top results, note what they cover, how deep they go, what they miss, and how fresh they are. Your page wins on one of: depth, original data, a better tool or template, expert experience, or clearer structure.

### 3. Choose angle and format
One sentence: "The <format> that <does what the others don't> for <audience>."

### 4. Build the outline
Read [references/brief-template.md](references/brief-template.md) for the full template. It covers:
- Title tag (under 60 characters) and meta description (under 155).
- H1 and H2/H3 structure, each with what it must say.
- Questions to answer (from search suggestions and buyer calls), each answered in the first sentence of its section.
- Entities and terms that should appear naturally.
- Original value: data, examples, screenshots, templates.
- Internal links to and from the page; schema (FAQ, HowTo, SoftwareApplication, Article).
- The conversion path: a CTA that fits the intent (template download, free tool, demo for commercial intent).

### 5. Set success metrics
Target position and traffic, plus what matters more: sign-ups, demo requests or assisted pipeline from the page.

## What good looks like

- The brief says exactly why this page will be better than what ranks.
- Every heading has a job; no "Introduction" or "Conclusion" sections.
- Answers lead each section (good for featured snippets and AI answers).
- The CTA matches the intent: nobody searching "what is an ICP" wants a demo.
- The common mistake is a brief that is a keyword list plus "write 2,000 words", which produces the same page as everyone else.

## Rules

- MUST base the outline on actual intent and the current results.
- MUST include something original (data, template, expert view, example).
- NEVER target a keyword an existing page already covers without a consolidation plan.
- NEVER recommend keyword stuffing, doorway pages or fake reviews.

## Example prompts

- "Write an SEO brief for 'cold email templates for SaaS'."
- "Brief a comparison page for 'Acme alternatives'."
- "Plan a cluster of 8 pages around 'sales prospecting'."
