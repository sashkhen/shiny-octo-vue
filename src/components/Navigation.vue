<template>
  <ul v-if="routes" class="list">
    <li v-for="route in routes" class="list__item">
      <router-link :to="route.path" class="list__link">
        {{ route.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'navigation',

  data() {
    return {
      routes: [
        {
          name: 'Portfolio',
          path: '/',
        },
        {
          name: 'Shop',
          path: '/shop',
        },
        {
          name: 'About',
          path: '/about',
        },
      ],
    };
  },
};
</script>

<style scoped>
.list {
  background-color: rgba(0, 0, 0, .1);
  text-align: left;
}

.list__item {}

.list__link {}
</style>
