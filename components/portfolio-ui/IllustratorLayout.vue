<script setup>
import { ref, computed, onMounted, onUnmounted, markRaw } from 'vue';
import { useRouter } from 'vue-router';

import { 
  Home, Layout, ChevronDown, ChevronsLeft, MousePointer2, Pointer, 
  PenTool, Feather, Square, Brush, Type, RotateCw, Move, Shapes, 
  Pipette, Search, Hand, ArrowLeftRight, X, Minus, Plus, 
  ChevronLeft, ChevronRight, ChevronsRight, AlignJustify, Menu, Eye, 
  Copy, Palette, Layers, Wind, LayoutGrid, Paintbrush, PanelRight, HelpCircle,
  Wand2, Scissors, Pen, Type as TypeIcon, MinusSquare, Eraser, 
  RefreshCw, Maximize, Circle, Grab, BarChart2, Crop, ScreenShare,
  Minimize2, MoreHorizontal, Settings2, Info, List, History, 
  Library, SwatchBook, MousePointer, Image as ImageIcon
} from 'lucide-vue-next';
import IllustratorCanvas from './IllustratorCanvas.vue';
import PortfolioTour from './PortfolioTour.vue';

// ─── Menu ────────────────────────────────────────────────────────────────────
const router = useRouter();
const activeMenu = ref(null);
const menus = ['File', 'Edit', 'Object', 'Type', 'Select', 'Effect', 'View', 'Window', 'Help'];
const toggleMenu = (menuName) => {
  activeMenu.value = activeMenu.value === menuName ? null : menuName;
};
const closeMenu = (e) => {
  if (!e.target.closest('.ai-menu-item')) activeMenu.value = null;
};

// ─── Mobile State ─────────────────────────────────────────────────────────────
const showPanels = ref(true);
const togglePanels = () => {
  showPanels.value = !showPanels.value;
};

// ─── Tools ───────────────────────────────────────────────────────────────────
const activeTool = ref('selection');
const lastTool = ref('selection');
const tools = [
  { id: 'selection',        icon: markRaw(MousePointer2), key: 'v' },
  { id: 'direct-selection', icon: markRaw(Pointer),        key: 'a' },
  { id: 'wand',             icon: markRaw(Wand2),          key: 'y' },
  { id: 'lasso',            icon: markRaw(Scissors),       key: 'q' },
  { id: 'pen',              icon: markRaw(PenTool),        key: 'p' },
  { id: 'curvature',        icon: markRaw(Feather),        key: 'shift+~' },
  { id: 'type',             icon: markRaw(TypeIcon),       key: 't' },
  { id: 'line',             icon: markRaw(MinusSquare),    key: '\\' },
  { id: 'rectangle',        icon: markRaw(Square),         key: 'm' },
  { id: 'paintbrush',       icon: markRaw(Brush),          key: 'b' },
  { id: 'shaper',           icon: markRaw(Pen),            key: 'shift+n' },
  { id: 'eraser',           icon: markRaw(Eraser),         key: 'shift+e' },
  { id: 'rotate',           icon: markRaw(RefreshCw),      key: 'r' },
  { id: 'scale',            icon: markRaw(Maximize),       key: 's' },
  { id: 'width',            icon: markRaw(Wind),           key: 'shift+w' },
  { id: 'transform',        icon: markRaw(Move),           key: 'e' },
  { id: 'shape-builder',    icon: markRaw(Shapes),         key: 'shift+m' },
  { id: 'perspective',      icon: markRaw(LayoutGrid),     key: 'shift+p' },
  { id: 'mesh',             icon: markRaw(Circle),         key: 'u' },
  { id: 'gradient',         icon: markRaw(Paintbrush),     key: 'g' },
  { id: 'eyedropper',       icon: markRaw(Pipette),        key: 'i' },
  { id: 'blend',            icon: markRaw(Grab),           key: 'w' },
  { id: 'sprayer',          icon: markRaw(MoreHorizontal), key: 'shift+s' },
  { id: 'graph',            icon: markRaw(BarChart2),      key: 'j' },
  { id: 'artboard',         icon: markRaw(Layout),         key: 'shift+o' },
  { id: 'slice',            icon: markRaw(Crop),           key: 'shift+k' },
  { id: 'hand',             icon: markRaw(Hand),           key: 'h' },
  { id: 'zoom',             icon: markRaw(Search),         key: 'z' },
];

