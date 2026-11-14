---
name: "audit-intake"
description: "Handles the initial data collection phase for SEO audits. Activates when the user triggers an audit, mentions starting an SEO review, or provides a business URL for analysis. Collects all required information, creates the project directory structure under projects/[slug]/, validates URL accessibility, and writes intake-data.md as the source of truth for all subsequent phases. Phase 0. Output: {AUDIT_DIR}/intake-data.md"
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "david-dacruz/local-seo-audit"
repo_url: "https://github.com/david-dacruz/local-seo-audit"
source: "https://github.com/david-dacruz/local-seo-audit/blob/HEAD/research/audit-intake/SKILL.md"
raw_source: "https://raw.githubusercontent.com/david-dacruz/local-seo-audit/HEAD/research/audit-intake/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · david-dacruz/local-seo-audit · research/audit-intake/SKILL.md · MIT
     Source: https://github.com/david-dacruz/local-seo-audit/blob/HEAD/research/audit-intake/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Audit Intake — Phase 0

## Executive Summary

Phase 0 is the foundation of the entire 21-phase audit. The quality of intake data directly determines audit accuracy. Every subsequent phase reads `{AUDIT_DIR}/intake-data.md` — incomplete intake = cascading errors across all phases. In 2025–2026, intake has expanded beyond basic data collection: AI search now accounts for an estimated 25–40% of zero-click query resolution (Semrush 2025), meaning business goals must explicitly address AI Overviews, ChatGPT, Perplexity, and Gemini visibility — not just traditional organic rankings. GBP signals are confirmed as the #1 local ranking factor (Whitespark 2024), making GBP URL and review count collection at intake critical for Phase 11 benchmarks. Competitor landscape snapshot at intake saves 2–3 hours later by pre-populating Phase 1.

**2025–2026 intake benchmarks:**
- Average intake completion: 10–15 min (prepared client); 20–30 min (requires competitor research)
- TTFB threshold: <800ms Good; >1,800ms Critical — flag for Phase 10 immediately
- Minimum competitors to collect: 3 (local pack top-3); ideal 5 (3 local + 2 organic)
- GSC access impact: phases 6 (keyword gaps), 7 (topical gaps), 20 (penalty check) all degraded without GSC — flag clearly
- Domain age <6 months: automatically flag Phase 12 backlinks as "authority building" priority, not penalty recovery
- AI search context (2025): businesses without GBP presence, review velocity, or E-E-A-T content are excluded from AIO local pack citations

**Numbered Action Plan:**

### Immediate (First 15 Minutes)
1. **Present intake form** — collect items 1–6 (required) before any other work. Missing even one required field = defer audit start. Effort: 5–10 min.
2. **Run URL validation** — `python3 scripts/check_url.py --url [URL] --full`. Captures HTTP status, SSL validity, redirect chain, TTFB, basic on-page signals (H1, title). Effort: 2 min. Flag if TTFB >800ms, SSL error, or 4xx/5xx.
3. **Create project directory** — `python3 scripts/setup_project.py --name "..." --url "..." --location "..."`. Sets all path variables used by all 21 phases. Effort: 1 min. Priority: 25 (5×5).
4. **Auto-identify competitors** — if item 7 skipped: run 3-search protocol (service+city; best+service+city; service+city+reviews) → extract top-3 local pack + top-2 organic non-directories. Effort: 10–15 min.
5. **Collect competitor intelligence** — for each competitor: name, URL, GBP URL, star rating, review count, approximate DR from Ahrefs/Moz free check. Effort: 5 min (3–5 competitors).

### Short-Term (Before Launching Phase 1)
6. **Run initial business intelligence checks** — `site:[domain]` indexed count; branded search Knowledge Panel check; BuiltWith.com for CMS detection. Effort: 5 min. Priority: 15 (3×5).
7. **Pre-flag issues for downstream phases** — note any flags in intake-data.md: TTFB, no Knowledge Panel, Wix/Squarespace CMS, domain <6 months, no GBP. Each flag fast-tracks a finding in the relevant phase. Effort: 5 min.
8. **Confirm GSC/GA4 access status** — GSC access unlocks accurate data in 5+ phases. If unavailable, note: Ahrefs/Semrush estimates will substitute (with lower confidence). Effort: 2 min.
9. **Check for immediate penalty signals** — quick scan: `site:[domain]` count dramatically lower than expected? Any manual actions visible in GSC? Rank for branded name? Flag for Phase 20. Effort: 3 min.
10. **Write and confirm intake-data.md** — write complete file to `{AUDIT_DIR}/intake-data.md` with YAML frontmatter. Display confirmation summary. Launch Phase 1. Effort: 5 min.

---

## Tools for This Phase

