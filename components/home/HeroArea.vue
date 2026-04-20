<script setup>
const { openWindow } = useIllustratorWindow();
</script>

<template>
    <section id="home" class="main-hero-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="hero-content wow fadeInUp text-center delay-0-2s">
                        <h2>Bilal Ahmed</h2>
                    </div>
                </div>
            </div>
            <div class="row hero-bottom-row justify-content-center">
                <div class="col-lg-12 d-flex align-items-center justify-content-between p-0">
                    <!-- Left: Get In Touch button -->
                    <div class="hero-side-column left">
                        <div class="hero-content wow fadeInUp delay-0-2s">
                            <p class="hero-side-label">Connect</p>
                            <NuxtLink class="portfolio-btn" to="/#contact">
                                <span class="portfolio-btn-text">Get In<br>Touch</span>
                                <span class="portfolio-btn-arrow">
                                    <i class="ri-chat-smile-2-line"></i>
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
                                    <i class="ri-arrow-right-up-line"></i>
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
/* Pull both side columns up more and push to edges */
.hero-bottom-row {
    margin-top: -60px;
}

.hero-side-column {
    margin-right: 80px;
    margin-left: 80px;
    margin-bottom: 10px;
    margin-top: 10px;
    width: 25%;
    flex-shrink: 0;
}
.hero-side-column.right {
    display: flex;
    justify-content: flex-end;
    text-align: right;
}
.hero-side-column.right .hero-content {
    width: 100%;
    max-width: 280px;
}
.hero-side-column.left .hero-content {
    max-width: 280px;
}

.hero-center-column {
    flex-grow: 1;
    display: flex;
    justify-content: center;
}


/* Small label above the button */
.hero-side-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    margin-bottom: 18px;
}

/* Portfolio button — full-width black brutalist card */
.portfolio-btn {
    display: flex;
    margin-right: 500px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 22px 24px;
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 2px;
    cursor: pointer;
    gap: 12px;
    transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    outline: none;
}

.portfolio-btn:hover {
    background: #111;
    border-color: rgba(255, 255, 255, 0.35);
    box-shadow: 0 0 0 1px rgba(255,87,34,0.4);
}

/* Text block */
.portfolio-btn-text {
    font-size: 28px;
    font-weight: 900;
    color: #fff;
    line-height: 1.1;
    text-align: left;
    letter-spacing: -0.5px;
    text-transform: uppercase;
}

/* Arrow circle */
.portfolio-btn-arrow {
    flex-shrink: 0;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #fff;
    transition: background 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
}

.portfolio-btn:hover .portfolio-btn-arrow {
    background: #ff5722;
    border-color: #ff5722;
    transform: rotate(45deg);
}
</style>