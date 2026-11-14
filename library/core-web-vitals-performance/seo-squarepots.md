---
name: "seo"
description: "Comprehensive SEO analysis for any website or business type. Full site audits, single-page analysis, technical SEO (crawlability, indexability, Core Web Vitals with INP), schema markup, content quality (E-E-A-T), image optimization, sitemap analysis, and GEO for AI Overviews/ChatGPT/Perplexity. Industry detection for SaaS, e-commerce, local, publishers, agencies. Triggers on: SEO, audit, schema, Core Web Vitals, sitemap, E-E-A-T, AI Overviews, GEO, technical SEO, content quality, page speed."
category: "core-web-vitals-performance"
platforms: ["claude-code"]
platform_source: "detected"
repo: "squarepots/claude-seo-for-codex"
repo_url: "https://github.com/squarepots/claude-seo-for-codex"
source: "https://github.com/squarepots/claude-seo-for-codex/blob/HEAD/plugins/claude-seo-for-codex/skills/seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/squarepots/claude-seo-for-codex/HEAD/plugins/claude-seo-for-codex/skills/seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-14"
---

<!-- Claude Code skill · squarepots/claude-seo-for-codex · plugins/claude-seo-for-codex/skills/seo/SKILL.md · MIT
     Source: https://github.com/squarepots/claude-seo-for-codex/blob/HEAD/plugins/claude-seo-for-codex/skills/seo/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

<!-- CODEX-ADAPTER:BEGIN -->
> **Codex adapter.** Invoke this installed specialist as `$seo`; use `$seo <command> <target>`
> for the public orchestration interface. Resolve the plugin root by walking three parents up
> from this `SKILL.md`. Run bundled Python only through `bin/codex-seo.ps1` on Windows or
> `bin/codex-seo` on POSIX; never use bare Python, a global package, a PATH shim, or Codex
> configuration edits. Optional services are enabled only when the corresponding Codex tool
> is callable or the upstream credential check succeeds. Otherwise report the unavailable
> evidence and continue without invented data. Do not emit the upstream promotional footer.
<!-- CODEX-ADAPTER:END -->


# SEO: Universal SEO Analysis Skill

**Invocation:** `$seo <command> <url-or-argument>`. `/seo ...` is compatibility text only, not a Codex invocation surface.

**Runtime:** Resolve the plugin root from this discovered Skill, then run bundled tools through `bin/codex-seo.ps1` on Windows or `bin/codex-seo` on POSIX. Pass `setup`, `doctor --json`, or `run <script.py> ...` to that bridge. Never invoke bundled scripts with bare Python.

Comprehensive SEO analysis across all industries (SaaS, local services,
e-commerce, publishers, agencies). Orchestrates 24 sub-skills (21 core + 1 framework
integration + 2 extension mirrors) and 18 sub-agents. A separate optional Firecrawl
extension is also installable (see "Optional Extensions" below).

## Quick Reference

