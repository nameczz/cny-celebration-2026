## Why

当前仓库只有一个单页 HTML 项目（CNY 2026 新春庆祝页面）。随着后续会有更多小项目（可能是纯 HTML，也可能是框架项目），需要把仓库重构为多项目集合，提供统一的主页入口和目录路由。

## What Changes

- **新增主页**：根目录 `index.html` 作为项目列表页，展示所有子项目（卡片形式，带标题、描述、封面）
- **迁移现有项目**：将现有 CNY 2026 页面（`index.html`、`style.css`、`script.js`、`fonts/`、`music/`）移入 `2026/cny/` 子目录
- **目录路由**：按年份组织子项目（如 `/2026/cny/`、`/2027/xxx/`），无需 SPA 路由框架
- **Vercel 部署配置**：更新 `vercel.json` 支持多项目结构和混合构建
- **根目录构建支持**：`package.json` 增加统一构建脚本，支持未来框架项目的构建

## Capabilities

### New Capabilities

- `project-hub`: 主页项目列表页，展示所有子项目的入口，支持卡片展示和导航
- `multi-project-structure`: 多项目目录结构和构建体系，支持纯 HTML 与框架项目混合部署

### Modified Capabilities

（无现有 spec 需要修改）

## Impact

### 目录结构变更

```
/
├── index.html              ← 新主页
├── style.css               ← 主页样式
├── package.json            ← 更新构建脚本
├── vercel.json             ← 更新部署配置
├── 2026/
│   └── cny/                ← 现有项目迁入
│       ├── index.html
│       ├── style.css
│       ├── script.js
│       ├── fonts/
│       └── music/
├── 2027/                   ← 明年的项目
│   └── ...
```

### Vercel 配置方案

#### 纯静态项目（无需构建）

```json
{
  "version": 2,
  "builds": [
    { "src": "**/*.html", "use": "@vercel/static" },
    { "src": "**/*.css", "use": "@vercel/static" },
    { "src": "**/*.js", "use": "@vercel/static" },
    { "src": "**/fonts/**", "use": "@vercel/static" },
    { "src": "**/music/**", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/(\\d{4})/([^/]+)/?$", "dest": "/$1/$2/index.html" },
    { "src": "/(.*)", "dest": "/$1" }
  ]
}
```

#### 混合项目（有框架项目需构建时）

当某个子项目需要构建（如 Vite/React），在根目录 `package.json` 添加构建脚本：

```json
{
  "scripts": {
    "build": "npm run build:all",
    "build:all": "for dir in */*/; do [ -f \"$dir/package.json\" ] && (cd \"$dir\" && npm install && npm run build) || true; done"
  }
}
```

Vercel 设置：
- **Build Command**: `npm run build`（如果所有项目都是纯静态，可以留空）
- **Output Directory**: 留空（使用根目录）
- **Install Command**: `npm install`

框架项目约定：构建输出到自己目录内（如 `2027/my-app/dist/`），Vercel 路由配置匹配对应路径即可。

### 破坏性变更

- 原来的根路径 `/` 将从 CNY 2026 页面变为主页列表页
- CNY 2026 页面的 URL 从 `/` 变为 `/2026/cny/`
- **BREAKING**：如果有外部链接指向根路径，需要更新
