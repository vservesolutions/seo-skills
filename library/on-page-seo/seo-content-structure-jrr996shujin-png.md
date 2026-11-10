---
name: "seo-content-structure"
description: "内容结构诊断子模块。检查页面的 Meta 标签（title/description）质量、H1-H4 标题层级、列表独立性、结构化表格、FAQ 格式。当用户提到\"标题标签\"\"meta description\"\"内容结构\"\"heading 层级\"\"FAQ 优化\"时触发。这些检查直接影响 AI 引擎对页面内容的解析和引用能力。"
summary: "Audits meta tags, heading hierarchies, and FAQ formatting for search and AI engine parseability."
category: "on-page-seo"
platforms: ["openclaw"]
platform_source: "declared"
repo: "jrr996shujin-png/openclaw-seo-aeo-skills"
repo_url: "https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills"
source: "https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills/blob/HEAD/seo-aeo-diagnostics/content-structure/SKILL.md"
raw_source: "https://raw.githubusercontent.com/jrr996shujin-png/openclaw-seo-aeo-skills/HEAD/seo-aeo-diagnostics/content-structure/SKILL.md"
ref: "HEAD"
discovered_via: "awesome-seo-agent-skills"
license: "MIT"
stars: 13
collected: "2026-11-10"
---

<!-- OpenClaw skill · jrr996shujin-png/openclaw-seo-aeo-skills · seo-aeo-diagnostics/content-structure/SKILL.md · MIT
     Source: https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills/blob/HEAD/seo-aeo-diagnostics/content-structure/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# 内容结构诊断模块

本模块负责检查页面的内容结构是否利于搜索引擎和 AI 引擎解析，满分 15 分。内容结构的好坏直接决定了 AI 引擎能否准确提取和引用你的内容——一个结构清晰的页面，AI 能精准引用其中的段落；一个结构混乱的页面，AI 可能直接跳过它。

## 检查项

### 1. Meta 标签质量（4 分）

**检查方法：**
1. 提取 `<title>` 标签：
   - 是否存在
   - 长度是否在 30-60 字符之间（中文 15-30 字）
   - 是否包含目标关键词（如果能从内容推断）
   - 是否唯一且描述性（非通用模板如"首页 - 公司名"）
2. 提取 `<meta name="description">`：
   - 是否存在
   - 长度是否在 120-160 字符之间（中文 60-80 字）
   - 是否为具有行动号召力的摘要
   - 是否与页面实际内容相关
3. 检查是否有重复的 title 或 description 标签

**评分：**
- 4 分：title + description 均存在、长度合适、内容相关
- 3 分：均存在但有长度或质量问题
- 1 分：缺少其中一个或两者质量都差
- 0 分：title 和 description 都缺失

**输出格式：**
```
状态：✅/⚠️/❌
Title：「...」（X 字符）
  - 长度：合适/过长/过短
  - 关键词：包含/未包含
Description：「...」（X 字符）
  - 长度：合适/过长/过短
  - 行动力：强/弱
修复建议：（含改写示例）
```

### 2. H1-H4 标题层级（4 分）

标题层级是 AI 引擎理解页面内容组织结构的核心线索。一个语义清晰的标题层级就像一本书的目录——AI 可以据此快速定位和引用特定部分。

**检查方法：**
1. 提取所有 `<h1>` 到 `<h6>` 标签
2. 检查：
   - H1 是否唯一（一个页面应只有一个 H1）
   - H1 是否在页面顶部
   - 标题层级是否连续（不应从 H1 直接跳到 H4）
   - 标题内容是否具有描述性（非通用文字如"更多"）
   - 是否有空标题标签
   - 标题是否过长（建议 < 70 字符）
3. 生成标题大纲树，展示层级关系

**评分：**
- 4 分：H1 唯一 + 层级连续 + 内容描述性强
- 3 分：H1 唯一但有层级跳跃
- 1 分：多个 H1 或层级混乱
- 0 分：无任何标题标签或大量空标题

**输出格式：**
```
状态：✅/⚠️/❌
H1 数量：X 个
标题大纲：
  H1: [标题内容]
    H2: [标题内容]
      H3: [标题内容]
    H2: [标题内容]
      H3: [标题内容]
        H4: [标题内容]
层级连续性：✅ 连续 / ⚠️ 有跳跃（H1→H3）
修复建议：（具体建议）
```

### 3. 列表独立性（2 分）

AI 引擎特别善于提取格式化列表作为回答。但列表需要"独立可理解"——即脱离上下文也能看懂每一项。

**检查方法：**
1. 提取所有 `<ul>`、`<ol>` 列表
2. 检查：
   - 列表项是否自包含（每项是否有足够的上下文，不依赖前一项理解）
   - 列表前是否有引导性标题或段落说明
   - 列表项长度是否合适（太短可能缺乏信息，太长可能需要拆分）
   - 是否有嵌套列表（适度嵌套可以，过深不好）

**评分：**
- 2 分：列表有引导、项目自包含、结构合理
- 1 分：有列表但可读性或独立性有问题
- 0 分：无列表或列表质量很差

### 4. 结构化表格（2 分）

表格是数据密集内容的最佳呈现方式，也是 AI 引擎最容易直接引用的格式之一。

**检查方法：**
1. 提取所有 `<table>` 标签
2. 检查：
   - 是否有 `<thead>` / `<th>` 表头
   - 是否有 `<caption>` 或 `<summary>` 描述
   - 表格是否用于布局而非数据（反模式）
   - 表格是否在移动端可滚动（`overflow-x: auto` 等）
3. 如果页面有比较性数据但未使用表格，标注为优化机会

**评分：**
- 2 分：表格有表头 + 描述 + 非布局用途
- 1 分：有表格但缺少表头或描述
- 0 分：数据适合表格但未使用，或表格用于布局

### 5. FAQ 格式（3 分）

FAQ 是 AEO 的黄金格式——问答形式天然匹配 AI 引擎的"问答"检索模式。

**检查方法：**
1. 检查是否有 FAQPage Schema（与结构化数据模块联动）
2. 检查页面中是否有问答格式的内容（即使未标记为 FAQ）：
   - 以"？"结尾的标题后跟段落
   - "Q: ... A: ..." 格式
   - `<details>/<summary>` 折叠面板
3. 如果有问答内容，检查：
   - 问题是否自然、完整（像真实用户会问的）
   - 答案是否在问题后立即给出（不要问了一页才回答）
   - 答案的第一句话是否能独立作为回答

**评分：**
- 3 分：有明确的 FAQ 区域 + Schema 标记 + 问答质量高
- 2 分：有问答内容但缺少 Schema 或格式不理想
- 1 分：有潜在的 FAQ 内容但未结构化
- 0 分：页面完全没有问答格式内容（非所有页面都需要，视内容类型而定）

## 汇总输出

```
## 内容结构 — 得分 X/15

| 检查项 | 得分 | 状态 |
|--------|------|------|
| Meta 标签 | X/4 | ✅/⚠️/❌ |
| H1-H4 层级 | X/4 | ✅/⚠️/❌ |
| 列表独立性 | X/2 | ✅/⚠️/❌ |
| 结构化表格 | X/2 | ✅/⚠️/❌ |
| FAQ 格式 | X/3 | ✅/⚠️/❌ |

关键发现：（1-2 句总结）
AEO 提升机会：（哪些内容可以转化为 AI 友好格式）
优先修复：（最重要的 1-2 项）
```
