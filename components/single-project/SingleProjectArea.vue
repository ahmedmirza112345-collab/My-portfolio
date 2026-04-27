
<script setup>
import { ExternalLink, Github, BookOpen } from 'lucide-vue-next';
import portfolio_data from '~/data/portfolio_data';

const props = defineProps({
  project_data: {
    type: Array,
  },
  handleImagePopup: {
    type: Function,
  },
});

// For demonstration, we'll use the first project if no dynamic selection is implemented yet
const project = portfolio_data[0]; 
</script>

<template>
  <div class="single-project-page-design">
    <div class="single-project-image">
      <img :src="project.image" :alt="project.title" />
    </div>
    <div class="container pt-60 pb-40">
      <div class="row">
        <div class="col-lg-4">
          <div class="single-project-page-left wow fadeInUp delay-0-2s">
            <div class="single-info">
              <p>Year</p>
              <h3>{{ project.year }}</h3>
            </div>
            <div class="single-info">
              <p>Client</p>
              <h3>{{ project.client }}</h3>
            </div>
            <div class="single-info">
              <p>Category</p>
              <h3>{{ project.category }}</h3>
            </div>
            <div class="single-info">
              <p>Technologies</p>
              <div class="tech-tags">
                <span v-for="tech in project.techUsed" :key="tech" class="tech-tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="single-project-page-right wow fadeInUp delay-0-4s">
            <h2 class="project-title">{{ project.title }}</h2>
            
            <div class="project-section">
              <h4><span class="section-label">Problem:</span></h4>
              <p>{{ project.problem }}</p>
            </div>

            <div class="project-section">
              <h4><span class="section-label">Solution:</span></h4>
              <p>{{ project.solution }}</p>
            </div>

            <div class="project-actions mt-40">
              <a v-if="project.liveLink" :href="project.liveLink" target="_blank" class="project-btn primary">
                Live Demo <ExternalLink :size="18" />
              </a>
              <a v-if="project.sourceLink" :href="project.sourceLink" target="_blank" class="project-btn secondary">
                Source Code <Github :size="18" />
              </a>
              <a v-if="project.caseStudyLink" :href="project.caseStudyLink" class="project-btn secondary">
                Case Study <BookOpen :size="18" />
              </a>
            </div>
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

<style scoped>
.project-title {
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 30px;
  text-transform: uppercase;
}

.section-label {
  color: #4169E1;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
}

.project-section {
  margin-bottom: 25px;
}

.project-section h4 {
  margin-bottom: 10px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  color: #888;
}

.project-actions {
  display: flex;
  gap: 15px;
}

.project-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 14px;
}

.project-btn.primary {
  background: #4169E1;
  color: #fff;
}

.project-btn.secondary {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
}

.project-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(65, 105, 225, 0.3);
}

.project-btn.primary:hover {
  background: #fff;
  color: #000;
}
</style>