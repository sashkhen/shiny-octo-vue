<!-- TO DO: snake_case -> camelCase -->
<template>
  <div class="wrapper">
    <router-link
      :to="link"
      class="project-preview"
      v-bind:style="{ backgroundImage }"
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
      backgroundImage: `url(${covers[THUMB_SIZE]})`,
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
  display: flex;
  align-items: stretch

  &::after
    content: ''
    display: block

  &:nth-child(21n+1)
    grid-column: 1 / span 3
    &::after
      padding-bottom: 55%

  &:nth-child(21n+2)
    grid-column: 1
    &::after
      padding-bottom: 100%

  &:nth-child(21n+3)
    grid-column: 2
    grid-row: span 2
    &::after
      padding-bottom: 200%

  &:nth-child(21n+4)
    grid-column: 3
    grid-row: span 2
    &::after
      padding-bottom: 200%

  &:nth-child(21n+5)
    grid-column: 1
    grid-row: span 2
    &::after
      padding-bottom: 200%

  &:nth-child(21n+6)
    grid-column: 2 / span 2
    &::after
      padding-bottom: 50%

  &:nth-child(21n+7)
    grid-column: 1
    &::after
      padding-bottom: 100%

  &:nth-child(21n+8)
    grid-column: 2
    &::after
      padding-bottom: 100%

  &:nth-child(21n+9)
    grid-column: 3
    grid-row: span 2
    &::after
      padding-bottom: 200%

  &:nth-child(21n+10)
    grid-column: 1 / span 2
    grid-row: span 2

  &:nth-child(21n+11)
    grid-column: 3
    &::after
      padding-bottom: 100%

  &:nth-child(21n+12)
    grid-column: 1
    grid-row: span 2
    &::after
      padding-bottom: 200%

  &:nth-child(21n+13)
    grid-column: 2
    grid-row: span 2
    &::after
      padding-bottom: 200%

  &:nth-child(21n+14)
    grid-column: 3
    grid-row: span 2
    &::after
      padding-bottom: 200%

  &:nth-child(21n+15)
    grid-column: 1 / span 2
    &::after
      padding-bottom: 50%

  &:nth-child(21n+16) // this one affects 13'th
    grid-column: 3

  &:nth-child(21n+17)
    grid-column: 1
    &::after
      padding-bottom: 100%

  &:nth-child(21n+18)
    grid-column: 2
    &::after
      padding-bottom: 100%

  &:nth-child(21n+19)
    grid-column: 3
    &::after
      padding-bottom: 100%

  &:nth-child(21n+20)
    grid-column: 1
    grid-row: span 2
    &::after
      padding-bottom: 100%

  &:nth-child(21n+21) // this one affects 16'th
    grid-column: 2 / span 2
    grid-row: span 2
    &::after
      padding-bottom: 100%



.project-preview
  flex: 1 1 auto
  display: block
  margin: 0 45px 45px 0
  background-size: cover
  background-position: center
  background-repeat: no-repeat
</style>
