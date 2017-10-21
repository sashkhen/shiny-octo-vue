import Vue from 'vue';
import VueResource from 'vue-resource';
import Router from 'vue-router';

import Home from '@/containers/Home';
import Shop from '@/containers/Shop';
import About from '@/containers/About';
import NotFound from '@/containers/NotFound';

Vue.use(VueResource);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
