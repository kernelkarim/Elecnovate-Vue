<template>
  <div class="feature-card14-feature-card" v-bind:class="rootClassName">
    <h2 class="feature-card14-text">{{ title }}</h2>
    <img :alt="imageAlt" :src="imageSrc" class="feature-card14-image" />
  </div>
</template>

<script>
export default {
  name: 'FeatureCard14',
  props: {
    imageSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&h=400',
    },
    title: {
      type: String,
      default: 'Lorem ipsum',
    },
    rootClassName: String,
    imageAlt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.feature-card14-feature-card {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.feature-card14-feature-card:hover {
  transform: scale(1.02);
}
.feature-card14-text {
  font-size: 1.5rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.feature-card14-image {
  width: 249px;
  height: 349px;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius4);
}








@media(max-width: 1600px) {
  .feature-card14-root-class-name {
    max-width: 100%;
  }
  .feature-card14-root-class-name1 {
    max-width: 100%;
  }
  .feature-card14-root-class-name2 {
    max-width: 100%;
  }
  .feature-card14-root-class-name3 {
    max-width: 100%;
  }
  .feature-card14-root-class-name4 {
    max-width: 100%;
  }
  .feature-card14-root-class-name5 {
    max-width: 100%;
  }
  .feature-card14-root-class-name6 {
    max-width: 100%;
  }
  .feature-card14-root-class-name7 {
    max-width: 100%;
  }
}
@media(max-width: 1200px) {
  .feature-card14-feature-card {
    max-width: 100%;
  }
}
</style>
