<template>
  <div class="wrapper">
    <empty-state :section="name" />
  </div>
</template>

<script>
import EmptyState from '@/components/EmptyState';

export default {
  name: 'about',
  components: {
    EmptyState,
  },

  data() {
    return {
      name: 'About',
    };
  },
};
</script>

<style scoped>
.wrapper {
  padding: 0 80px 62px 0;
}
</style>
