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
    totaquchong (state) {
      let newArr = []
      let newsArr = []
      for (let i = 0; i < this.lis.length; i++) {
        newsArr.push(this.lis[i].proid)
      }

      let bb = newsArr.reduce(function (prev, next) {
        prev[next] = (prev[next] + 1) || 1;
        return prev;
      }, {})

      for (let i = 0; i < this.lis.length; i++) {
        let flag = true
        for (let a = 0; a < newArr.length; a++) {
          if (this.lis[i].proid == newArr[a].proid) {
            flag = false
          }
        }
        if (flag) {
          newArr.push(this.lis[i])
        }
      }
      for (let p = 0; p < newArr.length; p++) {
        for (let i in bb) {
          if (newArr[p].proid == Number(i)) {
            newArr[p].num = bb[i] // 先循环去重, 2看key出现几次，3，一一通过循环对应（循环去重后的数组，里面）
          }
        }
      }
      console.log(newArr);
    },
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
      state.buyBaby = data.result
    }
  },
  actions: {
    getlocalStorageData (context) { // 可以理解为this.$store,但不是this.$store
      context.commit('addBuycart', { // 提交数据到mountaions
        result: localStorage.getItem('cars')
      })
    }
  }
})
