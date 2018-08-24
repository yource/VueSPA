import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    newMessage:[]
  },
  mutations: {
    read (state) {
      state.newMessage.splice(0,1)
    }
  }
})

export default store;
