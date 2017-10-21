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
    };
  },
};
</script>

<style scoped>
.projects {}

.error {
  color: red;
}
</style>
