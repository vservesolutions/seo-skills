---
name: "router-seo-geo"
description: "Route SEO, GEO, AEO & Discovery requests across the specialist Skills in this domain and connect them to adjacent PrePilot domains only when the job requires it."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "imMamdouhaboammar/prepilot-for-marketing"
repo_url: "https://github.com/imMamdouhaboammar/prepilot-for-marketing"
source: "https://github.com/imMamdouhaboammar/prepilot-for-marketing/blob/HEAD/skills/router-seo-geo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/imMamdouhaboammar/prepilot-for-marketing/HEAD/skills/router-seo-geo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 3
collected: "2026-11-13"
---

<!-- Unspecified skill · imMamdouhaboammar/prepilot-for-marketing · skills/router-seo-geo/SKILL.md · MIT
     Source: https://github.com/imMamdouhaboammar/prepilot-for-marketing/blob/HEAD/skills/router-seo-geo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO, GEO, AEO & Discovery Router

## Routing policy

Own requests whose primary job belongs to SEO, GEO, AEO & Discovery. Select the deepest specialist that matches the concrete job. Use more than one specialist only when the user needs distinct artifacts, decisions, validation, or measurement.

## Route construction

1. Identify the concrete job and requested output.
2. Match it to the specialist table below using trigger language and source description.
3. Choose one anchor specialist.
4. Follow `requires` only for missing upstream evidence that would materially alter the result.
5. Follow `feeds` or `next_best` when the user's scope explicitly includes the downstream job.
6. Follow `validates` before acting on high-impact output.
7. Return to `prepilot-router` when the task leaves this domain by more than one major job.

## Neural routing

This router owns 32 specialist nodes. The central graph lives at `../prepilot-router/references/skill-graph.json`; the searchable index lives at `../prepilot-router/references/routing-index.json`.

## Specialist index

