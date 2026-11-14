---
name: "seo"
description: "Comprehensive SEO analysis for any website or business type. Full site audits, single-page analysis, technical SEO (crawlability, indexability, Core Web Vitals with INP), schema markup, content quality (E-E-A-T), image optimization, sitemap analysis, persistent SEO context, and GEO for AI Overviews/ChatGPT/Perplexity. Industry detection for SaaS, e-commerce, local, publishers, agencies. Triggers on: SEO, audit, SEO context, schema, Core Web Vitals, sitemap, E-E-A-T, AI Overviews, GEO, technical SEO, content quality, page speed."
category: "core-web-vitals-performance"
platforms: ["claude-code"]
platform_source: "detected"
repo: "BruceL017/codex-seo"
repo_url: "https://github.com/BruceL017/codex-seo"
source: "https://github.com/BruceL017/codex-seo/blob/HEAD/plugins/codex-seo/skills/seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/BruceL017/codex-seo/HEAD/plugins/codex-seo/skills/seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · BruceL017/codex-seo · plugins/codex-seo/skills/seo/SKILL.md · MIT
     Source: https://github.com/BruceL017/codex-seo/blob/HEAD/plugins/codex-seo/skills/seo/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO: Universal SEO Analysis Skill

**Invocation:** Use `$seo` for routing or invoke a focused skill directly, such
as `$seo-audit`, `$seo-technical`, or `$seo-semrush`. Natural-language requests
may activate the same skills from their descriptions.

**Runtime:** Run bundled Python tools through `codex-seo run <script.py>`. Plugin
installs expose this command automatically. Repository users run
`./bin/codex-seo`; manual installers rewrite the command to the isolated
launcher path. Never invoke bundled scripts with a bare Python interpreter.

Comprehensive SEO analysis across all industries (SaaS, local services,
e-commerce, publishers, agencies). Routes across 34 focused skills and can
delegate independent audit work to 24 Codex custom agents. Nine optional
extensions enrich the zero-key core audit without becoming hard dependencies.

## Quick Reference

| Command | What it does |
|---------|-------------|
| `$seo-audit <url>` | Full website audit with parallel subagent delegation |
| `$seo context create` | Draft and confirm project SEO context |
| `$seo context update` | Review and confirm changes to project SEO context |
| `$seo context show` | Read project SEO context without changing it |
| `$seo-page <url>` | Deep single-page analysis |
| `$seo-sitemap <url or generate>` | Analyze or generate XML sitemaps |
| `$seo-schema <url>` | Detect, validate, and generate Schema.org markup |
| `$seo-images <url or optimize>` | Image SEO: on-page audit, SERP analysis, file optimization |
| `$seo-technical <url>` | Technical SEO audit (9 categories) |
| `$seo-content <url>` | E-E-A-T and content quality analysis |
| `$seo-content-brief <topic or url>` | Generate detailed SEO content brief with target keywords, outline, internal links |
| `$seo-geo <url>` | AI Overviews / Generative Engine Optimization |
| `$seo-plan <business-type>` | Strategic SEO planning |
| `$seo-programmatic [url\|plan]` | Programmatic SEO analysis and planning |
| `$seo-competitor-pages [url\|generate]` | Competitor comparison page generation |
| `$seo-local <url>` | Local SEO analysis (GBP, citations, reviews, map pack) |
| `$seo-maps [command] [args]` | Maps intelligence (geo-grid, GBP audit, reviews, competitors) |
| `$seo-hreflang [url]` | Hreflang/i18n SEO audit and generation |
| `$seo-google [command] [url]` | Google SEO APIs (GSC, PageSpeed, CrUX, Indexing, GA4) |
| `$seo-backlinks <url>` | Backlink profile analysis (free: Moz, Bing, CC; premium: DataForSEO) |
| `$seo-cluster <seed-keyword>` | SERP-based semantic clustering and content architecture |
| `$seo-sxo <url>` | Search Experience Optimization: page-type analysis, user stories, personas |
| `$seo-drift baseline <url>` | Capture SEO baseline for change monitoring |
| `$seo-drift compare <url>` | Compare current state to stored baseline |
| `$seo-drift history <url>` | Show drift history over time |
| `$seo-ecommerce <url>` | E-commerce SEO: product schema, marketplace intelligence |
| `$seo-firecrawl [command] <url>` | Full-site crawling and site mapping (extension) |
| `$seo-dataforseo [command]` | Live SEO data via DataForSEO (extension) |
| `$seo-image-gen [use-case] <description>` | AI image generation for SEO assets (extension) |
| `$seo-flow [stage] [url\|topic]` | FLOW framework: evidence-led prompts for Find, Leverage, Optimize, Win, or Local stages |
| `$seo-performance <url>` | Core Web Vitals and loading diagnostics |
| `$seo-visual <url>` | Desktop/mobile rendering and screenshot evidence |
| `$seo-semrush <query>` | Official Semrush MCP data (optional, OAuth) |
| `codex-seo setup` | Create or refresh the isolated Python runtime and Chromium |
| `codex-seo doctor --json` | Check runtime readiness without changing the system |

