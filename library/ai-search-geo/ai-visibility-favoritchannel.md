---
name: "ai-visibility"
description: "Maximize a website's visibility, citation rate and authority with AI search engines (ChatGPT, Claude, Perplexity, Gemini, Copilot) and autonomous AI agents (Operator, Computer Use, MCP clients). Implements the full Cloudflare Agent Readiness standard — llms.txt, llms-full.txt, MCP server card, agent-skills index, API catalog (RFC 9727), OAuth discovery stubs, auth.md, Markdown content negotiation, WebMCP, Content Signals in robots.txt, DNS-AID HTTPS records, DNSSEC — plus GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) content patterns. Use this skill whenever the…"
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "declared"
repo: "Favoritchannel/claude-code-skills"
repo_url: "https://github.com/Favoritchannel/claude-code-skills"
source: "https://github.com/Favoritchannel/claude-code-skills/blob/HEAD/skills/ai-visibility/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Favoritchannel/claude-code-skills/HEAD/skills/ai-visibility/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 0
collected: "2026-11-14"
---

<!-- Claude Code skill · Favoritchannel/claude-code-skills · skills/ai-visibility/SKILL.md · MIT
     Source: https://github.com/Favoritchannel/claude-code-skills/blob/HEAD/skills/ai-visibility/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI-Visibility Skill

End-to-end implementation of the Cloudflare Agent Readiness standard plus GEO/AEO content patterns. Designed for **Vercel** and **Cloudflare Pages/Workers** hosting in v1. Brings a typical lead-gen / local-business site from a Cloudflare AR score of ~20/100 (Level 1) to **80-95/100 (Level 4-5 "Agent-Native")** in one session, without touching internal API routes or admin surfaces.

This skill encodes the full methodology that took a production client site from **21 → 86** on `isitagentready.com` in one session. Reuse the templates, scripts and gotchas — don't re-derive them.

---

## When this skill matches

- "Make site X AI-ready / agent-ready / agent-friendly"
- "Boost AI visibility / GEO / AEO for X"
- "I want ChatGPT / Claude / Perplexity to recommend my business"
- "Run isitagentready.com on X and improve the score"
- "Add llms.txt / MCP server / agent skills to X"
- "Expose tools to AI agents through my website"
- "Why is my site invisible to AI search"
- Or just "AI скил" / "AI скилл" / "/ai-visibility"

If user mentions a domain to optimize OR pastes results from isitagentready.com — trigger.

---

## Workflow

### Step 0 — Confirm scope

In one sentence, summarize what you're about to do and ask if it matches: which domain, which hosting platform (auto-detect first, then confirm), are there any path/folder you must NOT touch (internal admin/api/dashboard layers).

For domains under active production traffic, also confirm: "I'll be making DNS and config changes. Some will need a re-deploy. OK to proceed live, or do you want a preview deploy first?"

### Step 1 — Audit baseline

Open `https://isitagentready.com/<bare-domain>` (no protocol prefix in path) via Playwright `browser_navigate`. Wait 12-18 seconds for the scan to complete. Then `browser_evaluate` to extract `document.body.innerText` starting from the substring `RESULTS FOR`. Record:

- Total score (0-100)
- Level (1-5)
- Per-category scores: Discoverability, Content, Bot Access Control, API/Auth/MCP/Skill Discovery
- For each failing check: the goal, the issue, the recommended fix (these are printed in the scan body)

Save baseline as `ai-visibility-baseline.json` in the project root for diff comparison after deploy. Close the browser tab.

### Step 2 — Diagnose stack

Read [references/platforms/vercel.md](references/platforms/vercel.md) or [references/platforms/cloudflare-pages.md](references/platforms/cloudflare-pages.md) depending on detection result:

- `vercel.json` at project root → Vercel
- `wrangler.toml` or `_headers` file → Cloudflare Pages/Workers
- Neither → tell user v1 covers Vercel and Cloudflare Pages only. Generate the static files (Tier 1) and hand over deploy instructions.

Also detect:
- Static HTML vs Astro vs Next.js vs other framework (affects where to inject WebMCP script)
- Existing `robots.txt`, `sitemap.xml`, `llms.txt`, `.well-known/*` — note what's there to avoid clobbering
- Internal layer paths to protect (typically `/api/*`, `/admin*`, `/guide*`, `/dashboard*`, `/scripts/*`)

