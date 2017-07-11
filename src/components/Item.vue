<template>
  <div class="item">
    <div class="image">
      <img v-bind:src="thumb" width="115" />
    </div>
    <div class="details">
      <span class="title">{{ title }}</span>
      <tags v-if="tags" :tags="tags"></tags>
    </div>
    <div class="footer">
      <div class="cell">
        <stats v-if="item.stats" :stats="item.stats"></stats>
      </div>
      <div class="cell fixed">
        <span v-if="date" class="date">{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Stats from '../components/Stats';
import Tags from '../components/Tags';

export default {
  name: 'item',
  props: ['item'],
  components: {
    Stats,
    Tags,
  },
  data() {
    const {
      created_on,
      covers,
      name,
      fields,
    } = this.item;

    return {
      date: this.getDate(created_on),
      tags: fields,
      thumb: covers['230'],
      title: name.replace(/["']/g, ''),
    };
  },
  methods: {
    getDate(dateString) {
      const newDate = new Date((dateString, 10));
      return newDate.toLocaleDateString();
    },
  },
};
</script>

<style scoped>
  .item {
    flex: 0 0 30%;
    margin: 1.5%;
    padding: 16px;
    transition: box-shadow .5s ease-out;
  }
  .item:hover {
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, .3);
  }
  .image {
    width: 100%;
    margin: 0 0 8px;
  }
  .image img {
    width: 100%;
  }
  .details {
    text-align: left;
  }
  .title {
    display: block;
    margin: 0 0 8px;
    color: rgb(66, 185, 131);
    font-size: 18px;
    font-weight: 600;
  }
  .date {
    display: block;
    opacity: .7;
    font-size: 12px;
    font-weight: 300;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .footer .cell {
    flex: 1 1 auto;
  }
  .footer .cell.fixed {
    flex: 0 0 auto;
    padding: 0 0 0 8px;
    line-height: 19.09px; /* avoid different line heights */
  }
</style>
