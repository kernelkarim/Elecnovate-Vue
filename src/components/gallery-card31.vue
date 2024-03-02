<template>
  <div class="gallery-card31-gallery-card" v-bind:class="rootClassName">
    <img :alt="imageAlt" :src="imageSrc" class="gallery-card31-image" />
    <div class="gallery-card31-container">
      <h1 class="gallery-card31-text">{{ title }}</h1>
      <span class="gallery-card31-text1">{{ subtitle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryCard31',
  props: {
    subtitle: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
    title: {
      type: String,
      default: 'Project Title',
    },
    imageSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&h=1000',
    },
  },
}
</script>

<style scoped>
.gallery-card31-gallery-card {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.gallery-card31-image {
  top: 0px;
  left: 0px;
  right: auto;
  width: 100%;
  bottom: auto;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
.gallery-card31-container {
  width: 100%;
  height: 300px;
  display: flex;
  opacity: 0;
  padding: var(--dl-space-space-twounits);
  z-index: 1;
  transition: 0.3s;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9));;
}
.gallery-card31-container:hover {
  opacity: 1;
}
.gallery-card31-text {
  color: var(--dl-color-gray-white);
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.gallery-card31-text1 {
  color: var(--dl-color-gray-white);
  text-align: center;
}












@media(max-width: 479px) {
  .gallery-card31-text {
    align-self: center;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
