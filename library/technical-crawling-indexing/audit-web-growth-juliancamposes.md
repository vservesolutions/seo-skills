---
name: "audit-web-growth"
description: "Comprehensive audit workflow for public websites, localhost apps, current web projects, Docker/Docker Compose deployments, and local-vs-production comparisons. Use when Codex is asked in English or Spanish to audit, analyze, crawl, compare, or improve a website/app for technical performance, Core Web Vitals, Lighthouse, mobile/desktop UX, visual design defects, accessibility, technical SEO, forms, funnels, CRO, sales conversion, Google Ads conversion measurement, GA4, GTM, Consent Mode, quick wins, technical developer findings, or related web code quality."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "juliancamposes/audit-web-growth"
repo_url: "https://github.com/juliancamposes/audit-web-growth"
source: "https://github.com/juliancamposes/audit-web-growth/blob/HEAD/Codex/audit-web-growth/SKILL.md"
raw_source: "https://raw.githubusercontent.com/juliancamposes/audit-web-growth/HEAD/Codex/audit-web-growth/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 7
collected: "2026-11-12"
---

<!-- Unspecified skill · juliancamposes/audit-web-growth · Codex/audit-web-growth/SKILL.md · MIT
     Source: https://github.com/juliancamposes/audit-web-growth/blob/HEAD/Codex/audit-web-growth/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Audit Web Growth

## Overview

Perform non-destructive web growth audits that combine browser evidence, Lighthouse where available, URL discovery, form and measurement inspection, and local code/project analysis. Keep facts, measurements, inferences, hypotheses, and limitations clearly separated.

## Language

Use English for internal audit taxonomy, finding categories, scoring fields, evidence labels, scripts, and reusable reasoning. Reply and generate user-facing reports in the same language as the user's request unless the user asks for another language.

## First Decisions

Before starting, deduce safely from the URL, project, sitemap, README, scripts, Docker files, rendered page, and visible code:

- target: public URL, localhost URL, current project, Docker app, or local-vs-production comparison
- business goal and primary conversion
- requested scope: quick representative sample, all discoverable URLs, passive form audit, authenticated area, or comparison
- maximum URLs, crawl depth, timeout, retries, concurrency, and request pace
- whether services may be started locally
- whether forms may be tested beyond passive inspection
- whether a safe test account/session exists for private areas

Ask only for decisions that cannot be inferred safely. Ask before large crawls, authenticated testing, form submission, purchases, reservations, account creation, database writes, destructive Docker commands, or changes to project files/configuration.

## Workflow

1. Establish scope, safety constraints, environment, and output directory.
2. Discover URLs from `robots.txt`, sitemap locations, sitemap indexes, compressed sitemaps, redirects, canonicals, internal links, and local route/code discovery as applicable.
3. Select URLs by business importance, page type, template, depth, and requested limits. Do not start unbounded crawling.
4. For each selected URL, gather desktop and mobile browser evidence: screenshots when possible, console errors, failed network requests, visible layout/UX/accessibility issues, forms, banners, popups, and conversion paths. Actively inspect component states, not only the initial page render: open menus/dropdowns/modals, hover/focus CTAs, scroll sticky elements, trigger validation states with safe empty-field checks, expand accordions/tabs, and observe banners/widgets when present. When the request includes design, mobile, UX, navigation, menus, or "things that do not look right", read `references/visual-diagnostics.md` and run a viewport-by-viewport visual defect and interaction-state pass; do not rely only on Lighthouse scores.
5. Run Lighthouse mobile and desktop when available. Label results as lab data and distinguish public production, local development, local production build, and field data from CrUX/PageSpeed Insights.
6. Inspect funnels, forms, CTAs, and measurement passively by default. Read `references/funnels-tracking.md` for landing-to-conversion paths, form-event-conversion mapping, GA4/GTM/Google Ads checks, and funnel breakpoints. Do not claim conversion correctness from IDs alone.
7. For local projects, inspect code, routes, layout/components, assets, env variable presence with secret redaction, analytics implementations, Docker/Compose, running services, ports, and commands. Relate browser findings to files only when evidence supports it.
8. Score each area separately and prioritize findings by business impact, evidence, effort, confidence, and conversion proximity. Read `references/scoring-delivery.md` for scoring, quick wins, developer mode, final QA, and report variants.
9. Produce the main Markdown report plus requested CSV/JSON artifacts, raw Lighthouse outputs, screenshots index, URL inventory, form inventory, funnel map, form-event-conversion map, quick wins list, developer issue list, and limitations.

