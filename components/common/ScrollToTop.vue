<template>
  <div
    class="progress-wrap cursor-pointer"
    :class="{ 'active-progress': isActive }"
    @click="scrollTop"
  >
    <i class="ri-arrow-up-s-line"></i>
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path ref="progressRef" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showScroll = ref(false);
const isActive = ref(false);
const progressRef = ref(null);
const offset = 150;
const duration = 550;

const checkScrollTop = () => {
  showScroll.value = window.pageYOffset > 400;
};

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const updateProgress = () => {
  const progressPath = progressRef.value;
  if (!progressPath) return;

  const pathLength = progressPath.getTotalLength();
  const scroll = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = pathLength - (scroll * pathLength) / height;
  progressPath.style.strokeDashoffset = `${progress}`;
  isActive.value = scroll > offset;
};

onMounted(() => {
  const progressPath = progressRef.value;
  if (progressPath) {
    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';
  }

  window.addEventListener('scroll', checkScrollTop);
  window.addEventListener('scroll', updateProgress);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollTop);
  window.removeEventListener('scroll', updateProgress);
});
</script>
 
