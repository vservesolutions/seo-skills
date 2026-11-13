---
name: "ai-visibility"
description: "Measure and improve visibility in AI Overviews, AI Mode, ChatGPT, Gemini, Perplexity, and Copilot using a three-layer dashboard: retrieval, citation, and outcome. Use for GEO/AEO work and AI search reporting."
category: "ai-search-geo"
platforms: ["claude-code"]
platform_source: "detected"
repo: "harryroger798/seo-agent-kit"
repo_url: "https://github.com/harryroger798/seo-agent-kit"
source: "https://github.com/harryroger798/seo-agent-kit/blob/HEAD/skills/ai-visibility/SKILL.md"
raw_source: "https://raw.githubusercontent.com/harryroger798/seo-agent-kit/HEAD/skills/ai-visibility/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code skill · harryroger798/seo-agent-kit · skills/ai-visibility/SKILL.md · MIT
     Source: https://github.com/harryroger798/seo-agent-kit/blob/HEAD/skills/ai-visibility/SKILL.md
     Detected by: detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# AI Visibility

## When to use

Use when the user asks about AI search, GEO, AEO, AI Overviews, LLM citations, or “why isn’t ChatGPT mentioning us?”

## The three layers

| Layer | Source | What it tells you |
|---|---|---|
| Retrieval | GSC generative AI report | Which pages appear in AI features |
| Citation | A fixed prompt panel | Which brands and URLs are named |
| Outcome | GA4 AI Assistant + branded search | What the exposure produces |

Do not collapse them into one “AI visibility score” without a published formula.

## Inputs

| Variable | Required | What it is |
|---|---|---|
| `{{site}}` | yes | Domain |
| `{{prompts}}` | yes | 30 buyer questions |
| `{{engines}}` | yes | ChatGPT, Gemini, Perplexity, AI Mode |
| `{{gsc}}` | no | Search Console access or CSV |
| `{{ga4}}` | no | GA4 access or CSV |

## Process

1. Build a 30-prompt panel from real buyer questions.
2. Run each prompt in each engine, logged out, same location and language.
3. Log: prompt, engine, cited yes/no, position, sentiment, competitors, date.
4. Pull GSC generative AI impressions by page.
5. Pull GA4 AI Assistant sessions and referrals.
6. Pull branded search trend.
7. Report the three layers separately, with method and sample size.
8. Recommend one fix per layer.

## Output

- `prompt-panel.csv` — the 30 prompts.
- `citation-log.csv` — the weekly results.
- `dashboard.md` — the three-layer view.
- `report.md` — one page: what moved, why, next.

## Rules

- 30 prompts is a panel, not a market.
- A single screenshot is not a trend.
- State the date, engine, location, and login state.
- Name the blind spots: AIO clicks, dark traffic, personalisation.
- No composite score without a formula.

## The interrogation loop

After the SEO work is published, test the brand:

1. Run ?best {{category}} in {{city}}? in Perplexity, Google AI Mode, Claude, ChatGPT, Gemini, and Copilot.
2. If the brand is missing or at the bottom, ask: ?Why didn?t you include {{brand}}?? and ?Where is {{brand}}??
3. Ask: ?What sources would change your answer??
4. Fix the cited sources: directories, Reddit, YouTube, reviews, comparison pages, government data.
5. Re-test in 7 days.

Do not argue with the model. Ask for the sources; fix the sources. Use `skills/ai-interrogation/SKILL.md` and `prompts/14-ai-interrogation.md`.

## QA

- [ ] 30 prompts, same engines, same location.
- [ ] Citation position and sentiment logged.
- [ ] GSC AI report reviewed.
- [ ] GA4 AI Assistant checked, plus referral fallback.
- [ ] Branded search tracked.
- [ ] Method and sample size stated.
- [ ] Blind spots named.
- [ ] One recommendation per layer.

## References

- `prompts/01-intent-fanout.md`
- `playbooks/ai-search.md`
- `checklists/ai-visibility.md`
- `scripts/ai_visibility_panel.py`
