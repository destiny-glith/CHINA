<template>
  <div class="container">
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickBack" />
    <div class="main">
      <van-swipe :autoplay="5000">
        <van-swipe-item v-for="(image, index) in imges" :key="index" class="detaiimg">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <Rob :tip="detailId" />
      <van-tabs type="line" animate="true">
        <van-tab title="图文详情">
          <div v-html="message" class="imgcontent"></div>
        </van-tab>
        <van-tab title="规格参数">
          <div class="properties">
            <tr class="pro" v-for="(item,index) of properties" :key="index">
              <td class="pro_one">{{item.title}}:</td>
              <td class="pro_two">{{item.value}}</td>
            </tr>
          </div>
        </van-tab>
        <van-tab title="品牌参数">
          <div v-html="share" class="detaiimg"></div>
        </van-tab>
      </van-tabs>
    </div>

    <van-goods-action>
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickBuycar" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickAddcar" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickBuy" />
    </van-goods-action>
  </div>
</template>

<script>
import Rob from '@/components/robtitle/rob' // 引入共享的商品价格标题栏
import Vue from 'vue'
import { NavBar, Swipe, SwipeItem, Lazyload, ImagePreview, Tab, Tabs, GoodsAction, GoodsActionIcon, GoodsActionButton, Toast } from 'vant' // 导航栏
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton)
Vue.use(Swipe).use(SwipeItem)
Vue.use(NavBar)
Vue.use(Lazyload)
Vue.use(ImagePreview)
Vue.use(Tab).use(Tabs)
Vue.use(Toast)

export default {
  data () {
    return {
      imges: '',
      message: '',
      properties: '',
      detailId: '',
      share: "<p style=\"text-align: center;\"><img style=\"width:100%\" src=\"http://pic10.cdn.3songshu.com:81//assets/upload/article/03200c1f237a10eec8c58d61c905dd8e.jpg\" title=\"03200c1f237a10eec8c58d61c905dd8e.jpg\"/><img src=\"http://pic10.cdn.3songshu.com:81//assets/upload/article/1f82350d34cb04b04bc95707c664eeda.jpg\" title=\"1f82350d34cb04b04bc95707c664eeda.jpg\" style=\"width: 100%;\"/><img src=\"http://pic10.cdn.3songshu.com:81//assets/upload/article/ccc8e4512b3d6100639e3b9cea0cd691.jpg\" title=\"ccc8e4512b3d6100639e3b9cea0cd691.jpg\" style=\"width: 100%;\"/><img src=\"http://pic10.cdn.3songshu.com:81//assets/upload/article/deb7d81cbb1c566d8e10be3a74a62cf1.jpg\" title=\"deb7d81cbb1c566d8e10be3a74a62cf1.jpg\" style=\"width: 100%;\"/><img src=\"http://pic10.cdn.3songshu.com:81//assets/upload/article/c4f96bdc15f63219d14acf401a46b3f7.jpg\" title=\"c4f96bdc15f63219d14acf401a46b3f7.jpg\" style=\"width: 100%;\"/><img src=\"http://pic10.cdn.3songshu.com:81//assets/upload/article/a3d0f305df5bbe42fb10e7b074844285.jpg\" title=\"a3d0f305df5bbe42fb10e7b074844285.jpg\" style=\"width: 100%;\"/><img src=\"http://pic10.cdn.3songshu.com:81//assets/upload/article/719fa1cc4f719cb3fc449629c65c3ef9.jpg\" title=\"719fa1cc4f719cb3fc449629c65c3ef9.jpg\" style=\"width: 100%;\"/></p>",

    }
  },
  components: {
    Rob
  },
  methods: {
    onClickBuycar () {
      Toast('点击图标');
    },
    onClickAddcar () {
      Toast('点击按钮');
    },
    onClickBuy () {
      Toast('点击按钮');
    },
    onClickBack () {
      this.$router.back()
    },
    zhuanyi (str) {
      var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
      return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) { return arrEntities[t]; });
    }
  },
  mounted () {
    // const id = this.$route.params.id
    let { $route: { params: { id } } } = this // 结构赋值
    this.detailId = id
    fetch('http://localhost:8000/detail?productId=' + id).then(res => res.json()).then(data => {
      this.imges = data[0]['pics']
      let test = this.zhuanyi(data[0].content)

      this.properties = data[0]['properties']
      // this.detailId = data[0]['styles'][0]['id']

      this.message = test
    })
  }
}
</script>

<style lang="scss">
.properties {
  padding: 0.1rem 0;
  width: 100%;
  height: auto;
  .pro {
    font-size: 0.13rem;
    margin-bottom: 0.1rem;
    display: flex;
    flex-wrap: nowrap;
    .pro_one {
      text-align: right;
    }
    .pro_two {
      text-align: left;
    }
  }
}
.detaiimg {
  width: 100%;
  height: 3.2rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.imgcontent {
  img {
    width: 100%;
    height: auto;
  }
}
</style>