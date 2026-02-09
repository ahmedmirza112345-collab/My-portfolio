
<template>
  <div id="magic-cursor">
    <div id="ball" :ref="cursorBall"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";

let cursorBall = null;

const onMouseMove = (e) => {
  // Update cursor position and opacity on mousemove
  gsap.to(cursorBall, {
    duration: 0.3,
    x: e.clientX,
    y: e.clientY,
    opacity: 1,
    ease: "power2.out",
  });
};

const addHoverEffects = () => {
  const hoverElements = document.querySelectorAll("a");
  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursorBall.classList.add("hovered");
      gsap.to(cursorBall, {
        duration: 0.3,
        scale: 2,
        opacity: 0,
        ease: 0.1,
      });
    });

    element.addEventListener("mouseleave", () => {
      cursorBall.classList.remove("hovered");
      gsap.to(cursorBall, {
        duration: 0.3,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
      });
    });
  });
};

onMounted(() => {
  cursorBall = document.getElementById("ball");
  document.addEventListener("mousemove", onMouseMove);
  addHoverEffects();
});

onUnmounted(() => {
  document.removeEventListener("mousemove", onMouseMove);
});
</script>

