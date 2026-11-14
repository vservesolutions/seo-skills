---
name: "bing-check"
description: "Check whether a site appears in Bing's index, which matters because ChatGPT's search leans heavily on Bing. Use this whenever the user asks about Bing indexing, why ChatGPT can't find them, whether they're in Bing, or how to improve ChatGPT search visibility specifically. Point Claude at a domain — it probes Bing visibility, flags what it can and can't confirm, and points to Bing Webmaster Tools."
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared"
repo: "howseen-ai/howseen-geo-skills"
repo_url: "https://github.com/howseen-ai/howseen-geo-skills"
source: "https://github.com/howseen-ai/howseen-geo-skills/blob/HEAD/bing-check/SKILL.md"
raw_source: "https://raw.githubusercontent.com/howseen-ai/howseen-geo-skills/HEAD/bing-check/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-14"
---

<!-- Claude Code skill · howseen-ai/howseen-geo-skills · bing-check/SKILL.md · MIT
     Source: https://github.com/howseen-ai/howseen-geo-skills/blob/HEAD/bing-check/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# bing-check

ChatGPT search retrieves heavily from **Bing**, not Google. A site invisible in Bing is invisible to a large slice of ChatGPT's live answers — even if it ranks well on Google. This skill checks your Bing footprint.

## Steps

1. **Probe presence.** Use web search to look for the domain's pages as Bing would index them: search for the brand name, key pages, and a couple of exact-phrase snippets from the homepage. If the pages surface, Bing very likely has them; if nothing surfaces for a brand that clearly exists, that's a red flag worth chasing.
2. **Check the basics that gate Bing indexing:**
   - Is `Bingbot` allowed in robots.txt? (hand to `crawler-check`)
   - Is there a sitemap at `/sitemap.xml`?
   - Is the content server-rendered (Bing is weaker than Google at JS)?
3. **Report clearly what's confirmed vs inferred** (see honesty note).

## Be honest about the limit

You **cannot query Bing's index directly** from here. What you can do is use web search as a proxy and check the structural prerequisites. Say so explicitly: distinguish "your pages surface in search, so Bing likely has them" from "confirmed indexed." Never state a page is or isn't in Bing's index as fact.

**The definitive check is free and takes five minutes:** tell the user to verify their domain in **Bing Webmaster Tools** (bing.com/webmasters) — it shows exactly what Bing has indexed, lets them submit a sitemap, and request indexing. That's the ground truth; this skill is the fast first look.

## Output format

```
## Bing visibility — [domain]

Probe result: [pages surfaced / partial / nothing found]  (proxy signal, not index confirmation)
Bingbot allowed: [yes/no]
Sitemap present: [yes/no]
Rendering: [server-side ✅ / JS-dependent ⚠️]

→ Confirm the truth in Bing Webmaster Tools: https://www.bing.com/webmasters (free)
Top fix: [...]
```

---

*Built by Raphaël Aubry, founder of Howseen (https://howseen.ai). Being in Bing is a prerequisite, not proof of citation. Whether ChatGPT actually names you in its answers — and against which competitors — is what Howseen tracks. → https://howseen.ai*
