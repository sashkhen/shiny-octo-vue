<template>
  <ul v-if="links" class="list">
    <li v-for="link in links" class="list__item">
      <a :href="link.path" target="_blank" class="list__link">
        {{ link.icon }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'social-links',

  data() {
    return {
      links: [
        {
          icon: 'fb',
          path: 'https://www.facebook.com/Dmitry-Morozov-_-ART-1542126212678613/',
        },
        {
          icon: 'fb',
          path: 'https://www.facebook.com/Dmitry-Morozov-_-ART-1542126212678613/',
        },
        {
          icon: 'fb',
          path: 'https://www.facebook.com/Dmitry-Morozov-_-ART-1542126212678613/',
        },
        {
          icon: 'fb',
          path: 'https://www.facebook.com/Dmitry-Morozov-_-ART-1542126212678613/',
        },
      ],
    };
  },
};
</script>

<style scoped>
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 45px 0;
}

.list__item {
  flex: 0 0 auto;
}

.list__link {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;
  border-radius: 50%;

  background-color: rgba(0, 0, 0, .1);
  color: white;

  opacity: 1;
  transition: opacity .3s ease-out;

  font-size: 12px;
}

.list__link:hover {
  opacity: .7;
}
</style>
