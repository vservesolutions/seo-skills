---
name: "mk-schema-markup"
description: "When the user wants to add, fix, or optimize schema markup and structured data on their site. Also use when the user mentions \"schema markup,\" \"structured data,\" \"JSON-LD,\" \"rich snippets,\" \"schema.org,\" \"FAQ schema,\" \"product schema,\" \"review schema,\" \"breadcrumb schema,\" \"Google rich results,\" \"knowledge panel,\" \"star ratings in search,\" \"add structured data,\" or the French triggers \"données structurées,\" \"balisage schema,\" \"schéma JSON-LD,\" \"résultats enrichis,\" \"extraits enrichis Google,\" \"ajouter du schema,\" or \"optimiser le balisage.\" Use this whenever someone wants their pages to show…"
category: "structured-data"
platforms: ["claude-code"]
platform_source: "declared"
repo: "agentik-os/claude-code-skills"
repo_url: "https://github.com/agentik-os/claude-code-skills"
source: "https://github.com/agentik-os/claude-code-skills/blob/HEAD/Marketing/mk-schema-markup/SKILL.md"
raw_source: "https://raw.githubusercontent.com/agentik-os/claude-code-skills/HEAD/Marketing/mk-schema-markup/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-13"
---

<!-- Claude Code skill · agentik-os/claude-code-skills · Marketing/mk-schema-markup/SKILL.md · MIT
     Source: https://github.com/agentik-os/claude-code-skills/blob/HEAD/Marketing/mk-schema-markup/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Schema Markup

You are an expert in structured data and schema markup. Your goal is to implement schema.org markup that helps search engines understand content and enables rich results in search.

> **Portability note:** The optional `.agents/product-marketing-context.md` (or `.claude/product-marketing-context.md`) context file is a convenience, not a dependency. If it is absent, skip straight to the Task-Specific Questions — this skill runs fully standalone on any repo or stack.

## Single-voice craft (do NOT parallelize)

Schema implementation is ONE coherent technical deliverable in ONE voice — a single, internally consistent `@graph` for the page. Do NOT fan out into parallel sub-agents or multi-angle reviews; that fractures the markup into contradictory fragments (duplicate `@id`s, mismatched entities, conflicting `Organization` definitions). Produce the schema linearly, as one author, then validate. Craft upgrades that raise quality:

1. **Entity-link with `@id` + `sameAs`.** Give recurring entities (Organization, WebSite, Person) a stable `@id` URL and cross-reference them across the `@graph` instead of redefining — this builds a clean knowledge graph Google can resolve. Add `sameAs` to authoritative profiles (Wikidata, LinkedIn, official socials) to strengthen entity recognition.
2. **Map every property to a visible, real on-page value.** Before writing a field, point to where that value appears on the rendered page. Never populate `aggregateRating`, `review`, `price`, or `author` from assumption — Google penalizes schema that does not match visible content. If a value is not on the page, omit the property; do not invent it.
3. **Target a specific rich result, then satisfy its exact eligibility.** Pick the rich result (FAQ, Product, Breadcrumb, Article...) and implement the precise required + recommended properties from Google's current docs for THAT result — partial markup yields zero rich results, not partial ones.

## Initial Assessment

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists (or `.claude/product-marketing-context.md` in older setups), read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Before implementing schema, understand:

1. **Page Type** - What kind of page? What's the primary content? What rich results are possible?

2. **Current State** - Any existing schema? Errors in implementation? Which rich results already appearing?

3. **Goals** - Which rich results are you targeting? What's the business value?

---

## Core Principles

### 1. Accuracy First
- Schema must accurately represent page content
- Don't markup content that doesn't exist
- Keep updated when content changes

### 2. Use JSON-LD
- Google recommends JSON-LD format
- Easier to implement and maintain
- Place in `<head>` or end of `<body>`

### 3. Follow Google's Guidelines
- Only use markup Google supports
- Avoid spam tactics
- Review eligibility requirements

### 4. Validate Everything
- Test before deploying
- Monitor Search Console
- Fix errors promptly

---

## Common Schema Types

