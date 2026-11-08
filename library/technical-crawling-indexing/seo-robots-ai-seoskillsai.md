---
name: "seo-robots-ai"
description: "AI bot crawler budget and permissions manager. Configures robots.txt to grant access to citation-capable AI search crawlers (GPTBot, ClaudeBot, Google-Extended) while blocking aggressive scrapers."
category: "technical-crawling-indexing"
platforms: ["claude-code", "windsurf", "antigravity"]
platform_source: "declared"
repo: "seoskillsai/seo-skills-ai"
repo_url: "https://github.com/seoskillsai/seo-skills-ai"
source: "https://github.com/seoskillsai/seo-skills-ai/blob/HEAD/skills/seo-robots-ai/SKILL.md"
raw_source: "https://raw.githubusercontent.com/seoskillsai/seo-skills-ai/HEAD/skills/seo-robots-ai/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 21
collected: "2026-11-08"
---

<!-- Claude Code, Windsurf, Antigravity skill · seoskillsai/seo-skills-ai · skills/seo-robots-ai/SKILL.md · MIT
     Source: https://github.com/seoskillsai/seo-skills-ai/blob/HEAD/skills/seo-robots-ai/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI Bot Crawler Permissions & Budget Manager

Configures `robots.txt` and HTTP response headers to optimize AI engine citations while protecting proprietary infrastructure from scraping attacks.

---

## 🤖 AI Crawler Policy Matrix

| Crawler Name | Operating Entity | Policy | Rationale |
| :--- | :--- | :--- | :--- |
| **`GPTBot`** | OpenAI (ChatGPT Search) | ✅ **Allow** | Powers live ChatGPT web citations and search grounding. |
| **`ClaudeBot` / `Anthropic-ai`** | Anthropic (Claude) | ✅ **Allow** | Powers Claude search grounding and web browsing. |
| **`Google-Extended`** | Google (Gemini / Overviews) | ✅ **Allow** | Enables inclusion in Google AI Overviews and Gemini citations. |
| **`Applebot-Extended`** | Apple (Apple Intelligence) | ✅ **Allow** | Enables citations in Siri and Apple Search features. |
| **`PerplexityBot`** | Perplexity AI | ✅ **Allow** | Powers real-time search citations and AI Overviews. |
| **`CCBot`** | Common Crawl | ❌ **Disallow / Rate-Limit** | Bulk unlicensed scraping without search citation benefits. |
| **`Bytespider`** | ByteDance (TikTok) | ❌ **Disallow** | Aggressive, high-frequency crawl patterns that exhaust server resources. |
| **`PetalBot`** | Huawei | ❌ **Disallow** | High crawl frequency with minimal search referral volume. |

---

## 📋 Recommended `robots.txt` Snippet

```
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://example.com/sitemap-index.xml

# AI Citations Permitted
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

# Scrapers Blocked
User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /
```
