
<script setup>

import { onMounted, ref } from 'vue';

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



import project_data from "~/data/project_data";

import Header from "~/layouts/Header.vue";
import Foote from "~/layouts/Footer.vue";
import Breadcrumb from "~/components/common/Breadcrumb.vue";

useHead({
  title: "Single Project Nino - Modern Portfolio Nuxt js Template",
});


import ImagePopup from "~/components/common/ImagePopup.vue";
import "vue-easy-lightbox/external-css/vue-easy-lightbox.css";

const image_popup = ref(null);

function handleImagePopup(index) {
  image_popup.value.showImg(index);
}

 
</script>


<template>
  <div>
    <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Branch with Flowers" :style_3="true" />
            <SingleProjectArea :project_data="project_data" :handleImagePopup="handleImagePopup" />        
          </main>
          <Foote />
        </div>
      </div>

      <ImagePopup
      ref="image_popup"
      :images="project_data.map((item) => item.image)"
    />
    <CommonScrollToTop />
    <CommonCursorBall />

  </div>
</template>

 