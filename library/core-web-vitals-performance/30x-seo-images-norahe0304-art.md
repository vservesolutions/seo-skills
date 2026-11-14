---
name: "30x-seo-images"
description: "图片SEO与性能优化分析。检查alt文本、文件大小、格式、响应式图片、 懒加载和CLS预防。当用户说\"图片优化\"、\"alt文本\"、\"图片SEO\"、 \"图片大小\"或\"图片审核\"时使用。"
category: "core-web-vitals-performance"
platforms: ["claude-code"]
platform_source: "declared+detected"
repo: "norahe0304-art/30x-seo-cn"
repo_url: "https://github.com/norahe0304-art/30x-seo-cn"
source: "https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-images/SKILL.md"
raw_source: "https://raw.githubusercontent.com/norahe0304-art/30x-seo-cn/HEAD/skills/30x-seo-images/SKILL.md"
ref: "HEAD"
discovered_via: "github-search"
license: "MIT"
stars: 1
collected: "2026-11-14"
---

<!-- Claude Code skill · norahe0304-art/30x-seo-cn · skills/30x-seo-images/SKILL.md · MIT
     Source: https://github.com/norahe0304-art/30x-seo-cn/blob/HEAD/skills/30x-seo-images/SKILL.md
     Detected by: declared+detected · Regenerated on every run; edit the upstream skill, not this copy. -->

# 图片优化分析

## 检查项

### Alt 文本
- 所有 `<img>` 元素都应有 alt 属性（装饰性图片除外：`role="presentation"`）
- 描述性：描述图片内容，而非 "image.jpg" 或 "photo"
- 自然地包含相关关键词，不要堆砌关键词
- 长度：10-125 个字符

**好的示例：**
- "专业水管工修理厨房水龙头"
- "红色2024款丰田凯美瑞轿车正面图"
- "现代办公室会议室的团队会议"

**差的示例：**
- "image.jpg"（文件名，非描述）
- "水管工 水管 水管服务"（关键词堆砌）
- "点击这里"（非描述性）

### 文件大小

**按图片类别分级阈值：**

| 图片类别 | 目标 | 警告 | 严重 |
|----------|------|------|------|
| 缩略图 | < 50KB | > 100KB | > 200KB |
| 内容图片 | < 100KB | > 200KB | > 500KB |
| 首屏/横幅图片 | < 200KB | > 300KB | > 700KB |

建议在不损失质量的情况下压缩至目标阈值。

### 格式
| 格式 | 浏览器支持 | 使用场景 |
|------|------------|----------|
| WebP | 97%+ | 默认推荐 |
| AVIF | 92%+ | 最佳压缩，较新 |
| JPEG | 100% | 照片备选 |
| PNG | 100% | 带透明度的图形 |
| SVG | 100% | 图标、logo、插图 |

推荐使用 WebP/AVIF 替代 JPEG/PNG。检查是否使用带格式回退的 `<picture>` 元素。

#### 推荐的 `<picture>` 元素模式

使用渐进增强，优先使用最高效的格式：

```html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="描述性alt文本" width="800" height="600" loading="lazy" decoding="async">
</picture>
```

浏览器将使用第一个支持的格式。当前浏览器支持率：AVIF 93.8%，WebP 95.3%。

#### JPEG XL — 新兴格式

2025年11月，Google 的 Chromium 团队撤销了2022年的决定，宣布将使用 Rust 解码器恢复 Chrome 中的 JPEG XL 支持。实现已功能完整但尚未进入 Chrome 稳定版。JPEG XL 提供无损 JPEG 重压缩（约20%节省且零质量损失）和有竞争力的有损压缩。目前尚不适合网页部署，但值得关注未来采用情况。

### 响应式图片
- 使用 `srcset` 属性提供多种尺寸
- `sizes` 属性匹配布局断点
- 为设备像素比提供适当分辨率

```html
<img
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
  alt="描述"
>
```

### 懒加载
- 首屏下方图片使用 `loading="lazy"`
- 首屏/主图不要懒加载（影响 LCP）
- 检查原生 vs JavaScript 懒加载

```html
<!-- 首屏下方 - 懒加载 -->
<img src="photo.jpg" loading="lazy" alt="描述">

<!-- 首屏 - 急切加载（默认） -->
<img src="hero.jpg" alt="主图">
```

### LCP 图片使用 `fetchpriority="high"`

为主图/LCP图片添加 `fetchpriority="high"` 以在浏览器网络队列中优先下载：

```html
<img src="hero.webp" fetchpriority="high" alt="主图描述" width="1200" height="630">
```

**关键：** 不要对首屏/LCP 图片使用懒加载。对 LCP 图片使用 `loading="lazy"` 会直接损害 LCP 分数。仅对首屏下方图片使用 `loading="lazy"`。

### 非 LCP 图片使用 `decoding="async"`

为非 LCP 图片添加 `decoding="async"` 防止图片解码阻塞主线程：

```html
<img src="photo.webp" alt="描述" width="600" height="400" loading="lazy" decoding="async">
```

### CLS 预防
- 所有 `<img>` 元素设置 `width` 和 `height` 属性
- 可用 CSS `aspect-ratio` 作为替代
- 标记没有尺寸的图片

```html
<!-- 好 - 设置了尺寸 -->
<img src="photo.jpg" width="800" height="600" alt="描述">

<!-- 好 - CSS 宽高比 -->
<img src="photo.jpg" style="aspect-ratio: 4/3" alt="描述">

<!-- 差 - 没有尺寸 -->
<img src="photo.jpg" alt="描述">
```

### 文件名
- 描述性：`蓝色跑步鞋.webp` 而非 `IMG_1234.jpg`
- 使用连字符分隔、小写、无特殊字符
- 包含相关关键词

### CDN 使用
- 检查图片是否从 CDN 提供（不同域名、CDN 响应头）
- 对图片密集型网站推荐使用 CDN
- 检查边缘缓存响应头

## 输出

### 图片审核摘要

| 指标 | 状态 | 数量 |
|------|------|------|
| 图片总数 | - | XX |
| 缺少 Alt 文本 | ❌ | XX |
| 过大（>200KB） | ⚠️ | XX |
| 格式错误 | ⚠️ | XX |
| 无尺寸 | ⚠️ | XX |
| 未懒加载 | ⚠️ | XX |

### 优先优化列表

按文件大小影响排序（节省最多的优先）：

| 图片 | 当前大小 | 格式 | 问题 | 预估节省 |
|------|----------|------|------|----------|
| ... | ... | ... | ... | ... |

### 建议
1. 将 X 张图片转换为 WebP 格式（预估节省 XX KB）
2. 为 X 张图片添加 alt 文本
3. 为 X 张图片添加尺寸
4. 为 X 张首屏下方图片启用懒加载
5. 压缩 X 张过大图片

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
