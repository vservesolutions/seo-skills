---
name: "backlink-kit"
description: "Manual-only backlink footer and directory submission workflow for any web product repo. Use only when the user explicitly invokes `backlink-kit` or `$backlink-kit`; do not use implicitly for generic SEO, backlink, footer, directory, or submission tasks."
category: "link-building"
platforms: ["codex"]
platform_source: "detected"
repo: "Leonewu/backlink-kit"
repo_url: "https://github.com/Leonewu/backlink-kit"
source: "https://github.com/Leonewu/backlink-kit/blob/HEAD/backlink-kit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Leonewu/backlink-kit/HEAD/backlink-kit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Codex skill · Leonewu/backlink-kit · backlink-kit/SKILL.md · MIT
     Source: https://github.com/Leonewu/backlink-kit/blob/HEAD/backlink-kit/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Backlink Kit

## Purpose

Use this skill from inside a web product project to:

- infer product submission facts from the repo;
- merge and maintain a footer backlink carousel without losing existing external badges;
- generate directory submission Markdown and a local copy-friendly HTML page;
- update directory hrefs after submissions are approved.

This is manual-only. If the user did not explicitly say `backlink-kit` or `$backlink-kit`, do not use this skill.
If the user only asks for submission materials, listing URLs, or backlink research, do not create new visible site UI.

## Product Discovery

Run from the project root when possible.

1. Read repo instructions first (`AGENTS.md`, `CLAUDE.md`, or equivalent).
2. Infer product facts from existing source before asking:
   - product name: SEO constants, metadata helpers, app config, landing page H1, package name, README;
   - canonical URL/domain: SEO constants, sitemap/robots, env examples, deployment config, README;
   - tagline/short copy: landing page hero, metadata descriptions, README;
   - logo/screenshot: favicon, app icon, OG image, landing image;
   - support email: SEO constants, footer, contact page, env examples;
   - key features: landing page sections, pricing/features pages, README.
3. If product name or website URL cannot be confidently inferred, ask the user before generating materials or directory URLs.
4. For generated copy, always include a long description with a `Key features include:` section and bullet list.

## Existing Backlink Merge Rules

Do not overwrite or drop existing footer links.

Before editing, search the repo for current backlink/footer data:

```bash
rg -n "Featured on|Listed on|footerBacklinks|backlink|badge|turbo0|findly|showmebest|newtool|startupfa|toolfame|openhunts|agenthunter|acidtools|productwing|fazier|unitelist|producthunt|uneed|peerlist|peerpush|launchigniter|twelve\.tools|wired\.business" .
```

Then:

1. Preserve all existing external badges and custom links unless the user explicitly asks to remove them.
2. Dedupe by directory identity, not by exact URL. For example `turbo0.com/` and `turbo0.com/item/product-slug` are the same directory entry.
3. If a known directory entry already exists, update only the `href`/target when needed; preserve a working badge URL, label, and custom styling.
4. If the project already has unrelated partner/outbound badges, keep them in the same managed list or a clearly named extra list.
5. Never replace a user-supplied approved listing URL with a guessed one.
6. Verify any new dark badge URL returns an actual image. If it returns HTML, 404, or a broken image, use the known original badge or a text fallback.
7. If no existing footer, backlink strip, featured-on section, or partner badge area exists, ask before creating a new visible footer carousel. A new carousel changes public UI and needs explicit approval.

## Footer Implementation Rules

Adapt to the project's framework and design system. Do not assume Next.js or a particular router.

Before creating a new visible footer carousel, summarize the proposed placement and ask for approval unless the user explicitly requested that new carousel. If an existing footer/backlink area exists, merge or update in place.

Recommended behavior:

- Show the backlink footer on public marketing/content pages.
- Hide it from app/workbench/auth/admin pages unless the project already exposes a global footer there.
- Render the list twice for infinite marquee: first group accessible, duplicate group `aria-hidden="true"`.
- Set duplicate links `tabIndex={-1}`.
- Use `target="_blank"` and `rel="noopener noreferrer"` for third-party directory links.
- Default badges to muted/gray in dark themes; on hover/focus of the strip, restore true badge color.
- Pause animation on hover/focus.
- Respect `prefers-reduced-motion` with a static scrollable list.
- Keep stable dimensions so slow remote badges cannot collapse the marquee.

Example data shape:

```ts
export type FooterBacklink = {
  name: string;
  label: string;
  href: string;
  badgeSrc?: string;
  kind?: "badge" | "text";
};
```

Example image attributes:

```tsx
<img src={badgeSrc} alt={label} loading="eager" decoding="async" fetchPriority="low" />
```

