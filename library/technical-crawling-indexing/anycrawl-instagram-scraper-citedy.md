---
name: "anycrawl-instagram-scraper"
description: "Extract public Instagram data from a single URL through the AnyCrawl Scrape API. Use when a user provides an Instagram profile, reel, or post URL and wants as much structured data as possible from that one link, including normalized JSON plus the raw AnyCrawl markdown, HTML, links, and screenshot artifacts."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "detected"
repo: "citedy/skills"
repo_url: "https://github.com/citedy/skills"
source: "https://github.com/citedy/skills/blob/HEAD/skills/anycrawl-instagram-scraper/SKILL.md"
raw_source: "https://raw.githubusercontent.com/citedy/skills/HEAD/skills/anycrawl-instagram-scraper/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-14"
---

<!-- Claude Code skill · citedy/skills · skills/anycrawl-instagram-scraper/SKILL.md · MIT
     Source: https://github.com/citedy/skills/blob/HEAD/skills/anycrawl-instagram-scraper/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# AnyCrawl Instagram Scraper

Use this skill when the user gives a public Instagram URL and wants the richest extraction available through AnyCrawl.

## Workflow

1. Accept a single public Instagram URL.
2. Validate that it is one of the supported shapes:
   - `https://www.instagram.com/<username>/`
   - `https://www.instagram.com/reel/<shortcode>/`
   - `https://www.instagram.com/p/<shortcode>/`
3. Run the bundled extractor:

```bash
node .claude/skills/anycrawl-instagram-scraper/scripts/run.js "<instagram-url>"
```

4. Read the JSON file path printed by the script.
5. Summarize the important fields for the user:
   - page type
   - owner/profile info
   - caption text
   - media URLs and media type
   - engagement stats
   - hashtags and mentions
   - screenshot URL
   - anything clearly blocked by login or consent walls

## Output Handling

The script writes a full JSON artifact to `/tmp` by default and prints a compact summary to stdout.

The artifact includes:

- `normalized`: structured Instagram-focused extraction
- `anycrawl`: raw AnyCrawl response, including `markdown`, `html`, `links`, and `screenshot@fullPage` when available
- `request`: the exact payload used for the successful attempt

## Retry Guidance

The script already retries with a slower Playwright configuration when the first pass is thin or fails.

Manual retry only helps when Instagram serves unusual consent or login interstitials.

If you need the official template notes, read [references/template-notes.md](.claude/skills/anycrawl-instagram-scraper/references/template-notes.md).