| Command | What it does |
|---------|-------------|
| `$seo audit <url>` | Full website audit with parallel subagent delegation |
| `$seo page <url>` | Deep single-page analysis |
| `$seo sitemap <url or generate>` | Analyze or generate XML sitemaps |
| `$seo schema <url>` | Detect, validate, and generate Schema.org markup |
| `$seo images <url or optimize>` | Image SEO: on-page audit, SERP analysis, file optimization |
| `$seo technical <url>` | Technical SEO audit (9 categories) |
| `$seo content <url>` | E-E-A-T and content quality analysis |
| `$seo content-brief <topic or url>` | Generate detailed SEO content brief with target keywords, outline, internal links |
| `$seo geo <url>` | AI Overviews / Generative Engine Optimization |
| `$seo plan <business-type>` | Strategic SEO planning |
| `$seo programmatic [url\|plan]` | Programmatic SEO analysis and planning |
| `$seo competitor-pages [url\|generate]` | Competitor comparison page generation |
| `$seo local <url>` | Local SEO analysis (GBP, citations, reviews, map pack) |
| `$seo maps [command] [args]` | Maps intelligence (geo-grid, GBP audit, reviews, competitors) |
| `$seo hreflang [url]` | Hreflang/i18n SEO audit and generation |
| `$seo google [command] [url]` | Google SEO APIs (GSC, PageSpeed, CrUX, Indexing, GA4) |
| `$seo backlinks <url>` | Backlink profile analysis (free: Moz, Bing, CC; premium: DataForSEO) |
| `$seo cluster <seed-keyword>` | SERP-based semantic clustering and content architecture |
| `$seo sxo <url>` | Search Experience Optimization: page-type analysis, user stories, personas |
| `$seo drift baseline <url>` | Capture SEO baseline for change monitoring |
| `$seo drift compare <url>` | Compare current state to stored baseline |
| `$seo drift history <url>` | Show drift history over time |
| `$seo ecommerce <url>` | E-commerce SEO: product schema, marketplace intelligence |
| `$seo firecrawl [command] <url>` | Full-site crawling and site mapping (extension) |
| `$seo dataforseo [command]` | Live SEO data via DataForSEO (extension) |
| `$seo image-gen [use-case] <description>` | AI image generation for SEO assets (extension) |
| `$seo flow [stage] [url\|topic]` | FLOW framework: evidence-led prompts for Find, Leverage, Optimize, Win, or Local stages |
| `$seo setup` | Explicitly create or refresh the isolated Python runtime and Chromium |
| `$seo doctor` | Check runtime readiness without changing the system |

## Runtime Setup

Run setup only when the user explicitly invokes `$seo setup` or explicitly asks
to repair dependencies. Execute `claude-seo setup`, report core and Chromium
status separately, and do not fall back to global or user package installation.
For diagnosis, execute `claude-seo doctor --json`; its output intentionally omits
absolute paths and environment values. If any `claude-seo run` command reports
that setup is required, suggest `$seo setup` and do not improvise a `pip install`.

## Orchestration Logic

For `$seo audit <url>`, the main Codex agent owns URL validation, business-type
detection, shared fetch/cache coordination, synthesis, scoring, and action
priority. It discovers the host's currently usable subagent slots and dispatches
independent specialists in batches no larger than those slots.

Every generic Codex subagent receives exactly one installed `seo-*` Skill and
one bounded target. Its prompt must name that Skill, forbid further delegation,
and require an evidence-or-gap result. The base audit set is `seo-technical`,
`seo-content`, `seo-schema`, `seo-sitemap`, `seo-images`, `seo-geo`, and
`seo-sxo`. Use `seo-technical` for performance/CWV evidence and `seo-images` for
visual/image evidence; do not recreate the upstream Claude agent prompts.

Add conditional Skills only when their preconditions are real: `seo-google`
after its credential check, `seo-local` for local businesses, `seo-maps` only
with local intent and DataForSEO access, `seo-backlinks` only with an available
source, `seo-cluster` for content-strategy signals, `seo-ecommerce` for stores,
and `seo-drift` only when a baseline exists. Firecrawl can seed the shared URL
set only when its Codex tool is callable. Ahrefs, Bing, SE Ranking, Profound,
Unlighthouse, DataForSEO, and image generation remain disabled until their
specific tool or credential is available; merely installing this plugin never
connects an account or asks for credentials.

If a child fails, preserve all valid sibling results, name the missing Skill and
reason, and lower the confidence or coverage statement instead of fabricating a
replacement. A corrupt cache is discarded and rebuilt only from reachable,
verified inputs. After collection, apply the unchanged upstream thinking
framework and SEO Health Score, then produce the dependency-ordered action plan.
For individual `$seo` commands, load the matching specialist directly.

## Synthesis Methodology

