# project-hub Specification

## Purpose
TBD - created by archiving change multi-project-hub. Update Purpose after archive.
## Requirements
### Requirement: 主页展示项目列表
主页 SHALL 以卡片形式展示所有子项目的入口，每张卡片包含项目标题、简短描述和封面图。

#### Scenario: 用户访问主页
- **WHEN** 用户访问根路径 `/`
- **THEN** 页面展示所有子项目的卡片列表，按年份分组显示

#### Scenario: 卡片包含必要信息
- **WHEN** 主页渲染完成
- **THEN** 每张项目卡片 MUST 包含项目标题、简短描述文字，以及可视化的封面区域

### Requirement: 卡片导航到子项目
点击项目卡片 SHALL 跳转到对应子项目页面。

#### Scenario: 点击项目卡片
- **WHEN** 用户点击某个项目卡片
- **THEN** 浏览器导航到该子项目的路径（如 `/2026/cny/`）

### Requirement: 主页按年份分组
主页 SHALL 按年份对项目进行分组展示，年份从新到旧排列。

#### Scenario: 多年份项目展示
- **WHEN** 存在 2026 和 2027 两个年份的项目
- **THEN** 2027 的项目组显示在 2026 之前

### Requirement: 主页为纯静态页面
主页 SHALL 使用纯 HTML/CSS 实现，不依赖任何构建工具或 JS 框架。

#### Scenario: 无构建部署
- **WHEN** 部署主页
- **THEN** 无需执行任何构建步骤，直接作为静态文件提供服务

