import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Portfolio from '../pages/Portfolio.vue';
import Terms from '../pages/Terms.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms
    }
  ]
})

export default router
