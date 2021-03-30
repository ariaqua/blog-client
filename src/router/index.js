// eslint-disable-next-line no-unused-vars
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Articles from '../views/Articles.vue'
import Detail from '../views/Detail.vue'
import Error from '../views/Error.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles,
    meta: { title: 'Articles' }
  },
  {
    path: '/articles/:id',
    name: 'Detail',
    component: Detail,
    props: true
  },
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  // },
  {
    path: '/error',
    name: 'Error',
    component: Error,
    meta: { title: 'Error' }
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
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach(to => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'VAQUA'
  }
})

export default router
