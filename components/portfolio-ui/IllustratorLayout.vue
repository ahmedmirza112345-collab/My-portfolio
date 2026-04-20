<script setup>
import { ref, computed, onMounted, onUnmounted, markRaw } from 'vue';
import { 
  Home, Layout, ChevronDown, ChevronsLeft, MousePointer2, Pointer, 
  PenTool, Feather, Square, Brush, Type, RotateCw, Move, Shapes, 
  Pipette, Search, Hand, ArrowLeftRight, X, Minus, Plus, 
  ChevronLeft, ChevronRight, ChevronsRight, AlignJustify, Menu, Eye, 
  Copy, Palette, Layers, Wind, LayoutGrid, Paintbrush, PanelRight
} from 'lucide-vue-next';
import IllustratorCanvas from './IllustratorCanvas.vue';

// ─── Menu ────────────────────────────────────────────────────────────────────
const activeMenu = ref(null);
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
const tools = [
  { id: 'selection',        icon: markRaw(MousePointer2) },
  { id: 'direct-selection', icon: markRaw(Pointer) },
  { id: 'pen',              icon: markRaw(PenTool) },
  { id: 'curvature',        icon: markRaw(Feather) },
  { id: 'rectangle',        icon: markRaw(Square) },
  { id: 'paintbrush',       icon: markRaw(Brush) },
  { id: 'type',             icon: markRaw(Type) },
  { id: 'rotate',           icon: markRaw(RotateCw) },
  { id: 'scale',            icon: markRaw(Move) },
  { id: 'shape-builder',    icon: markRaw(Shapes) },
  { id: 'gradient',         icon: markRaw(Paintbrush) },
  { id: 'eyedropper',       icon: markRaw(Pipette) },
  { id: 'blend',            icon: markRaw(Wind) },
  { id: 'artboard',         icon: markRaw(LayoutGrid) },
  { id: 'zoom',             icon: markRaw(Search) },
  { id: 'hand',             icon: markRaw(Hand) },
];

// ─── Zoom ────────────────────────────────────────────────────────────────────
const zoom = ref(1);
const zoomPercent = computed(() => Math.round(zoom.value * 100));
const clampZoom = (val) => Math.min(5, Math.max(0.1, val));
const zoomIn  = () => { zoom.value = clampZoom(parseFloat((zoom.value + 0.1).toFixed(2))); };
const zoomOut = () => { zoom.value = clampZoom(parseFloat((zoom.value - 0.1).toFixed(2))); };
const resetZoom = () => { zoom.value = 1; };

const handleWheel = (e) => {
  if (!e.ctrlKey) return;
  e.preventDefault();
  const delta = e.deltaY > 0 ? -0.1 : 0.1;
  zoom.value = clampZoom(parseFloat((zoom.value + delta).toFixed(2)));
};

const canvasViewport = ref(null);

onMounted(() => {
  document.addEventListener('click', closeMenu);
  const el = canvasViewport.value;
  if (el) el.addEventListener('wheel', handleWheel, { passive: false });
  
  // Auto-collapse panels and hide chrome on mobile init
  if (window.innerWidth < 992) {
    showPanels.value = false;
    // Set a zoom that fits the screen better on mobile
    if (window.innerWidth < 600) zoom.value = 0.6;
  }
});

onUnmounted(() => {
  document.removeEventListener('click', closeMenu);
  const el = canvasViewport.value;
  if (el) el.removeEventListener('wheel', handleWheel);
});
</script>

<template>
  <div class="ai-app">
    <!-- Top Bar (Minimal on Mobile) -->
    <div class="ai-topbar">
      <div class="ai-logo" @click="navigateTo('/')">
        <Home :size="18" style="color: #ff5722; cursor: pointer;" />
        <span class="logo-text hide-mobile">Illustrator</span>
      </div>
      
      <div class="ai-menu-bar no-drag hide-tablet">
        <div class="ai-menu-item" @click="toggleMenu('file')">
          <span :class="{ 'active': activeMenu === 'file' }">File</span>
          <div v-if="activeMenu === 'file'" class="ai-dropdown">
            <div class="ai-dropdown-item">New... <span class="shortcut">Ctrl+N</span></div>
            <div class="ai-dropdown-item">Open... <span class="shortcut">Ctrl+O</span></div>
            <div class="ai-dropdown-divider"></div>
            <div class="ai-dropdown-item">Save <span class="shortcut">Ctrl+S</span></div>
          </div>
        </div>
        <div class="ai-menu-item" @click="toggleMenu('edit')">
          <span :class="{ 'active': activeMenu === 'edit' }">Edit</span>
          <div v-if="activeMenu === 'edit'" class="ai-dropdown">
            <div class="ai-dropdown-item">Undo <span class="shortcut">Ctrl+Z</span></div>
            <div class="ai-dropdown-item">Redo <span class="shortcut">Shift+Ctrl+Z</span></div>
          </div>
        </div>
      </div>

      <div class="ai-top-controls no-drag">
        <div class="mobile-portfolio-label show-mobile">Portfolio.ai</div>
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
      
      <!-- Left Toolbar (Hidden on small mobile, shown on tablet) -->
      <div class="ai-toolbar hide-mobile-small">
        <div class="ai-tools-grid">
          <button 
            v-for="tool in tools.slice(0, 8)" 
            :key="tool.id"
            class="ai-tool-btn"
            :class="{ active: activeTool === tool.id }"
            @click="activeTool = tool.id"
          >
            <component :is="tool.icon" :size="16" />
          </button>
        </div>
      </div>

      <!-- Center Canvas Area - THE FOCUS -->
      <div class="ai-canvas-area">
        <div class="ai-document-tabs hide-mobile">
          <div class="ai-tab active">
            Portfolio.ai @ {{ zoomPercent }}% 
            <X :size="12" />
          </div>
        </div>
        
        <div class="ai-canvas-viewport" ref="canvasViewport">
          <div class="ai-canvas-scaler" :style="{ transform: `scale(${zoom})`, transformOrigin: 'top center' }">
            <IllustratorCanvas />
          </div>
        </div>

        <!-- Bottom Status Bar (Simplified on Mobile) -->
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

      <!-- Right Panels (Collapsible / Floating on Mobile) -->
      <Transition name="panel-slide">
        <div class="ai-panels" v-if="showPanels">
          <div class="ai-panel-header-icons">
            <span class="panel-header-title show-mobile">Properties</span>
            <ChevronsRight :size="18" @click="togglePanels" style="cursor:pointer" />
          </div>
          
          <div class="ai-panel-group expanded">
            <div class="ai-panel-title active">Layers <Menu :size="12" class="float-right" /></div>
            <div class="ai-panel-content p-layers">
              <div class="layer-item">
                <Eye :size="12" class="text-muted" /> <span class="color-tag" style="background: #ff5722;"></span> Portfolio
              </div>
              <div class="layer-item">
                <Eye :size="12" class="text-muted" /> <span class="color-tag" style="background: #333;"></span> Background
              </div>
            </div>
          </div>

          <div class="ai-panel-dock">
             <div class="dock-icon"><Copy :size="18" /></div>
             <div class="dock-icon"><Palette :size="18" /></div>
             <div class="dock-icon"><Layers :size="18" /></div>
          </div>
        </div>
      </Transition>

    </div>
  </div>
