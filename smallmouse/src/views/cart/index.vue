<template>
  <div class="container">
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickBack" />
    <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o" v-text="manmian"></van-notice-bar>
    <div class="main" v-if="list.length > 0">
      <van-swipe-cell v-for="(item, index) of list" :key="index">
        <div class="item-content">
          <input
            type="checkbox"
            class="checkbox1"
            v-model="item['flag']"
            @click="checkeddOne(item)"
          />
          <div class="bigimg">
            <img :src="item['pic']" alt />
          </div>
          <p>{{item['name']}}</p>
          <span>{{item['sale']}}</span>
          <div>
            <button class="btnadd" @click="jian(item)">-</button>
            <span class="btnres">{{item.num}}</span>
            <button class="btnadd" @click="jia(item)">+</button>
          </div>
        </div>
        <template slot="right">
          <button class="danger" @click="deletebaby()">删除</button>
        </template>
      </van-swipe-cell>
    </div>
    <div class="main" v-else>快去购物吧</div>
    <div class="zongjia">
      <input type="checkbox" class="checkbox1" v-model="quan" @click="checkedAll()" />
      <div class="boxx">总数量：{{totaNum}}</div>
      <div class="jiage">
        <span class="jiagespan">
          <span>应付：</span>
          <span class="jiagespan1">{{totaprice}}</span>
        </span>
        <button class="close_pay" @click="getshow()">结算</button>
        <van-dialog v-model="show" title="请支付" show-cancel-button clas="roroprice">
          <!-- <img src="https://img.yzcdn.cn/vant/apple-3.jpg" /> -->
          {{totaprice + "元"}}
        </van-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
// import {  } from 'vant';
import { mapState, mapActions, mapGetters } from 'vuex'
import { NavBar, NoticeBar, SwipeCell, Button, Cell, CellGroup, Dialog } from 'vant'
Vue.use(NoticeBar)
Vue.use(NavBar)
Vue.use(SwipeCell)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Cell).use(CellGroup)

export default {
  data () {
    return {
      list: '',
      listlength: '',
      aab: '',
      show: false,
      quan: false
    }
  },
  created () {
    let arr = JSON.parse(localStorage.getItem('cars'))
    for (let i in arr) {
      if (this.$store.state.userInfo === i) {
        this.list = arr[i]
        this.$store.commit('addBuycart', {
          result: this.list
        })
      }
    }
  },
  mounted () {
  },
  computed: {

    manmian () {
      if (this.totaprice > 188) {
        return "你已满足包邮"
      } else {
        return "距离满足包邮还差" + (188 - Number(this.totaprice)).toFixed(2) + "元"
      }
    },
    ...mapState({
      buyBaby: state => state.buyBaby
    }),
    totaprice () {
      return this.$store.getters.totaprice
    },
    totaNum () {
      return this.$store.getters.totaNum
    }
  },
  methods: {
    checkedAll () {
      if (!this.quan) {
        this.list.map(item => {
          item.flag = true
          let obj = {}
          obj[this.$store.state.userInfo] = this.list
          localStorage.setItem('cars', JSON.stringify(obj))
        })
      } else {
        this.list.map(item => {
          item.flag = false
          let obj = {}
          obj[this.$store.state.userInfo] = this.list
          localStorage.setItem('cars', JSON.stringify(obj))
        })
      }
    },
    checkeddOne (item) {
      item.flag = !item.flag
      let obj = {}
      obj[this.$store.state.userInfo] = this.list
      localStorage.setItem('cars', JSON.stringify(obj))
    },
    getshow () {
      this.show = true
    },
    jia (val) {
      let obj = {}
      this.list.map(item => {
        if (item.name === val.name) {
          item.num++
          obj[this.$store.state.userInfo] = this.list
          localStorage.setItem('cars', JSON.stringify(obj))
        }
      })
    },
    jian (val) {
      let obj = {}
      this.list.map(item => {
        if (item.name === val.name) {
          if (item.num >= 2) {
            obj[this.$store.state.userInfo] = this.list
            localStorage.setItem('cars', JSON.stringify(obj))
            item.num--
          } else {
            obj[this.$store.state.userInfo] = this.list
            localStorage.setItem('cars', JSON.stringify(obj))
            item.num = 1
          }
        }
      })
    },
    deletebaby (val) {
      let arr = this.list
      arr.splice(val, 1)
      let obj = {}
      obj[this.$store.state.userInfo] = arr
      localStorage.setItem('cars', JSON.stringify(obj))
    },
    onClickBack () {
      this.$router.back()
    },
    onSubmit () {
      console.log('21')
    }
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      const loginState = vm.$store.state.loginState // state: { // 需要管理的组件状态loginState: ''},
      if (loginState === 'ok') {
        next()
      } else {
        vm.$router.push('/login')
      }
    })
  }
}
</script>

<style lang="scss">
.boxx {
  position: absolute;
  bottom: 0.03rem;
  right: 1.21rem;
  font-size: 0.12rem;
}
.zongjia {
  height: 0.5rem;
  widows: 100%;
  border-top: 1px solid rgb(199, 12, 12) 333;
  position: relative;
  z-index: 78;
  padding: 0.05rem;

  .checkbox1 {
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    width: 0.15rem;
    height: 0.15rem;
    z-index: 1;
  }
  .jiage {
    height: 45px;
    position: relative;
    // overflow: hidden;
    .close_pay {
      height: 0.5rem;
      width: 1.13rem;
      position: absolute;
      border: none;
      right: -6px;
      top: -0.06rem;
      background-color: #77bc1f;
      color: #fff;
    }
    .jiagespan {
      margin-left: 1.1rem;
      .jiagespan1 {
        color: #ee2e52;
      }
    }
  }
}
.danger {
  width: 0.6rem;
  height: 0.8rem;
  list-style: none;
  border: 0;
  background-color: #ee2e52;
  color: #fff;
  outline: none;
}
.item-content {
  height: 0.8rem;
  // background-color: blueviolet;
  background-color: #fff;
  padding: 0.1rem 0 0.1rem 0.2rem;
  position: relative;
  .bigimg {
    margin: 0 0.1rem 0 0.2rem;
    border: 1px solid #999;
    height: 0.6rem;
    width: 0.6rem;
    border-radius: 0.1rem;
    float: left;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    display: block;
    font-size: 0.12rem;
  }
  span {
    font-size: 0.14rem;
    color: #ee2e52;
  }
  .checkbox1 {
    position: absolute;
    top: 50%;
    margin-top: -0.1rem;
    width: 0.15rem;
    height: 0.15rem;
  }
  .btnadd {
    width: 0.2rem;
    height: 0.2rem;
    border: 1px solid rgb(209, 209, 209);
    background-color: #fff;
    line-height: 0.2rem;
    border-radius: 0.05rem;
    // color: #fff;
    outline: none;
  }
  .btnres {
    display: inline-block;
    text-align: center;
    border: 1px solid rgb(209, 209, 209);
    width: 0.3rem;
    height: 0.2rem;
    border-radius: 0.05rem;
  }
}
.main {
  background-color: #f7f7f7;
}
</style>
