<template>
  <div class="container">
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickBack" />
    <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">满39元免运费</van-notice-bar>
    <div class="main">
      <van-swipe-cell :on-close="onClose" v-for="(item, index) of list" :key="index">
        <div class="item-content">
          <input type="checkbox" class="checkbox1" v-model="item['flag']" />
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
          <button class="danger" @click="deletebaby(item)">删除</button>
        </template>
      </van-swipe-cell>
    </div>
    <div class="zongjia">
      <input type="checkbox" class="checkbox1" />
      <div class="jiage">
        <span class="jiagespan">
          <span>应付：</span>
          <span class="jiagespan1">{{totaprice}}</span>
        </span>
        <button class="close_pay">结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import { NavBar, NoticeBar, SwipeCell, Button, Cell, CellGroup } from 'vant'
Vue.use(NoticeBar)
Vue.use(NavBar)
Vue.use(SwipeCell)
Vue.use(Button)
Vue.use(Cell).use(CellGroup)

export default {
  data () {
    return {
      list: '',
      listlength: '',
      aab: ''
    }
  },
  mounted () {
    this.getlocalStorageData()
    this.aab = JSON.parse(localStorage.getItem('cars'))
    for (let i in this.aab) {
      if (this.$store.state.userInfo === i) {
        this.aab[i].map(item => {
          if (item['idd'] !== 1 || item['idd'] === undefined || item['idd'] === '') {
            this.list = this.buyBaby
          } else {
            // console.log(item);
            this.list = this.aab[i]
          }
        })
      }
    }
  },
  computed: {
    ...mapState({
      buyBaby: state => state.buyBaby
    }),
    totaprice () {
      return this.$store.getters.totaprice
    }
  },
  methods: {
    jia (val) {
      for (let i in this.aab) {
        if (this.$store.state.userInfo === i) {
          this.aab[i].map(item => {
            if (item['idd'] !== 1 || item['idd'] === undefined || item['idd'] === '') {
              this.list = this.buyBaby
            } else {
              // console.log(item);
              this.list = this.aab[i]
            }
          })
        }
      }



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
      for (let i in this.aab) {
        if (this.$store.state.userInfo === i) {
          this.aab[i].map(item => {
            if (item['idd'] !== 1 || item['idd'] === undefined || item['idd'] === '') {
              this.list = this.buyBaby
            } else {
              // console.log(item);
              this.list = this.aab[i]
            }
          })
        }
      }
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
      let arr = this.buyBaby
      arr.splice(val, 1)
      let obj = {}
      obj[this.$store.state.userInfo] = arr
      localStorage.setItem('cars', JSON.stringify(obj))

    },
    onClickBack () {
      this.$router.back()
    },
    // clickPosition 表示关闭时点击的位置
    onClose (clickPosition, instance) {
      console.log('删除在这里写')
    },
    onSubmit () {
      console.log('21')
    },
    ...mapActions({
      getlocalStorageData: 'getlocalStorageData' // 前者代表 在当前组件生成getKindListData自定义的函数，后者代表状态管理器中的actinos
    })
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
