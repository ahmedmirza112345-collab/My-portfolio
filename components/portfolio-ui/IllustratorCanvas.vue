<script setup>
import { 
  User, Home, Settings, BarChart3, LayoutGrid, Bell, 
  Search, CheckCircle2, ChevronRight, MousePointer2, 
  PenTool, Circle, Square, Minus, Layers
} from 'lucide-vue-next';

const props = defineProps({
  type: {
    type: String,
    default: 'logo' // logo, poster, ui
  }
});
</script>

<template>
  <div class="artboard" :class="type">
    
    <!-- ── LOGO DESIGN ARTBOARD ────────────────────────────────────── -->
    <div v-if="type === 'logo'" class="design-canvas logo-content">
      <div class="software-icons">
        <span class="icon-ai">Ai</span>
        <span class="icon-ps">Ps</span>
      </div>

      <div class="typography-group">
        <div class="letter-p">p</div>
        <div class="letter-o-face">
          <div class="eye left"></div>
          <div class="eye right"></div>
          <div class="mouth"></div>
        </div>
        <div class="letter-r">r</div>
        <div class="letter-t">t</div>
        <div class="letter-f-blue">f</div>
        <div class="letter-o">o</div>
        <div class="letter-l">l</div>
        <div class="letter-i">i</div>
        <div class="letter-o2">o</div>

        <div class="bounding-box p-box">
          <span class="handle tl"></span><span class="handle tr"></span>
          <span class="handle bl"></span><span class="handle br"></span>
        </div>
        <div class="bounding-box lio-box">
          <span class="handle tl"></span><span class="handle tr"></span>
          <span class="handle bl"></span><span class="handle br"></span>
        </div>

        <div class="blue-cursor">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M5 3l14 9-6 2 3 7-3 1-3-7-5 4z" fill="#fff" stroke="#4169E1" stroke-width="2"/>
          </svg>
        </div>

        <div class="vector-line">
          <svg width="200" height="50" viewBox="0 0 200 50">
            <path d="M10 25 Q 50 5, 90 25 T 180 15" fill="none" stroke="#4169E1" stroke-width="2"/>
            <circle cx="10" cy="25" r="3" fill="#fff" stroke="#4169E1" stroke-width="1.5"/>
            <circle cx="90" cy="25" r="3" fill="#fff" stroke="#4169E1" stroke-width="1.5"/>
            <circle cx="180" cy="15" r="3" fill="#4169E1" />
          </svg>
          <div class="pen-tool-icon"><PenTool :size="24" /></div>
        </div>
        <div class="badge-25">#25</div>
      </div>

      <div class="bottom-details">
        <div class="font-info">COOLVETICA<br>MTD HOUSTONER SCRIPT</div>
        <div class="color-swatches">
           <div class="swatch-row"><span class="sw-c">100%</span></div>
           <div class="swatch-row"><div class="swatch black"></div><div class="swatch blue"></div></div>
        </div>
        <div class="designer-sig">
          <div class="sig-text">Graphics<br>Designer</div>
          <div class="sig-script">J</div>
          <div class="bounding-box sig-box">
            <span class="handle tl"></span><span class="handle tr"></span>
            <span class="handle bl"></span><span class="handle br"></span>
          </div>
        </div>
        <div class="brand-name">NHANDIGIER</div>
      </div>
    </div>

    <!-- ── POSTER DESIGN ARTBOARD ──────────────────────────────────── -->
    <div v-else-if="type === 'poster'" class="design-canvas poster-content">
      <div class="poster-bg"></div>
      <div class="brutalist-grid"></div>
      
      <h2 class="vertical-text">DESIGN IS</h2>
      <h1 class="main-title">FREEDOM</h1>
      
      <div class="abstract-shapes">
        <div class="shape circle-outline"></div>
        <div class="shape rectangle-solid"></div>
        <div class="shape triangle-vector">
          <svg viewBox="0 0 100 100" width="120" height="120">
             <path d="M50 10 L90 90 L10 90 Z" fill="none" stroke="#4169E1" stroke-width="2" />
             <circle cx="50" cy="10" r="4" fill="#fff" stroke="#4169E1" />
             <circle cx="90" cy="90" r="4" fill="#fff" stroke="#4169E1" />
             <circle cx="10" cy="90" r="4" fill="#fff" stroke="#4169E1" />
          </svg>
        </div>
      </div>

      <div class="poster-footer">
        <div class="meta-data">
          <span>VOL. 04</span>
          <span>EST. 2026</span>
        </div>
        <div class="barcode"></div>
      </div>

      <div class="bounding-box main-box">
        <span class="handle tl"></span><span class="handle tr"></span>
        <span class="handle bl"></span><span class="handle br"></span>
      </div>
    </div>

    <!-- ── UI DESIGN ARTBOARD ──────────────────────────────────────── -->
    <div v-else-if="type === 'ui'" class="design-canvas ui-content">
      <div class="mobile-frame">
        <div class="status-bar">
          <span class="time">9:41</span>
          <div class="icons"><Bell :size="10" /> <div class="battery"></div></div>
        </div>
        
        <div class="app-header">
          <div class="user-profile">
            <div class="avatar"><User :size="16" /></div>
            <div class="welcome"><span>Welcome back,</span><strong>Ahmed Mirza</strong></div>
          </div>
          <div class="search-icon"><Search :size="18" /></div>
        </div>

        <div class="chart-section">
          <div class="chart-header"><span>Performance</span><BarChart3 :size="14" /></div>
          <div class="chart-viz">
            <div class="bar" style="height: 40%"></div>
            <div class="bar" style="height: 70%"></div>
            <div class="bar" style="height: 55%"></div>
            <div class="bar active" style="height: 90%"></div>
            <div class="bar" style="height: 45%"></div>
          </div>
        </div>

        <div class="cards-grid">
          <div class="ui-card">
             <div class="card-icon"><LayoutGrid :size="18" /></div>
             <p>Projects</p>
             <strong>24</strong>
          </div>
          <div class="ui-card active">
             <div class="card-icon"><CheckCircle2 :size="18" /></div>
             <p>Finished</p>
             <strong>18</strong>
          </div>
        </div>

        <div class="bottom-nav">
          <Home :size="20" class="active" />
          <LayoutGrid :size="20" />
          <div class="plus-btn">+</div>
          <Layers :size="20" />
          <Settings :size="20" />
        </div>
      </div>

      <!-- Anchor points for UI objects -->
      <div class="ui-anchors">
        <div class="anchor" style="top: 150px; left: 100px;"></div>
        <div class="anchor" style="top: 300px; left: 250px;"></div>
        <div class="anchor" style="top: 450px; left: 150px;"></div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.artboard {
  background: white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px; /* Space between artboards in workspace */
  flex-shrink: 0;
}

