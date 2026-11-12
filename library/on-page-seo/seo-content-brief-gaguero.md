---
name: "seo-content-brief"
description: "Turns a keyword, topic or existing page into a complete, intent-first SEO content brief and on-page optimization plan. Maps search intent (informational, commercial, transactional, navigational, local) into topic clusters, then specifies the angle, H1/H2 structure, entities and questions to cover, internal links, CTA, and the E-E-A-T / people-first evidence the content must demonstrate. Also reviews and optimizes existing on-page elements: title, meta description, headings, slug, internal linking. Use when someone asks for a content brief, keyword/topic research, content strategy, on-page…"
summary: "Generates intent-first SEO content briefs and on-page optimization plans from keywords."
category: "on-page-seo"
platforms: ["any-agent"]
platform_source: "declared"
repo: "gaguero/seo-agent-skills"
repo_url: "https://github.com/gaguero/seo-agent-skills"
source: "https://github.com/gaguero/seo-agent-skills/blob/HEAD/seo-content-brief/SKILL.md"
raw_source: "https://raw.githubusercontent.com/gaguero/seo-agent-skills/HEAD/seo-content-brief/SKILL.md"
ref: "HEAD"
discovered_via: "awesome-seo-agent-skills"
license: "MIT"
stars: 0
collected: "2026-11-12"
---

<!-- Any agent skill · gaguero/seo-agent-skills · seo-content-brief/SKILL.md · MIT
     Source: https://github.com/gaguero/seo-agent-skills/blob/HEAD/seo-content-brief/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Content Brief & On-Page

Great SEO content starts from **intent**, not keywords. First answer "what is the
person actually trying to do?", then build the page that satisfies that better
than the current results. Write for the human; structure for the crawler.

## Step 1 — Classify intent

For the target query/topic, decide the dominant intent (a query can be mixed):

| Intent | The searcher wants | Page type that wins |
|--------|--------------------|---------------------|
| Informational | to learn / understand | guide, explainer, how-to, FAQ |
| Commercial investigation | to compare before buying | comparison, "best X", reviews, alternatives |
| Transactional | to act / buy / book now | product, service, pricing, booking page |
| Navigational | a specific site/brand | brand/home/login page |
| Local | something near them | location/service-area page, map, hours |

Verify intent against what currently ranks: if the SERP is all comparisons, a
single product page won't win. Match the format the SERP rewards.

## Step 2 — Build the cluster

Group the topic into a **pillar + supporting pages**:
- One pillar page targeting the head term and broad intent.
- Supporting pages for sub-intents, long-tail, and conversational questions.
- Define internal links: supporting → pillar (and back) with descriptive anchors.
- Flag **cannibalization risk**: two pages targeting the same intent compete with
  each other — consolidate or differentiate. (Hand borderline cases to
  `seo-quality-gates`.)

## Step 3 — Write the brief

Deliver a brief a writer or content agent can execute without guessing:

```
## Brief: <target page>
- Target query / topic + dominant intent
- Audience & what success looks like for them
- Differentiating angle (why this beats the current top results)
- Working title options (see on-page rules below)
- Outline: H1, then H2/H3 covering the must-answer questions
- Entities & subtopics to include (people/places/things/concepts)
- Questions to answer (from People-Also-Ask, real customer questions)
- E-E-A-T evidence required (see below)
- Internal links in / out (with anchor text)
- Primary CTA + secondary CTA
- Schema to add (route to seo-schema-builder)
- Media needed (original images/diagrams/data)
```

## Step 4 — E-E-A-T / people-first requirements

The brief must specify how the page will **demonstrate**, not just claim:
- **Experience** — first-hand proof: original photos, tests, data, specifics only
  someone who did it would know.
- **Expertise** — a real, named author with relevant credentials/bio.
- **Authoritativeness** — citations to primary sources; earned mentions/links.
- **Trust** — accuracy, transparency (Who/How/Why), disclosure of AI assistance or
  reviews, contact/about info, no fabricated claims.

Reject "search-engine-first" patterns: bulk thin pages, content that just
restates the obvious, keyword-driven topics nobody asked for, fabricated detail.

## Step 5 — On-page optimization (for existing pages)

| Element | Rule |
|---------|------|
| Title tag | Unique, intent-matching, primary topic near the front, ~50–60 chars, no stuffing. Compelling for clicks. |
| Meta description | Unique, ~150–160 chars, summarizes value + soft CTA. Not a ranking factor but drives CTR. |
| H1 | One per page, matches the page's core promise. |
| Headings | Logical H2/H3 hierarchy that mirrors the questions; scannable. |
| URL slug | Short, lowercase, hyphenated, descriptive, stable. |
| Body | Answers the dominant intent **early** (don't bury the answer), then depth. |
| Internal links | Descriptive anchors to related pillar/supporting pages. |
| Media | Descriptive `alt`, real images, dimensions set (helps CLS). |

## Output

A finished brief (or an annotated on-page diff for existing pages). Send schema to
`seo-schema-builder`, answer-engine framing to `ai-search-optimization`, and run
the result through `seo-quality-gates` before publishing.

See [references/intent-and-clusters.md](references/intent-and-clusters.md).
