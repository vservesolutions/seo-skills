---
name: "safari-seo"
description: "Open-source agentic SEO skill for Tanzania safari, tour-operator, and travel sites. Works in Grok, Cursor, Claude Code, Codex, Copilot. Triggers on: safari SEO, tour operator SEO, Kilimanjaro/Serengeti/Ngorongoro ranking, TouristTrip schema, migration content, Northern Circuit keywords, local SEO Arusha Moshi, safari audit, hreflang, Core Web Vitals wildlife photos, or \"perform SEO analysis on <url>\". Ships 363 keywords, 15 sub-skills, 14 scripts. Outputs FULL-AUDIT-REPORT.md + ACTION-PLAN.md. Repo: github.com/cleven12/tanzania-tourism-seo"
category: "local-seo"
platforms: ["claude-code"]
platform_source: "detected"
repo: "cleven12/tanzania-tourism-seo"
repo_url: "https://github.com/cleven12/tanzania-tourism-seo"
source: "https://github.com/cleven12/tanzania-tourism-seo/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/cleven12/tanzania-tourism-seo/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 3
collected: "2026-11-10"
---

<!-- Claude Code skill · cleven12/tanzania-tourism-seo · SKILL.md · MIT
     Source: https://github.com/cleven12/tanzania-tourism-seo/blob/HEAD/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Safari SEO Skill (Agentic / Tanzania Tourism)

LLM-first SEO analysis skill purpose-built for Tanzania safari and tour-operator websites. Includes **15 specialized sub-skills**, **7 specialist agents**, and script-backed evidence collection for Kilimanjaro treks, Serengeti safaris, Ngorongoro crater trips, Northern Circuit packages, and Zanzibar add-ons.

`<SKILL_DIR>` = absolute path to this skill directory (the folder containing this `SKILL.md`).

## Deterministic Trigger Mapping

Map common user wording to a fixed workflow:

| User says | Route to |
|-----------|----------|
| `perform seo analysis on <url>` | **Single-URL full audit** → `resources/skills/safari-page.md` |
| `audit my safari site` / `full SEO check` | **Full site audit** → `resources/skills/safari-audit.md` |
| `optimize tour page` / `new safari package` | `resources/skills/safari-tour-page.md` |
| `serengeti page` / `kilimanjaro landing page` | `resources/skills/safari-destination.md` |
| `keyword research tanzania` | `resources/skills/safari-keywords.md` |
| `google business profile arusha` | `resources/skills/safari-local.md` |
| `schema for safari package` | `resources/skills/safari-schema.md` |
| `hreflang swahili english` | `resources/skills/safari-hreflang.md` |
| `competitor analysis safari` | `resources/skills/safari-competitors.md` |
| `AI search / ChatGPT citations` | `resources/skills/safari-geo.md` |
| No explicit sub-skill + URL provided | **Single-URL full audit** with mandatory deliverables |

For full/page audits, **always** produce:
- `FULL-AUDIT-REPORT.md` (detailed findings with evidence)
- `ACTION-PLAN.md` (prioritized fixes)

## Available Commands

| Command | Sub-Skill | Description |
|---------|-----------|-------------|
| `safari audit <url>` | [safari-audit](resources/skills/safari-audit.md) | Full site audit with Tanzania scoring |
| `safari page <url>` | [safari-page](resources/skills/safari-page.md) | Deep single-page analysis |
| `safari content <url>` | [safari-content](resources/skills/safari-content.md) | E-E-A-T, depth, safari trust signals |
| `safari technical <url>` | [safari-technical](resources/skills/safari-technical.md) | Crawlability, CWV, indexing, security |
| `safari schema <url>` | [safari-schema](resources/skills/safari-schema.md) | TouristTrip, Product, TouristAttraction JSON-LD |
| `safari local <url>` | [safari-local](resources/skills/safari-local.md) | GBP, citations, Arusha/Moshi local SEO |
| `safari keywords <topic>` | [safari-keywords](resources/skills/safari-keywords.md) | Park-level keyword & seasonality research |
| `safari plan <url>` | [safari-plan](resources/skills/safari-plan.md) | Strategic content calendar & hub architecture |
| `safari competitors <query>` | [safari-competitors](resources/skills/safari-competitors.md) | SERP gap analysis vs ranking operators |
| `safari hreflang <url>` | [safari-hreflang](resources/skills/safari-hreflang.md) | EN/DE/FR/SW international validation |
| `safari images <url>` | [safari-images](resources/skills/safari-images.md) | Safari photo alt text, WebP, LCP heroes |
| `safari sitemap <url>` | [safari-sitemap](resources/skills/safari-sitemap.md) | Tour/destination sitemap quality gates |
| `safari tour-page <url>` | [safari-tour-page](resources/skills/safari-tour-page.md) | Commercial package page launch checklist |
| `safari destination <url>` | [safari-destination](resources/skills/safari-destination.md) | Park hub page optimization |
| `safari geo <url>` | [safari-geo](resources/skills/safari-geo.md) | AI search citation readiness |

