---
name: "seo-geo-content-brief"
description: "Produces a research-backed content brief that optimizes a page for BOTH classic SEO and GEO (Generative Engine Optimization) so it ranks in search AND gets cited by ChatGPT, Perplexity, and Google AI Overviews. Use when planning a blog post, pillar page, or landing page and you need target queries, keywords, entities, heading outline, E-E-A-T signals, schema, and a GEO checklist before writing."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "sujanbhuiyan/skills"
repo_url: "https://github.com/sujanbhuiyan/skills"
source: "https://github.com/sujanbhuiyan/skills/blob/HEAD/skills/seo-geo-content-brief/SKILL.md"
raw_source: "https://raw.githubusercontent.com/sujanbhuiyan/skills/HEAD/skills/seo-geo-content-brief/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · sujanbhuiyan/skills · skills/seo-geo-content-brief/SKILL.md · MIT
     Source: https://github.com/sujanbhuiyan/skills/blob/HEAD/skills/seo-geo-content-brief/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO/GEO Content Brief

## What this does

Turns a topic into a complete, fill-in content brief that a writer can execute
without further research. It covers the classic SEO surface (query intent, SERP
analysis, keywords, entities, internal links, heading outline) **and** the GEO
surface (who AI engines cite today and why, quotable structure, definitions,
freshness, author authority) so the resulting page can both rank and be cited
in AI answers.

## Glossary

- **GEO** — Generative Engine Optimization: optimizing content to be cited by
  AI answer engines (ChatGPT, Perplexity, Google AI Overviews, Gemini).
- **E-E-A-T** — Experience, Expertise, Authoritativeness, Trustworthiness;
  Google's content-quality signals.
- **Hub-and-spoke** — content architecture of pillar pages (hubs) linked to
  supporting posts (spokes).

## When to use it

- Planning any page meant to win organic search **and** AI-answer citations.
- A writer needs target query, keywords, entities, outline, and schema upfront.
- Auditing an existing page for GEO gaps before a rewrite.

## How to use it

1. Confirm the **target query** and the **business goal** for the page.
2. Copy [`references/brief-template.md`](references/brief-template.md) and fill
   every section. Work top to bottom — each section feeds the next.
3. For the SERP + AI-answer analysis, look at the current page-1 results and at
   what ChatGPT/Perplexity/Google AI Overviews actually say for the query;
   record **who gets cited and why** (format, freshness, authority, structure).
4. Choose primary + secondary keywords and the **entities** the page must
   mention to be topically complete.
5. Specify the **E-E-A-T signals** (named author + bio + credentials, sources,
   original data/experience) the page must carry.
6. Place the page in the **hub-and-spoke** map and list internal links in/out.
7. Write the title / H1 / heading outline, the FAQ block, and the Schema.org
   recommendations — for the schema build itself, hand off to a
   `schema-org-sprint` skill.
8. Run every item in [`references/geo-checklist.md`](references/geo-checklist.md)
   and attach it to the brief as the acceptance criteria.

## Inputs

- Target query / topic and the page's business goal.
- The site's existing hub/pillar structure (for placement + internal links).
- Author identity + credentials (for E-E-A-T).
- Access to live SERPs and AI engines for the analysis steps.

## Output

A completed content brief (one markdown doc per page) containing: target query
+ intent, SERP + AI-answer analysis, primary/secondary keywords + entities,
E-E-A-T plan, hub-and-spoke placement + internal links, title/H1/heading
outline, FAQ block, Schema.org recommendations, sources to cite/earn, and the
GEO checklist as acceptance criteria.

## Notes & constraints

- This skill **plans**; it does not write the final copy or build the schema —
  pair it with a drafting skill and a `schema-org-sprint` skill.
- GEO and SEO overlap but are not identical: ranking #1 does not guarantee a
  citation. Optimize structure and quotability for AI engines explicitly.
- Verify every stat and source; AI engines and Google both penalize
  unsupported claims, and citations reward verifiable specifics.
- Use forward-slash paths.
