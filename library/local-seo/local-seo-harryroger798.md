---
name: "local-seo"
description: "Audit and improve Google Business Profile, NAP, reviews, citations, service pages, and local proof. Use for local service businesses, multi-location brands, and “near me” visibility."
category: "local-seo"
platforms: ["claude-code"]
platform_source: "detected"
repo: "harryroger798/seo-agent-kit"
repo_url: "https://github.com/harryroger798/seo-agent-kit"
source: "https://github.com/harryroger798/seo-agent-kit/blob/HEAD/skills/local-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/harryroger798/seo-agent-kit/HEAD/skills/local-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-12"
---

<!-- Claude Code skill · harryroger798/seo-agent-kit · skills/local-seo/SKILL.md · MIT
     Source: https://github.com/harryroger798/seo-agent-kit/blob/HEAD/skills/local-seo/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Local SEO

## When to use

Use when the business serves a city, region, or catchment area and depends on calls, directions, or visits.

## Inputs

| Variable | Required | What it is |
|---|---|---|
| `{{business}}` | yes | Legal name, category, address, phone |
| `{{gbp}}` | yes | GBP access or screenshots |
| `{{services}}` | yes | Real services and service areas |
| `{{reviews}}` | no | Review volume, rating, response rate |
| `{{proof}}` | yes | Photos, staff, vehicles, facilities |

## Process

1. Audit the GBP against the ten-point checklist.
2. Check NAP consistency across the core directories.
3. Check review velocity and response rate.
4. Map service pages to real services.
5. Map area pages to real areas, with proof.
6. Add LocalBusiness schema matching the GBP.
7. Set a weekly GBP post and review-request cadence.
8. Track calls, direction requests, and form fills.

## The 2026 weights

Whitespark’s 2026 survey: GBP signals ~32% of the local pack, on-page ~33% of local organic, reviews ~16–20%. Primary category ranks first, followed by proximity and title keywords. Treat these as prioritisation, not guarantees.

## Rules

- No keyword-stuffed business name.
- No fake reviews, review gating, or review swaps.
- No city-swapped doorway pages.
- No fake addresses or virtual offices.
- Every area page needs local proof.

## The India citation stack

After Google Business Profile is complete, claim and complete these in order:

1. **Justdial**
2. **Sulekha**
3. **IndiaMART** (if the business sells to businesses)
4. Google, Bing, Apple, Facebook, and the website
5. Industry and local directories with real editorial standards

Keep NAP identical everywhere. These directories are frequently cited by AI answers in India. Record every live URL.

## QA

- [ ] GBP complete and verified.
- [ ] Primary category correct.
- [ ] Services listed.
- [ ] 20+ real photos.
- [ ] Weekly post.
- [ ] Q&A seeded.
- [ ] NAP consistent.
- [ ] Core citations claimed.
- [ ] Review cadence.
- [ ] All reviews answered.
- [ ] Area pages have proof.
- [ ] LocalBusiness schema matches.

## References

- `checklists/local-seo.md`
- `playbooks/ai-search.md`
- `examples/04-cini-travels-local.md`