/* Specific Sizes */
.artboard.logo { width: 800px; height: 600px; }
.artboard.poster { width: 600px; height: 800px; }
.artboard.ui { width: 500px; height: 900px; }

.design-canvas {
  width: 100%;
  height: 100%;
  position: relative;
  font-family: 'Arial', sans-serif;
  overflow: hidden;
}

/* ── SHARED ELEMENTS ────────────────────────────────────────── */
.bounding-box { position: absolute; border: 1px solid #4169E1; pointer-events: none; }
.handle { position: absolute; width: 6px; height: 6px; background: white; border: 1px solid #4169E1; }
.tl { top: -3px; left: -3px; } .tr { top: -3px; right: -3px; }
.bl { bottom: -3px; left: -3px; } .br { bottom: -3px; right: -3px; }

/* ── LOGO CONTENT ────────────────────────────────────────────── */
.logo-content .software-icons { position: absolute; top: 100px; left: 50px; display: flex; gap: 10px; }
.logo-content .icon-ai, .logo-content .icon-ps { background: black; color: white; padding: 4px 6px; border-radius: 4px; font-weight: bold; font-size: 14px; }
.logo-content .typography-group { position: absolute; top: 220px; left: 50%; transform: translateX(-50%); display: flex; align-items: baseline; font-size: 120px; font-weight: 900; letter-spacing: -5px; color: #1a1a1a; }
.logo-content .letter-o-face { position: relative; width: 80px; height: 80px; border: 18px solid #1a1a1a; border-radius: 50%; margin: 0 10px; }
.logo-content .eye { width: 10px; height: 10px; background: #4169E1; position: absolute; top: 15px; }
.logo-content .eye.left { left: 10px; } .logo-content .eye.right { right: 10px; width: 25px; border-radius: 5px; }
.logo-content .letter-f-blue { font-family: 'Brush Script MT', cursive; font-size: 200px; color: #4169E1; transform: translateY(20px); z-index: 10; margin: 0 -20px; }
.logo-content .p-box { top: 10px; left: -5px; width: 85px; height: 110px; }
.logo-content .lio-box { top: 25px; right: -5px; width: 170px; height: 90px; }
.logo-content .vector-line { position: absolute; top: -120px; left: 150px; }
.logo-content .pen-tool-icon { position: absolute; right: -10px; top: -15px; color: #000; transform: rotate(-45deg); }
.logo-content .badge-25 { position: absolute; top: -100px; right: 0px; background: white; color: #4169E1; border: 2px solid #4169E1; font-size: 24px; font-weight: 900; padding: 2px 8px; }
.logo-content .bottom-details { position: absolute; bottom: 80px; left: 50px; width: 700px; display: flex; justify-content: space-between; align-items: flex-end; font-size: 10px; }
.logo-content .swatch { width: 20px; height: 20px; }
.logo-content .swatch.black { background: #1a1a1a; } .logo-content .swatch.blue { background: #4169E1; }
.logo-content .designer-sig { position: relative; color: #4169E1; }
.logo-content .sig-text { font-size: 24px; font-weight: 900; }
.logo-content .sig-script { position: absolute; top: 10px; left: 20px; font-family: 'Brush Script MT', cursive; font-size: 60px; color: #1a1a1a; opacity: 0.8; }
.logo-content .sig-box { top: -10px; left: -10px; width: 120%; height: 120%; border-color: rgba(255, 87, 34, 0.4); }

/* ── POSTER CONTENT ──────────────────────────────────────────── */
.poster-content { background: #fdfdfd; padding: 60px; display: flex; flex-direction: column; }
.poster-bg { position: absolute; inset: 0; background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%); z-index: 1; }
.brutalist-grid { position: absolute; inset: 0; background-image: linear-gradient(#eee 1px, transparent 1px), linear-gradient(90deg, #eee 1px, transparent 1px); background-size: 40px 40px; z-index: 2; opacity: 0.5; }
.poster-content .vertical-text { font-size: 40px; font-weight: 900; color: #4169E1; writing-mode: vertical-rl; transform: rotate(180deg); position: absolute; left: 60px; top: 60px; z-index: 3; letter-spacing: 5px; }
.poster-content .main-title { font-size: 140px; font-weight: 900; line-height: 0.8; margin-top: 100px; margin-left: 80px; color: #1a1a1a; z-index: 3; position: relative; }
.abstract-shapes { position: absolute; top: 350px; right: 50px; z-index: 3; }
.shape.circle-outline { width: 200px; height: 200px; border: 20px solid #1a1a1a; border-radius: 50%; margin-bottom: -100px; margin-left: 50px; }
.shape.rectangle-solid { width: 150px; height: 300px; background: #4169E1; opacity: 0.9; }
.poster-footer { position: absolute; bottom: 60px; left: 60px; right: 60px; display: flex; justify-content: space-between; align-items: flex-end; z-index: 3; }
.meta-data { font-weight: 900; font-size: 18px; display: flex; flex-direction: column; color: #1a1a1a; }
.barcode { width: 100px; height: 40px; background: repeating-linear-gradient(90deg, #1a1a1a, #1a1a1a 2px, transparent 2px, transparent 5px); }
.poster-content .main-box { top: 40px; left: 40px; right: 40px; bottom: 40px; border-width: 2px; }

/* ── UI CONTENT ──────────────────────────────────────────────── */
.ui-content { background: #f0f0f0; display: flex; align-items: center; justify-content: center; }
.mobile-frame { width: 375px; height: 812px; background: white; border-radius: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.15); border: 8px solid #1a1a1a; overflow: hidden; position: relative; }
.status-bar { padding: 15px 25px; display: flex; justify-content: space-between; align-items: center; font-weight: bold; font-size: 12px; }
.battery { width: 18px; height: 8px; border: 1px solid #1a1a1a; position: relative; border-radius: 2px; }
.battery::after { content: ''; position: absolute; right: -3px; top: 2px; width: 2px; height: 4px; background: #1a1a1a; }
.app-header { padding: 10px 25px; display: flex; justify-content: space-between; align-items: center; }
.user-profile { display: flex; gap: 12px; align-items: center; }
.avatar { width: 40px; height: 40px; background: #4169E1; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; }
.welcome { display: flex; flex-direction: column; line-height: 1.2; }
.welcome span { font-size: 12px; color: #888; }
.welcome strong { font-size: 16px; color: #1a1a1a; }
.chart-section { padding: 25px; }
.chart-header { display: flex; justify-content: space-between; margin-bottom: 20px; font-weight: bold; }
.chart-viz { display: flex; align-items: flex-end; gap: 15px; height: 120px; padding-bottom: 10px; border-bottom: 2px solid #f0f0f0; }
.chart-viz .bar { flex-grow: 1; background: #eee; border-radius: 4px; transition: height 0.3s; }
.chart-viz .bar.active { background: #4169E1; }
.cards-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; padding: 0 25px; }
.ui-card { background: #f8f8f8; padding: 20px; border-radius: 20px; }
.ui-card.active { background: #1a1a1a; color: white; }
.card-icon { margin-bottom: 15px; color: #4169E1; }
.bottom-nav { position: absolute; bottom: 0; width: 100%; height: 80px; background: white; border-top: 1px solid #eee; display: flex; justify-content: space-around; align-items: center; color: #ccc; }
.bottom-nav .active { color: #4169E1; }
.plus-btn { width: 45px; height: 45px; background: #1a1a1a; border-radius: 15px; color: white; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; margin-top: -40px; border: 4px solid white; }
.ui-anchors .anchor { position: absolute; width: 8px; height: 8px; background: #fff; border: 1px solid #4169E1; border-radius: 50%; }
</style>
