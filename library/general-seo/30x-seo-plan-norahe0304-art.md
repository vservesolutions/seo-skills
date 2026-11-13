---
name: "30x-seo-plan"
description: "SEO 策略规划：竞品分析、关键词策略、内容日历和实施路线图。 当用户说\"SEO 计划\"、\"SEO 策略\"、\"内容日历\"或\"SEO 路线图\"时使用。"
category: "general-seo"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-plan/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-plan/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-plan/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-plan/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO 策略规划

## 功能说明

制定 SEO 策略：分析竞品、规划关键词、制定内容日历、输出实施路线图。

**不做的事**：
- 网站架构设计 → 用 `site-architecture`
- 技术 SEO 检查 → 用 `seo-technical`
- 内容生成 → 用 `seo-content-writer`

---

## 可选输入

| 输入 | 来源 | 说明 |
|------|------|------|
| **seo-keywords 输出** | `/seo keywords` | 如果已有关键词研究，读取作为策略输入 |

> 不是强制依赖。可以先规划再研究，也可以先研究再规划。

---

## 流程

### 步骤 1：发现（收集信息）

询问用户：
- 业务类型（SaaS / 电商 / 本地服务 / 媒体 / 其他）
- 目标受众（谁是你的客户？）
- 主要竞品（3-5 个）
- 目标（流量？转化？品牌？）
- 现有网站？（有 → 分析现状；没有 → 新站规划）

### 步骤 2：竞品分析

对每个竞品，分析：

| 维度 | 检查项 |
|------|--------|
| **内容** | 有哪些页面？博客频率？内容深度？|
| **关键词** | 排名哪些词？内容主题？|
| **E-E-A-T** | 作者信息？专家背书？信任信号？|
| **结构** | URL 层级？导航设计？|

工具：WebFetch + Perplexity

输出：`COMPETITOR-ANALYSIS.md`

### 步骤 3：关键词策略

如果有 seo-keywords 输出 → 读取并整合
如果没有 → 基于竞品分析 + 用户输入推断

确定：
- 核心关键词（3-5 个）
- 长尾关键词（10-20 个）
- 主题集群（Topic Clusters）

输出：整合到 `SEO-STRATEGY.md`

### 步骤 4：内容规划

基于关键词策略，规划：

| 内容类型 | 示例 |
|---------|------|
| **支柱页** | 核心主题的权威长文 |
| **集群页** | 围绕支柱的细分文章 |
| **博客** | 定期更新的内容 |

输出：`CONTENT-CALENDAR.md`

```markdown
# 内容日历

## 第 1 个月
| 周 | 主题 | 目标关键词 | 类型 | 优先级 |
|------|-------|----------------|------|----------|
| 1 | ... | ... | 支柱 | 高 |
| 2 | ... | ... | 集群 | 中 |
```

### 步骤 5：实施路线图

简化版路线图：

| 阶段 | 时间 | 重点 |
|------|------|------|
| **启动** | 第 1-2 周 | 技术基础（→ seo-technical）、核心页面 |
| **内容** | 第 3-8 周 | 按日历发布内容（→ seo-content-writer）|
| **优化** | 第 9-12 周 | 监控排名、调整策略 |

输出：`IMPLEMENTATION-ROADMAP.md`

---

## 输出文件

| 文件 | 内容 |
|------|------|
| `SEO-STRATEGY.md` | 完整策略：目标、关键词、主题集群 |
| `COMPETITOR-ANALYSIS.md` | 竞品分析报告 |
| `CONTENT-CALENDAR.md` | 内容日历（供 seo-content-writer 使用）|
| `IMPLEMENTATION-ROADMAP.md` | 实施路线图 |

---

## 与其他技能集成

```
seo-keywords ──(可选)──> seo-plan
                            │
                            ├──> seo-content-writer（内容生成）
                            ├──> site-architecture（架构设计）
                            └──> seo-technical（技术检查）
```

| 技能 | 何时使用 |
|------|---------|
| `seo-keywords` | 规划前做关键词研究 |
| `site-architecture` | 需要详细架构设计时 |
| `seo-content-writer` | 按日历生成内容 |
| `seo-technical` | 检查技术基础 |

---

## 示例

```
用户: /seo plan
Claude: 请告诉我：
1. 业务类型？
2. 目标受众？
3. 主要竞品？
4. SEO 目标？

用户: SaaS 项目管理工具，目标是中小企业，竞品是 Asana、Monday、Notion

Claude: [执行竞品分析...]
        [制定关键词策略...]
        [规划内容日历...]
        [输出 4 个文件]
```

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
