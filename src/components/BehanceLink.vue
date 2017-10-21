<template>
  <a :href="url" target="_blank"
    class="behance-link">
    {{ title }}
  </a>
</template>

<script>
export default {
  name: 'behance-link',
  props: ['url'],

  data() {
    return {
      title: 'browse on Behance',
    };
  },
};
</script>

<style lang="sass" scoped>
.behance-link
  color: rgba(0, 0, 0, .3)
  font-size: 12px
  transition: color .3s ease-out

  &::after
    content: ' \2192'
    display: inline-block
    transition: margin-left .3s ease-out

  &:hover
    color: rgba(0, 0, 0, .5)

    &::after
      margin-left: 5px
</style>
