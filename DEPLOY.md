# 部署指南

本指南将帮助您将博客部署到 GitHub Pages。

## 📋 前置准备

1. **GitHub 账号**：确保已登录 GitHub
2. **Git 已安装**：在本地安装 Git
3. **项目文件**：确保所有文件已准备好

## 🚀 部署步骤

### 第一步：创建 GitHub 仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角的 `+` → `New repository`
3. **仓库名称必须是**：`wangenghong.github.io`（严格按此格式）
4. 设置为 `Public`（公开）
5. **不要**勾选 "Add a README file"
6. 点击 `Create repository`

### 第二步：初始化并推送代码

在当前项目目录下执行以下命令：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 创建首次提交
git commit -m "Initial commit: VitePress blog setup"

# 设置主分支名为 main
git branch -M main

# 添加远程仓库
git remote add origin https://github.com/wangenghong/wangenghong.github.io.git

# 推送到 GitHub
git push -u origin main
```

### 第三步：配置 GitHub Pages

1. 进入仓库页面：`https://github.com/wangenghong/wangenghong.github.io`
2. 点击 `Settings`（设置）
3. 左侧菜单选择 `Pages`
4. 在 `Build and deployment` 部分：
   - **Source** 选择：`GitHub Actions`
5. 保存设置

### 第四步：等待自动部署

1. 回到仓库首页，点击 `Actions` 标签
2. 查看工作流运行状态（会自动触发）
3. 等待绿色的 ✓ 标记（大约 2-5 分钟）

### 第五步：访问网站

部署完成后，访问：**https://wangenghong.github.io**

🎉 恭喜！您的博客已成功上线！

## 📝 后续更新

每次修改内容后，只需执行：

```bash
git add .
git commit -m "描述你的修改"
git push
```

GitHub Actions 会自动重新构建和部署。

## ⚠️ 常见问题

### 1. 推送代码时要求输入密码

GitHub 已不再支持密码认证，需要使用 Personal Access Token：

1. 访问 [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. 点击 `Generate new token (classic)`
3. 勾选 `repo` 权限
4. 生成后复制 Token
5. 推送时使用 Token 作为密码

**或者使用 SSH：**

```bash
git remote set-url origin git@github.com:wangenghong/wangenghong.github.io.git
```

### 2. Actions 工作流失败

- 检查 `Actions` 标签中的错误日志
- 确保 `package.json` 中的依赖正确
- 确认 Pages 设置中 Source 为 `GitHub Actions`

### 3. 网站显示 404

- 等待 5-10 分钟（首次部署需要时间）
- 检查 Actions 是否成功运行
- 确认仓库名为 `用户名.github.io`

### 4. 样式或功能异常

- 清除浏览器缓存（Ctrl+Shift+R 或 Cmd+Shift+R）
- 检查浏览器控制台错误信息

## 🔧 配置评论系统（可选）

1. 访问 [giscus.app/zh-CN](https://giscus.app/zh-CN)
2. 输入仓库：`wangenghong/wangenghong.github.io`
3. 启用 GitHub Discussions（仓库 Settings → General → Features）
4. 按照 giscus 页面指引获取配置代码
5. 复制 `data-repo-id` 和 `data-category-id`
6. 编辑 `docs/.vitepress/theme/components/GiscusComments.vue`
7. 替换占位符为实际值
8. 推送更新

## 📞 需要帮助？

- [VitePress 官方文档](https://vitepress.dev/)
- [GitHub Pages 文档](https://docs.github.com/pages)
- [Giscus 配置指南](https://giscus.app/zh-CN)

---

祝您使用愉快！✨