| Tool | Purpose | Cost |
|------|---------|------|
| `python3 scripts/setup_project.py` | Create project directory + project.json | Free (local) |
| `python3 scripts/check_url.py --full` | Validate URL: HTTP status, SSL, redirect chain, TTFB | Free (local) |
| **Google Search** | Identify competitors if not provided | Free |
| **Google Maps** | Find GBP listing URL, star rating, review count | Free |
| **Semrush / Ahrefs** | Quick traffic estimate + domain rating for competitors | Paid |
| **BuiltWith** | CMS detection, hosting stack, tech stack | Free |

---

## Step 1: Present the Intake Form

When an audit is triggered, present this structured form:

```
==============================================
  LOCAL BUSINESS SEO AUDIT — INTAKE FORM
==============================================

1. Business Name:      [Required]
2. Website URL:        [Required — full URL with https://]
3. Target Location(s): [Required — City, State, Country. All service areas.]
4. Primary Services:   [Required — list all services offered]
5. Business Category:  [Required — primary industry/niche]
6. Business Goals:     [Select one or more:]
   • Increase local visibility & foot traffic
   • Generate more leads/calls/form submissions
   • Outrank specific competitors
   • Expand to new service areas
   • Improve online reputation & reviews
   • Dominate AI search (AI Overviews, ChatGPT, Perplexity, Gemini)
   • Build topical authority
   • Improve conversion rate
   • Launch/optimize Google Business Profile
   • Recover from traffic drop or penalty
   • Other: [specify]
7. Competitors:        [3-5 competitors — URLs preferred. Skip → auto-research.]
8. GBP URL:            [Optional — Google Business Profile link]
9. Social Media URLs:  [Optional — Facebook, Instagram, LinkedIn, YouTube, TikTok]
10. Analytics Access:  [Optional — GA4 + GSC available? Critical for Phase 6 keyword data]
11. Previous SEO Work: [Optional — agency/in-house history, any known penalties?]
12. Budget Range:      [Optional — helps calibrate effort estimates throughout audit]
```

**Intake Rules:**
- Items 1–6 required. Do NOT begin audit without them.
- Item 7: If skipped, auto-research and identify top 3–5 competitors. Never ask twice.
- Items 8–12 optional. Note which are missing in output file but proceed without blocking.
- **GSC access (item 10):** Critical for Phase 6 keyword gaps — flag if unavailable; estimate traffic from Ahrefs/Semrush instead.

---

## Step 2: Validate URL Accessibility

Once URL is provided, run validation:

```bash
python3 scripts/check_url.py --url [WEBSITE_URL] --full
```

**Interpret results — thresholds:**

| HTTP Status | Action |
|------------|--------|
| 200 | Accessible — proceed |
| 301/302 | Note redirect destination; use final URL for all phases |
| 403/429 | May block crawlers — note for Phase 2 Technical SEO |
| 4xx/5xx | Alert user, confirm URL — DO NOT proceed until accessible |
| SSL error | Flag as CRITICAL — add to Phase 2 Technical findings immediately |

**TTFB benchmarks:**
- < 800ms → Good
- 800ms–1.8s → Needs improvement (flag for Phase 10 Speed audit)
- > 1.8s → Critical speed issue (flag immediately in intake notes)

**Additional checks during URL validation:**
- Missing title tag → flag as immediate on-page issue
- Missing H1 → flag for Phase 3 On-Page SEO
- No HTTPS redirect (HTTP accessible) → Critical Technical flag

---

## Step 3: Create Project Directory

**IMMEDIATELY after collecting required fields**, create the project directory:

```bash
python3 scripts/setup_project.py \
  --name "[Business Name]" \
  --url "[Website URL]" \
  --location "[City, State]" \
  --json
```

This creates:
```
projects/[business-slug]/
  project.json          ← Business metadata (name, URL, location, slug, created date)
  audit/                ← All 21 phase finding .md files
  reports/              ← All HTML + PDF reports
  data/crawl/           ← site_crawler.py output (CSV + JSON)
  data/serp/            ← SERP snapshot data
  data/scores/          ← LOCAL-IMPACT + SERP-TRUST YAML scoring data
```

**Set these variables for all subsequent phases:**
```
PROJECT_SLUG  = [returned by script — e.g., acme-plumbing-chicago]
PROJECT_DIR   = projects/[slug]
AUDIT_DIR     = projects/[slug]/audit
REPORTS_DIR   = projects/[slug]/reports
DATA_DIR      = projects/[slug]/data
```

**Slug generation rules:**
- Business name → lowercase → spaces/special chars → hyphens → trim
- "Acme Plumbing Chicago" → `acme-plumbing-chicago`
- "Smith & Sons Law Firm" → `smith-sons-law-firm`

---

## Step 4: Identify Competitors

If competitors not provided, use this 3-search protocol:

