<script setup>
</script>

<template>
  <div class="artboard">
    
    <div class="design-canvas">
      
      <!-- Top Left AI/PS Icons -->
      <div class="software-icons">
        <span class="icon-ai">Ai</span>
        <span class="icon-ps">Ps</span>
      </div>



      <!-- Main Typography "portfolio" -->
      <div class="typography-group">
        <div class="letter-p">p</div>
        
        <!-- The 'o' with a face -->
        <div class="letter-o-face">
          <div class="eye left"></div>
          <div class="eye right"></div>
          <div class="mouth"></div>
        </div>

        <div class="letter-r">r</div>
        
        <div class="letter-t">t</div>
        
        <!-- Large Orange 'f' -->
        <div class="letter-f-orange">f</div>
        
        <div class="letter-o">o</div>
        <div class="letter-l">l</div>
        <div class="letter-i">i</div>
        <div class="letter-o2">o</div>

        <!-- Bounding Box around 'p' -->
        <div class="bounding-box p-box">
          <span class="handle tl"></span><span class="handle tr"></span>
          <span class="handle bl"></span><span class="handle br"></span>
        </div>

        <!-- Bounding Box around 'lio' -->
        <div class="bounding-box lio-box">
          <span class="handle tl"></span><span class="handle tr"></span>
          <span class="handle bl"></span><span class="handle br"></span>
        </div>

        <!-- Custom Orange Cursor -->
        <div class="orange-cursor">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M5 3l14 9-6 2 3 7-3 1-3-7-5 4z" fill="#fff" stroke="#ff5722" stroke-width="2"/>
          </svg>
        </div>

        <!-- Top curved line with anchor points -->
        <div class="vector-line">
          <svg width="200" height="50" viewBox="0 0 200 50">
            <path d="M10 25 Q 50 5, 90 25 T 180 15" fill="none" stroke="#ff5722" stroke-width="2"/>
            <circle cx="10" cy="25" r="3" fill="#fff" stroke="#ff5722" stroke-width="1.5"/>
            <circle cx="90" cy="25" r="3" fill="#fff" stroke="#ff5722" stroke-width="1.5"/>
            <circle cx="180" cy="15" r="3" fill="#ff5722" />
          </svg>
          <div class="pen-tool-icon"><i class="ri-pen-nib-fill"></i></div>
        </div>

        <!-- #25 Badge -->
        <div class="badge-25">#25</div>
      </div>

      <!-- Bottom text & details -->
      <div class="bottom-details">
        <div class="font-info">
          COOLVETICA<br>
          MTD HOUSTONER SCRIPT
        </div>
        
        <div class="color-swatches">
           <div class="swatch-row">
             <span class="sw-c">100%</span>
           </div>
           <div class="swatch-row">
             <div class="swatch black"></div>
             <div class="swatch orange"></div>
           </div>
        </div>

        <div class="designer-sig">
          <div class="sig-text">Graphics<br>Designer</div>
          <div class="sig-script">J</div>
          <!-- Bounding box around signature -->
          <div class="bounding-box sig-box">
            <span class="handle tl"></span><span class="handle tr"></span>
            <span class="handle bl"></span><span class="handle br"></span>
          </div>
        </div>

        <div class="brand-name">
          NHANDIGIER
        </div>
      </div>



    </div>
  </div>
</template>

<style scoped>
.artboard {
  width: 800px;
  height: 600px;
  background: white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.design-canvas {
  width: 100%;
  height: 100%;
  position: relative;
  font-family: 'Arial', sans-serif;
}

/* Icons */
.software-icons {
  position: absolute;
  top: 100px;
  left: 50px;
  display: flex;
  gap: 10px;
}
.icon-ai, .icon-ps {
  background: black;
  color: white;
  padding: 4px 6px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
}

/* Vector Line */
.vector-line {
  position: absolute;
  top: -120px;
  left: 150px;
}
.pen-tool-icon {
  position: absolute;
  right: -10px;
  top: -15px;
  font-size: 24px;
  color: #000;
  transform: rotate(-45deg);
}

/* Badge */
.badge-25 {
  position: absolute;
  top: -100px;
  right: 0px;
  background: white;
  color: #ff5722;
  border: 2px solid #ff5722;
  font-size: 24px;
  font-weight: 900;
  padding: 2px 8px;
}

/* Typography Group */
.typography-group {
  position: absolute;
  top: 220px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: baseline;
  font-size: 120px;
  font-weight: 900;
  letter-spacing: -5px;
  color: #1a1a1a;
}

.letter-o-face {
  position: relative;
  width: 80px;
  height: 80px;
  border: 18px solid #1a1a1a;
  border-radius: 50%;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.eye {
  width: 10px;
  height: 10px;
  background: #ff5722;
  position: absolute;
  top: 15px;
}
.eye.left { left: 10px; }
.eye.right { right: 10px; width: 25px; border-radius: 5px; }

.letter-f-orange {
  font-family: 'Brush Script MT', cursive;
  font-size: 200px;
  color: #ff5722;
  font-weight: normal;
  margin: 0 -20px;
  z-index: 10;
  transform: translateY(20px);
}

/* Bounding Boxes */
.bounding-box {
  position: absolute;
  border: 1px solid #ff5722;
  pointer-events: none;
}
.handle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: white;
  border: 1px solid #ff5722;
}
.tl { top: -3px; left: -3px; }
.tr { top: -3px; right: -3px; }
.bl { bottom: -3px; left: -3px; }
.br { bottom: -3px; right: -3px; }

.p-box {
  top: 10px; left: -5px; width: 85px; height: 110px;
}
.lio-box {
  top: 25px; right: -5px; width: 170px; height: 90px;
}

/* Bottom Details */
.bottom-details {
  position: absolute;
  bottom: 80px;
  left: 50px;
  width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.font-info {
  font-size: 10px;
  font-weight: bold;
  line-height: 1.5;
}

.color-swatches {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.sw-c { font-size: 10px; font-weight: bold; }
.swatch-row { display: flex; gap: 5px; }
.swatch { width: 20px; height: 20px; }
.swatch.black { background: #1a1a1a; }
.swatch.orange { background: #ff5722; }

.designer-sig {
  position: relative;
  text-align: center;
  color: #ff5722;
}
.sig-text {
  font-size: 24px;
  font-weight: 900;
  line-height: 1;
}
.sig-script {
  position: absolute;
  top: 10px;
  left: 20px;
  font-family: 'Brush Script MT', cursive;
  font-size: 60px;
  color: #1a1a1a;
  opacity: 0.8;
}
.sig-box {
  top: -10px; left: -10px; width: 120%; height: 120%;
  border-color: rgba(255, 87, 34, 0.4);
}

.brand-name {
  font-weight: 900;
  font-size: 14px;
}

.orange-cursor {
  position: absolute;
  bottom: 0px;
  left: 60px;
  z-index: 100;
}
</style>
