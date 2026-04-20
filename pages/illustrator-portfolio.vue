<script setup>
import { onMounted } from 'vue';
import IllustratorLayout from '~/components/portfolio-ui/IllustratorLayout.vue';

// Remove the automatic redirect to keep users on this dedicated portfolio page.
// This ensures a stable, responsive experience for both mobile and desktop.
const { openWindow } = useIllustratorWindow();

onMounted(() => {
  // We still trigger the state just in case other components need to know it's "open"
  openWindow();
});
</script>

<template>
  <div class="illustrator-page-wrapper">
    <!-- Full Screen App View -->
    <div class="full-screen-app">
      <IllustratorLayout />
    </div>
  </div>
</template>

<style scoped>
.illustrator-page-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh; /* Dynamic viewport height for mobile browsers */
  background: #1a1a1a;
  z-index: 9999;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.full-screen-app {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Ensure body doesn't scroll when this page is open */
:global(body) {
  overflow: hidden !important;
  height: 100% !important;
}
</style>
