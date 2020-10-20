import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        val:1,
        token:''
    },
    mutations:{
        add(state,val){

        }
    },
    actions(state){

    },
    actions({commit},val){}
})