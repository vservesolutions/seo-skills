---
name: "ai-readiness"
description: "Check whether AI apps can read and quote a website, and turn each failed check into an exact change. Covers robots.txt rules for AI search crawlers, indexing, snippets, and text that needs JavaScript. Use for \"can ChatGPT read my site\", \"why does AI not cite my site\", or an AI crawler audit. Works with a Frontmost AI project, or with only a website address."
category: "ai-search-geo"
platforms: ["unspecified"]
platform_source: "none"
repo: "frontmost-ai/aeo-skills"
repo_url: "https://github.com/frontmost-ai/aeo-skills"
source: "https://github.com/frontmost-ai/aeo-skills/blob/HEAD/skills/ai-readiness/SKILL.md"
raw_source: "https://raw.githubusercontent.com/frontmost-ai/aeo-skills/HEAD/skills/ai-readiness/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Unspecified skill · frontmost-ai/aeo-skills · skills/ai-readiness/SKILL.md · MIT
     Source: https://github.com/frontmost-ai/aeo-skills/blob/HEAD/skills/ai-readiness/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI readiness

Use this guidance to find what stops an AI app from reading a website, and to give the exact change for each problem.

There are two paths. Use the first when the person has a Frontmost AI project. Use the second when they have only a website address.

## Path 1: with Frontmost AI

1. Call `get_readiness` for the project and the scan in the request.
2. If `checked` is false, the scan has no check. Say that, and use Path 2.
3. Read `status`: `ready`, `not_verified`, or `blocked`. Read `apps_ready` of `apps_total`.
4. Read the five checks in the table below.
5. For each check that fails, copy its evidence and its change from the tool. Make the change exact for this website: name the file, the line, and the new text.
6. Each AI app shows how many of its answers cite the site. Report the number with its counts.
7. Link the `url` of the AI Readiness tab. The next scan checks the website again.

If a tool returns `setup_required`, give the person the `url` from the result. If a tool returns `plan_required`, say that this data needs a paid Frontmost AI plan. In both cases, continue with Path 2.

## Path 2: with only a website address

Fetch two things yourself: `https://<site>/robots.txt` and the home page, with its response headers. Then do the five checks. Say in the result that this is your own check of two files, made today.

| Check | Passes when | How to check |
|---|---|---|
| Search crawlers allowed | robots.txt lets each AI app's search crawler read the home page | Test `/` for `OAI-SearchBot` (ChatGPT), `Googlebot` (AI Overviews and AI Mode), `PerplexityBot` (Perplexity), and `Bingbot` (Copilot) |
| Gemini allowed | robots.txt does not block `Google-Extended` | Test `/` for `Google-Extended` |
| Home page indexable | The page has no `noindex` | Read the `robots` and `googlebot` meta tags and the `X-Robots-Tag` header |
| Home page quotable | The page allows a snippet | Fails on `nosnippet` or `max-snippet:0` in those same places |
| Text readable without JavaScript | The HTML that the server sends holds the page's text | Count the words of visible text in the raw HTML. Compare with the page in a browser when you can |

How to read robots.txt (RFC 9309):

- Use the group whose `User-agent` names the crawler. If no group names it, use the `*` group.
- In that group, the longest rule that matches the path wins. If an `Allow` and a `Disallow` are equally long, `Allow` wins.
- No robots.txt, or an empty one, allows every crawler.
- Quote the line number of each rule that you report.

How to read the JavaScript check:

- The crawlers of OpenAI and Perplexity do not run JavaScript. They see only the HTML that the server sends.
- The check fails when a browser shows at least 20 words and the raw HTML holds fewer than half of them.
- If you cannot open the page in a browser, compare the raw HTML with what the page's title and description promise. If the raw HTML is an empty app shell, report it as a probable failure and say that you did not confirm it in a browser.

If a fetch fails or a file does not load, mark that check as not verified. Do not guess.

## Order of the changes

1. robots.txt rules that block an AI app's search crawler, then a rule that blocks `Google-Extended`. These are first because a blocked crawler cannot read any other fix.
2. A home page that search engines cannot index.
3. A home page that does not allow a snippet.
4. Text that needs JavaScript to appear.

## Rules

- Use evidence that you saw, such as "robots.txt line 277". Do not invent a rule.
- Not verified means that a check did not run. It is not a failure. Say which check did not run, and give no fix for it.
- A search crawler and a training crawler are different. `OAI-SearchBot` lets ChatGPT search read the site. `GPTBot` collects training data. Whether to allow `GPTBot` is the owner's choice. Do not list it as a fix.
- Do not say that a fix will raise citations or mentions. A readable site is a condition, not a result.
- Path 2 reads the home page only. Say so. A rule that blocks another part of the site can exist.

## Never suggest

- `llms.txt` files or "AI schema". Google states that its AI features need no new files and no special markup.
- A change to a file that you did not see evidence for.

## Output

A numbered list in the order above. For each item: the check, the evidence, the exact change, and who usually makes it (the person who manages the website or its host).

If nothing fails, say that all checks passed, and name the AI apps that can read the site.

With Path 2, end with one line: these checks show whether AI apps can read the site. They do not show whether AI apps mention the business. That needs the answers themselves.
