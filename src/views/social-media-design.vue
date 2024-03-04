<template>
  <div class="social-media-design-container">
    <div class="social-media-design-features">
      <h1 class="social-media-design-text">Social Media Design</h1>
      <div class="social-media-design-container1"></div>
    </div>
    <div class="social-media-design-hero">
      <h1 class="social-media-design-text01">
        <span class="social-media-design-text02">We Creat Brands</span>
        <br />
      </h1>
      <span class="social-media-design-text04">
        <span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            volutpat turpis.
            <span v-html="rawtszf"></span>
          </span>
          <span><span v-html="rawtml4"></span></span>
        </span>
        <br />
        <span>
          <span>
            Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
            <span v-html="raw4zzz"></span>
          </span>
          <span><span v-html="rawnduh"></span></span>
        </span>
      </span>
      <div class="social-media-design-btn-group"></div>
    </div>
    <h2 class="social-media-design-text11">Portfolio</h2>
    <div class="social-media-design-gallery"></div>
    <div class="social-media-design-gallery1"></div>
  </div>
</template>

<script>
export default {
  name: 'SocialMediaDesign',
  props: {},
  data() {
    return {
      rawtszf: ' ',
      rawtml4: ' ',
      raw4zzz: ' ',
      rawnduh: ' ',
    }
  },
  metaInfo: {
    title:
      'Social-Media-Design -  Elevate Your Brand with Stunning Graphic Design | Graphic Design',
    meta: [
      {
        name: 'description',
        content:
          'Elevate your brand with our comprehensive solutions. From graphic designs and websites to captivating social media visuals we bring your vision to life.',
      },
      {
        property: 'og:title',
        content:
          'Social-Media-Design -  Elevate Your Brand with Stunning Graphic Design | Graphic Design',
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
.social-media-design-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.social-media-design-features {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  flex-direction: column;
}
.social-media-design-text {
  font-size: 3rem;
  margin-bottom: var(--dl-space-space-threeunits);
}
.social-media-design-container1 {
  flex: 0 0 auto;
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-twounits);
  align-items: flex-start;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.social-media-design-hero {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  position: relative;
  min-height: 80vh;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-image: linear-gradient(113.8deg, rgba(255, 76, 92, 0.8) 7.5%, rgba(255, 177, 70, 0.8) 94.47%),url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHx3b3JrJTIwbGFwdG9wfGVufDB8fHx8MTYyNjE3NjkzMA&ixlib=rb-1.2.1&w=1500');
}
.social-media-design-text01 {
  color: var(--dl-color-gray-white);
  font-size: 3rem;
}
.social-media-design-text04 {
  color: var(--dl-color-gray-white);
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
}
.social-media-design-btn-group {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.social-media-design-text11 {
  font-size: 60px;
  margin-top: var(--dl-space-space-sixunits);
}
.social-media-design-gallery {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-threeunits);
  grid-gap: var(--dl-space-space-unit);
  max-width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
}
.social-media-design-gallery1 {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-threeunits);
  grid-gap: var(--dl-space-space-unit);
  max-width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
}
@media(max-width: 1600px) {
  .social-media-design-features {
    position: relative;
    max-width: 100%;
    margin-top: var(--dl-space-space-sixunits);
  }
  .social-media-design-text {
    font-size: 3rem;
    text-align: center;
  }
  .social-media-design-container1 {
    align-self: center;
  }
  .social-media-design-hero {
    height: 406px;
  }
  .social-media-design-text01 {
    color: var(--dl-color-gray-white);
    font-size: 3rem;
  }
  .social-media-design-text11 {
    font-size: 60px;
    margin-top: var(--dl-space-space-sixunits);
    font-weight: 700;
  }
}
@media(max-width: 991px) {
  .social-media-design-text {
    align-self: center;
  }
  .social-media-design-container1 {
    grid-template-columns: 1fr 1fr;
  }
  .social-media-design-hero {
    flex-direction: column;
  }
  .social-media-design-text01 {
    text-align: center;
  }
  .social-media-design-text02 {
    text-align: center;
  }
  .social-media-design-text04 {
    text-align: center;
  }
  .social-media-design-gallery {
    grid-template-columns: 1fr 1fr;
  }
  .social-media-design-gallery1 {
    grid-template-columns: 1fr 1fr;
  }
}
@media(max-width: 767px) {
  .social-media-design-features {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .social-media-design-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .social-media-design-gallery {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .social-media-design-gallery1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
}
@media(max-width: 479px) {
  .social-media-design-features {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .social-media-design-container1 {
    grid-gap: var(--dl-space-space-halfunit);
  }
  .social-media-design-hero {
    width: 100%;
    padding: var(--dl-space-space-twounits);
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .social-media-design-btn-group {
    flex-direction: column;
  }
  .social-media-design-gallery {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .social-media-design-gallery1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
}
</style>
