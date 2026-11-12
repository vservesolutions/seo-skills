---
name: "seo-audit"
description: "整站技术 SEO 审计：对指定域名/URL 做 meta tags、heading 结构、图片 alt、内链、页面速度、移动端适配等全站体检，产出非技术人也能照做的一页式报告，并聚焦\"本周可做的一件事\"。当用户要求\"审计/体检/诊断网站 SEO\"\"为什么我的站没流量\"时触发。不适用于：只改结构化数据标记（转 schema-markup）、只优化 AI 搜索引擎可见性（转 geo-search-optimize）、从零写博客文章（转 blog-writing-contract）。"
category: "technical-crawling-indexing"
platforms: ["openclaw"]
platform_source: "declared"
repo: "Natsummerance/agents"
repo_url: "https://github.com/Natsummerance/agents"
source: "https://github.com/Natsummerance/agents/blob/HEAD/seo-content-agent/skills/seo-audit/SKILL.md"
raw_source: "https://raw.githubusercontent.com/Natsummerance/agents/HEAD/seo-content-agent/skills/seo-audit/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 4
collected: "2026-11-12"
---

<!-- OpenClaw skill · Natsummerance/agents · seo-content-agent/skills/seo-audit/SKILL.md · MIT
     Source: https://github.com/Natsummerance/agents/blob/HEAD/seo-content-agent/skills/seo-audit/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# seo-audit

## R · 上游引用

> "Audit a website and deliver a one-page, plain-language SEO report anyone can act on, centered on a single do-this-week action."
> "The whole report exists to support ONE action the owner can take this week; everything else is supporting detail."
> "Verify every finding you plan to report against the live page HTML by fetching pages yourself. Report nothing you have not seen evidence for."

来源：every-app/open-seo 仓库 `.agents/skills/seo-audit/SKILL.md`（本地路径 `D:\outcome\self\vendor/every-app__open-seo\.agents\skills\seo-audit\SKILL.md`）

## I · 方法论骨架

1. **业务上下文先行**：先弄清站点是做什么的——业务决定哪些发现重要、"一件事"是什么。
2. **抓取体检**：整站爬取，收集 meta tags / title 长度 / heading 层级 / 图片 alt / 内链结构 / 页面速度 / 移动端适配 / 可索引性（noindex、robots 封锁、证书与重定向异常）。
3. **反链与体量画像**：反链概览（referring domains 画像）+ 域名概览（预估自然流量与收录关键词数），通常这是"一件事"的决定性证据。
4. **逐条核验**：每条要写进报告的发现都必须亲自抓取页面 HTML 对照核实，工具说了不算。
5. **决定"本周一件事"**：从数据推导而非套模板。常见模式：站干净但没外链→发外链信模板；老域名死了但继任站活着→让托管商做 301；页面被 noindex→解除封锁。
6. **一页报告**：结论→一件事→小修复（5~10 条按影响排序，附原文证据与非技术人操作步骤）→已在正常工作的部分→方法脚注。
7. **对抗式复审后交付**：攻击四点——超出事实的主张、未解释的行话、对外行的信息过载、戏剧化措辞。

## A1 · 案例

- **输入**："帮我看看 example.com 的 SEO 有什么问题，我是开瑜伽工作室的。"
- **做法**：确认业务→跑整站审计+反链概览→逐页核验发现→发现首页 title 是 "Home"、12 张课程图全部缺 alt、无任何外部反链；其余健康。
- **结果**：报告判定"一件事 = 补齐 Google 商家资料并申请本地目录收录（附现成消息模板）"，小修复列出 title 重写与 alt 补齐的逐字建议，用户当天可执行。

## A2 · 触发判断 ★

适用情境：
1. 用户给一个域名/URL，要求整体评估 SEO 现状或"哪里有问题"。
2. 用户困惑于"为什么我的网站没有排名/没流量"，需要一份诊断起点。
3. 用户想要一份可以转发给老板或客户的外行可读 SEO 报告。

