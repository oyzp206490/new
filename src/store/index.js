import Vue from 'vue'
import Vuex from 'vuex'
import { login, user } from '@/requey/api'
import local from '../local/index'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        val: 1,
        token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
        name: '',
        avatar: '',
        menus: "", //存放路由表的容器
    },
    mutations: {
        SET_TOKEN(state, val) {
            state.token = val.token;
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_MENU: (state, menus) => {
            state.menus = menus
        }
    },

    actions: {
        // 登陆
        logint({ commit }, val) {
            return new Promise((resolve, reject) => {
                login(val).then(res => {
                    if (res.code == 200) {
                        commit('SET_TOKEN', res)
                        localStorage.setItem('token', res.token)

                        resolve(res)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 用户信息
        getInfo({ commit }) {
            return new Promise((resolve, reject) => {
                user().then(res => {


                    const {
                        data
                    } = response

                    if (!data) {
                        return reject('Verification failed, please Login again.')
                    }

                    const {
                        loginame
                    } = data //从data中解构出name 和头像 

                    commit('SET_NAME', loginame) //把name 保存到vuex中
                    commit('SET_AVATAR', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604422418409&di=8caf36d11ee247afa80e828a50dd1d01&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F16%2F20150916235818_HVAk2.jpeg') //把头像保存到vuex中
                    resolve(data)


                }).catch(error => {
                    reject(error)
                })
            })
        },
        // getRouter
        getRouter({
            commit,
            state
        }) {
            return new Promise((resolve, reject) => {
                MoveRouter().then(response => {--
                    const menus = response.data
                    console.log(menus)
                    //如果需要404 页面，请在此处添加
                    menus.push({
                        path: "/404",
                        component: "404",
                        hidden: true
                    }, {
                        path: "*",
                        redirect: "/404",
                        hidden: true
                    })
                    commit('SET_MENU', menus) //把name 保存到vuex中
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
    }
})