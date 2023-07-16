import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'
import layout from '@/layout/index'
// import userrole from './modules/userrole'
// import usermanage from './modules/usermanage'

// 公有路由
export const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    redirect: '/home',
    component: () => layout,
    children: [
      {
        path: '/private',
        name: 'private',
        component: () => import('@/views/Private/index'),
        meta: {
          title: 'private',
          icon: 'private'
        }
      }
    ]
  }
]

// 私有路由
// export const privateRoutes = [
//   userrole, usermanage
// ]
export const privateRoutes = []

// 重置路由表
export const resetRouter = () => {
  if (
    store.getters.userInfo &&
    store.getters.userInfo.auth
  ) {
    const menus = store.getters.userInfo.auth
    menus.forEach((item) => {
      router.removeRoute(item)
    })
  }
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
