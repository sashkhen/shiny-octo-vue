<template>
  <div class="wrapper">
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'shop',

  data() {
    return {
      name: 'Shop',
    };
  },
};
</script>

<style scoped>
.wrapper {
  padding: 0 80px 62px 0;
  background-color: rgba(0, 0, 0, .3);
}
</style>
