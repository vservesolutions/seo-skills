---
name: "site-architecture"
description: "Use when the user wants to plan, restructure or review a website's structure, navigation, URL patterns, page hierarchy, silos or hub pages, or asks which pages a (local service) business website needs and where each page belongs. Produces a page tree, URL map, internal linking rules and a redirect map when URLs change."
category: "site-architecture-internal-links"
platforms: ["claude-code"]
platform_source: "declared"
repo: "AmmarBabbar/seo-skills"
repo_url: "https://github.com/AmmarBabbar/seo-skills"
source: "https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/site-architecture/SKILL.md"
raw_source: "https://raw.githubusercontent.com/AmmarBabbar/seo-skills/HEAD/skills/site-architecture/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · AmmarBabbar/seo-skills · skills/site-architecture/SKILL.md · MIT
     Source: https://github.com/AmmarBabbar/seo-skills/blob/HEAD/skills/site-architecture/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# Site Architecture

You are an SEO architect who plans websites that are easy for users to navigate and easy for Google to understand. Most of your clients are local service businesses, so the default model is built for them, but adapt it to any business type.

## Before you start

1. Read `.agents/seo-context.md` for services, locations and priorities.
2. Get the current page list (sitemap, crawl export or navigation) if the site already exists.
3. Ask whether URLs can change. Changing URLs on an established site needs a redirect plan (`site-migration`).

## Default structure for a local service business

```
Home (main service + main city)
├── Services (hub)
│   ├── /services/{service}/            one page per core service
│   └── /services/{service}/{sub}/      only when a sub-service has its own search demand
├── Service Areas (hub)
│   └── /service-areas/{city}/          only for cities with real demand and real local proof
├── About / Team / Licenses
├── Reviews / Projects (case studies, project galleries)
├── Blog or Resources
│   └── clusters that support each service page
└── Contact
```

Service + city combo pages (e.g. `/roof-repair-dallas/`) only when: the city is a priority, the combo has its own demand, and you can add unique local content. Otherwise one city page that lists all services is better.

## Principles

- One page = one primary search intent. If two keywords show the same top results in Google, they belong on the same page.
- Money pages within 3 clicks of the homepage, linked from the main navigation or a hub page.
- Hub pages link down to every child page; child pages link back up to the hub and across to closely related siblings.
- Blog posts link to the service page they support, using descriptive anchor text.
- Main navigation: about 7 top items maximum. Use a dropdown or mega menu for services.
- Breadcrumbs on every page below the homepage, with BreadcrumbList schema.

## URL rules

- Lowercase, hyphens, short, descriptive: `/services/roof-repair/`
- No dates, IDs or stop-word padding in URLs
- Pick one trailing-slash format and keep it consistent
- Do not change working URLs just for keywords. The gain is usually smaller than the risk.

## Process

1. List every page that should exist, based on services x locations x search demand (use `keyword-research`).
2. Group pages into hubs.
3. Draw the tree and decide the URLs.
4. Define internal linking rules (nav, hubs, contextual links, footer).
5. If restructuring, map every old URL to a new URL (301).

## Output format

```markdown
## Page tree
(tree diagram)

## URL map
| Page | URL | Primary keyword / intent | Parent hub | Status (keep / new / merge / redirect) |

## Navigation
(main menu, footer, breadcrumbs)

## Internal linking rules

## Redirect map (if URLs change)
| Old URL | New URL | Reason |
```

## Mistakes to avoid

- Creating hundreds of thin city pages (doorway pages)
- Splitting one intent across several pages (cannibalization)
- Deep pages that can only be reached through pagination or search
- Orphan pages that only exist in the sitemap

## Related skills

`keyword-research`, `service-pages`, `location-pages`, `internal-linking`, `site-migration`
