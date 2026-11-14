---
name: "core-web-vitals-and-technical-seo"
description: "Optimizes Core Web Vitals (LCP, INP, CLS), crawl budget, canonicalization, mobile performance, XML sitemaps, robots.txt, and structured data validation for search engine performance."
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "Fahad-Mahmood/agentic-seo-skills"
repo_url: "https://github.com/Fahad-Mahmood/agentic-seo-skills"
source: "https://github.com/Fahad-Mahmood/agentic-seo-skills/blob/HEAD/skills/2-TRADITIONAL-AND-TECHNICAL-SEO/core-web-vitals-and-technical-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Fahad-Mahmood/agentic-seo-skills/HEAD/skills/2-TRADITIONAL-AND-TECHNICAL-SEO/core-web-vitals-and-technical-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · Fahad-Mahmood/agentic-seo-skills · skills/2-TRADITIONAL-AND-TECHNICAL-SEO/core-web-vitals-and-technical-seo/SKILL.md · MIT
     Source: https://github.com/Fahad-Mahmood/agentic-seo-skills/blob/HEAD/skills/2-TRADITIONAL-AND-TECHNICAL-SEO/core-web-vitals-and-technical-seo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Core Web Vitals and Technical SEO

## Overview

Technical SEO ensures search engine bots can efficiently crawl, render, and index every page while delivering an instant, frictionless user experience that passes Google's Core Web Vitals thresholds.

---

## Technical Performance Benchmarks

- **Largest Contentful Paint (LCP)**: Target `< 1.2s`.
  - Add `<link rel="preconnect">` and `<link rel="dns-prefetch">` for external CDN assets.
  - Preload critical font families with `display=swap`.
- **Cumulative Layout Shift (CLS)**: Target `< 0.01`.
  - Set explicit `aspect-ratio` or `width`/`height` on all image containers and media embed iframes.
- **Interaction to Next Paint (INP)**: Target `< 200ms`.
  - Debounce heavy filters and state updates.

---

## IndexNow Automated API Dispatcher

Implement a dispatcher utility that automatically alerts search engines on new content:

```typescript
export async function notifyIndexNow(urlList: string[], apiKey: string, host: string) {
  const payload = {
    host,
    key: apiKey,
    keyLocation: `https://${host}/${apiKey}.txt`,
    urlList,
  };

  await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}
```
