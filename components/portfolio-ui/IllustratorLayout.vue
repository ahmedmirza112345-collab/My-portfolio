<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import IllustratorCanvas from './IllustratorCanvas.vue';

// ─── Menu ────────────────────────────────────────────────────────────────────
const activeMenu = ref(null);
const toggleMenu = (menuName) => {
  activeMenu.value = activeMenu.value === menuName ? null : menuName;
};
const closeMenu = (e) => {
  if (!e.target.closest('.ai-menu-item')) activeMenu.value = null;
};

// ─── Tools ───────────────────────────────────────────────────────────────────
const activeTool = ref('selection');
const tools = [
  { id: 'selection',        icon: 'ri-cursor-fill' },
  { id: 'direct-selection', icon: 'ri-cursor-line' },
  { id: 'pen',              icon: 'ri-pen-nib-fill' },
  { id: 'curvature',        icon: 'ri-quill-pen-line' },
  { id: 'rectangle',        icon: 'ri-shape-2-line' },
  { id: 'paintbrush',       icon: 'ri-brush-line' },
  { id: 'type',             icon: 'ri-text' },
  { id: 'rotate',           icon: 'ri-loop-right-line' },
  { id: 'scale',            icon: 'ri-drag-move-2-line' },
  { id: 'shape-builder',    icon: 'ri-shape-line' },
  { id: 'gradient',         icon: 'ri-gradienter-line' },
  { id: 'eyedropper',       icon: 'ri-drop-line' },
  { id: 'blend',            icon: 'ri-mist-line' },
  { id: 'artboard',         icon: 'ri-layout-masonry-line' },
  { id: 'zoom',             icon: 'ri-search-line' },
  { id: 'hand',             icon: 'ri-hand' },
];

// ─── Zoom (PDF-viewer style) ──────────────────────────────────────────────────
const zoom = ref(1);          // 1 = 100%
const MIN_ZOOM = 0.1;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.1;

const zoomPercent = computed(() => Math.round(zoom.value * 100));

const clampZoom = (val) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, val));

const zoomIn  = () => { zoom.value = clampZoom(parseFloat((zoom.value + ZOOM_STEP).toFixed(2))); };
const zoomOut = () => { zoom.value = clampZoom(parseFloat((zoom.value - ZOOM_STEP).toFixed(2))); };
const resetZoom = () => { zoom.value = 1; };

// Ctrl + Wheel to zoom (identical to Chrome PDF viewer)
const handleWheel = (e) => {
  if (!e.ctrlKey) return;
  e.preventDefault();
  const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
  zoom.value = clampZoom(parseFloat((zoom.value + delta).toFixed(2)));
};

const canvasViewport = ref(null);

onMounted(() => {
  document.addEventListener('click', closeMenu);
  // attach to the viewport so only that area captures ctrl+scroll
  const el = canvasViewport.value;
  if (el) el.addEventListener('wheel', handleWheel, { passive: false });
});

onUnmounted(() => {
  document.removeEventListener('click', closeMenu);
  const el = canvasViewport.value;
  if (el) el.removeEventListener('wheel', handleWheel);
});
</script>

