<script setup>
import { MessageSquare, ArrowUpRight } from 'lucide-vue-next';
const { openWindow } = useIllustratorWindow();
</script>

<template>
    <section id="home" class="main-hero-area">
        <div class="container-fluid p-0">
            <!-- Name Row - Fixed position container -->
            <div class="row m-0 title-row">
                <div class="col-lg-12 p-0">
                    <div class="hero-content wow fadeInUp text-center delay-0-2s">
                        <h2 class="main-hero-title">Bilal Ahmed</h2>
                    </div>
                </div>
            </div>
            
            <!-- Content Row -->
            <div class="row hero-bottom-row justify-content-center m-0">
                <div class="col-lg-12 d-flex flex-column flex-lg-row align-items-center justify-content-between p-0 px-4 px-lg-5">
                    <!-- Left: Get In Touch button -->
                    <div class="hero-side-column left">
                        <div class="hero-content wow fadeInUp delay-0-2s">
                            <p class="hero-side-label">Connect</p>
                            <NuxtLink class="portfolio-btn" to="/#contact">
                                <span class="portfolio-btn-text">Get In<br>Touch</span>
                                <span class="portfolio-btn-arrow">
                                    <MessageSquare :size="24" color="currentColor" :stroke-width="2.5" />
                                </span>
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Center: Hero image -->
                    <div class="hero-center-column">
                        <div class="hero-image">
                            <img src="assets/images/about/me.jpg" alt="Bilal Ahmed Mirza">
                        </div>
                    </div>

                    <!-- Right: View Portfolio button -->
                    <div class="hero-side-column right">
                        <div class="hero-content wow fadeInUp delay-0-4s">
                            <p class="hero-side-label">Selected Work</p>
                            <button class="portfolio-btn" @click="openWindow">
                                <span class="portfolio-btn-text">View<br>Portfolio</span>
                                <span class="portfolio-btn-arrow">
                                    <ArrowUpRight :size="24" color="currentColor" :stroke-width="2.5" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* ── Main Hero Area ────────────────────────────────────────── */
.main-hero-area {
    margin-top: 0;
    margin-bottom: 50px;
    padding-top: 100px;
    width: 100%;
    overflow: hidden;
    position: relative;
}

/* ── Title Section ─────────────────────────────────────────── */
.title-row {
    position: relative;
    z-index: 1;
    pointer-events: none; /* Make text non-interactive to prevent hover shifts */
}

.main-hero-title {
    font-size: clamp(60px, 15vw, 230px);
    line-height: 1;
    margin-bottom: 0;
    width: 100%;
    font-weight: 900;
    text-transform: uppercase;
    /* Ensure no shifts */
    transform: translateZ(0); 
    will-change: transform;
}

/* ── Hero Bottom Layout ────────────────────────────────────── */
.hero-bottom-row {
    margin-top: -60px; /* Overlap effect */
    position: relative;
    z-index: 5;
    width: 100%;
}

.hero-side-column {
    width: 25%;
    flex-shrink: 0;
}

.hero-side-column.left {
    margin-left: 80px;
}

.hero-side-column.right {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    margin-right: 80px;
}

.hero-side-column .hero-content {
    width: 100%;
    max-width: 280px;
}

.hero-center-column {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    position: relative;
    z-index: 20; /* High priority for the image container */
}

/* ── Image & Hover Effect ───────────────────────────────────── */
.hero-image {
    position: relative;
    z-index: 21; /* Ensure image is above its container and siblings */
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-image:hover {
    transform: scale(1.03) translateY(-5px);
    z-index: 25;
}

.hero-image img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* ── Portfolio Button ──────────────────────────────────────── */
.portfolio-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 22px 24px;
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 2px;
    cursor: pointer;
    gap: 12px;
    transition: all 0.3s ease;
    outline: none;
    text-decoration: none;
}

.portfolio-btn:hover {
    background: #111;
    border-color: rgba(255, 255, 255, 0.35);
    box-shadow: 0 0 0 1px rgba(255,87,34,0.4);
}

.portfolio-btn-text {
    font-size: 28px;
    font-weight: 900;
    color: #fff;
    line-height: 1.1;
    text-align: left;
    letter-spacing: -0.5px;
    text-transform: uppercase;
}

.portfolio-btn-arrow {
    flex-shrink: 0;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all 0.3s ease;
}

.portfolio-btn:hover .portfolio-btn-arrow {
    background: #ff5722;
    border-color: #ff5722;
    transform: rotate(45deg);
}

.hero-side-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    margin-bottom: 18px;
}

/* ── Responsive Media Queries ─────────────────────────────── */

@media (max-width: 1400px) {
    /* Title handled by clamp */
}

@media (max-width: 1200px) {
    .portfolio-btn-text { font-size: 22px; }
    .portfolio-btn { padding: 15px 20px; }
    .portfolio-btn-arrow { width: 40px; height: 40px; }
}

@media (max-width: 991px) {
    .main-hero-area { padding-top: 60px; }
    .hero-bottom-row { margin-top: 20px; }
    
    .hero-side-column {
        width: 100%;
        max-width: 400px;
        margin: 10px auto;
        text-align: center;
    }
    
    .hero-side-column.left, .hero-side-column.right {
        margin-left: auto;
        margin-right: auto;
    }
    
    .hero-side-column.right {
        justify-content: center;
        text-align: center;
        order: 3;
    }
    
    .hero-side-column.left {
        order: 2;
    }
    
    .hero-center-column {
        order: 1;
        width: 100%;
        padding: 10px 0;
    }
    
    .hero-image img {
        max-width: 280px;
    }
    
    .hero-side-column .hero-content {
        max-width: 100%;
    }
    
    .hero-side-label { margin-bottom: 10px; }
}

@media (max-width: 575px) {
    .main-hero-area { padding-top: 40px; }
    .portfolio-btn-text { font-size: 18px; }
    .portfolio-btn { padding: 12px 18px; }
    .hero-image img { max-width: 220px; }
}
</style>