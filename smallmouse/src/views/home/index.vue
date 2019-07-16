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

  }
}
</script>
