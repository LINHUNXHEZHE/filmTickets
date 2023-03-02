import Vue from 'vue'
import Vuex from 'vuex'

// module
import HomeModule from '../store/Module/HomeModule'
import CinemaModule from '../store/Module/CinemaModule'
import InfoModule from '../store/Module/InfoModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: []
  },
  getters: {
  },
  mutations: {
    userInfo (state, data) {
      state.userInfo = data
    }
  },
  actions: {
  },
  modules: {
    HomeModule,
    CinemaModule,
    InfoModule
  }
})
