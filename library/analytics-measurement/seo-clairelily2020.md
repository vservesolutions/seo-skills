---
name: "seo"
description: "Plan B2B SEO keyword clusters by buyer intent, audit on-page and technical SEO (titles, headings, internal links, schema, Core Web Vitals, indexing), and decide what to create, refresh or consolidate from Search Console data. Use for keyword research, content planning, on-page optimization, technical SEO audits, internal linking, or diagnosing ranking and traffic drops."
category: "analytics-measurement"
platforms: ["unspecified"]
platform_source: "none"
repo: "clairelily2020/b2b-growth-kit"
repo_url: "https://github.com/clairelily2020/b2b-growth-kit"
source: "https://github.com/clairelily2020/b2b-growth-kit/blob/HEAD/skills/seo/SKILL.md"
raw_source: "https://raw.githubusercontent.com/clairelily2020/b2b-growth-kit/HEAD/skills/seo/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Unspecified skill · clairelily2020/b2b-growth-kit · skills/seo/SKILL.md · MIT
     Source: https://github.com/clairelily2020/b2b-growth-kit/blob/HEAD/skills/seo/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO

Classic search still drives most B2B research traffic. This skill picks winnable keywords by intent, makes pages technically sound, and uses real search data to decide what to do next.

## When to use

- Choosing topics or building keyword clusters.
- Optimizing a page before launch, or auditing a site section.
- A page lost rankings or clicks.
- For AI-assistant visibility use [geo-citation-scout](../geo-citation-scout/SKILL.md); for link building use [link-acquisition](../link-acquisition/SKILL.md).

## Inputs

- Profile: `icp`, `positioning`, `competitors`, `offer`, `measurement`.
- Data if available: Search Console export, a keyword tool export, crawl results, Core Web Vitals. Without tools, use autocomplete, "People also ask", competitor sitemaps and forum threads as directional signals and say so.

## Process

1. **Cluster by intent, not by word.** Group keywords into problem, solution, comparison or alternative, and product-specific clusters. One page targets one cluster.
2. **Score winnability.** Business relevance to the ICP first, then intent, then difficulty relative to your site's authority. Skip head terms held by much stronger domains; long-tail with clear intent wins early.
3. **Study the current top results** for each target: content type, depth, structure and freshness. Your page must be better on what the searcher needs, not longer.
4. **On-page checklist:** one H1 matching the intent; title under about 60 characters with the main term early; meta description under about 155 characters that earns the click; question-style H2s where they match real queries; descriptive alt text; at least three relevant internal links in and out; schema that matches visible content.
5. **Technical checklist:** indexable and in the sitemap; canonical tags correct; parameter URLs (UTM, filters) not indexed; clean lowercase hyphenated slugs; LCP under 2.5 s, INP under 200 ms, CLS under 0.1 on mobile; no orphan pages.
6. **Use Search Console to decide.** Pages ranking 5-20 with high impressions: refresh. Several pages competing for one query: consolidate. Pages with zero impressions after 3 months: improve, merge or remove.
7. **Re-check after 4-6 weeks**, not daily; rankings move slowly.

## Output

```markdown
## Keyword clusters
| Cluster | Intent | Example queries | Target page (new or existing) | Priority | Reason |
## Page plan or audit findings
| Page | Issue | Fix | Impact | Effort |
## Technical issues (with affected URLs)
## Measurement plan (what to check, when)
```

## Gates

- Volume and difficulty numbers name their tool and date; estimates are labelled as estimates ([evidence-and-claims](../b2b-growth-kit/policies/evidence-and-claims.md)).
- No keyword stuffing, doorway pages or auto-generated thin pages.
- Changes to live pages and redirects follow [approval-gates](../b2b-growth-kit/policies/approval-gates.md).

## References

- Writing the page: [article-writer](../article-writer/SKILL.md), [answer-engine-content](../answer-engine-content/SKILL.md)
- Many similar pages from data: [programmatic-pages](../programmatic-pages/SKILL.md)
