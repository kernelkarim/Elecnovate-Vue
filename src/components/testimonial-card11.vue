<template>
  <div class="testimonial-card11-testimonial-card" v-bind:class="rootClassName">
    <svg viewBox="0 0 950.8571428571428 1024" class="testimonial-card11-icon">
      <path
        d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"
      ></path>
    </svg>
    <div class="testimonial-card11-testimonial">
      <span class="testimonial-card11-text">{{ quote }}</span>
      <span class="testimonial-card11-text1">{{ role }}</span>
      <img :alt="pictureAlt" :src="pictureSrc" class="testimonial-card11-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard11',
  props: {
    pictureSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
    },
    quote: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
    },
    rootClassName: String,
    pictureAlt: {
      type: String,
      default: 'profile',
    },
    name: {
      type: String,
      default: 'Jane Doe',
    },
    role: {
      type: String,
      default: 'SOFTWARE ENGINEER',
    },
  },
}
</script>

<style scoped>
.testimonial-card11-testimonial-card {
  display: flex;
  padding: var(--dl-space-space-twounits);
  max-width: var(--dl-size-size-maxwidth);
  background: #fff;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.testimonial-card11-icon {
  width: 2rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.testimonial-card11-testimonial {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.testimonial-card11-text {
  color: var(--dl-color-gray-500);
  text-align: center;
  margin-bottom: var(--dl-space-space-threeunits);
}
.testimonial-card11-text1 {
  color: var(--dl-color-gray-500);
  font-weight: 600;
  margin-bottom: var(--dl-space-space-unit);
  text-transform: uppercase;
}
.testimonial-card11-image {
  width: var(--dl-size-size-medium);
  height: var(--dl-size-size-medium);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}









@media(max-width: 1200px) {
  .testimonial-card11-text {
    text-align: left;
  }
  .testimonial-card11-root-class-name2 {
    width: 100%;
    max-width: 100%;
  }
}
@media(max-width: 991px) {
  .testimonial-card11-text1 {
    align-self: center;
  }
}
@media(max-width: 767px) {
  .testimonial-card11-testimonial-card {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
}
@media(max-width: 479px) {
  .testimonial-card11-testimonial-card {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .testimonial-card11-icon {
    margin-bottom: var(--dl-space-space-unit);
  }
  .testimonial-card11-text {
    margin-bottom: var(--dl-space-space-twounits);
  }
  .testimonial-card11-text1 {
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
