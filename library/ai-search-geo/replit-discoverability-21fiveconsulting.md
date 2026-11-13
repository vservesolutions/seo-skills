---
name: "replit-discoverability"
description: "Build or audit public-facing websites and hybrid public/private web apps in Replit for technical SEO, answer-engine optimization (AEO), generative-engine discoverability (GEO), accessibility, and real visitor performance. Use when asked to build a search-ready website, improve indexing or AI discoverability, audit SEO, fix search-console crawl problems, or verify discoverability after deployment. Two modes: Build It Right for new sites and Audit and Repair for existing sites. Do not invoke for unrelated feature development, generic copywriting, paid ads, security vulnerability remediation, or…"
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "21FiveConsulting/replit-discoverability-skill"
repo_url: "https://github.com/21FiveConsulting/replit-discoverability-skill"
source: "https://github.com/21FiveConsulting/replit-discoverability-skill/blob/HEAD/replit-discoverability/SKILL.md"
raw_source: "https://raw.githubusercontent.com/21FiveConsulting/replit-discoverability-skill/HEAD/replit-discoverability/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-13"
---

<!-- Unspecified skill · 21FiveConsulting/replit-discoverability-skill · replit-discoverability/SKILL.md · MIT
     Source: https://github.com/21FiveConsulting/replit-discoverability-skill/blob/HEAD/replit-discoverability/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Replit Website Discoverability

A portable, site-agnostic skill for Replit Agent. **Never infer the project's stack, brand, locale, domain, search properties, or publishing permissions from this skill.** Inspect the actual project and ask for missing business-critical facts only when necessary. Refer to `references/technical-checklist.md` and `references/acceptance-report.md` when appropriate.

## Core contract

1. **Select a mode.** For a new site or major new public section use **Build It Right**. For an existing site or reported search issue use **Audit and Repair**. For mixed public/private sites use the appropriate rules for each route.
2. **Separate facts from hypotheses.** Describe observed source, build output, HTTP responses, browser behavior, and search-platform reports independently. A scanner score, advisory or missing rich result is not proof of a defect or search penalty.
3. **Permission gates.** By default, an audit is read-only. Treat the user's explicit request as authorization for the clearly stated scope; do not ask for the same approval twice. Before expanding that scope, present the narrow change, benefit, risks, files/routes affected, tests, and rollback strategy, then obtain approval. Never trigger “fix all,” a broad Agent scan, install dependencies, alter DNS/Search Console settings, enable auto-remediation, or publish unless the user has separately authorized that action. A request to audit is not permission to repair; permission to edit is not permission to publish. Respect existing workspace rules and any more restrictive user instructions.
4. **Preserve the product.** No silent copy rewrites, claims, brand-color replacement, typography redesign, route changes, authentication changes, or removal of interactions. Reuse the site's design tokens and requirements. Do not change semantics merely to satisfy a checker at the cost of functionality.
5. **Public content first.** Important indexable pages should return useful page-specific content, meaningful internal links, and correct metadata in the **initial HTTP HTML** via SSR/SSG/prerender where supported. Do not assume browser-rendered SPA content is visible to all crawlers. Hydration must not overwrite initial canonicals or duplicate structured data.
6. **Private is private.** Classify authenticated, admin, utility, internal-search, and sensitive result routes. Apply appropriate `noindex` to non-public HTML; keep genuine private data behind authorization. `robots.txt` and `noindex` are not access controls. Never expose user, client, or admin data to test SEO. Protect APIs from unintended indexing and caching based on sensitivity.
7. **Test what ships.** Distinguish localhost/dev from built production and actual deployment. Observe any host/proxy overrides. Verify real status codes, headers, HTML, hydrated UI, mobile behavior, and user journeys. Never report deployment success until the platform confirms it; never report indexing success from indexability alone.
8. **Prioritize outcomes.** Correct blockers first, then accessibility and real performance, then content structure and optional enhancements. Never chase a score at the expense of accessibility, security, reliable workflows, or visual quality.

## Mode A: Build It Right

Before implementation, obtain or infer from supplied project evidence: site purpose/audience, public vs private route inventory, owner-approved canonical domain (including `www` preference), primary language/geography, required pages, brand/design system, authorized public identity/contact facts, content ownership, and hosting/deployment model. Mark unknowns; do not invent them.

Produce a short **discoverability architecture plan** listing: route inventory and index policy; rendering strategy per public route; canonical and redirect policy; sitemap/robots; metadata and schema; internal-link strategy; design/accessibility standards; performance plan; testing; deployment and post-launch indexing checks. Get implementation authorization before making changes.

Implement incrementally:

