<template>
  <div class="container">
    <van-nav-bar title="松鼠七周年" left-text="返回" left-arrow @click-left="onClickBack" />
    <div class="main">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div v-html="share"></div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, PullRefresh } from 'vant'
Vue.use(NavBar) // 头部nav
Vue.use(PullRefresh)

export default {
  data () {
    return {
      share: '',
      title: '',
      isLoading: false
    }
  },
  methods: {
    onClickBack () { // 事件返回
      this.$router.back()
    },
    onRefresh () {
      this.isLoading = true;
      fetch('http://106.14.213.84:8000/getshare').then(res => res.json()).then(data => {
        this.isLoading = false;
        this.share = data[1]['content']
        this.title = data[1]['info']
      })
    }
  },
  mounted () {
    fetch("http://106.14.213.84:8000/getshare").then(res => res.json()).then(data => {
      this.share = data[1]['content']
      this.title = data[1]['info']

    })
  },
}
</script>

<style lang="scss">
img {
  // width: auto;
  height: auto !important;
}
</style>
