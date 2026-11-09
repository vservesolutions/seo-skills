---
name: "seo-search-accessibility"
description: "搜索引擎可访问性诊断子模块。检查网站对搜索引擎爬虫和 AI 引擎（GPTBot、Bingbot、Googlebot）的可访问性，包括 Robots.txt 配置、XML Sitemap、HTML vs JS 渲染方式、Canonical 标签设置。当用户提到\"爬虫抓不到\"\"robots.txt\"\"sitemap\"\"网站没被收录\"\"AI 搜索找不到我的网站\"时触发。"
category: "technical-crawling-indexing"
platforms: ["openclaw"]
platform_source: "declared"
repo: "jrr996shujin-png/openclaw-seo-aeo-skills"
repo_url: "https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills"
source: "https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills/blob/HEAD/seo-aeo-diagnostics/search-accessibility/SKILL.md"
raw_source: "https://raw.githubusercontent.com/jrr996shujin-png/openclaw-seo-aeo-skills/HEAD/seo-aeo-diagnostics/search-accessibility/SKILL.md"
ref: "HEAD"
discovered_via: "awesome-seo-agent-skills"
license: "MIT"
stars: 13
collected: "2026-11-09"
---

<!-- OpenClaw skill · jrr996shujin-png/openclaw-seo-aeo-skills · seo-aeo-diagnostics/search-accessibility/SKILL.md · MIT
     Source: https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills/blob/HEAD/seo-aeo-diagnostics/search-accessibility/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# 搜索引擎可访问性诊断模块

本模块负责检查网站对传统搜索引擎和 AI 引擎的可访问性，满分 20 分。

## 检查项

### 1. Robots.txt 分析（5 分）

这是 AEO 时代最关键的检查之一。越来越多的 AI 引擎（GPTBot、Anthropic-AI、PerplexityBot 等）依赖 robots.txt 来判断是否可以抓取网站内容。如果 robots.txt 错误地屏蔽了这些 bot，网站内容将无法进入 AI 搜索结果。

**检查方法：**
1. `web_fetch` 目标网站的 `/robots.txt`
2. 解析所有 User-agent 和 Disallow/Allow 规则
3. 重点检查以下爬虫的访问权限：
   - `Googlebot` — Google 搜索
   - `Bingbot` — Bing 搜索（也为 Copilot 提供数据）
   - `GPTBot` — OpenAI/ChatGPT 搜索
   - `Anthropic-AI` / `ClaudeBot` — Anthropic/Claude
   - `PerplexityBot` — Perplexity AI
   - `Bytespider` — 字节跳动
   - `CCBot` — Common Crawl（许多 AI 模型的训练数据源）
4. 检查是否有通配符 `Disallow: /` 意外屏蔽了所有爬虫
5. 检查 Sitemap 引用

**评分：**
- 5 分：Googlebot + Bingbot + 至少 2 个 AI bot 均可访问，且有 Sitemap 引用
- 3 分：传统搜索引擎可访问，但 AI bot 被屏蔽或未明确允许
- 1 分：robots.txt 存在但有配置错误（如意外屏蔽关键路径）
- 0 分：robots.txt 缺失或全面屏蔽

**输出格式：**
```
状态：✅/⚠️/❌
Robots.txt：存在/不存在

各爬虫访问权限：
| 爬虫 | 状态 | 备注 |
|------|------|------|
| Googlebot | ✅ 允许 / ❌ 屏蔽 | ... |
| Bingbot | ... | ... |
| GPTBot | ... | ... |
| ClaudeBot | ... | ... |
| PerplexityBot | ... | ... |

Sitemap 引用：有/无（URL: ...）
修复建议：（具体建议）
```

### 2. XML Sitemap 检查（5 分）

