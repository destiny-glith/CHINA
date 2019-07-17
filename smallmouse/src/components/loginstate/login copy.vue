<template>
  <div>
    <router-link to='/login'></router-link>
   <button @click="lognState">登陆</button>
   <button @click="registerState">注册</button>
  </div>
</template>
<script>
import Vue from 'vue'
import { Button } from 'vant'
Vue.use(Button)

export default {

}
</script>
