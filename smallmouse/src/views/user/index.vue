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
  beforeEnter: (to, from, next) => {
    // if (to.name === 'user') {
    //   if (localStorage.getItem('isLogin') === 'ok') {
    //     next('/user/login')
    //   } else {
    //     next('/user/unlogn')
    //   }
    // } else {
    //   next()
    // }
    next(vm => {
      // const loginState = vm.$store.state.loginState // state: { // 需要管理的组件状态loginState: ''},
      if (localStorage.getItem('isLogin') === 'ok') {
        vm.$router.replace('/user/login')
      } else {
        vm.$router.replace('/register')
      }
    })
  }

}
</script>