**检查方法：**
1. 从 robots.txt 中找 Sitemap URL；如未找到，尝试 `/sitemap.xml` 和 `/sitemap_index.xml`
2. `web_fetch` sitemap 内容
3. 检查：
   - 格式是否为有效 XML
   - URL 数量
   - 是否包含 `<lastmod>` 日期
   - `<lastmod>` 是否合理（不能全是同一天，不能太旧）
   - 是否包含 `<changefreq>` 和 `<priority>`
   - URL 是否为 HTTPS
   - 是否有 sitemap index（大型网站应有）

**评分：**
- 5 分：sitemap 存在 + 格式正确 + 有 lastmod + 日期合理
- 3 分：sitemap 存在但缺少 lastmod 或日期全相同
- 1 分：sitemap 存在但格式有问题或内容极少
- 0 分：sitemap 不存在

**输出格式：**
```
状态：✅/⚠️/❌
Sitemap URL：...
URL 数量：X 个
lastmod 覆盖率：X%（最新日期：YYYY-MM-DD）
修复建议：（具体建议）
```

### 3. HTML vs JS 渲染检查（5 分）

这对 AI 搜索尤其重要——大多数 AI 爬虫不执行 JavaScript。如果网站的核心内容完全依赖 JS 渲染（如 React SPA），AI 引擎可能看到的是空白页面。

**检查方法：**
1. `web_fetch` 获取原始 HTML
2. 分析 HTML 中直接可见的文本内容量
3. 检查是否为 SPA 框架（React root `<div id="root"></div>`、Vue `<div id="app"></div>` 等空容器）
4. 检查 `<noscript>` 标签中是否有降级内容
5. 检查是否使用 SSR/SSG 框架（Next.js、Nuxt 的标识特征）
6. 检查 `<body>` 中的直接文本内容与 JS 依赖内容的比例

**评分：**
- 5 分：核心内容在原始 HTML 中完整可见（SSR/SSG 或纯 HTML）
- 3 分：主要内容可见，部分次要内容需 JS 渲染
- 1 分：部分内容可见但主体依赖 JS
- 0 分：纯 CSR SPA，原始 HTML 几乎无内容

**输出格式：**
```
状态：✅/⚠️/❌
渲染方式：SSR / SSG / CSR / 纯 HTML
原始 HTML 文本量：约 X 字
框架检测：Next.js / Nuxt / React SPA / Vue SPA / 无框架
<noscript> 降级：有/无
修复建议：（具体建议，如建议迁移到 SSR 或实施预渲染）
```

### 4. Canonical 标签检查（5 分）

**检查方法：**
1. 检查 `<link rel="canonical" href="...">` 是否存在
2. 验证 canonical URL 与当前页面 URL 是否一致（注意 www/非 www、http/https、尾斜杠差异）
3. 检查是否有自引用 canonical（好的做法）
4. 如果检查多个页面，检查是否有多个页面指向同一 canonical（潜在问题）
5. 检查 canonical 是否为绝对 URL（不应是相对路径）

**评分：**
- 5 分：canonical 存在 + 正确 + 绝对路径 + 自引用
- 3 分：canonical 存在但有小问题（如相对路径）
- 1 分：canonical 存在但指向错误 URL
- 0 分：canonical 标签缺失

**输出格式：**
```
状态：✅/⚠️/❌
Canonical 标签：有/无
Canonical URL：...
当前页面 URL：...
一致性：匹配/不匹配
绝对路径：是/否
修复建议：（具体建议）
```

## 汇总输出

```
## 搜索引擎可访问性 — 得分 X/20

| 检查项 | 得分 | 状态 |
|--------|------|------|
| Robots.txt | X/5 | ✅/⚠️/❌ |
| XML Sitemap | X/5 | ✅/⚠️/❌ |
| HTML vs JS 渲染 | X/5 | ✅/⚠️/❌ |
| Canonical 标签 | X/5 | ✅/⚠️/❌ |

关键发现：（1-2 句总结）
AEO 特别提醒：（AI 爬虫可访问性的关键问题）
优先修复：（最重要的 1-2 项）
```
