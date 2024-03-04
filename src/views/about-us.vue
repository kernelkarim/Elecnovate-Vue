<template>
  <div class="about-us-container">
    <div class="about-us-sec1">
      <div class="about-us-about-us-container">
        <h1 class="about-us-text">
          About us - Embrace Simplicity: Crafting Design Stories with Clarity
        </h1>
        <p class="about-us-about-us-description">
          <span>Where creative innovation meets great design solutions.</span>
          <br />
          <span>
            At Elecnovate, we&apos;re not just a team of designers; we&apos;re a
            collective passionate about redefining the design services landscape.
            Our journey begins with a simple belief: every pixel, every line, and
            every color has the potential to tell an interesting story.
          </span>
          <br />
          <br />
          <span>
            Built on this principle, Elecnovate offers a spectrum of creative
            solutions including:
          </span>
          <br />
          <span>1. Graphics Design</span>
          <br />
          <span>2. Branding</span>
          <br />
          <span>3. User Interface &amp; User Experience Design</span>
          <br />
          <span>4. Website design &amp; development</span>
          <br />
          <span>5. Social media design</span>
          <br />
          <br />
          <span>
            Through our core partnerships, we have fostered a culture where
            imagination knows no bounds and innovation thrives.
          </span>
          <br />
          <span>
            By seamlessly combining art and technology, we create an immersive
            visual experience that engages and captivates audiences. Our approach
            is not only about creating aesthetically pleasing designs but also
            about weaving stories that meet depth with authenticity and emotion.
          </span>
          <br />
          <span>
            At Elecnovate, perfection is not the goal; it&apos;s the standard. We
            are committed to exceeding expectations and setting new benchmarks in
            creativity and quality. Whether it&apos;s building a brand identity,
            designing an intuitive user interface, or creating compelling content,
            every project is characterized by attention to detail and an
            unwavering dedication to excellence.
          </span>
          <br />
          <span>
            As we continue to grow and develop, our commitment to our customers
            remains strong. We understand that design is more than just
            aesthetics; it&apos;s about creating a memorable experience. Join us
            on our journey one pixel at a time as we move forward into the future
            of design. Together, let&apos;s create something amazing.
          </span>
        </p>
        <button class="about-us-button button">Contact us</button>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/3/doctype-hi-res.jpg?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMzfHxncmFwaGljcyUyMGRlc2lnbnxlbnwwfHx8fDE3MDk0NzY0MTB8MA&amp;ixlib=rb-4.0.3&amp;w=700"
        class="about-us-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  props: {},
  metaInfo: {
    title:
      'About-us -  Elevate Your Brand with Stunning Graphic Design | Graphic Design',
    meta: [
      {
        name: 'description',
        content:
          'Elevate your brand with our comprehensive solutions. From graphic designs and websites to captivating social media visuals we bring your vision to life.',
      },
      {
        property: 'og:title',
        content:
          'About-us -  Elevate Your Brand with Stunning Graphic Design | Graphic Design',
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
.about-us-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.about-us-sec1 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  min-height: 80vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #333a73;
}
.about-us-about-us-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.about-us-text {
  color: #ffffff;
  font-size: 2rem;
}
.about-us-about-us-description {
  color: #ffffff;
  font-size: 22px;
  margin-top: var(--dl-space-space-twounits);
  text-align: left;
  font-family: "Courier New";
  padding-left: var(--dl-space-space-threeunits);
  margin-bottom: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-threeunits);
}
.about-us-button {
  transition: 0.3s;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
}
.about-us-button:hover {
  transform: scale(1.02);
}
.about-us-image {
  width: 640px;
  height: 400px;
  margin-top: var(--dl-space-space-twounits);
  border-color: #ffffff;
  border-width: 10px;
  border-radius: 32px;
}
@media(max-width: 1600px) {
  .about-us-sec1 {
    height: 100%;
    background-color: #333a73;
  }
  .about-us-text {
    color: rgb(255, 255, 255);
    font-size: 2rem;
  }
  .about-us-about-us-description {
    color: rgb(255, 255, 255);
    font-size: 22px;
    align-self: flex-start;
    text-align: left;
    font-family: Courier New;
  }
  .about-us-button {
    font-weight: 700;
  }
  .about-us-image {
    width: 543px;
    height: 295px;
    border-radius: 16px;
  }
}
@media(max-width: 1200px) {
  .about-us-sec1 {
    height: 100%;
  }
  .about-us-text {
    color: rgb(255, 255, 255);
    font-size: 1.75rem;
  }
  .about-us-about-us-description {
    color: rgb(255, 255, 255);
  }
  .about-us-image {
    width: 485px;
    height: 285px;
  }
}
@media(max-width: 991px) {
  .about-us-sec1 {
    flex-direction: column;
  }
  .about-us-about-us-container {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .about-us-text {
    text-align: center;
  }
  .about-us-about-us-description {
    text-align: left;
  }
  .about-us-image {
    width: 508px;
  }
}
@media(max-width: 767px) {
  .about-us-sec1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .about-us-about-us-description {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
}
@media(max-width: 479px) {
  .about-us-sec1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .about-us-about-us-container {
    margin-bottom: var(--dl-space-space-unit);
  }
  .about-us-button {
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
}
</style>
