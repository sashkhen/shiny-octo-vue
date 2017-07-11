import Vue from 'vue';
import VueResource from 'vue-resource';
import Router from 'vue-router';
import Gallery from '@/containers/Gallery';

Vue.use(VueResource);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gallery',
      component: Gallery,
    },
  ],
});
