---
name: "growthpilot"
description: "Autonomous Zero-to-One Marketing, Technical SEO, GEO/AEO (llms.txt & AI Search), Conversion Rate Optimization (CRO), Structured Data (Schema.org), Programmatic SEO, and Multi-Channel Launch Engine with a built-in Model Context Protocol (MCP) server. Use whenever taking a project, codebase, SaaS, CLI, or live URL from zero marketing to full SEO, AI search visibility, high-converting copy, and launch distribution."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "codesphere-u/growthpilot"
repo_url: "https://github.com/codesphere-u/growthpilot"
source: "https://github.com/codesphere-u/growthpilot/blob/HEAD/skills/growthpilot/SKILL.md"
raw_source: "https://raw.githubusercontent.com/codesphere-u/growthpilot/HEAD/skills/growthpilot/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · codesphere-u/growthpilot · skills/growthpilot/SKILL.md · MIT
     Source: https://github.com/codesphere-u/growthpilot/blob/HEAD/skills/growthpilot/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# GrowthPilot — Autonomous Zero-to-One Marketing, SEO, GEO/AEO, CRO & Launch Engine

Take any repository, web app, SaaS, CLI tool, or live URL from **zero marketing** to **full-stack Technical SEO, AI Search Visibility (`llms.txt` / GEO / AEO), Schema.org Entity Graph, Conversion Rate Optimization (CRO), Programmatic SEO, and a Multi-Channel Launch Kit** in seconds.

## When to Activate

- The user wants to **market a project from zero**, improve **SEO**, **GEO/AEO (AI search citability in ChatGPT, Claude, Perplexity, Google AI Overviews)**, or generate **`llms.txt` / `robots.txt` / `sitemap.xml` / JSON-LD Schema.org**
- The user wants a **Landing Page / Copywriting / CRO audit**, hero rewrite, or removal of low-trust AI-slop buzzwords
- The user wants a **Product Hunt**, **Hacker News (`Show HN`)**, **Reddit**, **X/Twitter thread**, **LinkedIn**, **Lifecycle Email**, or **30-60-90 Day Growth Playbook**
- The user wants an **MCP server for marketing & SEO** (`growthpilot --mcp`)

## Core Capabilities & Workflow

### 1. Audit Any Codebase or Live Website (`MKT001`–`MKT018`)

Run the deterministic 6-pillar marketing & SEO auditor against a local directory or live URL:

```bash
python3 ~/.agents/skills/growthpilot/scripts/growthpilot.py . --output-dir growthpilot-out
```

Audit a live production URL:

```bash
python3 ~/.agents/skills/growthpilot/scripts/growthpilot.py https://example.com --output-dir growthpilot-out
```

Run the built-in zero-config demo:

```bash
python3 ~/.agents/skills/growthpilot/scripts/growthpilot.py --demo --output-dir growthpilot-out
```

### 2. Auto-Fix Missing SEO, GEO (`llms.txt`) & Launch Assets (`--fix`)

When a repository starts at zero marketing, pass `--fix` to automatically generate missing `llms.txt`, `llms-full.txt`, `robots.txt`, `sitemap.xml`, `SEO_SCHEMA.jsonld`, `LAUNCH_PLAYBOOK.md`, and `PROGRAMMATIC_SEO.md`:

```bash
python3 ~/.agents/skills/growthpilot/scripts/growthpilot.py . --fix --site-url https://yourproduct.com
```

### 3. Score & Rewrite Copywriting for CRO (`--analyze-copy`)

Evaluate headlines, README hero sections, or landing copy for conversion clarity, CTA friction, proof density, and AI-slop inflation:

```bash
python3 ~/.agents/skills/growthpilot/scripts/growthpilot.py . --analyze-copy "Revolutionary next-gen AI platform that seamlessly unleashes synergy"
```

### 4. Run as a Model Context Protocol (MCP) Server (`--mcp`)

Start the zero-dependency JSON-RPC 2.0 `stdio` MCP server exposing `audit_project`, `analyze_copy_cro`, `generate_geo_seo_pack`, `generate_launch_kit`, `generate_programmatic_seo`, and `apply_marketing_fixes`:

```bash
python3 ~/.agents/skills/growthpilot/scripts/growthpilot.py --mcp
```

## Deep Domain Playbooks

Load the relevant reference guide when executing specialized marketing tasks:
- **Technical SEO, GEO/AEO & `llms.txt` Architecture**: [references/seo-and-geo-playbook.md](references/seo-and-geo-playbook.md)
- **Conversion Rate Optimization (CRO) & Anti-Slop Copywriting**: [references/cro-and-copywriting.md](references/cro-and-copywriting.md)
- **Zero-to-One Multi-Channel Launch & Programmatic SEO**: [references/zero-to-one-launch.md](references/zero-to-one-launch.md)
- **MCP Server Configuration & CI/SARIF Gate**: [references/mcp-and-ci-setup.md](references/mcp-and-ci-setup.md)
