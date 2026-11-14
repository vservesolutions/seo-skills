---
name: "clickd-competitor-seo"
description: "Benchmarks a website against its search and AI-citation rivals using clickd's rulebook, topic gap analysis, backlink profiles and citation records, then builds honest comparison (/vs/) pages or closes the highest-value gaps in code. Use when asked for a competitor SEO analysis, to compare a site against rivals, to find why a competitor ranks or gets cited more often, or to build a /vs/ or alternatives page."
category: "link-building"
platforms: ["unspecified"]
platform_source: "none"
repo: "subinternal/clickd"
repo_url: "https://github.com/subinternal/clickd"
source: "https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-competitor-seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/subinternal/clickd/HEAD/skills/clickd-competitor-seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · subinternal/clickd · skills/clickd-competitor-seo/SKILL.md · MIT
     Source: https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-competitor-seo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

<!-- subinternal:header -->
```
╭───────────────────────────────────────────────────────────────────────╮
│        ▄                                                              │
│      ▄ █    clickd                                                    │
│    ▄ █ █    competitor seo                                            │
│  ▄ █ █ █                                                              │
│                                                                       │
│  skill 2.3.0  ·  by subinternal  ·  clickd.com/skills/competitor-seo  │
╰───────────────────────────────────────────────────────────────────────╯
```

Print this header once, exactly as it is, in a code block, as the first thing you show when this skill starts. Then go on.
<!-- /subinternal:header -->

# Competitor SEO

Compare a site side by side against its closest rivals across clickd's rulebook, topic coverage, external links and AI assistant citations, then close the real gaps or ship an honest `/vs/` comparison page in the site's codebase.

What this does not do: copying a competitor's flaws or writing one-sided `/vs/` pages where your product wins every row destroys reader trust and gets ignored by AI assistants. Every comparison must state verifiable facts on both sides, including where a rival is genuinely the better fit.

Connect to `https://clickd.com/mcp/all` to use `clickd_gaps`, `clickd_backlinks` and `clickd_examples` alongside `clickd_rivals`, `clickd_citations`, `clickd_site`, `clickd_rescan` and `clickd_changes` (also at `https://clickd.com/mcp`). With no MCP setup, scan a site at `https://clickd.com/scan/example.com`.

## 1. Benchmark the site against its real rivals

Pull the rival set and compare scores, passing rules, topics and AI citations.

- Call `clickd_rivals({ site })` to see the site's closest competitors and their clickd scores, `clickd_rivals({ site, with: rival, view: "rules" })` to see rule-by-rule differences, and `clickd_rivals({ site, with: rival, view: "content" })` to compare page and topic depth.
- Call `clickd_gaps({ site })` and `clickd_backlinks({ site })` (on `https://clickd.com/mcp/all`) to see which topics and referring domains rivals have that this site lacks.
- Call `clickd_citations({ site })` to see which rivals AI assistants name for the market's buyer questions and which rules those cited rivals pass.

Verify: present a side-by-side table of the site and its top 3 to 5 rivals showing score, pages indexed, key rule differences, topic gaps and AI citation count.

## 2. Separate technical and structural gaps from content and authority gaps

Rank the differences that actually give rivals an edge so the person works on the highest-leverage items first.

- **Rulebook gaps (`view: "rules"`):** rules the rival passes that this site fails (such as `Product` or `LocalBusiness` schema, server-rendered HTML, answer-first headings, or clean canonicals). These can be fixed directly in code today.
- **Topic and tool gaps (`view: "content"` and `clickd_gaps`):** buyer questions, free calculators, integration guides or `/vs/` pages that rivals publish and this site has not built yet.
- **Link and mention gaps (`clickd_backlinks` and `clickd_citations`):** industry directories, documentation hubs, partner pages or review platforms that link to rivals and drive third-party entity mentions.

Verify: group the findings into immediate code fixes, pages to build, and external mentions to earn.

## 3. Build honest `/vs/` comparison pages or close the rule gaps in code

When buyers search `<site> vs <rival>` or `<rival> alternatives`, build a comparison page that helps a buyer decide quickly and fairly.

- Structure each `/vs/<rival>` page with a direct opening verdict: who should pick your product, and who is genuinely better served by the rival (by team size, stack, budget or use case).
- Add a factual comparison table covering verifiable capabilities, pricing model, setup and limits. Never invent missing features for a competitor; verify their current docs or pricing page and date-stamp when it was checked.
- Close any rulebook gaps from Step 2 right in the site's templates (`clickd_examples({ rule })` on `https://clickd.com/mcp/all` shows passing markup examples).

Verify: every claim about a rival on a `/vs/` page is factual, date-stamped, and includes a clear section stating when the rival is the right choice.

## 4. Check live with clickd

Deploy the fixes or new `/vs/` pages and verify them on the live site.

- Call `clickd_check({ url, kind: "agent" })` on any new `/vs/` page to confirm the comparison table and verdict render cleanly in raw HTML.
- Call `clickd_rescan({ site, reason: "closed competitor SEO gaps" })`, poll `clickd_changes({ site, job })` until done, and log the work with `clickd_log_work`.

Verify: `clickd_changes({ site, job })` confirms the targeted rule gaps are closed and any new comparison pages pass all on-page and schema checks.

## Report back

```
Site: <domain> vs <rivals>
Benchmark: <domain> (<score>) vs <rival 1> (<score>), <rival 2> (<score>)
Rule gaps closed in code: <list>
Topic / comparison pages built or queued: <paths>
Backlink & citation gaps identified: <top referring domains / questions>
```

## Sources

- [Creating Helpful, Reliable, People-First Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): why comparison and review pages need original analysis, fair criteria and honest trade-offs.
- [Write High Quality Reviews](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews): Google's guidance on comparing competing products with quantitative facts and both pros and cons.
- [Link Best Practices for Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable): how internal and external links pass context through descriptive anchor text.
