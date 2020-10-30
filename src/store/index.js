import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        val: 1,
        token: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
    },
    mutations: {
        add(state, val) {
            state.token = val.Authorization;
            localStorage.setItem('Authorization', val.Authorization);
        }
    },
    actions(state) {

    },
    actions({ commit }, val) { }
})