---
name: "30x-seo-technical"
description: "技术SEO审核，涵盖8个类别：可抓取性、可索引性、安全性、URL结构、 移动端、Core Web Vitals、结构化数据、JS渲染。 Schema深度验证 → seo-schema。AI爬虫 → seo-geo-technical。 当用户说\"技术SEO\"、\"抓取问题\"、\"robots.txt\"、\"Core Web Vitals\"时使用。"
category: "technical-crawling-indexing"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-technical/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-technical/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-technical/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-technical/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# 技术 SEO 审核

## 类别

### 1. 可抓取性
- robots.txt：存在、有效、不阻止重要资源
- XML 站点地图：存在、在 robots.txt 中引用、格式有效
- Noindex 标签：有意 vs 意外
- 抓取深度：重要页面在首页 3 次点击内
- JavaScript 渲染：检查关键内容是否需要 JS 执行
- 抓取预算：对于大型网站（>10k 页面），效率很重要

#### AI 爬虫管理

> **详细检查请用 `seo-geo-technical`**

此技能只检查 robots.txt 基础配置。AI 爬虫（GPTBot、ClaudeBot、PerplexityBot）的详细检查、llms.txt 生成、SSR 检查请使用 `seo-geo-technical`。

### 2. 可索引性
- Canonical 标签：自引用、与 noindex 无冲突
- 重复内容：近似重复、参数 URL、www vs 非 www
- 薄内容：页面低于各类型最低字数
- 分页：rel=next/prev 或加载更多模式
- Hreflang：多语言/多地区网站正确实现
- 索引膨胀：不必要的页面消耗抓取预算

### 3. 安全性
- HTTPS：强制执行、有效 SSL 证书、无混合内容
- 安全响应头：
  - Content-Security-Policy (CSP)
  - Strict-Transport-Security (HSTS)
  - X-Frame-Options
  - X-Content-Type-Options
  - Referrer-Policy
- HSTS 预加载：高安全性网站检查预加载列表收录情况

### 4. URL 结构
- 干净 URL：描述性、使用连字符、内容不用查询参数
- 层级：反映网站架构的逻辑文件夹结构
- 重定向：无链式（最多 1 跳）、永久迁移用 301
- URL 长度：标记 >100 字符
- 尾部斜杠：使用一致

### 5. 移动端优化
- 响应式设计：viewport meta 标签、响应式 CSS
- 触摸目标：最小 48x48px，间距 8px
- 字体大小：最小 16px 基础字号
- 无水平滚动
- 移动优先索引：Google 索引移动版本。**移动优先索引于 2024 年 7 月 5 日 100% 完成。** Google 现在使用移动端 Googlebot 用户代理抓取和索引所有网站。

### 6. Core Web Vitals
- **LCP**（最大内容绘制）：目标 <2.5s
- **INP**（下次绘制交互延迟）：目标 <200ms
  - INP 于 2024 年 3 月 12 日取代 FID。FID 于 2024 年 9 月 9 日从所有 Chrome 工具（CrUX API、PageSpeed Insights、Lighthouse）中完全移除。任何地方都不要再引用 FID。
- **CLS**（累积布局偏移）：目标 <0.1
- 评估使用真实用户数据的第 75 百分位
- 如果有 MCP 可用，使用 PageSpeed Insights API 或 CrUX 数据

### 7. 结构化数据
- 检测：JSON-LD（首选）、Microdata、RDFa
- 对照 Google 支持的类型验证
- 完整分析参见 seo-schema 技能

### 8. JavaScript 渲染
- 检查内容是否在初始 HTML 中可见 vs 需要 JS
- 识别客户端渲染 (CSR) vs 服务端渲染 (SSR)
- 标记可能导致索引问题的 SPA 框架（React、Vue、Angular）
- 验证动态渲染设置（如适用）

#### JavaScript SEO — Canonical 和索引指南（2025年12月）

Google 于 2025 年 12 月更新了 JavaScript SEO 文档，包含关键说明：

1. **Canonical 冲突：** 如果原始 HTML 中的 canonical 标签与 JavaScript 注入的不同，Google 可能使用任一个。确保服务端渲染 HTML 和 JS 渲染输出之间的 canonical 标签相同。
2. **JavaScript 与 noindex：** 如果原始 HTML 包含 `<meta name="robots" content="noindex">` 但 JavaScript 移除了它，Google 仍可能遵守原始 HTML 中的 noindex。在初始 HTML 响应中提供正确的 robots 指令。
3. **非 200 状态码：** Google 不会在返回非 200 HTTP 状态码的页面上渲染 JavaScript。错误页面上通过 JS 注入的任何内容或 meta 标签对 Googlebot 都不可见。
4. **JavaScript 中的结构化数据：** 通过 JS 注入的 Product、Article 和其他结构化数据可能面临延迟处理。对于时间敏感的结构化数据（特别是电商 Product 标记），将其包含在初始服务端渲染的 HTML 中。

**最佳实践：** 在初始服务端渲染的 HTML 中提供关键 SEO 元素（canonical、meta robots、结构化数据、title、meta description），而不是依赖 JavaScript 注入。

### 9. IndexNow 协议
- 检查网站是否支持 IndexNow（用于 Bing、Yandex、Naver）
- 被 Google 以外的搜索引擎支持
- 推荐实现以在非 Google 引擎上更快索引

## 输出

### 技术得分：XX/100

### 类别明细
| 类别 | 状态 | 得分 |
|------|------|------|
| 可抓取性 | ✅/⚠️/❌ | XX/100 |
| 可索引性 | ✅/⚠️/❌ | XX/100 |
| 安全性 | ✅/⚠️/❌ | XX/100 |
| URL 结构 | ✅/⚠️/❌ | XX/100 |
| 移动端 | ✅/⚠️/❌ | XX/100 |
| Core Web Vitals | ✅/⚠️/❌ | XX/100 |
| 结构化数据 | ✅/⚠️/❌ | XX/100 |
| JS 渲染 | ✅/⚠️/❌ | XX/100 |

### 严重问题（立即修复）
### 高优先级（一周内修复）
### 中优先级（一个月内修复）
### 低优先级（待办）

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
