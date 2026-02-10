## ADDED Requirements

### Requirement: 角色数据格式
每个角色 SHALL 以独立 JS 文件定义，包含 SVG 数据和元信息。

#### Scenario: 角色数据结构
- **WHEN** 加载一个角色数据文件
- **THEN** 数据 MUST 包含：角色名称、SVG viewBox、区域列表（每个区域有 id、SVG path、参考颜色、标签）

### Requirement: 角色文件独立
每个角色 SHALL 是一个独立文件，存放在 `characters/` 目录下。

#### Scenario: 新增角色
- **WHEN** 需要添加新角色
- **THEN** 只需在 `characters/` 目录下添加一个新的 JS 文件，无需修改其他代码

### Requirement: 首期角色 — 面包超人
首期 SHALL 包含面包超人（アンパンマン）角色，包含脸、鼻子、脸颊、嘴巴等可填色区域。

#### Scenario: 面包超人线稿
- **WHEN** 加载面包超人角色
- **THEN** 线稿 MUST 包含可识别的面包超人特征区域，每个区域可独立填色

### Requirement: 角色提供预设调色板
每个角色数据 SHALL 包含推荐的调色板颜色列表。

#### Scenario: 加载角色调色板
- **WHEN** 选择一个角色
- **THEN** 调色板 MUST 显示该角色数据中定义的推荐颜色
