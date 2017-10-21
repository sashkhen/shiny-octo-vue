<template>
  <div class="wrapper">
    <empty-state :section="name" />
  </div>
</template>

<script>
import EmptyState from '@/components/EmptyState';

export default {
  name: 'shop',
  components: {
    EmptyState,
  },

  data() {
    return {
      name: 'Shop',
    };
  },
};
</script>

<style scoped>
.wrapper {
  padding: 0 80px 62px 0;
}
</style>
