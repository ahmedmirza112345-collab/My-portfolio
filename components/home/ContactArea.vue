<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const status = ref(''); 
const loading = ref(false);
const showSuccessPopup = ref(false); // New state for the custom popup

const handleSubmit = async (e) => {
  loading.value = true;
  const myForm = e.target;
  const formData = new FormData(myForm);

  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
    
    // Success! Show the custom popup
    status.value = 'success';
    showSuccessPopup.value = true;
    
    // Clear the form
    name.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
  } catch (error) {
    status.value = 'error';
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const closePopup = () => {
  showSuccessPopup.value = false;
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showSuccessPopup" class="success-modal-overlay">
      <div class="success-modal-content">
        <div class="icon-box">
          <i class="ri-checkbox-circle-fill"></i>
        </div>
        <h3>Message Sent!</h3>
        <p>Your form has been submitted and we will contact you soon.</p>
        <button class="theme-btn" @click="closePopup">Close</button>
      </div>
    </div>

  </section>
</template>

<style scoped>
/* Modal Overlay (Background) */
.success-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85); /* Dark background */
  backdrop-filter: blur(5px); /* Blur effect */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Modal Box */
.success-modal-content {
  background: #1a1a1a; /* Dark Card Color */
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  max-width: 450px;
  width: 90%;
  border: 1px solid #333;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

/* Icon Style */
.icon-box i {
  font-size: 60px;
  color: #28a745; /* Success Green */
  margin-bottom: 20px;
  display: block;
}

/* Text Styles */
.success-modal-content h3 {
  color: #fff;
  font-size: 28px;
  margin-bottom: 15px;
  font-weight: 700;
}

.success-modal-content p {
  color: #aaa;
  font-size: 16px;
  margin-bottom: 30px;
  line-height: 1.6;
}

/* Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.animated {
  animation-duration: 0.5s;
  animation-fill-mode: both;
}

.fadeInUp {
  animation-name: fadeInUp;
}

.contact-form .theme-btn:hover {
  background: var(--primary-color) !important;
  color: #000 !important;
  border-color: var(--primary-color);
  transform: translateY(-5px);
}

.icon-box i {
  color: var(--primary-color);
}
</style>