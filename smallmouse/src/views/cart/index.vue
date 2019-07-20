<template>
  <div class="container">
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickBack" />
    <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">满39元免运费</van-notice-bar>
    <div class="main">
      <van-swipe-cell :on-close="onClose" v-for="(item, index) of buby" :key="index">
        <div class="item-content">
          <input type="checkbox" class="checkbox1" v-model="item['flag']" />
          <div class="bigimg">
            <img :src="item['pic']" alt />
          </div>
          <p>{{item['name']}}</p>
          <span>{{item['sale']}}</span>
          <div>
            <button class="btnadd" @click="item.num -= 1">-</button>
            <span class="btnres">{{item.num}}</span>
            <button class="btnadd" @click="item.num += 1">+</button>
          </div>
        </div>
        <template slot="right">
          <button class="danger">删除</button>
        </template>
      </van-swipe-cell>

      {{totaprice}}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, NoticeBar, SwipeCell, Button, Cell, CellGroup } from 'vant'
Vue.use(NoticeBar)
Vue.use(NavBar)
Vue.use(SwipeCell)
Vue.use(Button)
Vue.use(Cell).use(CellGroup)
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      buyBaby: JSON.parse(localStorage.getItem('cars')),
      buby: ''
    }
  },
  mounted () {
    let buyBaby = this.buyBaby[this.$store.state.userInfo]
    this.buby=buyBaby
  },
  computed: {
    ...mapState({
      // cartlist (state) {
      //   return buyBaby.num
      // }
    }),
    ...mapGetters({
      totaprice: 'totaprice'
    }),

  },
  methods: {
    onClickBack () {
      this.$router.back()
    },
    // clickPosition 表示关闭时点击的位置
    onClose (clickPosition, instance) {
      console.log('删除在这里写');

    },
    onSubmit () {
      console.log('21');
    }
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      const loginState = vm.$store.state.loginState // state: { // 需要管理的组件状态loginState: ''},
      if (loginState === 'ok') {
        // vm.$router.replace('/user/login')
        next()
      } else {
        vm.$router.push('/login')
      }
    })
  }
}
</script>

<style lang="scss">
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