<template>
  <div class="ai-app">
    <!-- Top Bar -->
    <div class="ai-topbar">
      <div class="ai-logo">
        <i class="ri-home-4-fill" style="color: #ff5722; font-size: 20px;"></i>
      </div>
      
      <div class="ai-menu-bar no-drag">
        <!-- File Menu -->
        <div class="ai-menu-item" @click="toggleMenu('file')">
          <span :class="{ 'active': activeMenu === 'file' }">File</span>
          <div v-if="activeMenu === 'file'" class="ai-dropdown">
            <div class="ai-dropdown-item">New... <span class="shortcut">Ctrl+N</span></div>
            <div class="ai-dropdown-item">Open... <span class="shortcut">Ctrl+O</span></div>
            <div class="ai-dropdown-divider"></div>
            <div class="ai-dropdown-item">Save <span class="shortcut">Ctrl+S</span></div>
            <div class="ai-dropdown-item">Export...</div>
          </div>
        </div>
        
        <!-- Edit Menu -->
        <div class="ai-menu-item" @click="toggleMenu('edit')">
          <span :class="{ 'active': activeMenu === 'edit' }">Edit</span>
          <div v-if="activeMenu === 'edit'" class="ai-dropdown">
            <div class="ai-dropdown-item">Undo <span class="shortcut">Ctrl+Z</span></div>
            <div class="ai-dropdown-item">Redo <span class="shortcut">Shift+Ctrl+Z</span></div>
            <div class="ai-dropdown-divider"></div>
            <div class="ai-dropdown-item">Cut <span class="shortcut">Ctrl+X</span></div>
            <div class="ai-dropdown-item">Copy <span class="shortcut">Ctrl+C</span></div>
            <div class="ai-dropdown-item">Paste <span class="shortcut">Ctrl+V</span></div>
          </div>
        </div>

        <div class="ai-menu-item"><span>Object</span></div>
        <div class="ai-menu-item"><span>Type</span></div>
        <div class="ai-menu-item"><span>Select</span></div>
        <div class="ai-menu-item"><span>Effect</span></div>
        <div class="ai-menu-item"><span>View</span></div>
        <div class="ai-menu-item"><span>Window</span></div>
        <div class="ai-menu-item"><span>Help</span></div>
      </div>

      <div class="ai-top-controls no-drag">
        <div class="ai-workspace-switcher">
          <i class="ri-layout-column-fill"></i> Essentials <i class="ri-arrow-down-s-line"></i>
        </div>
        <div class="ai-search">
          <input type="text" placeholder="Search Adobe Stock">
        </div>
      </div>
    </div>

    <!-- Main Workspace -->
    <div class="ai-workspace">
      
      <!-- Left Toolbar -->
      <div class="ai-toolbar">
        <div class="ai-toolbar-header">
          <i class="ri-arrow-left-double-fill"></i>
        </div>
        <div class="ai-tools-grid">
          <button 
            v-for="tool in tools" 
            :key="tool.id"
            class="ai-tool-btn"
            :class="{ active: activeTool === tool.id }"
            @click="activeTool = tool.id"
            :title="tool.id"
          >
            <i :class="tool.icon"></i>
          </button>
        </div>
        <div class="ai-color-picker">
          <div class="color-box fill" style="background-color: #ff5722;"></div>
          <div class="color-box stroke" style="background-color: #333;"></div>
          <div class="color-controls">
            <i class="ri-arrow-left-right-line swap"></i>
            <div class="mini-colors">
              <span class="c-white"></span>
              <span class="c-gradient"></span>
              <span class="c-none"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Center Canvas Area -->
      <div class="ai-canvas-area">
        <div class="ai-document-tabs">
          <div class="ai-tab active">Portfolio Design.ai @ {{ zoomPercent }}% (CMYK/Preview) <i class="ri-close-line"></i></div>
        </div>
        
        <!-- Scrollable viewport — behaves exactly like Chrome PDF viewer -->
        <div class="ai-canvas-viewport" ref="canvasViewport">
          <div class="ai-canvas-scaler" :style="{ transform: `scale(${zoom})`, transformOrigin: 'top center' }">
            <IllustratorCanvas />
          </div>
        </div>

        <!-- Bottom Status Bar -->
        <div class="ai-status-bar">
          <div class="zoom-controls">
            <button class="zoom-btn" @click="zoomOut" title="Zoom out"><i class="ri-subtract-line"></i></button>
            <span class="zoom-label" @click="resetZoom" title="Reset to 100%">{{ zoomPercent }}%</span>
            <button class="zoom-btn" @click="zoomIn" title="Zoom in"><i class="ri-add-line"></i></button>
          </div>
          <div class="status-divider"></div>
          <div class="artboard-nav">
            <i class="ri-arrow-left-s-line"></i> 1 <i class="ri-arrow-right-s-line"></i>
          </div>
          <div class="status-text">{{ activeTool }}</div>
          <div class="status-tip">Hold <kbd>Ctrl</kbd> + scroll to zoom</div>
        </div>
      </div>

      <!-- Right Panels -->
      <div class="ai-panels">
        <div class="ai-panel-header-icons">
          <i class="ri-arrow-right-double-line"></i>
          <i class="ri-align-justify"></i>
        </div>
        
        <div class="ai-panel-group">
          <div class="ai-panel-title">Properties</div>
          <div class="ai-panel-content p-empty">No Selection</div>
        </div>

        <div class="ai-panel-group expanded">
          <div class="ai-panel-title active">Layer <i class="ri-menu-line float-right"></i></div>
          <div class="ai-panel-content p-layers">
            <div class="layer-item">
              <i class="ri-eye-line text-muted"></i>
              <i class="ri-arrow-right-s-line"></i>
              <span class="color-tag" style="background: red;"></span>
              Portfolio
              <span class="circle-select"></span>
            </div>
            <div class="layer-item sub">
               <i class="ri-eye-line text-muted"></i>
               <span class="empty-space"></span>
               <span class="color-tag" style="background: red;"></span>
               &lt;Path&gt;
               <span class="circle-select"></span>
            </div>
             <div class="layer-item sub">
               <i class="ri-eye-line text-muted"></i>
               <span class="empty-space"></span>
               <span class="color-tag" style="background: red;"></span>
               &lt;Group&gt;
               <span class="circle-select"></span>
            </div>
            <div class="layer-item">
              <i class="ri-eye-line text-muted"></i>
              <i class="ri-arrow-right-s-line"></i>
              <span class="color-tag" style="background: blue;"></span>
              Design
              <span class="circle-select"></span>
            </div>
             <div class="layer-item">
              <i class="ri-eye-line text-muted"></i>
              <i class="ri-arrow-right-s-line"></i>
              <span class="color-tag" style="background: green;"></span>
              Background
              <span class="circle-select"></span>
            </div>
          </div>
        </div>

        <div class="ai-panel-group">
          <div class="ai-panel-title">Libraries</div>
        </div>
        <div class="ai-panel-group">
          <div class="ai-panel-title">Pathfinder</div>
        </div>
        <div class="ai-panel-group">
          <div class="ai-panel-title">Character</div>
        </div>
        
        <div class="ai-panel-dock">
           <div class="dock-icon" style="background: #ff5722; color: white;"><i class="ri-file-copy-line"></i></div>
           <div class="dock-icon"><i class="ri-palette-line"></i></div>
           <div class="dock-icon"><i class="ri-brush-line"></i></div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.ai-app {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  user-select: none;
}

