<script setup>
import { Linkedin, Github, Palette, Mail } from 'lucide-vue-next';
</script>

<template> 

  <footer class="main-footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-top">
                        <p>Have a project in mind?</p>
                        <h2><a href="mailto:mirzabilalahmed11@gmail.com">let's work</a></h2>
                        <div class="footer-social mt-30">
                            <a target="_blank" href="https://www.linkedin.com/in/mirzabilalahmed/"><Linkedin :size="24" /></a>
                            <a target="_blank" href="https://github.com/ahmedmirza112345"><Github :size="24" /></a>
                            <a target="_blank" href="https://www.behance.net/bilalahmed311"><Palette :size="24" /></a>
                            <a href="mailto:mirzabilalahmed11@gmail.com"><Mail :size="24" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-sm-6">
                    <p class="copy-left-text">Template by <a href="https://themeforest.net/user/rk_theme/portfolio">Creative Personal®</a></p>
                </div>
                <div class="col-lg-6 col-sm-6">
                    <p class="copy-right-text">© Copyright {{ new Date().getFullYear() }}</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-social {
    display: flex;
    justify-content: center;
    gap: 25px;
}

.footer-social a {
    color: rgba(255, 255, 255, 0.4);
    transition: all 0.3s ease;
}

.footer-social a:hover {
    color: #4169E1;
    transform: translateY(-3px);
}

.main-footer {
    padding: 100px 0 40px;
}
</style>
 