</template>

<style scoped>
.ai-app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #1a1a1a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #333;
}

/* TOP BAR */
.ai-topbar {
  display: flex;
  align-items: center;
  background: #f0f0f0;
  height: 40px;
  border-bottom: 1px solid #ccc;
  font-size: 13px;
  padding: 0 10px;
  flex-shrink: 0;
  justify-content: space-between;
}

.ai-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-text { font-weight: 700; color: #444; }

.ai-menu-bar {
  display: flex;
  flex-grow: 1;
  justify-content: center;
}

.ai-menu-item {
  position: relative;
  padding: 5px 12px;
  cursor: pointer;
  font-size: 12px;
}

.ai-top-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mobile-portfolio-label {
  font-weight: 800;
  font-size: 12px;
  color: #ff5722;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.panel-toggle {
  background: #e0e0e0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  color: #333;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* WORKSPACE */
.ai-workspace {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  position: relative;
}

/* TOOLBAR */
.ai-toolbar {
  width: 44px;
  background: #f0f0f0;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  z-index: 10;
}

.ai-tools-grid {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ai-tool-btn {
  background: transparent;
  border: none;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  color: #444;
}

.ai-tool-btn.active { background: #d0d0d0; color: #000; }

/* CANVAS AREA - THE MAIN STAGE */
.ai-canvas-area {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: #e6e6e6;
  overflow: hidden;
}

.ai-document-tabs {
  display: flex;
  background: #f0f0f0;
  border-bottom: 1px solid #ccc;
  height: 30px;
}

.ai-tab {
  padding: 0 15px;
  background: #fff;
  border-right: 1px solid #ccc;
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
  font-weight: 500;
}

.ai-canvas-viewport {
  flex-grow: 1;
  overflow: auto;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  -webkit-overflow-scrolling: touch;
}

.ai-canvas-scaler {
  transition: transform 0.2s ease-out;
  box-shadow: 0 10px 50px rgba(0,0,0,0.5);
}

.ai-status-bar {
  height: 32px;
  background: #f0f0f0;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  font-size: 11px;
  padding: 0 15px;
  justify-content: space-between;
}

.zoom-controls { display: flex; align-items: center; gap: 8px; }
.zoom-btn { background: #fff; border: 1px solid #ccc; border-radius: 4px; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; }
.zoom-label { min-width: 40px; text-align: center; font-weight: 600; cursor: pointer; }

.mobile-hint { font-weight: 500; color: #888; }

/* PANELS */
.ai-panels {
  width: 260px;
  background: #f0f0f0;
  border-left: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  z-index: 100;
}

.panel-header-title { font-weight: 700; flex-grow: 1; text-align: left; }

.ai-panel-header-icons {
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

.ai-panel-title {
  padding: 8px 15px;
  font-size: 12px;
  background: #e8e8e8;
  font-weight: 700;
  text-transform: uppercase;
}

.ai-panel-content { padding: 10px; background: #fff; }

/* RESPONSIVE UTILITIES */
.show-mobile { display: none; }

@media (max-width: 991px) {
  .ai-menu-bar, .hide-tablet { display: none !important; }
  .ai-panels {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: -10px 0 30px rgba(0,0,0,0.3);
  }
}

@media (max-width: 767px) {
  .hide-mobile { display: none !important; }
  .show-mobile { display: flex; }
  .ai-canvas-viewport { padding: 15px; }
  .ai-toolbar { width: 40px; }
  .ai-status-bar { height: 40px; }
}

@media (max-width: 575px) {
  .hide-mobile-small { display: none !important; }
  .ai-canvas-area { width: 100%; }
}

/* Transitions */
.panel-slide-enter-active, .panel-slide-leave-active { transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.panel-slide-enter-from, .panel-slide-leave-to { transform: translateX(100%); }

.float-right { float: right; }
.text-muted { color: #888; }
.color-tag { width: 10px; height: 10px; display: inline-block; border-radius: 2px; }
.ai-panel-dock { margin-top: auto; display: flex; background: #e0e0e0; }
.dock-icon { padding: 12px; flex-grow: 1; text-align: center; border-right: 1px solid #ccc; display: flex; justify-content: center; }
</style>
