---
name: "llm-entity-presence"
description: "Make a person or brand the answer when Google or an AI assistant (ChatGPT search, Perplexity, Google AI Overviews, Microsoft Copilot, Gemini) is asked \"who is X\". An interactive, guided wizard: it asks the user for their name, positioning, real proof, products, and socials, then walks them step by step through writing one canonical answer, building a server-rendered entity site with Person/Organization/WebSite/FAQPage JSON-LD and a correct llms.txt, stacking and cross-linking off-site profiles and backlinks, submitting to the search indexes (IndexNow/Bing, Google Search Console), and…"
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "jbrazy480/llm-entity-presence"
repo_url: "https://github.com/jbrazy480/llm-entity-presence"
source: "https://github.com/jbrazy480/llm-entity-presence/blob/HEAD/SKILL.md"
raw_source: "https://raw.githubusercontent.com/jbrazy480/llm-entity-presence/HEAD/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-11"
---

<!-- Unspecified skill · jbrazy480/llm-entity-presence · SKILL.md · MIT
     Source: https://github.com/jbrazy480/llm-entity-presence/blob/HEAD/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# llm-entity-presence (guided wizard)

This skill makes a person or brand the answer when someone asks "who is X" in
ChatGPT search, Perplexity, Google AI Overviews, Copilot, Gemini, or plain
Google. The answer should be the entity's own framing, pulled from a site they
control.

**You are running this as a conversation, not a document dump.** Walk the user
through it one phase at a time. Ask the questions in each ASK block, wait for
the answers, do the work in each DO block, then run the CONFIRM gate before you
move on. Keep your messages short. The user may be a non-developer, so explain
what each step does in plain language and tell them exactly what to paste or
click when it is their turn.

## How to run this skill (read before you start)

1. Start with the **Kickoff** message below, verbatim in spirit. Set honest
   expectations first.
2. Move through Phase 1 to Phase 6 in order. Do not skip a phase. Phases 1 and 2
   are the foundation; if they are weak, everything downstream is weak.
3. At every CONFIRM gate, summarize what is done and ask the user to approve
   before continuing.
4. Some phases need the user to do a manual step (a DNS record, a login, editing
   a social bio). When you hit one, hand them a short, numbered to-do and wait.
5. Track progress out loud (for example "Phase 3 of 6 done"). If a todo tool is
   available, keep a live checklist from `CHECKLIST.md`.
6. Apply the style rules at the bottom to everything you produce.

## Kickoff message (say this first, then ask Phase 1)

Tell the user, plainly:

- What this does: build them a real entity so Google and the AI assistants can
  answer "who is you" with their own framing, from a site they own.
- The honest expectations (state all of these, do not soften them):
  - **Two different systems.** Live-search products (ChatGPT search, Perplexity,
    Google AI Overviews, Copilot) read the web in near real time, so a freshly
    indexed, well-structured site can show up in days to a few weeks. A model's
    offline training only updates on the vendor's own schedule, so do not promise
    the model "just knows" them from memory soon after launch. The fast, real win
    is the live-search and Google surfaces.
  - **Indexing is the gate.** Nothing gets cited until it is crawled and indexed.
    This is the step people skip; here it is mandatory.
  - **Common names are harder.** If the name collides with a famous person or
    many people, you win the brand handle, the domain, and the specific searches
    first ("NAME AI", "BRAND", "NAME CITY"), then climb toward the bare name and
    a Knowledge Panel over time. No one can remove other people who share the
    name, and any service that claims it can is not being honest.
  - **Truthful only.** No invented testimonials, no fabricated numbers, no fake
    review or rating schema, no false "built on X" claims. Fabrication is both
    wrong and an E-E-A-T (experience, expertise, authority, trust) risk that can
    get a site discounted. If a claim is not verifiable, it stays off the page.
- Then ask: "Ready? I will start by gathering the real facts about you."

---

## Phase 1 of 6: Intake (gather the real entity)

**ASK the user** (one message, grouped; let them answer in their own words):

1. The exact name to use everywhere (one spelling, one casing).
2. Any brand or handle (for example an "Official" handle or company name).
3. One line: what do you do, for whom, and what is your single strongest claim?
4. Proof, real and checkable only: numbers, outcomes, roles, affiliations,
   partners, press. (Tell them: anything you cannot back up, we leave off.)
5. Your products or properties, each with its real URL.
6. Every social profile URL (YouTube, Instagram, LinkedIn, X, TikTok, Skool,
   GitHub, Facebook, other).
7. The domain to use as the home base. A name-based .com is ideal. (If they do
   not own one yet, note it and continue; they can register it before Phase 5.)
8. City or region, if it helps tell them apart from others with the same name.
9. Any media they have: logo, headshot, real video links, real named testimonials.

