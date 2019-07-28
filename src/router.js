import Vue from 'vue';
import Router from 'vue-router';
import GMap from './views/GMap.vue';
import Signup from './views/Signup.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
});
