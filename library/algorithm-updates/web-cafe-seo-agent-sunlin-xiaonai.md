---
name: "web-cafe-seo-agent"
description: "Use the logged-in 哥飞 SEO Agent at seo.web.cafe through a browser-control integration for explicit requests to research a domain, URL, keyword, competitors, SEO traffic changes, website valuation, or SEO growth opportunities. Run browser work hidden by default and render the Web.Cafe transcript plus an evidence-calibrated analysis directly in the agent conversation. Reuse the user's active browser session without reading or exporting cookies, tokens, or other authentication data."
summary: "Uses a browser-based SEO agent to research domains, keywords, competitors, and traffic changes."
category: "algorithm-updates"
platforms: ["unspecified"]
platform_source: "none"
repo: "sunlin-xiaonai/web-cafe-seo-agent-skill"
repo_url: "https://github.com/sunlin-xiaonai/web-cafe-seo-agent-skill"
source: "https://github.com/sunlin-xiaonai/web-cafe-seo-agent-skill/blob/HEAD/skills/web-cafe-seo-agent/SKILL.md"
raw_source: "https://raw.githubusercontent.com/sunlin-xiaonai/web-cafe-seo-agent-skill/HEAD/skills/web-cafe-seo-agent/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 8
collected: "2026-11-11"
---

<!-- Unspecified skill · sunlin-xiaonai/web-cafe-seo-agent-skill · skills/web-cafe-seo-agent/SKILL.md · MIT
     Source: https://github.com/sunlin-xiaonai/web-cafe-seo-agent-skill/blob/HEAD/skills/web-cafe-seo-agent/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# Web.Cafe SEO Agent

Use this skill only when the user explicitly asks to use 哥飞 SEO Agent, SEO Web Cafe, the open `seo.web.cafe` page, or its data/tools. For ordinary SEO advice, answer directly or use other applicable sources.

## Requirements

Use a browser-control integration that can keep an authenticated user session.

Do not use this skill unless the user has access to the Web.Cafe SEO Agent and has already signed in through their own browser. If the browser is signed out, ask the user to sign in; do not seek credentials.

## Session safety

1. Reuse an existing tab at `https://seo.web.cafe/chat/` when possible. Otherwise open that URL in a new browser tab.
2. Never inspect, export, copy, log, persist, or ask for cookies, local storage, session storage, tokens, passwords, or authorization headers. Let the browser use its own session automatically.
3. Submitting a prompt may consume the user's Web.Cafe credits. Submit only when the user explicitly asks to invoke the Agent or approves the exact request.

## Hidden execution and in-chat rendering

Treat the browser as the execution surface, not the output surface.

1. Use hidden/background browser execution by default when the host supports it. Do not ask the user to watch a browser unless they request it.
2. Start a new conversation for a separate investigation; continue an existing Web.Cafe conversation only when the user is clearly following up on it.
3. Turn the user's question into a concise, context-aware request. Preserve freedom of analysis; do not force a fixed prompt template.
4. Submit the request, wait for visible tool calls and the final response to finish, then read the entire visible conversation.
5. Return in this order:
   - **Web.Cafe run**: submitted question, credit usage when visible, and chronological tool/activity log;
   - **Web.Cafe output**: complete visible final answer, including tables and explicit evidence;
   - **Review**: facts, inferences, verification gaps, contradictions, and the next best action.
6. Do not silently omit tool output. If a transcript exceeds the host's response limit, say so, keep the final answer and tool log in-chat, and save the remaining visible transcript as a user-facing artifact if the host supports files.

## Task framing

Identify the actual decision before sending the request. Typical shapes are:

- baseline domain audit;
- keyword validation;
- competitor analysis;
- page diagnosis;
- traffic-decline investigation;
- growth-plan research;
- website valuation.

Use the user's vocabulary and goals. Include country, language, product constraints, market, conversion goal, and known competitors only when supplied or essential. Ask a question only if the missing detail would materially change the analysis.

Read [references/prompt-patterns.md](references/prompt-patterns.md) only when a structured request would help. Adapt the examples; do not copy them mechanically.

## Evidence calibration

Separate the returned result into:

| Category | Treatment |
| --- | --- |
| Tool output | Label as third-party observed or estimated data and name the metric/source. |
| Inference | Explain how it follows from the observed data. |
| Unverified claim | State what would validate it, usually GSC, Analytics, server logs, or revenue data. |

Never present estimated traffic, keyword traffic, DR, valuation, or revenue as first-party truth. Never infer an algorithm penalty solely from a traffic drop. Do not buy links, modify a site, publish content, send outreach, or make a purchase unless the user separately authorizes the action.
