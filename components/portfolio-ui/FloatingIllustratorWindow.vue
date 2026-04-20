<script setup>
import { ref, reactive, computed, onUnmounted } from 'vue';
import { Layout, Maximize2, X, Minus, Square } from 'lucide-vue-next';
import IllustratorLayout from './IllustratorLayout.vue';

const { isOpen, isMinimized, closeWindow, minimizeWindow, restoreWindow } = useIllustratorWindow();

// ── Window geometry ───────────────────────────────────────────
const isMaximized = ref(false);
// Start windowed at 90% of viewport, capped at 1200x750
const getDefaultWin = () => (process.client
  ? { x: 40, y: 40, w: Math.min(1200, Math.round(window.innerWidth * 0.88)), h: Math.min(750, Math.round(window.innerHeight * 0.88)) }
  : { x: 40, y: 40, w: 1100, h: 680 });
const WIN = ref({ x: 40, y: 40, w: 1100, h: 680 });
const win = reactive({ ...WIN.value });

onMounted(() => {
  const d = getDefaultWin();
  WIN.value = d;
  Object.assign(win, d);
});
const isDragging = ref(false);

// ── Drag (with 5px threshold so button clicks don't drag) ─────
const initDrag = (e) => {
  if (isMaximized.value) return;
  const startX = e.clientX, startY = e.clientY;
  const startWinX = win.x, startWinY = win.y;
  let started = false;

  const move = (e) => {
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if (!started && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
      started = true;
      isDragging.value = true;
    }
    if (started) {
      win.x = Math.max(0, Math.min(startWinX + dx, window.innerWidth - win.w));
      win.y = Math.max(0, Math.min(startWinY + dy, window.innerHeight - 50));
    }
  };
  const up = () => {
    isDragging.value = false;
    window.removeEventListener('mousemove', move);
    window.removeEventListener('mouseup', up);
  };
  window.addEventListener('mousemove', move);
  window.addEventListener('mouseup', up);
};

// ── Resize ───────────────────────────────────────────────────
const isResizing = ref(false);
let rDir = '', rsX = 0, rsY = 0, rsW = 0, rsH = 0, rsPX = 0, rsPY = 0;
const MIN_W = 600, MIN_H = 400;

const startResize = (e, dir) => {
  if (isMaximized.value) return;
  e.preventDefault(); e.stopPropagation();
  isResizing.value = true; rDir = dir;
  rsX = e.clientX; rsY = e.clientY;
  rsW = win.w; rsH = win.h; rsPX = win.x; rsPY = win.y;
  window.addEventListener('mousemove', onResize);
  window.addEventListener('mouseup', stopResize);
};
const onResize = (e) => {
  if (!isResizing.value) return;
  const dx = e.clientX - rsX, dy = e.clientY - rsY;
  if (rDir.includes('e')) win.w = Math.max(MIN_W, rsW + dx);
  if (rDir.includes('s')) win.h = Math.max(MIN_H, rsH + dy);
  if (rDir.includes('w')) { const nw = Math.max(MIN_W, rsW - dx); win.x = rsPX + (rsW - nw); win.w = nw; }
  if (rDir.includes('n')) { const nh = Math.max(MIN_H, rsH - dy); win.y = rsPY + (rsH - nh); win.h = nh; }
};
const stopResize = () => {
  isResizing.value = false;
  window.removeEventListener('mousemove', onResize);
  window.removeEventListener('mouseup', stopResize);
};

// ── Maximize ─────────────────────────────────────────────────
const handleToggleMaximize = () => {
  if (isMaximized.value) { isMaximized.value = false; Object.assign(win, WIN.value); }
  else isMaximized.value = true;
};

const windowStyle = computed(() => isMaximized.value
  ? { left: '0', top: '0', width: '100vw', height: '100vh', borderRadius: '0' }
  : { left: win.x + 'px', top: win.y + 'px', width: win.w + 'px', height: win.h + 'px' }
);

onUnmounted(() => {
  window.removeEventListener('mousemove', onResize);
  window.removeEventListener('mouseup', stopResize);
});
</script>

<template>
  <Teleport to="body">
    <template v-if="isOpen">

      <!-- ── MINIMIZED thumbnail in bottom-right ────────────── -->
      <Transition name="mini">
        <div v-if="isMinimized" class="mini-thumb">
          <div class="mini-titlebar">
            <Layout :size="14" color="currentColor" :stroke-width="2" style="color:#ff5722;" />
            <span class="mini-title">Portfolio Design.ai</span>
            <button class="mini-btn" @click.stop="restoreWindow" title="Restore">
              <Maximize2 :size="13" color="currentColor" :stroke-width="2" />
            </button>
            <button class="mini-btn close" @click.stop="closeWindow" title="Close">
              <X :size="13" color="currentColor" :stroke-width="2" />
            </button>
          </div>
          <div class="mini-preview" @click="restoreWindow">
            <span class="mini-word">port<span style="color:#ff5722">f</span>olio</span>
          </div>
          <div class="mini-footer" @click="restoreWindow">Click to restore</div>
        </div>
      </Transition>

      <!-- ── FULL floating window ──────────────────────────── -->
      <Transition name="window">
        <div
          v-if="!isMinimized"
          class="floating-window"
          :class="{ maximized: isMaximized, dragging: isDragging }"
          :style="windowStyle"
        >
          <!-- Resize handles (windowed only) -->
          <template v-if="!isMaximized">
            <div class="rh n"  @mousedown.stop="startResize($event,'n')"></div>
            <div class="rh ne" @mousedown.stop="startResize($event,'ne')"></div>
            <div class="rh e"  @mousedown.stop="startResize($event,'e')"></div>
            <div class="rh se" @mousedown.stop="startResize($event,'se')"></div>
            <div class="rh s"  @mousedown.stop="startResize($event,'s')"></div>
            <div class="rh sw" @mousedown.stop="startResize($event,'sw')"></div>
            <div class="rh w"  @mousedown.stop="startResize($event,'w')"></div>
            <div class="rh nw" @mousedown.stop="startResize($event,'nw')"></div>
          </template>

          <!-- Windows-style title bar (DRAG HANDLE) -->
          <div class="win-titlebar" @mousedown="initDrag" @dblclick="handleToggleMaximize">
            <div class="win-title-left">
              <Layout :size="16" color="currentColor" :stroke-width="2" style="color:#ff5722;" />
              <span class="win-title-text">Portfolio Design.ai — Adobe Illustrator</span>
            </div>
            <div class="win-controls">
              <!-- Minimize -->
              <button class="wc wc-min" @click.stop="minimizeWindow" title="Minimize">
                <Minus :size="16" color="currentColor" :stroke-width="2" />
              </button>
              <!-- Maximize / Restore -->
              <button class="wc wc-max" @click.stop="handleToggleMaximize" :title="isMaximized ? 'Restore' : 'Maximize'">
                <Square :size="14" color="currentColor" :stroke-width="2" />
              </button>
              <!-- Close -->
              <button class="wc wc-close" @click.stop="closeWindow" title="Close">
                <X :size="16" color="currentColor" :stroke-width="2" />
              </button>
            </div>
          </div>

          <!-- App content (no longer emits window controls — title bar owns them) -->
          <IllustratorLayout />
        </div>
      </Transition>

    </template>
  </Teleport>
