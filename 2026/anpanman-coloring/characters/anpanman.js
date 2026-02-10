// 面包超人（アンパンマン）6 种表情
// 参考 anpanman_1.svg 精确比例，viewBox 0 0 500 500
// 脸 r=218, 脸颊 r=75 > 鼻子 r=56, 三个红球一排

function baseRegions() {
    return [
        { id: "face", type: "circle", attrs: { cx: 250, cy: 255, r: 218 }, defaultColor: "#F4A683", label: "脸" },
        { id: "cheek-left", type: "circle", attrs: { cx: 128, cy: 305, r: 75 }, defaultColor: "#E03030", label: "左脸颊" },
        { id: "cheek-right", type: "circle", attrs: { cx: 372, cy: 305, r: 75 }, defaultColor: "#E03030", label: "右脸颊" },
        { id: "nose", type: "circle", attrs: { cx: 250, cy: 300, r: 56 }, defaultColor: "#E03030", label: "鼻子" },
        { id: "cheek-left-hl", type: "circle", attrs: { cx: 108, cy: 282, r: 10 }, defaultColor: "#FFFFFF", label: "左颊高光" },
        { id: "cheek-right-hl", type: "circle", attrs: { cx: 352, cy: 282, r: 10 }, defaultColor: "#FFFFFF", label: "右颊高光" },
        { id: "nose-hl", type: "circle", attrs: { cx: 236, cy: 280, r: 8 }, defaultColor: "#FFFFFF", label: "鼻子高光" },
    ];
}

function baseOutlines() {
    return [
        { type: "circle", attrs: { cx: 250, cy: 255, r: 218 } },
        { type: "circle", attrs: { cx: 128, cy: 305, r: 75 } },
        { type: "circle", attrs: { cx: 372, cy: 305, r: 75 } },
        { type: "circle", attrs: { cx: 250, cy: 300, r: 56 } },
    ];
}

function baseBrows() {
    return [
        { type: "path", attrs: { d: "M 140 145 Q 172 108 204 145", "stroke-linecap": "round" } },
        { type: "path", attrs: { d: "M 296 145 Q 328 108 360 145", "stroke-linecap": "round" } },
    ];
}

// 参考色在前，共 20 色
var PALETTE = [
    "#F4A683",  // 肤色（脸）
    "#E03030",  // 红（鼻子/脸颊）
    "#8B1A1A",  // 深红（嘴巴）
    "#1A1A1A",  // 黑（眼睛）
    "#FFFFFF",  // 白（高光）
    "#5DADE2",  // 蓝
    "#FF69B4",  // 粉
    "#F39C12",  // 橙
    "#E67E22",  // 深橙
    "#F1C40F",  // 黄
    "#F9E79F",  // 浅黄
    "#2ECC71",  // 绿
    "#1ABC9C",  // 青绿
    "#2980B9",  // 深蓝
    "#8E44AD",  // 紫
    "#BB8FCE",  // 浅紫
    "#95A5A6",  // 灰
    "#8B4513",  // 棕
    "#D2B48C",  // 浅棕
    "#000000",  // 纯黑
];

// ① 惊讶 — 大圆眼 + O型嘴
var anpanman_surprised = {
    name: "惊讶",
    emoji: "😮",
    viewBox: "0 0 500 500",
    palette: PALETTE,
    regions: baseRegions().concat([
        { id: "eye-left", type: "ellipse", attrs: { cx: 172, cy: 205, rx: 18, ry: 26 }, defaultColor: "#1A1A1A", label: "左眼" },
        { id: "eye-right", type: "ellipse", attrs: { cx: 328, cy: 205, rx: 18, ry: 26 }, defaultColor: "#1A1A1A", label: "右眼" },
        { id: "eye-left-hl", type: "circle", attrs: { cx: 165, cy: 197, r: 6 }, defaultColor: "#FFFFFF", label: "左眼高光" },
        { id: "eye-right-hl", type: "circle", attrs: { cx: 321, cy: 197, r: 6 }, defaultColor: "#FFFFFF", label: "右眼高光" },
        { id: "mouth", type: "ellipse", attrs: { cx: 250, cy: 400, rx: 24, ry: 28 }, defaultColor: "#8B1A1A", label: "嘴巴" },
    ]),
    outlines: baseOutlines().concat(baseBrows()).concat([
        { type: "ellipse", attrs: { cx: 172, cy: 205, rx: 18, ry: 26 } },
        { type: "ellipse", attrs: { cx: 328, cy: 205, rx: 18, ry: 26 } },
        { type: "ellipse", attrs: { cx: 250, cy: 400, rx: 24, ry: 28 } },
    ])
};