---

## Orchestration Logic

### Step 1 — Identify the Task

Parse the user's request and read the matching `resources/skills/safari-*.md` file **before** executing.

- **Full audit**: `safari-audit.md` — crawl key pages (homepage, top tours, destination hubs, blog), delegate to agents
- **Single page**: `safari-page.md` — deep dive on one URL
- **Tour launch**: `safari-tour-page.md` + `checklists/new-tour-page.md`
- **Destination hub**: `safari-destination.md` + `checklists/new-destination-page.md`
- **Strategic plan**: `safari-plan.md` + seasonality from `04-tanzania-niche/seasonality.md`

### Step 2 — Load Tanzania Ground Truth

**Always** load `references.md` when citing fees, visas, park rules, or authority facts.

| Fact type | Authoritative source | Never |
|-----------|---------------------|-------|
| National park fees | `tanzaniaparks.go.tz` (TANAPA) | Guess USD amounts |
| Ngorongoro fees | `ncaa.go.tz` | Conflate with TANAPA |
| Visa rules | `immigration.go.tz` | Outdated blog posts |
| Industry standards | `tatotz.org` (TATO) | Invent certifications |
| Porter ethics | `kpap.org` | Generic "responsible tourism" |
| Keyword volumes | `04-tanzania-niche/keywords/*.csv` bands | Fabricate exact MSV |

### Step 3 — Collect Evidence

**Primary (LLM-first):** Use `read_url_content` or direct page fetch for baseline reasoning.

**Deterministic verification (when script execution is available):**

```bash
# Fetch and parse page HTML
python3 <SKILL_DIR>/scripts/fetch_page.py <url> --output /tmp/safari-page.html
python3 <SKILL_DIR>/scripts/parse_html.py /tmp/safari-page.html --url <url> --json

# Tanzania-specific audit runner
python3 <SKILL_DIR>/scripts/seo-audit.py <url> --json

# Core Web Vitals (mobile-first — safari travelers book on phones)
python3 <SKILL_DIR>/scripts/pagespeed.py <url> --strategy mobile --json

# Robots, security, redirects
python3 <SKILL_DIR>/scripts/robots_checker.py <url>
python3 <SKILL_DIR>/scripts/security_headers.py <url>
python3 <SKILL_DIR>/scripts/redirect_checker.py <url>

# Schema validation against repo templates
python3 <SKILL_DIR>/scripts/validate_schema.py <file_or_url>
python3 <SKILL_DIR>/scripts/generate-schema.py --template touristtrip --input tour.yaml --json

# Sitemap analysis
python3 <SKILL_DIR>/scripts/sitemap_checker.py <url>
python3 <SKILL_DIR>/scripts/sitemap-gen.py --urls urls.txt --output sitemap.xml

# Images (hero photos dominate LCP on safari sites)
python3 <SKILL_DIR>/scripts/image_inventory.py <url> --json
python3 <SKILL_DIR>/scripts/image_weight_audit.py <url> --json

# Local SEO signals
python3 <SKILL_DIR>/scripts/local_seo_checker.py <url> --json

# Hreflang for multilingual operator sites
python3 <SKILL_DIR>/scripts/hreflang_checker.py <url> --json

# Readability and content depth
python3 <SKILL_DIR>/scripts/readability.py /tmp/safari-page.html --json
python3 <SKILL_DIR>/scripts/article_seo.py <url> --keyword "<target_keyword>" --json

# Broken links (critical on itinerary pages with many internal links)
python3 <SKILL_DIR>/scripts/broken_links.py <url> --workers 5

# AI search readiness
python3 <SKILL_DIR>/scripts/llms_txt_checker.py <url>
python3 <SKILL_DIR>/scripts/citation_readiness.py <url> --json
```

