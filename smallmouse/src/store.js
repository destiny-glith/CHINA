import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginState:''
  },
  mutations: {
    changeLoginSatate(state, data) { // 代表的是初始化的数据，data代表需要改变的数据
    // state.loginState = data
    //   console.log(state.loginState)
      state.loginState = data.result
      console.log(state.loginState);
      
    }
  },
  actions: {

  }
})
