<script setup>
import { ref, onMounted } from 'vue';
import { X, ChevronRight, ChevronLeft, Lightbulb } from 'lucide-vue-next';

const props = defineProps({
  steps: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['complete']);

const currentStep = ref(0);
const isVisible = ref(false);

const startTour = () => {
  currentStep.value = 0;
  isVisible.value = true;
};

const nextStep = () => {
  if (currentStep.value < props.steps.length - 1) {
    currentStep.value++;
  } else {
    completeTour();
  }
};

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

const completeTour = () => {
  isVisible.value = false;
  emit('complete');
  localStorage.setItem('portfolio_tour_completed', 'true');
};

defineExpose({ startTour });

onMounted(() => {
  // Tour no longer auto-starts to prevent unintended scroll/interaction blocks.
  // It only starts when the user manually clicks the 'Help' icon.
});
</script>

<template>
  <div v-if="isVisible" class="tour-overlay">
    <div class="tour-card" :style="steps[currentStep].positionStyle">
      <div class="tour-header">
        <div class="step-indicator">
          <Lightbulb :size="16" /> Step {{ currentStep + 1 }} of {{ steps.length }}
        </div>
        <button class="close-btn" @click="completeTour"><X :size="18" /></button>
      </div>
      
      <div class="tour-body">
        <h3>{{ steps[currentStep].title }}</h3>
        <p>{{ steps[currentStep].content }}</p>
      </div>
      
      <div class="tour-footer">
        <button class="skip-btn" @click="completeTour">Skip Tour</button>
        <div class="nav-btns">
          <button v-if="currentStep > 0" class="nav-btn prev" @click="prevStep">
            <ChevronLeft :size="16" />
          </button>
          <button class="nav-btn next" @click="nextStep">
            {{ currentStep === steps.length - 1 ? 'Finish' : 'Next' }}
            <ChevronRight v-if="currentStep < steps.length - 1" :size="16" />
          </button>
        </div>
      </div>
      
      <!-- Arrow pointing to target -->
      <div class="tour-arrow" :class="steps[currentStep].arrowClass"></div>
    </div>
    
    <!-- Highlight Overlay Hole (Simplified) -->
    <div class="tour-highlight" :style="steps[currentStep].highlightStyle"></div>
  </div>
</template>

<style scoped>
.tour-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10000;
  pointer-events: all;
}

.tour-card {
  position: absolute;
  background: #fff;
  border-radius: 12px;
  width: 320px;
  padding: 20px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  z-index: 10001;
  color: #333;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.tour-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.step-indicator {
  font-size: 12px;
  font-weight: 700;
  color: #4169E1;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 6px;
}

.close-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #888;
}

.tour-body h3 {
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 10px;
  color: #000;
}

.tour-body p {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
}

.tour-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skip-btn {
  background: transparent;
  border: none;
  font-size: 13px;
  color: #888;
  cursor: pointer;
  padding: 0;
}

.nav-btns {
  display: flex;
  gap: 10px;
}

.nav-btn {
  background: #000;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

.nav-btn.prev {
  background: #eee;
  color: #333;
  padding: 8px;
}

.tour-highlight {
  position: absolute;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  pointer-events: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid #4169E1;
}

/* Arrow Logic */
.tour-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.arrow-left {
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
  border-width: 10px 10px 10px 0;
  border-color: transparent #fff transparent transparent;
}

.arrow-right {
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #fff;
}

.arrow-top {
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent #fff transparent;
}

.arrow-bottom {
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 10px 10px 0 10px;
  border-color: #fff transparent transparent transparent;
}

@media (max-width: 767px) {
  .tour-card {
    width: 90vw;
    left: 5vw !important;
    top: auto !important;
    bottom: 20px !important;
    transform: none !important;
  }
  .tour-arrow { display: none; }
}
</style>
