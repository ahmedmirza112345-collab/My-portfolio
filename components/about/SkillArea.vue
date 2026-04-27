<template>
  <section id="skills" class="skill-area">
    <div class="container">
      <div class="container-inner">
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <div class="section-title section-black-title mb-40 wow fadeInUp delay-0-2s">
              <h2>Professional Skills</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="skill-items-wrap">
              <div class="row">
                
                <!-- Creative Suite -->
                <div class="col-12 mt-20 mb-20">
                  <h4 class="skill-category-title wow fadeInUp">Creative Suite (Adobe & Design)</h4>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                  <div class="skill-item wow fadeInUp delay-0-2s">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" class="official-icon" />
                    <h5>Figma</h5>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                  <div class="skill-item wow fadeInUp delay-0-3s">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" alt="Photoshop" class="official-icon" />
                    <h5>Photoshop</h5>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                  <div class="skill-item wow fadeInUp delay-0-4s">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg" alt="Illustrator" class="official-icon" />
                    <h5>Illustrator</h5>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                  <div class="skill-item wow fadeInUp delay-0-5s">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg" alt="Premiere Pro" class="official-icon" />
                    <h5>Premiere Pro</h5>
                  </div>
                </div>

                <!-- Frontend & CMS -->
                <div class="col-12 mt-40 mb-20">
                  <h4 class="skill-category-title wow fadeInUp">Frontend & CMS</h4>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                  <div class="skill-item wow fadeInUp delay-0-2s">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" alt="WordPress" class="official-icon" />
                    <h5>WordPress</h5>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                  <div class="skill-item wow fadeInUp delay-0-3s">
                    <img src="https://cdn.simpleicons.org/elementor/92003B" alt="Elementor" class="official-icon" />
                    <h5>Elementor</h5>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                  <div class="skill-item wow fadeInUp delay-0-4s">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" class="official-icon" />
                    <h5>HTML5 / CSS3</h5>
                  </div>
                </div>

                <!-- Operations & Automation -->
                <div class="col-12 mt-40 mb-20">
                  <h4 class="skill-category-title wow fadeInUp">Operations & Automation</h4>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                  <div class="skill-item wow fadeInUp delay-0-2s">
                    <img src="https://www.google.com/s2/favicons?domain=gohighlevel.com&sz=128" alt="GoHighLevel" class="official-icon" style="border-radius: 12px;" />
                    <h5>GoHighLevel</h5>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                  <div class="skill-item wow fadeInUp delay-0-3s">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" alt="Meta Ads" class="official-icon" />
                    <h5>Meta Ads</h5>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Forces all the different logos to be the exact same size */
.official-icon {
  width: 55px;
  height: 55px;
  object-fit: contain;
  margin-bottom: 20px;
  display: inline-block;
  transition: transform 0.3s ease;
}

.skill-item:hover .official-icon {
  transform: scale(1.1);
}

.skill-category-title {
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
  width: 100%;
}
</style>