// ===== 状态 =====
var selectedColor = null;
var undoStack = [];
var currentIndex = 0;
var character = null;

// ===== 初始化 =====
function init() {
    tryLockOrientation();
    renderCharStrip();
    selectCharacter(0);

    document.getElementById('undo-btn').addEventListener('click', undo);
    document.getElementById('eraser-btn').addEventListener('click', selectEraser);
    document.getElementById('replay-btn').addEventListener('click', replay);
}

function tryLockOrientation() {
    try {
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('landscape').catch(function() {});
        }
    } catch (e) {}
}

// ===== 顶部角色缩略图 =====
function renderCharStrip() {
    var strip = document.getElementById('char-strip');
    strip.innerHTML = '';
    ALL_CHARACTERS.forEach(function(char, index) {
        var btn = document.createElement('button');
        btn.className = 'char-thumb';

        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', char.viewBox);
        svg.style.pointerEvents = 'none';

        char.regions.forEach(function(region) {
            var el = createSVGElement(region.type, region.attrs);
            el.setAttribute('fill', '#fff');
            el.setAttribute('stroke', '#1a1a1a');
            el.setAttribute('stroke-width', '4');
            svg.appendChild(el);
        });
        if (char.outlines) {
            char.outlines.forEach(function(outline) {
                var el = createSVGElement(outline.type, outline.attrs);
                el.setAttribute('fill', 'none');
                el.setAttribute('stroke', '#1a1a1a');
                el.setAttribute('stroke-width', '3');
                svg.appendChild(el);
            });
        }

        btn.appendChild(svg);
        btn.addEventListener('click', (function(i) {
            return function() { selectCharacter(i); };
        })(index));
        strip.appendChild(btn);
    });
}

function selectCharacter(index) {
    currentIndex = index;
    character = ALL_CHARACTERS[index];
    selectedColor = null;
    undoStack = [];

    var thumbs = document.querySelectorAll('.char-thumb');
    for (var i = 0; i < thumbs.length; i++) {
        if (i === index) {
            thumbs[i].classList.add('selected');
        } else {
            thumbs[i].classList.remove('selected');
        }
    }

    renderSVG(character);
    renderPalette(character.palette);
}

// ===== 渲染 SVG =====
function renderSVG(char) {
    var svg = document.getElementById('coloring-svg');
    svg.setAttribute('viewBox', char.viewBox);
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    char.regions.forEach(function(region) {
        var el = createSVGElement(region.type, region.attrs);
        el.setAttribute('data-id', region.id);
        el.setAttribute('fill', '#FFFFFF');
        el.setAttribute('stroke', '#1a1a1a');
        el.setAttribute('stroke-width', '4.5');
        el.style.cursor = 'pointer';

        // 直接给每个区域绑定点击事件
        el.addEventListener('click', function() {
            if (!selectedColor) return;
            fillRegion(el, selectedColor);
        });

        svg.appendChild(el);
    });

    if (char.outlines) {
        char.outlines.forEach(function(outline) {
            var el = createSVGElement(outline.type, outline.attrs);
            el.setAttribute('fill', 'none');
            el.setAttribute('stroke', '#1a1a1a');
            el.setAttribute('stroke-width', '4.5');
            el.style.pointerEvents = 'none';
            svg.appendChild(el);
        });
    }
}

function createSVGElement(type, attrs) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', type);
    var keys = Object.keys(attrs);
    for (var i = 0; i < keys.length; i++) {
        el.setAttribute(keys[i], attrs[keys[i]]);
    }
    return el;
}

// ===== 调色板 =====
function renderPalette(colors) {
    var palette = document.getElementById('palette');
    palette.innerHTML = '';
    colors.forEach(function(color) {
        var btn = document.createElement('button');
        btn.className = 'color-btn';
        btn.style.backgroundColor = color;
        if (color === '#FFFFFF') {
            btn.style.border = '3px solid #ccc';
        }
        btn.addEventListener('click', function() {
            selectColor(color);
        });
        palette.appendChild(btn);
    });
}

function selectColor(color) {
    selectedColor = color;
    var btns = document.querySelectorAll('.color-btn');
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove('selected');
    }
    document.getElementById('eraser-btn').classList.remove('active');
    // 高亮当前选中
    for (var j = 0; j < btns.length; j++) {
        if (btns[j].style.backgroundColor === color ||
            rgbToHex(btns[j].style.backgroundColor) === color) {
            btns[j].classList.add('selected');
            break;
        }
    }
}

function selectEraser() {
    selectedColor = '#FFFFFF';
    var btns = document.querySelectorAll('.color-btn');
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove('selected');
    }
    document.getElementById('eraser-btn').classList.add('active');
}

// 浏览器可能返回 rgb() 格式，转成 hex 比较
function rgbToHex(rgb) {
    if (!rgb || rgb.charAt(0) === '#') return rgb;
    var m = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!m) return rgb;
    return '#' + ((1 << 24) + (parseInt(m[1]) << 16) + (parseInt(m[2]) << 8) + parseInt(m[3]))
        .toString(16).slice(1).toUpperCase();
}

// ===== 填色 =====
function fillRegion(el, color) {
    var prevColor = el.getAttribute('fill');
    undoStack.push({ id: el.getAttribute('data-id'), prevColor: prevColor });
    el.setAttribute('fill', color);
    checkCompletion();
}

// ===== 撤销 =====
function undo() {
    if (undoStack.length === 0) return;
    var last = undoStack.pop();
    var el = document.querySelector('[data-id="' + last.id + '"]');
    if (el) el.setAttribute('fill', last.prevColor);
}

// ===== 完成检测 =====
function checkCompletion() {
    var regions = document.querySelectorAll('#coloring-svg [data-id]');
    for (var i = 0; i < regions.length; i++) {
        var fill = regions[i].getAttribute('fill');
        if (!fill || fill === '#FFFFFF' || fill === 'white') return;
    }
    setTimeout(showCelebration, 400);
}

function showCelebration() {
    document.getElementById('celebration').classList.remove('hidden');
}

function replay() {
    document.getElementById('celebration').classList.add('hidden');
    undoStack = [];
    selectedColor = null;
    renderSVG(character);
    renderPalette(character.palette);
}

init();
