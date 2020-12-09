import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
     component: ()=> import('@/views/Main.vue')
  },
  {
    path: '/countries/region/:code',
    name: 'Countries',
    component: ()=> import('@/views/Countries.vue'),
  },
  {
    path: '/regions',
    name: 'Regions',
    component: ()=> import('@/views/Regions.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
