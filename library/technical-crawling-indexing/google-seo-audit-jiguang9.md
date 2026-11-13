---
name: "google-seo-audit"
description: "Performs a comprehensive Google SEO audit for any website URL. Analyses technical SEO, Core Web Vitals (LCP/INP/CLS), on-page content, internal links, backlinks (via optional GSC export), and mobile experience. Generates a prioritised diagnostic report with evidence-backed findings, severity ratings, confidence levels, and actionable fix recommendations. Report language auto-detected from the target site."
category: "technical-crawling-indexing"
platforms: ["claude-code", "openclaw"]
platform_source: "declared+detected"
repo: "jiguang9/google-seo-audit"
repo_url: "https://github.com/jiguang9/google-seo-audit"
source: "https://github.com/jiguang9/google-seo-audit/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/jiguang9/google-seo-audit/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code, OpenClaw skill · jiguang9/google-seo-audit · SKILL.md · MIT
     Source: https://github.com/jiguang9/google-seo-audit/blob/HEAD/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Google SEO Audit Skill

## Overview

This skill audits any publicly accessible website for Google SEO health across
nine dimensions. It combines live page fetching, PageSpeed Insights API data,
optional GSC exports, and HTML analysis to produce a prioritised report.

Every finding includes:
- **Status**: pass / warning / fail / unknown
- **Severity**: high / medium / low
- **Confidence**: high / medium / low (no finding is fabricated without evidence)
- **Evidence**: the raw data that supports the conclusion
- **Impact**: the SEO consequence
- **Fix**: a concrete remediation step (omitted for passing checks)

If data is unavailable for a check, the status is `unknown` and the finding
explains what data is needed — **no conclusions are invented**.

---

## Invocation

### Slash command (Claude Code, environments that support it)

```
/google-seo-audit https://example.com
/google-seo-audit https://example.com --psi-key=AIzaSy...
/google-seo-audit https://example.com --psi-key=AIzaSy... --gsc=./gsc-export.csv
```

### Natural language (Codex, OpenClaw, Hermes, and all environments)

```
Audit https://example.com
Run a Google SEO audit on https://example.com
用 google-seo-audit 诊断 https://example.com
对 https://example.com 进行 SEO 诊断，PSI key 是 AIzaSy...，GSC 文件在 ./gsc.csv
```

The agent must extract `url`, optional `psi-key`, and optional `gsc` path
from the invocation, then follow the execution steps below.

---

## Initial Assessment (when running manually without bash)

Before auditing, gather context to improve recommendation quality:

1. **Site context** — What type of site? (SaaS, e-commerce, blog, local business, multilingual)
2. **Business goal** — What are the priority topics or target keywords?
3. **Current state** — Any known issues? Recent migrations or major changes? Organic traffic trend?
4. **Scope** — Full site or specific pages? Access to Google Search Console?

If the user hasn't provided this context and is available for questions, ask before running.
If running automated (slash command / bash), skip this and proceed directly — the audit infers site type from page signals.

---

## Execution Steps

When this skill is triggered, the agent **must** execute the following steps
in order. Use `scripts/audit_url.py` if bash is available. Otherwise, execute
each step manually using the available tools.

### Step 0 — Run the audit script

If bash / Python is available, run:

```bash
python3 scripts/audit_url.py {url} [--psi-key={key}] [--gsc={file}] [--lang={lang}] --json
```

Capture the JSON output. Then proceed to **Step 10** to synthesize and present findings
directly in the chat as a rich consultant-style analysis.

To also save a styled HTML report for sharing:
```bash
python3 scripts/audit_url.py {url} [--psi-key={key}] [--gsc={file}] --output=report.html
```
Only generate the HTML file if the user explicitly asks for a downloadable report.

If bash / Python is **not** available: execute Steps 1–9 manually using web_fetch and web_search, then follow Step 10 to present findings.

**Version check** (non-blocking): the script automatically compares local version against the
latest GitHub release. A notice appears in JSON output if an update is available. Mention it
briefly at the top of the chat output if present.

---

### Step 1 — Fetch the page

Use `web_fetch` to retrieve the target URL. Record:
- Final URL after redirects
- HTTP status code
- Response headers (Content-Type, X-Robots-Tag, etc.)
- Full HTML body

---

### Step 2 — Detect language

Read the `<html lang="...">` attribute or `<meta http-equiv="content-language">`.
Set `report_language`:
- `zh` if lang code starts with `zh`
- `en` otherwise (default)

---

### Step 3 — Technical SEO checks

Perform each check; record evidence, status, severity, confidence:

