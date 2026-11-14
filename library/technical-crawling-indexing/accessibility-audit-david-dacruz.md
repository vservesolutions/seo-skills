---
name: "accessibility-audit"
description: "Web accessibility audit with SEO focus. Activates when discussing WCAG compliance, ADA compliance, accessibility, color contrast, ARIA labels, keyboard navigation, screen reader compatibility, or Core Web Vitals interaction metrics. Phase 19. Output: {AUDIT_DIR}/accessibility-findings.md"
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "david-dacruz/local-seo-audit"
repo_url: "https://github.com/david-dacruz/local-seo-audit"
source: "https://github.com/david-dacruz/local-seo-audit/blob/HEAD/audit/accessibility-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/david-dacruz/local-seo-audit/HEAD/audit/accessibility-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · david-dacruz/local-seo-audit · audit/accessibility-audit/SKILL.md · MIT
     Source: https://github.com/david-dacruz/local-seo-audit/blob/HEAD/audit/accessibility-audit/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Accessibility Audit — Phase 19 (SEO-Focused)

## Executive Summary

Accessibility and SEO are converging in 2025. Semantic HTML — the foundation of accessibility compliance — is also Googlebot's preferred signal architecture. Lighthouse accessibility score directly correlates with Core Web Vitals performance, particularly INP (Interaction to Next Paint, replaced FID March 2024) and CLS. Google's Quality Rater Guidelines (2024 update) explicitly flag accessibility as an E-E-A-T trust indicator. Legal exposure from accessibility failures is escalating: ADA Title III lawsuits reached 4,605 in 2023 (Seyfarth Shaw), and negative SERP results from lawsuit coverage directly harm brand SERP. AI search systems (Google AIO, ChatGPT, Perplexity) preferentially extract content from semantically correct, accessible HTML structures — inaccessible pages are de facto AI-invisible.

**2025 accessibility benchmarks:**
- WCAG 2.2 AA = current legal standard (US ADA, EU EAA effective June 2025, AU DDA)
- Lighthouse score ≥90 = target; <70 = flag as structural risk to E-E-A-T
- 96.3% of the top 1 million homepages have WCAG failures (WebAIM Million Report 2024)
- Semantic HTML headings = 41% higher featured snippet acquisition (SEMrush 2024)
- INP <200ms (Good) = primary CWV threshold since March 2024 — poor accessibility patterns (no skip links, large unoptimized tap targets) are INP contributors
- Touch target minimum: 24×24px (WCAG 2.2 new criterion 2.5.8, Oct 2023)

---

## Why Accessibility Matters for SEO (2025)

1. **INP & CLS** — poor accessibility (no skip links, large tap targets missing) causes bad Core Web Vital scores; INP target <200ms
2. **Crawlability** — screen reader-friendly semantic HTML = Googlebot-friendly; JS-only content risks non-rendering
3. **E-E-A-T** — inclusive design signals quality and professionalism — Quality Rater Guidelines (2024) specifically flag accessibility as a trust indicator
4. **Legal risk** — ADA Title III lawsuits hit 4,605 cases in 2023 (Seyfarth Shaw data); lawsuits = negative SERP results (reputation risk)
5. **Featured snippets** — well-structured semantic HTML wins 2–3× more featured snippets vs. unsemantic markup
6. **WCAG 2.2** — new criteria (October 2023): Focus Not Obscured, Dragging Movements, Target Size (minimum 24×24px)

---

## Step 1: Read Project Context

Read `{AUDIT_DIR}/intake-data.md` for business name, URL, and project paths.
Check `{AUDIT_DIR}/technical-findings.md` for previously noted accessibility issues.
Check `{AUDIT_DIR}/speed-findings.md` for INP/CLS data relevant to accessibility.