## Directory URL Rules

Generate these as candidate URLs from product name and website domain, but warn the user to verify them after submission. Some directories create opaque IDs that cannot be inferred.

Definitions:

- `productSlug`: lowercase product name in kebab-case, for example `Better Dating Photos` -> `better-dating-photos`.
- `domain`: canonical host without protocol or `www`, for example `betterdatingphotos.com`.
- `domainStem`: domain without TLD and dots, for example `betterdatingphotos.com` -> `betterdatingphotos`.
- `productHuntPostId`, `peerlistHandle`, `peerlistProjectId`, and `launchRank`: platform-assigned values that cannot be inferred safely. Reuse them only when found in an existing approved link or platform-provided embed snippet.

| Directory | Candidate target rule | Badge | Notes |
| --- | --- | --- | --- |
| Turbo0 | `https://turbo0.com/item/{productSlug}` | `https://img.turbo0.com/badge-listed-dark.svg` | Product page, not homepage |
| Findly.tools | `https://findly.tools/{productSlug}?utm_source={productSlug}` | `https://findly.tools/badges/findly-tools-badge-dark.svg` | Product page |
| yo.directory | `https://yo.directory/` | `https://cdn.prod.website-files.com/65c1546fa73ea974db789e3d/65e1e171f89ebfa7bd0129ac_yodirectory-featured.png` | Use homepage until listing URL is known |
| ShowMeBestAI | `https://showmebest.ai` | `https://showmebest.ai/badge/feature-badge-dark.webp` | No trailing slash |
| NewTool.site | `https://newtool.site/item/{productSlug}` | `https://newtool.site/badges/newtool-dark.svg` | Product page |
| Startup Fame | `https://startupfa.me/s/{domain}?utm_source={domain}` | `https://startupfa.me/badges/featured/dark.webp` | May require opaque suffix such as `-546`; verify approved URL |
| Dang.ai | `https://dang.ai/` | `https://assets.dang.ai/badges/dang-verified-dark.png` | Use homepage until listing URL is known |
| Submit AI Tools | `https://submitaitools.org/` | `https://submitaitools.org/static_submitaitools/images/submitaitools.png` | Use homepage until listing URL is known |
| ToolFame | `https://toolfame.com/item/{productSlug}` | `https://toolfame.com/badge-dark.svg` | Product page |
| AIDirs | `https://aidirs.org/` | `https://aidirs.org/badges/badge-listed-dark.svg` | Use homepage until listing URL is known |
| DirOnix | `https://dironix.com/` | `https://dironix.com/bage.png` | Original badge; tested dark variants have returned HTML |
| Acid Tools | `https://acidtools.com/ai/{domainStem}` | `https://acidtools.com/assets/images/badge-dark.png` | Uses compact domain stem, not product slug |
| Product Wing | `https://productwing.com/product/{domainStem}` | `https://productwing.com/assets/images/badge-dark.png` | Uses compact domain stem |
| Dofollow.Tools | `https://dofollow.tools/` | `https://dofollow.tools/badge/badge_dark.svg` | Use homepage until listing URL is known |
| DeepLaunch.io | `https://deeplaunch.io/` | `https://deeplaunch.io/badge/badge_dark.svg` | Use homepage until listing URL is known |
| Fazier | `https://fazier.com/launches/{domain}` | `https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=launched&theme=dark` | Uses full domain |
| OpenHunts Club | `https://openhunts.com` | `https://cdn.openhunts.com/badges/club.webp` | Replaces AgentHunter, which may be unreachable |
| Days Launch | `https://dayslaunch.com/` | `https://dayslaunch.com/badages-awards.svg` | Original badge; tested dark variants have returned HTML |
| Unite List | `https://unitelist.com/product/{domainStem}` | `https://unitelist.com/assets/images/badge-dark.png` | Uses compact domain stem |
| IndieAI Directory | `https://indieai.directory/` | text fallback | Use text badge unless a real badge is provided |
| Product Hunt | `https://www.producthunt.com/products/{productSlug}` | `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id={productHuntPostId}&theme=dark` | Post ID is opaque; copy the official embed snippet after launch |
| Uneed | `https://www.uneed.best/tool/{productSlug}` | `https://www.uneed.best/EMBED1B.png` | Product page; original badge may need browser verification if automated checks hit TLS errors |
| Peerlist | `https://peerlist.io/{peerlistHandle}/project/{productSlug}` | `https://peerlist.io/api/v1/projects/embed/{peerlistProjectId}?showUpvote=true&theme=dark` | Handle and project ID are platform-assigned; automated badge checks may receive 403 |
| PeerPush | `https://peerpush.net/p/{productSlug}` | `https://peerpush.net/p/{productSlug}/badge.png` | Product-specific badge |
| LaunchIgniter | `https://www.launchigniter.com/product/{productSlug}?ref=badge-{productSlug}` | `https://launchigniter.com/api/winner-badge/{productSlug}?rank={launchRank}&theme=dark` | Use the winner badge only when the platform provides a rank |
| Twelve Tools | `https://twelve.tools` | `https://twelve.tools/badge0-dark.svg` | Homepage target observed in a live featured-on footer |
| Wired Business | `https://www.wired.business` | `https://wired.business/badge0-dark.svg` | Homepage target observed in a live featured-on footer |

