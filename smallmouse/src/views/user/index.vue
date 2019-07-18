<template>
  <div class="container">
    <div class="header">个人中心</div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      const loginState = vm.$store.state.loginState // state: { // 需要管理的组件状态loginState: ''},
      // console.log(loginState);
      
      if (loginState === 'ok') {
        // vm.$router.replace('/user/login')
        next()
      } else {
        vm.$router.replace('/login')
      }
    })
  }
}
</script>