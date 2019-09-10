<template>
  <div>
    <div class="infotitle">
      <h3>你好</h3>
      <p class="pstyle">送女友一箱零食 活动页面领劵再减10元！</p>
      <div>
        <span class="scallstyle">168.00</span>
        <span class="oldstyle">299.00</span>
        <span class="xiaostyle">
          总销量
          <span>998</span>
        </span>
      </div>

      <div class="botstyle">
        <span class="custyle">促销</span>
        <span class="iconfont icon-juanzeng"></span>
        <span class="dearstyle">亲爱哒主人商城满39元包邮哟</span>
      </div>

      <div class="tuistyle">松鼠推荐</div>
      <van-swipe :autoplay="8000" indicator-color="white" :show-indicators="false">
        <van-swipe-item class="itembox" v-for="(item,index) of arr" :key="index">
          <div class="item_icon" v-for="(itm,idx) of item" :key="idx">
            <img :src="itm['thumbUrl']" alt />
            <p class="item_icon_name">{{itm['productName']}}</p>
            <p class="item_icon_name1">{{itm['alias']}}</p>
            <span>
              <span class="item_icon_sacll">{{itm['matchPrice']}}</span>
              <span class="item_icon_sacll1">{{itm['marketPrice']}}</span>
            </span>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { log } from 'util';
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)

export default {
  data () {
    return {
      arr: []
    }
  },
  props: ['tip'],
  mounted () {
    fetch('http://106.14.213.84:8000/rob').then(res => res.json()).then(data => {
      // console.log(data);
      // console.log(this.tip);

    })
    fetch('http://106.14.213.84:8000/getshare').then(res => res.json()).then(data => {
      let arr1 = []
      let arr2 = []
      let arr3 = []
      let arr4 = []
      let arr5 = []
      for (let i in data[0]) {
        if (i < 2) {
          arr1.push(data[0][i])
        } else if (i < 4) {
          arr2.push(data[0][i])
        } else if (i < 6) {
          arr3.push(data[0][i])
        } else if (i < 8) {
          arr4.push(data[0][i])
        } else if (i < 10) {
          arr5.push(data[0][i])
        }

      }
      this.arr.push(arr1, arr2, arr3, arr4, arr5)

    })
  },
}
</script>

<style lang="scss">
.itembox {
  display: flex;
  width: 100%;
  height: 1.5rem;
  // background-color: aqua;
  .item_icon {
    width: 50%;
    height: auto;
    color: #000;
    .item_icon_name {
      margin-top: 0.05rem;
      overflow: hidden;
      padding: 0 8px;
      margin: 0;
      height: 1.5em;
      line-height: 1.5em;
      font-size: 0.12rem;
    }
    .item_icon_name1 {
      overflow: hidden;
      padding: 0 8px;
      color: #777;
      margin: 0;
      height: 1.5em;
      line-height: 1.5em;
      font-size: 0.1rem;
    }
    span {
      .item_icon_sacll1 {
        font-size: 0.11rem;
        text-decoration: line-through;
        color: #777;
      }
      .item_icon_sacll {
        padding: 0 8px;
        color: #ee2e52;
      }
    }
    img {
      position: relative;
      left: 50%;
      margin-left: -0.64rem;
      width: 1.28rem;
      height: 1.28rem;
    }
  }
}
.tuistyle {
  width: 100%;
  height: 0.25rem;
  padding: 0.05rem;
  font-size: 0.14rem;
  // background-color: #ee2e52;
}
.botstyle {
  padding: 0.05rem 0;
  .custyle {
    font-size: 0.14rem;
    color: #999;
    margin-right: 0.1rem;
  }
  .icon-juanzeng {
    color: #ee2e52;
    font-size: 0.14rem;
  }
  .dearstyle {
    font-size: 0.13rem;
    color: #262626;
    margin-left: 0.1rem;
  }
}
.infotitle {
  padding: 0 0.1rem;
  width: 100%;
  // height: 1.1rem;
  position: relative;
  h3 {
    margin-top: 0.1rem;
    margin-bottom: 0.05rem;
  }
  .pstyle {
    font-size: 0.12rem;
    color: #ee2e52;
  }
  .scallstyle {
    font-size: 0.18rem;
    color: #ee2e52;
    margin-right: 0.05rem;
  }
  .oldstyle {
    font-size: 0.12rem;
    color: #999;
    text-decoration: line-through;
  }
  .xiaostyle {
    font-size: 0.12rem;
    color: #999;
    position: absolute;
    right: 0.1rem;
  }
}
</style>