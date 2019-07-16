<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item,index) of bannerlist" :key="index">
      <img :src="item" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
import { log } from 'util';
Vue.use(Swipe).use(SwipeItem)

export default {
  data() {
    return {
      bannerlist:[]
    }
  },
  mounted() {
     fetch('http://10.11.56.226:8000/getindexss').then(res => res.json()).then((data) => {
     let imglis = data[0].data['carousel']
      for(let a=0; a < imglis.length; a++){
        this.bannerlist.push(imglis[a].pic)
      }
    })
  },
}
</script>

<style lang="scss">
img{
  width: 100%;
  height: 2.0rem;
}
</style>


