<script setup>
import { Layout, Monitor, MousePointer2 } from 'lucide-vue-next';
</script>

<template>
    <section class="portfolio-cta-section">
        <div class="container">
            <div class="cta-wrapper wow fadeInUp" data-wow-delay="0.2s">
                <div class="cta-content">
                    <span class="cta-subtitle">Interactive Experience</span>
                    <h2 class="cta-title">
                        Ready to see my <br />
                        <span class="highlight">Creative Studio?</span>
                    </h2>
                    <p class="cta-description">
                        Step inside my digital workspace. I've built a fully interactive 
                        design environment where you can explore my process and projects 
                        just like I do.
                    </p>
                    
                    <div class="cta-actions">
                        <a href="https://www.behance.net/bilalahmed311" target="_blank" class="cta-primary-btn">
                            <span class="btn-text">View Portfolio</span>
                            <span class="btn-icon">
                                <Layout :size="20" />
                            </span>
                        </a>
                    </div>
                </div>
                
                <div class="cta-visual-preview">
                    <div class="preview-card">
                        <div class="preview-header">
                            <div class="dots"><span></span><span></span><span></span></div>
                            <div class="title">Portfolio.ai</div>
                        </div>
                        <div class="preview-body">
                            <div class="toolbar-hint">
                                <MousePointer2 :size="14" />
                            </div>
                            <div class="canvas-hint">
                                <div class="rect"></div>
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.portfolio-cta-section {
    padding: 120px 0;
    background: #000;
    overflow: hidden;
    position: relative;
}

.cta-wrapper {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 60px;
    align-items: center;
    background: #0a0a0a;
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 80px;
    border-radius: 4px;
    position: relative;
}

.cta-subtitle {
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #4169E1;
    margin-bottom: 20px;
    font-weight: 700;
}

.cta-title {
    font-size: clamp(40px, 5vw, 72px);
    line-height: 0.95;
    font-weight: 900;
    color: #fff;
    margin-bottom: 30px;
    text-transform: uppercase;
}

.cta-title .highlight {
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
}

.cta-description {
    font-size: 18px;
    color: #888;
    max-width: 500px;
    margin-bottom: 45px;
    line-height: 1.6;
}

.cta-actions {
    display: flex;
    align-items: center;
    gap: 30px;
}

.cta-primary-btn {
    background: #4169E1;
    color: #fff;
    border: none;
    padding: 20px 40px;
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 2px;
}

.cta-primary-btn:hover {
    background: #fff;
    color: #000;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(65, 105, 225, 0.3);
}

.cta-secondary-link {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 0.6;
    transition: opacity 0.3s ease;
}

.cta-secondary-link:hover {
    opacity: 1;
}

/* Visual Preview Styling */
.cta-visual-preview {
    position: relative;
    display: flex;
    justify-content: center;
}

.preview-card {
    width: 320px;
    height: 220px;
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 8px;
    overflow: hidden;
    transform: rotate(5deg) scale(1.1);
    box-shadow: -20px 30px 60px rgba(0,0,0,0.5);
    transition: transform 0.6s ease;
}

.cta-wrapper:hover .preview-card {
    transform: rotate(0deg) scale(1.15);
}

.preview-header {
    background: #252525;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.dots { display: flex; gap: 4px; }
.dots span { width: 6px; height: 6px; background: #444; border-radius: 50%; }
.preview-header .title { font-size: 10px; color: #888; flex-grow: 1; text-align: center; }

.preview-body {
    padding: 15px;
    display: flex;
    gap: 15px;
    height: 100%;
}

.toolbar-hint { width: 30px; height: 100%; background: #222; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #444; }
.canvas-hint { flex-grow: 1; position: relative; }
.rect { width: 50px; height: 50px;    border: 1px solid #4169E1;
 position: absolute; top: 10px; left: 10px; }
.circle { width: 40px; height: 40px; border: 1px solid #fff; border-radius: 50%; position: absolute; bottom: 40px; right: 10px; opacity: 0.3; }

@media (max-width: 1200px) {
    .cta-wrapper { padding: 60px; }
}

@media (max-width: 991px) {
    .cta-wrapper {
        grid-template-columns: 1fr;
        padding: 40px;
        text-align: center;
    }
    .cta-description { margin-left: auto; margin-right: auto; }
    .cta-actions { justify-content: center; flex-direction: column; }
    .cta-visual-preview { display: none; }
}
</style>
