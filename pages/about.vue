
<script setup>

import { onMounted } from 'vue';

// gsap code here
import { gsap } from 'gsap';
const { $ScrollSmoother,$ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);
 

onMounted(async () => {
  const wow = await import("wow.js");
  new wow.default().init();
});

onMounted(() => {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 992px)", () => {
    $ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true
    });
  });

  mm.add("(max-width: 991px)", () => {
    gsap.set("#smooth-content", { clearProps: "all" });
  });
});

import Header from "~/layouts/Header.vue";
import Foote from "~/layouts/Footer.vue";
import Breadcrumb from "~/components/common/Breadcrumb.vue";

useSeoMeta({
  title: "About | Bilal Ahmed Mirza",
  ogTitle: "About | Bilal Ahmed Mirza",
  description: "Learn more about Bilal Ahmed Mirza, a Creative Lead and Operations Manager with a passion for UI/UX and automation.",
  ogDescription: "Creative Lead & Operations Manager specializing in high-impact digital experiences.",
});
 
</script>


<template>
  <div>

    <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="About Me" />
            <AboutResumeArea />
            <AboutSkillArea />
          </main>
          <Foote />
        </div>
      </div>

    <CommonScrollToTop />
    <CommonCursorBall />



  </div>
</template>

 