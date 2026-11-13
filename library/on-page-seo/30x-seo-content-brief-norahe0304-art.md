---
name: "30x-seo-content-brief"
description: "通过分析排名前列的 SERP 结果生成内容 brief。提取共同主题， 识别内容差距，为 content-writer 创建可执行的 brief。 输入：目标关键词。输出：包含必须覆盖主题 + 差距机会的内容 brief。"
category: "on-page-seo"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-content-brief/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-content-brief/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-13"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-content-brief/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-content-brief/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# 内容 Brief 生成

> SERP 分析 → 内容 Brief → 超越竞品

## 目标

**不是改写竞品，而是分析竞品后写更好的内容。**

| 错误做法 | 正确做法 |
|---------|---------|
| 改写 Top 10 文章 | 分析 Top 10 意图 |
| 抄内容结构 | 找 Gap（他们漏了什么）|
| 合并竞品内容 | 超越竞品（加原创数据/案例）|

---

## 工作流程

### 步骤 1：SERP 抓取

```
输入: 目标关键词
↓
抓取 Top 10 结果的:
- 标题
- URL
- 元描述
- 页面内容（H1, H2, H3 结构）
- 字数
- 内容类型（清单、教程、指南、对比等）
```

### 步骤 2：意图分析

| 分析维度 | 说明 |
|---------|------|
| **搜索意图** | 信息型 / 商业型 / 交易型 / 导航型 |
| **内容格式** | 90% 是清单？那你也要写清单 |
| **内容深度** | 平均字数多少？你要超过平均 |
| **SERP 特性** | 有精选摘要？PAA？视频？|

### 步骤 3：主题提取

从 Top 10 提取共同覆盖的主题：

```
示例关键词: "如何开始播客"

Top 10 共同覆盖:
✓ 设备选择 (10/10)
✓ 录音软件 (9/10)
✓ 托管平台 (8/10)
✓ 封面设计 (7/10)
✓ 推广策略 (6/10)
```

**规则**: 超过 50% 覆盖的主题 = 必须写

### 步骤 4：Gap 分析

找出竞品**没有覆盖**或**覆盖不足**的内容：

```
Gap 机会:
- 2024 AI 工具推荐（只有 2/10 提到）
- 变现策略详解（大多一笔带过）
- 真实成本breakdown（没人给具体数字）
- 常见失败原因（负面角度少）
```

**规则**: Gap = 你的差异化机会

### 步骤 5：Brief 生成

---

## 输出格式：内容 Brief

```markdown
# 内容 Brief: [目标关键词]

## 搜索意图
[信息型/商业型/等] - [一句话描述用户想要什么]

## 内容格式
推荐: [清单 / 教程指南 / 对比 / 等]
原因: Top 10 中 X/10 使用此格式

## 目标字数
最低: [Top 10 平均字数]
建议: [平均 + 20%] 以超越竞品

## 必须覆盖的主题（必选）

| 主题 | 覆盖率 | 建议深度 |
|------|--------|---------|
| [主题1] | 10/10 | 详细 |
| [主题2] | 9/10 | 详细 |
| [主题3] | 8/10 | 中等 |

## Gap 机会（差异化）

| Gap | 为什么是机会 | 建议角度 |
|-----|-------------|---------|
| [Gap1] | 只有 2/10 提到 | [具体建议] |
| [Gap2] | 覆盖太浅 | [具体建议] |

## 推荐 H2 结构

1. [H2 标题] - 覆盖 [主题]
2. [H2 标题] - 覆盖 [主题]
3. [H2 标题] - Gap 机会: [Gap]
4. ...

## E-E-A-T 建议

- **经验**: 加入 [具体建议，如真实案例/截图]
- **专业**: 引用 [数据来源/专家观点]
- **原创价值**: [你能提供什么竞品没有的]

## SERP 特性机会

- [ ] 精选摘要: [是否有机会，格式建议]
- [ ] PAA: [相关问题列表]
- [ ] 视频: [是否需要视频]

## 内链建议

- 链接到: [相关现有页面]
- 被链接: [哪些页面应该链接到这篇]
```

---

## 使用方式

```bash
# 生成内容 brief
/30x-seo content-brief "目标关键词"

# 然后用 brief 写内容
/30x-seo content-writer --brief [brief文件]
```

---

## 与其他技能的关系

| 上游 | 本技能 | 下游 |
|------|--------|------|
| 30x-seo-keywords | **30x-seo-content-brief** | 30x-seo-content-writer |
| 30x-seo-plan | ↓ 分析 SERP | ↓ 按 brief 写作 |

---

## 注意事项

1. **不要抄袭**: Brief 是分析工具，不是抄袭工具
2. **原创优先**: Gap 部分必须有原创内容
3. **E-E-A-T**: 每篇都要有真实经验/数据
4. **更新频率**: 竞品会变，brief 有时效性

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