// ─── Right Panels ────────────────────────────────────────────────────────────
const expandedPanels = ref(['properties', 'layers']);
const togglePanel = (id) => {
  if (expandedPanels.value.includes(id)) {
    expandedPanels.value = expandedPanels.value.filter(p => p !== id);
  } else {
    expandedPanels.value.push(id);
  }
};

// ─── Zoom & Pan State ────────────────────────────────────────────────────────
const zoom = ref(1);
const panX = ref(0);
const panY = ref(0);
const zoomPercent = computed(() => Math.round(zoom.value * 100));
const clampZoom = (val) => Math.min(6, Math.max(0.05, val));
const zoomIn  = () => { zoom.value = clampZoom(parseFloat((zoom.value * 1.2).toFixed(2))); };
const zoomOut = () => { zoom.value = clampZoom(parseFloat((zoom.value / 1.2).toFixed(2))); };
const resetZoom = () => { zoom.value = 1; panX.value = 0; panY.value = 0; };

// ─── Modifier Keys State ─────────────────────────────────────────────────────
const isSpacePressed = ref(false);
const isAltPressed = ref(false);

const handleKeyDown = (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'Alt') { e.preventDefault(); isAltPressed.value = true; }
  if (e.code === 'Space' && !isSpacePressed.value) {
    e.preventDefault(); isSpacePressed.value = true;
    lastTool.value = activeTool.value; activeTool.value = 'hand';
  }
  if ((e.ctrlKey || e.metaKey) && (e.key === '=' || e.key === '+')) { e.preventDefault(); zoomIn(); }
  if ((e.ctrlKey || e.metaKey) && e.key === '-') { e.preventDefault(); zoomOut(); }
  if ((e.ctrlKey || e.metaKey) && e.key === '0') { e.preventDefault(); resetZoom(); }
  const key = e.key.toLowerCase();
  const tool = tools.find(t => t.key === key);
  if (tool) activeTool.value = tool.id;
};

const handleKeyUp = (e) => {
  if (e.key === 'Alt') isAltPressed.value = false;
  if (e.code === 'Space') { isSpacePressed.value = false; activeTool.value = lastTool.value; }
};

// ─── Artboards Configuration ────────────────────────────────────────────────
const artboards = ref([
  { id: 1, type: 'logo',   name: 'Brand Identity (Logo)',   x: 0,    y: 0 },
  { id: 2, type: 'poster', name: 'Brutalist Poster Design', x: 1000, y: -100 },
  { id: 3, type: 'ui',     name: 'Mobile App UX/UI',        x: 1800, y: 50 },
]);

// ─── Canvas Interactions ────────────────────────────────────────────────────
const canvasViewport = ref(null);
const isPanning = ref(false);
const startPanPos = { x: 0, y: 0 };
const startPanOffset = { x: 0, y: 0 };

