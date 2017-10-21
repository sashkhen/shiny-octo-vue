<template>
  <div class="wrapper">
    <p class="message">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'not-found',

  data() {
    return {
      name: 'Ooops there\'s nothing here',
    };
  },
};
</script>

<style scoped>
.wrapper {
  padding: 45px 45px 0 0;
/*  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  background-color: rgba(0, 0, 0, .3);*/
}
.message {
  text-align: left;
  font-size: 24px;
  color: black;
}
</style>
