import Vue from 'vue';
import VueResource from 'vue-resource';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Gallery from '@/pages/Gallery';

Vue.use(VueResource);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery,
    },
  ],
});
