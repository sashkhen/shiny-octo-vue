<template>
  <ul v-if="list" class="list">
    <item v-for="item in list" :item="item"></item>
  </ul>
  <p v-else class="error">{{ errorMsg }}</p>
</template>

<script>
import Item from '../components/Item';

export default {
  name: 'list',
  props: ['list'],
  components: {
    Item,
  },
  data() {
    return {
      errorMsg: 'Something went wrong...',
    };
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
  align-items: stretch;
  flex-wrap: wrap;
}
.error {
  color: red;
}
</style>
