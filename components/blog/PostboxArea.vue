<script setup>

import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
// // video popup 
import { useVideoModal } from "~/components/composables/useVideoModal";
const { playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/GcMiYI1gWD4?si=Fj5qd8xfgXyl1v8J';


</script>



<template>
   <section class="blog-page-area">
        <div class="container">
          <div class="row">
            <div class="col-xxl-8 col-lg-8">
              <div class="postbox__wrapper">
                <article class="postbox__item format-image mb-50 transition-3">
                  <div class="postbox__thumb w-img">
                    <NuxtLink to="/blog-details">
                      <img src="assets/images/blog/blog1.jpg" alt="" />
                    </NuxtLink>
                  </div>
                  <div class="postbox__content">
                    <div class="postbox__meta">
                      <span>
                        <a href=""><i class="fa-light fa-user"></i>Tanvir Hossain</a>
                      </span>
                      <span>
                        <a href=""><i class="fa-light fa-clock"></i>January 22, 2022</a>
                      </span>
                      <span>
                        <a href=""><i class="fa-sharp fa-thin fa-comments"></i>35</a>
                      </span>
                    </div>
                    <h3 class="postbox__title">
                      <NuxtLink to="/blog-details">Create a Landing Page That Performs Great</NuxtLink>
                    </h3>
                    <div class="postbox__text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]</p>
                    </div>
                    <div class="postbox__read-more">
                      <NuxtLink to="/blog-details" class="theme-btn">Read more</NuxtLink>
                    </div>
                  </div>
                </article>
                <article class="postbox__item format-video mb-50 transition-3">
                  <div class="postbox__thumb postbox__video w-img p-relative">
                    <NuxtLink to="/blog-details">
                      <img src="assets/images/blog/blog2.jpg" alt="" />
                    </NuxtLink>
                    <a @click="playVideo(videoUrl)" :style="{ cursor: 'pointer' }" class="play-btn pulse-btn popup-video"><i class="fas fa-play"></i></a>
                  </div>
                  <div class="postbox__content">
                    <div class="postbox__meta">
                      <span>
                        <a href=""><i class="fa-light fa-user"></i>Tanvir Hossain</a>
                      </span>
                      <span>
                        <a href=""><i class="fa-light fa-clock"></i>January 22, 2022</a>
                      </span>
                      <span>
                        <a href=""><i class="fa-sharp fa-thin fa-comments"></i>35</a>
                      </span>
                    </div>
                    <h3 class="postbox__title">
                      <NuxtLink to="/blog-details">Starting and Growing a Career in Web Design</NuxtLink>
                    </h3>
                    <div class="postbox__text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]</p>
                    </div>
                    <div class="postbox__read-more">
                      <NuxtLink to="/blog-details" class="theme-btn">Read more</NuxtLink>
                    </div>
                  </div>
                </article>
                <article class="postbox__item format-audio mb-50 transition-3">
                  <div class="postbox__thumb postbox__audio w-img p-relative">
                    <iframe allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316547873&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                  </div>
                  <div class="postbox__content">
                    <div class="postbox__meta">
                      <span>
                        <a href=""><i class="fa-light fa-user"></i>Tanvir Hossain</a>
                      </span>
                      <span>
                        <a href=""><i class="fa-light fa-clock"></i>January 22, 2022</a>
                      </span>
                      <span>
                        <a href=""><i class="fa-sharp fa-thin fa-comments"></i>35</a>
                      </span>
                    </div>
                    <h3 class="postbox__title">
                      <NuxtLink to="/blog-details">How Can Designers Prepare for the Future?</NuxtLink>
                    </h3>
                    <div class="postbox__text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]</p>
                    </div>
                    <div class="postbox__read-more">
                      <NuxtLink to="/blog-details" class="theme-btn">Read more</NuxtLink>
                    </div>
                  </div>
                </article>
                <article class="postbox__item format-image mb-50 transition-3">
                  <Swiper   

                  :slides-per-view="1"
                  :loop="true"
                  :autoplay="{ delay: 5000, disableOnInteraction: false }"
                  :navigation="{
                    nextEl: '.postbox-slider-button-next',
                    prevEl: '.postbox-slider-button-prev',
                  }"
                  :modules="[Navigation, Autoplay]"
                   
                  class="postbox__thumb postbox__slider swiper-container w-img p-relative">
                    
                      <SwiperSlide class="postbox__slider-item swiper-slide">
                        <img src="assets/images/blog/blog1.jpg" alt="" />
                      </SwiperSlide>
                      <SwiperSlide class="postbox__slider-item swiper-slide">
                        <img src="assets/images/blog/blog2.jpg" alt="" />
                      </SwiperSlide>
                      <SwiperSlide class="postbox__slider-item swiper-slide">
                        <img src="assets/images/blog/blog3.jpg" alt="" />
                      </SwiperSlide>
                   
                    <div class="postbox__nav">
                      <button class="postbox-slider-button-next"><i class="fa-regular fa-angle-right"></i></button>
                      <button class="postbox-slider-button-prev"><i class="fa-regular fa-angle-left"></i></button>
                    </div>
                  </Swiper>
                  <div class="postbox__content">
                    <div class="postbox__meta">
                      <span>
                        <a href=""><i class="fa-light fa-user"></i>Tanvir Hossain</a>
                      </span>
                      <span>
                        <a href=""><i class="fa-light fa-clock"></i>January 22, 2022</a>
                      </span>
                      <span>
                        <a href=""><i class="fa-sharp fa-thin fa-comments"></i>35</a>
                      </span>
                    </div>
                    <h3 class="postbox__title">
                      <NuxtLink to="/blog-details">Visiting the Ads of the World blog is like visiting museum</NuxtLink>
                    </h3>
                    <div class="postbox__text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]</p>
                    </div>
                    <div class="postbox__read-more">
                      <NuxtLink to="/blog-details" class="theme-btn">Read more</NuxtLink>
                    </div>
                  </div>
                </article>

                <div class="tp-pagination mt-20">
                  <nav>
                    <ul>
                      <li>
                        <NuxtLink to="/blog" class="tp-pagination-prev prev page-numbers">
                          <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.17749 10.105L1.62499 5.55248L6.17749 0.999981" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.3767 5.55249L1.75421 5.55249" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                           Prev
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/blog">1</NuxtLink>
                      </li>
                      <li>
                        <span class="current">2</span>
                      </li>
                      <li>
                        <NuxtLink to="/blog">3</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/blog" class="next page-numbers">
                          Next 
                          <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.82422 1L14.3767 5.5525L9.82422 10.105" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.625 5.55249H14.2475" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </NuxtLink>
                      </li>
                    </ul>
                  </nav>
                </div>

              </div>
            </div>
            <div class="col-xxl-4 col-lg-4">
              <div class="blog_sidebar__wrapper pl-40">
                <div class="sidebar__widget mb-20">
                  <div class="sidebar__widget-content">
                    <div class="sidebar__search">
                      <form action="#">
                        <div class="sidebar__search-input">
                          <input type="text" placeholder="Enter your keywords..." />
                          <button type="submit">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="sidebar__widget mb-45">
                  <div class="sidebar__widget-content">
                    <div class="sidebar__author">
                      <div class="sidebar__author-thumb">
                        <img src="assets/images/blog/author.jpg" alt="" />
                      </div>
                      <div class="sidebar__author-content">
                        <h3 class="sidebar__author-title">Colene Landin</h3>
                        <p>Lorem ipsum dolor ametare elit consectetur adipiscing Aenean pellentesque.</p>
                        <div class="sidebar__author-social d-flex align-items-center justify-content-center">
                          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                          <a href="#"><i class="fa-brands fa-twitter"></i></a>
                          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sidebar__widget mb-45">
                  <h3 class="sidebar__widget-title">Recent Post</h3>
                  <div class="sidebar__widget-content">
                    <div class="sidebar__post">
                      <div class="rc__post d-flex align-items-center">
                        <div class="rc__post-thumb">
                          <NuxtLink to="/blog-details"><img src="assets/images/blog/blog-sm-1.jpg" alt="" /></NuxtLink>
                        </div>
                        <div class="rc__post-content">
                          <h3 class="rc__post-title">
                            <NuxtLink to="/blog-details">Business meeting 2021 in San Francisco</NuxtLink>
                          </h3>
                          <div class="rc__meta">
                            <span>
                              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>July 21, 2022
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rc__post d-flex align-items-center">
                        <div class="rc__post-thumb">
                          <NuxtLink to="/blog-details"><img src="assets/images/blog/blog-sm-2.jpg" alt="" /></NuxtLink>
                        </div>
                        <div class="rc__post-content">
                          <h3 class="rc__post-title">
                            <NuxtLink to="/blog-details">Developing privacy user-centric apps</NuxtLink>
                          </h3>
                          <div class="rc__meta">
                            <span>
                              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>July 21, 2022
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rc__post d-flex align-items-center">
                        <div class="rc__post-thumb">
                          <NuxtLink to="/blog-details"><img src="assets/images/blog/blog-sm-3.jpg" alt="" /></NuxtLink>
                        </div>
                        <div class="rc__post-content">
                          <h3 class="rc__post-title">
                            <NuxtLink to="/blog-details">Starting and Growing Web Design in 2022</NuxtLink>
                          </h3>
                          <div class="rc__meta">
                            <span>
                              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>July 21, 2022
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sidebar__widget mb-45">
                  <h3 class="sidebar__widget-title">Category</h3>
                  <div class="sidebar__widget-content">
                    <ul>
                      <li><NuxtLink to="/blog">Design Media <span>10</span></NuxtLink></li>
                      <li><NuxtLink to="/blog">Figma Design <span>08</span></NuxtLink></li>
                      <li><NuxtLink to="/blog">Web Design <span>24</span></NuxtLink></li>
                      <li><NuxtLink to="/blog">Wix Development <span>37</span></NuxtLink></li>
                      <li><NuxtLink to="/blog">Framer Website <span>103</span></NuxtLink></li>
                    </ul>
                  </div>
                </div>
                <div class="sidebar__widget mb-40">
                  <h3 class="sidebar__widget-title">Tags</h3>
                  <div class="sidebar__widget-content">
                    <div class="tagcloud">
                      <a href="#">Creative</a>
                      <a href="#">Design</a>
                      <a href="#">Branding</a>
                      <a href="#">Life Style</a>
                      <a href="#">Technology</a>
                      <a href="#">Figma</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>