<template>
  <div>
    <van-tabs @click="onClick">
      <van-tab :title="titlist[0]">
        <div class="main_one">
          <img :src="imgone" alt />
        </div>
        <div class="main_list">
          <ul>
            <li v-for="(item,index) of huo" :key="index">
              <img :src="item" alt />
            </li>
          </ul>
        </div>
        <div class="main_two">
          <img :src="newuser" alt />
        </div>
        <div class="main_huo">
          <ul>
            <li v-for="(item,index) of sanlis" :key="index">
              <img :src="item" alt />
            </li>
          </ul>
        </div>
        <div class="main_floor"></div>
        <div class="main_banner"></div>
      </van-tab>
      <van-tab v-for="(item,index) of shaixuan" :key="index" :title="item">
        <!-- <component :is="type"></component> -->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

// <!-- 第一张图片 -->
// <div class="index_banner">
//   <img :src="index_banner" alt />
// </div>
// <!-- 标题 -->
// <div class="main_floor">
//   <div class="hezi"></div>
//   <p>{{main_floor}}</p>
// </div>
// <div class="main_index">
//   <ul>
//     <li v-for="(item,index) of bao1" :key="index">
//       <div class="itemimg">
//         <div class="bigimg">
//           <img :src="item['pic']" alt />
//         </div>
//         <div class="smallimg">
//           <img :src="samllimg" alt />
//         </div>
//       </div>
//       <p class="itemtit">{{item['alias']}}</p>
//       <p class="itemliang">{{item['name']}}</p>
//       <p class="itemscall">
//         <span></span>
//         <span></span>
//       </p>
//     </li>
//   </ul>
// </div>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
import { log } from 'util';
Vue.use(Tab).use(Tabs)
import axios from 'axios'
export default {
  data () {
    return {
      titlist: [],
      imgone: '',
      title: '',
      huo: [],
      newuser: '',
      sanlis: [],
      shaixuan: [],
      index_banner: '',
      main_floor: '',
      bao1: [],
      bigimg: '',
      samllimg: '',
      type: ''
    }
  },
  mounted () {
    fetch('http://10.11.56.226:8000/getindexss').then(res => res.json()).then((data) => {
      let comont = data[0].data['recommendChannel'] // 公共
      let comont2 = data[0].data['floors'] // 爆款
      let comont3 = data // 爆款
      this.imgone = comont['topAdvs'][0]['pic'] // img one
      let titlis = data[0].data['channels'] //banner
      for (let a = 0; a < titlis.length; a++) {
        this.titlist.push(titlis[a].name)
      }
      this.shaixuan = this.titlist.filter(function (item, index, array) {
        return (item.indexOf('推荐') !== 0)
      }) // 筛选titlist数组 去除第一个
      let huolist = comont['middleAdvs'] //活动8张
      for (let a = 0; a < huolist.length; a++) {
        this.huo.push(huolist[a]['pic'])
      }
      this.newuser = comont['bottomAdvs'][0]['pic'] // 新人
      let sanlist = comont['recommendAdvs'] //三线
      for (let a = 0; a < sanlist.length; a++) {
        this.sanlis.push(sanlist[a]['pic'])
      }
    })
    fetch('http://10.11.56.226:8000/getkind').then(res => res.json()).then((data) => {


      this.index_banner = data[0]['data']['banner'].pic
      this.main_floor = data[0]['data']['floors'][0]['title'] //名字
      let bao1 = data[0]['data']['floors'][0]['products'] //单一宝贝循环
      console.log(data[0]['data']['floors'][0]['products']);

      for (let index = 0; index < bao1.length; index++) {
        this.bao1.push(bao1[index])
      }
      this.samllimg = bao1[1]['tags'][0]['pic']
    })
  },
  methods: {
    onClick (name, title) {
      this.type = title
      console.log(this.type);
    }
  },
}
</script>

<style lang="scss">
.main_index {
  width: 100%;
  height: 100%;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 1.57rem;
      height: 2.17rem;
      background-color: aquamarine;
      margin-top: 0.06rem;
      .itemimg {
        width: 100%;
        height: 1.57rem;
        position: relative;
        .bigimg {
          width: 100%;
          height: 1.57rem;
          background-color: #333;
          img {
            width: 100%;
            height: 1.57rem;
          }
        }
        .smallimg {
          width: 0.39rem;
          height: 0.39rem;
          position: absolute;
          left: 0;
          top: 0;
          padding: 0.01rem;
          img {
            width: 0.39rem;
            height: 0.39rem;
          }
        }
      }
      .itemtit {
        padding: 0.01rem 0.08rem 0;
        font-size: 12px;
      }
      .itemliang {
        padding: 0.01rem 0.08rem 0;
        font-size: 8px;
        color: #777;
      }
    }
  }
}
.index_banner {
  width: 100%;
  height: 1.1rem;
  background-color: aqua;
  img {
    width: 100%;
    height: 100%;
  }
}

.main_banner {
  width: 100%;
  height: 1.8rem;
}
.main_floor {
  width: 100%;
  height: 0.3rem;
  margin-top: 0.06rem;
  position: relative;
  .hezi {
    width: 0.12rem;
    height: 0.1rem;
    background-color: #77bc1f;
    position: absolute;
    top: 50%;
    margin-top: -0.05rem;
  }
  p {
    line-height: 0.3rem;
    font-size: 0.12rem;
    margin-right: 0.2rem;
    padding-left: 0.2rem;
  }
}
.main_one {
  width: 100%;
  height: 1rem;
  background-color: red;
  img {
    width: 100%;
    height: 100%;
  }
}
.main_list {
  width: 100%;
  height: 1.4rem;
  background-color: green;
  ul {
    width: 100%;
    height: 1.4rem;
    li {
      float: left;
      width: auto;
      height: 0.7rem;
      img {
        width: 0.7rem;
        height: 100%;
      }
    }
  }
}
.main_list > ul li:nth-child(1) img {
  width: 0.9rem;
}
.main_list > ul li:nth-child(4) img {
  width: 0.9rem;
}
.main_list > ul li:nth-child(5) img {
  width: 0.9rem;
}
.main_list > ul li:nth-child(8) img {
  width: 0.9rem;
}
.main_two {
  width: 100%;
  height: 1rem;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
  }
}
.main_huo {
  width: 100%;
  height: 1.35rem;
  background-color: #fff;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      width: 1.05rem;
      height: 1.35rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
