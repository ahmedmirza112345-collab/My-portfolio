<script setup>
import { ref, onMounted } from 'vue';

// State to control when the preloader shows
const isLoading = ref(true);

onMounted(() => {
  // Waits 1 second after the page loads, then fades out
  setTimeout(() => {
    isLoading.value = false;
  }, 1000); 
});
</script>

<template>
  <Transition name="fade">
    <div v-if="isLoading" class="preloader-overlay">
      <div class="spinner"></div>
    </div>
  </Transition>
</template>

<style scoped>
/* Full screen dark background */
.preloader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #161616; /* Matches your site's dark theme */
  z-index: 999999; /* Ensures it stays on top of absolutely everything */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Green spinning circle */
.spinner {
  width: 60px;
  height: 60px;
  border: 4px solid #333; /* Dark grey border */
  border-top-color: #28a745; /* Your theme's green color */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Animation rule */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Smooth fade out effect */
.fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}
.fade-leave-to {
  opacity: 0;
}
</style>