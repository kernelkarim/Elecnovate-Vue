<template>
  <div class="design-features-container">
    <div class="design-features-hero">
      <div class="design-features-container1">
        <h1 class="design-features-text">Features</h1>
        <span class="design-features-text01">
          <span class="design-features-text02">🌐 Digital Dexterity: </span>
          <br class="design-features-text03" />
          <span class="design-features-text04">
            In the digital age, the canvas of graphic design is ever-expanding. I
            navigate this vast landscape with dexterity, incorporating responsive
            design principles, interactive elements, and user-centric experiences.
            From mobile interfaces to desktop platforms, my designs seamlessly
            adapt to diverse digital environments.
          </span>
          <br />
          <br />
          <span class="design-features-text07">⏳ Enduring Results:</span>
          <br class="design-features-text08" />
          <span class="design-features-text09">
            While trends add a layer of freshness, my commitment goes beyond the
            ephemeral. I believe in creating designs with lasting resonance. Each
            visual element is meticulously crafted to stand the test of time,
            ensuring that the results not only meet the current aesthetic
            expectations but also maintain relevance in the years to come.
          </span>
          <br />
          <br />
          <span class="design-features-text12">🤝 Collaborative Excellence:</span>
          <br class="design-features-text13" />
          <span class="design-features-text14">
            The key to lasting results lies in collaborative excellence. By
            engaging closely with clients, understanding their goals, and aligning
            design solutions with their brand narrative, I ensure that the visual
            identity not only follows current trends but becomes a timeless
            representation of their essence.
          </span>
          <br />
          <br />
          <span class="design-features-text17">💡 Innovation and Tradition:</span>
          <br class="design-features-text18" />
          <span class="design-features-text19">
            I navigate the delicate balance between innovation and tradition. By
            infusing contemporary design trends with timeless principles, I create
            a visual language that resonates across eras. This approach ensures
            that my designs not only catch the eye today but continue to captivate
            and communicate effectively over the long haul.
          </span>
          <br />
          <br />
          <span class="design-features-text22">
            In summary, my graphic design ethos revolves around adaptability,
            digital fluency, enduring results, collaborative excellence, and a
            harmonious blend of innovation and tradition. It&apos;s not just about
            following trends; it&apos;s about creating designs that withstand the
            test of time while remaining visually impactful and relevant.
          </span>
          <br />
          <span><span v-html="raw5zm5"></span></span>
          <span><span v-html="rawzoza"></span></span>
        </span>
        <button class="design-features-button button">Contact us</button>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1605067063351-f81bc6041251?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM0fHxncmFwaGljcyUyMGRlc2lnbnxlbnwwfHx8fDE3MDk0NzY0MTB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        class="design-features-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignFeatures',
  props: {},
  data() {
    return {
      raw5zm5: ' ',
      rawzoza: ' ',
    }
  },
  metaInfo: {
    title:
      'Design-Features -  Elevate Your Brand with Stunning Graphic Design | Graphic Design',
    meta: [
      {
        name: 'description',
        content:
          'Elevate your brand with our comprehensive solutions. From graphic designs and websites to captivating social media visuals we bring your vision to life.',
      },
      {
        property: 'og:title',
        content:
          'Design-Features -  Elevate Your Brand with Stunning Graphic Design | Graphic Design',
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
.design-features-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.design-features-hero {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  min-height: 80vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.design-features-container1 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.design-features-text {
  font-size: 3rem;
}
.design-features-text01 {
  margin-top: var(--dl-space-space-twounits);
  text-align: left;
  padding-left: var(--dl-space-space-threeunits);
  margin-bottom: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-threeunits);
}
.design-features-text02 {
  font-weight: 700;
}
.design-features-text07 {
  font-weight: 700;
}
.design-features-text12 {
  font-weight: 700;
}
.design-features-text17 {
  font-weight: 700;
}
.design-features-button {
  transition: 0.3s;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
}
.design-features-button:hover {
  transform: scale(1.02);
}
.design-features-image {
  width: 45rem;
  margin-top: var(--dl-space-space-twounits);
}
@media(max-width: 1600px) {
  .design-features-text {
    font-size: 2.25rem;
  }
  .design-features-text01 {
    font-size: 22px;
    align-self: center;
    text-align: left;
  }
  .design-features-text02 {
    font-weight: 700;
  }
  .design-features-text03 {
    font-weight: 700;
  }
  .design-features-text07 {
    font-weight: 700;
  }
  .design-features-text12 {
    font-weight: 700;
  }
  .design-features-text17 {
    font-weight: 700;
  }
  .design-features-button {
    font-weight: 700;
  }
  .design-features-image {
    width: 614px;
    height: 358px;
    border-color: var(--dl-color-gray-black);
    border-width: 10px;
    border-radius: 32px;
  }
}
@media(max-width: 1200px) {
  .design-features-container1 {
    width: 100%;
  }
  .design-features-text {
    font-size: 3rem;
  }
  .design-features-text01 {
    align-self: center;
    text-align: left;
  }
  .design-features-text02 {
    font-size: 23px;
    font-weight: 700;
  }
  .design-features-text03 {
    font-size: 20px;
    font-weight: 700;
  }
  .design-features-text04 {
    font-size: 20px;
  }
  .design-features-text07 {
    font-size: 23px;
    font-weight: 700;
  }
  .design-features-text08 {
    font-weight: 700;
  }
  .design-features-text09 {
    font-size: 20px;
  }
  .design-features-text12 {
    font-size: 23px;
    font-weight: 700;
  }
  .design-features-text13 {
    font-weight: 700;
  }
  .design-features-text14 {
    font-size: 20px;
  }
  .design-features-text17 {
    font-size: 23px;
    font-weight: 700;
  }
  .design-features-text18 {
    font-weight: 700;
  }
  .design-features-text19 {
    font-size: 20px;
  }
  .design-features-text22 {
    font-size: 20px;
  }
  .design-features-button {
    width: auto;
  }
}
@media(max-width: 991px) {
  .design-features-hero {
    flex-direction: column;
  }
  .design-features-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .design-features-text {
    text-align: center;
  }
  .design-features-text01 {
    text-align: left;
  }
  .design-features-image {
    width: 80%;
  }
}
@media(max-width: 767px) {
  .design-features-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .design-features-text01 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
}
@media(max-width: 479px) {
  .design-features-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .design-features-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .design-features-button {
    margin-top: var(--dl-space-space-unit);
    margin-left: 0px;
  }
}
</style>