### Step 3 — Tier 1: Zero-risk static files (+30-40 score)

Generate or copy templates into the project. All Tier 1 files are pure additions, never touch existing content.

| File | Template | Notes |
|---|---|---|
| `robots.txt` | [templates/robots.txt.template](templates/robots.txt.template) | If `robots.txt` already exists: merge — keep their existing `Disallow` paths, add our explicit AI bot blocks and `Content-Signal` directive |
| `llms.txt` | [templates/llms.txt.template](templates/llms.txt.template) | Use [references/geo-llms-txt-template.md](references/geo-llms-txt-template.md) for content rules. **Interview the user** for: business name, phone, address, hours, service area, services, pricing tiers, key FAQs. Do not invent facts. |
| `llms-full.txt` | generated by `scripts/build-per-page-markdown.mjs` | Concatenated content of every public page; whitelist-only |
| `/.well-known/mcp/server-card.json` | [templates/mcp-server-card.json.template](templates/mcp-server-card.json.template) | Declarative — `"transport": null` for sites without live MCP server |
| `/.well-known/agent-skills/index.json` | [templates/agent-skills-index.json.template](templates/agent-skills-index.json.template) | Run `scripts/compute-sha256.mjs` AFTER llms.txt and llms-full.txt are final, populate the `sha256` fields |
| `/.well-known/api-catalog` | [templates/api-catalog.template](templates/api-catalog.template) | linkset+json per RFC 9727. Needs Content-Type override (see Tier 2) |
| `/.well-known/oauth-authorization-server` | [templates/oauth-authorization-server.template](templates/oauth-authorization-server.template) | Stub with empty `authorization_servers` and `agent_auth` block. Safe — declares "no protected resources" |
| `/.well-known/oauth-protected-resource` | [templates/oauth-protected-resource.template](templates/oauth-protected-resource.template) | Stub with empty `authorization_servers` |
| `/auth.md` | [templates/auth.md.template](templates/auth.md.template) | **MUST have literal H1 `# Auth.md`** — scanner checks for it exactly |

### Step 4 — Tier 2: Platform config (+5-10 score)

Apply platform-specific patterns from [references/platforms/vercel.md](references/platforms/vercel.md) or [references/platforms/cloudflare-pages.md](references/platforms/cloudflare-pages.md):

- **Link headers on `/`** — declare 5 IANA-registered rel-types: `describedby` (llms.txt), `alternate` (llms-full.txt), `sitemap`, `service-meta` (mcp card), `service-desc` (skills index). The scanner only accepts registered rels.
- **X-Robots-Tag: `noindex, nofollow, noai, noimageai, nosnippet, noarchive`** on every internal path (`/api/*`, `/admin*`, `/guide*`, `/dashboard*`, `/scripts/*`). Server-side enforcement that doesn't depend on bot etiquette.
- **Content-Type overrides:** `.md` → `text/markdown; charset=utf-8`, `.well-known/api-catalog` → `application/linkset+json; charset=utf-8`, `.well-known/oauth-*` → `application/json; charset=utf-8`.
- **`Vary: Accept`** on every page that supports markdown negotiation — tells CDN to cache HTML and markdown separately.

### Step 5 — Tier 3: DNS-AID + DNSSEC (+1-2 score)

See [references/dns-recipes.md](references/dns-recipes.md) for exact API calls.

- **3 HTTPS RR records** at `_index._agents`, `_mcp._agents`, `_a2a._agents` with content `1 . alpn="h2"`. Works on Cloudflare DNS, IONOS DNS, Route 53. Some providers may reject the HTTPS record type — fall back to TXT records if rejected.
- **DNSSEC** activation: at the DNS provider (Cloudflare API: `PATCH /zones/{id}/dnssec status:active`). Returns a DS record that must be published at the **registrar** (a separate manual step unless registrar = DNS provider, e.g. Cloudflare Registrar).

⚠️ **STOP and confirm with user before any DNS write** on a new domain. DNS errors affect production traffic immediately.

### Step 6 — Tier 4: Markdown negotiation + WebMCP (+12-15 score)

This is the biggest single category win (closes Content 0/1 → 1/1).

