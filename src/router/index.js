import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Generation from '../views/Generation.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/generation',
    name: 'Generation',
    component: Generation,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
