---
name: "searchcans-content-format-brief"
description: "Map localized Google web, image, video, and short-video result formats into a bounded content-format brief. Use for SEO/GEO content planning, editorial format discovery, visual-search research, and deciding which formats need further page-level validation."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "SearchCans/searchcans-skills"
repo_url: "https://github.com/SearchCans/searchcans-skills"
source: "https://github.com/SearchCans/searchcans-skills/blob/HEAD/skills/searchcans-content-format-brief/SKILL.md"
raw_source: "https://raw.githubusercontent.com/SearchCans/searchcans-skills/HEAD/skills/searchcans-content-format-brief/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "Apache-2.0"
stars: 3
collected: "2026-11-10"
---

<!-- Unspecified skill · SearchCans/searchcans-skills · skills/searchcans-content-format-brief/SKILL.md · Apache-2.0
     Source: https://github.com/SearchCans/searchcans-skills/blob/HEAD/skills/searchcans-content-format-brief/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SearchCans Content Format Brief

Map which types of pages, images, videos, and short videos are currently returned for one localized query. The result is a format inventory for planning—not a traffic forecast, ranking guarantee, engagement report, or a license to reuse content.

## Collect a localized format inventory

Confirm the topic, target country/language, intended audience, and the planning decision. The default run requests all four surfaces: Google web, Images, Videos, and Short Videos.

```bash
python scripts/content_format_brief.py "AI research agent" \
  --country us --language en --max-results 10 \
  --out content-format-brief.json
```

To answer a narrower question, repeat `--surface` with `web`, `images`, `videos`, or `short-videos`. This reduces cost and scope explicitly.

## Account-aware scope and interpretation

The default `--account-mode auto` estimates one SERP request per selected format, performs a sanitized Account API pre-flight, caps the selected surfaces only if needed, and respects available Parallel Lanes. `warn`, `enforce`, and `off` let the operator choose a different policy.

Use [the report template](references/content-format-report.md) to deliver:

1. Query, market, retrieved formats, and limits.
2. Observed format/page-type patterns for each surface.
3. Search questions and related searches as leads.
4. A content-format hypothesis and the source/page validation still needed.

Do not call something “popular,” “high-engagement,” “best-performing,” or “ranked” from this output. Google result appearance is an observed snapshot only. Image and video URLs are references; their appearance gives no reuse, ownership, or licensing right.

## Official website

[SearchCans](https://www.searchcans.com/)

## Resources

- `scripts/content_format_brief.py` generates the four-surface JSON inventory.
- `references/content-format-report.md` provides the planning-brief structure and boundaries.
