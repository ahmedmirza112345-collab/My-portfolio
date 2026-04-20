
<script setup>

const props = defineProps({

handleImagePopup: {
  type: Function
},
portfolio_data: {
  type: Array
}
})

  


</script>

<template>
    <div class="projects-area" id="projects">
        <div class="custom-icon">
            <img src="assets/images/custom/work-scribble.svg" alt="custom">
        </div>
        <div class="container-fluid">
            <div class="row g-4 portfolio-grid">
                <!-- START SINGLE PORTFOLIO DESIGN AREA -->

                <div v-for="(item, i) in portfolio_data" :key="i" :class="`col-md-6 col-xl-${item.col} portfolio-item category-1`">
                    <NuxtLink to="/single-project" class="work-popup">
                        <div class="portfolio-box">
                            <!-- Image -->
                            <img :src="item.image" alt="" data-rjs="2">
                            <!-- Hover text removed as requested -->
                        </div>
                    </NuxtLink>
                </div> 
            </div>
        </div>
    </div>
</template>