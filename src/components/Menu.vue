<template>
  <ul class="menu">
    <li v-for="item in items" :style="'--color :' + style.color">{{ item.title }}</li>
  </ul>
</template>

<script>
export default {
  name: 'menu',
  data() {
    return {
      style: {
        color: '#ff0000',
      },
      items: [
        { title: 'gallery' },
        { title: 'about' },
        { title: 'contacts' },
      ],
    };
  },
};
</script>

<style scoped>
  :root {
    --main-bg-color: #42b983;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
    background-color: var(--main-bg-color);
    color: var(--color);
  }
</style>
