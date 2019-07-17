<template>
  <div class="container">
    <div class="main">
      <Banner />
      <Prolist />
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import { log } from 'util'
import Banner from '@/components/home/banner'
import Prolist from '@/components/home/prolist'
// import List from '@/components/home/pro/list'
// Vue.user(log)

export default {
  methods: {
  },
  components: {
    Banner,
    // List
    Prolist
  },
  mounted () {
    // const main = document.querySelector('.main') // 渲染前就开始监听滚动事件
    // main.addEventListener('scroll', this.scrollFn) // 滚动出发函数
  },
  beforeRouteLeave (to, from, next) {
    const main = document.querySelector('.main')
    // main.removeEventListener('scroll', this.scrollFn)
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
  },
  methods: {

  },
}
</script>
