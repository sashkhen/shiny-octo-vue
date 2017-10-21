<template>
  <ul class="list">
    <li v-for="tag in data" class="item">
      <span>{{ tag }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tags',
  props: ['data'],
};
</script>

<style scoped>
.list {
  margin: 8px 0;
  padding: 0;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.item {
  flex: 0 0 auto;
  padding: 0 8px 0 0;

  font-size: 12px;
  font-style: italic;
}
.item span {
  display: inline-block;
  padding: 4px 24px;

  border-radius: 16px;
  cursor: default;

  background-color: rgba(0, 0, 0, .1);
  color: black;
}
</style>
