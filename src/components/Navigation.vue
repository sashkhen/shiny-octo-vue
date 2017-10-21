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
  text-align: left;
}

.list__item {
  color: black;
  font-size: 16px;
}

.list__link {
  display: block;
  padding: 0 0 16px;
  opacity: 1;
  transition: opacity .3s ease-out;
}

.list__link:hover {
  opacity: .7;
}
</style>
