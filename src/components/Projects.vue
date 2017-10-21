<template>
  <ul v-if="projects" class="projects">
    <project-preview
      :key="project.id"
      v-for="project in projects"
      :project="project"
    />
  </ul>
  <p v-else class="error">
    {{ errorMsg }}
  </p>
</template>

<script>
import ProjectPreview from '@/components/ProjectPreview';

export default {
  name: 'projects',
  props: ['projects'],
  components: {
    ProjectPreview,
  },

  data() {
    return {
      errorMsg: 'Something went wrong...',
      projectsToShow: this.projects.slice(0, 8),
    };
  },
};
</script>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(3, [col] 33.3%);
  grid-template-rows: repeat(4, [row] auto);
}

.error {
  color: red;
}
</style>