**Markdown content negotiation:**
1. Run `scripts/build-per-page-markdown.mjs` to generate per-page `.md` files alongside `.html` files. Whitelist the public page paths (homepage, services/*, areas/*, guides/*, articles/* — never `/api/`, `/admin`, `/guide`, `/scripts/`).
2. Deploy Edge Middleware (Vercel: copy [templates/middleware.js.template](templates/middleware.js.template) to project root as `middleware.js`, install `@vercel/edge`; Cloudflare: deploy Worker from [templates/worker.js.template](templates/worker.js.template)).
3. Middleware checks `Accept: text/markdown` and rewrites to the `.md` variant; HTML stays default for browsers.

**WebMCP:**
Copy [templates/webmcp-tools.html.template](templates/webmcp-tools.html.template) into the homepage HTML just before `</body>`. Customize the 4-6 tools with business-specific info: `get_business_info`, `get_pricing`, `check_service_area`, `request_quote` as the minimum set.

### Step 7 — Secret leak sweep (MANDATORY before deploy)

Grep every new and changed file for these patterns (case-insensitive):

```
api[_-]?key, secret, password, \btoken\b,
sk-[A-Za-z0-9]{20,}, sk_(live|test)_[A-Za-z0-9]{16,}, ghp_[A-Za-z0-9]{20,},
SUPABASE_, RETELL_, TWILIO_, TELEGRAM_BOT_TOKEN, FORMSPREE_TOKEN, ANTHROPIC_,
process\.env\.[A-Z_]{3,}, \bAKIA[0-9A-Z]{16}\b, \bAIza[0-9A-Za-z_-]{35}\b
```

If ANY hit appears that isn't a known false positive (e.g. `FORMSPREE` in a CSP `form-action` directive), **STOP and surface to user**. Never deploy unaudited.

### Step 8 — Deploy

- **Vercel:** `vercel --prod --yes` (set `$env:NODE_OPTIONS = "--use-system-ca"` on Windows to fix npm SSL cert issues).
- **Cloudflare:** `wrangler pages deploy` or `wrangler deploy` depending on whether project is Pages or Workers.

If deploy fails with "function limit on Hobby plan" — surface to user, offer to consolidate functions or upgrade plan.

### Step 9 — Verify

Run [scripts/verify-deployment.sh](scripts/verify-deployment.sh) (or PowerShell equivalent on Windows). It does 8 checks:
1. `GET /` → 200, HTML
2. `GET /` with `Accept: text/markdown` → 200, `text/markdown`
3. `GET /robots.txt` → 200, contains `Content-Signal:` and at least 5 explicit AI User-agent blocks
4. `GET /llms.txt` → 200
5. `GET /llms-full.txt` → 200
6. `GET /.well-known/mcp/server-card.json` → 200, valid JSON
7. `GET /.well-known/agent-skills/index.json` → 200, valid JSON
8. `GET /api/health` (or any known internal endpoint) → still 200 with `X-Robots-Tag: noai...` (regression check)

After regression check, **`Clear-DnsClientCache`** on Windows to avoid stale DNS hitting old IPs.

### Step 10 — Re-scan and report

Re-open `isitagentready.com/<domain>` via Playwright, wait 15-18s, extract results. Print delta to user:

```
Score: 21 → 86 (+65, Level 1 → Level 5 Agent-Native)
Discoverability: 50% → 75%
Content:         0%  → 100%
Bot Access:      50% → 100%
Capabilities:    0%  → 86%
```

Surface remaining gaps with realistic ROI ("DS record at registrar = +1 point, manual UI step") and ask if user wants to keep pushing or stop here.

---

## Safety rails

These are non-negotiable across every run:

1. **Never read or modify `/api/*`, `/admin/*`, `/guide/*`, `/dashboard/*`** without explicit per-session user permission. Treat these as opaque internal layers. If a project's internal paths differ, ask user during Step 0.

2. **Whitelist-only content extraction.** `build-per-page-markdown.mjs` accepts an explicit list of HTML files. Never walk the filesystem recursively. Never include hidden directories, `.env*`, `.git/`, `node_modules/`.

3. **Mandatory secret sweep** before every deploy (Step 7). 14 patterns, no exceptions.

4. **DNS writes require user approval per domain.** DNS errors are visible to all traffic within seconds. Show the planned API calls before executing.

5. **IONOS auto-revert warning:** if registrar is IONOS and the CF zone has a `_domainconnect.<domain>` CNAME pointing to `_domainconnect.ionos.com`, **warn the user before activating Cloudflare DNSSEC** — IONOS Domain Connect can auto-revert NS at the registry level. See [references/gotchas.md](references/gotchas.md) for the full incident.

6. **Token handling:** API tokens (Cloudflare `cfat_*`, IONOS `{public}.{secret}`, Vercel, etc.) live in env vars only, **never written to any file**. Use `Remove-Item Env:VAR` after use in PowerShell.

7. **Never deploy with a failing regression check.** If `/api/health` returns 5xx or stops responding to internal layer requests, roll back before re-trying.

---

## Reference index

- [references/ar-criteria.md](references/ar-criteria.md) — every Cloudflare AR check explained: what the scanner sends, what it expects, scoring weight, recommended fix
- [references/geo-llms-txt-template.md](references/geo-llms-txt-template.md) — GEO-optimized llms.txt content rules and section-by-section guide for citation maximization
- [references/dns-recipes.md](references/dns-recipes.md) — Cloudflare and IONOS API recipes for DNS-AID HTTPS records and DNSSEC, including error handling
- [references/gotchas.md](references/gotchas.md) — incident-derived lessons: IONOS auto-revert, vercel.json `has`-rewrites unreliability, auth.md heading requirement, `cfat_*` token weirdness, Vercel Hobby function limit, Windows DNS cache
- [references/platforms/vercel.md](references/platforms/vercel.md) — vercel.json patterns, Edge Middleware setup, Vercel CLI deploy commands
- [references/platforms/cloudflare-pages.md](references/platforms/cloudflare-pages.md) — `_headers` syntax, Worker middleware, wrangler deploy

---

## Templates

All templates use `{{PLACEHOLDER}}` syntax. Substitute placeholders during the interview step (Step 3 for content, Step 4 for config). Common placeholders:

- `{{DOMAIN}}` — bare domain, e.g. `example.com`
- `{{ORIGIN}}` — full origin with scheme, e.g. `https://example.com`
- `{{BUSINESS_NAME}}`, `{{BUSINESS_PHONE}}`, `{{BUSINESS_ADDRESS_*}}`, `{{BUSINESS_HOURS_*}}`
- `{{SERVICE_AREA}}` — comma-separated list of cities/regions
- `{{INTERNAL_PATHS}}` — newline-separated list of `Disallow:` lines for internal layer
- `{{AI_BOTS}}` — block of 17 explicit User-agent groups (constant, just paste)
- `{{SHA256_*}}` — computed by `scripts/compute-sha256.mjs` after files are written

---

## What this skill does NOT do

- **Traditional SEO** (backlinks, Core Web Vitals tuning, keyword research, GMB optimization) — use a separate SEO skill. AI-visibility is additive to traditional SEO, not a replacement.
- **Schema.org JSON-LD generation** — assumes the site already has reasonable LocalBusiness/Organization markup. If absent, generate separately.
- **Content writing for marketing pages** — only writes content for `llms.txt`, `llms-full.txt`, `auth.md`. Marketing copy is out of scope.
- **Commerce protocols** (x402, ACP, UCP, MPP) — not needed for lead-gen sites. Optional extension for e-commerce. Out of v1 scope.
- **Netlify, generic Apache/Nginx** — v1 platforms are Vercel and Cloudflare Pages/Workers only.

---

## Expected outcome ranges

Based on the reference session (21 → 86) and AR scoring logic:

| Tier applied | Expected score | Level |
|---|---|---|
| Baseline (no AR work) | 10-25 | 1 (Basic Web Presence) |
| + Tier 1 (static files) | 45-55 | 2 (Bot-Aware) |
| + Tier 2 (config) | 55-65 | 2-3 |
| + Tier 3 (DNS) | 60-68 | 3 (Discoverable) |
| + Tier 4 (markdown + WebMCP) | 80-90 | 4-5 (Agent-Native) |
| + DS at registrar (manual) | 85-95 | 5 |

If after Tier 4 score is below 75, there's likely a deploy/cache problem or a scoring rubric change. Re-check with curl manually and surface the gap before iterating.
