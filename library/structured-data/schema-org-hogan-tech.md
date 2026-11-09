---
name: "schema-org"
description: "Use when you need Schema.org JSON-LD structured data. Pure Python — no LLM call required. Supports FAQPage, Article, Breadcrumb. Part of brand-loom; hosted brand-memory version at neoxra.com."
summary: "This skill generates Schema.org JSON-LD structured data for articles, FAQs, and breadcrumbs."
category: "structured-data"
platforms: ["claude-code", "openclaw"]
platform_source: "detected"
repo: "hogan-tech/brand-loom"
repo_url: "https://github.com/hogan-tech/brand-loom"
source: "https://github.com/hogan-tech/brand-loom/blob/HEAD/skills/schema-org/SKILL.md"
raw_source: "https://raw.githubusercontent.com/hogan-tech/brand-loom/HEAD/skills/schema-org/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "Apache-2.0"
stars: 25
collected: "2026-11-09"
---

<!-- Claude Code, OpenClaw skill · hogan-tech/brand-loom · skills/schema-org/SKILL.md · Apache-2.0
     Source: https://github.com/hogan-tech/brand-loom/blob/HEAD/skills/schema-org/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Schema.org Markup Generator

Use when you need Schema.org JSON-LD structured data. Pure Python — no LLM call required. Supports FAQPage, Article, Breadcrumb.

## Quick start

- **CLI:**  `brand-loom run schema_org --text '[{"q":"What is X?","a":"X is..."}]'`
- **Chain:** `brand-loom chain faq,schema_org --text "Our product helps teams..."`
- **Python:**
  ```python
  from brand_loom.agent import run_skill
  from brand_loom.providers import use_provider

  use_provider("openai")  # or "anthropic", "gemini", "ollama", "fake"
  result = run_skill("schema_org", "your topic here")
  print(result.text)
  ```

## Install

```bash
pip install brand-loom            # standalone (no coding agent needed)
npx skills add hogan-tech/brand-loom  # via skills.sh
```

## Going further

Want hooks auto-matched to your brand voice, across every platform, no setup? → [neoxra.com](https://neoxra.com)