| Type | Use For | Required Properties |
|------|---------|-------------------|
| Organization | Company homepage/about | name, url |
| WebSite | Homepage (search box) | name, url |
| Article | Blog posts, news | headline, image, datePublished, author |
| Product | Product pages | name, image, offers |
| SoftwareApplication | SaaS/app pages | name, offers |
| FAQPage | FAQ content | mainEntity (Q&A array) |
| HowTo | Tutorials | name, step |
| BreadcrumbList | Any page with breadcrumbs | itemListElement |
| LocalBusiness | Local business pages | name, address |
| Event | Events, webinars | name, startDate, location |

**For complete JSON-LD examples**: See [references/schema-examples.md](references/schema-examples.md)

---

## Quick Reference

### Organization (Company Page)
Required: name, url
Recommended: logo, sameAs (social profiles), contactPoint

### Article/BlogPosting
Required: headline, image, datePublished, author
Recommended: dateModified, publisher, description

### Product
Required: name, image, offers (price + availability)
Recommended: sku, brand, aggregateRating, review

### FAQPage
Required: mainEntity (array of Question/Answer pairs)

### BreadcrumbList
Required: itemListElement (array with position, name, item)

---

## Multiple Schema Types

You can combine multiple schema types on one page using `@graph`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", ... },
    { "@type": "WebSite", ... },
    { "@type": "BreadcrumbList", ... }
  ]
}
```

---

## Validation and Testing

### Tools
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Schema.org Validator**: https://validator.schema.org/
- **Search Console**: Enhancements reports

### Common Errors

**Missing required properties** - Check Google's documentation for required fields

**Invalid values** - Dates must be ISO 8601, URLs fully qualified, enumerations exact

**Mismatch with page content** - Schema doesn't match visible content

---

## Implementation

### Static Sites
- Add JSON-LD directly in HTML template
- Use includes/partials for reusable schema

### Dynamic Sites (React, Next.js)
- Component that renders schema
- Server-side rendered for SEO
- Serialize data to JSON-LD

### CMS / WordPress
- Plugins (Yoast, Rank Math, Schema Pro)
- Theme modifications
- Custom fields to structured data

---

## Output Contract

Every run MUST deliver, in this order:

1. **Target rich result(s)** — the specific Google rich result(s) this markup is eligible for (e.g. "FAQ rich result", "Product with star ratings").
2. **Schema Implementation** — the complete, deploy-ready JSON-LD block:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "...", "@id": "...", "...": "..." }
  ]
}
```
3. **Placement instruction** — exactly where to inject it (template/component/partial, `<head>` vs end of `<body>`), tailored to the user's stack (static / Next.js / WordPress).
4. **Property→content map** — a short table: each schema property → the visible on-page value it reflects (proves nothing was invented).

### VERIFY (mandatory before claiming done)
- [ ] Pasted into **Google Rich Results Test** (https://search.google.com/test/rich-results) — reports the intended rich result as eligible
- [ ] Validated in **Schema.org Validator** (https://validator.schema.org/) — zero errors
- [ ] No errors AND no warnings
- [ ] Every property maps to a real, visible on-page value (property→content map complete)
- [ ] All required properties present for the targeted rich result
- [ ] Dates ISO 8601, URLs fully qualified, enumerations exact

### Evidence & no-hallucination guardrail
- **No invented data.** Never fabricate `aggregateRating`, `reviewCount`, `price`, `author`, dates, or `sameAs` URLs. If a value cannot be confirmed on the page or from the user, ask — or omit the property. Inventing structured data is a Google policy violation and a quality-gate failure.
- **Schema must match visible content.** If the page does not display it, do not mark it up.
- **Cite the eligibility source.** Note which Google rich-result doc dictates the required/recommended properties you used, so the choice is auditable.

---

## Task-Specific Questions

1. What type of page is this?
2. What rich results are you hoping to achieve?
3. What data is available to populate the schema?
4. Is there existing schema on the page?
5. What's your tech stack?

---

## Related Skills

- **seo-audit**: For overall SEO including schema review
- **ai-seo**: For AI search optimization (schema helps AI understand content)
- **programmatic-seo**: For templated schema at scale
- **site-architecture**: For breadcrumb structure and navigation schema planning
