
 

<script setup>

const props = defineProps({
  title: {
    type: String
  },
  style_2: {
    type: Boolean
  },
  style_3: {
    type: Boolean
  },
  style_4: {
    type: Boolean
  }
})
 
</script>



<template>
  <section class="single-page-hero-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <h2>{{title}}</h2>
         
          <p v-if="style_2">
            A Collection of My Latest Works and Achievements: Discover the
            Projects that Define My Passion and Skills
          </p>
          
          
          <p v-if="style_3">
            Fill out the form below to get in touch with me. I am always excited
            to hear about new opportunities and I will do my best to respond to
            your inquiry within 24 hours.
          </p>
          
           
          <p v-if="style_4">Stories, Advice, and Inspiration for the Curious Mind</p>
           
        </div>
      </div>
    </div>
  </section>
</template>