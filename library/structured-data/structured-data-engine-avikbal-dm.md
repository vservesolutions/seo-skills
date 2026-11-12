---
name: "structured-data-engine"
description: "Detect, validate, and generate structured data that wins SERP features and feeds the knowledge graph. Covers JSON-LD for the common types, entity and sameAs markup for brand recognition, rich-result eligibility, and matching the schema to the SERP feature actually in play for a query. Use when someone wants schema or structured data, JSON-LD, rich results, knowledge-graph or entity optimization, FAQ or breadcrumb or product markup, or asks why their rich result is not showing. Schema is eligibility, not a guarantee, and this skill treats it that way."
category: "structured-data"
platforms: ["unspecified"]
platform_source: "none"
repo: "avikbal-dm/claude-seo-skills"
repo_url: "https://github.com/avikbal-dm/claude-seo-skills"
source: "https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/structured-data-engine/SKILL.md"
raw_source: "https://raw.githubusercontent.com/avikbal-dm/claude-seo-skills/HEAD/plugins/growth-os/skills/structured-data-engine/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-12"
---

<!-- Unspecified skill · avikbal-dm/claude-seo-skills · plugins/growth-os/skills/structured-data-engine/SKILL.md · MIT
     Source: https://github.com/avikbal-dm/claude-seo-skills/blob/HEAD/plugins/growth-os/skills/structured-data-engine/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Structured Data Engine

## What this does

Structured data is how you tell a machine what a page means in a language it does not have to guess at. Done well, it wins rich results, strengthens the brand as an entity, and makes content easier for AI engines to read and cite. Done carelessly, it earns a manual action. This skill does it well and validates before anything ships.

Schema does not make a page rank. It makes a page eligible for features it would otherwise miss. Treat it as eligibility, and aim it at the features worth winning.

## When to use it

Use it to add or fix schema, to chase a rich result, to build entity and knowledge-graph signals, or when a rich result that should appear does not. It supports `ai-search-visibility` on the entity side and `search-experience` when a richer listing would win the click.

## Data you pull

- **The live SERP for each target query**: which features are present, since there is no point marking up for a feature Google does not show for that query.
- **The current page markup**: what schema exists, whether it validates, and whether it matches the visible content.
- **Google Search Console**: the rich result and enhancement reports, which show what is eligible, valid, or erroring.

## Method

### 1. Inventory current markup

Crawl the site's existing schema. Find pages with none, pages with invalid markup, and pages whose schema claims things not on the page. The last group is the dangerous one.

### 2. Map schema to the feature worth winning

For each target query, read the SERP. If it shows FAQ-style results, mark up FAQ. If it shows review stars, use Product or Review markup where honest. If breadcrumbs, use BreadcrumbList. Match the markup to the feature actually in play, not a generic checklist.

### 3. Generate valid JSON-LD

Produce clean JSON-LD for the types the page warrants: Organization and the entity graph for the brand, Article or BlogPosting for content, Product and Offer for commercial pages, FAQPage where genuine questions and answers exist, BreadcrumbList for navigation, and Person for named authors. Prefer JSON-LD over inline formats. Use a @graph to connect entities on a page rather than scattering disconnected blocks.

### 4. Build the entity, not just the page

For brand recognition in classic and AI search, wire the Organization entity with sameAs links to authoritative profiles, a clear logo and name, and author Person entities tied to the content they write. This is the markup layer of the entity work that `ai-search-visibility` and `authority-engine` carry off-site.

### 5. Validate before ship

Run every block through validation. Confirm the markup reflects content actually visible on the page. Schema that describes things a user cannot see is a policy violation and a manual-action risk, not a clever edge.

### 6. Confirm in the field

After deploy, watch the Search Console enhancement reports for valid status and errors, and check whether the feature actually appears. Eligibility is not arrival. Some features take time, and some Google simply chooses not to show.

## Output

A schema plan: the pages missing or breaking markup, the SERP feature targeted per template, validated JSON-LD ready to deploy, the entity graph for the brand, and the Search Console reports to watch. Order by the features closest to a commercial query.

## Speed to results

Schema deploys fast, and Google can pick up rich results within days to a couple of weeks of recrawl. The entity and knowledge-graph signals that change brand recognition build slowly. Ship the page-level markup first for the quick eligibility wins.

## Guardrails

- Only mark up what is visible on the page. Invisible or false schema risks a manual action.
- Schema is eligibility, not a ranking lever or a guarantee of the feature.
- Match the markup to the SERP feature actually shown for the query.
- Validate every block before it ships, and watch the field reports after.

## Hands off to

`ai-search-visibility` for the entity signals in AI answers, `search-experience` when a richer listing changes the click decision, `content-engine` when the page needs genuine FAQ or content to mark up, and `growth-intelligence` to track feature wins over time.

---

## About the author

Avik Bal is a B2B digital marketing practitioner specializing in web architecture, SEO, content strategy, and marketing analytics. He has helped enterprise software, fintech, and technology companies drive growth through scalable digital marketing programs. Avik is the author of *CITED: The Growth Operating System for AI Search*.

Part of the Growth Operating System. https://github.com/avikbal-dm/claude-seo-skills
