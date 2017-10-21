<template>
  <div class="sidebar">
    <div class="sidebar__item">
      <app-title />
    </div>
    <div class="sidebar__item">
      <navigation />
    </div>
    <div class="sidebar__item sidebar__item--separator"/>
    <div class="sidebar__item">
      <social-links />
    </div>
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle';
import Navigation from '@/components/Navigation';
import SocialLinks from '@/components/SocialLinks';

export default {
  name: 'sidebar',
  components: {
    AppTitle,
    Navigation,
    SocialLinks,
  },

  computed: {},

  data() {
    return {};
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;

  flex: 0 0 280px;
  overflow: auto;
}

.sidebar__item {
  flex: 0 0 auto;
  padding: 0 50px;
}

.sidebar__item--separator {
  flex: 1 1 auto;
}
</style>
