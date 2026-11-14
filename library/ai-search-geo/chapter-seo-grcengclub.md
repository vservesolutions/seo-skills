---
name: "chapter-seo"
description: "SEO and AEO agent for GRC Engineering Club chapter and member sites. Technical SEO audits, answer-engine readiness reviews, and content plans, run entirely from the codebase."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "GRCEngClub/seo-skills"
repo_url: "https://github.com/GRCEngClub/seo-skills"
source: "https://github.com/GRCEngClub/seo-skills/blob/HEAD/claude/skills/chapter-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/GRCEngClub/seo-skills/HEAD/claude/skills/chapter-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · GRCEngClub/seo-skills · claude/skills/chapter-seo/SKILL.md · MIT
     Source: https://github.com/GRCEngClub/seo-skills/blob/HEAD/claude/skills/chapter-seo/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# /chapter-seo

SEO and AEO agent for a GRC Engineering Club chapter site or a member's own site. Every
subcommand works from the codebase alone. No analytics, no API keys, nothing to configure.

Parse `$ARGUMENTS` to route:

- starts with `audit` -> **Audit** flow
- starts with `aeo` -> **AEO** flow
- starts with `plan` -> **Plan** flow
- otherwise, show:

```
/chapter-seo audit   Technical SEO audit of the codebase
/chapter-seo aeo     Answer Engine Optimization readiness review
/chapter-seo plan    Content plan and gap analysis
```

## First: detect the stack

Do not assume a framework. Read the repo before auditing anything.

| If you find | The metadata layer is |
| --- | --- |
| `app/**/page.tsx` | Next.js App Router: `export const metadata` / `generateMetadata` |
| `pages/**/*.tsx` with `next/head` | Next.js Pages Router: `<Head>` |
| `src/App.tsx` with `react-router` | React SPA: whatever `<SEO>`-style component the project uses |
| `astro.config.*` | Astro: frontmatter plus a layout head |
| `_config.yml` / `.eleventy.js` | Jekyll or Eleventy: layout templates and front matter |

Name the stack you detected in the first line of your output. If the repo mixes patterns, say so;
that is itself a finding.

Everything below is written framework-neutral. Translate the check to the stack you found.

---

## House rules

These apply to every flow, and to any edit you make.

**One entity, two properties.** A chapter site's value over a standalone microsite comes from
being legible as part of the club. The Organization schema must carry:

```json
"parentOrganization": { "@type": "Organization", "name": "GRC Engineering Club", "url": "https://grcengclub.com" }
```

plus a `sameAs` array pointing at the club's real profiles, and the chapter's page on
`grcengclub.com/chapters/<slug>`.

**Do not compete with the parent.** The chapter site owns **local** intent: "GRC meetup
<city>", local employers, event recaps, local job market. The club owns **topic** intent: "what
is GRC engineering", salary, certifications, the Academy. Two pages targeting one query means
both rank worse. Link to the club rather than restating it.

**Duplicate-entity check.** `grcengclub.com/chapters/<slug>` already emits an Organization
schema for the same chapter. Decide which URL is the canonical home for that entity and make
the other one point at it. Do not leave both claiming primacy.

**Schema must be true.** A schema asserting something the page does not render, an `Event` with
no date, a `FAQPage` whose questions are not visible, risks a manual action. That is worse than
no schema.

**Copy conventions.** No em dashes. CPE credits are a byproduct in all copy, never the pitch;
self-report framing only, never claim accredited-provider status.

---

## Audit flow (`/chapter-seo audit`)

Run every check. If one does not apply, say so explicitly rather than skipping silently.

**1. Route inventory.** Enumerate every public route. This is the source of truth for the rest
of the audit. Exclude API routes and anything behind auth.

**2. Per-page metadata.** For each route verify: title present, unique, under 60 chars;
description present, unique, 140-160 chars; canonical set and matching the route; Open Graph
with title, description, url, siteName, type, and an image with explicit dimensions; Twitter
card. Duplicate titles or descriptions are CRITICAL, not a warning: Google collapses them and
one page stops ranking. On Next.js App Router, also verify `metadataBase` is set in the root
layout, or every OG image and canonical resolves relative and crawlers drop them.

**3. Sitemap.** Prefer a generated sitemap over a hand-maintained static file. Compare the
generated URL set against the route inventory and report missing and stale entries separately.
Verify sitemap URLs match the canonical form exactly, including protocol, host, and
trailing-slash convention.

**4. robots.** Verify `Allow: /`, admin and preview routes disallowed, absolute sitemap URL, and
that AI crawlers are explicitly allowed: GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot,
Claude-Web, Google-Extended, CCBot, cohere-ai. Missing AI-crawler rules is a WARNING.

**5. Structured data.** Match on page type, not a hardcoded URL list.

| Page type | Required |
| --- | --- |
| Home | Organization (with `parentOrganization`) + WebSite |
| Events index | Organization + one `Event` per **upcoming** session only |
| Single event | `Event` with `startDate`, `location`, `organizer`, `eventAttendanceMode` |
| Leadership | `Person` array |
| Any Q&A accordion | `FAQPage` |
| Long-form guide | `Article` (+ `FAQPage` if it has a Q&A block) |
| Everything else | Organization at minimum |

Verify each schema against what the page actually renders. Flag any `Event` with a past
`startDate`; stale event schema is a common cause of losing rich results sitewide.

**6. Internal links.** Extract every internal path and cross-reference against the route
inventory. Check nav and footer separately: a broken link there is on every page.

