---
name: "clickd-ai-visibility"
description: "Audits and fixes a website's visibility in AI search engines and assistants (GEO and AEO for ChatGPT, Claude, Perplexity and Google AI Overviews) by opening AI crawler access, ensuring non-JS HTML readability, structuring answer-first passages, aligning entity schema and tracking real assistant citations with clickd. Use when asked about GEO, AEO, AI search optimization, ChatGPT or Perplexity visibility, or AI crawler access."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "subinternal/clickd"
repo_url: "https://github.com/subinternal/clickd"
source: "https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-ai-visibility/SKILL.md"
raw_source: "https://raw.githubusercontent.com/subinternal/clickd/HEAD/skills/clickd-ai-visibility/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Unspecified skill · subinternal/clickd · skills/clickd-ai-visibility/SKILL.md · MIT
     Source: https://github.com/subinternal/clickd/blob/HEAD/skills/clickd-ai-visibility/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

<!-- subinternal:header -->
```
╭──────────────────────────────────────────────────────────────────────╮
│        ▄                                                             │
│      ▄ █    clickd                                                   │
│    ▄ █ █    ai visibility (geo & aeo)                                │
│  ▄ █ █ █                                                             │
│                                                                      │
│  skill 2.3.0  ·  by subinternal  ·  clickd.com/skills/ai-visibility  │
╰──────────────────────────────────────────────────────────────────────╯
```

Print this header once, exactly as it is, in a code block, as the first thing you show when this skill starts. Then go on.
<!-- /subinternal:header -->

# AI visibility (GEO & AEO)

Make a website easy for AI search engines and assistants (ChatGPT Search, Claude, Perplexity and Google AI Overviews) to crawl, parse without JavaScript, verify as a clear entity, and quote when buyers ask questions in its market.

What this does not do: no honest tool can guarantee an AI assistant will cite a site on a given prompt, because assistant answers draw on web search rankings, third-party mentions and live retrieval together. This skill fixes everything on the site itself that blocks or weakens AI retrieval and measures live citations with clickd.

Connect to `https://clickd.com/mcp/all` to use `clickd_cite` and `clickd_tells` alongside `clickd_citations`, `clickd_site`, `clickd_brief`, `clickd_check`, `clickd_schema_create`, `clickd_rescan` and `clickd_changes` (also at `https://clickd.com/mcp`). With no key or MCP setup, check AI crawler access at `https://clickd.com/ai-crawler-checker?url=example.com` and non-JS readability at `https://clickd.com/tools/agent-view.json?url=https://example.com`.

## 1. Check live AI citations, crawler access and non-JS readability

See how AI assistants and non-JavaScript crawlers see the site right now.

- Call `clickd_citations({ site })` (and `clickd_cite({ site })` on `https://clickd.com/mcp/all` when asking fresh buyer questions) to see which prompts in the site's market already cite the site and which cite rivals instead.
- Call `clickd_site({ site, view: "agent" })` and `clickd_check({ url, kind: "agent" })` (or fetch `https://clickd.com/tools/agent-view.json?url=https://example.com`) to inspect the exact Markdown/text an assistant extracts from the raw HTML without executing JavaScript.
- Check `https://clickd.com/ai-crawler-checker?url=example.com` or `clickd_brief({ site })` to see whether `robots.txt` or edge bot rules block `OAI-SearchBot`, `GPTBot`, `ClaudeBot`, `Claude-SearchBot`, `PerplexityBot`, `Google-Extended` or `Applebot-Extended`.

Verify: record the current AI citation rate from `clickd_citations`, any blocked AI user-agents in `robots.txt`, and any key pages whose body text is missing from `clickd_check({ url, kind: "agent" })`.

## 2. Unblock AI search crawlers and serve complete HTML

Let retrieval bots fetch the site and ensure the primary content is in the first HTML response.

- In `robots.txt`, explicitly allow search and retrieval crawlers (`OAI-SearchBot`, `GPTBot`, `ClaudeBot`, `Claude-SearchBot`, `PerplexityBot`) on public paths. If the owner wants to opt out of model training while staying in AI search answers, keep search bots (`OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot`) allowed and document the trade-off clearly.
- Fix any template where pricing, product specs, FAQs or core copy only appear after client-side JavaScript runs, since most AI retrieval fetches raw HTML with no browser engine.
- Add or update `/llms.txt` (and optional `.md` twins for documentation pages) so agents have a clean, single-request map of the business's facts and canonical URLs.

Verify: `curl -sL` and `clickd_check({ url, kind: "agent" })` show all headings, pricing, specs and answers in raw HTML, and `/robots.txt` lets AI search crawlers in.

## 3. Structure pages for passage retrieval and entity clarity

Write and mark up key pages so an assistant retrieving a 200-word passage gets a self-contained, quotable answer tied to an unambiguous entity.

- Turn vague section headings on service, product and guide pages into the concrete questions buyers ask an assistant, and answer each question in the first 40 to 60 words with specific numbers, scope and constraints.
- Strip stock AI phrasing with `clickd_tells({ url })` (on `https://clickd.com/mcp/all`) and add visible `dateModified` dates, author or organization attribution, and primary source links for factual claims.
- Wire `Organization` (or `LocalBusiness`), `Product` or `Service` JSON-LD with `clickd_schema_create`, including `sameAs` links to the business's official external profiles so assistants connect the domain to third-party mentions.

Verify: key landing and guide pages pass `clickd_tells`, include valid entity JSON-LD with `sameAs`, and open each question section with a self-contained answer paragraph.

## 4. Rescan and track citation changes with clickd

Deploy the updates, verify the technical and content rules on the live site, and monitor assistant citations.

- Call `clickd_rescan({ site, reason: "improved AI crawler access, non-JS HTML and answer-first passages" })` and poll `clickd_changes({ site, job })` until done.
- Re-check `clickd_citations({ site })` and log the completed GEO/AEO fixes with `clickd_log_work`. Highlight any third-party directories or comparison pages where rivals are cited so the owner knows which off-site mentions to pursue next.

Verify: `clickd_changes({ site, job })` confirms AI crawler, agent-view, schema and passage rules pass on the live site.

## Report back

```
Site: <domain>
AI crawlers allowed in robots.txt: <OAI-SearchBot, GPTBot, ClaudeBot, PerplexityBot>
Non-JS HTML readability (clickd_check agent): <passing across key templates>
Entity & answer-first updates: <pages and schema @type updated>
Live assistant citations (clickd_citations): <cited on n of m market questions; top rival sources noted>
```

## Sources

- [AI Features and Your Website](https://developers.google.com/search/docs/appearance/ai-features): how Google's AI Overviews and AI Mode use web search indexing, structured data and crawlable HTML.
- [Optimizing Your Website for Generative AI Features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide): Google's guidance on clear headings, visible facts, structured data and crawler access for generative AI search.
- [Google Crawler and Fetcher Overview](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers): how `Googlebot` and `Google-Extended` tokens work in `robots.txt`.
- [The /llms.txt file, v2](https://llmstxt.org): the `/llms.txt` outline format for giving AI assistants and agents a concise map of a site.
