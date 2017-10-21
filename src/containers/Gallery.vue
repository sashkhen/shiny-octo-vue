<!-- DEPRECATED -->
<template>
  <div id="gallery">
    <h1>{{ title }}</h1>
    <list :list="projects"></list>
  </div>
</template>

<script>
import List from '../components/List';
import staticProjects from '../constants/projects.json';

const API_URL = 'http://api.behance.net/v2/users/mr_lucky/projects?client_id=cThQ8I71tjkVrL56Z9MKxTuh0P3yjehV';

export default {
  name: 'gallery',
  components: {
    List,
  },
  data() {
    return {
      title: 'Browse gallery',
      projects: staticProjects.projects,
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
          console.error('Failed with: ', response);
        });
    },
  },
};
</script>

<style scoped>
</style>