| Check | How to verify |
|-------|--------------|
| HTTPS enforced | Fetch `http://domain` — does it 301 to `https://`? |
| www/non-www consistent | Fetch both; do they resolve to the same final URL? |
| robots.txt | Fetch `{origin}/robots.txt`; parse Disallow/Allow/Sitemap rules |
| Robots blocks critical paths | Check if `/` or major content dirs are Disallowed for `*` or `googlebot` |
| sitemap.xml | Fetch `{origin}/sitemap.xml` or URL from robots.txt; check existence and XML validity |
| sitemap lastmod | Check if `<lastmod>` dates are present and recent |
| 404 handling | Fetch a deliberately wrong URL; verify HTTP 404 status is returned |
| URL depth | Count `/` segments in the sample URL |
| URL parameters | Check for `?key=value` in URL; note canonical strategy needed |
| Canonical tag | Parse `<link rel="canonical">` from HTML head |
| Structured data | Parse `<script type="application/ld+json">` blocks; identify @type values |
| llms.txt | Fetch `{origin}/llms.txt`; note existence and AI access policy |
| Hreflang | Parse `<link rel="alternate" hreflang="...">` tags; validate self-reference, x-default, lang codes |

> **Schema detection limitation**: `web_fetch` and static HTML parsing cannot see JSON-LD injected by JavaScript
> (common with Yoast, RankMath, AIOSEO plugins). If no schema is found, confidence is **medium** — verify with
> [Google Rich Results Test](https://search.google.com/test/rich-results) or browser DevTools before concluding schema is absent.

**Hreflang validation checklist** (when hreflang tags are present):
- Self-referencing entry: the current page must include itself in the hreflang set
- Reciprocal return tags: every target page must link back (cannot verify without fetching each page)
- x-default present when targeting 2+ locales
- Valid BCP-47 codes: `en-GB` not `en-UK`; `zh-CN` not `zh-cn` (case matters to some parsers)
- All href values must be absolute URLs
- Canonical URL must appear in the hreflang set — if it doesn't, the cluster is silently dropped

---

### Step 4 — PageSpeed Insights (Core Web Vitals)

Call PSI API for **mobile** strategy first, then **desktop**:

```
https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url={url}&strategy=mobile[&key={psi_key}]
```

Extract and rate:

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| LCP | ≤ 2.5s | 2.5–4s | > 4s |
| INP | ≤ 200ms | 200–500ms | > 500ms |
| CLS | ≤ 0.1 | 0.1–0.25 | > 0.25 |
| FCP | ≤ 1.8s | reference only | — |
| TTFB | ≤ 800ms | reference only | — |

If API returns 429 (rate limited): set status=unknown, note user should provide `--psi-key`.  
If no key provided: try without key first; only prompt for key on failure.

---

### Step 5 — On-page content analysis

Parse the fetched HTML:

| Check | What to look for |
|-------|-----------------|
| `<title>` | Present? Length (display guideline: 50–60 chars, not a hard limit) |
| `<meta name="description">` | Present? Length (guideline: 150–160 chars) |
| `<meta name="keywords">` | Note: Google ignores this tag |
| H1–H6 hierarchy | Count H1 tags; detect heading level skips |
| Image `alt` attributes | Count images without alt or with empty alt |
| Image formats | Check for WebP/AVIF usage |
| Open Graph / Twitter Card | Check og:title, og:image, twitter:card |
| E-E-A-T signals | Author byline, pub date, About/Contact/Privacy links |
| Content word count | Count visible words; flag if < 300 for important pages |

---

### Step 6 — Internal link analysis

From the fetched HTML:

| Check | Logic |
|-------|-------|
| Internal link count | Count `<a href>` pointing to same domain |
| External link count | Count `<a href>` pointing to other domains |
| Weak anchor text | Flag "click here", "read more", "more", "了解更多" etc. |
| Breadcrumb nav | Detect via aria-label/class; check for BreadcrumbList JSON-LD |

---

### Step 7 — GSC module (if `--gsc` provided)

1. Read the CSV file
2. Auto-detect type by column headers:
   - `Query, Clicks, Impressions, CTR, Position` → performance_queries
   - `Page, Clicks, Impressions, CTR, Position` → performance_pages
   - `URL, Status, Reason` → coverage_pages
   - Columns containing "source" and "target" → links
   - `URL, Status, Category, Type` → core_web_vitals
   - `URL` + column with "enhancement" → enhancements
3. If type is unrecognized: output "Unrecognized GSC export format" + detected column names + expected formats hint
4. Parse and include relevant metrics in the report

---

### Step 8 — Backlinks (GSC links export)

If GSC links data is available:
- Report: unique referring domains, top sources, source concentration
- Flag: heavy reliance on very few domains (top 1 source > 50% of links)
- Flag: potential spam domain patterns (very long domains, numeric-heavy domains)
- **Do NOT infer DA/DR from GSC data** — note that authority scores require Ahrefs/Moz/Semrush

If GSC links data is **not** available:
- Output: "External link analysis requires GSC Links export. Export from Search Console → Links → Export."

---

### Step 9 — Mobile experience

Based on PSI mobile results (Step 4):
- Mobile performance score
- Mobile Core Web Vitals ratings
- PSI mobile-specific diagnostics (font sizes, tap target sizes, etc.)
- Viewport meta tag presence (from Step 5 HTML)

> Note: Google Mobile-Friendly Test and GSC Mobile Usability report are retired.
> Mobile experience is now assessed via PageSpeed Insights and Core Web Vitals only.

---

### Step 10 — Synthesize and present findings in chat

**Output the full analysis directly in the chat window.** Do not just quote the script output or point to a file. Act as a senior SEO consultant: interpret findings, explain why they matter for this specific site, and connect the dots between issues.

Match language to the site: Chinese sites → respond in Chinese throughout; English sites → respond in English.

---

#### Chat output structure

##### 1. Headline & site context (3–4 sentences)
Open with what you immediately noticed about the site — site type, its apparent purpose, and the single most consequential finding. Example: *"This is a B2B SaaS homepage targeting English-speaking enterprise buyers. The most urgent issue is that Core Web Vitals are failing on mobile (LCP 6.2s), which is actively suppressing rankings in Google's mobile-first index."*

##### 2. Overall Health Dashboard
Present a score table for each module. For modules with no data, show `—`.

```
| Module              | Score | Status  |
|---------------------|-------|---------|
| Technical SEO       |  72   | ⚠️ Warning |
| Core Web Vitals     |  45   | ❌ Poor |
| On-page Content     |  88   | ✅ Good |
| Internal Links      |  60   | ⚠️ Warning |
| Mobile Experience   |  45   | ❌ Poor |
| AI SEO Readiness    |  50   | ⚠️ Warning |
```

##### 3. Critical Issues (must fix this week)
For each `fail` finding with `high` severity:
- **Title**: name the problem plainly
- **Why it matters**: explain the specific ranking/traffic consequence for this site type
- **Evidence**: quote the actual data (e.g., "LCP: 6.2s on mobile, threshold is 2.5s")
- **Exact fix**: step-by-step remediation, specific to what you found (not generic advice)
- **Effort estimate**: Low / Medium / High

##### 4. Module Analysis (one section per module)
For each module, write 2–4 sentences of narrative interpretation — don't just list bullets. Highlight what's working, what's broken, and what the pattern means. Then list the individual findings with their status, evidence, and fix.

Tailor commentary to site type:
- **E-commerce**: emphasize product schema, breadcrumbs, faceted URL canonicalization
- **Local business**: emphasize LocalBusiness schema, NAP consistency, maps integration
- **Blog/media**: emphasize article schema, author E-E-A-T, internal link depth
- **SaaS/B2B**: emphasize FAQ schema, entity clarity, Core Web Vitals for conversion impact
- **Multilingual**: emphasize hreflang correctness, canonical-hreflang consistency

##### 5. What's Working Well
2–3 sentences on genuine strengths. Prevents the report from feeling purely negative.

##### 6. 30-Day Action Plan
Organize fixes by priority tier:

**🔴 Fix this week** (Critical — ranking risk or crawlability)
- Numbered list with owner hint (Developer / Content / Marketing)

**🟡 Fix this month** (Important — conversion or signal quality)
- Numbered list with effort estimate

**🟢 Quick wins** (Low effort, measurable gain)
- Numbered list

**📊 Data needed before deciding**
- List what GSC/Analytics data would clarify remaining unknowns

##### 7. Closing context
One sentence on the biggest leverage point — the single change most likely to move rankings in 30–60 days.

---

#### Tone and style rules
- Write in complete sentences, not fragmented bullets
- Use specific numbers from the evidence, not vague descriptors ("LCP is 6.2s", not "LCP is slow")
- Explain ranking mechanisms briefly when relevant ("Google uses mobile-first indexing, so mobile CWV directly affects desktop rankings too")
- If a finding is `unknown` due to missing data, say what data would resolve it and how to get it
- Never invent findings — if confidence is low, say so and explain the uncertainty
- For Chinese sites, write every section (including fix steps) entirely in Chinese — do not mix languages

---

## Quality Rules

1. **Never fabricate a finding** — if data is missing, status = `unknown`.
2. **Confidence must reflect data quality** — PSI data → high; HTML scan → high; E-E-A-T surface scan → medium.
3. **Soften absolute SEO claims**:
   - Title/description lengths are display guidelines, not ranking rules.
   - Multiple H1 is a structural signal, not a confirmed penalty.
   - URL parameters need canonical strategy, not removal.
   - URL depth is a crawl efficiency suggestion, not a ranking rule.
   - Domain age is a historical trust indicator, not a direct ranking factor.
   - `site:` count is an estimate, not a precise index count.
4. **Do not cite retired tools**: Google Mobile-Friendly Test and GSC Mobile Usability report are retired.
5. **Do not infer DA/DR from GSC data** — GSC links export does not contain authority scores.

---

## Environment Adapters

See [adapters/](adapters/) for environment-specific installation and invocation instructions:

- [Claude Code](adapters/claude-code-command.md)
- [Codex](adapters/codex-usage.md)
- [OpenClaw](adapters/openclaw.md)
- [Hermes](adapters/hermes.md)

---

## References

- [audit-checklist.md](references/audit-checklist.md) — Complete check list with pass/fail criteria
- [gsc-data-guide.md](references/gsc-data-guide.md) — How to export each GSC report type
- [scoring-rubric.md](references/scoring-rubric.md) — Scoring weights and severity definitions
- [google-seo-current-notes.md](references/google-seo-current-notes.md) — Retired tools and corrected SEO myths
