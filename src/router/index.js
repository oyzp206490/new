import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld'

Vue.use(Router)

export const constantRoutes = [

  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: HelloWorld,
    meta: {
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      roles: ['admin'],
      to: 'home'
    }

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/index'),
  },
  {
    path: '/role',
    name: 'role',
    component: () => import('@/view/role/role'),
    meta:{
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      title:'角色管理'
    }
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('@/view/role/menu'),
    meta:{
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      title:'菜单管理'
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/view/role/user'),
    meta:{
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      title:'用户管理'
    }
  },


]



const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
