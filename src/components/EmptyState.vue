<template>
  <div class="empty">
    <p class="empty__message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'empty-state',
  props: ['section'],

  data() {
    return {
      message: `${this.section} page will be here soon...`,
    };
  },
};
</script>

<style scoped>
.empty {
  padding: 45px 45px 0 0;
  color: black;
}

.empty__message {
  text-align: left;
  font-size: 24px;
}
</style>
