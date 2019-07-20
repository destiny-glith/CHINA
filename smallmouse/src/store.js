import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginState: 'ok',
    userInfo: '18895396967',
    buyBaby: [],
  },
  getters: {
    totalNum (state) { //返回加入购物的数量
      // let totalNum = state.buyBaby
      // console.log(state.buyBaby);
      
      state.buyBaby.map(item => {
        totalNum += item.num
      })
      return totalNum
    },
    totaprice (state) {
      // let totaPrice = 0
      // state.buyBaby.map(item => {
      //   item.flag ? totaPrice += item.num * item.sale : totaPrice += 0
      // })
      // return totaPrice
    }
  },
  mutations: {
    changeLoginSatate (state, data) { // 代表的是初始化的数据，data代表需要改变的数据
      state.loginState = data.result
    },
    addUserInfo (state, data) {
      state.userInfo = data.result
    },
    addBuycart (state, data) {
      state.buyBaby.push(data.result)
    }
  },
  actions: {
    getlocalStorageData (context) { // 可以理解为this.$store,但不是this.$store
      context.commit('addBuycart',{ // 提交数据到mountaions
        // result: localStorage.getItem('cars')
      })
    }
  }
})