**7. Images.** Flag missing `alt` (decorative images need `alt=""`, not a missing attribute).
On Next.js, flag raw `<img>` where `next/image` applies, and any `<Image>` missing
`width`/`height` or `fill`.

**8. Headings.** Exactly one `<h1>` per page, no skipped levels. Report the actual sequence
found for any page that fails.

**9. Content depth.** Flag indexable pages under roughly 150 words of visible body copy. Say
whether you recommend adding content or `noindex`.

**10. Duplication and cannibalization.** Near-duplicate titles, descriptions, and H1s. Then
separately: any page whose topic duplicates something `grcengclub.com` already owns.

### Output

Group by severity, each finding with file, line, problem in one sentence, and the specific fix.

- **CRITICAL** — missing or duplicate title/description, broken or missing canonical, route
  missing from sitemap, false schema claims
- **WARNING** — missing JSON-LD, broken heading hierarchy, missing alt text, no AI-crawler
  rules, unoptimized images
- **INFO** — content depth, additional schema, internal linking
- **PASS** — one line each

End with counts and the single highest-impact fix. Anything you could not verify goes under a
final "Not checked" heading with the reason. Never report a finding you did not confirm by
reading the file.

---

## AEO flow (`/chapter-seo aeo`)

Search engines rank pages. Answer engines lift sentences. A page can rank fine and never get
cited because its answer is buried in prose.

**Step 1: Infrastructure.**

| Item | Requirement |
| --- | --- |
| AI crawler rules | The eight agents listed above, explicitly allowed |
| `llms.txt` | Exists; short markdown map of the site with one-line descriptions |
| Sitemap coverage | Every content page present |
| Organization schema | `parentOrganization` and a populated `sameAs` |
| Server rendering | Main content is in the server-rendered HTML |

That last row is the one people miss. Most AI crawlers do not execute JavaScript, so anything
that appears only after hydration is invisible to them. Flag pages whose main copy lives inside
a client component; the fix is to render copy on the server and scope client components to
interactivity.

**Step 2: Target queries.** For a chapter site, adapt these to the city and add local ones:

1. Is there a GRC meetup in <city>?
2. GRC Engineering Club <city> chapter
3. How do I join the GRC Engineering Club in <city>?
4. Where do GRC professionals in <city> network?
5. Cybersecurity and compliance meetups in <city>
6. When does the <city> GRC chapter meet?

Map each to the page that should own it. A query with no owning page is a content gap.

**Step 3: Readiness scoring.** Score each owning page 0-10:

| Category | Points | Check |
| --- | --- | --- |
| Direct answer | 0-2 | First paragraph answers the question in plain prose, no "welcome to" preamble |
| Extractable facts | 0-2 | Cadence, venue, cost, audience, how to join in tables or definition lists |
| FAQ schema | 0-2 | `FAQPage` JSON-LD whose questions are also visible on the page |
| Structured data | 0-2 | Correct schema for the page type, complete and accurate |
| Authority signals | 0-2 | Internal links in, link out to the club, named people, specific local detail |

Show the per-category breakdown, not just the total. The breakdown is what makes the fix obvious.

**Step 4: Do not attempt to measure citations.** Do not use WebFetch to check whether AI engines
cite the site. This was verified as non-viable: Perplexity returns 403 to automated fetches, and
most AI search UIs return a client-rendered shell with no answer content. A citation table built
from those responses would be fabricated, which is worse than reporting nothing.

The two honest options, and say which you are giving:

1. **Manual spot-check.** A human runs the target queries in each engine and pastes results back.
2. **Referral traffic**, once analytics exist. Sessions from `chatgpt.com`, `perplexity.ai`,
   `claude.ai`, `gemini.google.com`, `copilot.microsoft.com`, and `you.com` are direct evidence
   that an engine cited a page and a human clicked. Report trend and per-engine mix, never an
   extrapolation from a few dozen sessions.

State in the report that citation coverage was not directly measured, and why.

### Output

Executive summary (is this site extractable today, and what is blocking it), infrastructure
status with fixes, query ownership or GAP, readiness scores with breakdowns, then
recommendations in three buckets: content, technical, authority. Content fixes almost always
outrank technical ones. A page with perfect schema and a vague opening paragraph still does not
get cited.

---

## Plan flow (`/chapter-seo plan`)

**Step 1: Inventory.** For each page record route, the query it appears written for, approximate
word count, and whether it is local-intent or topic-intent. Flag every topic-intent page: those
compete with `grcengclub.com`. The fix is to cut them to a summary and link to the club version,
not to rewrite them better.

**Step 2: Gaps.** Which of these has no page: a recurring events page with structured `Event`
data; individual meetup pages with real recaps; who the chapter is for in concrete local terms;
how to join and what it costs; leadership with names, roles, and LinkedIn; local GRC job market
if the chapter has real signal on it.

Then compare formats against other technical communities in the city (local OWASP, ISACA, ISSA,
BSides, cloud user groups). Copy the formats that give a community site recurring reasons to
publish, not their topics.

**Step 3: Prioritize** by likely local search demand times ease of shipping. For a chapter site
ease usually wins: an events page with correct `Event` schema shipped this week beats a perfect
long-form guide shipped in a month.

### Output

Coverage summary split local versus topic. Cannibalization risk with the specific cut and the
club URL to link to instead. Content gaps, each with suggested title and URL, target query, why
this chapter can answer it better than the club can, outline, internal linking, and effort.
Then a numbered action list, leading with what ships fastest.

Keep the plan to what a volunteer chapter lead can maintain. A ten-page content calendar that
goes stale in six weeks is worse for the site than three pages kept current.
