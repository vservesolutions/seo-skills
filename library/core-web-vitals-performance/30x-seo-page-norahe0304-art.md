---
name: "30x-seo-page"
description: "深度单页SEO分析，涵盖页面元素、内容质量、技术meta标签、schema、 图片和性能。当用户说\"分析这个页面\"、\"检查页面SEO\"或提供 单个URL进行审核时使用。"
category: "core-web-vitals-performance"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-page/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-page/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-page/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-page/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# 单页分析

## 分析内容

### 页面 SEO
- Title 标签：50-60 字符，包含主要关键词，唯一
- Meta description：150-160 字符，有吸引力，包含关键词
- H1：有且仅有一个，符合页面意图，包含关键词
- H2-H6：逻辑层级（不跳级），描述性强
- URL：简短、描述性、使用连字符、无参数
- 内部链接：数量充足、锚文本相关、无孤立页面
- 外部链接：指向权威来源、数量合理

### 内容质量
- 字数 vs 页面类型最低要求（参见 quality-gates.md）
- 可读性：Flesch 阅读难度分数、年级水平
- 关键词密度：自然（1-3%），有语义变体
- E-E-A-T 信号：作者简介、资质、第一手经验标记
- 内容新鲜度：发布日期、最后更新日期

### 技术元素
- Canonical 标签：存在、自引用或正确指向
- Meta robots：除非有意阻止，否则应为 index/follow
- Open Graph：og:title、og:description、og:image、og:url
- Twitter Card：twitter:card、twitter:title、twitter:description
- Hreflang：如果多语言，需正确实现

### Schema 结构化数据
- 检测所有类型（首选 JSON-LD）
- 验证必需属性
- 识别缺失的机会
- 永远不要推荐 HowTo（已弃用）或 FAQ（仅限政府/医疗）

### 图片
- Alt 文本：存在、描述性、自然包含关键词
- 文件大小：标记 >200KB（警告），>500KB（严重）
- 格式：推荐 WebP/AVIF 替代 JPEG/PNG
- 尺寸：设置 width/height 以防止 CLS
- 懒加载：首屏下方图片使用 loading="lazy"

### Core Web Vitals（仅供参考 — 无法仅从 HTML 测量）
- 标记潜在的 LCP 问题（巨大的首屏图片、阻塞渲染的资源）
- 标记潜在的 INP 问题（大量 JS、无 async/defer）
- 标记潜在的 CLS 问题（缺少图片尺寸、注入的内容）

## 输出

### 页面评分卡
```
综合得分：XX/100

页面 SEO：     XX/100  ████████░░
内容质量：     XX/100  ██████████
技术：         XX/100  ███████░░░
Schema：       XX/100  █████░░░░░
图片：         XX/100  ████████░░
```

### 发现的问题
按优先级组织：严重 → 高 → 中 → 低

### 建议
具体、可操作的改进，附带预期影响

### Schema 建议
针对检测到的机会提供即用型 JSON-LD 代码

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
