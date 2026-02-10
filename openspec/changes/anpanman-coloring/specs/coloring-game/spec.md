## ADDED Requirements

### Requirement: 横屏布局
游戏 SHALL 强制横屏布局。竖屏时通过 CSS rotation 旋转页面，或提示用户旋转手机。

#### Scenario: 手机竖屏访问
- **WHEN** 用户在竖屏状态打开游戏
- **THEN** 页面 MUST 自动旋转为横屏布局显示

### Requirement: 线稿渲染
游戏 SHALL 使用 SVG 渲染角色线稿，每个可填色区域是一个独立的 SVG 元素。

#### Scenario: 加载角色线稿
- **WHEN** 游戏页面加载完成
- **THEN** 页面左侧 MUST 显示当前角色的完整线稿，所有区域初始为白色/无填充

### Requirement: 调色板
游戏 SHALL 在右侧提供调色板，包含适合当前角色的预设颜色。

#### Scenario: 显示调色板
- **WHEN** 游戏页面加载完成
- **THEN** 右侧 MUST 显示一组大色块按钮，每个色块尺寸足够小朋友手指点击

#### Scenario: 选择颜色
- **WHEN** 用户点击调色板中的某个颜色
- **THEN** 该颜色 MUST 高亮显示为当前选中状态

### Requirement: 区域填色
用户 SHALL 能通过点击/触摸线稿区域来填充颜色。

#### Scenario: 填色操作
- **WHEN** 用户已选中一个颜色，并点击线稿中的某个区域
- **THEN** 该区域 MUST 立即填充为选中的颜色

#### Scenario: 未选色时点击
- **WHEN** 用户未选择任何颜色就点击线稿区域
- **THEN** 该区域不发生变化

### Requirement: 撤销操作
游戏 SHALL 支持撤销上一步填色操作。

#### Scenario: 撤销填色
- **WHEN** 用户点击撤销按钮
- **THEN** 最近一次填色操作 MUST 被回退，区域恢复为之前的颜色

#### Scenario: 无操作时撤销
- **WHEN** 没有任何填色记录时点击撤销
- **THEN** 不发生任何变化

### Requirement: 完成庆祝
当所有区域都填色后 SHALL 展示庆祝效果。

#### Scenario: 填色完成
- **WHEN** 线稿所有区域都已被填色
- **THEN** 页面 MUST 展示庆祝动画或提示

### Requirement: 触屏友好
所有可交互元素 SHALL 足够大，适合小朋友操作。

#### Scenario: 触摸目标尺寸
- **WHEN** 渲染调色板和工具按钮
- **THEN** 每个可点击元素的最小触摸区域 MUST 不小于 44x44 像素
