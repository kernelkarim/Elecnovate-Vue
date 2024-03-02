<template>
  <div class="gallery-card13-gallery-card" v-bind:class="rootClassName">
    <img :alt="imageAlt" :src="imageSrc" class="gallery-card13-image" />
    <h2 class="gallery-card13-text">{{ title }}</h2>
    <span class="gallery-card13-text1">{{ subtitle }}</span>
  </div>
</template>

<script>
export default {
  name: 'GalleryCard13',
  props: {
    subtitle: {
      type: String,
      default: 'Lorem ipsum dolor sit amet',
    },
    rootClassName: String,
    imageAlt: {
      type: String,
      default: 'image',
    },
    title: {
      type: String,
      default: 'Project Title',
    },
    imageSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
    },
  },
}
</script>

<style scoped>
.gallery-card13-gallery-card {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.gallery-card13-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.gallery-card13-text {
  align-self: flex-start;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 600;
  margin-bottom: var(--dl-space-space-halfunit);
}
.gallery-card13-text1 {
  color: var(--dl-color-gray-500);
  align-self: flex-start;
}






@media(max-width: 767px) {
  .gallery-card13-gallery-card {
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .gallery-card13-image {
    height: 10rem;
  }
}
</style>
