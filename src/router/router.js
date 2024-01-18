import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../App.vue')
    },
    {
        path: '/manual',
        name: 'manual',
        component: () => import(/* webpackChunkName: "about" */ '../components/ManualPart.vue')
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router