/* TOP BAR */
.ai-topbar {
  display: flex;
  align-items: center;
  background: #f0f0f0;
  height: 35px;
  border-bottom: 1px solid #ccc;
  font-size: 13px;
  padding: 0 10px;
}

.ai-logo {
  padding-right: 15px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
}

.ai-menu-bar {
  display: flex;
  padding-left: 10px;
  flex-grow: 1;
}

.ai-menu-item {
  position: relative;
  padding: 5px 10px;
  cursor: pointer;
}

.ai-menu-item span.active {
  background: #fff;
  color: #ff5722;
}

.ai-menu-item:hover span {
  background: #e0e0e0;
}

.ai-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  min-width: 200px;
  z-index: 1000;
  padding: 5px 0;
}

.ai-dropdown-item {
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
}

.ai-dropdown-item:hover {
  background: #0078d7;
  color: #fff;
}

.ai-dropdown-item .shortcut {
  color: #888;
}
.ai-dropdown-item:hover .shortcut {
  color: #ddd;
}

.ai-dropdown-divider {
  height: 1px;
  background: #eee;
  margin: 5px 0;
}

.ai-top-controls {
  display: flex;
  align-items: center;
  gap: 15px;
}

.ai-search input {
  padding: 2px 10px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background: #e0e0e0;
  font-size: 12px;
  width: 150px;
}