const handleMouseDown = (e) => {
  if (activeTool.value === 'hand' || isSpacePressed.value) {
    isPanning.value = true;
    startPanPos.x = e.clientX; startPanPos.y = e.clientY;
    startPanOffset.x = panX.value; startPanOffset.y = panY.value;
    document.body.style.cursor = 'grabbing';
  } else if (activeTool.value === 'zoom') {
    if (e.altKey || isAltPressed.value) zoomOut();
    else zoomIn();
  }
};
const handleMouseMove = (e) => {
  if (isPanning.value) {
    panX.value = startPanOffset.x + (e.clientX - startPanPos.x);
    panY.value = startPanOffset.y + (e.clientY - startPanPos.y);
  }
};
const handleMouseUp = () => { isPanning.value = false; document.body.style.cursor = ''; };
const handleWheel = (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) {
    e.preventDefault();
    if (e.deltaY < 0) zoomIn(); else zoomOut();
  } else {
    panX.value -= e.deltaX; panY.value -= e.deltaY;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
  window.addEventListener('mouseup', handleMouseUp);
  window.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('click', closeMenu);
});
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('keyup', handleKeyUp);
  window.removeEventListener('mouseup', handleMouseUp);
  window.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('click', closeMenu);
});

// ─── Tour Logic ──────────────────────────────────────────────────────────────
const tourRef = ref(null);
const tourSteps = [
  {
    title: "Multi-Artboard Studio",
    content: "Welcome to my expanded studio! I've laid out my skills across multiple canvases: Logos, Posters, and UI designs.",
    positionStyle: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    highlightStyle: { top: '50%', left: '50%', width: '0', height: '0', opacity: 0 },
    arrowClass: ""
  },
  {
    title: "The Workspace",
    content: "Use the Hand Tool (H) to pan between these artboards, or use the scroll wheel while holding Ctrl to zoom in on details.",
    positionStyle: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    highlightStyle: { top: '50%', left: '50%', width: '100%', height: '100%', opacity: 0.1 },
    arrowClass: ""
  }
];
const startTour = () => tourRef.value.startTour();
</script>

