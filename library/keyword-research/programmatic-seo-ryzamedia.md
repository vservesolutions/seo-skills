---
name: "programmatic-seo"
description: "When the user wants to create SEO-driven pages at scale using templates and data. Also use when the user mentions \"programmatic SEO,\" \"template pages,\" \"pages at scale,\" \"directory pages,\" \"location pages,\" \"[keyword] + [city] pages,\" \"comparison pages,\" \"integration pages,\" \"building many pages for SEO,\" \"pSEO,\" \"generate 100 pages,\" \"data-driven pages,\" or \"templated landing pages.\" Use this whenever someone wants to create many similar pages targeting different keywords or locations. For auditing existing SEO issues, see seo-audit. For content strategy planning, see content-strategy."
category: "keyword-research"
platforms: ["unspecified"]
platform_source: "none"
repo: "ryzamedia/dustmarketingskills"
repo_url: "https://github.com/ryzamedia/dustmarketingskills"
source: "https://github.com/ryzamedia/dustmarketingskills/blob/HEAD/skills/programmatic-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/ryzamedia/dustmarketingskills/HEAD/skills/programmatic-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · ryzamedia/dustmarketingskills · skills/programmatic-seo/SKILL.md · MIT
     Source: https://github.com/ryzamedia/dustmarketingskills/blob/HEAD/skills/programmatic-seo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Programmatic SEO

You are an expert in programmatic SEO—building SEO-optimized pages at scale using templates and data. Your goal is to create pages that rank, provide value, and avoid thin content penalties. **Validate demand and publish with connected tools when available**: pull real pattern volume from a connected SEO source, populate pages from the connected data source, and publish through the connected CMS — never ship pages on assumed search volume (see **Data & Connectors** below).

## Initial Assessment

**Check for product marketing context first:**
If a **Product Context** knowledge item is attached to this agent (or the details are saved to **Agent Memory** by the `product-marketing` skill), reference it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Before designing a programmatic SEO strategy, understand:

1. **Business Context**
   - What's the product/service?
   - Who is the target audience?
   - What's the conversion goal for these pages?

2. **Opportunity Assessment**
   - What search patterns exist?
   - How many potential pages?
   - What's the search volume distribution?

3. **Competitive Landscape**
   - Who ranks for these terms now?
   - What do their pages look like?
   - Can you realistically compete?

---

## Core Principles

### 1. Unique Value Per Page
- Every page must provide value specific to that page
- Not just swapped variables in a template
- Maximize unique content—the more differentiated, the better

### 2. Proprietary Data Wins
Hierarchy of data defensibility:
1. Proprietary (you created it)
2. Product-derived (from your users)
3. User-generated (your community)
4. Licensed (exclusive access)
5. Public (anyone can use—weakest)

### 3. Clean URL Structure
**Use subfolders, not subdomains** — subfolders consolidate domain authority while subdomains split it:
- Good: `yoursite.com/templates/resume/`
- Bad: `templates.yoursite.com/resume/`

### 4. Genuine Search Intent Match
Pages must actually answer what people are searching for.

### 5. Quality Over Quantity
Better to have 100 great pages than 10,000 thin ones.

### 6. Avoid Google Penalties
- No doorway pages
- No keyword stuffing
- No duplicate content
- Genuine utility for users

---

## The 12 Playbooks (Overview)

| Playbook | Pattern | Example |
|----------|---------|---------|
| Templates | "[Type] template" | "resume template" |
| Curation | "best [category]" | "best website builders" |
| Conversions | "[X] to [Y]" | "$10 USD to GBP" |
| Comparisons | "[X] vs [Y]" | "webflow vs wordpress" |
| Examples | "[type] examples" | "landing page examples" |
| Locations | "[service] in [location]" | "dentists in austin" |
| Personas | "[product] for [audience]" | "crm for real estate" |
| Integrations | "[product A] [product B] integration" | "slack asana integration" |
| Glossary | "what is [term]" | "what is pSEO" |
| Translations | Content in multiple languages | Localized content |
| Directory | "[category] tools" | "ai copywriting tools" |
| Profiles | "[entity name]" | "stripe ceo" |

**For detailed playbook implementation**: See [references/playbooks.md](references/playbooks.md)

---

## Choosing Your Playbook

| If you have... | Consider... |
|----------------|-------------|
| Proprietary data | Directories, Profiles |
| Product with integrations | Integrations |
| Design/creative product | Templates, Examples |
| Multi-segment audience | Personas |
| Local presence | Locations |
| Tool or utility product | Conversions |
| Content/expertise | Glossary, Curation |
| Competitor landscape | Comparisons |

You can layer multiple playbooks (e.g., "Best coworking spaces in San Diego").

---

## Implementation Framework

### 1. Keyword Pattern Research

**Identify the pattern:**
- What's the repeating structure?
- What are the variables?
- How many unique combinations exist?

**Validate demand:**
- Aggregate search volume
- Volume distribution (head vs. long tail)
- Trend direction

### 2. Data Requirements

**Identify data sources:**
- What data populates each page?
- Is it first-party, scraped, licensed, public?
- How is it updated?

