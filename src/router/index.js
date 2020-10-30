import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
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
        to:'home'
      }

    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login/index'),


    },
    {
      path: '/modify',
      name: 'modify',
      component: () => import('@/view/user/modify'),
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        roles: ['admin', 'user'],
        title: '用户修改',
        to:'modify'
      }
    }
  ]
})


//当进入一个页面是会触发导航守卫 router.beforeEach 事件

router.beforeEach((to, from, next) => {

  if (to.meta.requireAuth) {
    let token = localStorage.getItem('Authorization');
    if (token === null || token === '') {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })

    } else {

      // getRequest('/autoLog',{
      //   token:token
      // }).then(resp=>{
      //  if(resp.status == 200){
      //    var json = resp.data;
      //    if(json.status=='success'){
      //     next();
      //    }else{
      //     next('/login');
      //    }
      //   }
      // })
      // alert(localStorage.getItem("Authorization"));
      next();
    }
  } else {
    next();
  }

});

export default router