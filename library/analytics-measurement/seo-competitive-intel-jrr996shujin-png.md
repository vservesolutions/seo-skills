---
name: "seo-competitive-intel"
description: "品牌 vs 竞品 SEO/AEO 竞争情报监测系统。将关键词排名追踪、内容表现分析、竞品内容监测、月度汇总报告整合为一个 composition skill。当用户提到'关键词排名''竞品监测''内容表现''排名掉了''竞品发了什么新文章''月度 SEO 报告''流量下降了''帮我看看我们的 SEO 状况''跟竞品比一下''生成本月报告'时触发。数据源：SEMrush API + Google Search Console API + Google Analytics API。"
summary: "Monitors SEO and AEO competitive intelligence including keyword rankings and performance reports."
category: "analytics-measurement"
platforms: ["openclaw"]
platform_source: "declared+detected"
repo: "jrr996shujin-png/openclaw-seo-aeo-skills"
repo_url: "https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills"
source: "https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills/blob/HEAD/seo-competitive-intel/SKILL.md"
raw_source: "https://raw.githubusercontent.com/jrr996shujin-png/openclaw-seo-aeo-skills/HEAD/seo-competitive-intel/SKILL.md"
ref: "HEAD"
discovered_via: "awesome-seo-agent-skills"
license: "MIT"
stars: 13
collected: "2026-11-14"
---

<!-- OpenClaw skill · jrr996shujin-png/openclaw-seo-aeo-skills · seo-competitive-intel/SKILL.md · MIT
     Source: https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills/blob/HEAD/seo-competitive-intel/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# SEO 竞争情报监测系统 — 主编排器

## 概述

这是一个双视角（品牌 vs 竞品）监测系统，由 4 个子模块组成，既支持随时调用单个模块，也支持月底汇总生成完整报告。

## 数据源配置

本 skill 依赖三个外部 API：

| 数据源 | 用途 | 环境变量 |
|--------|------|----------|
| **SEMrush API** | 关键词数据、竞品排名、外链、流量估算 | `SEMRUSH_API_KEY` |
| **Google Search Console API** | 品牌网站的真实搜索表现（曝光、点击、排名） | OAuth — 通过 browser 工具完成授权 |
| **Google Analytics API** | 用户行为数据（停留时间、跳出率、转化） | OAuth — 通过 browser 工具完成授权 |

首次运行时询问用户：
1. 品牌域名
2. 1-2 个核心竞品域名
3. 初始关键词列表（如没有，可通过 keyword-ranking 子模块的关键词发现功能生成）
4. Google Search Console 已验证的网站域名
5. Google Analytics GA4 Property ID

## 子模块清单

| 序号 | 子模块 | 路径 | 调用场景 |
|------|--------|------|----------|
| 1 | 关键词 & 排名追踪 | `{baseDir}/keyword-ranking/SKILL.md` | 随时调用：查排名、加新词、看变化、报警 |
| 2 | 品牌内容表现 | `{baseDir}/content-performance/SKILL.md` | 每周调用：看文章表现、识别衰退、更新提醒 |
| 3 | 竞品内容监测 | `{baseDir}/competitor-content/SKILL.md` | 每周调用：扫新内容、排名变化、上升文章分析 |
| 4 | 月度汇总报告 | `{baseDir}/monthly-report/SKILL.md` | 月底调用：生成 React 交互看板 |

## 调用模式

### 模式一：随时调用（单模块）

用户随时可以说：
- "我们的关键词排名怎么样了" → 读取 `{baseDir}/keyword-ranking/SKILL.md` 执行
- "上周发的那篇文章表现如何" → 读取 `{baseDir}/content-performance/SKILL.md` 执行
- "竞品最近发了什么新东西" → 读取 `{baseDir}/competitor-content/SKILL.md` 执行
- "生成本月报告" → 读取 `{baseDir}/monthly-report/SKILL.md` 执行

单模块调用时，直接在对话中返回结果即可。

### 模式二：每周例行检查

用户说"跑一下本周检查"时，按顺序执行：
1. keyword-ranking → 输出排名变化 + 报警项
2. content-performance → 输出内容表现 + 衰退标记
3. competitor-content → 输出竞品新内容 + 提醒

汇总为一个简洁的周报摘要。

### 模式三：月度报告

用户说"生成月度报告"时：
1. 先按顺序调用前 3 个子模块，收集当月所有数据
2. 调用 monthly-report 子模块，生成 React 交互看板
3. 看板包含月环比对比 + 行动建议清单
4. 如果发现内容缺口，提示用户可联动 `aeo-content-strategy` skill 进行长尾问题挖掘

## 与其他 Skill 的联动

| 触发条件 | 联动目标 |
|----------|----------|
| 月报发现关键词缺口（竞品有排名我们没有） | → `aeo-content-strategy` 挖掘该领域的长尾问题 |
| 竞品新文章在某主题排名上升 | → `aeo-content-strategy` 分析该主题的社区讨论热度 |
| 内容衰退标记触发 | → `seo-aeo-diagnostics` 对该页面做技术诊断 |

## 语言与市场

- 监测语言：**英语**
- 搜索引擎：**Google + Bing**（Bing 排名直接影响 ChatGPT Search 的引用，对 AEO 至关重要）
