---
name: "seo-keyword-ranking"
description: "关键词监测与排名追踪子模块。追踪品牌和竞品在目标关键词上的 Google 和 Bing 排名变化，按类别分组管理关键词，排名大幅下滑时自动报警。当用户提到'排名掉了''关键词排名''竞品排在哪''加个新关键词''哪些词我们还没覆盖'时触发。数据源：SEMrush API + Google Search Console API。"
summary: "Tracks brand and competitor keyword rankings across Google and Bing with automated alerts."
category: "keyword-research"
platforms: ["openclaw"]
platform_source: "declared"
repo: "jrr996shujin-png/openclaw-seo-aeo-skills"
repo_url: "https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills"
source: "https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills/blob/HEAD/seo-competitive-intel/keyword-ranking/SKILL.md"
raw_source: "https://raw.githubusercontent.com/jrr996shujin-png/openclaw-seo-aeo-skills/HEAD/seo-competitive-intel/keyword-ranking/SKILL.md"
ref: "HEAD"
discovered_via: "awesome-seo-agent-skills"
license: "MIT"
stars: 13
collected: "2026-11-14"
---

<!-- OpenClaw skill · jrr996shujin-png/openclaw-seo-aeo-skills · seo-competitive-intel/keyword-ranking/SKILL.md · MIT
     Source: https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills/blob/HEAD/seo-competitive-intel/keyword-ranking/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# 关键词 & 排名追踪模块

## 核心功能

追踪品牌和竞品在 Google 与 Bing 上的关键词排名，发现排名波动，及时报警。

## 关键词分组管理

关键词按 4 个类别管理，每个类别的监测逻辑和报警阈值不同：

### 类别 A：品牌词
自己的公司名、产品名及变体。这些词你理应排第一，掉了就是出问题了。

**示例：** "Genspark"、"Genspark AI"、"Genspark agent"
**报警阈值：** 排名掉出前 3 位
**监测频率：** 每周
**数据源：** SEMrush Position Tracking API

### 类别 B：核心业务词
描述你的产品类别和核心功能的词。竞争最激烈的主战场。

**示例：** "best AI agent"、"AI productivity tool"、"AI email assistant"
**报警阈值：** 排名下降 5 位以上
**监测频率：** 每周
**数据源：** SEMrush Position Tracking API + Google Search Console（真实曝光/点击数据交叉验证）

### 类别 C：长尾问题词
用户实际搜索的对话式长问题，对 AEO 特别重要。

**示例：** "what AI tool can automatically reply to customer emails"、"how to use AI agent for small business"
**报警阈值：** 排名掉出首页（第 10 位以外）
**监测频率：** 每周
**数据源：** SEMrush + Google Search Console
**来源补充：** 可从 `aeo-content-strategy` skill 的长尾问题挖掘结果导入

### 类别 D：竞品对比词
包含竞品名称的对比搜索，用户正在做购买决策时常搜的。

**示例：** "Genspark vs Manus"、"Genspark vs ChatGPT for business"、"Manus alternative"
**报警阈值：** 排名下降 5 位以上
**监测频率：** 每周
**数据源：** SEMrush Position Tracking API

## 执行流程

### 1. 关键词列表初始化

首次运行时，如果用户没有现成的关键词列表：

**自动发现流程：**
1. 调用 SEMrush Domain Organic Research API（`/analytics/v1/domain/organic`），输入品牌域名，获取当前已有排名的所有关键词
2. 同样调用竞品域名，获取竞品的关键词
3. 调用 SEMrush Keyword Gap API（`/analytics/v1/domain/keywords/gap`），找出"竞品有排名但品牌没有"的词
4. 从 Google Search Console API 拉取过去 90 天的搜索查询数据，补充 SEMrush 没发现的长尾词
5. 将所有关键词自动归类到 A/B/C/D 四组

**归类规则：**
- 包含品牌名 → 类别 A
- 词长 ≤ 5 词且为名词短语 → 类别 B
- 词长 > 5 词或问句形式 → 类别 C
- 包含竞品名或 "vs" / "alternative" / "compare" → 类别 D

归类后展示给用户确认和调整，用户可以随时添加、删除或重新分类关键词。

### 2. 排名数据拉取

**Google 排名（主要）：**
- SEMrush Position Tracking API：设置项目，追踪所有关键词在 Google 上的每日排名
- Google Search Console API（`/searchanalytics/query`）：获取真实曝光、点击、平均排名、CTR

**Bing 排名：**
- SEMrush Position Tracking API 支持 Bing 追踪：在项目设置中添加 Bing 作为搜索引擎
- 特别标注 Bing 排名对 AEO 的意义——ChatGPT Search 使用 Bing 索引，Bing 排名直接影响 AI 搜索可见性

### 3. 竞品排名对比

对每个关键词，同时拉取：
- 品牌排名位置
- 竞品 1 排名位置
- 竞品 2 排名位置（如有）

生成对比视图：
```
关键词: "best AI agent"
         Google    Bing
我们:     #7       #12
竞品A:    #3       #5
竞品B:    #15      #8
趋势:     ↓2       ↑3（vs 上周）
```

### 4. 报警检查

每次拉取数据后，自动扫描是否触发报警：

| 类别 | 报警条件 | 报警级别 |
|------|----------|----------|
| A 品牌词 | 掉出前 3 | 🔴 紧急 |
| B 核心词 | 下降 ≥ 5 位 | 🟡 重要 |
| C 长尾词 | 掉出首页（> #10） | 🟡 重要 |
| D 对比词 | 下降 ≥ 5 位 | 🟡 重要 |
| 任何类别 | 竞品排名超过我们 ≥ 5 位 | ⚠️ 关注 |
| 任何类别 | 新关键词首次进入前 20 | ✅ 好消息 |

报警时输出：
```
🔴 排名报警：
关键词 "Genspark AI" (品牌词)
Google 排名：#1 → #5（下降 4 位）
Bing 排名：#2 → #2（无变化）
可能原因：[如果能从 SEMrush 数据推断]
建议动作：检查该页面是否有技术问题 → 可调用 seo-aeo-diagnostics
```

### 5. 关键词发现（持续）

除了初始化时的发现，每月自动检查一次新机会：
- 竞品新增了哪些排名关键词（SEMrush New Keywords 功能）
- Google Search Console 中出现的新搜索查询（之前没出现过的词）
- 标记为"建议添加追踪"，等用户确认

## 输出格式

### 随时调用时

在对话中直接返回：
- 各类别关键词排名摘要
- 有报警的关键词高亮
- 本周排名变化 Top 5 上升 / Top 5 下降

### 被月度报告调用时

输出结构化数据供月度报告模块使用：
- 所有关键词的当月排名历史（周粒度）
- 月初 vs 月末排名对比
- 报警事件清单
- 新发现的关键词机会
