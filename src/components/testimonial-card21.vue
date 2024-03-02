<template>
  <div class="testimonial-card21-testimonial-card" v-bind:class="rootClassName">
    <div class="testimonial-card21-testimonial">
      <svg viewBox="0 0 1024 1024" class="testimonial-card21-icon">
        <path
          d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"
        ></path>
      </svg>
      <span class="testimonial-card21-text">{{ quote }}</span>
      <span class="testimonial-card21-text1">{{ name }}</span>
    </div>
    <img :alt="profileAlt" :src="profileSrc" class="testimonial-card21-image" />
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard21',
  props: {
    rootClassName: String,
    quote: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
    },
    profileSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
    },
    profileAlt: {
      type: String,
      default: 'profile',
    },
    name: {
      type: String,
      default: 'John Doe',
    },
  },
}
</script>

<style scoped>
.testimonial-card21-testimonial-card {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  background: #fff;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  align-items: center;
  justify-content: space-between;
}
.testimonial-card21-testimonial {
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  justify-content: space-between;
}
.testimonial-card21-icon {
  width: var(--dl-size-size-small);
  flex-shrink: 0;
  margin-bottom: var(--dl-space-space-twounits);
}
.testimonial-card21-text {
  color: var(--dl-color-gray-500);
  font-size: 1.15rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.testimonial-card21-text1 {
  font-size: 1.5rem;
  font-weight: 600;
}
.testimonial-card21-image {
  width: var(--dl-size-size-xlarge);
  height: var(--dl-size-size-xlarge);
  object-fit: cover;
  flex-shrink: 0;
  border-radius: var(--dl-radius-radius-round);
}
.testimonial-card21-root-class-name1 {
  align-self: flex-start;
}
.testimonial-card21-root-class-name2 {
  align-self: flex-start;
}
@media(max-width: 767px) {
  .testimonial-card21-testimonial-card {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .testimonial-card21-testimonial {
    margin-right: var(--dl-space-space-twounits);
  }
  .testimonial-card21-icon {
    height: var(--dl-size-size-small);
  }
}
@media(max-width: 479px) {
  .testimonial-card21-testimonial-card {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
  }
  .testimonial-card21-testimonial {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .testimonial-card21-text {
    text-align: left;
  }
}
</style>
