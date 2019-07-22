<template>
  <div class="box">
    <div class = "container">
      <van-nav-bar
        :title=tile
        left-text="返回"
        right-text="分享"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <header></header>
      <div class="content">
        <!-- <img :src="img" alt=""> -->
        <li v-for="(item, index) of detalimg" :key ="index">
          <img :src="item.activePic" alt="">
          <span>{{item.name}}</span>
        </li>
        <!-- {{mn}} -->
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon
        icon="chat-o"
        text="客服"
        @click="chat"
      />
      <van-goods-action-icon
        info="5"
        icon="cart-o"
        text="购物车"
        @click="goCart"
      />
      <van-goods-action-icon
        icon="shop-o"
        text="店铺"
        @click="goShop"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addCart"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="buy"
      />
    </van-goods-action>
  </div>
</template>

<script>
// import Rating from '@/components/common/ratingg.vue'
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import { GoodsAction, GoodsActionIcon, GoodsActionButton, List, NavBar } from 'vant'
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton)
Vue.use(List)
Vue.use(NavBar)
export default {
  data () {
    return {
      tile: '',
      img: '',
      detalimg: ''
    }
  },

  mounted () {
    const id = this.$route.params.id
    // console.log(id);
    fetch('http://106.14.213.84:8000/qiongqiong').then(res => res.json()).then(data => {
      console.log(data)
      console.log(data[0][0].subNavigations)
      console.log(data[0][0].activePic)
      this.tile = data[0][0].name
      this.img = data[0][0].activePic
      this.detalimg = data[0][0].subNavigations
    })
  },
  methods: {
    chat () {
      console.log('客服')
    },
    goCart () {
      console.log('去购物车')
    },
    goShop () {
      console.log('店铺')
    },
    addCart () {
      console.log(this.loginstate)
      console.log(this.tile)
      if (this.loginstate === 'ok') {
        console.log('加入购物车')
      } else {
        this.$router.push('/login')
      }
      // this.show = true
    },
    buy () {
      console.log('立即购买')
      this.$router.push('/login')
    },
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      console.log('分享')
    }
  }
}
</script>

<style lang="scss">
.van-nav-bar {
  background-color: #f66;
  color: #fff;
}
.van-nav-bar__text, .van-nav-bar__title {
  color: #fff;
}
.van-nav-bar .van-icon {
    color: #fff;
}
.content {
  display: flex;
  flex-wrap: wrap;
  // flex: 1;
  // overflow: auto;
  li {
    width: 155px;
    height: 230px;
    // background-color: blue;
    margin: 2px 2px ;
    padding: 0;
    list-style: none;
    img {
      width: 155px;
      height: 200px;
    }
    span {

      width: 155px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
