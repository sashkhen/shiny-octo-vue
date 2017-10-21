<template>
  <div class="sidebar">
    <div class="sidebar__item">
      <p>Logo</p>
      <p>Title</p>
    </div>
    <div class="sidebar__item">
      <navigation />
    </div>
    <div class="sidebar__item sidebar__item--separator"/>
    <div class="sidebar__item">
      <p>Social Share bar</p>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'sidebar',
  components: {
    Navigation,
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
  background-color: rgba(0, 0, 0, .2);
}

.sidebar__item {
  flex: 0 0 auto;
  padding: 0 50px;
  background-color: rgba(0, 0, 0, .4);
}

.sidebar__item--separator {
  flex: 1 1 auto;
  background-color: rgba(0, 0, 0, .5);
}
</style>
