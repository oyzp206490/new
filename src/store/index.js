import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '@/requey/api'
import local from '../local/index'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        val: 1,
        token: local.getToken('token') ? local.getToken('token') : ''
    },
    mutations: {
        SET_TOKEN(state, val) {
            state.token = val.token;
        }
    },

    actions: {
        logint({ commit }, val) {
            return new Promise((resolve, reject) => {
                login(val).then(res => {
                    commit('SET_TOKEN',res)
                    local.setToken('token',res.token)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
})