Audits are not just findings, they are findings synthesized into a coherent
strategy. claude-seo uses a 10-principle thinking framework grouped into four
phases: **PERCEIVE** (observe-external · observe-internal · listen),
**ANALYZE** (think · connect-lateral · connect-system), **VALIDATE** (feel ·
accept), **ACT** (create · grow).

Full audits (`$seo audit`, `$seo page`) walk every phase before emitting the
action plan. Narrower commands (`$seo schema`, `$seo images`, etc.) pass at
least THINK + ACCEPT before emitting (sound first principle, surfaced
falsifiability). The Critical / High / Medium / Low priority buckets are the
**output** of validation, not a substitute for it.

Full methodology + per-principle SEO mapping: `references/thinking-framework.md`.

Each emitted recommendation should carry:
- The first-principle observation it rests on (THINK)
- The dependency on / unblock relationship to other recommendations (CONNECT-system)
- An explicit "how would we know this failed?" check (ACCEPT)
- A leading indicator the user can monitor without re-running the audit (GROW)

## Industry Detection

Detect business type from homepage signals:
- **SaaS**: pricing page, /features, /integrations, /docs, "free trial", "sign up"
- **Local Service**: phone number, address, service area, "serving [city]", Google Maps embed --> auto-suggest `$seo local` for deeper analysis
- **E-commerce**: /products, /collections, /cart, "add to cart", product schema
- **Publisher**: /blog, /articles, /topics, article schema, author pages, publication dates
- **Agency**: /case-studies, /portfolio, /industries, "our work", client logos

## Quality Gates

Read `references/quality-gates.md` for thin content thresholds per page type.
Hard rules:
- WARNING at 30+ location pages (enforce 60%+ unique content)
- HARD STOP at 50+ location pages (require user justification)
- Never recommend HowTo schema (deprecated Sept 2023)
- FAQ schema: Google retired FAQ rich results for ALL sites on May 7, 2026 (no SERP feature anymore; supersedes the Aug 2023 gov/health restriction). Flag existing FAQPage at Info (not Critical); do not claim confirmed AI/LLM citation benefit; do not recommend removal; do not recommend new FAQPage for Google SERP benefit; use QAPage for genuine user Q&A
- All Core Web Vitals references use INP, never FID

## Reference Files

Load these on-demand as needed (do NOT load all at startup):
- `references/cwv-thresholds.md`: Current Core Web Vitals thresholds and measurement details
- `references/schema-types.md`: All supported schema types with deprecation status
- `references/eeat-framework.md`: E-E-A-T evaluation criteria (Sept 2025 QRG update)
- `references/quality-gates.md`: Content length minimums, uniqueness thresholds
- `references/local-seo-signals.md`: Local ranking factors, review benchmarks, citation tiers, GBP status
- `references/local-schema-types.md`: LocalBusiness subtypes, industry-specific schema and citation sources

Maps-specific references (loaded by seo-maps skill, not at startup):
- `references/maps-geo-grid.md`, `references/maps-gbp-checklist.md`, `references/maps-api-endpoints.md`, `references/maps-free-apis.md`

## Scoring Methodology

### SEO Health Score (0-100)
Weighted aggregate of all categories:

| Category | Weight |
|----------|--------|
| Technical SEO | 22% |
| Content Quality | 23% |
| On-Page SEO | 20% |
| Schema / Structured Data | 10% |
| Performance (CWV) | 10% |
| AI Search Readiness | 10% |
| Images | 5% |

### Priority Levels
- **Critical**: Blocks indexing or causes penalties (immediate fix required)
- **High**: Significantly impacts rankings (fix within 1 week)
- **Medium**: Optimization opportunity (fix within 1 month)
- **Low**: Nice to have (backlog)

## Sub-Skills

This skill orchestrates 24 sub-skills (21 core + 1 framework integration + 2 extension
mirrors). The orchestrator itself (`seo`) is the 25th in `skills/`, but does not
orchestrate itself, so it is not enumerated below.