**DO:** Fill `references/intake-template.md` with their answers. Put anything
unverifiable in the "Unconfirmed" section and keep it off the public page.
Reflect the filled sheet back to them.

**CONFIRM gate:** "Is every claim here true and checkable? I will only publish
what you confirm." Lock the exact name string and the domain. Do not proceed
until the proof is confirmed truthful.

---

## Phase 2 of 6: The canonical answer (the single most important step)

**DO:** Draft ONE sentence (two or three short sentences max) that answers
"who is X". It must:
- Lead with the exact name, then bind name + category + the strongest qualifier
  in one breath. Shape: "NAME, known as BRAND, is the CATEGORY who QUALIFIER."
- Use the name, not pronouns, so it is self-contained and quotable.
- Contain only truthful, checkable claims.
- Use no em dashes or en dashes (commas, colons, periods, parentheses only).

**ASK:** Show the draft and ask the user to approve or edit the wording. This
sentence is the spine of everything, so get their explicit sign-off.

**Explain the 5-surface rule** (this is why it works): the approved sentence
goes VERBATIM into five places. Identical wording on all five is what gives an
answer engine the confidence to quote it.
1. The site hero subheader (visible H2 under the H1).
2. The About section lead sentence.
3. FAQ question 1 ("Who is X?"), as the first sentence of the answer.
4. The Person JSON-LD `description` field.
5. The first line of `llms.txt` (a blockquote summary).

**DO:** Store the sentence once and reuse it so the five copies cannot drift. In
code, that is one constant imported everywhere. In a no-code build, keep one
master copy and paste the exact same text into each spot.

**CONFIRM gate:** user-approved canonical sentence saved as the single source.

---

## Phase 3 of 6: Build the entity site (server-rendered)

**ASK:** "Do you have a site already, or are we building one? What host do you
want (Vercel, Netlify, other)?" If they have no preference, recommend a
server-rendered or static stack: Next.js on Vercel, or Astro for top speed. A
v0.dev template fed to the agent, then deployed to Vercel, is a fast path. Warn
them off a client-only single page app, because it ships blank HTML and bots see
nothing.

**DO:** Build the page with these on-page requirements:
- A complete `<head>`: title (<= 60 chars), meta description (<= 155 chars),
  canonical URL, Open Graph (title, description, 1200x630 image, url, type,
  site_name, locale), Twitter card `summary_large_image`, robots
  `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`,
  author, theme-color, favicon set.
- **Declarative subheaders.** Each section H2 is a complete entity sentence that
  states a claim (for example "NAME builds the systems that do X"), because
  answer engines lift subheaders. Do not use a vague label where a claim fits.
- The canonical answer verbatim in the hero subheader, the About lead, and FAQ #1.
- **JSON-LD:** Person + Organization + WebSite + FAQPage at minimum. Add
  VideoObject for real embedded videos and Review only for real, attributable
  testimonials. Use `references/json-ld-templates.md`. Keep the FAQPage answer
  text identical to the visible FAQ text. Person.description = canonical answer.
- `llms.txt` at the site root, Markdown with REAL newlines (never the literal two
  characters backslash and n), opening with the canonical answer and ending with
  citation guidance. Use `references/llms-txt-template.md`.
- `robots.txt` with an absolute Sitemap URL.
- `sitemap.xml` listing real, canonical URLs only. Never ship a sitemap whose
  only entry is a placeholder or dead path.
- One canonical home. The root serves the real page. No client-side bounce to a
  sub-path.

**DO:** Deploy to production on the canonical domain. Force one HTTPS host
(redirect http to https; pick www or the bare domain and redirect the other).

**CONFIRM gate (hard, do not skip):** run a JavaScript-off check.
`curl -s https://DOMAIN/ | grep -i "<title>\|CANONICAL PHRASE"`. The title, H1,
the canonical sentence, the FAQ text, and the JSON-LD types must be present in
the raw HTML. If they are not, the build is not done. Also confirm `llms.txt`
shows real line breaks and zero literal backslash-n.

---

## Phase 4 of 6: Off-site backlinks and profile consistency

Search and answer engines triangulate an entity from many sources that agree.
Make them agree.

**DO with the user:**
- **GitHub:** create or update the profile README (the special
  `username/username` repo) using `references/github-profile-readme-template.md`.
  Set the profile bio and the website field to the canonical domain. A real,
  active repo that links the site is a strong free backlink and speeds indexing.
  If the user ships anything (tools, prompts, templates), publish one genuinely
  useful repo that links back to the site.
- **Every social profile:** set the same name string and the same one-line bio,
  and put the canonical domain in the link field. Cross-link them: the site
  footer and the Person JSON-LD `sameAs` list every profile, and every profile
  links back to the site.