1. Google: `[primary service] [city]` → top 3 local pack + top 3 organic (non-directory)
2. Google: `best [service] [city]` → cross-reference new names
3. Google: `[service] [city] reviews` → confirm competitive landscape

For each competitor, collect:
| Field | Source | Why |
|-------|--------|-----|
| Business name | Google Maps | Identity |
| Website URL | Google Maps | All subsequent phases |
| GBP listing URL | Google Maps | Phase 11 Local SEO |
| Google star rating | Google Maps | Phase 15 Reputation |
| Review count | Google Maps | Competitive benchmark |
| Domain Rating (DR) | Ahrefs free / Moz | Phase 12 Backlinks baseline |

**Competitor selection criteria:**
- Must rank in top 3 local pack OR top 5 organic for primary service keyword in target city
- Prefer local independents + 1 regional chain for realistic comparison
- Flag national franchises separately — different competitive dynamics

Present list: "I've identified these competitors: [list]. Let me know if any should be swapped."

---

## Step 5: Initial Business Intelligence

Before writing intake file, collect these quick intelligence signals:

```bash
# Check if site is indexed
# Search: site:[domain] — should return > 10 results for healthy site

# Check GBP presence
# Google: [Business Name] [City] — does Knowledge Panel appear?

# Quick tech stack check
# BuiltWith.com or: check page source for wp-content, Shopify, Wix, etc.
```

**Red flags to note in intake (flag for relevant phases):**
- `site:[domain]` returns < 10 results → potential indexation issue (Phase 2 flag)
- No Knowledge Panel for branded search → entity gap (Phase 9 flag)
- Site built on Wix/Squarespace → limited schema/speed options (Phase 2 flag)
- Domain age < 6 months → low authority expected (Phase 12 flag)

---

## Step 6: Write Intake Data File

Write to `{AUDIT_DIR}/intake-data.md`:

```yaml
---
skill: research/audit-intake
phase: 0
date: [YYYY-MM-DD]
business: [Business Name]
url: [Website URL]
score: N/A
status: complete
project_dir: projects/[slug]
audit_dir: projects/[slug]/audit
reports_dir: projects/[slug]/reports
data_dir: projects/[slug]/data
---
```

```markdown
# Audit Intake Data

## Business Profile
- **Name:** [Business Name]
- **Website:** [URL]
- **Final URL (after redirects):** [final URL]
- **Location(s):** [City, State, Country + all service areas]
- **Services:** [full list]
- **Category:** [industry/niche]
- **GBP URL:** [URL or N/A]
- **Tech Stack:** [CMS detected — WordPress/Wix/Squarespace/Custom/Unknown]
- **Domain Age:** [years or Unknown]

## Goals (Priority-Ordered)
1. [Primary goal]
2. [Secondary goal]
3. [Additional goals]

## Competitors
| # | Business | Website | DR | GBP Stars | Review Count | Local Pack Pos |
|---|---------|---------|----|-----------|--------------|-|
| 1 | [name] | [url] | [X] | [X.X] | [X] | #[X] |
| 2 | [name] | [url] | [X] | [X.X] | [X] | #[X] |
| 3 | [name] | [url] | [X] | [X.X] | [X] | #[X] |

## Analytics & Access
- GA4: [Yes (full access) / Yes (read only) / No / Unknown]
- GSC: [Yes / No / Unknown] — if No: use Ahrefs/Semrush for keyword data
- Previous SEO: [brief summary or N/A]
- Budget Range: [range or N/A]

## URL Validation Results
- HTTP Status: [200 / 301→ / error]
- TTFB: [Xms] — [Good (<800ms) / Needs Improvement / Critical (>1.8s)]
- SSL: [Valid until YYYY-MM / Error / Self-signed]
- Redirects: [None / HTTP→HTTPS / www→non-www / other]
- Immediate Issues Flagged: [list — e.g., "Missing H1 on homepage", "TTFB 2.1s"]

## Initial Intelligence
- Site indexed: [site:[domain] returns X results — Healthy/Low/Zero]
- Knowledge Panel: [Present / Partial / None]
- GBP claimed: [Yes / No / Unknown]

## Phase Flags (Pre-set from Intake)
- [ ] Phase 2 (Technical): [any technical flags]
- [ ] Phase 10 (Speed): [TTFB or speed flags]
- [ ] Phase 12 (Backlinks): [DR level, domain age]
- [ ] Phase 9 (Entity): [Knowledge Panel status]

## Project Context
- PROJECT_SLUG: [slug]
- PROJECT_DIR: projects/[slug]
- AUDIT_DIR: projects/[slug]/audit
- REPORTS_DIR: projects/[slug]/reports
- DATA_DIR: projects/[slug]/data
```

---

## Step 7: Confirm and Launch

