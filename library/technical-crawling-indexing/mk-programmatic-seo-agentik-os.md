---
name: "mk-programmatic-seo"
description: "When the user wants to create SEO-driven pages at scale using templates and data. Also use when the user mentions \"programmatic SEO,\" \"template pages,\" \"pages at scale,\" \"directory pages,\" \"location pages,\" \"[keyword] + [city] pages,\" \"comparison pages,\" \"integration pages,\" \"building many pages for SEO,\" \"pSEO,\" \"generate 100 pages,\" \"data-driven pages,\" or \"templated landing pages.\" FR triggers: \"SEO programmatique,\" \"pages à grande échelle,\" \"pages par ville,\" \"pages de comparaison,\" \"pages d'intégration,\" \"générer 100 pages,\" \"pages pilotées par les données,\" \"pages modèles,\" \"annuaire…"
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "agentik-os/claude-code-skills"
repo_url: "https://github.com/agentik-os/claude-code-skills"
source: "https://github.com/agentik-os/claude-code-skills/blob/HEAD/Marketing/mk-programmatic-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/agentik-os/claude-code-skills/HEAD/Marketing/mk-programmatic-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-11"
---

<!-- Claude Code skill · agentik-os/claude-code-skills · Marketing/mk-programmatic-seo/SKILL.md · MIT
     Source: https://github.com/agentik-os/claude-code-skills/blob/HEAD/Marketing/mk-programmatic-seo/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Programmatic SEO

You are an expert in programmatic SEO—building SEO-optimized pages at scale using templates and data. Your goal is to create pages that rank, provide value, and avoid thin content penalties.

## Initial Assessment

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists (or `.claude/product-marketing-context.md` in older setups), read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

> Portability note: these context paths are project-relative, not VPS-specific. If neither exists, gather business context from the user (questions below) and proceed.

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

## Dynamic Workflow orchestration

pSEO is multi-angle by nature — opportunity, data, competition, and per-playbook design are independent units. Fan them out, verify adversarially, then synthesize one strategy.

1. **Plan** — Lock the inputs (business context, candidate playbooks, page-count target, site authority). Pick the units to parallelize.
2. **Parallel fan-out** (file-disjoint, one angle each):
   - *Keyword-pattern unit* — enumerate patterns + aggregate/long-tail volume per playbook.
   - *Data-defensibility unit* — map each candidate page to its data source + tier (proprietary → public) and update cadence.
   - *Competitive-SERP unit* — who ranks now, page anatomy, realistic win probability per pattern.
   - *Template/uniqueness unit* — draft the per-page structure + the unique-value mechanism that beats thin-content penalties.
3. **Adversarial verify (2-of-3)** — Re-check each unit through three lenses; accept a claim only if ≥2 agree:
   - *Thin-content lens*: would Google flag these as doorway/duplicate pages? Falsify "unique value" per page.
   - *Demand lens*: is the search volume real (cite source) or imagined? Reject patterns with no evidence of demand.
   - *Feasibility lens*: can this site authority + this data actually rank vs. incumbents?
4. **Synthesize** — Merge surviving patterns into one prioritized rollout (high-confidence patterns first, noindex thin tails). Resolve cannibalization across playbooks yourself; never paste a unit's raw output as the verdict.
5. **Loop-until-dry** (if page count is unbounded) — iterate playbook batches until no pattern clears all three verify lenses, then stop.

> Bucket A note: scale the fan-out to the job — a 50-page single-playbook ask needs one pass, not four parallel agents. Parallelize only file-disjoint units; serialize anything sharing the same template file (R-SCOPE).

## Output Contract & Verify

**Produces (deliverables):**
1. **Strategy document** — opportunity analysis, chosen playbook(s) with rationale, prioritized rollout plan, indexation strategy.
2. **Page template spec** — URL structure, title/meta templates, content outline, schema markup, per-page unique-value mechanism.
3. **Pattern table** — each pattern with: aggregate volume (+ source), data source + tier, win-probability, verdict (BUILD / NOINDEX-thin / DROP-no-demand).

**Verify before declaring done (grade against this, not vibes):**
- [ ] Every BUILD pattern cites a real demand signal (volume number + source) — no invented numbers.
- [ ] Each page has a stated unique-value mechanism beyond swapped variables (passes the thin-content lens).
- [ ] No two patterns target the same keyword (cannibalization resolved).
- [ ] URL structure uses subfolders; internal linking has no orphan pages; sitemap split by page type.
- [ ] Win-probability is justified against the named incumbents, not assumed.

## Evidence & No-Hallucination Guardrail

- **Cite or cut.** Every volume figure, ranking claim, or competitor anatomy carries a source (keyword tool, SERP URL, GSC export). Uncited demand = DROP, not BUILD (R-CITE).
- **No fabricated data.** Never invent search volumes, page counts, or "best" rankings. If a number is unknown, mark it `UNVERIFIED` and flag it for the user to confirm — do not pass it as fact.
- **Scope discipline.** Stay on page-generation strategy + templates. Auditing live pages → hand off to seo-audit; schema details → schema-markup. Do not expand into a full site rebuild.
- **No regression.** This upgrade is additive: the 12 playbooks, implementation framework, quality checks, and common-mistakes guidance above remain the source of truth for execution.

## Related Skills

- **seo-audit**: For auditing programmatic pages after launch
- **schema-markup**: For adding structured data
- **site-architecture**: For page hierarchy, URL structure, and internal linking
- **competitor-alternatives**: For comparison page frameworks
