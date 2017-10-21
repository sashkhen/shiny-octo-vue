<!-- TO DO: snake_case -> camelCase -->
<template>
  <div class="wrapper">
    <router-link
      :to="link"
      class="project-preview"
      v-bind:style="{ backgroundImage: 'url(' + thumb + ')' }"
    />
  </router-link>
  </div>
</template>

<script>
const THUMB_SIZE = '404';

export default {
  name: 'project-preview',
  props: ['project'],
  components: {},

  data() {
    const {
      id,
      created_on,
      covers,
      name,
    } = this.project;

    return {
      date: this.getDate(created_on),
      thumb: covers[THUMB_SIZE],
      title: name.replace(/["']/g, ''),
      link: `/projects/${id}`,
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

<style lang="sass" scoped>
.wrapper
  display: inline-flex
  align-items: stretch
  width: 33.3%
  margin: 0 0 45px 0
  padding: 0 45px 0 0
  height: 300px

  &:first-child
    width: 100%
/*  float: left

  &:nth-child(5n+2),
  &:nth-child(5n+3),
  &:nth-child(5n+4)
    height: 600px

  &:nth-child(5n+4)
    margin-top: calc(-50%)
    // transform: translate(0, 24%)

  &:nth-child(5n+5)
    width: 66.6%
    height: 300px*/

.project-preview
  flex: 1 1 auto
  background-size: cover
  background-position: center
  background-repeat: no-repeat
</style>
