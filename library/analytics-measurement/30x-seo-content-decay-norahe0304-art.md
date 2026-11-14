---
name: "30x-seo-content-decay"
description: "检测内容衰退 - 排名/流量下降需要刷新的老内容。 识别发布超过 6 个月且表现下滑的页面。 输出刷新优先级列表及具体更新建议。"
category: "analytics-measurement"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-content-decay/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-content-decay/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-content-decay/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-content-decay/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# 内容衰退检测

> 发现排名下降的老内容，提示刷新

## 什么是内容衰退

内容会"腐烂"：
- 信息过时（2023 的数据在 2026 没人看）
- 竞品更新了更好的内容
- 搜索意图变了
- Google 算法更新

**结果**：排名下降 → 流量下降 → 收入下降

---

## 检测标准

| 指标 | 阈值 | 说明 |
|------|------|------|
| **发布时间** | >6 个月 | 新内容不算衰退 |
| **流量变化** | 下降 >20% | 对比 3 个月前 |
| **排名变化** | 下降 >5 位 | 主要关键词 |
| **点击率** | 下降 >15% | 标题可能需要更新 |

**触发刷新**：满足任意 2 条 = 需要刷新

---

## 工作流程

### 方式 A：有 GSC 数据

```
用户提供 GSC 导出数据（CSV）
↓
分析每个 URL:
- 展示量趋势
- 点击量趋势
- 平均排名趋势
- CTR 趋势
↓
识别衰退内容
↓
输出刷新优先级列表
```

### 方式 B：无 GSC 数据

```
用户提供 URL 列表
↓
检查每个页面:
- 发布日期 / 最后更新日期
- 内容时效性信号（年份、"最新"等）
- 竞品 SERP 分析（你的内容 vs Top 10）
↓
识别可能衰退的内容
↓
输出建议列表
```

---

## 输出格式

```markdown
# 内容衰退报告

## 高优先级刷新（流量影响大）

| 页面 | 发布日期 | 流量变化 | 排名变化 | 问题 | 建议 |
|------|---------|---------|---------|------|------|
| /blog/best-crm-2024 | 2024-03 | -45% | -8 位 | 年份过时 | 更新为 2026 版本 |
| /guide/remote-work | 2023-11 | -30% | -5 位 | 工具推荐过时 | 更新工具列表 |

## 中优先级刷新

| 页面 | 发布日期 | 问题 | 建议 |
|------|---------|------|------|
| ... | ... | ... | ... |

## 刷新建议

### /blog/best-crm-2024

**问题诊断**:
- 标题含 "2024"，已过时
- 价格信息可能不准确
- 缺少 2025-2026 新功能

**刷新清单**:
- [ ] 更新标题为 "Best CRM 2026"
- [ ] 核实所有价格
- [ ] 添加新工具（如 X, Y, Z）
- [ ] 更新截图
- [ ] 检查所有外链是否有效
- [ ] 更新 Schema 中的 dateModified

**预估影响**: 恢复 ~40% 流量
```

---

## 刷新策略

### 轻度刷新（快速更新）

适用：信息小幅过时

- 更新年份
- 更新价格/数据
- 修复死链
- 更新 dateModified

### 中度刷新（内容更新）

适用：内容部分过时

- 重写过时章节
- 添加新信息
- 更新图片/截图
- 添加新的 H2 章节

### 重度刷新（内容重写）

适用：内容大幅过时或意图变化

- 重新分析 SERP 意图
- 重写大部分内容
- 可能需要新的 content-brief
- 保留 URL（301 历史权重）

---

## 使用方式

```bash
# 有 GSC 数据
/30x-seo content-decay --gsc [csv文件]

# 无 GSC 数据，提供 URL 列表
/30x-seo content-decay --urls [url列表]

# 分析整站（爬取 sitemap）
/30x-seo content-decay https://example.com
```

---

## 与其他技能的关系

| 上游 | 本技能 | 下游 |
|------|--------|------|
| GSC 数据 | **30x-seo-content-decay** | 30x-seo-content-brief |
| sitemap | ↓ 识别衰退 | 30x-seo-content-writer |
| | | （刷新内容）|

---

## 最佳实践

1. **定期检查**: 每季度跑一次衰退检测
2. **优先高价值页面**: 先刷新流量/转化高的页面
3. **保留 URL**: 刷新而非新建，保留历史权重
4. **更新 dateModified**: 告诉 Google 内容已更新
5. **内链检查**: 刷新后检查内链是否需要更新

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