- **Architecture:** Ensure public routes render distinct meaningful HTML before JS execution; stable semantic navigation; `<a href>` for discoverable links; real HTTP 404 for unknown public routes and 404 for missing assets; avoid sitewide `200` SPA fallbacks for unknown URLs. Make routes with client functionality hydrate without replacing their initial public content. Preserve private app shells where needed.
- **Crawl and canonical:** Explicit canonical host and path convention; internal links, sitemap and canonical tags agree. Where platform permits, redirect alternate hosts/protocols/trailing-slash aliases consistently. Do not blindly redirect routes used by APIs, authentication callbacks or signed URLs.
- **Metadata and structured data:** Unique, truthful title/description/H1 for each important page; relevant robots directive; open graph/social preview pointing to public stable assets; only accurate schema types/properties supported by visible content; avoid fabricated reviews, credentials, dates, local presence, or FAQ rich-result promises. JSON-LD should not be duplicated after hydration.
- **Information quality:** Answer real user questions directly with helpful headings, original expertise, specific facts, evidence where warranted, dates only when verified, owner/author attribution when appropriate, and contextual internal links. Keep claims current and precise. Add structured FAQ content only where genuine Q&A exists; do not duplicate answers with conflicting schema.
- **AEO/GEO:** Make useful answers clear, accessible, attributable, and available in crawlable public content. Check that business/entity details and cited sources are accurate and consistent with visible page content. When AI crawler access matters, distinguish search/retrieval crawlers from model-training crawlers, establish the publisher's intended policy, and check current official documentation before changing directives. Do not assume that allowing a bot, adding markup, or publishing `llms.txt` improves citations; `llms.txt` remains optional and experimental, never a substitute for HTML discoverability. This skill covers technical and on-page discoverability, not guaranteed off-page authority, reputation, ranking, or citation outcomes.
- **Accessibility:** Use meaningful heading hierarchy, labels, keyboard access/focus, appropriate ARIA, image alt text, zoom support, readable text contrast (WCAG AA 4.5:1 normal text / 3:1 large text), and reduced-motion handling. Evaluate foregrounds against effective painted backgrounds and test interactive states. Preserve brand accents for decorative/non-text use when appropriate.
- **Performance:** Size images for display; use modern formats, responsive sources where useful, explicit dimensions and sensible lazy/eager loading. Avoid render-blocking dependencies where benefits outweigh layout risk. Do not hide key content/CTAs behind JS-dependent entrance animations. Measure field or reproducible lab FCP/LCP/CLS/INP when feasible, and distinguish raw asset size from transferred bytes. Warn on genuinely excessive JS but do not automatically rewrite the router or delete essential functionality.

Verify against the checklist, then seek explicit approval to deploy. After deployment, independently verify **live** output before marking complete.

## Mode B: Audit and Repair

**Stage 1: Read-only inventory.** Enumerate public/private/utility routes, host variants, redirect and trailing-slash behavior, current sitemap(s), robots directives, initial HTML and relevant response headers (including `X-Robots-Tag`) per route, canonical, metadata, schema, status codes, asset headers, accessibility, mobile UX and performance. For multilingual or regional sites, inspect language declarations and `hreflang`; for large or parameterized sites, look for crawl traps such as faceted navigation and internal-search URLs. Inspect Search Console or equivalent only if access is available and approved. If inaccessible, request the exact report/status or a screenshot; do not guess Google's reason.

**Stage 2: Evidence-based issue register.** For each issue give route, observed evidence and date/environment, severity (blocker/high/medium/low), user impact, evidence confidence, smallest feasible remedy, regression risks, and whether it's already resolved, stale, optional or unverified. Separate platform-level issues (DNS/redirects/host, indexing reports, caching proxy) from app source defects. Always reconcile previous fixes against current LIVE output.

**Stage 3: Prioritize and authorize.** Present a small batch of closely related, low-risk fixes. Do not automatically implement every reported issue. If the user requested an audit only, ask before editing; if they requested specific fixes, proceed within that scope and ask before expanding it. Keep copy/positioning recommendations separate from technical defects. If measured benefit seems modest and risks are meaningful, recommend deferral.

**Stage 4: Targeted changes in development.** Modify only authorized components/routes. Preserve existing tests and rollback path. Never alter sensitive routes, authentication or private data exposure as a side effect of SEO optimization. Do not let SSR-related code splitting accidentally replace public page HTML with lazy/Suspense fallbacks.

**Stage 5: Regression and delivery.** Run applicable build/typecheck and targeted test matrix. Compare before/after with equivalent browser conditions; include initial HTTP HTML and hydrated results, desktop and mobile, accessibility, route-specific SEO, auth regressions, and asset performance. Report failures and unknowns transparently. Await explicit publish authorization. On successful publish, recheck LIVE routes, headers, visuals and critical journeys. Search engine indexation may take time and cannot be guaranteed.

## Search-platform troubleshooting

Track the **exact URL** inspected: protocol, `www`, path and trailing slash matter. Distinguish `301/308` redirect aliases from `200` canonical pages. Check Google-selected canonical versus declared canonical when Search Console provides it; check exact coverage status, last crawl, live test and the sitemap submission for the matching property. A sitemap inclusion is not proof that Google discovered or indexed a page; indexing and ranking are controlled by search engines. Avoid unnecessary duplicate Search Console changes without evidence. Googlebot verification must not bypass access controls or trigger rate-limited scans.

## Report deliverable

For a completed build or substantive audit/repair, produce an **acceptance report** using `references/acceptance-report.md`, sized to the work. A narrow read-only check can use a concise version rather than reproducing every table. In all cases, distinguish what was measured, inferred, unknown, changed (if anything), test results, deployment state, and the next recommendation.

## External guidance and currency

Standards and search-engine behavior evolve. When available, check official up-to-date documentation before implementing contested or version-sensitive rules. Prefer Google Search Central, web.dev, W3C/WAI and the current framework/host documentation. Never turn an SEO plugin/scanner's opinion into an unconditional rule. Reference links appear in the technical checklist.
