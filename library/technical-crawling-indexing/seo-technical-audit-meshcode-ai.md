---
name: "seo-technical-audit"
description: "Technical SEO audit — crawlability, indexability, robots.txt/sitemap, Core Web Vitals (INP), JS rendering, security headers, AI crawler management. Use when user says \"technical SEO\", \"robots.txt\", \"crawl issues\", \"Core Web Vitals\", \"index coverage\", or \"AI crawlers\". Also use when the user asks why Google is not indexing their pages, why the site feels slow, or what to fix in the site's build, hosting or crawl setup."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "meshcode-ai/skills"
repo_url: "https://github.com/meshcode-ai/skills"
source: "https://github.com/meshcode-ai/skills/blob/HEAD/skills/seo-technical-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/meshcode-ai/skills/HEAD/skills/seo-technical-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 4
collected: "2026-11-11"
---

<!-- Claude Code skill · meshcode-ai/skills · skills/seo-technical-audit/SKILL.md · MIT
     Source: https://github.com/meshcode-ai/skills/blob/HEAD/skills/seo-technical-audit/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Technical SEO Audit

## 1. Crawl & Index
- robots.txt valid; never block CSS/JS needed for rendering; sitemap referenced from robots.txt, every URL canonical + 200
- noindex: distinguish intent from accident (meta robots + X-Robots-Tag)
- Key pages within 3 clicks; main content renders without JS
- **Googlebot cap: first 2MB of HTML** — put core content + JSON-LD at the front of the DOM
- Crawl rate auto-throttles on 5xx/slowdowns. No manual control (GSC setting removed 2024-01)

## 2. AI Crawlers — blocking training ≠ blocking search citation
GPTBot = OpenAI training / OAI-SearchBot = ChatGPT search citation / ChatGPT-User = live browsing
ClaudeBot = training / Claude-SearchBot = citation / Google-Extended = Gemini training (AI Overviews uses Googlebot)
PerplexityBot = indexing + training / Applebot-Extended = Apple training (Siri/Spotlight use Applebot) / CCBot, Bytespider

## 3. Performance & Security
CrUX p75: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1. HTTPS + HSTS, no mixed content, single-hop redirects.

## Output
Issue → evidence (URL/bytes) → severity (blocker/major/minor) → fix. Keep blockers separate from quality improvements.
