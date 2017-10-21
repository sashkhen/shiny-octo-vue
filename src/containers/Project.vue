<template>
  <div class="wrapper">
    <div v-if="project">
      <img class="project__image" v-bind:src="getImage()" />
      <div class="project__info">
        <div class="project__info__block">
          <h3 class="project__title">{{ getTitle() }}</h3>
          <behance-link :url="project.url" />
        </div>
        <div class="project__info__block">
          <stats :data="project.stats" />
        </div>
      </div>
      <div class="project__info">
        <div class="project__info__block">
          <tags :data="project.fields" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BehanceLink from '@/components/BehanceLink';
import Stats from '@/components/Stats';
import Tags from '@/components/Tags';

const ORIGINAL = 'original';

export default {
  name: 'project',
  components: {
    BehanceLink,
    Stats,
    Tags,
  },

  computed: mapGetters({
    project: 'currentProject',
  }),

  beforeMount() {
    this.renderProject();
  },

  methods: {
    ...mapActions([
      'browseProject',
    ]),
    renderProject() {
      const { id } = this.$route.params;

      this.browseProject(id);
    },
    getImage() {
      const { covers } = this.project;

      return covers && covers[ORIGINAL];
    },
    getTitle() {
      const { name } = this.project;

      return name && name.replace(/["']/g, '');
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding: 45px 80px 62px 0;
  text-align: left;
}

.project__info {
  display: flex;
  align-items: flex-start;
  margin: 20px 0 0;
}

.project__info__block {
  flex: 1 1 auto
}

.project__info__block:last-child {
  flex: 0 0 auto
}

.project__image {
  display: block;
  width: 100%;
}

.project__title {
  flex: 1 1 auto;
  color: black;
}
</style>