// ② 开心 — 正常眼 + 半椭圆微笑（参考原图）
var anpanman_happy = {
    name: "开心",
    emoji: "😄",
    viewBox: "0 0 500 500",
    palette: PALETTE,
    regions: baseRegions().concat([
        { id: "eye-left", type: "ellipse", attrs: { cx: 172, cy: 205, rx: 16, ry: 21 }, defaultColor: "#1A1A1A", label: "左眼" },
        { id: "eye-right", type: "ellipse", attrs: { cx: 328, cy: 205, rx: 16, ry: 21 }, defaultColor: "#1A1A1A", label: "右眼" },
        { id: "eye-left-hl", type: "circle", attrs: { cx: 166, cy: 198, r: 5 }, defaultColor: "#FFFFFF", label: "左眼高光" },
        { id: "eye-right-hl", type: "circle", attrs: { cx: 322, cy: 198, r: 5 }, defaultColor: "#FFFFFF", label: "右眼高光" },
        { id: "mouth", type: "path", attrs: { d: "M 150 385 A 100 48 0 0 0 350 385 Z" }, defaultColor: "#8B1A1A", label: "嘴巴" },
    ]),
    outlines: baseOutlines().concat(baseBrows()).concat([
        { type: "ellipse", attrs: { cx: 172, cy: 205, rx: 16, ry: 21 } },
        { type: "ellipse", attrs: { cx: 328, cy: 205, rx: 16, ry: 21 } },
        { type: "path", attrs: { d: "M 150 385 A 100 48 0 0 0 350 385 Z" } },
    ])
};

// ③ 伤心 — 八字眉 + 泪滴 + 瘪嘴
var anpanman_sad = {
    name: "伤心",
    emoji: "😢",
    viewBox: "0 0 500 500",
    palette: PALETTE,
    regions: baseRegions().concat([
        { id: "eye-left", type: "ellipse", attrs: { cx: 172, cy: 205, rx: 16, ry: 21 }, defaultColor: "#1A1A1A", label: "左眼" },
        { id: "eye-right", type: "ellipse", attrs: { cx: 328, cy: 205, rx: 16, ry: 21 }, defaultColor: "#1A1A1A", label: "右眼" },
        { id: "eye-left-hl", type: "circle", attrs: { cx: 166, cy: 198, r: 5 }, defaultColor: "#FFFFFF", label: "左眼高光" },
        { id: "eye-right-hl", type: "circle", attrs: { cx: 322, cy: 198, r: 5 }, defaultColor: "#FFFFFF", label: "右眼高光" },
        { id: "tear-left", type: "path", attrs: { d: "M 172 228 Q 166 252 172 276 Q 178 252 172 228 Z" }, defaultColor: "#5DADE2", label: "左泪" },
        { id: "tear-right", type: "path", attrs: { d: "M 328 228 Q 322 252 328 276 Q 334 252 328 228 Z" }, defaultColor: "#5DADE2", label: "右泪" },
        { id: "mouth", type: "path", attrs: { d: "M 190 400 Q 250 378 310 400 L 305 408 Q 250 388 195 408 Z" }, defaultColor: "#8B1A1A", label: "嘴巴" },
    ]),
    outlines: baseOutlines().concat([
        // 八字眉
        { type: "path", attrs: { d: "M 140 130 Q 172 155 204 150", "stroke-linecap": "round" } },
        { type: "path", attrs: { d: "M 360 130 Q 328 155 296 150", "stroke-linecap": "round" } },
        { type: "ellipse", attrs: { cx: 172, cy: 205, rx: 16, ry: 21 } },
        { type: "ellipse", attrs: { cx: 328, cy: 205, rx: 16, ry: 21 } },
        { type: "path", attrs: { d: "M 190 400 Q 250 378 310 400" } },
    ])
};