## Bundled Resources

Use `scripts/audit_web_growth.py` for repeatable, safe helpers:

```bash
python3 /path/to/audit-web-growth/scripts/audit_web_growth.py sitemap https://example.com --max-urls 200 --out urls.json
python3 /path/to/audit-web-growth/scripts/audit_web_growth.py crawl https://example.com --max-urls 50 --depth 2 --out crawl.json
python3 /path/to/audit-web-growth/scripts/audit_web_growth.py inspect-page https://example.com --out page.json
python3 /path/to/audit-web-growth/scripts/audit_web_growth.py detect-project /path/to/project --out project.json
python3 /path/to/audit-web-growth/scripts/audit_web_growth.py detect-docker /path/to/project --out docker.json
python3 /path/to/audit-web-growth/scripts/audit_web_growth.py visual-static https://example.com --out visual-static.json
python3 /path/to/audit-web-growth/scripts/audit_web_growth.py visual-static /path/to/project --out visual-static.json
python3 /path/to/audit-web-growth/scripts/audit_web_growth.py score-findings --findings findings.json --out scored-findings.json
python3 /path/to/audit-web-growth/scripts/audit_web_growth.py tracking-map --inspections page-inspections.json --out tracking-map.json
python3 /path/to/audit-web-growth/scripts/audit_web_growth.py wait-url http://localhost:3000 --timeout 60
python3 /path/to/audit-web-growth/scripts/audit_web_growth.py lighthouse http://localhost:3000 --form-factor both --out-dir lh
python3 /path/to/audit-web-growth/scripts/audit_web_growth.py report --title "Audit" --findings findings.json --out report.md
```

Read only the references needed for the current audit:

- `references/url-discovery.md`: sitemaps, crawling, normalization, page grouping, URL inventories.
- `references/local-docker.md`: current project, localhost, Docker/Compose, service safety, route discovery.
- `references/performance-lighthouse.md`: Lighthouse, Core Web Vitals, lab/field/local distinctions.
- `references/design-ux-cro.md`: desktop/mobile visual review, UX, CRO, sales recommendations.
- `references/visual-diagnostics.md`: systematic detection of rendered design defects, overlap, clipping, hidden content, overflow, broken responsive states, and screenshot evidence.
- `references/funnels-tracking.md`: funnel path auditing, CTA/form measurement maps, GA4/GTM/Google Ads evidence, and conversion breakpoints.
- `references/forms-measurement.md`: forms, Google Ads, GA4, GTM, Consent Mode, passive vs authorized tests.
- `references/seo-accessibility.md`: technical SEO and accessibility checks.
- `references/scoring-delivery.md`: area scores, priority formula, quick wins, developer mode, and final checklist.
- `references/reporting.md`: report structure, evidence, scoring, CSV/JSON artifacts.

## Safety Rules

Keep audits non-destructive. Never submit real forms, create users, perform purchases, bypass auth/CAPTCHA/rate limits, access private Google accounts, expose secrets, modify project files, run cleanup commands, delete Docker resources, or change databases without explicit user approval. Redact tokens, cookies, passwords, API keys, and personal data in logs and reports.

When using Docker, inspect first, start only necessary services after the user requested local auditing, avoid unnecessary rebuilds, never run `docker compose down` or destructive cleanup, and stop only processes/containers created by the audit unless the user asks to keep them.

## Output Standard

Every finding must include an identifier, URL, device, environment, category, description, evidence, impact, severity, concrete recommendation, estimated effort, confidence, related file/component when applicable, and verification method. Include limitations for blocked pages, unavailable dependencies, missing CrUX/PageSpeed access, unauthenticated private areas, and any checks not performed.

Always include separate area scores for performance, UX mobile, visual design, accessibility, SEO, CRO, forms, and measurement when enough evidence exists. If evidence is insufficient, mark the score as `not scored` and explain what is missing.

Never invent metrics, crawl results, analytics behavior, or conversion validation. State whether evidence is from code, rendered HTML, browser runtime, `dataLayer`, network requests, Lighthouse lab data, field data, authorized test action, inference, or not verifiable without authenticated access.
