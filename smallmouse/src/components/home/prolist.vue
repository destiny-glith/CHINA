<template>
  <div id="main_list">
    <van-tabs @click="onClick" sticky color="#77bc1f" title-active-color="#77bc1f" swipeable>
      <van-tab :title="titlist[0]">
        <div class="main_one"  @click="getArticleinfo('articleinfo')">
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
        <Prochild :tip="msg" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Prochild from '@/components/home/prochild'
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
// import { log } from 'util'
// import axios from 'axios'
Vue.use(Tab).use(Tabs)

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
      msg: ''
    }
  },
  mounted () {
    fetch('http://106.14.213.84:8000/getindexss').then(res => res.json()).then((data) => {
      let comont = data[0].data['recommendChannel'] // 公共
      // let comont2 = data[0].data['floors'] // 爆款
      // let comont3 = data // 爆款
      this.imgone = comont['topAdvs'][0]['pic'] // img one
      let titlis = data[0].data['channels'] // banner
      for (let a = 0; a < titlis.length; a++) {
        this.titlist.push(titlis[a].name)
      }
      this.shaixuan = this.titlist.filter(function (item, index, array) {
        return (item.indexOf('推荐') !== 0)
      }) // 筛选titlist数组 去除第一个
      let huolist = comont['middleAdvs'] // 活动8张
      for (let a = 0; a < huolist.length; a++) {
        this.huo.push(huolist[a]['pic'])
      }
      this.newuser = comont['bottomAdvs'][0]['pic'] // 新人
      let sanlist = comont['recommendAdvs'] // 三线
      for (let a = 0; a < sanlist.length; a++) {
        this.sanlis.push(sanlist[a]['pic'])
      }
    })
  },
  methods: {
    onClick (name, title) {
      this.msg = title
    },
    getArticleinfo(id){
      this.$router.push('/home/'+ id)
    }
  },
  components: {
    Prochild
  }
}
</script>

<style lang="scss">
.itemscall {
  position: relative;
  .oldfont {
    padding: 0 8px;
    padding: 0.01rem 0.08rem 0;
    font-size: 0.12rem;
    color: #999;
    text-decoration: line-through;
  }
  #icon {
    font-size: 24px;
    position: absolute;
    color: green;
    top: -6px;
    right: 0.1rem;
    bottom: -0.05rem;
    z-index: 999;
  }
  .redfont {
    color: #ee2e52;
    padding: 0.01rem 0.08rem 0;
    font-size: 13px;
    margin: 0 4px 0 0;
  }
}

.main_index {
  width: 100%;
  height: 100%;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #f8f8f8;
    // flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 1.57rem;
      height: 2.17rem;
      background-color: #fff;
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
  // background-color: aqua;
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
  // background-color: red;
  img {
    width: 100%;
    height: 100%;
  }
}
.main_list {
  width: 100%;
  height: 1.4rem;
  // background-color: green;
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
