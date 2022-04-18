import Vue from 'vue'
import VueRouter from 'vue-router'
import seven from '../views/7-11.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/7-11'
  },
  {
    path: '/7-11',
    name: '7-11',
    component: seven
  },
  {
    path: '/fami',
    name: 'Fami',
    component: () => import('../views/Fami.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
