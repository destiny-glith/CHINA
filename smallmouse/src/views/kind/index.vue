<template>
  <div class="container">
    <div class="header">
      <span>分类</span>
      <span>发现</span>
      <p><i class="iconfont icon-sousuo1"></i></p>
    </div>
    <div class="main">
      <div class="nav">
        <div class="nav-left" v-for="(item, index) of listdate" :key="index">
          {{item}}
        </div>
      </div>
      <div class="contentt">
        <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          > -->
            <div  @click="getdetail(item.id)" v-for="(item, index) of listdata" :key="index">
            <p><img :src="item.activePic" alt=""></p>
            <span>{{listdata[index].name}}</span>
            </div>
          <!-- </van-list>
        </van-pull-refresh> -->
      </div>

    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import { List, PullRefresh } from 'vant'
Vue.use(List)
Vue.use(PullRefresh)
export default {
  data () {
    return {
      listdata: '',
      listdate: [ '坚果炒货', '果干蜜钱', '肉类熟食', '饼干炼化', '糕点点心', '素食卤味', '冲泡茶饮' ]
      // img: '',
      // name:'',..
      // loading: false,
      // finished: false,
      // pageNum: 2,
      // isLoading: false,
    }
  },
  // methods: {
  //    onLoad () {
  //     // console.log('可以加载数据了')
  //     this.loading = true
  //     fetch('"http://10.11.56.226:8000/qiongqiong?count=1&pageNum=2"' + this.pageNum )
  //       .then(res => res.json()).then(data => {
  //         this.loading = false
  //         this.pageNum++
  //         if (data.length === 0) {
  //           console.log('没有数据了')
  //           this.finished = true
  //         } else {
  //           this.listdata = [...this.listdata, ...data]
  //           console.log(listdata);
  //         }
  //       })
  //   },
  // },
  mounted () {
    fetch ('http://106.14.213.84:8000/qiongqiong?count=1&pageNum=2')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        // console.log(data[0][1]);
        // console.log(data[0][1].name);
        //  console.log(data)
        this.listdata = data[0]
      })
  },
  methods: {
    getdetail (id) {
      this.$router.push({ name: 'det', params: { id } })
      // this.$router.push({ path: `/detail/${id}` })
    }
    //  onRefresh () {
    //   this.isLoading = true
    //   fetch('http://10.11.56.226:8000/qiongqiong/?count=1&pageNum=2').then(res => res.json()).then(data => {
    //     this.isLoading = false // 下拉刷新结束
    //     this.listdata = data // 重置列表的数据
    //     this.pageNum = 1 // 重置页码 --- 下拉刷新相当于第一页数据
    //     this.finished = false // 表示可以继续上拉加载下一页的数据
    //   })
    // },
  //   onLoad () {
  //     // console.log('可以加载数据了')
  //     this.loading = true
  //     fetch('"http://10.11.56.226:8000/qiongqiong?count=1&pageNum=2"' + this.pageNum )
  //       .then(res => res.json()).then(data => {
  //         this.loading = false
  //         this.pageNum++
  //         if (data.length === 0) {
  //           console.log('没有数据了哈哈')
  //           this.finished = true
  //         } else {
  //           this.listdat = [...this.listdata, ...data]
  //           console.log(listdata);
  //         }
  //       })
  //   }
  }
  // 判断是否登录路由
  // beforeRouteEnter: (to, from, next) => {
  //   next(vm => {
  //     const loginState = vm.$store.state.loginState // state: { // 需要管理的组件状态loginState: ''},
  //     if (loginState === 'ok') {
  //       // vm.$router.replace('/user/login')
  //       next()
  //     } else {
  //       vm.$router.push('/login')
  //     }
  //   })
  // }
}
</script>
<style lang="scss" scoped>
@import "@/lib/reset.scss";
.header {
  background-color: #FFFFFF;
  color: #000000;
  border-bottom: 1px solid #CCCCCC;
  @include flexbox();
  span:nth-child(1) {
    @include rect(1.03rem, 0.44rem);
    @include flexbox();
    justify-content: center;
    margin-left: 0.44rem;
    line-height: 0.44rem;
  }
   span:nth-child(2) {
    @include rect(1.03rem, 0.44rem);
    @include flexbox();
    justify-content: center;
    line-height: 0.44rem;
  }
  p {
  @include flexbox();
  @include flex();
  justify-content: center;
  line-height: 0.44rem;
  color: green;
  i {
    font-size: 20px;
    }
  }
}
.main {
  @include flexbox();
  .nav {
    @include rect(20%, auto);
    overflow: auto;
    // background-color: blue;
    div {
      @include rect(100%, 0.8rem);
      @include flexbox();
      justify-content: center;
      align-items: center;
      background-color: #F9F9F9;
      margin: 3px 0;
      font-size: 17px;
      padding: 0 10%;
      letter-spacing:0.02rem;
      color: #262626;
    }
  }
  // .van-list {
  //   @include rect(100%, 100%)
  // }
  .contentt {
    @include rect(80%, auto);
    overflow: auto;
    background-color: #FFFFFF;
    @include flexbox();
    flex-wrap: wrap;
    div {
       @include rect(32%, 1rem);
       background-color: #FFFFFF;
       margin: 3px 1px;
       p {
        @include rect(100%, 0.70rem);
        img {
          @include rect(100%, 100%);
        }
       }
       span {
          @include flexbox();
          justify-content: center;
       }
    }
  }
}
</style>
