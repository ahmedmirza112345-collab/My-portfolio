
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
    <div class="projects-area" id="portfolio">
        <div class="custom-icon">
            <img src="assets/images/custom/work-scribble.svg" alt="custom">
        </div>
        <div class="container-fluid">
            <div class="row g-4 portfolio-grid">
                <!-- START SINGLE PORTFOLIO DESIGN AREA -->

                <div v-for="(item, i) in portfolio_data" :key="i" :class="`col-md-6 col-xl-${item.col} portfolio-item category-1`">
                    <a 
                    style="cursor: pointer"
                    @click.prevent="handleImagePopup(i)"
                     class="work-popup">
                        <div class="portfolio-box">
                            <!-- Image -->
                            <img :src="item.image" alt="" data-rjs="2">
                            <!-- Category -->
                            <span class="portfolio-category">{{ item.category }}</span>
                            <!-- Caption -->
                            <div class="portfolio-caption">
                                <h1>{{ item.title }}</h1>
                            </div>
                        </div>
                    </a>
                </div> 
            </div>
        </div>
    </div>
</template>