**Tools for this phase:**
| Tool | Purpose | Cost |
|------|---------|------|
| **WAVE** (wave.webaim.org) | Visual accessibility report — shows errors directly on page | Free |
| **Axe DevTools** (browser extension) | WCAG 2.1/2.2 automated testing — 0 false positives | Free/Paid |
| **Google Lighthouse** | Accessibility score (0–100), automated WCAG checks | Free |
| **Siteimprove** | Continuous accessibility monitoring + WCAG conformance reporting | Paid |
| **Color Contrast Analyzer** (TPGi) | Pixel-level contrast ratio verification | Free |
| **NVDA** (Windows) / **VoiceOver** (Mac/iOS) | Screen reader testing — manual verification | Free |
| **Screaming Frog** | Crawl for missing alt text at scale | Paid/Free (≤500 URLs) |
| **site_crawler.py** | `python3 scripts/site_crawler.py --url [URL] --max-pages 50` → `images_no_alt` column | Free |

**WCAG Conformance Levels (2025 target):**
- **WCAG 2.1 AA**: Legal standard for most jurisdictions (US, EU, AU) — minimum target
- **WCAG 2.2 AA**: Current standard (Oct 2023) — adds 9 new criteria; recommended target
- **WCAG 2.2 AAA**: Aspirational for highest-priority accessibility

---

## Step 2: Automated Scan (Run First)

Run **Lighthouse** → Accessibility score → document all flagged issues:

```bash
# Via Chrome DevTools: F12 → Lighthouse → Accessibility → Generate Report
# Or via CLI:
npx lighthouse [URL] --only-categories=accessibility --output json --output-path audit.json
```

Run **WAVE** on homepage + top 3 service pages + contact page.

**Automated scan results:**
| Page | Lighthouse Score | WAVE Errors | WAVE Alerts | Priority |
|------|----------------|------------|------------|---------|
| Homepage | /100 | | | |
| [Service 1] | /100 | | | |
| Contact | /100 | | | |

Automated tools catch ~30–40% of WCAG issues. Manual testing required for the rest.

---

## Step 3: Heading Hierarchy

Run: Axe DevTools → filter "Heading" issues.

- Single H1 per page? (multiple H1s = structural confusion for Googlebot + screen readers)
- No skipped levels (H1 → H3 without H2)?
- Headings describe section content (not just styled for appearance)?
- Heading order logical for screen readers (test with NVDA/VoiceOver heading navigation)?
- Service pages: H1 = primary service + location keyword?

**SEO impact:** Correct heading hierarchy correlates with 41% higher featured snippet acquisition (SEMrush 2024 study).

**Test (manual):** Disable CSS in browser (devtools → styles → uncheck `user agent stylesheet`) — does the page still make structural sense?

---

## Step 4: Images & Alt Text

Run: `python3 scripts/site_crawler.py --url [URL] --max-pages 50 --output {DATA_DIR}/crawl/ --csv`
→ Check `images_no_alt` column for count and URLs.

| Check | Count | Pages Affected | Priority |
|-------|-------|---------------|---------|
| Images missing alt attribute entirely | | | Critical |
| Images with alt="" that aren't decorative | | | High |
| Images with alt="image" or filename as alt | | | High |
| Complex images (infographics) with no extended description | | | Medium |
| Logo: alt = business name? | | | High |

**Alt text standards (2025):**
- Informative images: describe content AND function
- Decorative images (dividers, backgrounds): `alt=""` (empty string, not missing)
- CTA images: alt = the CTA action ("Get a Free Quote")
- Maximum recommended alt text: 125 characters