</template>

<style scoped>
/* ── Floating window ───────────────────────────────────────── */
.floating-window {
  position: fixed;
  z-index: 8000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08);
}
.floating-window.dragging { cursor: grabbing; }
.floating-window.dragging * { pointer-events: none; }

/* ── Windows-style title bar ───────────────────────────────── */
.win-titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1f1f1f;
  height: 32px;
  padding: 0 0 0 10px;
  flex-shrink: 0;
  cursor: grab;
  user-select: none;
  border-bottom: 1px solid #3a3a3a;
}
.win-titlebar:active { cursor: grabbing; }

.win-title-left {
  display: flex;
  align-items: center;
  gap: 7px;
  flex-grow: 1;
  overflow: hidden;
}
.win-title-text {
  font-size: 12px;
  color: #ccc;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Segoe UI', sans-serif;
}

/* Windows control buttons */
.win-controls {
  display: flex;
  align-items: stretch;
  height: 100%;
}
.wc {
  width: 46px;
  height: 100%;
  background: transparent;
  border: none;
  color: #ccc;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  font-family: 'Segoe UI', 'Segoe MDL2 Assets', sans-serif;
  padding: 0;
}
.wc:hover { background: rgba(255,255,255,0.1); color: #fff; }
.wc-close:hover { background: #c42b1c; color: #fff; }

/* ── Resize handles ────────────────────────────────────────── */
.rh { position: absolute; z-index: 200; }
.rh.n  { top:-4px; left:8px; right:8px; height:8px; cursor:n-resize; }
.rh.s  { bottom:-4px; left:8px; right:8px; height:8px; cursor:s-resize; }
.rh.e  { right:-4px; top:8px; bottom:8px; width:8px; cursor:e-resize; }
.rh.w  { left:-4px; top:8px; bottom:8px; width:8px; cursor:w-resize; }
.rh.ne { top:-4px; right:-4px; width:14px; height:14px; cursor:ne-resize; }
.rh.nw { top:-4px; left:-4px; width:14px; height:14px; cursor:nw-resize; }
.rh.se { bottom:-4px; right:-4px; width:14px; height:14px; cursor:se-resize; }
.rh.sw { bottom:-4px; left:-4px; width:14px; height:14px; cursor:sw-resize; }

/* ── Minimized thumbnail ───────────────────────────────────── */
.mini-thumb {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 220px;
  background: #1a1a1a;
  border: 1px solid rgba(255,255,255,0.1);
  z-index: 8001;
  box-shadow: 0 12px 40px rgba(0,0,0,0.7);
  transition: transform 0.2s, box-shadow 0.2s;
  font-family: 'Segoe UI', sans-serif;
}
.mini-thumb:hover { transform: translateY(-3px); box-shadow: 0 18px 50px rgba(0,0,0,0.8); }

.mini-titlebar {
  background: #1f1f1f;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 0 6px 8px;
  height: 30px;
  border-bottom: 1px solid #333;
}
.mini-title {
  font-size: 11px;
  color: #ccc;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mini-btn {
  width: 30px;
  height: 100%;
  background: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  padding: 0;
}
.mini-btn:hover { background: rgba(255,255,255,0.1); color: #fff; }
.mini-btn.close:hover { background: #c42b1c; color: #fff; }

.mini-preview {
  height: 100px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.mini-word {
  font-size: 26px;
  font-weight: 900;
  color: #1a1a1a;
  letter-spacing: -1px;
}
.mini-footer {
  text-align: center;
  padding: 5px;
  font-size: 10px;
  color: #555;
  background: #111;
  cursor: pointer;
}
.mini-footer:hover { color: #ff5722; }

/* ── Transitions ───────────────────────────────────────────── */
.window-enter-active, .window-leave-active { transition: opacity 0.2s, transform 0.2s; }
.window-enter-from, .window-leave-to { opacity: 0; transform: scale(0.97); }
.mini-enter-active, .mini-leave-active { transition: opacity 0.2s, transform 0.2s; }
.mini-enter-from, .mini-leave-to { opacity: 0; transform: translateY(15px); }
</style>
