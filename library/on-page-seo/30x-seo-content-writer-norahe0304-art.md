---
name: "30x-seo-content-writer"
description: "SEO 优化内容生成。两种模式：计划模式（读取 seo-plan 输出）或独立模式（用户直接提供关键词）。 输出 markdown 文件。当用户说\"写 SEO 博客\"、\"生成 SEO 内容\"、\"创建博客文章\"或\"SEO 文章\"时使用。"
category: "on-page-seo"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-content-writer/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-content-writer/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-content-writer/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-content-writer/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO 内容写作

## 功能说明

生成 SEO 优化的博客文章。

## 两种模式

| 模式 | 输入 | 适用场景 |
|------|------|---------|
| **计划模式** | seo-plan 输出文件 | 有完整 SEO 策略，按日历写作 |
| **独立模式** | 用户提供关键词 | 快速写一篇文章，无需完整规划 |

---

## 模式 1：计划模式

### 前提条件

已有 SEO 计划（`/seo plan`）：
- `CONTENT-CALENDAR.md` - 内容日历
- `SEO-STRATEGY.md` - 关键词和主题策略

### 流程

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   seo-plan      │     │                 │     │                 │
│   输出文件      │ ──> │   生成 SEO 内容 │ ──> │   Markdown      │
│ CONTENT-CALENDAR│     │                 │     │   博客文章      │
│ SEO-STRATEGY    │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### 从计划获取的上下文

| 信息 | 来源 | 用途 |
|------|------|------|
| **目标关键词** | SEO-STRATEGY.md | 标题、H2、正文优化 |
| **主题集群** | SEO-STRATEGY.md | 内链规划 |
| **竞品分析** | COMPETITOR-ANALYSIS.md | 差异化角度 |

---

## 模式 2：独立模式

### 适用场景

- 只想快速写一篇文章
- 没有完整的 SEO 计划
- 已经知道目标关键词

### 必需输入

询问用户：

1. **主题/标题**：文章主题
2. **目标关键词**：主关键词
3. **次要关键词**：次要关键词（可选）
4. **搜索意图**：信息型 / 商业型 / 交易型
5. **目标长度**：短篇 (800-1200) / 中篇 (1500-2000) / 长篇 (2500+)
6. **CTA 目标**：读者应采取什么行动？

---

## 内容生成

### 文章结构

```markdown
# [H1：包含主关键词，50-60 字符]

[开篇：吸引人的第一段，自然提及关键词]

## [H2：包含关键词变体的章节]

[包含语义关键词的内容，2-4 段]

### [H3：子章节（如需要）]

[支撑内容]

## [H2：另一个主要章节]

[继续相同模式...]

## 总结 / 要点

[摘要，重申价值，包含 CTA]
```

### SEO 要求清单

| 元素 | 要求 |
|---------|-------------|
| **标题 (H1)** | 包含主关键词，50-60 字符 |
| **元描述** | 包含关键词，150-160 字符，有吸引力 |
| **URL 别名** | 简短、关键词丰富、用连字符分隔 |
| **前 100 字** | 自然包含主关键词 |
| **标题结构** | H2 包含关键词变体，层级逻辑清晰 |
| **关键词密度** | 1-2%，自然分布 |
| **内链** | 3-5 个相关内链（占位符：[内链：主题]）|
| **外链** | 2-3 个权威来源 |
| **图片** | 建议位置并附带 alt 文本描述 |
| **可读性** | 短段落、项目符号列表、易于扫读 |

### E-E-A-T 信号

| 信号 | 如何体现 |
|--------|----------------|
| **经验** | 第一手案例、案例研究、"我们测试过" |
| **专业** | 技术深度、准确信息、引用出处 |
| **权威** | 引用权威来源、链接到研究 |
| **可信** | 明确归属、诚实声明、不夸大 |

### AI 引用准备（GEO）

为 AI 搜索可见性优化：
- 包含清晰、可引用的定义
- 使用结构化格式（表格、列表）
- 在第一句话直接回答问题
- 包含具体数据点和统计数据

---

## 输出格式

### 交付物

1. **博客文章**（Markdown 格式）
   - 包含 SEO 优化的完整文章
   - 元标题和描述
   - 建议的 URL 别名

2. **SEO 检查清单**（验证）
   - [ ] 标题包含主关键词
   - [ ] 前 100 字包含主关键词
   - [ ] H2 包含关键词变体
   - [ ] 内链占位符
   - [ ] 外链权威来源
   - [ ] 图片建议附带 alt 文本
   - [ ] 包含 CTA

---

## 命令

| 命令 | 模式 |
|------|------|
| `/seo content-writer` | 自动检测（有 seo-plan 输出则计划模式，否则独立模式）|
| `/seo content-writer "主题"` | 独立模式，直接指定主题 |

---

## 与其他技能集成

| 技能 | 何时使用 |
|-------|-------------|
| **seo-plan** | 先制定计划，再用计划模式生成内容 |
| **seo-internal-links suggest** | 写完后生成内链建议 |
| **seo-content-audit** | 写完后审计质量 |

---

## 质量检查

### 生成前
- [ ] 目标关键词已确认
- [ ] 搜索意图已理解
- [ ] 长度已确定

### 生成后
- [ ] 关键词自然融入（不堆砌）
- [ ] E-E-A-T 信号已体现
- [ ] 可读性适合目标受众
- [ ] CTA 与业务目标一致
- [ ] 事实声明有来源支持

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
