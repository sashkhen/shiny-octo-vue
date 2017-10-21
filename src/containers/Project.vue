<template>
  <div class="wrapper">
    <div v-if="project">{{ project.id }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'project',

  computed: mapGetters({
    project: 'currentProject',
  }),

  beforeMount() {
    this.renderProject();
  },

  methods: {
    ...mapActions([
      'browseProject',
    ]),
    renderProject() {
      const { id } = this.$route.params;

      this.browseProject(id);
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