| Skill | Best used for | Source |
|---|---|---|
| `aeo-geo` | Optimize AI engine visibility. Use when: AEO/GEO strategy, citation optimization, entity consistency across AI platforms. | digital-marketing-pro |
| `ai-seo` | When the user wants to optimize content for AI search engines, get cited by LLMs, or appear in AI-generated answers. Also use when the user mentions 'AI SEO,' 'AEO,' 'GEO,' 'LLMO,' | marketingskills-coreyhaines31 |
| `aso` | When the user wants to audit or optimize an App Store or Google Play listing. Also use when the user mentions 'ASO audit,' 'app store optimization,' 'optimize my app listing,' 'imp | marketingskills-coreyhaines31 |
| `blog-cannibalization` | Detect keyword cannibalization across blog posts by extracting primary keywords from titles and headings, clustering semantically similar targets, and flagging posts competing for  | claude-blog |
| `blog-cluster` | Semantic topic cluster planning and automated execution engine for claude-blog. Performs SERP-based keyword research, groups keywords by search intent and SERP overlap, builds a hu | claude-blog |
| `blog-decay` | Detect content decay from Google Search Console exports by comparing current and previous page performance, flagging quarter-over-quarter traffic drops, dropped pages, and refresh, | claude-blog |
| `blog-geo` | AI citation readiness audit as part of SEO, covering classic Google search and AI search surfaces together. Use whenever the user wants their content to rank or be cited in ChatGPT | claude-blog |
| `blog-schema` | Generate complete JSON-LD schema markup for blog posts with Article/BlogPosting, Person, Organization, BreadcrumbList, ImageObject, and optional FAQPage. Validates against Google r | claude-blog |
| `blog-seo-check` | Post-writing SEO validation with pass/fail checklist covering title tag length and keyword placement, meta description quality, heading hierarchy and keyword density, internal/exte | claude-blog |
| `blog-taxonomy` | Extract, suggest, and sync tags and categories for blog posts across all major CMS platforms. Supports WordPress REST API, Shopify GraphQL, Ghost Content API, Strapi REST/GraphQL,  | claude-blog |
| `content-gap-analysis` | Use when the user asks to "find content gaps", "竞品写了什么", or "还应该写什么"; builds a competitor-relative coverage map of missing topics, keyword gaps, and editorial-calendar opportunitie | aaron-marketing-skills |
| `content-quality-auditor` | Use when auditing content quality, E-E-A-T, or publish readiness; runs a typed 80-item CORE-EEAT profile with evidence coverage, veto checks, and a fix plan. Not for structural tag | aaron-marketing-skills |
| `content-writer` | Use when the user asks to "write SEO content", "draft a blog post / landing page", "update outdated content", or "fix traffic/ranking decay"; two modes — new drafts pages with keyw | aaron-marketing-skills |
| `directory-submissions` | When the user wants to submit their product to startup, SaaS, AI, agent, MCP, no-code, or review directories for backlinks, domain rating, and discovery. Also use when the user men | marketingskills-coreyhaines31 |
| `domain-authority-auditor` | Use when auditing domain authority, trust, or citation credibility; runs a peer-relative 40-item CITE profile with evidence coverage and verified manipulation/penalty veto checks.  | aaron-marketing-skills |
| `geo-optimizer` | Generative Engine Optimization (GEO) — make content rank in AI search answers from ChatGPT, Claude, Perplexity, Gemini, and Google AI Overviews. Audits existing content, rewrites f | NotFair |
| `local-seo` | Build local SEO strategy. Use when: optimizing Google Business Profile, fixing NAP consistency, improving local pack rankings. | digital-marketing-pro |
| `offsite-signal-analyzer` | Use when the user asks to "analyze backlinks", "analyze my off-site signals", or "track AI traffic / ChatGPT / Perplexity referrals"; profiles referring domains, anchor-text mix, t | aaron-marketing-skills |
| `on-page-seo-checker` | Use when the user asks to "audit on-page SEO" or "diagnose why a single page dropped"; scores titles, meta, header structure, keyword placement, links, and images with prioritized  | aaron-marketing-skills |
| `page-play-builder` | Use when the user asks to "build programmatic SEO pages", "generate pages at scale", "rank on a high-authority third-party site", "borrow domain authority", "build a vs / alternati | aaron-marketing-skills |
| `performance-monitor` | Use when the user asks to "generate an SEO report", "出月报", "set SEO alerts", or "排名掉了提醒我"; two modes — report builds multi-metric traffic/ranking/authority/content dashboards, and  | aaron-marketing-skills |
| `programmatic-seo` | When the user wants to create SEO-driven pages at scale using templates and data. Also use when the user mentions "programmatic SEO," "template pages," "pages at scale," "directory | marketingskills-coreyhaines31 |
| `programmatic-seo-gmo` | When the user wants to create SEO-driven pages at scale using templates and data. Also use when the user mentions "programmatic SEO," "template pages," "pages at scale," "directory | growth-marketing-os |
| `schema` | When the user wants to add, fix, or optimize schema markup and structured data on their site. Also use when the user mentions "schema markup," "structured data," "JSON-LD," "rich s | marketingskills-coreyhaines31 |
| `seo-audit` | When the user wants to audit, review, or diagnose SEO issues on their site. Also use when the user mentions "SEO audit," "technical SEO," "why am I not ranking," "SEO issues," "on- | marketingskills-coreyhaines31 |
| `seo-ops` | Deep marketing playbook for seo ops. | ai-marketing-skills-ericosiu |
| `serp-analysis` | Use when the user asks to "analyze the SERP" or "SERP分析"; maps SERP features, layout, ranking factors, search intent, AI Overviews, and snippet opportunities for a query. Not for k | aaron-marketing-skills |
| `serp-markup-builder` | Use when the user asks to "optimize meta tags", "write title tags / meta descriptions", "add Open Graph or Twitter cards", or "generate schema / JSON-LD" for FAQ, HowTo, Article, P | aaron-marketing-skills |
| `site-architecture` | When the user wants to plan, map, or restructure their website's page hierarchy, navigation, URL structure, or internal linking. Also use when the user mentions "sitemap," "site ma | marketingskills-coreyhaines31 |
| `site-structure-optimizer` | Use when the user asks to "plan my site structure", "design the page hierarchy / navigation / URL taxonomy", "fix internal linking", or "find orphan pages"; runs two modes — archit | aaron-marketing-skills |
| `technical-seo` | Deep technical SEO analysis. Use when: optimizing crawlability, Core Web Vitals, rendering, redirects, or sitemaps. | digital-marketing-pro |
| `technical-seo-checker` | Use when the user asks to "check technical SEO"; audits crawlability, indexing, Core Web Vitals, robots.txt, sitemaps, canonicals, redirects, and migrations. Not for on-page tags o | aaron-marketing-skills |

## Cross-domain exits

- `router-analytics-ops` when the remaining job belongs to that adjacent domain.
- `router-content-social` when the remaining job belongs to that adjacent domain.
- `router-copy-conversion` when the remaining job belongs to that adjacent domain.

## Output contract

Return the requested domain deliverable with any upstream evidence preserved. Do not expose a long list of candidate Skills unless the user asks how routing works.

## Quality gate

- The chosen anchor is more specific than this router.
- No selected specialist duplicates another selected specialist's job.
- Cross-domain hops are justified by a distinct requested outcome.
- The result respects the free Plugin runtime contract.

## Failure modes

- Using the domain router itself as a shallow substitute for a specialist.
- Selecting multiple near-duplicate Skills from different source repositories.
- Following source-specific setup or account-mutation instructions without an available connected tool.
- Losing the user's market, audience, budget, evidence, or previous decisions during handoff.

## Handoff

Pass the anchor specialist the user's task signature and all established evidence. If the route exits the domain, pass the produced artifact and unresolved decision to the target domain router.