- **Easy legitimate extras:** a Gist, Pinterest pins with the canonical
  positioning, a relevant directory or community profile.

**ASK / hand off:** editing social bios is the user's to do. Give them a short
numbered list ("set this exact name, this exact bio line, this link") and wait
for them to confirm each is updated.

**Rule:** do not buy links, spin fake reviews, or fabricate press. One or two
real, strong links beat a pile of junk.

**CONFIRM gate:** at least one real backlink is live, and the profiles carry the
same name, bio, and link.

---

## Phase 5 of 6: Index (make the engines crawl it now)

A real site still will not appear until its pages are crawled and indexed.

**DO:**
- **IndexNow and Bing:** generate a key, host the key file at the site root, and
  ping IndexNow with the URLs. Steps in `references/indexnow-howto.md`. Bing and
  Microsoft Copilot read the Bing index, so this is high leverage.
- **Bing Webmaster Tools:** add and verify the site, submit the sitemap.

**ASK / hand off (the main manual step):** Google Search Console needs the
user's login. Walk them through it (full steps in
`references/google-search-console-checklist.md`):
1. Add the domain property in Search Console.
2. Verify with the DNS TXT record (give them the exact record to paste at their
   registrar).
3. Submit the sitemap.
4. Use URL Inspection to request indexing of the home page and key pages (there
   is a small daily quota, so prioritize the pillar pages).

If the user can connect the Search Console Indexing API, use it to submit the
rest of the pages in bulk. A backlink from Phase 4 meaningfully speeds discovery.

**CONFIRM gate:** IndexNow submitted, Bing sitemap submitted, and the user has
verified Search Console and submitted the sitemap.

---

## Phase 6 of 6: Verify and tune (ask the machines)

**DO:**
- Re-run the JavaScript-off curl proof from Phase 3.
- `curl` the `llms.txt` (zero literal backslash-n), `robots.txt`, and
  `sitemap.xml`; confirm each returns 200 and looks right.
- Validate the structured data (Google Rich Results Test or the Schema.org
  validator).
- **Query the answer engines** with "who is X" and "who is BRAND" in ChatGPT
  search, Perplexity, Google AI Overviews, and Copilot. Record which cite the
  site and which do not. This is the real scorecard.

**DO:** Give the user a short tuning list and a re-check date. Tighten the
canonical sentence, add any missing profile, fix any surface where the wording
drifted, request indexing again, and add a real backlink. Re-check on a schedule
(for example weekly), because indexing is not instant.

**CONFIRM gate:** deliver the run summary (see "Output of a run" below) and set
the next re-check date.

If optional tools are available, use them: an SEO audit skill or crawler to
check indexability and schema, a SERP and People Also Ask data source (for
example DataForSEO) to pull the real questions people ask and feed the FAQ, a
headless browser to verify rendered output and screenshot results, and a web
search or fetch tool to run the "who is X" checks.

## The two rules that matter most

1. **Canonical answer rule:** one truthful entity sentence, name first, written
   once.
2. **5-surface consistency rule:** that exact sentence appears verbatim in the
   hero subheader, the About lead, FAQ #1, the Person JSON-LD description, and
   llms.txt. Drift between copies weakens the citation; identical text earns it.

## Output of a run

- A confirmed intake sheet (truthful proof only).
- The user-approved canonical answer sentence.
- A built, server-rendered, deployed entity site with full head, declarative
  subheaders, JSON-LD, llms.txt, robots.txt, sitemap.xml.
- Updated, cross-linked profiles and at least one real backlink.
- Submitted to IndexNow/Bing and Google Search Console.
- A verification report: JavaScript-off curl proof, schema validation, and the
  results of the "who is X" checks, plus a tuning list and a re-check date.

## Files in this skill

- `CHECKLIST.md`: the condensed, do-this checklist for a full run.
- `references/intake-template.md`: the entity intake form for Phase 1.
- `references/json-ld-templates.md`: Person, Organization, WebSite, FAQPage,
  VideoObject, Review blocks with placeholders.
- `references/llms-txt-template.md`: a correct llms.txt with citation guidance.
- `references/github-profile-readme-template.md`: profile README for backlinks.
- `references/indexnow-howto.md`: IndexNow and Bing submission steps.
- `references/google-search-console-checklist.md`: GSC verify, sitemap, indexing.

## Style rules for everything this skill produces

- Zero em dashes and zero en dashes. Use commas, colons, periods, and parentheses.
- Truthful framing only. No fake testimonials, no fabricated numbers, no fake
  review or rating schema, no fake commit history, no false platform claims.
- Plain language. A non-developer working with an agent should be able to follow
  every step and know what to paste where.
