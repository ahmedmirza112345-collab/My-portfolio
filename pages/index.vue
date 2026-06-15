
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
    // Disable smooth scrolling on mobile for better performance
    // and to avoid layout shifts/lag on low-end devices
    gsap.set("#smooth-content", { clearProps: "all" });
  });
});



import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
import portfolio_data from "~/data/portfolio_data";

useSeoMeta({
  title: "Bilal Ahmed Mirza | Full-Stack Creative Lead",
  ogTitle: "Bilal Ahmed Mirza | Full-Stack Creative Lead",
  description: "Portfolio of Bilal Ahmed Mirza. High-conversion Full-Stack Creative Lead specializing in UI/UX, WordPress, Automation, and Digital Branding.",
  ogDescription: "Creative Lead & Operations Manager specializing in high-impact digital experiences.",
  ogImage: "https://mirza-bilal-portfolio.netlify.app/assets/images/about/me.jpg",
  twitterCard: "summary_large_image",
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
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <HomeHeroArea />
          <HomeAboutArea />
          <AboutResumeArea />
          <AboutSkillArea />
          <HomeServiceArea />
          <HomePortfolioCTA />
          <HomeContactArea />
        </main>
        <Footer />
      </div>
    </div>

    <ImagePopup
      ref="image_popup"
      :images="portfolio_data.map((item) => item.image)"
    />

    <CommonScrollToTop />
    <CommonCursorBall />

    <!-- Floating Illustrator window (lives here, over the site) -->
    <PortfolioUiFloatingIllustratorWindow />
  </div>
</template>

