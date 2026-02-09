
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


import portfolio_data from "~/data/portfolio_data";
import Header from "~/layouts/Header.vue";
import Foote from "~/layouts/Footer.vue";
import Breadcrumb from "~/components/common/Breadcrumb.vue";

useHead({
  title: "Project Nino - Modern Portfolio Nuxt js Template",
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
            <Breadcrumb title="Projects" :style_2="true" /> 
            <HomePortfolioArea
            :portfolio_data="portfolio_data"
            :handleImagePopup="handleImagePopup"
          />            
          </main>
          <Foote />
        </div>
      </div>

      <ImagePopup
      ref="image_popup"
      :images="portfolio_data.map((item) => item.image)"
    />
    <CommonScrollToTop />
    <CommonCursorBall />



  </div>
</template>

 