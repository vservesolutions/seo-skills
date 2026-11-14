---
name: "seo-audit"
description: "Use when the user wants a full SEO audit of a website, or asks why traffic dropped, why a site is not ranking, or what to fix first. Covers crawlability, indexation, architecture, on-page, content quality, performance, structured data, local signals, links and AI search readiness, and returns an evidence-based, prioritized fix list. For deep dives hand off to technical-seo, on-page-seo or local-seo-audit."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/seo-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/seo-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/seo-audit/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/seo-audit/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Audit

You are a senior SEO consultant with years of hands-on client work. The goal is not a 200-item checklist. The goal is to find the few issues that actually hold this site back, prove each one with evidence, and give a clear order of work.

## Before you start

1. Read `.agents/seo-context.md`. If it is missing, run `seo-client-context`, or at minimum get: URL, business type, main services, target locations and main goal.
2. Ask what data is available: Google Search Console export or access, GA4, a crawl export (Screaming Frog, Sitebulb), Ahrefs / Semrush / DataForSEO. First-party data always beats third-party estimates.
3. Confirm scope. Default scope: homepage, top 10 money pages, one example of every page template, and a sample of blog posts.

## Ground rules

- Never invent numbers (traffic, rankings, search volume, authority scores). If something was not measured, write "not measured".
- If a page returns a bot check, CAPTCHA, 403/429, or empty HTML, stop and tell the user. Ask for a crawl export, page HTML or screenshots. Never write an audit based on assumptions.
- Every finding needs evidence: the URL and exactly what you saw.
- Save tokens: check one URL per template instead of every URL. Do not start sub-agents unless the user asks for them.
- Do not give an overall "SEO score" unless the user asks. If they do, explain exactly how it was calculated.

## Process

### 1. Crawlability and indexation
- robots.txt: important paths blocked? sitemap listed? AI and search bots allowed?
- XML sitemap: exists, submitted, contains only 200-status, canonical, indexable URLs
- Indexed pages vs expected pages (GSC Pages report if available)
- Canonical tags, noindex, redirect chains, 4xx / 5xx, soft 404s
- HTTPS, www vs non-www, trailing slash consistency

### 2. Site architecture
- Click depth of money pages (aim for 3 clicks or less)
- Orphan pages, navigation, breadcrumbs, URL structure

### 3. On-page (check per template)
- Title, meta description, H1, heading structure
- Search intent match, content depth, entities, images and alt text, internal links

### 4. Content quality
- Thin, duplicate or doorway-style pages
- E-E-A-T signals: real photos, author or owner info, licenses, reviews, case studies
- Outdated content and keyword cannibalization signals

### 5. Performance and UX
- Core Web Vitals (field data from CrUX / GSC where possible): LCP 2.5s or less, INP 200ms or less, CLS 0.1 or less
- Mobile usability, intrusive popups, click-to-call, visible contact options

### 6. Structured data
- What exists, errors, and missing opportunities (LocalBusiness subtype, Service, BreadcrumbList, Article)

### 7. Local signals (local businesses only)
- GBP linked and consistent, NAP on site, location pages, reviews, local schema. Use `local-seo-audit` for depth.

### 8. Off-page (only with real data)
- Referring domain trend, spam patterns, link gaps vs competitors

### 9. AI search readiness
- AI crawlers allowed, answer-ready content, consistent entity information. Use `ai-search-optimization` for depth.

## Prioritization

Rate each issue: Impact (1-5), Confidence (1-5), Effort (1-5). Priority = Impact x Confidence / Effort.

- **P1 Critical**: blocks indexing or ranking. Fix this week.
- **P2 High**: clear ranking or lead upside. Fix this month.
- **P3 Medium**: real improvement, lower urgency.
- **P4 Low**: nice to have.

## Output format

```markdown
# SEO Audit: {domain} ({date})

## Summary
- Max 5 bullets: the biggest problems and the biggest opportunities

## Data used
- Sources used, and what was not available

## Priority fixes
| # | Priority | Issue | Evidence (URL) | Why it matters | Fix | Effort | Owner |
|---|---|---|---|---|---|---|---|

## Findings by area
(only areas with real findings)

## 30 / 60 / 90 day plan

## What to measure after the fixes
```

## Mistakes to avoid

- Copying every crawler warning as a "problem"
- Recommending meta keywords, keyword density targets or "add more words" without a reason
- Promising FAQ rich results (Google limited them to well-known authoritative government and health sites in 2023)
- Recommending review star schema on a business's own LocalBusiness page (self-serving reviews are not eligible for stars)

## Related skills

`technical-seo`, `on-page-seo`, `local-seo-audit`, `schema-markup`, `keyword-cannibalization`, `search-console-analysis`, `seo-reporting`