### Videos
- Captions/subtitles on all videos? (YouTube auto-captions don't meet WCAG AA)
- Transcripts available for audio content?
- Videos don't autoplay with sound? (WCAG 1.4.2 — immediate fail if violated)

---

## Step 5: Color & Contrast

Use **Color Contrast Analyzer** or Axe DevTools → filter "Color Contrast" issues.

| Element | Current Ratio | WCAG AA Minimum | Pass/Fail |
|---------|-------------|----------------|----------|
| Body text (normal, <18pt) | :1 | 4.5:1 | |
| Large text (18pt+ or 14pt bold) | :1 | 3:1 | |
| UI components (buttons, input borders) | :1 | 3:1 | |
| Placeholder text in forms | :1 | 4.5:1 | |
| Links (if distinguishable by color alone) | :1 | 4.5:1 | |

**Common failures:**
- Light grey text on white background (often fails — e.g., `#767676` on white = exactly 4.5:1)
- CTA button text on brand-colored background
- Error message text on red background

---

## Step 6: Keyboard Navigation

**Manual test (no mouse):** Navigate entire page using only Tab, Shift+Tab, Enter, Space, Arrow keys.

| Check | Pass/Fail | Pages Affected |
|-------|----------|---------------|
| All interactive elements reachable via Tab | | |
| Logical tab order (follows visual layout L→R, T→B) | | |
| No keyboard traps (can Tab out of modals, menus, date pickers) | | |
| Skip navigation link present at top ("Skip to main content") | | |
| Custom dropdowns, accordions, sliders keyboard-accessible | | |
| Focus indicator visible on all elements (not `outline: none`) | | |

**WCAG 2.2 new criteria (Focus):**
- **Focus Not Obscured (2.4.11)**: Focused element must not be completely hidden by sticky headers/footers
- **Focus Not Obscured Enhanced (2.4.12)**: Focused element fully visible

---

## Step 7: Forms & Inputs

Test all forms: contact, quote, booking, search, newsletter.

| Form | Location | Fields | Labeled? | Error Msgs? | Mobile OK? |
|------|---------|--------|---------|------------|-----------|
| Contact | [page] | [count] | ✅/❌ | ✅/❌ | ✅/❌ |
| Quote | [page] | [count] | ✅/❌ | ✅/❌ | ✅/❌ |

**Form accessibility checklist:**
- [ ] Every field has visible `<label>` (not placeholder only — placeholders disappear on focus)
- [ ] Labels use `for` attribute matching input `id` (or wrap input in label)
- [ ] Required fields indicated by text or ARIA (not color alone)
- [ ] Error messages: describe the issue AND how to fix it
- [ ] `autocomplete` attributes on name, email, phone fields (WCAG 1.3.5)
- [ ] Form validation errors highlight field AND show descriptive message
- [ ] No CAPTCHA that requires visual ability (use honeypot or hCaptcha with audio option)

---

## Step 8: ARIA & Semantic HTML

Run: Axe DevTools → filter "ARIA" issues.

- Native HTML elements used where possible (`<button>` not `<div onclick>`)
- ARIA roles applied only where semantic HTML is insufficient
- No invalid ARIA attribute combinations

**Critical ARIA checks:**
| Pattern | Correct? | Issue if Wrong |
|---------|---------|---------------|
| `aria-label` on icon-only buttons (hamburger menu, social icons) | ✅/❌ | Button has no accessible name |
| `aria-expanded` on accordions/dropdowns | ✅/❌ | Screen reader can't detect open/closed state |
| `aria-describedby` linking error messages to fields | ✅/❌ | Errors not associated with field |
| `role="main"`, `role="navigation"`, `role="banner"` landmarks | ✅/❌ | Screen reader can't navigate landmarks |
| `aria-live="polite"` for dynamic content (chat, alerts) | ✅/❌ | Updates not announced to screen readers |
| No `aria-hidden="true"` on focusable elements | ✅/❌ | Hidden but keyboard-accessible = confusion |

---

## Step 9: Mobile Accessibility (WCAG 2.2)

**Touch target requirements (2025):**
- **WCAG 2.1**: 44×44px minimum (Apple HIG)
- **WCAG 2.2 (2.5.8)**: 24×24px minimum (new — smaller threshold but now required)
- **Recommended best practice**: 48×48dp (Google Material Design)

| Check | Pass/Fail |
|-------|----------|
| All tap targets ≥24×24px (WCAG 2.2) | |
| Buttons/links ≥44×44px (recommended) | |
| 8px+ spacing between adjacent tap targets | |
| No hover-only interactions (touch has no hover) | |
| Pinch-to-zoom NOT disabled (`user-scalable=no` = WCAG failure) | |
| Content readable at 320px width without horizontal scroll | |

---

## Step 10: Document & Structural Checks

| Check | Pass/Fail | Fix Required |
|-------|----------|-------------|
| `<html lang="en">` (correct language code) | | |
| Page title unique and descriptive per page | | |
| Language changes within page use `lang` attribute | | |
| Body font size ≥16px | | |
| Line height ≥1.5 for body text | | |
| Text resizable to 200% without horizontal scroll | | |
| Tables: `<th>` with `scope` on all data tables | | |
| No layout tables (use CSS grid/flex instead) | | |
| Logical reading order without CSS | | |

---

## Step 11: SEO-Accessibility Quick Wins (Overlap Opportunities)

| Fix | SEO Benefit | Accessibility Benefit | Effort | Priority Score |
|-----|------------|----------------------|--------|---------------|
| Add alt text to all images | Image SEO, crawler context | Screen reader users | 2–4 hrs | 20 (4×5) |
| Fix heading hierarchy (H1→H2→H3) | Featured snippet eligibility | Screen reader navigation | 1–2 hrs | 20 (4×5) |
| "Click here" → descriptive link text | Anchor text quality signal | Screen reader context | 1–3 hrs | 20 (4×5) |
| Add `<html lang>` attribute | Language targeting | Screen reader pronunciation | 5 min | 25 (5×5) |
| Add skip-to-main link | Mobile UX signal | Keyboard user efficiency | 30 min | 20 (4×5) |
| Captions on all videos | Video indexing, transcript indexing | Deaf users | 2–6 hrs | 16 (4×4) |
| Remove `user-scalable=no` from viewport | Mobile UX signals | Low vision zoom ability | 5 min | 25 (5×5) |
| Fix form labels (labels not placeholders) | Form completion rate → lower bounce | Screen reader + cognitive | 1–2 hrs | 20 (4×5) |

---

## Section 12: Competitor Accessibility Benchmark

Run **Lighthouse** on competitor homepages and compare:

| Site | Lighthouse Accessibility | WAVE Errors | WAVE Alerts | Heading H1 | Alt Text % | Mobile Tap Targets |
|------|------------------------|------------|------------|-----------|------------|-------------------|
| Client | /100 | | | Single? | | ✅/❌ |
| Comp 1 | /100 | | | | | |
| Comp 2 | /100 | | | | | |
| Comp 3 | /100 | | | | | |

**Competitive opportunities:**
- If competitors score <70 on Lighthouse accessibility: opportunity to outrank on E-E-A-T trust
- If competitors fail color contrast and client passes: document as competitive trust advantage
- If all competitors fail alt text: opportunity to dominate image search visibility

**AI Visibility Connection:**
AI search systems prefer semantically structured content. Run these checks:
| Check | AI Benefit | Pass/Fail |
|-------|-----------|----------|
| Semantic heading hierarchy (H1→H2→H3) | AIO extract section headings as answer structure | |
| FAQPage schema on FAQ content | 3.2× AIO citation rate (Amsive 2025) | |
| `<article>`, `<section>`, `<aside>` landmarks | AI parsers map content zones | |
| Descriptive alt text (not empty or filename) | AI image understanding + image search | |
| No JS-only content without fallback | Googlebot renders JS inconsistently | |

---

## Section 13: Numbered Action Plan

### Immediate (Week 1 — No-Code or Developer 1 hr)
1. **Add `<html lang="en">`** if missing — WCAG 1.3.4 compliance + screen reader pronunciation fix. Effort: 5 min. Priority: 25 (5×5).
2. **Remove `user-scalable=no`** from viewport meta tag — WCAG failure, blocks pinch-zoom for low-vision users; Google penalizes this. Effort: 5 min. Priority: 25.
3. **Add skip navigation link** — `<a href="#main" class="skip-link">Skip to main content</a>` at top of every page. Effort: 30 min. Priority: 20.
4. **Fix all `alt=""` images that aren't decorative** — Run site_crawler.py → check images_no_alt column → write descriptive alt text (max 125 chars) for all informative images. Effort: 2–4 hrs.
5. **Fix heading hierarchy** — single H1 per page, no skipped levels (H1→H3). Effort: 1–2 hrs. Priority: 20.

### Short-Term (Week 2–4 — Developer Required)
6. **Add `aria-label` to all icon-only buttons** — hamburger menu, social icons, close buttons — each needs accessible name. Effort: 1–2 hrs.
7. **Fix form labels** — replace placeholder-only labels with proper `<label for>` elements; add `autocomplete` attributes. Effort: 1–2 hrs.
8. **Fix color contrast failures** — use Color Contrast Analyzer → identify all elements <4.5:1 (normal text) or <3:1 (large text/UI). Effort: 2–6 hrs.
9. **Ensure all tap targets ≥24×24px** (WCAG 2.2) and ≥44×44px for primary CTAs. Check with mobile DevTools. Effort: 2–4 hrs.
10. **Add `aria-expanded` to accordions/dropdowns** — required for screen reader state awareness. Effort: 1–2 hrs.

### Medium-Term (Month 2)
11. **Add captions to all videos** — YouTube auto-captions don't meet WCAG AA; use Rev.com ($1.50/min) or Kapwing for manual captions. Effort: 2–6 hrs per video.
12. **Add `scope` attributes to all data tables** — `<th scope="col">` and `<th scope="row">` — required for screen reader table navigation. Effort: 30 min.
13. **Test with NVDA (Windows) or VoiceOver (Mac)** — manual screen reader testing catches 60–70% of issues automated tools miss. Effort: 2–4 hrs.
14. **Implement FAQPage schema** — improves AI visibility (AIO 3.2× citation rate) and is fully accessible by design. Effort: 30 min/page.

---

## Scoring

| Category | Weight | Score |
|----------|--------|-------|
| Heading structure (single H1, logical, descriptive) | 15% | /15 |
| Image alt text (all images, correct type) | 20% | /20 |
| Keyboard navigation (all elements, no traps, visible focus) | 20% | /20 |
| Color contrast (WCAG AA: 4.5:1 body, 3:1 large/UI) | 15% | /15 |
| Form accessibility (labels, errors, autocomplete) | 15% | /15 |
| ARIA & semantic HTML (correct use, no invalid patterns) | 15% | /15 |

**Priority Matrix:**
| Issue | Impact (1–5) | Feasibility (1–5) | Priority | Effort |
|-------|-------------|-------------------|---------|--------|
| Missing alt text on images | 4 | 5 | 20 | 2–4 hrs |
| `user-scalable=no` in viewport | 5 | 5 | 25 | 5 min |
| `<html lang>` missing | 5 | 5 | 25 | 5 min |
| Keyboard traps (can't Tab out) | 5 | 4 | 20 | 2–4 hrs |
| Missing form labels | 4 | 5 | 20 | 1–2 hrs |
| Color contrast failures | 4 | 4 | 16 | 2–6 hrs |
| No skip navigation link | 4 | 5 | 20 | 30 min |
| Video without captions | 4 | 4 | 16 | 2–6 hrs |

---

## Output

Write to `{AUDIT_DIR}/accessibility-findings.md` with YAML frontmatter:

```yaml
---
skill: audit/accessibility-audit
phase: 19
date: [YYYY-MM-DD]
business: [Business Name]
url: [URL]
score: [X/100]
wcag_level: [below-a|a|partial-aa|aa|aaa]
lighthouse_score: [X/100]
critical_issues: [X]
---
```

```
AUDIT PHASE: Accessibility | ID: ACCESS-001 | Phase: 19
BUSINESS: [Name] | URL: [URL] | DATE: [Date]
SCORE: X/100 | WCAG Level: WCAG 2.2 AA / 2.1 AA / Partial AA / Below AA
Lighthouse Accessibility Score: X/100 | WAVE Errors: X | WAVE Alerts: X

CRITICAL (Fix Immediately — Legal & SEO Risk):
- [issue | pages affected | WCAG criterion | fix steps | effort]

HIGH PRIORITY:
- [issue | pages affected | fix steps | effort | priority score]

MEDIUM PRIORITY:
- [issue | fix steps | effort]

QUICK WINS (Fix Today — <30 min each):
- [fix | pages affected | expected improvement]

SEO-ACCESSIBILITY OVERLAP OPPORTUNITIES:
- [issue | SEO benefit | accessibility benefit | priority score]
```

Write HTML report to `{REPORTS_DIR}/phase-19-accessibility.html` and convert to PDF via `python3 scripts/generate_pdf.py`.

**Key consumers:**
- `audit/technical-seo` — semantic HTML and schema overlap
- `audit/speed-optimization` — INP/CLS issues often have accessibility root causes
- `cross-cutting/serp-trust-auditor` — User Experience (U) dimension includes accessibility
- `output/report-generation` — accessibility score in master report section 19
