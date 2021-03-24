// eslint-disable-next-line no-unused-vars
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Error from '../views/Error.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'Detail',
    component: Detail,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/error',
    name: 'Error',
    component: Error
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/error'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(),
  routes,
  // scrollBehavior (to, from, savedPosition) {
  //   console.log('scrollBehavior')
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { top: 0 }
  //   }
  // },
})

export default router