Display confirmation:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AUDIT INTAKE COMPLETE — Phase 0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Business:    [Name]
Website:     [URL]
Location:    [City, State]
Services:    [count] services
Project:     projects/[slug]/
Competitors: [count] identified

URL Status:  ✅ HTTP 200 / ⚠️ [issue]
SSL:         ✅ Valid / ❌ Issue
TTFB:        [Xms] — [Good/Slow/Critical]
Indexation:  [X pages indexed]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pre-flagged Issues: [X]
  🔴 [Critical flag if any]
  🟠 [High flag if any]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Next: /audit-competitors (Phase 1)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Priority Matrix

| Task | Impact (1–5) | Feasibility (1–5) | Priority | Effort |
|------|-------------|-------------------|---------|--------|
| Collect all required fields (1–6) | 5 | 5 | 25 | 5–10 min |
| Run URL validation script | 5 | 5 | 25 | 2 min |
| Identify 3+ competitors | 5 | 5 | 25 | 10–15 min |
| Collect GA4/GSC access | 4 | 5 | 20 | 5 min |
| Record competitor DR/ratings | 3 | 4 | 12 | 5 min |
| Detect tech stack | 3 | 5 | 15 | 2 min |

---

## Handoff

After intake completes, `{AUDIT_DIR}/intake-data.md` is the **single source of truth** for:
- Business name, URL, location — read by all 21 phases
- Project paths (PROJECT_DIR, AUDIT_DIR, REPORTS_DIR) — used by all file operations
- Competitor list — consumed by competitor-analysis and all gap phases
- Goals — inform priority weighting throughout the audit
- Pre-flagged issues — fast-track critical findings in early phases

**Key consumers:**
- `research/competitor-analysis` — reads competitor list, begins profiling
- All 21 phases — read business name, URL, location, project paths
- `cross-cutting/local-impact-auditor` — reads goal context for weight adjustment
- `audit/penalty-check` — reads previous SEO history for penalty risk flags
- `output/report-generation` — reads project metadata for master report cover page

---

## Recommendations Checklist

After completing Phase 0, ensure the following are noted in `{AUDIT_DIR}/intake-data.md` as recommendations for downstream phases:

| Flag | Condition | Downstream Phase | Recommended Action | Effort |
|------|----------|-----------------|-------------------|--------|
| 🔴 TTFB >800ms | check_url.py result | Phase 10 Speed | Server-level optimization, CDN, caching | High (1–3 days) |
| 🔴 No GBP URL | Item 8 not provided | Phase 11 Local | Create or claim GBP listing immediately | Medium (1–3 days) |
| 🔴 SSL error / no HTTPS | check_url.py result | Phase 2 Technical | Install SSL certificate, 301 HTTP→HTTPS | Medium (1 day) |
| 🟠 Domain <6 months | WHOIS check | Phase 12 Backlinks | Focus on link building vs. penalty recovery | Low (30 min note) |
| 🟠 No GSC access | Item 10 not provided | Phases 6, 7, 20 | Request GSC access; Ahrefs estimates as substitute | Low (10 min) |
| 🟠 Wix / Squarespace CMS | BuiltWith result | Phase 2 Technical | Note schema/speed limitations upfront | Low (15 min note) |
| 🟡 No GA4 | check_url.py / manual | Phase 17 CRO | Install GA4 before Phase 17; no baseline = CRO score capped at 60 | Medium (2–4 hrs) |
| 🟡 Review count <10 | Google Maps check | Phase 15 Reputation | Launch review velocity campaign immediately | Low (30 min plan) |
| 🟡 INP >200ms on homepage | check_url.py / PSI | Phase 10 Speed | INP replaced FID March 2024 — flag for urgent fix | Medium (2–8 hrs) |

### INP Intake Note (March 2024 Update)
INP (Interaction to Next Paint) replaced FID as a Core Web Vital. If `python3 scripts/check_url.py --url [URL] --full` returns INP >200ms, pre-flag Phase 10 as critical priority in intake-data.md. INP >500ms = Poor (ranking suppression confirmed across competitive keywords).

**Output files:**
- `{AUDIT_DIR}/intake-data.md` — primary output, source of truth for all phases
- `{REPORTS_DIR}/phase-0-intake.pdf` — auto-generated summary PDF after intake completes
- `{DATA_DIR}/crawl/` — populated later by site_crawler.py (Phase 2)

**2025 intake quality gate:** Before launching Phase 1, confirm all 5 items are complete:
- [ ] Items 1–6 collected (required fields)
- [ ] URL validated (HTTP 200, SSL valid, TTFB recorded)
- [ ] Project directory created (projects/[slug]/ exists with all subdirs)
- [ ] 3+ competitors identified with name, URL, rating, DR
- [ ] intake-data.md written with YAML frontmatter and all fields populated
