## Why

给小朋友做一个面包超人（アンパンマン）填色小游戏，触屏友好，后续可以扩展更多角色。作为仓库的第二个子项目，放在 `2026/anpanman-coloring/` 下。

## What Changes

- **新增填色游戏子项目**：在 `2026/anpanman-coloring/` 下创建完整的填色游戏
- **游戏玩法**：显示角色线稿，底部提供调色板，点击/触摸区域填色
- **角色支持**：首期实现面包超人，架构上支持后续扩展其他角色
- **触屏优化**：面向小朋友，大按钮、大色块、触屏手势友好，强制横屏布局
- **更新主页**：在主页添加此项目的卡片入口

## Capabilities

### New Capabilities

- `coloring-game`: 填色游戏核心玩法 — 线稿渲染、调色板、区域填色、触屏交互
- `character-data`: 角色线稿数据格式和管理，支持多角色扩展

### Modified Capabilities

- `project-hub`: 主页新增面包超人填色游戏的卡片入口

## Impact

### 新增文件

```
2026/anpanman-coloring/
├── index.html
├── style.css
├── script.js
└── characters/         ← 角色线稿数据（SVG 或 path 数据）
    └── anpanman.js
```

### 修改文件

- `index.html`（根目录主页）：添加新项目卡片
