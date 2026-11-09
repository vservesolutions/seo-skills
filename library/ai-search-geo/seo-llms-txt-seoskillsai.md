---
name: "seo-llms-txt"
description: "Generates specification-compliant llms.txt and llms-full.txt files from website sitemaps and content collections to optimize discovery by AI models (Perplexity, ChatGPT, Claude, Gemini)."
summary: "Generates specification-compliant llms.txt and llms-full.txt files to aid AI discovery."
category: "ai-search-geo"
platforms: ["claude-code", "windsurf", "antigravity", "gemini-cli"]
platform_source: "declared+detected"
repo: "seoskillsai/seo-skills-ai"
repo_url: "https://github.com/seoskillsai/seo-skills-ai"
source: "https://github.com/seoskillsai/seo-skills-ai/blob/HEAD/skills/seo-llms-txt/SKILL.md"
raw_source: "https://raw.githubusercontent.com/seoskillsai/seo-skills-ai/HEAD/skills/seo-llms-txt/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 21
collected: "2026-11-09"
---

<!-- Claude Code, Windsurf, Antigravity, Gemini CLI skill · seoskillsai/seo-skills-ai · skills/seo-llms-txt/SKILL.md · MIT
     Source: https://github.com/seoskillsai/seo-skills-ai/blob/HEAD/skills/seo-llms-txt/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Automated LLMs.txt & LLMs-Full.txt Generation Standard

Generates `/public/llms.txt` and `/public/llms-full.txt` files according to the **llmstxt.org** specification adopted by Anthropic, OpenAI, and Google.

---

## 📄 File Formats

### 1. `/public/llms.txt` (Concise Summary Feed)
```markdown
# [Site Name]

> [High-level summary of the site, central entities, and primary value proposition.]

## Core Documentation & Tools

- [Full SEO Skills Directory](https://example.com/skills): Complete catalog of 22 AI SEO skills.
- [Technical SEO Audit Engine](https://example.com/skills/seo-audit): Automated technical diagnostic tool.
- [2026 Schema Engine](https://example.com/skills/seo-schema): Validated JSON-LD schema builder.

## Agent Implementations

- [Claude Code Integration](https://example.com/claude/): MCP servers and agent workflows for Anthropic Claude.
- [Google Antigravity Integration](https://example.com/antigravity/): Native skills and Gemini CLI pipelines.
```

### 2. `/public/llms-full.txt` (Complete Semantic Graph)
Contains complete article text, API specifications, and code snippets concatenated cleanly in markdown format for deep ingestion.

---

## 🛠️ CLI Generation Command
```bash
python scripts/llms_txt_builder.py --sitemap "public/sitemap-index.xml" --output "public/"
```
