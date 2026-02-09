


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
  $ScrollSmoother.create({
    wrapper : '#smooth-wrapper',
    content : '#smooth-content',
    smooth: 2,
    effects: true   
  })
  
})


import Header from "~/layouts/Header.vue";
import Foote from "~/layouts/Footer.vue";
import Breadcrumb from "~/components/common/Breadcrumb.vue";

useHead({
  title: "Contact Nino - Modern Portfolio Nuxt js Template",
});


 
 
</script>


<template>
  <div>
    <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Say Hello" :style_3="true" />
            <HomeContactArea />              
          </main>
          <Foote />
        </div>
      </div>   
    <CommonScrollToTop />
    <CommonCursorBall />     

  </div>
</template>

 