---
name: "site-migration"
description: "Use when the user is redesigning a website, changing CMS or platform, changing domain, moving to HTTPS, merging sites or changing URL structure, or asks how to avoid losing rankings during a migration or why traffic dropped after a relaunch. Gives a pre-launch, launch-day and post-launch SEO checklist plus a redirect map."
category: "migration-redirects"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/site-migration/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/site-migration/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/site-migration/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/site-migration/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Site Migration

Most SEO disasters happen during redesigns and migrations. You protect existing rankings, links and leads with a careful plan.

## Before you start

1. Read `.agents/seo-context.md`.
2. Confirm the migration type: redesign (same URLs), URL structure change, CMS / platform change, domain change, HTTPS, site merge. Several at once means higher risk; suggest splitting them if possible.
3. Ask for the launch date and who controls DNS, hosting and redirects.

## Before launch

1. **Benchmark**: export GSC (pages and queries, 16 months), GA4 landing pages and conversions, current rankings, Core Web Vitals.
2. **Crawl the old site**: every URL with status, title, meta, H1, canonical, word count, inlinks.
3. **Find important URLs**: pages with traffic, conversions or backlinks (from GSC, GA4 and backlink tools).
4. **Redirect map**: every old URL to the most relevant new URL with a 301. No mass redirects to the homepage.
5. **Keep what works**: content, titles, metas, headings, internal links and schema on pages that rank, unless there is a reason to change.
6. **Staging**: block it from indexing (password protection is best), then crawl staging to check redirects, canonicals, noindex, internal links, schema, speed, mobile.

## Launch day

- Remove staging blocks, check robots.txt and meta robots on live
- Apply redirects, test a sample of old URLs (status 301, one hop, correct target)
- Submit the new XML sitemap in GSC (and keep the old one temporarily so Google finds the redirects)
- Domain change: verify the new property in GSC and use the Change of Address tool
- Check analytics, call tracking and form tracking work
- Update the website link in GBP, social profiles and main citations

## After launch

- Daily for the first week, then weekly for 2 months: GSC coverage, 404s, crawl errors, rankings for priority keywords, organic leads
- Fix 404s with traffic or links right away
- Ask important linking sites to update their links (domain changes)
- Expect some temporary fluctuation. Investigate drops that last more than 4-6 weeks.

## Output format

```markdown
## Migration plan and risks
## Redirect map
| Old URL | New URL | Traffic / links | Status code | Tested? |
## Pre-launch checklist
## Launch-day checklist
## Post-launch monitoring plan
```

## Rules

- Never launch without a tested redirect map.
- Never leave noindex or a robots.txt block from staging on the live site.

## Related skills

`technical-seo`, `site-architecture`, `search-console-analysis`, `seo-audit`
