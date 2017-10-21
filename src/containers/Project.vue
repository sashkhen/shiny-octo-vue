<template>
  <div class="wrapper">
    <div v-if="project.id">{{ project.id }}</div>
  </div>
</template>

<script>
export default {
  name: 'project',

  data() {
    return {
      project: {
        id: null,
      },
    };
  },

  beforeMount() {
    this.renderProject();
  },

  methods: {
    renderProject() {
      const { id } = this.$route.params;

      this.project.id = id;
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding: 0 80px 62px 0;
  background-color: rgba(0, 0, 0, .3);
}
</style>