## Runtime Setup

Run setup only when the user explicitly asks
to repair dependencies. Execute `codex-seo setup`, report core and Chromium
status separately, and do not fall back to global or user package installation.
For diagnosis, execute `codex-seo doctor --json`; its output intentionally omits
absolute paths and environment values. If any `codex-seo run` command reports
that setup is required, suggest `codex-seo setup` and do not improvise a `pip install`.

## Project SEO Context

`$seo context create|update|show` manages one project-local source of business
context without adding another Skill, Agent, database, or global profile. The
file is `<project-root>/.agents/seo-context.md`; use the nearest parent that
contains `.git` as the project root, otherwise use the current working
directory. Never search outside that project to find or combine context files.

- **create**: inspect available site evidence and user-provided facts, then show
  a complete draft in the conversation. Label unsupported conclusions as
  assumptions. Do not write the file until the user explicitly confirms it.
- **update**: read the current file, show a focused diff, and write only after
  the user confirms the changed facts.
- **show**: read and summarize the file; it is strictly non-mutating.

Use this minimal Markdown template:

```markdown
---
target: "https://example.com/"
confirmed_at: "2026-08-14T00:00:00Z"
---

# SEO Context
## Business and offerings
## Audiences and search jobs
## Goals and conversions
## Page responsibilities and priorities
## Priority markets, languages, and topics
## Known competitors
## Proof and claims the user permits
## Constraints and exclusions
```

Keep only information needed to plan and prioritize SEO work. Never store
credentials, private customer records, contact lists, analytics exports, or
claims the user did not confirm. A report may use confirmed context to explain
business relevance, order actions, and match the user's language, but context never
changes deterministic checks, Finding severity or confidence, measured
coverage, or the SEO Health Score. If the file is absent, invalid, or its
`target` host differs from the audited host, continue without it and say why.

## Orchestration Logic

When the user invokes `$seo-audit` and explicitly requests parallel agents,
delegate independent work:
1. Detect business type (SaaS, local, ecommerce, publisher, agency, other)
2. Spawn subagents: seo-technical, seo-content, seo-schema, seo-sitemap, seo-performance, seo-visual, seo-geo
3. If Google API credentials detected (`codex-seo run google_auth.py --check`), also spawn seo-google agent
4. If local business detected, also spawn seo-local agent
5. If local business detected AND DataForSEO MCP available, also spawn seo-maps agent
6. If backlink APIs detected (`codex-seo run backlinks_auth.py --check`), also spawn seo-backlinks agent
7. If Firecrawl MCP available, use `firecrawl_map` to discover all site URLs before analysis
8. If Semrush MCP is authenticated, use it only for requested live keyword,
   domain, backlink, traffic, or competitor evidence; preserve its metric definitions
9. If content strategy signals detected, also spawn seo-cluster agent
10. If e-commerce detected, also spawn seo-ecommerce agent
11. If drift baseline exists, also spawn seo-drift agent
12. Always include seo-sxo in full audits
13. Collect results into the stable finding contract and generate the unified report
14. Walk PERCEIVE → ANALYZE → VALIDATE → ACT before assigning severity
15. Create a dependency-sequenced action plan with falsifiability per recommendation

For individual commands, load the relevant sub-skill directly.
Do not add PDF, spreadsheet, or duplicate report formats to `$seo-audit`.
`scripts/google_report.py` remains a separate Google-data export and may be used
only when the user explicitly asks for that format.

## Synthesis Methodology

Audits are not just findings, they are findings synthesized into a coherent
strategy. codex-seo uses a 10-principle thinking framework grouped into four
phases: **PERCEIVE** (observe-external · observe-internal · listen),
**ANALYZE** (think · connect-lateral · connect-system), **VALIDATE** (feel ·
accept), **ACT** (create · grow).

