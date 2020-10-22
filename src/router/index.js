import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login/index')
    },
    {
      path: '/modify',
      name: 'modify',
      component: () => import('@/view/user/modify')
    }
  ]
})
