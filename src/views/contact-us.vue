<template>
  <div class="contact-us-container">
    <div class="contact-us-sec1-contact-us">
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGNvbnRhY3R8ZW58MHx8fHwxNzA5NDU0NTEzfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        class="contact-us-image"
      />
      <div class="contact-us-contact-content-sec1">
        <h2 class="contact-us-text">
          Contact Us – Let&apos;s Maintain Organizational Excellence
        </h2>
        <h2 class="contact-us-text01">
          Welcome here, where seamless communication meets organizational
          excellence.
        </h2>
        <p class="contact-us-text02">
          <span class="contact-us-text03">
            Thanks for exploring our Enclave! We want to hear from you and discuss
            how we can bring your creative ideas to life. You can contact us
            through these channels:
          </span>
          <br class="contact-us-text04" />
          <br />
        </p>
        <p class="contact-us-text06">
          <span class="contact-us-text07">Email:</span>
          <br />
          <span>📧 contact@yourdesignstudio.com</span>
          <br />
          <br />
          <span class="contact-us-text12">Phone:</span>
          <br />
          <span>📞 +92 331 7442767</span>
          <br />
          <br />
        </p>
        <div class="contact-us-btn-group">
          <button class="contact-us-button button">Get Started</button>
          <button class="contact-us-button1 button">Learn More</button>
        </div>
        <p class="contact-us-text17">
          <span>
            At Elecnovate, we want to turn ideas into stunning reality. Whether
            you&apos;re looking for great branding, eye-catching images or
            innovative web design, we&apos;re here to make it happen.
          </span>
          <br />
          <br />
          <span>
            We are dedicated to delivering high quality and impactful designs that
            resonate with your audience. We thrive on collaboration and every
            project is an opportunity to create something unique and memorable.
          </span>
          <br />
          <br />
          <span>
            If you are considering a project or would like to learn more about our
            services, please do not hesitate to get in touch. We look forward to
            teaming up with you and exploring the possibilities of turning your
            ideas into amazing designs!
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  props: {},
  metaInfo: {
    title:
      'Contact-us -  Elevate Your Brand with Stunning Graphic Design | Graphic Design',
    meta: [
      {
        name: 'description',
        content:
          'Elevate your brand with our comprehensive solutions. From graphic designs and websites to captivating social media visuals we bring your vision to life.',
      },
      {
        property: 'og:title',
        content:
          'Contact-us -  Elevate Your Brand with Stunning Graphic Design | Graphic Design',
      },
      {
        property: 'og:description',
        content:
          "Elevate your brand with captivating designs. 🚀 Offering expert Graphic Design, Social Media Creatives, UI/UX Excellence, and Seamless Website Design. Let's bring your ideas to life! 💡🎨",
      },
    ],
  },
}
</script>

<style scoped>
.contact-us-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #eee2de;
}
.contact-us-sec1-contact-us {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  max-width: var(--dl-size-size-maxwidth);
  min-height: 80vh;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.contact-us-image {
  width: 25rem;
  object-fit: cover;
  border-color: #ffbe98;
  border-width: 0px;
  border-radius: 32px;
  border-top-width: 20px;
  border-bottom-width: 20px;
}
.contact-us-contact-content-sec1 {
  display: flex;
  margin-left: var(--dl-space-space-twounits);
  flex-direction: column;
}
.contact-us-text {
  color: #3e001f;
  font-size: 3rem;
}
.contact-us-text01 {
  margin-top: var(--dl-space-space-unit);
  font-weight: 600;
  margin-bottom: var(--dl-space-space-unit);
}
.contact-us-btn-group {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.contact-us-button {
  color: var(--dl-color-gray-white);
  transition: 0.3s;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
  background-color: var(--dl-color-gray-black);
}
.contact-us-button:hover {
  transform: scale(1.02);
}
.contact-us-button1 {
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
}
.contact-us-button1:hover {
  transform: scale(1.02);
}
@media(max-width: 1600px) {
  .contact-us-container {
    background-color: transparent;
  }
  .contact-us-sec1-contact-us {
    height: 100%;
    max-width: 100%;
  }
  .contact-us-image {
    width: 503px;
    border-color: #FC6736;
    border-width: 10px;
    border-radius: 32px;
    border-top-width: 10px;
    border-right-width: 10px;
    border-bottom-width: 10px;
  }
  .contact-us-text {
    color: #000000;
    font-size: 3rem;
  }
  .contact-us-text01 {
    font-weight: 600;
  }
  .contact-us-text02 {
    font-size: 22px;
  }
  .contact-us-text03 {
    font-family: Noto Sans;
  }
  .contact-us-text04 {
    font-family: Noto Sans;
  }
  .contact-us-text06 {
    font-size: 22px;
  }
  .contact-us-text07 {
    font-weight: 700;
  }
  .contact-us-text12 {
    font-style: normal;
    font-weight: 700;
  }
  .contact-us-text17 {
    font-size: 22px;
  }
}
@media(max-width: 1200px) {
  .contact-us-container {
    background-color: #ffffff;
  }
  .contact-us-sec1-contact-us {
    height: 100%;
    max-width: 100%;
    background-color: transparent;
  }
  .contact-us-image {
    width: 391px;
    border-color: #FC6736;
    border-width: 10px;
    border-top-width: 10px;
    border-left-width: 10px;
    border-right-width: 10px;
    border-bottom-width: 10px;
  }
  .contact-us-text {
    color: #000000;
    font-size: 2.25rem;
  }
  .contact-us-text01 {
    font-weight: 600;
  }
  .contact-us-text06 {
    font-size: 22px;
  }
  .contact-us-text07 {
    font-weight: 700;
  }
  .contact-us-text12 {
    font-style: normal;
    font-weight: 700;
  }
  .contact-us-btn-group {
    display: none;
  }
}
@media(max-width: 991px) {
  .contact-us-sec1-contact-us {
    width: 100%;
    padding: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .contact-us-image {
    order: 2;
  }
  .contact-us-contact-content-sec1 {
    align-items: center;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .contact-us-text {
    text-align: center;
  }
  .contact-us-text01 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .contact-us-sec1-contact-us {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .contact-us-image {
    width: 80%;
  }
}
@media(max-width: 576px) {
  .contact-us-text {
    color: #000000;
    font-size: 3rem;
    text-align: left;
  }
  .contact-us-text01 {
    text-align: left;
  }
  .contact-us-text06 {
    width: 100%;
  }
  .contact-us-text17 {
    width: 100%;
    padding: var(--dl-space-space-halfunit);
  }
}
@media(max-width: 479px) {
  .contact-us-sec1-contact-us {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .contact-us-contact-content-sec1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .contact-us-btn-group {
    flex-direction: column;
  }
  .contact-us-button1 {
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
}
</style>
