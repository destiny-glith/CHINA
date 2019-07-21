import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginState: '',
    userInfo: '',
    buyBaby: [],
    newbuyBaby: ''
  },
  getters: {
    totaNum (state) { // 返回加入购物的数量
      let totaNum = 0
      state.buyBaby.map(item => {
        totaNum += item.num
      })
      return totaNum
    },
    totaprice (state) {
      let totaPrice = 0
      state.buyBaby.map(item => {
        item.flag ? totaPrice += item.num * item.sale : totaPrice += 0
      })
      return totaPrice.toFixed(2)
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
      let data1 = data.result
      if (data1[state.userInfo] !== undefined) {
        let newArr = []
        let newsArr = []
        for (let i = 0; i < data1[state.userInfo].length; i++) { // 求相同数量
          newsArr.push(data1[state.userInfo][i].proid)
        }
        let bb = newsArr.reduce(function (prev, next) {
          prev[next] = (prev[next] + 1) || 1
          return prev
        }, {})
        for (let i = 0; i < data1[state.userInfo].length; i++) { // 去重
          let flag = true
          for (let a = 0; a < newArr.length; a++) {
            if (data1[state.userInfo][i].proid == newArr[a].proid) {
              flag = false
            }
          }
          if (flag) {
            newArr.push(data1[state.userInfo][i])
          }
        }
        for (let p = 0; p < newArr.length; p++) { // 合并
          for (let i in bb) {
            if (newArr[p].proid == Number(i)) {
              newArr[p].num = bb[i] // 先循环去重, 2看key出现几次，3，一一通过循环对应（循环去重后的数组，里面）
              newArr[p].idd = 1
            }
          }
        }
        state.buyBaby = newArr
      }
    }
  },
  actions: {
    getlocalStorageData (context) { // 可以理解为this.$store,但不是this.$store
      context.commit('addBuycart', { // 提交数据到mountaions
        result: JSON.parse(localStorage.getItem('cars'))
      })
    }
  }
})
