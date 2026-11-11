---
name: "find-dead-links"
description: "Find broken links and redirect chains with SEO impact assessment and pattern detection."
category: "migration-redirects"
platforms: ["claude-code"]
platform_source: "detected"
repo: "super0510/GrowthLint"
repo_url: "https://github.com/super0510/GrowthLint"
source: "https://github.com/super0510/GrowthLint/blob/HEAD/.claude/skills/find-dead-links/SKILL.md"
raw_source: "https://raw.githubusercontent.com/super0510/GrowthLint/HEAD/.claude/skills/find-dead-links/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 3
collected: "2026-11-11"
---

<!-- Claude Code skill · super0510/GrowthLint · .claude/skills/find-dead-links/SKILL.md · MIT
     Source: https://github.com/super0510/GrowthLint/blob/HEAD/.claude/skills/find-dead-links/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# /find-dead-links

Audit a page for broken links and redirect chains with impact analysis.

## Usage
```
/find-dead-links <url>
```

## Instructions

1. Run the link checker:
```bash
cd /Users/sdm/Desktop/GrowthLint && python3 -c "import growthlint.cli; growthlint.cli.app()" -- check-links "$URL"
```

2. Add **AI analysis**:
   - **Pattern detection**: Are broken links clustered? (e.g., all from a migration, all to a deprecated domain)
   - **SEO impact estimate**: Which broken links are most damaging for SEO? (links in main nav vs footer)
   - **User experience impact**: Which broken links are in the critical user path?
   - **Fix priority**: Rank broken links by importance (CTA links > nav links > footer links > sidebar links)
   - **Redirect optimization**: For long chains, suggest the direct URL to use instead

3. Provide a prioritized fix list with copy-pasteable redirects or URL replacements.
