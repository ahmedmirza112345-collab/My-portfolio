<script setup>
import testimonial_data from '~/data/testimonial_data';
</script>

<template>
  <section class="testimonials-area pt-120 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12">
          <div class="section-title section-black-title wow fadeInUp delay-0-2s mb-60">
            <h2>Testimonials</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="(item, i) in testimonial_data" :key="i">
          <div class="testimonial-item wow fadeInUp" :data-wow-delay="`${0.2 * (i + 1)}s`">
            <div class="author">
              <img :src="item.image" :alt="item.name" />
            </div>
            <div class="text">
              "{{ item.text }}"
            </div>
            <div class="testi-des">
              <h5>{{ item.name }}</h5>
              <span>{{ item.designation }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 40px;
  border-radius: 4px;
  height: 100%;
  transition: all 0.3s ease;
}

.testimonial-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(65, 105, 225, 0.3);
  transform: translateY(-5px);
}

.author img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 25px;
  border: 2px solid rgba(65, 105, 225, 0.5);
}

.text {
  font-size: 18px;
  line-height: 1.6;
  color: #bbb;
  margin-bottom: 25px;
  font-style: italic;
}

.testi-des h5 {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.testi-des span {
  font-size: 13px;
  color: #4169E1;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