> Do not use third-party mirrors (e.g., `r.jina.ai`) as primary evidence when direct fetch or bundled scripts are available.

If a script fails (network, timeout, missing dependency), report as **environment limitation** — not a confirmed site issue. Continue with LLM analysis at `Likely` confidence.

### Step 4 — Delegate to Specialist Agents

For comprehensive audits, adopt the relevant agent role from `resources/agents/`:

| Agent | File | Focus |
|-------|------|-------|
| Technical SEO | [safari-technical.md](resources/agents/safari-technical.md) | Crawlability, CWV, mobile, JS rendering |
| Content Quality | [safari-content.md](resources/agents/safari-content.md) | E-E-A-T, experience signals, thin content |
| Schema Markup | [safari-schema.md](resources/agents/safari-schema.md) | TouristTrip, Product, TouristAttraction |
| Local SEO | [safari-local.md](resources/agents/safari-local.md) | GBP, NAP, Arusha/Moshi citations |
| Performance | [safari-performance.md](resources/agents/safari-performance.md) | LCP heroes, INP on booking widgets |
| Verifier | [safari-verifier.md](resources/agents/safari-verifier.md) | Deduplicate, validate evidence, suppress contradictions |
| Tanzania Niche | [tanzania-niche.md](resources/agents/tanzania-niche.md) | Migration timing, routes, fees, seasonality |

### Step 5 — Apply Repo Quality Gates

| Resource | Path | Use for |
|----------|------|---------|
| Meta tag formulas | `01-onpage-content/meta-tags-guide.md` | Title/description patterns |
| Page architecture | `01-onpage-content/page-architecture.md` | Hub-and-spoke tour/destination structure |
| Internal linking | `01-onpage-content/internal-linking.md` | Blog → tour → destination flows |
| Content briefs | `01-onpage-content/content-briefs/` | Kilimanjaro, Serengeti, Ngorongoro templates |
| Schema templates | `02-technical/schema/` | JSON-LD with `{{PLACEHOLDER}}` syntax |
| Crawl checklist | `02-technical/crawl-checklist.md` | Indexing gates |
| CWV thresholds | `02-technical/core-web-vitals.md` | LCP/INP/CLS targets |
| Hreflang guide | `02-technical/hreflang-i18n.md` | EN/DE/FR/SW patterns |
| GBP guide | `03-local/google-business-profile.md` | Operator categories, service areas |
| Seasonality | `04-tanzania-niche/seasonality.md` | Content calendar timing |
| Search intent | `04-tanzania-niche/search-intent-by-park.md` | Info vs commercial routing |
| Glossary | `04-tanzania-niche/glossary.md` | Swahili terms, TANAPA/TATO/KPAP |
| Competitor patterns | `04-tanzania-niche/competitor-patterns.md` | SERP observation framework |
| Launch checklists | `checklists/` | Tour page, destination, monthly SEO |

### Step 6 — Verify Findings

```bash
python3 <SKILL_DIR>/scripts/finding_verifier.py --findings-json <raw_findings.json> --json
```

Use verified output for final report tables. Cross-check Tanzania-specific claims against `references.md` authorities.

### Step 7 — Score and Report

#### Tanzania Safari Scoring Weights (Full Audit)

> **Canonical source of truth** — defined here and mirrored in `resources/skills/safari-audit.md`.

| Category | Weight | Rationale |
|----------|--------|-----------|
| Content Quality & E-E-A-T | 22% | Trust-critical YMYL-adjacent travel queries |
| Technical SEO | 18% | Mobile booking, crawlability, indexation |
| On-Page SEO | 15% | Title/meta/H1 for competitive safari SERPs |
| Schema / Structured Data | 15% | TouristTrip, Product, Offer rich results |
| Local SEO & Trust | 12% | Arusha/Moshi operators depend on local + GBP |
| Performance (CWV) | 8% | Hero images and booking widgets affect CWV |
| Image Optimization | 5% | Wildlife photos are primary content |
| AI Search Readiness (GEO) | 5% | Growing AI travel research channel |

#### Score Interpretation

| Score | Rating |
|-------|--------|
| 90-100 | Excellent |
| 70-89 | Good |
| 50-69 | Needs Improvement |
| 30-49 | Poor |
| 0-29 | Critical |

### Step 8 — Mandatory Deliverables

For `safari audit`, `safari page`, and generic `perform seo analysis on <url>` flows:

