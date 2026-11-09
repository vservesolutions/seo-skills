---
name: "seo-multimedia-accessibility"
description: "多媒体可访问性诊断子模块。检查图片 alt 文本覆盖率和质量、视频转录文字/字幕可用性。当用户提到\"图片 SEO\"\"alt 标签\"\"视频 SEO\"\"无障碍访问\"\"图片替代文字\"时触发。这直接影响 AI 引擎对多媒体内容的理解能力。"
category: "ai-search-geo"
platforms: ["openclaw"]
platform_source: "declared"
repo: "jrr996shujin-png/openclaw-seo-aeo-skills"
repo_url: "https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills"
source: "https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills/blob/HEAD/seo-aeo-diagnostics/multimedia-accessibility/SKILL.md"
raw_source: "https://raw.githubusercontent.com/jrr996shujin-png/openclaw-seo-aeo-skills/HEAD/seo-aeo-diagnostics/multimedia-accessibility/SKILL.md"
ref: "HEAD"
discovered_via: "awesome-seo-agent-skills"
license: "MIT"
stars: 13
collected: "2026-11-09"
---

<!-- OpenClaw skill · jrr996shujin-png/openclaw-seo-aeo-skills · seo-aeo-diagnostics/multimedia-accessibility/SKILL.md · MIT
     Source: https://github.com/jrr996shujin-png/openclaw-seo-aeo-skills/blob/HEAD/seo-aeo-diagnostics/multimedia-accessibility/SKILL.md
     Detected by: declared · Regenerated on every run; edit the upstream skill, not this copy. -->

# 多媒体可访问性诊断模块

本模块负责检查网站多媒体内容对搜索引擎和 AI 引擎的可访问性，满分 10 分。AI 引擎无法"看"图片或"听"视频——它们完全依赖文本替代信息（alt 文本、转录稿）来理解多媒体内容。

## 检查项

### 1. 图片 Alt 文本（6 分）

**检查方法：**
1. 提取所有 `<img>` 标签
2. 分类统计：
   - 有 `alt` 属性且内容非空的图片数
   - `alt` 属性为空或缺失的图片数
   - 装饰性图片（`alt=""` 是正确做法，如分隔线、背景图标）
3. 对有 alt 文本的图片，评估质量：
   - 是否描述性（"蓝色登山鞋" 好于 "image1.jpg"）
   - 是否过长（建议 < 125 字符）
   - 是否堆砌关键词（"SEO 优化 SEO 排名 SEO 工具" 是反模式）
   - 是否与上下文相关
4. 检查 `<figure>` + `<figcaption>` 的使用情况
5. 检查图片是否有 `title` 属性（加分项，非必须）

**评分：**
- 6 分：alt 覆盖率 > 90% + alt 质量高 + 装饰性图片正确标记
- 4 分：alt 覆盖率 70-90%，或覆盖率高但质量一般
- 2 分：alt 覆盖率 40-70%
- 0 分：alt 覆盖率 < 40% 或全部是低质量 alt（如文件名）

**输出格式：**
```
状态：✅/⚠️/❌
图片总数：X 个
Alt 文本覆盖率：X%（Y 个有 alt / Z 个需要 alt）

Alt 文本质量抽样：
| 图片 | Alt 文本 | 评估 |
|------|----------|------|
| logo.png | "公司 Logo" | ✅ 描述性 |
| banner.jpg | "IMG_2024" | ❌ 文件名 |
| icon.svg | "" | ✅ 装饰性，正确留空 |

缺失 alt 的图片：
- src="..." (位于 [上下文])
- ...

figcaption 使用：X 处
修复建议：（具体建议，含改写示例）
```

### 2. 视频转录文字（4 分）

**检查方法：**
1. 检测页面中的视频嵌入：
   - `<video>` 标签
   - YouTube iframe（`youtube.com/embed/`）
   - Vimeo iframe
   - 其他视频平台嵌入
2. 对于 `<video>` 标签，检查：
   - 是否有 `<track kind="captions">` 或 `<track kind="subtitles">`
   - 是否有 WebVTT 或 SRT 字幕文件引用
3. 检查视频附近是否有：
   - 文字转录稿（transcript）
   - 内容摘要段落
   - 时间戳列表
4. 如果页面无视频，此项给满分（不适用 = 通过）

**评分：**
- 4 分：无视频（N/A）或有视频且有字幕/转录稿
- 3 分：有视频，有部分文字描述但无完整转录
- 1 分：有视频，仅有标题无任何文字内容
- 0 分：有视频但无任何文字替代信息

**输出格式：**
```
状态：✅/⚠️/❌（或 N/A 无视频）
视频数量：X 个
视频类型：自托管 / YouTube / Vimeo / 其他

各视频可访问性：
| 视频 | 字幕 | 转录稿 | 摘要 |
|------|------|--------|------|
| [视频1标题/URL] | 有/无 | 有/无 | 有/无 |

修复建议：（具体建议，如添加 YouTube 字幕、在视频下方添加摘要等）
```

## 汇总输出

```
## 多媒体可访问性 — 得分 X/10

| 检查项 | 得分 | 状态 |
|--------|------|------|
| 图片 Alt 文本 | X/6 | ✅/⚠️/❌ |
| 视频转录文字 | X/4 | ✅/⚠️/❌/N/A |

关键发现：（1-2 句总结）
优先修复：（对 AI 可见性影响最大的改进项）
```
