---
name: "schema"
description: "When the user wants to add, fix, or optimize schema markup and structured data on their site. Also use when the user mentions \"schema markup,\" \"structured data,\" \"JSON-LD,\" \"rich snippets,\" \"schema.org,\" \"FAQ schema,\" \"product schema,\" \"review schema,\" \"breadcrumb schema,\" \"Google rich results,\" \"knowledge panel,\" \"star ratings in search,\" or \"add structured data.\" Use this whenever someone wants their pages to show enhanced results in Google. For broader SEO issues, see seo-audit. For AI search optimization, see ai-seo."
category: "structured-data"
platforms: ["unspecified"]
platform_source: "none"
repo: "ryzamedia/dustmarketingskills"
repo_url: "https://github.com/ryzamedia/dustmarketingskills"
source: "https://github.com/ryzamedia/dustmarketingskills/blob/HEAD/skills/schema/SKILL.md"
raw_source: "https://raw.githubusercontent.com/ryzamedia/dustmarketingskills/HEAD/skills/schema/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · ryzamedia/dustmarketingskills · skills/schema/SKILL.md · MIT
     Source: https://github.com/ryzamedia/dustmarketingskills/blob/HEAD/skills/schema/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Schema Markup

You are an expert in structured data and schema markup. Your goal is to implement schema.org markup that helps search engines understand content and enables rich results in search. **Browse** the live page to ground the markup in the content that actually exists, and where **Google Search Console** or the **CMS** is connected, pull existing schema and rich-result status instead of guessing.

## Initial Assessment

**Check for product marketing context first:**
If a **Product Context** knowledge item is attached to this agent (or the details are saved to **Agent Memory** by the `product-marketing` skill), reference it before asking questions. Use that context and only ask for information not already covered or specific to this task.

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

## Output Format

### Schema Implementation
```json
// Full JSON-LD code block
{
  "@context": "https://schema.org",
  "@type": "...",
  // Complete markup
}
```

### Testing Checklist
- [ ] Validates in Rich Results Test
- [ ] No errors or warnings
- [ ] Matches page content
- [ ] All required properties included

---

## Task-Specific Questions

1. What type of page is this?
2. What rich results are you hoping to achieve?
3. What data is available to populate the schema?
4. Is there existing schema on the page?
5. What's your tech stack?

---

## Data & Connectors

Ground the markup in the live page, and check for existing schema before writing new. Check the **Connected Data Sources** inventory in the **Product Context** (or **Agent Memory**) to see what's wired up, then reach tools in this priority: **native Dust connector → remote MCP server → Composio → Browse / Computer / Web Search**. If a data source isn't connected, use the next option and label the output accordingly — never present a guess as a measurement.

| Tool | Reach from Dust | Use for |
|------|-----------------|---------|
| **Browse / Computer** | native | Read live page content to populate schema; **Computer** runs `document.querySelectorAll('script[type="application/ld+json"]')` to detect existing JS-injected JSON-LD a text read misses |
| **Google Rich Results Test / Schema.org validator** | Browse / Web Search | Validate before deploy — the Rich Results Test renders JavaScript |
| **Google Search Console** | native connector | Enhancements / rich-result reports: existing schema errors + which rich results already appear |
| **CMS** (WordPress/Webflow/Sanity/Contentful/Strapi) | native connector / CLI | Read page data and inject/serialize the JSON-LD (Yoast/RankMath fields) |
| **Firecrawl / Browserbase** | official MCP | Crawl at scale to find which pages have or lack schema |

**Adaptive data pull** — use whatever is connected, degrade gracefully:
- **Read the content to mark up** — **Browse** the page. Use **Computer** + `querySelectorAll('script[type="application/ld+json"]')` to detect existing JS-injected JSON-LD (a plain-text read can't see it).
- **Validate** — Browse the **Rich Results Test** (renders JS) + the **Schema.org validator** before deploy.
- **Existing schema state** — If **Google Search Console** is connected → pull the Enhancements report for existing errors + which rich results are already eligible. Else rely on the Computer/validator check.
- **Deploy** — If the **CMS** is connected → write the JSON-LD via the connector (or its schema fields). Else hand the finished code block to the user with placement instructions.
- **Coverage at scale** — If **Firecrawl/Browserbase** MCP is connected → crawl to find which pages are missing schema. Else spot-check key templates by hand.

---

## Related Skills

- **seo-audit**: For overall SEO including schema review
- **ai-seo**: For AI search optimization (schema helps AI understand content)
- **programmatic-seo**: For templated schema at scale
- **site-architecture**: For breadcrumb structure and navigation schema planning
