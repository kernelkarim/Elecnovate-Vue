<template>
  <div class="our-story-container">
    <div class="our-story-hero">
      <div class="our-story-container1">
        <h1 class="our-story-text">Magnificent things are very simple</h1>
        <p class="our-story-text01">
          <br />
          <span>
            This story begins not as a single voice, but as a chorus of creative
            minds. At Elecnovate, each of us brings not only technical expertise,
            but also a passion for the power of visual communication.
          </span>
          <br />
          <br />
          <span>
            It&apos;s not about creating an aesthetically pleasing design;
            It&apos;s about creating stories visually, touching the heart and
            inspiring action. We hope our designs leave a lasting impression on
            the audience and bridge the gap between ideas and reality.
          </span>
          <br />
          <br />
          <span>
            Our journey is not always easy. We face challenges, develop our skills
            together, and continue to push each other to reach new creative
            heights. We&apos;ve worked on [name some notable project or
            achievement] along the way, and each experience has strengthened our
            bond and shaped our design philosophy.
          </span>
          <br />
          <br />
          <span>
            Today, we stand as a dynamic force with a common goal: transforming
            the ordinary into the extraordinary. We believe that design has the
            power to move mountains, and we dedicate our collective experience to
            creating visual stories that resonate and leave a lasting impression.
          </span>
          <br />
          <br />
          <span>
            Explore our portfolio and learn how our passion is translated into
            effective design solutions.
          </span>
        </p>
        <div class="our-story-btn-group"></div>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1500"
        class="our-story-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurStory',
  props: {},
  metaInfo: {
    title: 'Our-Story - Elecnovate',
    meta: [
      {
        property: 'og:title',
        content: 'Our-Story - Elecnovate',
      },
    ],
  },
}
</script>

<style scoped>
.our-story-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.our-story-hero {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: 100%;
  min-height: 80vh;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.our-story-container1 {
  display: flex;
  margin-right: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
}
.our-story-text {
  font-size: 3rem;
  max-width: 450px;
}
.our-story-btn-group {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.our-story-image {
  width: 400px;
  object-fit: cover;
}
@media(max-width: 1600px) {
  .our-story-hero {
    width: 100%;
    max-width: 100%;
  }
  .our-story-text {
    width: 100%;
    max-width: 100%;
  }
  .our-story-text01 {
    font-size: 30px;
    font-family: Noto Sans;
  }
}
@media(max-width: 991px) {
  .our-story-hero {
    flex-direction: column;
  }
  .our-story-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .our-story-text {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .our-story-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .our-story-image {
    width: 80%;
  }
}
@media(max-width: 479px) {
  .our-story-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .our-story-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .our-story-btn-group {
    flex-direction: column;
  }
}
</style>
