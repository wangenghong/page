# 记事本

个人技术博客，使用 VitePress 构建。

**网址**：[https://wangenghong.github.io](https://wangenghong.github.io)

## ✨ 功能特性

- 📝 Markdown 写作
- 🌓 深色/浅色主题切换
- 🔍 全文搜索功能
- 💬 Giscus 评论系统
- 🏷️ 分类和标签系统
- 📱 响应式设计
- ⚡️ 快速加载

## 🚀 本地开发

### 前置要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 查看网站。

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📝 写作指南

### 创建新文章

1. 在 `docs/posts/` 目录下创建新的 `.md` 文件
2. 添加 frontmatter（可选）：

```markdown
---
title: 文章标题
date: 2026-09-12
categories:
  - 技术
tags:
  - VitePress
  - Vue
---

# 文章标题

文章内容...
```

3. 更新 `docs/posts/index.md` 中的文章列表
4. 如有新分类或标签，更新对应的索引页面

### 目录结构

```
docs/
├── .vitepress/
│   ├── config.mts          # VitePress 配置
│   └── theme/
│       ├── custom.css      # 自定义样式
│       ├── index.ts        # 主题入口
│       └── components/     # 自定义组件
├── posts/                  # 文章目录
├── categories/             # 分类页面
├── tags/                   # 标签页面
├── about.md                # 关于页面
└── index.md                # 首页
```

## 💬 配置评论系统

本站使用 Giscus 评论系统。要启用评论功能：

1. 前往 [giscus.app](https://giscus.app/zh-CN)
2. 按照指引配置你的 GitHub 仓库
3. 获取 `data-repo-id` 和 `data-category-id`
4. 编辑 `docs/.vitepress/theme/components/GiscusComments.vue`
5. 替换 `YOUR_REPO_ID` 和 `YOUR_CATEGORY_ID` 为实际值

## 📦 部署

本站使用 GitHub Actions 自动部署到 GitHub Pages。

每次推送到 `main` 分支时会自动触发构建和部署。

### 首次部署设置

1. 在 GitHub 仓库设置中：
   - Settings → Pages
   - Source 选择 "GitHub Actions"

2. 推送代码到 `main` 分支

3. 等待 Actions 工作流完成

4. 访问 `https://wangenghong.github.io`

## 🎨 自定义

### 修改主题色

编辑 `docs/.vitepress/theme/custom.css` 中的 CSS 变量：

```css
:root {
  --vp-c-brand-1: #38bdf8;
  --vp-c-brand-2: #0ea5e9;
  --vp-c-brand-3: #0284c7;
}
```

### 修改网站信息

编辑 `docs/.vitepress/config.mts` 修改标题、描述等信息。

## 📄 许可证

MIT License

---

构建于 [VitePress](https://vitepress.dev/)
