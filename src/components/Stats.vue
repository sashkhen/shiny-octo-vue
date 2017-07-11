<template>
  <div class="stats">
    <span v-if="views" class="views">{{ views }}</span>
    <span v-if="likes" class="likes">{{ likes }}</span>
    <span v-if="comments" class="comments">{{ comments }}</span>
  </div>
</template>

<script>
export default {
  name: 'stats',
  props: ['stats'],
  data() {
    return {
      views: this.stats.views,
      likes: this.stats.appreciations,
      comments: this.stats.comments,
    };
  },
};
</script>

<style scoped>
.stats {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.stats span {
  flex: 0 0 auto;
  padding: 0 8px 0 0;
  cursor: pointer;
  transition: opacity .3s ease-out;
  opacity: .5;
  font-size: 14px;
  font-weight: 600;
}
.stats span:hover {
  opacity: 1;
}
.stats span::before {
  display: inline-block;
  margin: 0 4px 0 0;
}
.views::before {
  content: '@';
}
.likes::before {
  content: '#';
}
.comments::before {
  content: '%';
}
</style>