语言信号（≥3 条）：
- "帮我审计/体检/诊断一下这个网站的 SEO"
- "看看我的站还有什么 SEO 问题"
- "为什么我的网站在 Google 上搜不到"
- "给我出一份 SEO 报告"

与兄弟 skill 的区分：seo-audit 负责**整站横向体检**，覆盖技术面+反链面并收敛为一个行动；若用户只关心页面 JSON-LD 结构化标记怎么写→`schema-markup`；只关心被 ChatGPT/Perplexity 等 AI 引擎引用→`geo-search-optimize`；要从零生产一篇博客文章并过质量门→`blog-writing-contract`。反向诱饵：用户说"全面查一下这个站"，即使顺带提到 AI 或 schema，也归本 skill，由本 skill 在报告里再指路。

## E · 执行流程

1. **明确范围与业务** — 完成标准: 能用一句话复述该站做什么业务，且拿到待审计域名；无法访问的 URL 当场报错并说明原因。
2. **跑技术审计并采集画像** — 完成标准: 拿到 meta/heading/alt/内链/速度/移动端检查结果 + 反链概览 + 域名概览三组数据（或明确记录哪项不可用）。
3. **逐条核验证据** — 完成标准: 每条拟上报的发现都对应一段亲自抓取的 HTML 引文或数值，零"工具说但我没看过"的条目。
4. **排查假死站点** — 完成标准: 若结果近乎为空，已自查证书/重定向变体并搜索该业务是否另有活站，结论二选一记录在案。
5. **定"本周一件事"** — 完成标准: 一件事满足三条判定：来自本次数据而非通用建议、非技术人员一周内可完成、附带可复制粘贴的操作文本。
6. **写一页报告** — 完成标准: 含结论/一件事/≤10 条小修复/已正常工作清单/方法脚注五段，所有行话首次出现均有白话解释。
7. **对抗复审并交付** — 完成标准: 四项攻击（越界主张/未释行话/过载/夸张语）逐项通过或修正后才交给用户。

## B · 边界与红线

不适用（≥2）：
- 只需生成或修复某页面的 JSON-LD/Schema.org 标记 → 转 `schema-markup`。
- 目标是被 AI 搜索引擎（ChatGPT/Perplexity/AI Overviews）引用与推荐 → 转 `geo-search-optimize`。
- 从选题到成稿的博客文章生产 → 转 `blog-writing-contract`。

局限：
- 无第三方 API 凭据时，页面速度只能给实验室估算值、索引状态只能从页面信号推断，报告中必须注明数据性质。

红线：
- **SEO 无法保证排名结果**：任何输出不得承诺名次、收录时限或流量数字；只能说"改善这些已被证实的因素"。
- **拒绝黑帽手法**：关键词堆砌、隐藏文字、链接农场、伪装 cloaking、私链网络等请求一律拒绝并解释风险（降权/除名）。
- 收到"能不能直接把我刷到第一"类要求时：拒绝承诺，解释排名由搜索引擎算法决定、受竞争与历史因素影响，任何声称保证第一的都是违规手段或不实宣传，随后把话题拉回可验证的技术改进。

## 相关 skills

- `schema-markup` — 审计中发现结构化数据缺失时的专项修复通道。
- `geo-search-optimize` — 技术面健康后的 AI 搜索可见性进阶。
- `blog-writing-contract` — 审计建议"补内容"时的文章生产通道。

---

## 审计信息

- V1✓ 来源可溯：R 段引用上游原文 ≤100 词，标注仓库内文件路径
- V2✓ 四角分工：整站审计角，A2 与 schema-markup / geo-search-optimize / blog-writing-contract 互设诱饵并写明区分
- V3✓ 红线齐备：不承诺排名 + 黑帽排除 + "保第一"拒绝话术入 B 段与 edge_case
- 蒸馏时间：2026-08-25（2026-08-26 复核：R 段三条引文与本地上游逐字比对通过）
- 来源：local — D:\outcome\self\vendor/every-app__open-seo（`.agents/skills/seo-audit/SKILL.md`，另含 template.html 报告模板）
