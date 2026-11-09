---
name: "seo-aeo-diagnostics"
description: "网站 SEO/AEO 基础诊断技能。当用户要求对网站做 SEO 基础诊断、技术审计、AEO 可访问性检查、或想了解网站在搜索引擎和 AI 引擎面前的健康状况时，使用此技能。即使用户只是说'帮我看看这个网站有什么问题'或'检查一下我的网站'，也应触发。此技能编排 7 个子模块执行完整诊断：技术基础、搜索引擎可访问性、结构化数据、内容结构、多媒体可访问性、内容质量信号、站内架构。"
category: "ai-search-geo"
platforms: ["openclaw"]
platform_source: "declared+detected"
repo: "jrr996shujin-png/openclaw-seo-aeo-skills"
repo_url: "https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills"
source: "https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills/blob/HEAD/seo-aeo-diagnostics/SKILL.md"
raw_source: "https://raw.githubusercontent.com/jrr996shujin-png/openclaw-seo-aeo-skills/HEAD/seo-aeo-diagnostics/SKILL.md"
ref: "HEAD"
discovered_via: "awesome-seo-agent-skills"
license: "MIT"
stars: 13
collected: "2026-11-09"
---

<!-- OpenClaw skill · jrr996shujin-png/openclaw-seo-aeo-skills · seo-aeo-diagnostics/SKILL.md · MIT
     Source: https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills/blob/HEAD/seo-aeo-diagnostics/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO/AEO 基础诊断 — 主编排器

## 概述

这是一个 composition skill，由 7 个独立的诊断子模块组成。每个子模块负责一个检查类别，可以独立运行，也可以按顺序执行完整诊断。

## 子技能清单

| 序号 | 子技能 | 路径 | 检查项 |
|------|--------|------|--------|
| 1 | 技术基础 | `{baseDir}/technical-foundation/SKILL.md` | 死链扫描、页面加载速度、移动端适配、HTTPS 安全 |
| 2 | 搜索引擎可访问性 | `{baseDir}/search-accessibility/SKILL.md` | Robots.txt、XML Sitemap、HTML vs JS 渲染、Canonical 标签 |
| 3 | 结构化数据 | `{baseDir}/structured-data/SKILL.md` | Schema Markup、Open Graph、Twitter Card、hreflang |
| 4 | 内容结构 | `{baseDir}/content-structure/SKILL.md` | Meta 标签、H1-H4 层级、列表独立性、结构化表格、FAQ 格式 |
| 5 | 多媒体可访问性 | `{baseDir}/multimedia-accessibility/SKILL.md` | 图片 alt 文本、视频转录文字 |
| 6 | 内容质量信号 | `{baseDir}/content-quality-signals/SKILL.md` | 作者信息、发布/更新日期、页面内容字数和可读性 |
| 7 | 站内架构 | `{baseDir}/site-architecture/SKILL.md` | 内部链接健康度、核心页面点击深度 |

## 执行流程

### 第一步：收集输入
向用户确认以下信息：
- **目标 URL**：要诊断的网站首页或具体页面
- **诊断范围**：完整诊断（全部 7 个模块）还是选择性诊断
- **优先级**：如果用户有特定关注点（如"我主要想优化 AI 搜索可见性"），可以调整模块的执行顺序和深度

### 第二步：按顺序执行子技能
按照上表顺序依次读取并执行每个子技能的 SKILL.md。每个子技能会：
1. 使用 web_fetch 或 browser 工具获取目标页面内容
2. 运行该模块的所有检查项
3. 为每个检查项产出：状态（✅ 通过 / ⚠️ 警告 / ❌ 失败）+ 发现描述 + 修复建议

### 第三步：汇总诊断报告
所有模块完成后，生成一份结构化的诊断报告，包含：

```
# [网站名称] SEO/AEO 基础诊断报告
## 总览评分
- 整体健康度：X/100
- 各模块评分

## 按模块详情
### 1. 技术基础 — 得分 X/20
| 检查项 | 状态 | 发现 | 建议 |
...

### 2. 搜索引擎可访问性 — 得分 X/20
...

（依次类推）

## 优先修复清单
按影响程度排序的 Top 10 修复建议，标注：
- 紧急程度（高/中/低）
- 预期影响
- 实施难度
```

## 评分体系

| 模块 | 权重 | 满分 |
|------|------|------|
| 技术基础 | 20% | 20 |
| 搜索引擎可访问性 | 20% | 20 |
| 结构化数据 | 15% | 15 |
| 内容结构 | 15% | 15 |
| 多媒体可访问性 | 10% | 10 |
| 内容质量信号 | 10% | 10 |
| 站内架构 | 10% | 10 |

## 注意事项

- 诊断依赖 browser 或 web_fetch 工具获取页面源码
- 对于 SPA 网站，browser 工具能获取 JS 渲染后的内容，web_fetch 只能获取原始 HTML，需在报告中注明
- 每个子技能可独立触发——用户只问"检查一下我的 robots.txt"时，直接调用搜索引擎可访问性子技能即可
