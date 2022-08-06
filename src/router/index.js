import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    alias:'/',
    component: Home
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/ToDo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