// ④ 大笑 — 弯弯眯眼 + 大张嘴
var anpanman_laugh = {
    name: "大笑",
    emoji: "😆",
    viewBox: "0 0 500 500",
    palette: PALETTE,
    regions: baseRegions().concat([
        { id: "eye-left", type: "path", attrs: { d: "M 140 208 Q 172 186 204 208 L 200 214 Q 172 196 144 214 Z" }, defaultColor: "#1A1A1A", label: "左眼" },
        { id: "eye-right", type: "path", attrs: { d: "M 296 208 Q 328 186 360 208 L 356 214 Q 328 196 300 214 Z" }, defaultColor: "#1A1A1A", label: "右眼" },
        { id: "mouth", type: "path", attrs: { d: "M 150 385 A 100 48 0 0 0 350 385 Z" }, defaultColor: "#8B1A1A", label: "嘴巴" },
    ]),
    outlines: baseOutlines().concat(baseBrows()).concat([
        { type: "path", attrs: { d: "M 140 208 Q 172 186 204 208" } },
        { type: "path", attrs: { d: "M 296 208 Q 328 186 360 208" } },
        { type: "path", attrs: { d: "M 150 385 A 100 48 0 0 0 350 385 Z" } },
    ])
};

// ⑤ 嘻嘻 — 小眼 + 大嘴笑
var anpanman_grin = {
    name: "嘻嘻",
    emoji: "😁",
    viewBox: "0 0 500 500",
    palette: PALETTE,
    regions: baseRegions().concat([
        { id: "eye-left", type: "ellipse", attrs: { cx: 172, cy: 205, rx: 13, ry: 17 }, defaultColor: "#1A1A1A", label: "左眼" },
        { id: "eye-right", type: "ellipse", attrs: { cx: 328, cy: 205, rx: 13, ry: 17 }, defaultColor: "#1A1A1A", label: "右眼" },
        { id: "eye-left-hl", type: "circle", attrs: { cx: 167, cy: 200, r: 4 }, defaultColor: "#FFFFFF", label: "左眼高光" },
        { id: "eye-right-hl", type: "circle", attrs: { cx: 323, cy: 200, r: 4 }, defaultColor: "#FFFFFF", label: "右眼高光" },
        { id: "mouth", type: "path", attrs: { d: "M 150 385 A 100 48 0 0 0 350 385 Z" }, defaultColor: "#8B1A1A", label: "嘴巴" },
    ]),
    outlines: baseOutlines().concat(baseBrows()).concat([
        { type: "ellipse", attrs: { cx: 172, cy: 205, rx: 13, ry: 17 } },
        { type: "ellipse", attrs: { cx: 328, cy: 205, rx: 13, ry: 17 } },
        { type: "path", attrs: { d: "M 150 385 A 100 48 0 0 0 350 385 Z" } },
    ])
};

// ⑥ 眨眼 — 左眼正常 + 右眼弯弯 + 微笑
var anpanman_wink = {
    name: "眨眼",
    emoji: "😉",
    viewBox: "0 0 500 500",
    palette: PALETTE,
    regions: baseRegions().concat([
        { id: "eye-left", type: "ellipse", attrs: { cx: 172, cy: 205, rx: 16, ry: 21 }, defaultColor: "#1A1A1A", label: "左眼" },
        { id: "eye-left-hl", type: "circle", attrs: { cx: 166, cy: 198, r: 5 }, defaultColor: "#FFFFFF", label: "左眼高光" },
        { id: "eye-right", type: "path", attrs: { d: "M 296 208 Q 328 190 360 208 L 356 214 Q 328 200 300 214 Z" }, defaultColor: "#1A1A1A", label: "右眼" },
        { id: "mouth", type: "path", attrs: { d: "M 158 385 A 92 44 0 0 0 342 385 Z" }, defaultColor: "#8B1A1A", label: "嘴巴" },
    ]),
    outlines: baseOutlines().concat(baseBrows()).concat([
        { type: "ellipse", attrs: { cx: 172, cy: 205, rx: 16, ry: 21 } },
        { type: "path", attrs: { d: "M 296 208 Q 328 190 360 208" } },
        { type: "path", attrs: { d: "M 158 385 A 92 44 0 0 0 342 385 Z" } },
    ])
};

var ALL_CHARACTERS = [
    anpanman_surprised,
    anpanman_happy,
    anpanman_sad,
    anpanman_laugh,
    anpanman_grin,
    anpanman_wink,
];
