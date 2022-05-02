import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/view/main/main.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      next('/login')
    }
  }
  next()
})

export default router
