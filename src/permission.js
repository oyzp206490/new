import router from './router'
import store from './store/index.js'


import
local
    from '@/local/index.js' // get token from cookie

// import getPageTitle from '@/utils/get-page-title'

// const _import = require('./router/_import_') // 获取组件的方法
// import Layout from "@/layout";
// NProgress.configure({
//   showSpinner: false
// }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
    // start progress bar
    //   NProgress.start() //开启进度条

    // set page title
    //   document.title = getPageTitle(to.meta.title) //设置网页标题

    // determine whether the user has logged in
    const hasToken = localStorage.getItem('token') 
    //获取cookie中的token
    // 如果 hasToken  ！= ’‘
    if (hasToken) {
        // if 去的path 是登陆页
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({
                path: '/'
            }) //正常执行，到 /

        } else { //如果去的不是登陆页面
            const hasGetUserInfo = store.state.name //获取vuex中的name
            if (hasGetUserInfo) {
                next() //如果获取到vuex中的name 就正常执行
            } else {
                // 如果没有获取到vuex中到name
                try {
                    // get user info
                    // await store.dispatch('getInfo') //触发获取用户信息到接口
                    await store.dispatch('getRouter') //触发获取路由表的接口
                    if (store.state.menus.length < 1) {
                        global.antRouter = []
                        next()
                    }
                    const menus = filterRouter(store.state.menus) //过滤路由
                    console.log(menus);
                    router.addRoutes(menus) //动态添加路由
                    global.antRouter = menus //将路由数据传递给全局变量，做侧边栏渲染的工作
                    // next() //正常走
                    next({
                        ...to,
                        replace: true
                    })
                } catch (error) {
                    // remove token and go to login page to re-login
                    // await store.dispatch('user/resetToken') //触发vuex中  resetToken
                    // Message.error(error || 'Has Error') //弹出异常
                    next(`/login?redirect=${to.path}`) //然后就执行这里 跳转到 login  redirect把从哪个页面出错的 
                    // NProgress.done()
                }
            }
        }
    } else {
        /* has no token*/

        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            next()
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next(`/login?redirect=${to.path}`)
            // NProgress.done()
        }
    }
})

router.afterEach(() => {
    // finish progress bar
    // NProgress.done()
})


//  遍历后台传来的路由字符串，转换为组件对象

function filterRouter(routers) { // 遍历后台传来的路由字符串，转换为组件对象
    const accessedRouters = routers.filter(route => {
        if (route.component) {
            if (route.component === 'Home') { // Home组件特殊处理
                route.component = Home
            } else {
                route.component = _import(route.component)
            }
        }
        if (route.children && route.children.length) {
            route.children = filterRouter(route.children)
        }
        return true
    })
    return accessedRouters
}
// function filterAsyncRouter(asyncRouterMap) {

//     const accessedRouters = asyncRouterMap.filter(route => {
//         if (route.component) {
//             if (route.component === 'Layout') {
//                 route.component = Layout
//             } else {
//                 try {
//                     route.component = _import(route.component) // 导入组件
//                 } catch (error) {
//                     route.component = _import('system/menu/index') // 导入组件
//                     Message.error('请查看控制台修改或者删除不存在的组件路径') //弹出异常('请修改或者删除不存在的组件路径')
//                 }
//             }
//         }

//         if (route.children && route.children.length) {
//             route.children = filterAsyncRouter(route.children)
//         }
//         return true
//     })

//     return accessedRouters
// }
