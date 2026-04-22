<script setup>
import IllustratorLayout from '~/components/portfolio-ui/IllustratorLayout.vue';

// This page renders IllustratorLayout directly in full-screen.
// We intentionally do NOT call openWindow() here — that would set shared
// useState(isOpen=true) which bleeds onto the home page after navigation.
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
/* NOTE: DO NOT add :global(body) overflow:hidden here — it leaks across page navigation in Nuxt */
</style>
