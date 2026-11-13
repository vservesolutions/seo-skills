---
name: "gsc-indexing"
description: "通过 URL Inspection API 检查页面索引状态，批量检查和优先级排序。"
category: "technical-crawling-indexing"
platforms: ["unspecified"]
platform_source: "none"
repo: "ccccchuck/gsc-analytics-skill"
repo_url: "https://github.com/ccccchuck/gsc-analytics-skill"
source: "https://github.com/ccccchuck/gsc-analytics-skill/blob/HEAD/skills/gsc-indexing/SKILL.md"
raw_source: "https://raw.githubusercontent.com/ccccchuck/gsc-analytics-skill/HEAD/skills/gsc-indexing/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 2
collected: "2026-11-13"
---

<!-- Unspecified skill · ccccchuck/gsc-analytics-skill · skills/gsc-indexing/SKILL.md · MIT
     Source: https://github.com/ccccchuck/gsc-analytics-skill/blob/HEAD/skills/gsc-indexing/SKILL.md
     Detected by: none · Regenerated on every run; edit the upstream skill, not this copy. -->

# GSC 索引管理

## 何时使用
- 用户想检查页面是否被 Google 索引/收录
- 需要批量检查多个页面的索引状态
- 排查页面不被收录的原因
- 检查移动可用性和 Rich Results

## 可用脚本

### 1. 单个 URL 检查
```bash
python3 .agents/skills/gsc-analytics/scripts/inspect_url.py \
  --url "https://www.example.com/some-page" --output table
```
提供完整的检查报告：索引判定、抓取状态、Robots.txt、规范网址、移动可用性、Rich Results，以及自动生成的优化建议。

### 2. 批量 URL 检查
```bash
python3 .agents/skills/gsc-analytics/scripts/batch_url_inspection.py \
  --urls "https://www.example.com/page1,https://www.example.com/page2,https://www.example.com/page3" \
  --output table
```
批量检查多个 URL，生成汇总表格并识别共性问题（被 robots.txt 屏蔽、移动端问题等）。

### 3. 索引问题优先级排序
```bash
python3 .agents/skills/gsc-analytics/scripts/check_indexing_issues.py \
  --urls "https://www.example.com/page1,https://www.example.com/page2" --output table
```
按优先级分数排序索引问题（🔴 紧急 / 🟡 中等 / 🟢 正常），帮助用户决定先修哪个。

## 注意事项
1. URL Inspection API 每天有 **2000 次请求配额**限制
2. 批量检查时每个 URL 之间有 1 秒延迟以避免触发限流
3. 需要提供完整的 URL（包含 `https://`）
4. 检查结果反映的是 Google 最近一次抓取时的状态，不一定是实时的
