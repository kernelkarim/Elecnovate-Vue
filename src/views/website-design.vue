<template>
  <div class="website-design-container">
    <div class="website-design-hero">
      <div class="website-design-container01">
        <h1 class="website-design-text">Web Design</h1>
        <span class="website-design-text01">
          <span>
            Navigate the digital landscape with exceptional website design. Each
            website is not just a digital presence but a crafted experience.
            Explore my portfolio to see how I merge aesthetics with functionality,
            creating online spaces that leave a lasting impression.
          </span>
          <br />
          <br />
        </span>
        <div class="website-design-btn-group">
          <button class="website-design-button button">Get Started</button>
          <button class="website-design-button1 button">Learn More</button>
        </div>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;w=1200"
        class="website-design-image"
      />
    </div>
    <div class="website-design-features">
      <h1 class="website-design-text05">CREATE SOMETHING GREAT</h1>
      <span class="website-design-text06">
        <span class="website-design-text07">
          At the core of our business is development. We are delivering efficient,
          scalable, and thoroughly tested solutions.
        </span>
        <br />
        <span>Empowering Your Vision with Cutting-Edge Solutions.</span>
        <br />
        <br />
      </span>
      <button class="website-design-button2 button">Learn More</button>
      <div class="website-design-container02"></div>
    </div>
    <div class="website-design-testimonial">
      <div class="website-design-container03">
        <h1 class="website-design-text12">
          <span>We believe in collaboration and innovation</span>
          <br />
        </h1>
        <span class="website-design-text15">
          Versatile web design and development services committed to transforming
          your concepts into captivating online realities. Let&apos;s bring your
          ideas to life!
        </span>
        <div class="website-design-container04"></div>
      </div>
    </div>
    <div class="website-design-gallery">
      <div class="website-design-container05">
        <div class="website-design-container06">
          <h1 class="website-design-text16">Ecommerce</h1>
          <span class="website-design-text17">Lorem ipsum dolor sit amet</span>
        </div>
      </div>
      <div class="website-design-container07">
        <div class="website-design-container08">
          <h1 class="website-design-text18">Blog</h1>
          <span class="website-design-text19">
            <span>Lorem ipsum dolor sit amet</span>
          </span>
        </div>
      </div>
      <div class="website-design-container09">
        <div class="website-design-container10">
          <h1 class="website-design-text21">Portfolio</h1>
          <span class="website-design-text22">
            <span>Lorem ipsum dolor sit amet</span>
          </span>
        </div>
      </div>
      <div class="website-design-container11">
        <div class="website-design-container12">
          <h1 class="website-design-text24">
            <span class="website-design-text25">Landing Page</span>
            <br />
            <br class="website-design-text27" />
          </h1>
          <span class="website-design-text28">
            <span>Lorem ipsum dolor sit amet</span>
          </span>
        </div>
      </div>
      <div class="website-design-container13">
        <div class="website-design-container14">
          <h1 class="website-design-text30">
            Content Management System (CMS) Integration
          </h1>
          <span class="website-design-text31">
            <span>Lorem ipsum dolor sit amet</span>
          </span>
        </div>
      </div>
      <div class="website-design-container15">
        <div class="website-design-container16">
          <h1 class="website-design-text33">Project Title</h1>
          <span class="website-design-text34">
            <span>Lorem ipsum dolor sit amet</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebsiteDesign',
  props: {},
  metaInfo: {
    title:
      'Website-Design -  Elevate Your Brand with Stunning Graphic Design | Graphic Design',
    meta: [
      {
        name: 'description',
        content:
          'Elevate your brand with our comprehensive solutions. From graphic designs and websites to captivating social media visuals we bring your vision to life.',
      },
      {
        property: 'og:title',
        content:
          'Website-Design -  Elevate Your Brand with Stunning Graphic Design | Graphic Design',
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
.website-design-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.website-design-hero {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: 100%;
  min-height: 80vh;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.website-design-container01 {
  display: flex;
  margin-right: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
}
.website-design-text {
  font-size: 3rem;
  max-width: 450px;
}
.website-design-btn-group {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.website-design-button {
  transition: 0.3s;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
}
.website-design-button:hover {
  color: var(--dl-color-gray-white);
  background-color: var(--dl-color-gray-black);
}
.website-design-button1 {
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  padding-top: var(--dl-space-space-unit);
  border-color: transparent;
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
}
.website-design-button1:hover {
  border-color: var(--dl-color-gray-black);
}
.website-design-image {
  width: 400px;
  object-fit: cover;
}
.website-design-features {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: 100%;
  flex-direction: column;
}
.website-design-text05 {
  font-size: 3rem;
  margin-bottom: var(--dl-space-space-threeunits);
}
.website-design-button2 {
  margin-left: var(--dl-space-space-unit);
  padding-top: var(--dl-space-space-unit);
  border-color: transparent;
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
}
.website-design-container02 {
  flex: 0 0 auto;
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-twounits);
  align-items: flex-start;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.website-design-testimonial {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: 232323;
}
.website-design-container03 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.website-design-text12 {
  color: var(--dl-color-gray-white);
}
.website-design-text15 {
  color: var(--dl-color-gray-white);
  font-size: 0.75rem;
  max-width: 600px;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-twounits);
}
.website-design-container04 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-twounits);
  grid-template-columns: 1fr 1fr 1fr;
}
.website-design-gallery {
  width: 100%;
  height: 1200px;
  display: grid;
  grid-gap: var(--dl-space-space-unit);
  max-width: 100%;
  align-items: flex-start;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "a b b" "a b b" "a c d" "a c d"  "e e d" "e e f" "e e f";
  grid-template-columns: 1fr 1fr 1fr;
}
.website-design-container05 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 1;
  grid-area: a;
  transition: 0.3s;
  align-items: flex-start;
  flex-direction: column;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1522814208878-08129b4b76f3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGxpZ2h0aG91c2UlMjBwYXN0ZWx8ZW58MHx8fHwxNjI2NDM5Nzkx&ixlib=rb-1.2.1&w=1000");
  background-position: center;
}
.website-design-container05:hover {
  transform: scale(0.98);
}
.website-design-container06 {
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-direction: column;
}
.website-design-text16 {
  color: var(--dl-color-gray-white);
  font-size: 1.5rem;
  font-weight: 600;
}
.website-design-text17 {
  color: var(--dl-color-gray-white);
  margin-top: var(--dl-space-space-halfunit);
}
.website-design-container07 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  grid-area: b;
  transition: 0.3s;
  align-items: flex-start;
  flex-direction: column;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGdyZWVuJTIwbGFtcCUyMHBhc3RlbHxlbnwwfHx8fDE2MjY0Mzk4NDA&ixlib=rb-1.2.1&h=1000");
  background-position: center;
}
.website-design-container07:hover {
  transform: scale(0.98);
}
.website-design-container08 {
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-direction: column;
}
.website-design-text18 {
  color: var(--dl-color-gray-white);
  font-size: 1.5rem;
  font-weight: 600;
}
.website-design-text19 {
  color: var(--dl-color-gray-white);
  margin-top: var(--dl-space-space-halfunit);
}
.website-design-container09 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  grid-area: c;
  transition: 0.3s;
  align-items: flex-start;
  flex-direction: column;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1528696892704-5e1122852276?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBpbmslMjB0ZWElMjBwYXN0ZWx8ZW58MHx8fHwxNjI2NDM5ODU2&ixlib=rb-1.2.1&w=1000");
  background-position: center;
}
.website-design-container09:hover {
  transform: scale(0.98);
}
.website-design-container10 {
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: flex-start;
  flex-direction: column;
}
.website-design-text21 {
  color: var(--dl-color-gray-white);
  font-size: 1.5rem;
  font-weight: 600;
}
.website-design-text22 {
  color: var(--dl-color-gray-white);
  margin-top: var(--dl-space-space-halfunit);
}
.website-design-container11 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  grid-area: d;
  transition: 0.3s;
  align-items: flex-start;
  flex-direction: column;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHllbGxvdyUyMGljZWNyZWFtfGVufDB8fHx8MTYyNjQzOTg4OQ&ixlib=rb-1.2.1&h=1000");
  background-position: center;
}
.website-design-container11:hover {
  transform: scale(0.98);
}
.website-design-container12 {
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-direction: column;
}
.website-design-text24 {
  color: var(--dl-color-gray-white);
  font-size: 1.5rem;
  font-weight: 600;
}
.website-design-text25 {
  color: var(--dl-color-gray-white);
  font-size: 1.5rem;
  font-weight: 600;
}
.website-design-text28 {
  color: var(--dl-color-gray-white);
  margin-top: var(--dl-space-space-halfunit);
}
.website-design-container13 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  grid-area: e;
  transition: 0.3s;
  align-items: flex-start;
  flex-direction: column;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1551500226-b50b653e33e8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwYXN0ZWwlMjBjb2ZmZWUlMjBncmVlbnxlbnwwfHx8fDE2MjY0Mzk5MzA&ixlib=rb-1.2.1&w=1000");
  background-position: center;
}
.website-design-container13:hover {
  transform: scale(0.98);
}
.website-design-container14 {
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-direction: column;
}
.website-design-text30 {
  color: var(--dl-color-gray-white);
  font-size: 1.5rem;
  font-weight: 600;
}
.website-design-text31 {
  color: var(--dl-color-gray-white);
  margin-top: var(--dl-space-space-halfunit);
}
.website-design-container15 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  grid-area: f;
  transition: 0.3s;
  align-items: flex-start;
  flex-direction: column;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1591101761702-0c4927df1d52?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fHBhc3RlbCUyMHBpbmslMjBjb3R0b258ZW58MHx8fHwxNjI2NDQwMDUw&ixlib=rb-1.2.1&w=1000");
  background-position: center;
}
.website-design-container15:hover {
  transform: scale(0.98);
}
.website-design-container16 {
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-direction: column;
}
.website-design-text33 {
  color: var(--dl-color-gray-white);
  font-size: 1.5rem;
  font-weight: 600;
}
.website-design-text34 {
  color: var(--dl-color-gray-white);
  margin-top: var(--dl-space-space-halfunit);
}
@media(max-width: 1600px) {
  .website-design-hero {
    height: 600px;
    max-width: 100%;
  }
  .website-design-text {
    font-size: 2rem;
    line-height: 1.5;
  }
  .website-design-text01 {
    font-size: 20px;
    line-height: 1.5;
  }
  .website-design-features {
    width: 100%;
    height: 862px;
    position: relative;
    max-height: 100%;
  }
  .website-design-text05 {
    font-size: 3rem;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .website-design-text06 {
    font-size: 20px;
    margin-top: var(--dl-space-space-unit);
  }
  .website-design-text07 {
    margin-top: var(--dl-space-space-unit);
  }
  .website-design-button2 {
    color: #ffffff;
    width: 160px;
    height: 46px;
    margin-left: 0px;
    border-width: 2px;
    background-color: #000000;
  }
  .website-design-container02 {
    height: 505px;
    margin-top: var(--dl-space-space-twounits);
  }
  .website-design-container03 {
    max-width: 100%;
  }
  .website-design-gallery {
    max-width: 100%;
  }
  .website-design-text16 {
    color: var(--dl-color-gray-white);
    font-size: 1.5rem;
    font-weight: 600;
  }
  .website-design-text17 {
    color: var(--dl-color-gray-white);
    display: none;
  }
  .website-design-text18 {
    color: var(--dl-color-gray-white);
    font-size: 1.5rem;
    font-weight: 600;
  }
  .website-design-text19 {
    display: none;
  }
  .website-design-text21 {
    color: var(--dl-color-gray-white);
    font-size: 1.5rem;
    font-weight: 600;
  }
  .website-design-text22 {
    display: none;
  }
  .website-design-text28 {
    display: none;
  }
  .website-design-text30 {
    color: var(--dl-color-gray-white);
    font-size: 1.5rem;
    font-weight: 600;
  }
  .website-design-text31 {
    display: none;
  }
  .website-design-text34 {
    display: none;
  }
}
@media(max-width: 1200px) {
  .website-design-features {
    height: 878px;
  }
  .website-design-text12 {
    color: var(--dl-color-gray-white);
  }
  .website-design-text15 {
    color: var(--dl-color-gray-white);
    font-size: 1rem;
  }
}
@media(max-width: 991px) {
  .website-design-hero {
    width: 100%;
    height: 932px;
    flex-direction: column;
  }
  .website-design-container01 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .website-design-text {
    text-align: center;
  }
  .website-design-features {
    width: 100%;
    height: 1355px;
    max-height: auto;
  }
  .website-design-text05 {
    align-self: flex-start;
  }
  .website-design-text06 {
    text-align: left;
  }
  .website-design-container02 {
    grid-template-columns: 1fr 1fr;
  }
  .website-design-text12 {
    text-align: center;
  }
  .website-design-text15 {
    text-align: center;
  }
  .website-design-container04 {
    grid-template-columns: 1fr;
  }
  .website-design-gallery {
    grid-gap: var(--dl-space-space-unit);
  }
  .website-design-text16 {
    text-align: center;
  }
  .website-design-text17 {
    text-align: center;
  }
  .website-design-text18 {
    text-align: center;
  }
  .website-design-text19 {
    text-align: center;
  }
  .website-design-text21 {
    text-align: center;
  }
  .website-design-text22 {
    text-align: center;
  }
  .website-design-text24 {
    text-align: center;
  }
  .website-design-text25 {
    text-align: center;
  }
  .website-design-text27 {
    text-align: center;
  }
  .website-design-text28 {
    text-align: center;
  }
  .website-design-text30 {
    text-align: center;
  }
  .website-design-text31 {
    text-align: center;
  }
  .website-design-text33 {
    text-align: center;
  }
  .website-design-text34 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .website-design-hero {
    height: 814px;
    min-height: auto;
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .website-design-image {
    width: 80%;
    height: 428px;
  }
  .website-design-features {
    height: 1382px;
    max-height: auto;
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .website-design-container03 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .website-design-gallery {
    height: auto;
    display: flex;
    padding: var(--dl-space-space-twounits);
    flex-direction: column;
  }
}
@media(max-width: 576px) {
  .website-design-hero {
    height: 938px;
    position: relative;
  }
  .website-design-image {
    height: auto;
  }
  .website-design-features {
    position: static;
    max-height: 100%;
  }
  .website-design-text05 {
    font-size: 2.25rem;
    margin-bottom: var(--dl-space-space-halfunit);
  }
}
@media(max-width: 479px) {
  .website-design-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .website-design-container01 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .website-design-btn-group {
    flex-direction: column;
  }
  .website-design-button1 {
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .website-design-features {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .website-design-button2 {
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
  .website-design-container02 {
    grid-gap: var(--dl-space-space-halfunit);
  }
  .website-design-container03 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .website-design-gallery {
    width: 100%;
    padding: var(--dl-space-space-unit);
  }
}
</style>
