---
name: "seo-bing"
description: "Bing Webmaster Tools + IndexNow — visibilidade no Bing (que alimenta as citações do Microsoft Copilot), dados de links e submissão de URLs via IndexNow. Use para indexação fora do Google (Bing, Yandex, Naver) ou citação no Copilot."
category: "general-seo"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "joaoguirunas/team-os"
repo_url: "https://github.com/joaoguirunas/team-os"
source: "https://github.com/joaoguirunas/team-os/blob/HEAD/.claude/skills/seo-bing/SKILL.md"
raw_source: "https://raw.githubusercontent.com/joaoguirunas/team-os/HEAD/.claude/skills/seo-bing/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 6
collected: "2026-11-13"
---

<!-- Claude Code skill · joaoguirunas/team-os · .claude/skills/seo-bing/SKILL.md · MIT
     Source: https://github.com/joaoguirunas/team-os/blob/HEAD/.claude/skills/seo-bing/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# seo-bing

The non-Google indexing surface. Google still rejects IndexNow (per
Gary Illyes, multiple SOTR episodes 2024-2025), so this skill is
specifically for **Amazon/Bing/Naver/Seznam.cz/Yandex/Yep indexing** and
**Microsoft Copilot AI citation** (which pulls from the Bing index).

## Prerequisites

- A Bing Webmaster Tools API key exported as `BING_WEBMASTER_API_KEY` (environment variable, e.g. in the `env` block of `~/.claude/settings.json`). The scripts read it directly; there is no installer script in this pack.
- Optional: an IndexNow host key (32+ chars) published at the URL
  declared as `INDEXNOW_KEY_LOCATION`.

## Routing

Defina o caminho uma vez (vale fora de hooks, onde a variável `CLAUDE_PROJECT_DIR` pode não existir):

```bash
SEO="${CLAUDE_PROJECT_DIR:-$(git rev-parse --show-toplevel 2>/dev/null || pwd)}/.claude/skills/seo/scripts/claude-seo"
```

| Command | Underlying script |
|---|---|
| `/seo bing links <url>` | `"$SEO" run bing_webmaster.py links <url>` |
| `/seo bing compare <urlA> <urlB>` | `"$SEO" run bing_webmaster.py compare <urlA> <urlB>`; both properties must be registered to the API account |
| `/seo bing submit <url>` (single URL) | `"$SEO" run indexnow_submit.py --host ... --urls <url>` |
| `/seo bing submit-batch <file>` | `"$SEO" run indexnow_submit.py --host ... --urls-file <file>` |
| `/seo bing verify-indexnow` | `"$SEO" run indexnow_submit.py --host ... --verify-only` |

## When this skill applies

- The user is publishing new pages and wants Microsoft Copilot
  citation eligibility (Bing index ingestion).
- The user wants to nudge Amazon/Bing/Naver/Seznam.cz/Yandex/Yep indexing for fresh
  URLs.
- The user manages both properties and wants to compare their Bing link data.
  For an arbitrary competitor, route to DataForSEO, Moz, or Common Crawl.

## Cross-skill delegation

- For Google indexing (very different model, sitemap-driven, no
  IndexNow), use `seo-google indexing`.
- For multi-source backlink confidence weighting, fall back to
  `seo-backlinks` which already integrates Bing + Moz + CC.
