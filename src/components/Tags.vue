<!-- DEPRECATED -->
<template>
  <ul class="list">
    <li v-for="tag in tags" class="item">
      <span>{{ tag }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tags',
  props: ['tags'],
  data() {
    return {};
  },
};
</script>

<style scoped>
.list {
  list-style-type: none;
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
  padding: 4px 12px;
  border-radius: 16px;
  cursor: pointer;
  transition: opacity 1s ease-out;
  background-color: rgba(0, 0, 0, .3);
  color: white;
  opacity: .5;
}
.item span:hover {
  opacity: 1;
}
</style>
