<script setup>
// Redirect to homepage and open the illustrator window
const { openWindow } = useIllustratorWindow();

onMounted(() => {
  openWindow();
  navigateTo('/');
});
</script>

<template>
  <div class="illustrator-redirect-placeholder">
    Redirecting...
  </div>
</template>

<style scoped>
.illustrator-redirect-placeholder {
  display: none;
}
</style>
