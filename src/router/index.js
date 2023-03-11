import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'
import layout from '@/layout/index'
import userrole from './modules/userrole'
import usermanage from './modules/usermanage'

// 公有路由
export const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/Login/index')
  },
  {
    path: '/',
    redirect: '/home',
    component: () => layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/index'),
        meta: {
          title: 'Home',
          icon: 'home'
        }
      },
      {
        path: '/private',
        name: 'private',
        component: () => import('@/views/Private/index'),
        meta: {
          title: 'Private',
          icon: 'private'
        }
      },
      {
        path: '/chart',
        redirect: '/chart/line',
        meta: {
          title: 'Chart',
          icon: 'chart'
        },
        children: [
          {
            path: '/chart/line',
            name: 'chartline',
            component: () => import('@/views/Chart-line/index'),
            meta: {
              title: 'Line-chart',
              icon: 'chart-item'
            }
          }
          // ! /chart 路径下的子路径在这里加
        ]
      },
      {
        path: '/table',
        redirect: '/table/tablehook',
        meta: {
          title: 'Super Table',
          icon: 'table'
        },
        children: [
          {
            path: '/table/tablehook',
            name: 'tableHook',
            component: () => import('@/views/Table-hook/index'),
            meta: {
              title: 'Table-Hook',
              icon: 'table-item'
            }
          },
          {
            path: '/table/tabletree',
            name: 'tableTree',
            component: () => import('@/views/Table-tree/index'),
            meta: {
              title: 'Table-Tree',
              icon: 'table-item'
            }
          }
          // ! /table 路径下的子路径在这里加
        ]
      },
      {
        path: '/component',
        redirect: '/component/guide',
        meta: {
          title: 'component',
          icon: 'component'
        },
        children: [
          {
            path: '/component/guide',
            name: 'guide',
            component: () => import('@/views/Component-guide/index'),
            meta: {
              title: 'Guide',
              icon: 'component-item'
            }
          },
          {
            path: '/component/editor',
            name: 'editor',
            component: () => import('@/views/Component-editor/index'),
            meta: {
              title: 'Editor',
              icon: 'component-item'
            }
          },
          {
            path: '/component/icon',
            name: 'icon',
            component: () => import('@/views/Component-icon/index'),
            meta: {
              title: 'Icon',
              icon: 'component-item'
            }
          },
          {
            path: '/component/markdown',
            icon: 'markdon',
            component: () => import('@/views/Component-markdown/index'),
            meta: {
              title: 'MarkDown',
              icon: 'component-item'
            }
          }
          // ! /component 路径下的子路径在这里加
        ]
      },
      {
        path: '/auth',
        redirect: '/auth/auth-page',
        meta: {
          title: 'Auth',
          icon: 'auth'
        },
        children: [
          {
            path: '/auth/auth-page',
            name: 'auth-page',
            component: () => import('@/views/Auth-Page/index'),
            meta: {
              title: 'Page',
              icon: 'auth-item'
            }
          },
          {
            path: '/auth/auth-dom',
            name: 'auth-dom',
            component: () => import('@/views/Auth-Dom/index'),
            meta: {
              title: 'Dom',
              icon: 'auth-item'
            }
          }
        ]
      }
    ]
  }
]

// 私有路由
export const privateRoutes = [
  userrole, usermanage
]

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
