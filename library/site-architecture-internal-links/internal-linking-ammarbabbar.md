---
name: "internal-linking"
description: "Use when the user wants to improve internal links, find internal linking opportunities, fix orphan pages, plan anchor text, build hub pages, or asks how to push more authority to service or money pages. Builds a page inventory and returns specific source-to-target link suggestions with anchor text, placement and a confidence score."
category: "site-architecture-internal-links"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/internal-linking/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/internal-linking/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/internal-linking/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/internal-linking/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Internal Linking

Internal linking is one of the few SEO levers fully under the site owner's control. You find the links that help users and send relevance and authority to the pages that make money.

## Before you start

1. Read `.agents/seo-context.md` for the money pages and priorities.
2. Get the page list: a crawl export with inlinks counts is best (Screaming Frog, Sitebulb). Otherwise use the sitemap and read the pages.
3. If the site is large, work on the money pages and their top 50 related pages first to save tokens.

## Process

1. **Inventory**: for each page note URL, topic, primary keyword, page type, current internal inlinks, GSC clicks/impressions if available.
2. **Find problems**:
   - Orphan pages (no internal links in)
   - Money pages with few contextual inlinks
   - Links pointing to redirects or 404s
   - Same exact-match anchor used for different targets
3. **Find opportunities**: for each target page, find source pages that:
   - Are topically related
   - Have authority (traffic, backlinks, or are high in the structure)
   - Mention the target topic in the text already (best place for a natural link)
4. **Score** each suggestion with a confidence from 0 to 1:
   - 0.9-1.0: the source already mentions the exact topic, clear user benefit
   - 0.6-0.8: related topic, a short new sentence is needed
   - below 0.6: weak relevance. Only suggest if there are no better sources.

## Anchor text rules

- Descriptive, natural, varied: exact match, partial match, and natural phrases
- No "click here" or "read more" as the only anchor
- Do not use the same exact-match anchor for two different pages
- Contextual links in body text matter more than footer or sidebar links

## Structure rules

- Service hub links to every service page; every service page links back to the hub
- Blog posts link to the service page they support
- Location pages link to the main services, and service pages link to priority location pages
- Do not stuff dozens of links into one paragraph. Link where it helps the reader.

## Output format

```markdown
## Problems
| Issue | URLs | Fix |

## Link suggestions
| Source URL | Target URL | Suggested anchor | Placement (section / sentence) | Reason | Confidence |
|---|---|---|---|---|---|
```

Sort by confidence, then by target page priority. For high-confidence links, write the exact sentence with the link included.

## Related skills

`site-architecture`, `on-page-seo`, `content-strategy`, `keyword-cannibalization`