<template>
  <div class="ai-app" :class="{ 'space-active': isSpacePressed, 'alt-active': isAltPressed }">
    <!-- Top Bar (HEADER) -->
    <div class="ai-topbar">
      <div class="ai-logo" @click="router.push('/')">
        <Home :size="18" style="color: #4169E1; cursor: pointer;" />
        <span class="logo-text hide-mobile">Illustrator</span>
      </div>
      
      <div class="ai-menu-bar no-drag hide-tablet">
        <div 
          v-for="menu in menus" 
          :key="menu"
          class="ai-menu-item" 
          @click="toggleMenu(menu)"
        >
          <span :class="{ 'active': activeMenu === menu }">{{ menu }}</span>
          <div v-if="activeMenu === menu" class="ai-dropdown">
            <div class="ai-dropdown-item">New... <span class="shortcut">Ctrl+N</span></div>
            <div class="ai-dropdown-item">Open... <span class="shortcut">Ctrl+O</span></div>
            <div class="ai-dropdown-divider"></div>
            <div class="ai-dropdown-item">Save <span class="shortcut">Ctrl+S</span></div>
          </div>
        </div>
      </div>

      <div class="ai-top-controls no-drag">
        <div class="mobile-portfolio-label show-mobile">Portfolio.ai</div>
        <button class="help-btn" @click="startTour" title="Start Tour">
          <HelpCircle :size="18" />
        </button>
        <button class="panel-toggle" @click="togglePanels" title="Toggle Panels">
          <PanelRight :size="18" />
        </button>
        <div class="ai-workspace-switcher hide-tablet">
          <Layout :size="14" /> Essentials <ChevronDown :size="12" />
        </div>
      </div>
    </div>

    <!-- Main Workspace -->
    <div class="ai-workspace">
      
      <!-- Left Toolbar -->
      <div class="ai-toolbar hide-mobile-small">
        <div class="ai-toolbar-header"><ChevronsLeft :size="12" /></div>
        <div class="ai-tools-grid">
          <button v-for="tool in tools" :key="tool.id" class="ai-tool-btn" :class="{ active: activeTool === tool.id }" @click="activeTool = tool.id" :title="`${tool.id} (${tool.key})`">
            <component :is="tool.icon" :size="14" />
          </button>
        </div>
        <div class="ai-toolbar-footer">
          <div class="ai-color-system">
            <div class="color-switcher">
              <div class="color-box fill" style="background-color: #00aeef;"></div>
              <div class="color-box stroke" style="background: transparent; border: 2px solid #fff;">
                <div style="background: #fff; width: 100%; height: 2px; transform: rotate(-45deg);"></div>
              </div>
              <button class="swap-btn"><ArrowLeftRight :size="10" /></button>
            </div>
          </div>
          <div class="screen-mode-toggle"><ScreenShare :size="14" /></div>
        </div>
      </div>

      <!-- Center Canvas Area -->
      <div class="ai-canvas-area" :class="activeTool + '-tool'">
        <div class="ai-document-tabs hide-mobile">
          <div class="ai-tab active">Portfolio.ai @ {{ zoomPercent }}% <X :size="12" /></div>
        </div>
        <div class="ai-canvas-viewport" ref="canvasViewport" @mousedown="handleMouseDown" @wheel="handleWheel">
          <div class="ai-canvas-scaler" :style="{ transform: `translate(${panX}px, ${panY}px) scale(${zoom})`, transformOrigin: 'center center' }">
            
            <!-- Render Multiple Artboards -->
            <div v-for="board in artboards" :key="board.id" class="artboard-wrapper" :style="{ transform: `translate(${board.x}px, ${board.y}px)` }">
              <div class="artboard-label">{{ board.name }}</div>
              <IllustratorCanvas :type="board.type" />
            </div>

          </div>
        </div>

        <div class="ai-status-bar">
          <div class="zoom-controls">
            <button class="zoom-btn" @click="zoomOut"><Minus :size="12" /></button>
            <span class="zoom-label" @click="resetZoom">{{ zoomPercent }}%</span>
            <button class="zoom-btn" @click="zoomIn"><Plus :size="12" /></button>
          </div>
          <div class="status-divider hide-mobile"></div>
          <div class="status-text hide-tablet">{{ activeTool }}</div>
          <div class="mobile-hint show-mobile">Pinch to Zoom</div>
        </div>
      </div>

      <!-- Right Panels (COMPLETE ILLUSTRATOR STYLE) -->
      <Transition name="panel-slide">
        <div class="ai-panels" v-if="showPanels">
          <div class="ai-panel-header-icons">
             <ChevronsRight :size="18" @click="togglePanels" style="cursor:pointer" />
          </div>
          
          <!-- Properties Panel -->
          <div class="ai-panel-group" :class="{ expanded: expandedPanels.includes('properties') }">
            <div class="ai-panel-title" @click="togglePanel('properties')">
              <Settings2 :size="12" /> Properties <ChevronDown :size="10" class="float-right" />
            </div>
            <div class="ai-panel-content" v-if="expandedPanels.includes('properties')">
              <div class="prop-section">
                <p class="section-label">Selection</p>
                <div class="prop-row"><MousePointer :size="12" /> <span>No Selection</span></div>
              </div>
              <div class="prop-divider"></div>
              <div class="prop-section">
                <p class="section-label">Artboard</p>
                <div class="prop-grid">
                  <div class="p-item">W: 1920</div>
                  <div class="p-item">H: 1080</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Color Panel -->
          <div class="ai-panel-group" :class="{ expanded: expandedPanels.includes('color') }">
            <div class="ai-panel-title" @click="togglePanel('color')">
              <Palette :size="12" /> Color <ChevronDown :size="10" class="float-right" />
            </div>
            <div class="ai-panel-content color-content" v-if="expandedPanels.includes('color')">
              <div class="color-ramp"></div>
              <div class="color-sliders">
                <div class="slider"><span class="label">C</span><div class="bar cyan"></div><span class="val">0%</span></div>
                <div class="slider"><span class="label">M</span><div class="bar magenta"></div><span class="val">100%</span></div>
                <div class="slider"><span class="label">Y</span><div class="bar yellow"></div><span class="val">100%</span></div>
                <div class="slider"><span class="label">K</span><div class="bar black"></div><span class="val">0%</span></div>
              </div>
            </div>
          </div>

          <!-- Layers Panel -->
          <div class="ai-panel-group" :class="{ expanded: expandedPanels.includes('layers') }">
            <div class="ai-panel-title" @click="togglePanel('layers')">
              <Layers :size="12" /> Layers <ChevronDown :size="10" class="float-right" />
            </div>
            <div class="ai-panel-content" v-if="expandedPanels.includes('layers')">
              <div class="layer-item active"><Eye :size="12" /> <span class="color-tag red"></span> <span>Design Work</span></div>
              <div class="layer-item sub"><Eye :size="12" /> <span class="color-tag blue"></span> <span>UI Elements</span></div>
              <div class="layer-item"><Eye :size="12" /> <span class="color-tag green"></span> <span>Background</span></div>
            </div>
          </div>

          <!-- Sidebar Icons (Iconic Illustrator look) -->
          <div class="ai-panel-dock">
             <div class="dock-icon"><Library :size="18" /></div>
             <div class="dock-icon"><SwatchBook :size="18" /></div>
             <div class="dock-icon"><History :size="18" /></div>
             <div class="dock-icon"><List :size="18" /></div>
          </div>
        </div>
      </Transition>

    </div>
    <PortfolioTour ref="tourRef" :steps="tourSteps" />
  </div>
