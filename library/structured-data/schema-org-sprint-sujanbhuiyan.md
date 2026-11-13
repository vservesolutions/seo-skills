---
name: "schema-org-sprint"
description: "Audits a page or site and emits ready-to-paste Schema.org JSON-LD structured data plus a node-coverage checklist. Use when a page lacks structured data, when adding rich-result eligibility (Organization, LocalBusiness, Article, FAQ, Product, Breadcrumb), or when auditing which schema node types a site should have and whether each is present."
category: "structured-data"
platforms: ["unspecified"]
platform_source: "none"
repo: "sujanbhuiyan/skills"
repo_url: "https://github.com/sujanbhuiyan/skills"
source: "https://github.com/sujanbhuiyan/skills/blob/HEAD/skills/schema-org-sprint/SKILL.md"
raw_source: "https://raw.githubusercontent.com/sujanbhuiyan/skills/HEAD/skills/schema-org-sprint/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · sujanbhuiyan/skills · skills/schema-org-sprint/SKILL.md · MIT
     Source: https://github.com/sujanbhuiyan/skills/blob/HEAD/skills/schema-org-sprint/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Schema.org Sprint

## What this does

Turns page content into valid, ready-to-paste Schema.org JSON-LD. It identifies
the page type, picks the correct node types, fills them from the actual page
content, wires nodes together by `@id`, and emits `<script type="application/ld+json">`
blocks. It also produces a site-wide **coverage checklist** showing which node
types the site should carry and whether each is present — the deliverable that
turns a one-page fix into a structured-data sprint.

## When to use it

- A page has no structured data and you want rich-result / AI-citation eligibility.
- Adding Organization, WebSite, LocalBusiness, Person, Service, Article, FAQPage,
  BreadcrumbList, or Product markup to a site.
- Auditing a multi-page site for missing or malformed schema coverage.

## How to use it

1. Identify the **page type** (home, about, service, blog post, product, local
   business, contact). This drives which node types apply.
2. Choose node types using [`references/node-guide.md`](references/node-guide.md)
   — when to use each, required vs recommended properties, and how nodes link.
3. Copy the matching skeleton(s) from `assets/` and fill placeholders from the
   real page content (visible text, contact details, prices, authors, dates).
   Available templates:
   [`organization.json`](assets/organization.json),
   [`website.json`](assets/website.json),
   [`localbusiness.json`](assets/localbusiness.json),
   [`person.json`](assets/person.json),
   [`service.json`](assets/service.json),
   [`article.json`](assets/article.json),
   [`faqpage.json`](assets/faqpage.json),
   [`breadcrumblist.json`](assets/breadcrumblist.json),
   [`product.json`](assets/product.json).
4. Wire nodes by `@id` (e.g. an `Article.publisher` references the
   `Organization` `@id`; a `Service.provider` references it too). See the
   "Linking nodes via @id" section of the node guide.
5. Replace **every** placeholder. Never ship a value like `https://example.com`
   or `PLACEHOLDER` — Google and AI engines treat fabricated data as spam.
6. Emit each block wrapped in `<script type="application/ld+json"> … </script>`,
   ready to paste into the page `<head>`. Multiple nodes can share one `@graph`.
7. Produce a **coverage checklist**: list the node types the site should have
   site-wide and per template, mark each Present / Missing / Malformed, and
   note the fix. This is the audit artifact.
8. Validate mentally against the required-properties table in the node guide;
   recommend the user run Google Rich Results Test + Schema Markup Validator
   before publishing.

## Inputs

- The page URL or its content (visible copy, headings, contact info, prices,
  author + publish date for articles, FAQ Q&A pairs).
- The canonical site domain (for stable `@id` URIs and `url` fields).
- Optional: the full page list, if producing a site-wide coverage checklist.

## Output

- One or more `<script type="application/ld+json">` blocks with real values,
  nodes linked by `@id`, ready to paste into the page head.
- A site-wide schema coverage checklist (node type × page, Present/Missing/Fix).

## Notes & constraints

- JSON-LD only (Google's preferred format) — do not emit Microdata or RDFa.
- Only mark up content that is **visible on the page**; invisible/contradictory
  markup is a guidelines violation.
- Use stable absolute `@id` URIs (e.g. `https://site.com/#organization`) so
  nodes can be referenced across pages.
- Dates use ISO 8601 (`2026-05-24`); prices need both `price` and
  `priceCurrency`; images should be absolute URLs.
- This skill builds markup; it does not deploy it. Validate with the Google Rich
  Results Test and the Schema.org validator before publishing.
- Use forward-slash paths.
