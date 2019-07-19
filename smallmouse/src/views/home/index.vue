<template>
  <div class="container">
    <div class="main">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :loading-text="suctxt">
        <Banner />
        <Prolist />

        <div class="main_index">
          <!-- 上拉加载 -->
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <ul>
              <li v-for="(item,index) of lists" :key="index">
                <div class="itemimg">
                  <div class="bigimg">
                    <img :src="item['thumbUrl']" alt />
                  </div>
                  <div class="smallimg">
                    <img src alt />
                  </div>
                </div>
                <p class="itemtit">{{item['alias']}}</p>
                <p class="itemliang">{{item['productName']}}</p>
                <p class="itemscall">
                  <span class="redfont">{{item['matchPrice']}}</span>
                  <span class="oldfont">{{item['marketPrice']}}</span>
                  <span class="iconfont icon-tubiaolunkuo-" id="icon"></span>
                </p>
              </li>
            </ul>
          </van-list>
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { List, PullRefresh } from 'vant'
Vue.use(PullRefresh)
Vue.use(List)

// import { log } from 'util'
import Banner from '@/components/home/banner'
import Prolist from '@/components/home/prolist'
import Lists from '@/components/common/lists'
// import List from '@/components/home/pro/list'
// Vue.user(log)

export default {
  components: {
    Banner,
    Prolist
  },
  data () {
    return {
      lists: '',
      loading: false,
      finished: false,
      pageNum: 0,
      isLoading: false,
      suctxt:'稍等一会会'
    }
  },
  methods: {
    onLoad () {
      this.loading = true // 第一步移动到底部loading出现
      this.pageNum++

      fetch('http://localhost:8000/cplist?count=2&pageNum=' + this.pageNum).then(res => res.json()).then(data => {
        this.loading = false
        if (data.length === 0) { // 3如果请求结果没有，则finished为true
          console.log('没有数据了');
          this.finished = true
        } else { // 否则把获得的数组添加到现有的数组内
          this.lists = [...this.lists, ...data]
        }
      })
    },
    onRefresh () {
      this.isLoading = true;
      fetch('http://localhost:8000/cplist?count=2&pageNum=0').then(res => res.json()).then(data => {
        this.isLoading = false;
        this.pageNum = 0;
        this.list = data;
        this.finished = false;
      })
    }
  },
  mounted () {
    const main = document.querySelector('.main') // 渲染前就开始监听滚动事件
    main.addEventListener('scroll', this.scrollFn) // 滚动出发函数
  },
  beforeRouteLeave (to, from, next) {
    const main = document.querySelector('.main')
    main.removeEventListener('scroll', this.scrollFn)
    localStorage.setItem('position', main.scrollTop)
    next()
  },
  watch: {
    $route (newVal, oldVal) {
      if (newVal.name === 'home') {
        const mains = document.querySelector('.main')
        mains.scrollTop = localStorage.getItem('position')
      }
    }
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
</style>