1. Create `FULL-AUDIT-REPORT.md` at audit start; update as evidence arrives
2. Create `ACTION-PLAN.md` at audit start; prioritize Critical → High → Medium → Low
3. List all generated artifact paths in the final response
4. Include **Environment Limitations** section if scripts were blocked
5. Flag any unverified fee/visa claims with `⚠️ VERIFY AT SOURCE`

#### Report Severity Levels

- 🔴 **Critical** — Blocks indexing, violates structured data policy, or misstates fees/visas
- ⚠️ **Warning** — Optimization opportunity (fix within 1 month)
- ✅ **Pass** — Meets or exceeds standards
- ℹ️ **Info** — Not applicable or informational

---

## Tanzania Page-Type Detection

Auto-detect page type to apply correct checks:

| Signals | Page Type | Sub-Skill | Min Words |
|---------|-----------|-----------|-----------|
| Price, duration, itinerary, "book now" | Tour package | `safari-tour-page.md` | 800+ |
| Park name, wildlife, best time, no price | Destination hub | `safari-destination.md` | 1,200+ |
| Route comparison, packing list, how-to | Informational blog | `safari-content.md` | 1,500+ |
| Company name, team, licenses, contact | Operator brand | `safari-local.md` | 500+ |
| `/de/`, `/fr/`, `hreflang` | International | `safari-hreflang.md` | — |

## Schema Templates (Repo)

Pre-built JSON-LD in `02-technical/schema/`:

| Template | Page Type |
|----------|-----------|
| `touristtrip.json` + `product-offer-tour.json` | Multi-day safari/trek packages |
| `touristattraction.json` | Park/destination hubs |
| `organization-travelagency.json` | Operator footer sitewide |
| `review-aggregaterating.json` | First-party reviews only |
| `breadcrumblist.json` | All pages with URL depth |
| `faqpage.json` | FAQ sections (note: rich results restricted for commercial FAQ schema — use for content structure, not rich result expectation) |

Generate programmatically:
```bash
python3 <SKILL_DIR>/scripts/generate-schema.py --template product-offer-tour --input tour.yaml
```

Validate before publish:
```bash
# Rich Results Test: https://search.google.com/test/rich-results
python3 <SKILL_DIR>/scripts/validate_schema.py templates/tour-page.html
```

---

## Critical Rules (Tanzania Safari)

1. **INP not FID** — INP is the sole interactivity metric (FID removed September 9, 2024). Never reference FID.
2. **Never fabricate fees** — Cite `tanzaniaparks.go.tz` or `ncaa.go.tz` with retrieval date; use `⚠️ VERIFY` if live fetch failed.
3. **Never fabricate reviews in schema** — `AggregateRating` must reflect real first-party reviews only.
4. **FAQ schema is restricted** — FAQPage rich results limited to government/health authority sites. Commercial safari sites may use FAQ *content* structure without expecting FAQ rich results.
5. **HowTo schema is deprecated** — Never recommend for Kilimanjaro packing lists.
6. **JSON-LD only** — Never recommend Microdata or RDFa.
7. **Migration claims need dates** — Serengeti migration timing varies annually; cite general patterns from `04-tanzania-niche/seasonality.md`, avoid false precision ("crossing on July 15").
8. **Kilimanjaro route facts** — Seven official routes (Marangu, Machame, Lemosho, Shira, Rongai, Northern Circuit, Umbwe); success rates vary by operator — don't invent percentages without source.
9. **White-hat only** — Refuse PBNs, fake reviews, scraped aggregator content, AI doorway pages per park.
10. **Location page limits** — Warning at 30+ near-duplicate destination pages; hard stop at 50+.
11. **LLM-first, script-backed** — Always attempt scripts; never block report on single script failure.
12. **Mandatory file artifacts** — `FULL-AUDIT-REPORT.md` + `ACTION-PLAN.md` for audit flows.
13. **Commercial vs informational routing** — Route info queries to blogs (`safari-content`); commercial queries to tour pages (`safari-tour-page`) per `04-tanzania-niche/search-intent-by-park.md`.

---

## Dependencies

```bash
pip install -r <SKILL_DIR>/scripts/requirements.txt
# Optional: Playwright for visual analysis
pip install playwright && playwright install chromium
```

Local repo scripts (M4+): `seo-audit.py`, `sitemap-gen.py`, `generate-schema.py` — see `scripts/README.md`.