</template>

<style scoped>
.ai-app { display: flex; flex-direction: column; height: 100%; width: 100%; overflow: hidden; background: #1a1a1a; font-family: 'Segoe UI', sans-serif; }

/* Header/Top Bar */
.ai-topbar { display: flex; align-items: center; background: #f0f0f0; height: 40px; border-bottom: 1px solid #ccc; font-size: 13px; padding: 0 10px; flex-shrink: 0; }
.ai-logo { display: flex; align-items: center; gap: 8px; margin-right: 20px; }
.logo-text { font-weight: 700; color: #000; }
.ai-menu-bar { display: flex; flex-grow: 1; }
.ai-menu-item { position: relative; padding: 0 10px; cursor: pointer; font-size: 12px; height: 40px; display: flex; align-items: center; color: #000; }
.ai-menu-item:hover { background: #e0e0e0; }
.ai-dropdown { position: absolute; top: 40px; left: 0; background: #fff; border: 1px solid #ccc; box-shadow: 0 4px 10px rgba(0,0,0,0.2); min-width: 180px; z-index: 1000; padding: 5px 0; }
.ai-dropdown-item { padding: 6px 15px; display: flex; justify-content: space-between; font-size: 12px; color: #000; }
.ai-dropdown-item:hover { background: #0078d7; color: #fff; }

.ai-top-controls { display: flex; align-items: center; gap: 10px; }
.help-btn, .panel-toggle { background: #e0e0e0; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; color: #000; }
.ai-workspace-switcher { font-size: 11px; display: flex; align-items: center; gap: 5px; padding: 5px 8px; background: #e8e8e8; border-radius: 3px; border: 1px solid #ccc; color: #000; }
.mobile-portfolio-label { font-size: 14px; font-weight: 700; color: #000; }

/* Workspace */
.ai-workspace { display: flex; flex-grow: 1; overflow: hidden; position: relative; }
.ai-toolbar { width: 52px; background: #f0f0f0; border-right: 1px solid #ccc; display: flex; flex-direction: column; padding-bottom: 10px; }
.ai-tools-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; padding: 5px 3px; }
.ai-tool-btn { background: transparent; border: none; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; border-radius: 2px; cursor: pointer; color: #444; }
.ai-tool-btn.active { background: #d0d0d0; color: #000; box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1); }

/* Canvas */
.ai-canvas-area { flex-grow: 1; display: flex; flex-direction: column; background: #e6e6e6; overflow: hidden; }
.ai-canvas-viewport { flex-grow: 1; overflow: hidden; background: #333; display: flex; align-items: center; justify-content: center; position: relative; }
.ai-canvas-scaler { transition: transform 0.1s ease-out; user-select: none; position: relative; }

.artboard-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.artboard-label {
  font-size: 11px;
  color: #888;
  margin-bottom: 5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.ai-status-bar { height: 32px; background: #f0f0f0; border-top: 1px solid #ccc; display: flex; align-items: center; font-size: 11px; padding: 0 15px; justify-content: space-between; color: #000; }

/* Right Panels */
.ai-panels { width: 260px; background: #f0f0f0; border-left: 1px solid #ccc; display: flex; flex-direction: column; z-index: 100; }
.ai-panel-header-icons { padding: 8px 15px; border-bottom: 1px solid #ccc; background: #e8e8e8; }
.ai-panel-group { border-bottom: 1px solid #ccc; }
.ai-panel-title { padding: 8px 15px; font-size: 11px; font-weight: 700; background: #e0e0e0; cursor: pointer; text-transform: uppercase; color: #000; display: flex; align-items: center; gap: 8px; }
.ai-panel-title:hover { background: #d8d8d8; }
.ai-panel-content { padding: 12px; background: #fff; font-size: 11px; color: #333; }

/* Properties Section */
.section-label { font-weight: 800; color: #888; text-transform: uppercase; font-size: 9px; margin-bottom: 8px; letter-spacing: 0.5px; }
.prop-row { display: flex; align-items: center; gap: 8px; color: #666; margin-bottom: 10px; }
.prop-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
.p-item { background: #f0f0f0; padding: 4px 8px; border-radius: 2px; text-align: center; border: 1px solid #ddd; }
.prop-divider { height: 1px; background: #eee; margin: 12px 0; }

/* Color Section */
.color-ramp { height: 12px; background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00); margin-bottom: 12px; border: 1px solid #ccc; }
.slider { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.slider .label { width: 10px; font-weight: bold; }
.slider .bar { height: 8px; flex-grow: 1; border: 1px solid #ccc; }
.bar.cyan { background: linear-gradient(to right, #fff, #0ff); }
.bar.magenta { background: linear-gradient(to right, #fff, #f0f); }
.bar.yellow { background: linear-gradient(to right, #fff, #ff0); }
.bar.black { background: linear-gradient(to right, #fff, #000); }
.slider .val { width: 30px; text-align: right; color: #888; }

/* Layers Section */
.layer-item { display: flex; align-items: center; gap: 10px; padding: 6px 8px; border-radius: 3px; cursor: pointer; }
.layer-item.active { background: #e0e0e0; font-weight: 600; }
.layer-item.sub { margin-left: 20px; color: #666; font-size: 10px; }
.color-tag { width: 4px; height: 14px; border-radius: 1px; }
.color-tag.red { background: #ff4d4d; }
.color-tag.blue { background: #4d94ff; }
.color-tag.green { background: #47d147; }

.ai-panel-dock { margin-top: auto; display: flex; background: #e0e0e0; border-top: 1px solid #ccc; }
.dock-icon { padding: 12px; flex-grow: 1; text-align: center; border-right: 1px solid #ccc; display: flex; justify-content: center; cursor: pointer; color: #666; }
.dock-icon:hover { color: #4169E1; background: #d8d8d8; }

/* Responsive */
.show-mobile { display: none; }
@media (max-width: 991px) { .ai-menu-bar, .hide-tablet { display: none !important; } .ai-panels { position: absolute; right: 0; top: 0; bottom: 0; box-shadow: -10px 0 30px rgba(0,0,0,0.3); } }
@media (max-width: 767px) { .hide-mobile { display: none !important; } .show-mobile { display: flex; } .ai-toolbar { width: 38px; } .ai-tools-grid { grid-template-columns: 1fr; } }
.float-right { float: right; }
.panel-slide-enter-active, .panel-slide-leave-active { transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.panel-slide-enter-from, .panel-slide-leave-to { transform: translateX(100%); }
</style>
