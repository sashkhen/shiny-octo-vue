<template>
  <div class="app-title">
    <logo />
    <p class="title">{{ title }}</p>
  </div>
</template>

<script>
import Logo from '@/components/Logo';

export default {
  name: 'app-title',
  components: {
    Logo,
  },

  data() {
    return {
      title: 'Dmitry Morozov',
    };
  },
};
</script>

<style scoped>
.app-title {
  padding: 45px 0 90px;
}

.title {
  margin: 20px 0 0;
  text-align: left;

  color: black;
  font-size: 20px;
  font-weight: 900;
}
</style>
