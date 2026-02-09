
<script setup>
const props = defineProps({
  project_data: {
    type: Array,
  },
  handleImagePopup: {
    type: Function,
  },
});
</script>

<template>
  <div class="single-project-page-design">
    <div class="single-project-image">
      <img src="assets/images/projects/work2.jpg" alt="image" />
    </div>
    <div class="container pt-60 pb-40">
      <div class="row">
        <div class="col-lg-4">
          <div class="single-project-page-left wow fadeInUp delay-0-2s">
            <div class="single-info">
              <p>Year</p>
              <h3>2024</h3>
            </div>
            <div class="single-info">
              <p>Client</p>
              <h3>Bento Studio</h3>
            </div>
            <div class="single-info">
              <p>Services</p>
              <h3>Web Design</h3>
            </div>
            <div class="single-info">
              <p>Project</p>
              <h3>Creative</h3>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="single-project-page-right wow fadeInUp delay-0-4s">
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi
              sfejdis aliquam, purus sit amet luctus venenatis, lectus magna
              sansit trandis fringilla urna, porttitor rhoncus dolor purus non
              enim dollors praesent tabasi elementum facilisis leo.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable sourc consectetur, from a
              Lorem Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source.
            </p>
          </div>
        </div>
      </div>

      <div class="row pt-60">
        <div class="col-lg-6" v-for="(item, i) in project_data" :key="i">
          <a
            style="cursor: pointer"
            @click.prevent="handleImagePopup(i)"
            class="work-popup"
          >
            <div class="single-image wow fadeInUp delay-0-2s">
              <img :src="item.image" alt="gallery" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>