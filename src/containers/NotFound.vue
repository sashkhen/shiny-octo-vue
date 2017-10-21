<template>
  <div class="wrapper">
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'not-found',

  data() {
    return {
      name: 'Not Found',
    };
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  background-color: rgba(0, 0, 0, .3);
}
</style>
