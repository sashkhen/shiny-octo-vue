<template>
  <div class="wrapper">
    <projects :projects="projects"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Projects from '@/components/Projects';

export default {
  name: 'home',
  components: {
    Projects,
  },

  computed: mapGetters({
    projects: 'allProjects',
  }),

  created() {
    this.$store.dispatch('getAllProjects');
  },
};
</script>

<style scoped>
.wrapper {
  padding: 0 35px 62px 0;
}
</style>
