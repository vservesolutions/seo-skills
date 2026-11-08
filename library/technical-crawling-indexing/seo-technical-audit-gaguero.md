---
name: "seo-technical-audit"
description: "Audits the technical SEO health of a page or site: crawlability, indexing, rendering (JS), HTTP status codes, redirects, robots.txt, XML sitemaps, canonical tags, pagination, soft 404s, hreflang / international targeting, site architecture and internal-link depth, plus Core Web Vitals (LCP, INP, CLS) and mobile-friendliness. Produces a severity-ranked findings list with evidence and exact fixes. Use when someone asks why pages aren't indexed or ranking, mentions crawl errors, robots/sitemap/canonical/redirect/hreflang issues, page speed, Core Web Vitals, or wants a technical SEO audit."
category: "technical-crawling-indexing"
platforms: ["any-agent"]
platform_source: "declared"
repo: "gaguero/seo-agent-skills"
repo_url: "https://github.com/gaguero/seo-agent-skills"
source: "https://github.com/gaguero/seo-agent-skills/blob/HEAD/seo-technical-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/gaguero/seo-agent-skills/HEAD/seo-technical-audit/SKILL.md"
ref: "HEAD"
discovered_via: "awesome-seo-agent-skills"
license: "MIT"
stars: 0
collected: "2026-11-08"
---

<!-- Any agent skill · gaguero/seo-agent-skills · seo-technical-audit/SKILL.md · MIT
     Source: https://github.com/gaguero/seo-agent-skills/blob/HEAD/seo-technical-audit/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Technical SEO Audit

Technical SEO is the foundation: if a page can't be **crawled, rendered, and
indexed**, nothing else (content, schema, AI visibility) can help it. Audit in
that dependency order. Label every finding **measured** (you observed it) or
**inferred** (deduced without direct access).

## What to collect first

- The URL(s) or domain, and the target market/language(s).
- What you can actually inspect: live HTTP response + headers, rendered DOM,
  `robots.txt`, sitemap(s), Lighthouse/PSI report, Search Console coverage.
- If you only have pasted HTML, say so and scope findings accordingly.

## Audit checklist (in dependency order)

### 1. Crawlability
- `robots.txt`: reachable (200)? Does it accidentally `Disallow` important paths?
  Is the `Sitemap:` line present and correct? Never block CSS/JS needed to render.
- Crawl traps: infinite faceted URLs, session IDs, calendar links, parameter
  explosions. Recommend parameter handling / `robots` rules, not blanket blocks.
- Internal-link reachability: every important page should be reachable within a
  few clicks from the home/hub. Flag orphan pages and deep (>3–4 click) pages.

### 2. Indexability
- `<meta name="robots">` and `X-Robots-Tag` header: catch accidental `noindex`.
- Canonical: each page declares a self-referential canonical unless intentionally
  consolidating. Flag conflicting/cross-domain/chained canonicals and canonicals
  that point to non-200 or `noindex` URLs.
- Status codes: 200 for indexable content; 301 for permanent moves; avoid 302 for
  permanent; fix 4xx/5xx; eliminate redirect chains and loops.
- **Soft 404**: "not found" content returned with a 200. Flag thin/empty/error
  pages that should return 404/410.
- Duplicate content: parameterized, http/https, www/non-www, trailing-slash, and
  uppercase variants resolving to the same content without canonical/redirect.

### 3. Rendering
- Is critical content/links present in the **initial HTML**, or injected by JS?
  Client-side-only content risks delayed or missed indexing. Recommend SSR/SSG or
  pre-rendering for primary content and links.
- Compare raw HTML vs rendered DOM when possible. Flag content that only appears
  after interaction.

### 4. XML sitemaps
- Valid XML, < 50,000 URLs and < 50 MB uncompressed per file (use a sitemap index
  beyond that). Only **canonical, indexable, 200** URLs — no noindex/redirected/404.
- Submitted in Search Console and referenced from `robots.txt`.

### 5. International / hreflang (multilingual sites)
- `hreflang` set is **reciprocal** (every alternate links back) and **self-
  referential**. Use correct ISO codes (`en`, `es`, `es-PA`, plus `x-default`).
- hreflang URLs must be canonical, indexable 200 pages. Don't mix hreflang with
  conflicting canonicals across languages. This is the #1 multilingual SEO bug.

### 6. Site architecture
- Logical hierarchy: home → hub/category → detail. Shallow, descriptive URLs.
- Strong internal linking from authority pages to priority pages with descriptive
  anchor text. Flag important pages with too few internal links.

### 7. Performance — Core Web Vitals
Field data (CrUX/PSI) is the ground truth; lab (Lighthouse) is diagnostic. A page
passes only if **all three** are good at the **75th percentile**:

| Metric | Good | Common causes when failing |
|--------|------|----------------------------|
| **LCP ≤ 2.5 s** | loading | slow server/TTFB, render-blocking CSS/JS, unoptimized hero image, no preload |
| **INP ≤ 200 ms** | interactivity | heavy/long JS tasks, large main-thread work, unoptimized event handlers |
| **CLS ≤ 0.1** | stability | images/embeds without dimensions, injected banners, late-loading fonts (FOUT) |

Quote thresholds exactly. Report measured field values when available; otherwise
diagnose causes and mark as inferred.

### 8. Mobile & page experience
- Mobile-first: same content on mobile and desktop; responsive viewport set.
- HTTPS everywhere; no mixed content. No intrusive interstitials that block content.
- Tap targets, legible font sizes, no horizontal scroll.

## Output format

```
| Severity | Area | Finding | Evidence (measured/inferred) | Fix |
```

Severity scale:
- **P0 blocker** — prevents crawl/index/render (noindex on key pages, robots block,
  5xx, render-blocked content, broken canonical/hreflang).
- **P1 major** — meaningful ranking/UX impact (CWV failing, redirect chains, soft
  404s, sitemap errors).
- **P2 minor** — hygiene (anchor text, shallow internal links, minor redirects).
- **P3 nice-to-have**.

End with: a short prioritized fix order, and explicitly note any area you could
**not** verify due to lack of access. Hand schema findings to `seo-schema-builder`,
content/architecture-of-content to `seo-content-brief`, and gate changes through
`seo-quality-gates`.

See [references/checklist.md](references/checklist.md) for an expanded checklist
and verification commands.
