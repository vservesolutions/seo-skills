---
name: "seo-outline"
description: "Use when you need an SEO-optimized article outline with 4-8 sections. Locale-parametric. Model-agnostic. Part of brand-loom; hosted brand-memory version at neoxra.com."
summary: "This skill generates SEO-optimized article outlines with structured sections."
category: "international-seo"
platforms: ["claude-code", "openclaw"]
platform_source: "detected"
repo: "hogan-tech/brand-loom"
repo_url: "https://github.com/hogan-tech/brand-loom"
source: "https://github.com/hogan-tech/brand-loom/blob/HEAD/skills/seo-outline/SKILL.md"
raw_source: "https://raw.githubusercontent.com/hogan-tech/brand-loom/HEAD/skills/seo-outline/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "Apache-2.0"
stars: 25
collected: "2026-11-09"
---

<!-- Claude Code, OpenClaw skill · hogan-tech/brand-loom · skills/seo-outline/SKILL.md · Apache-2.0
     Source: https://github.com/hogan-tech/brand-loom/blob/HEAD/skills/seo-outline/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO Article Outline

Use when you need an SEO-optimized article outline with 4-8 sections. Locale-parametric. Model-agnostic.

## Quick start

- **CLI:**  `brand-loom run seo_outline --text "best CRM for startups"`
- **Chain:** `brand-loom chain seo_outline,faq --text "best CRM for startups"`
- **Python:**
  ```python
  from brand_loom.agent import run_skill
  from brand_loom.providers import use_provider

  use_provider("openai")  # or "anthropic", "gemini", "ollama", "fake"
  result = run_skill("seo_outline", "your topic here")
  print(result.text)
  ```

## Install

```bash
pip install brand-loom            # standalone (no coding agent needed)
npx skills add hogan-tech/brand-loom  # via skills.sh
```

## Going further

Want hooks auto-matched to your brand voice, across every platform, no setup? → [neoxra.com](https://neoxra.com)
