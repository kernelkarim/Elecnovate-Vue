<template>
  <nav class="navigation-links2-nav" v-bind:class="rootClassName">
    <span class="navigation-links2-text">{{ text }}</span>
    <span class="navigation-links2-text1">{{ text1 }}</span>
    <span class="navigation-links2-text2">{{ text2 }}</span>
    <span class="navigation-links2-text3">{{ text3 }}</span>
    <span class="navigation-links2-text4">{{ text4 }}</span>
  </nav>
</template>

<script>
export default {
  name: 'NavigationLinks2',
  props: {
    text: {
      type: String,
      default: 'About',
    },
    text1: {
      type: String,
      default: 'Features',
    },
    text2: {
      type: String,
      default: 'Pricing',
    },
    text3: {
      type: String,
      default: 'Team',
    },
    text4: {
      type: String,
      default: 'Blog',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.navigation-links2-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.navigation-links2-text1 {
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links2-text2 {
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links2-text3 {
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links2-text4 {
  margin-left: var(--dl-space-space-twounits);
}








@media(max-width: 767px) {
  .navigation-links2-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .navigation-links2-text {
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links2-text1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links2-text2 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links2-text3 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links2-text4 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