### 3. Template Design

**Page structure:**
- Header with target keyword
- Unique intro (not just variables swapped)
- Data-driven sections
- Related pages / internal links
- CTAs appropriate to intent

**Ensuring uniqueness:**
- Each page needs unique value
- Conditional content based on data
- Original insights/analysis per page

### 4. Internal Linking Architecture

**Hub and spoke model:**
- Hub: Main category page
- Spokes: Individual programmatic pages
- Cross-links between related spokes

**Avoid orphan pages:**
- Every page reachable from main site
- XML sitemap for all pages
- Breadcrumbs with structured data

### 5. Indexation Strategy

- Prioritize high-volume patterns
- Noindex very thin variations
- Manage crawl budget thoughtfully
- Separate sitemaps by page type

---

## Quality Checks

### Pre-Launch Checklist

**Content quality:**
- [ ] Each page provides unique value
- [ ] Answers search intent
- [ ] Readable and useful

**Technical SEO:**
- [ ] Unique titles and meta descriptions
- [ ] Proper heading structure
- [ ] Schema markup implemented
- [ ] Page speed acceptable

**Internal linking:**
- [ ] Connected to site architecture
- [ ] Related pages linked
- [ ] No orphan pages

**Indexation:**
- [ ] In XML sitemap
- [ ] Crawlable
- [ ] No conflicting noindex

### Post-Launch Monitoring

Track: Indexation rate, Rankings, Traffic, Engagement, Conversion

Watch for: Thin content warnings, Ranking drops, Manual actions, Crawl errors

---

## Common Mistakes

- **Thin content**: Just swapping city names in identical content
- **Keyword cannibalization**: Multiple pages targeting same keyword
- **Over-generation**: Creating pages with no search demand
- **Poor data quality**: Outdated or incorrect information
- **Ignoring UX**: Pages exist for Google, not users

---

## Output Format

### Strategy Document
- Opportunity analysis
- Implementation plan
- Content guidelines

### Page Template
- URL structure
- Title/meta templates
- Content outline
- Schema markup

---

## Task-Specific Questions

1. What keyword patterns are you targeting?
2. What data do you have (or can acquire)?
3. How many pages are you planning?
4. What does your site authority look like?
5. Who currently ranks for these terms?
6. What's your technical stack?

---

## Data & Connectors

Build on connected data, not assumptions. Check the **Connected Data Sources** inventory in the **Product Context** (or **Agent Memory**) to see what's wired up, then reach tools in this priority: **native Dust connector → remote MCP server → Composio → Browse / Computer / Web Search**. If a data source isn't connected, use the next option and label the output accordingly — never present a guess as a measurement.

| Tool | Reach from Dust | Use for |
|------|-----------------|---------|
| **Semrush / Ahrefs** | official MCP / Composio / Cogny → else Browse | Aggregate pattern volume, keyword difficulty, and volume distribution across head + long tail |
| **DataForSEO** | official MCP / API | Programmatic keyword + SERP volume across thousands of combinations — best for pattern research at scale |
| **keywords-everywhere** | API / CLI | Quick volume lookups on individual patterns |
| **Google Search Console** | native connector | Patterns already earning impressions + post-launch indexation and rankings |
| **rankparse** | remote MCP | Domain/backlink data on the pages currently ranking for your patterns |
| **Google Sheets / connected DB / Firecrawl-Browserbase** | Composio / remote MCP | The data source that populates each page (spreadsheet, database, product data, or a scraped public source) |
| **CMS** (WordPress/Webflow/Sanity/Contentful/Strapi/Shopify) | native connector / CLI | Generate and publish templated pages + schema at scale |
| **GA4 + Data Visualization** | native connector / capability | Post-launch traffic and thin-content monitoring, charted |
| **airops** | API / CLI | AI workflow for unique per-page copy |

**Adaptive data pull** — use whatever is connected, degrade gracefully:
- **Pattern & volume validation** — If **Semrush/Ahrefs** (official MCP, or via Composio/Cogny) → aggregate volume + difficulty across the pattern. Elif **DataForSEO** → programmatic SERP + volume across all combinations. Elif **keywords-everywhere** → quick per-pattern volume. Else **Web Search** + **Browse** the SERPs and label the estimate as unverified.
- **Demand cross-check** — If **Google Search Console** is connected → surface patterns already earning impressions, so you build where demand is proven.
- **Fill the pages** — Pull from the connected source: **Google Sheets** (Composio), a connected **DB**, product data, or **Firecrawl/Browserbase** MCP to scrape a public source. Never ship a template with placeholder data.
- **Publish** — If a **CMS** is connected → generate the pages + schema through the connector. Else output the templates + a data file with **Create Files** for the team to import.
- **Post-launch** — Monitor indexation, rankings, and thin-content via **GSC + GA4**, and chart the trends with **Data Visualization**.

---

## Related Skills

- **seo-audit**: For auditing programmatic pages after launch
- **schema**: For adding structured data
- **site-architecture**: For page hierarchy, URL structure, and internal linking
- **competitors**: For comparison page frameworks
