<template>
  <div class="container">
    <div class="header">购物车</div>
    <div class="main">购物车</div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      const loginState = vm.$store.state.loginState // state: { // 需要管理的组件状态loginState: ''},
      if (loginState === 'ok') {
        // vm.$router.replace('/user/login')
        next()
      } else {
        vm.$router.push('/login')
      }
    })
  }
}
</script>
