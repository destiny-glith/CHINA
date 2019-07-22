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
                  <span
                    class="iconfont icon-tubiaolunkuo-"
                    id="icon"
                    @click="sendState(item['thumbUrl'],item['productName'],item['matchPrice'],item['productId'],$event,flag=true,num=1)"
                  ></span>
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
import Banner from '@/components/home/banner'
import Prolist from '@/components/home/prolist'
import Vue from 'vue'
import { List, PullRefresh, Toast } from 'vant'
Vue.use(PullRefresh)
Vue.use(List)
Vue.use(Toast)
// import Lists from '@/components/common/lists'
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
      suctxt: '稍等一会会',
      obj: {},
      lis: [],
      userinfo: this.$store.state.userInfo,
      list: []
    }
  },
  methods: {
    sendState (pic, name, sale, proid, enent, flag, num) {
      event.stopPropagation()
      // if (!localStorage.getItem('cars')) {
      //   if (this.obj[this.userinfo] === undefined) {
      //     this.obj[this.userinfo] = this.lis
      //   }
      // }
      // else {
      //   let dic = JSON.parse(localStorage.getItem('cars'))
      //   if (dic[this.userinfo] !== undefined) {
      //     this.lis = dic[this.userinfo]
      //   }
      // }
      if (this.$store.state.loginState === 'ok') {
        let result = { pic, name, sale, proid, flag, num }
        if (!localStorage.getItem('cars')) { //1如果触发时没有本地数据 就将新创建的对象obj和新创建的lis购物车作为新的放进本地
          this.lis.push(result)
          this.obj[this.userinfo] = this.lis
          localStorage.setItem('cars', JSON.stringify(this.obj))
        } else { // 2否则就是有本地  如果有本地 下一步
          let dic = JSON.parse(localStorage.getItem('cars'))
          if (dic[this.userinfo] !== undefined) { // 2.1如果本地obj[此时的用户] ！==undefined 说明这个用户里的购物车有数据
            this.lis = dic[this.userinfo] //有数据就将老数据赋值给 购物车lis
            let flag = false
            this.lis.map(item => { // 循环老数据，看老数据里的名字与 新添加的 result名字是否有重复
              if (item.name === result.name) {  //2.1.1如果有重复就将老数据的num+1
                item.num += 1
                flag = true //2.1.2并且给flag赋值true 让外面的购物车不要添加进去
              }
            })
            if (!flag) { // 2.1.3如果flag等于flase就说明老数据没有此商品，正常添加
              this.lis.push(result)
              flag = false
            }
            dic[this.userinfo] = this.lis // 最后一步 重新赋值给dic对象
            localStorage.setItem('cars', JSON.stringify(dic)) //解析
          } else {
            this.lis.push(result) //2.2如果老数据里没有这个账户。就说明他没有购物车数据，此时就要重新给他添加数据了
            dic[this.userinfo] = this.lis
            localStorage.setItem('cars', JSON.stringify(dic))
          }
        }
        Toast('成功加入购物车')
      } else {
        this.$router.push('/login')
      }
    },
    onLoad () {
      this.loading = true // 第一步移动到底部loading出现
      this.pageNum++
      fetch('http://106.14.213.84:8000/cplist?count=5&pageNum=' + this.pageNum).then(res => res.json()).then(data => {
        this.loading = false
        if (data.length === 0) { // 3如果请求结果没有，则finished为true
          console.log('没有数据了')
          this.finished = true
        } else { // 否则把获得的数组添加到现有的数组内
          this.lists = [...this.lists, ...data]
        }
      })
    },
    onRefresh () {
      this.isLoading = true
      this.pageNum = 0
      fetch('http://106.14.213.84:8000/cplist?count=5&pageNum=1').then(res => res.json()).then(data => {
        this.isLoading = false
        this.lists = data
        this.finished = false
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
