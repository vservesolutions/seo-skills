---
name: "30x-seo-schema"
description: "检测、验证和生成 Schema.org 结构化数据。首选 JSON-LD 格式。 当用户说\"schema\"、\"结构化数据\"、\"富媒体结果\"、\"JSON-LD\" 或\"标记\"时使用。"
category: "structured-data"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-schema/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-schema/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-schema/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-schema/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# Schema 结构化数据分析与生成

## 检测

1. 扫描页面源码中的 JSON-LD `<script type="application/ld+json">`
2. 检查 Microdata（`itemscope`、`itemprop`）
3. 检查 RDFa（`typeof`、`property`）
4. 始终推荐 JSON-LD 作为主要格式（Google 明确表示的偏好）

## 验证

- 检查每种 schema 类型的必需属性
- 对照 Google 支持的富媒体结果类型验证
- 测试常见错误：
  - 缺少 @context
  - 无效的 @type
  - 错误的数据类型
  - 占位符文本
  - 相对 URL（应该是绝对 URL）
  - 无效的日期格式
- 标记已弃用的类型（见下文）

## Schema 类型状态（截至 2026 年 2 月）

阅读 `references/schema-types.md` 获取完整列表。关键规则：

### 活跃 — 放心推荐：
Organization、LocalBusiness、SoftwareApplication、WebApplication、Product（含 2025年4月的认证标记）、ProductGroup、Offer、Service、Article、BlogPosting、NewsArticle、Review、AggregateRating、BreadcrumbList、WebSite、WebPage、Person、ProfilePage、ContactPage、VideoObject、ImageObject、Event、JobPosting、Course、DiscussionForumPosting

### 视频和专业类型 — 放心推荐：
BroadcastEvent、Clip、SeekToAction、SoftwareSourceCode

查看 `schema/templates.json` 获取这些类型的即用型 JSON-LD 模板。

> **JSON-LD 和 JavaScript 渲染：** 根据 Google 2025年12月的 JS SEO 指南，通过 JavaScript 注入的结构化数据可能面临延迟处理。对于时间敏感的标记（特别是 Product、Offer），请在初始服务器渲染的 HTML 中包含 JSON-LD。

### 受限 — 仅限特定网站：
- **FAQ**：仅限政府和医疗权威网站（2023年8月限制）

### 已弃用 — 永远不要推荐：
- **HowTo**：2023年9月移除富媒体结果
- **SpecialAnnouncement**：2025年7月31日弃用
- **CourseInfo、EstimatedSalary、LearningVideo**：2025年6月退役
- **ClaimReview**：2025年6月从富媒体结果退役
- **VehicleListing**：2025年6月从富媒体结果退役
- **Practice Problem**：2025年底从富媒体结果退役
- **Dataset**：2025年底从富媒体结果退役
- **Book Actions**：弃用后恢复 — 截至2026年2月仍可用（历史说明）

## 生成

为页面生成 schema 时：
1. 从内容分析识别页面类型
2. 选择适当的 schema 类型
3. 生成包含所有必需和推荐属性的有效 JSON-LD
4. 仅包含真实、可验证的数据 — 明确标记需要用户填写的占位符
5. 在展示前验证输出

## 常用 Schema 模板

### Organization（组织）
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[公司名称]",
  "url": "[网站URL]",
  "logo": "[Logo URL]",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "[电话]",
    "contactType": "customer service"
  },
  "sameAs": [
    "[Facebook URL]",
    "[LinkedIn URL]",
    "[Twitter URL]"
  ]
}
```

### LocalBusiness（本地商家）
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[商家名称]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[街道地址]",
    "addressLocality": "[城市]",
    "addressRegion": "[省/州]",
    "postalCode": "[邮编]",
    "addressCountry": "CN"
  },
  "telephone": "[电话]",
  "openingHours": "Mo-Fr 09:00-17:00",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[纬度]",
    "longitude": "[经度]"
  }
}
```

### Article/BlogPosting（文章/博客文章）
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[标题]",
  "author": {
    "@type": "Person",
    "name": "[作者姓名]"
  },
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "image": "[图片URL]",
  "publisher": {
    "@type": "Organization",
    "name": "[发布者]",
    "logo": {
      "@type": "ImageObject",
      "url": "[Logo URL]"
    }
  }
}
```

## 输出

- `SCHEMA-REPORT.md` — 检测和验证结果
- `generated-schema.json` — 即用型 JSON-LD 代码片段

### 验证结果
| Schema | 类型 | 状态 | 问题 |
|--------|------|------|------|
| ... | ... | ✅/⚠️/❌ | ... |

### 建议
- 缺失的 schema 机会
- 需要修复的验证问题
- 用于实现的生成代码

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
