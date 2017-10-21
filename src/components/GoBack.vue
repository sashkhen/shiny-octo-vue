<template>
  <a v-on:click="goBack()">
    {{ title }}
  </a>
</template>

<script>
export default {
  name: 'go-back',

  data() {
    return {
      title: 'get back to projects',
    };
  },

  methods: {
    /* eslint-disable no-unused-expressions */
    goBack() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/');
    },
    /* eslint-enable no-unused-expressions */
  },
};
</script>

<style lang="sass" scoped>
a
  cursor: pointer

  color: rgba(0, 0, 0, 1)
  font-size: 12px
  transition: color .3s ease-out

  &::before
    content: ' \2190'
    display: inline-block

  &:hover
    color: rgba(0, 0, 0, .7)

</style>
