<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const status = ref(''); 
const loading = ref(false); // New loading state

const handleSubmit = async (e) => {
  loading.value = true; // Start loading
  const myForm = e.target;
  const formData = new FormData(myForm);

  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
    
    // 1. Show the Popup
    alert("Thank you! Your message has been sent successfully. We will contact you soon.");

    // 2. Show the Success Text
    status.value = 'success';
    
    // 3. Clear the form
    name.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
  } catch (error) {
    status.value = 'error';
    alert("Error: Could not send message. Please try again.");
    console.error(error);
  } finally {
    loading.value = false; // Stop loading
  }
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
          <div class="contact-content-part wow fadeInUp delay-0-2s">
            <div class="single-contact wow fadeInUp" data-wow-delay=".2s">
              <span class="circle-btn"><i class="ri-map-pin-line"></i></span>
              <h2>Location:</h2>
              <p>Gujrat, Pakistan</p>
            </div>
            <div class="single-contact wow fadeInUp" data-wow-delay=".4s">
              <span class="circle-btn"><i class="ri-phone-line"></i></span>
              <h2>Phone:</h2>
              <p>0343-0584737</p>
            </div>
            <div class="single-contact wow fadeInUp" data-wow-delay=".6s">
              <span class="circle-btn"><i class="ri-mail-line"></i></span>
              <h2>Email:</h2>
              <p>mirzabilalahmed11@gmail.com</p>
            </div>
            <div class="single-contact wow fadeInUp" data-wow-delay=".6s">
              <h2>Socials</h2>
              <div class="about-social">
                <ul>
                  <li><a target='_blank' href="https://www.behance.net/bilalahmed311"><i class="ri-behance-fill"></i></a></li>
                  <li><a target='_blank' href="https://linkedin.com"><i class="ri-linkedin-fill"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div> 

        <div class="col-lg-8">
          <div class="contact-form contact-form-area wow fadeInUp delay-0-4s">
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              @submit.prevent="handleSubmit"
              class="contact-form" 
            >
              <input type="hidden" name="form-name" value="contact" />
              <p class="hidden" style="display:none">
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
              </p>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" class="form-control" v-model="name" placeholder="Your Name" required />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" class="form-control" v-model="email" placeholder="hello@client.com" required />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" class="form-control" v-model="subject" placeholder="Project Inquiry" required />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" id="message" class="form-control" rows="4" v-model="message" placeholder="Tell me about your project..." required></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group mb-0">
                    <button type="submit" class="theme-btn" :disabled="loading">
                      {{ loading ? 'Sending...' : 'Send Message' }} <i class="ri-mail-line" v-if="!loading"></i>
                    </button>
                  </div>
                </div>
                
                <div class="col-md-12 text-center mt-4">
                  <div v-if="status === 'success'" class="alert alert-success" role="alert">
                    <strong>Success!</strong> Your message has been sent. We will contact you soon.
                  </div>
                  <div v-if="status === 'error'" class="alert alert-danger" role="alert">
                    <strong>Error!</strong> Something went wrong. Please try again.
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>