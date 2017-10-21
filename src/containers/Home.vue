<template>
  <div class="wrapper">
    <projects :projects="projects"/>
  </div>
</template>

<script>
import Projects from '@/components/Projects';
import { API_URL } from '@/constants';

export default {
  name: 'home',
  components: {
    Projects,
  },

  data() {
    return {
      projects: null,
    };
  },

  beforeMount() {
    this.getProjects();
  },

  methods: {
    getProjects() {
      this.$http
        .get(API_URL).then((response) => {
          this.projects = response.body.projects;
        }, (response) => {
          // error callback
          console.error('Failed with: ', response); // eslint-disable-line no-console
        });
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding: 0 80px 62px 0;
}
</style>