Full audits (`$seo-audit`, `$seo-page`) walk every phase before emitting the
action plan. Narrower commands (`$seo-schema`, `$seo-images`, etc.) pass at
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
- **Local Service**: phone number, address, service area, "serving [city]", Google Maps embed --> auto-suggest `$seo-local` for deeper analysis
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

This skill routes to 33 focused sub-skills. The orchestrator itself (`seo`) is
the 34th directory in `skills/`.

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
25. **seo-performance** -- Core Web Vitals and loading diagnostics
26. **seo-visual** -- Rendered desktop/mobile visual inspection
27. **seo-firecrawl** -- Provider-backed site discovery and crawling
28. **seo-ahrefs** -- Official Ahrefs MCP backlink and keyword data
29. **seo-bing** -- Bing Webmaster and IndexNow workflows
30. **seo-profound** -- LLM citation monitoring
31. **seo-seranking** -- AI visibility and share-of-voice data
32. **seo-unlighthouse** -- Local multi-page Lighthouse audits
33. **seo-semrush** -- Official Semrush hosted MCP data

### Optional Extensions

The following ship in `extensions/` rather than `skills/` and require a separate
installer to activate (see each extension's `install.sh`/`install.ps1`):

All optional extensions are reachable through `$seo` subcommands once
installed: firecrawl, dataforseo, image-gen, ahrefs, bing, profound, seranking,
unlighthouse, and Semrush. Semrush uses the official hosted MCP and OAuth.
Each installs as its own sub-skill, so the model also auto-routes to their
descriptions without the `$seo` prefix.

- **seo-firecrawl** -- Full-site crawling and site mapping via Firecrawl MCP. Install
  via `extensions/firecrawl/install.sh` (Unix) or `extensions/firecrawl/install.ps1`
  (Windows). Once installed, invoke via `$seo-firecrawl <command>`.

## Subagents

For parallel analysis during audits:
- `seo-technical` -- Crawlability, indexability, security, CWV
- `seo-content` -- E-E-A-T, readability, thin content
- `seo-schema` -- Detection, validation, generation
- `seo-sitemap` -- Structure, coverage, quality gates
- `seo-performance` -- Core Web Vitals measurement
- `seo-visual` -- Screenshots, mobile testing, above-fold
- `seo-geo` -- AI crawler access, llms.txt, citability, brand mention signals
- `seo-local` -- GBP signals, NAP consistency, reviews, local schema, industry-specific local factors (conditional: spawned when Local Service detected)
- `seo-maps` -- Geo-grid rank tracking, GBP audit, review intelligence, competitor radius mapping (conditional: spawned when Local Service detected AND DataForSEO MCP available)
- `seo-google` -- CWV field data, URL indexation status, organic traffic trends (conditional: spawned when Google API credentials detected)
- `seo-backlinks` -- Backlink profile data: DA/PA, referring domains, anchor text, toxic links (conditional: spawned when Moz/Bing API keys detected or always for CC domain-level metrics)
- `seo-cluster` -- Semantic clustering analysis (conditional: content strategy detected)
- `seo-sxo` -- Page-type mismatch, user stories, persona scoring (always in full audits)
- `seo-drift` -- Baseline comparison (conditional: drift baseline exists for URL)
- `seo-ecommerce` -- Product schema, marketplace intel (conditional: e-commerce detected)
- `seo-flow` -- FLOW framework prompts (conditional: spawned for content strategy workflows)
- `seo-dataforseo` -- Live SERP, keyword, backlink, local SEO data (extension, optional)
- `seo-image-gen` -- SEO image audit and generation plan (extension, optional)

Semrush is a shared provider skill, not a duplicate custom agent. The
competitor, backlink, content, and audit agents may call `$seo-semrush` when
the user has authenticated it.

## Error Handling

| Scenario | Action |
|----------|--------|
| Unrecognized command | List available commands from the Quick Reference table. Suggest the closest matching command. |
| URL unreachable | Report the error and suggest the user verify the URL. Do not attempt to guess site content. |
| Sub-skill fails during audit | Report partial results from successful sub-skills. Clearly note which sub-skill failed and why. Suggest re-running the failed sub-skill individually. |
| Ambiguous business type detection | Present the top two detected types with supporting signals. Ask the user to confirm before proceeding with industry-specific recommendations. |