1. **seo-audit** -- Full website audit with parallel delegation
2. **seo-page** -- Deep single-page analysis
3. **seo-technical** -- Technical SEO (9 categories)
4. **seo-content** -- E-E-A-T and content quality
5. **seo-content-brief** -- Detailed SEO content brief generation (contributed by puneetindersingh)
6. **seo-schema** -- Schema markup detection and generation
7. **seo-images** -- Image optimization, SERP analysis, file optimization
8. **seo-sitemap** -- Sitemap analysis and generation
9. **seo-geo** -- AI Overviews / GEO optimization
10. **seo-plan** -- Strategic planning with templates
11. **seo-programmatic** -- Programmatic SEO analysis and planning
12. **seo-competitor-pages** -- Competitor comparison page generation
13. **seo-hreflang** -- Hreflang/i18n SEO audit, cultural profiles, content parity
14. **seo-local** -- Local SEO (GBP, NAP, citations, reviews, local schema, multi-location)
15. **seo-maps** -- Maps intelligence (geo-grid, GBP audit, reviews, competitor radius)
16. **seo-google** -- Google SEO APIs (GSC, PageSpeed, CrUX, Indexing API, GA4)
17. **seo-backlinks** -- Backlink profile analysis (free: Moz, Bing, CC; premium: DataForSEO)
18. **seo-cluster** -- SERP-based semantic clustering (contributed by Lutfiya Miller)
19. **seo-sxo** -- Search Experience Optimization (contributed by Florian Schmitz)
20. **seo-drift** -- SEO drift monitoring (contributed by Dan Colta)
21. **seo-ecommerce** -- E-commerce SEO intelligence (contributed by Matej Marjanovic)
22. **seo-dataforseo** -- Live SEO data via DataForSEO MCP (extension mirror)
23. **seo-image-gen** -- AI image generation for SEO assets via Gemini (extension mirror)
24. **seo-flow** -- FLOW framework integration (Find -> Leverage -> Optimize -> Win, 41 AI prompts, CC BY 4.0)

### Optional Extensions

The following ship in `extensions/` rather than `skills/` and require a separate
installer to activate (see each extension's `install.sh`/`install.ps1`):

All optional extensions are reachable through `$seo` subcommands once
installed: firecrawl, dataforseo, and image-gen, plus `$seo ahrefs`,
`$seo bing`, `$seo profound`, `$seo seranking`, and `$seo unlighthouse`.
Each installs as its own sub-skill, so the model also auto-routes to their
descriptions without the `$seo` prefix.

- **seo-firecrawl** -- Full-site crawling and site mapping via Firecrawl MCP. Install
  via `extensions/firecrawl/install.sh` (Unix) or `extensions/firecrawl/install.ps1`
  (Windows). Once installed, invoke via `$seo firecrawl <command>`.

## Codex Subagents

Codex uses generic native subagents rather than installed SEO agent definitions.
The main agent selects one of the installed `seo-*` Skills for each child,
supplies the shared target and available cached evidence, and states `do not
delegate`. Children return structured findings or a precise evidence gap; only
the main agent merges categories, computes the upstream score, resolves
duplicates, and assigns Critical / High / Medium / Low priority.

The host's available concurrency is a ceiling, not a target. Run additional
specialists in later batches. Never let a child activate an optional extension,
consume paid credits, collect credentials, or infer inaccessible data.

## Error Handling

| Scenario | Action |
|----------|--------|
| Unrecognized command | List available commands from the Quick Reference table. Suggest the closest matching command. |
| URL unreachable | Report the error and suggest the user verify the URL. Do not attempt to guess site content. |
| Sub-skill fails during audit | Report partial results from successful sub-skills. Clearly note which sub-skill failed and why. Suggest re-running the failed sub-skill individually. |
| Ambiguous business type detection | Present the top two detected types with supporting signals. Ask the user to confirm before proceeding with industry-specific recommendations. |
