---
name: "anycrawl-youtube-video-extractor"
description: "Extract public YouTube watch-page data from a single URL through the AnyCrawl Scrape API. Use when a user provides a YouTube watch link and wants as much structured data as possible from that one video, including normalized JSON plus the raw AnyCrawl markdown, HTML, links, transcript-bearing content, and screenshot artifacts."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "detected"
repo: "citedy/skills"
repo_url: "https://github.com/citedy/skills"
source: "https://github.com/citedy/skills/blob/HEAD/skills/anycrawl-youtube-video-extractor/SKILL.md"
raw_source: "https://raw.githubusercontent.com/citedy/skills/HEAD/skills/anycrawl-youtube-video-extractor/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-14"
---

<!-- Claude Code skill · citedy/skills · skills/anycrawl-youtube-video-extractor/SKILL.md · MIT
     Source: https://github.com/citedy/skills/blob/HEAD/skills/anycrawl-youtube-video-extractor/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# AnyCrawl YouTube Video Extractor

Use this skill when the user gives a public YouTube watch URL and wants deep video metadata through AnyCrawl.

## Workflow

1. Accept a single public YouTube watch URL.
2. Validate that it is one of the supported shapes:
   - `https://www.youtube.com/watch?v=VIDEO_ID`
   - `https://youtu.be/VIDEO_ID`
3. Run the bundled extractor:

```bash
node .claude/skills/anycrawl-youtube-video-extractor/scripts/run.js "<youtube-watch-url>"
```

4. Read the JSON file path printed by the script.
5. Summarize the important fields for the user:
   - title
   - channel metadata
   - publish and upload dates
   - duration
   - views and likes
   - description
   - transcript availability
   - endscreen recommendations
   - age restriction flag
   - screenshot URL

## Output Handling

The script writes a full JSON artifact to `/tmp` by default and prints a compact summary to stdout.

The artifact includes:

- `normalized`: structured YouTube-focused extraction
- `anycrawl`: raw AnyCrawl response, including `markdown`, `html`, `links`, and `screenshot@fullPage` when available
- `request`: the exact payload used for the successful attempt

If you need the official template notes, read [references/template-notes.md](.claude/skills/anycrawl-youtube-video-extractor/references/template-notes.md).
