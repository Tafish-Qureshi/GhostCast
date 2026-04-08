import { createRouter, createWebHistory } from 'vue-router'
import index from '@/components/index.vue' 
import Register from '../components/Register.vue' // maak deze component aan

const routes = [
  { path: '/', component: index },
  { path: '/register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router