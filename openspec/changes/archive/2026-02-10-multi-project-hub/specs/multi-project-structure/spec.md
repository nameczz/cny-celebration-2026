## ADDED Requirements

### Requirement: 按年份目录组织子项目
子项目 SHALL 按 `<year>/<name>/` 的目录结构组织，年份为四位数字，名称为 kebab-case。

#### Scenario: 现有项目迁移
- **WHEN** 将现有 CNY 2026 项目迁入新结构
- **THEN** 所有文件（index.html、style.css、script.js、fonts/、music/）MUST 位于 `2026/cny/` 目录下

#### Scenario: 新增子项目
- **WHEN** 添加一个 2027 年的新项目
- **THEN** 该项目 MUST 放在 `2027/<name>/` 目录下

### Requirement: 子项目独立运行
每个子项目 SHALL 是完全独立的，拥有自己的 HTML、CSS、JS 和资源文件，不依赖其他子项目。

#### Scenario: 子项目资源自包含
- **WHEN** 访问子项目页面（如 `/2026/cny/`）
- **THEN** 页面所有资源（样式、脚本、字体、音频）MUST 从子项目自身目录加载，使用相对路径

### Requirement: 目录路由访问子项目
子项目 SHALL 通过目录路径直接访问，无需 SPA 路由框架。

#### Scenario: 访问子项目
- **WHEN** 用户访问 `/2026/cny/`
- **THEN** 服务器返回 `2026/cny/index.html`

#### Scenario: 省略尾部斜杠
- **WHEN** 用户访问 `/2026/cny`（无尾部斜杠）
- **THEN** 服务器 MUST 正确返回 `2026/cny/index.html`

### Requirement: Vercel 部署支持多项目结构
`vercel.json` SHALL 配置路由规则，支持按年份目录访问子项目。

#### Scenario: Vercel 路由规则
- **WHEN** 部署到 Vercel
- **THEN** 路由规则 MUST 将 `/<year>/<name>/` 路径映射到对应目录的 `index.html`

### Requirement: 支持纯 HTML 与框架项目混合
目录结构 SHALL 同时支持纯 HTML 项目和需要构建的框架项目。

#### Scenario: 纯 HTML 项目无需构建
- **WHEN** 子项目目录下没有 `package.json`
- **THEN** 构建脚本 MUST 跳过该目录，直接作为静态文件部署

#### Scenario: 框架项目自动构建
- **WHEN** 子项目目录下存在 `package.json` 且定义了 `build` 脚本
- **THEN** 根目录构建脚本 MUST 进入该目录执行 `npm install && npm run build`
