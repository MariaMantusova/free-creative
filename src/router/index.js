import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import ProjectPage from '../pages/ProjectPage.vue';
import Portfolio from '../pages/Portfolio.vue';

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
      path: '/portfolio/:projectName',
      name: 'projectName',
      component: ProjectPage
    }
  ]
})

export default router
