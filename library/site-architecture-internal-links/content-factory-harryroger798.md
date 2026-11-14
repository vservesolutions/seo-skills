---
name: "content-factory"
description: "Turn one approved brief into a sourced, answer-first article with internal links, external citations, schema, and a QA list. Use for blog posts, guides, comparisons, and landing-page copy."
category: "site-architecture-internal-links"
platforms: ["claude-code"]
platform_source: "detected"
repo: "harryroger798/seo-agent-kit"
repo_url: "https://github.com/harryroger798/seo-agent-kit"
source: "https://github.com/harryroger798/seo-agent-kit/blob/HEAD/skills/content-factory/SKILL.md"
raw_source: "https://raw.githubusercontent.com/harryroger798/seo-agent-kit/HEAD/skills/content-factory/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · harryroger798/seo-agent-kit · skills/content-factory/SKILL.md · MIT
     Source: https://github.com/harryroger798/seo-agent-kit/blob/HEAD/skills/content-factory/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Content Factory

## When to use

Use when the user wants an article, guide, comparison, or landing page. Use `silo-builder` first if there is no cluster; use `humanizer` after the draft; use `repurposer` after publishing.

## Inputs

| Variable | Required | What it is |
|---|---|---|
| `{{brief}}` | yes | Approved one-page brief |
| `{{sources}}` | yes | 3–5 primary sources with the claims they support |
| `{{proof_assets}}` | yes | Data, screenshots, cases, named expert |
| `{{internal_links}}` | yes | 3–5 validated URLs with anchors |
| `{{product_url}}` | yes | One canonical product link |
| `{{voice}}` | yes | Brand voice, plain English, first person or third |
| `{{current_year}}` | yes | The year of publication |

## Process

1. Read the brief. If the promise, reader, or proof column is missing, stop and ask.
2. Draft the answer in the first 60 words.
3. Write 5–8 H2 sections, each with one job.
4. Add one table, one worked example, and one “what could go wrong” section.
5. Add 3–5 sourced statistics with source and date.
6. Add one named quotation, or omit it.
7. Add 3–5 internal links and 2–3 primary external sources.
8. Insert the product URL once, in context.
9. Return the HTML and a separate `[VERIFY]` list.
10. Run the QA gate.

## Output

- `article.html` — semantic HTML.
- `qa.md` — every `[VERIFY]` item, every link, every claim.
- `meta.md` — title, meta description, slug, schema recommendation.

## Rules

- Cite or cut.
- No invented anecdotes, reviews, quotes, or customer names.
- No keyword density target.
- No “in today’s fast-paced world,” “delve,” “unlock,” “seamless,” “robust.”
- No paragraph longer than four sentences.
- One product link.
- Do not publish until the QA gate passes.

## Media and conversion layer

After the draft, add:

- One **featured image** for Open Graph and social. It is **not** the first image in the body.
- **2?4 different in-body images**: after the intro, inside a step, near a comparison, before the FAQ.
- **5?7 FAQs** from the fan-out, 40?60 words each, visible.
- **One video** with a transcript and VideoObject schema.
- **2?3 primary external citations**, inline.
- **3?5 internal links**, including the money page.
- **A key-takeaways box** with three bullets.
- **Author, published date, last-updated date.**

Use `skills/blog-media/SKILL.md` and `prompts/13-blog-media.md`.

## QA

- [ ] First 60 words answer the query.
- [ ] Every number has a source and a date.
- [ ] Every quote has a real name and role.
- [ ] No invented experience.
- [ ] One table or decision aid.
- [ ] One “what could go wrong” section.
- [ ] 3–5 internal links, descriptive anchors.
- [ ] 2–3 primary external sources.
- [ ] Product URL once.
- [ ] Author, date, correction path.
- [ ] Schema validated.
- [ ] Metric chosen before publishing.

## References

- `prompts/03-brief.md`
- `prompts/04-draft.md`
- `playbooks/content-factory.md`
- `checklists/content-qa.md`
- `templates/content-brief.md`
