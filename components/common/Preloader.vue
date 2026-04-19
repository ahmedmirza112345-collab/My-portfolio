<script setup>
import { ref, onMounted } from 'vue';

const isLoading = ref(true);
const counter = ref(0);

onMounted(() => {
  // Smoothly increment counter to 100% to simulate real loading
  let current = 0;
  const updateCounter = () => {
    // Randomly jump between 1 and 4 percent
    current += Math.floor(Math.random() * 4) + 1; 
    if (current > 100) current = 100;
    counter.value = current;
    
    if (current < 100) {
      // Random delay between ticks for a realistic tech feel
      setTimeout(updateCounter, 25 + Math.random() * 40); 
    } else {
      // Hold at 100% for just half a second before firing the exit animation
      setTimeout(() => {
        isLoading.value = false;
      }, 500); 
    }
  };
  
  updateCounter();
});
</script>

<template>
  <Transition name="studio-exit">
    <div v-if="isLoading" class="studio-preloader">
      
      <div class="pixel-grid-bg"></div>

      <div class="exit-overlay overlay-green"></div>
      <div class="exit-overlay overlay-dark"></div>

      <div class="loader-content">
        <div class="counter-wrap">
          <span class="counter-number">{{ counter }}</span>
          <span class="counter-percent">%</span>
        </div>
        
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: counter + '%' }"></div>
        </div>
        
        <div class="loading-label">SYSTEM INITIALIZING</div>
      </div>
      
    </div>
  </Transition>
</template>

<style scoped>
/* Full screen dark wrapper */
.studio-preloader {
  position: fixed;
  inset: 0;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F4F3ED; /* Deep dark base */
  overflow: hidden;
}

/* Subtle pixel/dot grid background */
.pixel-grid-bg {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(#333 1px, transparent 1px);
  background-size: 35px 35px;
  opacity: 0.4;
  z-index: 1;
}

/* Content container */
.loader-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
}

/* Large Counter Typography */
.counter-wrap {
  display: flex;
  align-items: baseline;
  color: #000000;
  margin-bottom: 20px;
}

.counter-number {
  font-size: 90px;
  font-weight: 800;
  line-height: 1;
  font-family: 'Courier New', Courier, monospace; /* Technical font */
  letter-spacing: -3px;
}

.counter-percent {
  font-size: 35px;
  font-weight: 600;
  color: #ff002b; /* Your theme's green */
  margin-left: 5px;
}

/* Sleek Progress Bar */
.progress-bar {
  width: 100%;
  height: 2px;
  background-color: #222;
  position: relative;
  overflow: hidden;
  margin-bottom: 15px;
}

.progress-fill {
  height: 100%;
  background-color: #ff0000b1;
  transition: width 0.05s linear; /* Snappy width updates */
}

/* Tech Label */
.loading-label {
  font-size: 11px;
  letter-spacing: 8px;
  color: #666;
  text-transform: uppercase;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

/* --- THE MULTI-LAYERED EXIT ANIMATION --- */

/* The solid blocks that slide up at the end */
.exit-overlay {
  position: absolute;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  transform: translateY(100%); /* Hidden at the bottom initially */
}

.overlay-dark { background-color: #1a1a1a; }
.overlay-green { background-color: #28a745; }

/* 1. When leaving, immediately fade out the text/grid */
.studio-exit-leave-active .loader-content,
.studio-exit-leave-active .pixel-grid-bg {
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* 2. Slide up the dark block */
.studio-exit-leave-active .overlay-dark {
  animation: sweepUp 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
}

/* 3. Slide up the green block slightly behind it */
.studio-exit-leave-active .overlay-green {
  animation: sweepUp 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards 0.15s;
}

/* 4. Slide up the main background slightly behind the green block to reveal the site */
.studio-exit-leave-active.studio-preloader {
  animation: sweepUp 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards 0.3s;
}

/* The sweeping motion */
@keyframes sweepUp {
  0% { transform: translateY(0%); }
  100% { transform: translateY(-100%); }
}
</style>