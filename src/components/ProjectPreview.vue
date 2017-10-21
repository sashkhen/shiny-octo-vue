<!-- TO DO: snake_case -> camelCase -->
<template>
  <div class="project-preview">
    {{ title }}
  </div>
</template>

<script>
const THUMB_SIZE = '230';

export default {
  name: 'project-preview',
  props: ['project'],
  components: {},

  data() {
    const {
      created_on,
      covers,
      name,
    } = this.project;

    return {
      date: this.getDate(created_on),
      thumb: covers[THUMB_SIZE],
      title: name.replace(/["']/g, ''),
    };
  },
  methods: {
    getDate(dateString) {
      const newDate = new Date((dateString, 10));
      return newDate.toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.project-preview {
  background-color: rgba(0, 0, 0, .1);
}
</style>