.ai-window-controls {
  display: flex;
  align-items: center;
  gap: 7px;
  padding-left: 10px;
  cursor: default;
}
.wc-btn {
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  cursor: pointer;
  transition: filter 0.15s;
}
.wc-btn:hover { filter: brightness(0.8); }
.wc-minimize { background: #f5c000; }
.wc-maximize { background: #29c940; }
.wc-close    { background: #ff5f57; }

/* WORKSPACE */
.ai-workspace {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  background: #f0f0f0;
}

/* TOOLBAR */
.ai-toolbar {
  width: 70px;
  background: #f0f0f0;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;
}

.ai-toolbar-header {
  font-size: 10px;
  color: #888;
  margin-bottom: 5px;
}

.ai-tools-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  padding: 0 5px;
}

.ai-tool-btn {
  background: transparent;
  border: none;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  color: #333;
}

.ai-tool-btn:hover {
  background: #e0e0e0;
}

.ai-tool-btn.active {
  background: #d0d0d0;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.2);
}

.ai-color-picker {
  margin-top: 15px;
  position: relative;
  width: 40px;
  height: 40px;
}

.color-box {
  width: 24px;
  height: 24px;
  border: 1px solid #fff;
  box-shadow: 0 0 0 1px #ccc;
  position: absolute;
}
.color-box.fill {
  top: 0;
  left: 0;
  z-index: 2;
}
.color-box.stroke {
  bottom: 0;
  right: 0;
  z-index: 1;
  background: transparent;
  border: 3px solid #333;
  box-shadow: none;
}

/* CANVAS AREA */
.ai-canvas-area {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: #e6e6e6; /* slightly darker to contrast white canvas */
}

.ai-document-tabs {
  display: flex;
  background: #f0f0f0;
  border-bottom: 1px solid #ccc;
}

.ai-tab {
  padding: 5px 15px;
  background: #e6e6e6;
  border-right: 1px solid #ccc;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.ai-tab.active {
  background: #e6e6e6;
  font-weight: 500;
}

/* ─── Scrollable canvas viewport (PDF-viewer style) ─────────── */
.ai-canvas-viewport {
  flex-grow: 1;
  overflow: auto;          /* native scroll in both axes */
  background: #888;        /* checkerboard-grey surround like Illustrator */
  background-image:
    linear-gradient(45deg, #777 25%, transparent 25%),
    linear-gradient(-45deg, #777 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #777 75%),
    linear-gradient(-45deg, transparent 75%, #777 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 40px;
}

/* Wrapper that holds the scale transform.
   We keep transform-origin: top center so that zooming out doesn't drift upward. */
.ai-canvas-scaler {
  transition: transform 0.1s ease;
  /* Let the parent scroll area dictate width — don't shrink below artboard */
  flex-shrink: 0;
}

.ai-status-bar {
  height: 28px;
  background: #f0f0f0;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  font-size: 11px;
  padding: 0 10px;
  gap: 10px;
}

.zoom-controls {
  display: flex;
  align-items: center;
  gap: 4px;
}

.zoom-btn {
  background: #e0e0e0;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  line-height: 1;
  padding: 0;
}
.zoom-btn:hover { background: #d0d0d0; }

.zoom-label {
  min-width: 38px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  font-size: 11px;
}
.zoom-label:hover { color: #ff5722; }

.status-divider {
  width: 1px;
  height: 16px;
  background: #ccc;
}

.status-tip kbd {
  background: #e0e0e0;
  border: 1px solid #bbb;
  border-radius: 3px;
  padding: 0 3px;
  font-family: inherit;
  font-size: 10px;
}

/* RIGHT PANELS */
.ai-panels {
  width: 260px;
  background: #f0f0f0;
  border-left: 1px solid #ccc;
  display: flex;
  flex-direction: column;
}

.ai-panel-header-icons {
  padding: 5px 10px;
  text-align: right;
  border-bottom: 1px solid #ccc;
  color: #666;
}

.ai-panel-group {
  border-bottom: 1px solid #ccc;
}

.ai-panel-title {
  padding: 5px 10px;
  font-size: 12px;
  background: #e8e8e8;
  font-weight: 500;
  cursor: pointer;
}
.ai-panel-title.active {
  background: #fff;
}

.ai-panel-content {
  background: #fff;
  font-size: 12px;
}

.p-empty {
  padding: 20px;
  text-align: center;
  color: #888;
}

.layer-item {
  display: flex;
  align-items: center;
  padding: 4px 10px;
  border-bottom: 1px solid #eee;
}
.layer-item.sub {
  background: #f9f9f9;
}
.empty-space {
  width: 20px;
}
.color-tag {
  width: 8px;
  height: 8px;
  display: inline-block;
  margin: 0 5px;
}
.circle-select {
  width: 10px;
  height: 10px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-left: auto;
}

.float-right {
  float: right;
}

.ai-panel-dock {
  margin-top: auto;
  display: flex;
  border-top: 1px solid #ccc;
}
.dock-icon {
  padding: 10px;
  flex-grow: 1;
  text-align: center;
  border-right: 1px solid #ccc;
}
</style>
