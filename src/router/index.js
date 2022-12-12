import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import catalagoVag from '../views/catalagoVag.vue'
import cadaVag from '../views/cadaVag.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'list',
      component: catalagoVag
    },
    {
      path: '/cadaVag/:id',
      name: 'cadaVag',
      component: cadaVag
    },
  ]
})

export default router
