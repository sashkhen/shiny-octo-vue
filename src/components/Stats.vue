<template>
  <div class="stats">
    <span class="stats__item">
      <i class="material-icons">remove_red_eye</i>
      {{ data.views || 0 }}
    </span>
    <span class="stats__item">
      <i class="material-icons">favorite_border</i>
      {{ data.likes || 0 }}
    </span>
    <span class="stats__item">
      <i class="material-icons">mode_comment</i>
      {{ data.comments || 0 }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'stats',
  props: ['data'],
};
</script>

<style scoped>
.stats {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.stats__item {
  flex: 0 0 auto;

  display: flex;
  align-items: center;
  padding: 0 0 0 16px;

  cursor: default;
  color: rgba(0, 0, 0, .2);

  font-size: 12px;
}
i {
  cursor: default;
  padding: 0 4px 0 0;
  font-size: 14px;
}
</style>
