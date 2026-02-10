<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');

const handleSubmit = () => {
  // Add form submission logic here
  console.log('Form submitted:', { name: name.value, email: email.value, subject: subject.value, message: message.value });
};
</script>

<template>
      <section id="contact" class="contact-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12">
              <div class="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Contact Me</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="contact-content-part  wow fadeInUp delay-0-2s">

                <div class="single-contact wow fadeInUp" data-wow-delay=".2s">
                  <span class="circle-btn">
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <h2>Location:</h2>
                  <p>Lalamusa, Punjab, Pakistan</p>
                </div>

                <div class="single-contact wow fadeInUp" data-wow-delay=".4s">
                  <span class="circle-btn">
                    <i class="ri-headphone-line"></i>
                  </span>
                  <h2>Contact Number:</h2>
                  <p>+92 300 1234567</p> </div>

                <div class="single-contact wow fadeInUp" data-wow-delay=".6s">
                  <span class="circle-btn">
                    <i class="ri-mail-line"></i>
                  </span>
                  <h2>Email Us:</h2>
                  <p>ahmed.mirza112345@gmail.com</p>
                </div>

                <div class="single-contact wow fadeInUp" data-wow-delay=".6s">
                  <h2>Socials</h2>
                  <div class="about-social">
                    <ul>
                      <li><a target='_blank' href="https://facebook.com"><i class="ri-facebook-circle-fill"></i></a></li>
                      <li><a target='_blank' href="https://twitter.com"><i class="ri-twitter-x-line"></i></a></li>
                      <li><a target='_blank' href="https://linkedin.com"><i class="ri-linkedin-fill"></i></a></li>
                      <li><a target='_blank' href="https://github.com/ahmedmirza112345-collab"><i class="ri-github-line"></i></a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div> 

            <div class="col-lg-8">
              <div class="contact-form contact-form-area wow fadeInUp delay-0-4s">
                <form id="contactForm" class="contact-form" @submit.prevent="handleSubmit">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          class="form-control" 
                           v-model="name"
                          placeholder="Your Name"
                          required
                          data-error="Please enter your Name"
                        />
                        <label htmlFor="name" class="for-icon"><i class="far fa-user"></i></label>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          class="form-control"
                           v-model="email"
                          placeholder="hello@squarestech.com"
                          required
                          data-error="Please enter your Email"
                        />
                        <label htmlFor="email" class="for-icon"><i class="far fa-envelope"></i></label>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          class="form-control"
                           v-model="subject"
                          placeholder="Project Inquiry"
                          required
                          data-error="Please enter your Subject"
                        />
                        <label htmlFor="subject" class="for-icon"><i class="far fa-user"></i></label>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                          name="message"
                          id="message"
                          class="form-control"
                          rows="4"
                           v-model="message"
                          placeholder="Tell me about your project..."
                          required
                          data-error="Please Write your Message"
                        ></textarea>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group mb-0">
                        <button type="submit" class="theme-btn">
                          Send Message <i class="ri-mail-line"></i>
                        </button>
                        <div id="msgSubmit" class="hidden"></div>
                      </div>
                    </div>
                    <div class="col-md-12 text-center">
                      <p class="input-success">We have received your mail, We will get back to you soon!</p>
                      <p class="input-error">Sorry, Message could not send! Please try again.</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
</template>