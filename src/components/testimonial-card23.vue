<template>
  <div class="testimonial-card23-testimonial-card" v-bind:class="rootClassName">
    <div class="testimonial-card23-testimonial">
      <svg viewBox="0 0 1024 1024" class="testimonial-card23-icon">
        <path
          d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"
        ></path>
      </svg>
      <span class="testimonial-card23-text">{{ quote }}</span>
    </div>
    <img :alt="profileAlt" :src="profileSrc" class="testimonial-card23-image" />
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard23',
  props: {
    name: {
      type: String,
      default: 'John Doe',
    },
    profileAlt: {
      type: String,
      default: 'profile',
    },
    rootClassName: String,
    profileSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
    },
    quote: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
    },
  },
}
</script>

<style scoped>
.testimonial-card23-testimonial-card {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  background: #fff;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  align-items: center;
  justify-content: space-between;
}
.testimonial-card23-testimonial {
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  justify-content: space-between;
}
.testimonial-card23-icon {
  width: var(--dl-size-size-small);
  flex-shrink: 0;
  margin-bottom: var(--dl-space-space-twounits);
}
.testimonial-card23-text {
  color: var(--dl-color-gray-500);
  font-size: 28;
  margin-bottom: var(--dl-space-space-twounits);
}
.testimonial-card23-image {
  width: var(--dl-size-size-xlarge);
  height: var(--dl-size-size-xlarge);
  object-fit: cover;
  flex-shrink: 0;
  border-radius: var(--dl-radius-radius-round);
}
.testimonial-card23-root-class-name1 {
  align-self: flex-start;
}
@media(max-width: 1600px) {
  .testimonial-card23-text {
    font-size: 24;
  }
}
@media(max-width: 1200px) {
  .testimonial-card23-text {
    font-size: 18;
  }
}
@media(max-width: 767px) {
  .testimonial-card23-testimonial-card {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .testimonial-card23-testimonial {
    margin-right: var(--dl-space-space-twounits);
  }
  .testimonial-card23-icon {
    height: var(--dl-size-size-small);
  }
}
@media(max-width: 576px) {
  .testimonial-card23-testimonial-card {
    max-width: 100%;
    align-items: stretch;
    flex-direction: column;
    justify-content: flex-start;
  }
  .testimonial-card23-image {
    margin-top: var(--dl-space-space-threeunits);
  }
  .testimonial-card23-root-class-name1 {
    max-width: 100%;
  }
}
@media(max-width: 479px) {
  .testimonial-card23-testimonial-card {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
  }
  .testimonial-card23-testimonial {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .testimonial-card23-text {
    text-align: left;
  }
}
</style>
