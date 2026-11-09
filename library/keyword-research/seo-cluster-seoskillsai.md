---
name: "seo-cluster"
description: "SERP-based semantic keyword and topic clustering. Groups search terms by SERP URL overlap percentage to eliminate keyword cannibalization."
summary: "Clusters search terms semantically based on SERP URL overlap to prevent keyword cannibalization."
category: "keyword-research"
platforms: ["claude-code", "windsurf", "antigravity"]
platform_source: "declared"
repo: "seoskillsai/seo-skills-ai"
repo_url: "https://github.com/seoskillsai/seo-skills-ai"
source: "https://github.com/seoskillsai/seo-skills-ai/blob/HEAD/skills/seo-cluster/SKILL.md"
raw_source: "https://raw.githubusercontent.com/seoskillsai/seo-skills-ai/HEAD/skills/seo-cluster/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 21
collected: "2026-11-09"
---

<!-- Claude Code, Windsurf, Antigravity skill · seoskillsai/seo-skills-ai · skills/seo-cluster/SKILL.md · MIT
     Source: https://github.com/seoskillsai/seo-skills-ai/blob/HEAD/skills/seo-cluster/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# SERP-Based Semantic Keyword Clustering

Clusters keyword lists into distinct topic silos based on real-world SERP URL overlap to prevent keyword cannibalization.

---

## 🎯 Overlap Heuristic Rules

- **$\ge$ 4 Shared URLs in Top 10 SERPs:** Combine into a **single comprehensive article** (identical search intent).
- **1–3 Shared URLs in Top 10 SERPs:** Create **separate child articles** with directional cross-links.
- **0 Shared URLs:** Distinct search intent; assign to separate topical silos.

## 🛠️ CLI Execution
```bash
python scripts/serp_cluster.py --keywords "keywords.csv" --output "clusters.json"
```
