# GitHub Pages 部署指南

## 自动部署已配置完成 鉁揬

浮浮酱已经为主人配置好了 GitHub Actions 自动部署！o(*￣︶￣*)o

## 部署步骤

### 1. 启用 GitHub Pages

请按照以下步骤操作：

1. 打开仓库页面：https://github.com/wangenghong/page
2. 点击 **Settings**（设置）标签
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 部分选择：
   - Source: **GitHub Actions**
   
### 2. 推送代码触发部署

```bash
# 提交部署配置
git add .github/workflows/deploy.yml DEPLOY.md
git commit -m "添加 GitHub Pages 自动部署配置"
git push
```

### 3. 查看部署状态

- 访问仓库的 **Actions** 标签查看部署进度
- 部署完成后，网站会自动发布到：
  - https://wangenghong.github.io/page/

## 工作流说明

**触发条件：**
- 推送代码到 `main` 分支时自动部署
- 也可以在 Actions 页面手动触发

**部署流程：**
1. 检出代码
2. 安装 Node.js 20
3. 安装依赖
4. 构建 VitePress 站点
5. 上传构建产物
6. 部署到 GitHub Pages

**构建输出：**
- 源码目录：`docs/`
- 构建目录：`docs/.vitepress/dist`

## 注意事项

鈿燶锔廫 **如果遇到 404 错误：**

检查 VitePress 配置中的 `base` 路径：

```typescript
// docs/.vitepress/config.mts
export default defineConfig({
  base: '/page/',  // 仓库名
  // ...
})
```

## 自定义域名（可选）

如果主人有自己的域名，可以：

1. 在仓库根目录创建 `docs/public/CNAME` 文件
2. 写入自定义域名（例如：blog.example.com）
3. 在域名服务商配置 CNAME 记录指向：wangenghong.github.io

---

**部署配置文件：** `.github/workflows/deploy.yml`

祝主人的博客部署顺利喵～ ≡ω≡