Verified Better Dating Photos examples:

- Turbo0: `https://turbo0.com/item/better-dating-photos`
- Findly.tools: `https://findly.tools/better-dating-photos?utm_source=better-dating-photos`
- ShowMeBestAI: `https://showmebest.ai`
- NewTool.site: `https://newtool.site/item/better-dating-photos`
- Startup Fame: `https://startupfa.me/s/betterdatingphotos.com-546?utm_source=betterdatingphotos.com`
- ToolFame: `https://toolfame.com/item/better-dating-photos`
- Acid Tools: `https://acidtools.com/ai/betterdatingphotos`
- Product Wing: `https://productwing.com/product/betterdatingphotos`
- Fazier: `https://fazier.com/launches/betterdatingphotos.com`
- Unite List: `https://unitelist.com/product/betterdatingphotos`
- OpenHunts Club: `https://openhunts.com`

Verified AI Selfie Studio examples:

- Product Hunt: `https://www.producthunt.com/products/ai-selfie-studio`
- Uneed: `https://www.uneed.best/tool/ai-selfie-studio`
- Peerlist: `https://peerlist.io/raptis/project/ai-selfie-studio`
- PeerPush: `https://peerpush.net/p/ai-selfie-studio`
- LaunchIgniter: `https://www.launchigniter.com/product/ai-selfie-studio?ref=badge-ai-selfie-studio`
- Twelve Tools: `https://twelve.tools`
- Wired Business: `https://www.wired.business`

## Submission Materials

Create or update files under `.backlink-kit/` in the current project root. Do not place generated submission materials in `docs/` unless the user explicitly asks.

Default outputs:

- `.backlink-kit/backlink-submission-materials.md`
- `.backlink-kit/backlink-submission-materials.html`

The HTML file should be directly openable from disk and display the same Markdown-oriented content with copy buttons. The long description copy control must support:

- Markdown mode, selected by default;
- plain text mode without bullet Markdown markers.

After generating or updating the HTML file, explain that it is a local copy desk for directory submissions. Provide the path, and in an interactive desktop or browser environment open it for the user to preview. If opening is not possible, provide a clickable path and the exact command to open it.

Use the bundled script when helpful. Resolve the script relative to this `SKILL.md` file in the installed skill directory; do not assume a Codex-specific or user-specific absolute path.

```bash
python3 /path/to/backlink-kit/scripts/generate_submission_materials.py \
  --product-name "Product Name" \
  --website-url "https://example.com" \
  --primary-category "AI Tool" \
  --secondary-categories "AI, Productivity, Web App" \
  --support-email "support@example.com" \
  --logo-url "https://example.com/icon.png" \
  --screenshot-url "https://example.com/og.png" \
  --tagline "Short benefit-oriented tagline." \
  --one-line "One sentence explaining what the product does." \
  --short-description "A concise directory description." \
  --long-description "A polished product description paragraph." \
  --problem "The problem this product solves." \
  --target-users "The users this product is for." \
  --feature "Feature one: concrete user-facing benefit." \
  --feature "Feature two: concrete user-facing benefit." \
  --pricing "Freemium, paid, or one-time pricing summary." \
  --keywords "keyword one, keyword two, keyword three" \
  --anchor-text "primary backlink anchor" \
  --alternative-anchor-text "secondary backlink anchor" \
  --output-dir .backlink-kit
```

Adjust the generated copy to the actual product. Do not leave generic placeholders.

## Verification

After code changes:

1. Run the repo's typecheck/lint/build commands where available.
2. Browser-check at least one public page and one app/workbench page if footer visibility changed.
3. Verify all badge images load or degrade gracefully.
4. Verify duplicate visual track links are not keyboard-focusable.
5. Verify generated HTML copy buttons work; for local `file://` pages, use a clipboard fallback if browser permissions block `navigator.clipboard`.

## External Side Effects

Do not submit third-party forms, upload assets, send contact information, or create external side effects unless the user explicitly authorizes the specific site/action.
