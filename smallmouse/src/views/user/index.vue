<template>
  <div class="container">
    <div class="main">
      <div class="user">
        <div class="user_banner_content">
          <div class="user_img"></div>
          <span class="user_phone">{{adduserState}}</span>
          <span class="user_set">账户管理，收货地址 ></span>
        </div>
      </div>
      <div class="user_order">
        <div class="user_li">
          <i class="i_icon">
            <img src="../../../public/img/iconbtn (3).png" alt />
          </i>
          <span class="i_font">我的订单</span>
          <span class="i_fontx">查看全部订单</span>
          <i class="i_icon1 iconfont icon-jiantou"></i>
        </div>
      </div>
      <ul class="myinfo">
        <li>
          <img src="../../../public/img/icon (4).png" alt />
          待付款
        </li>
        <li>
          <img src="../../../public/img/icon (1).png" alt />
          待发货
        </li>
        <li>
          <img src="../../../public/img/icon (5).png" alt />
          待收货
        </li>
        <li>
          <img src="../../../public/img/icon (2).png" alt />
          待评价
        </li>
        <li>
          <img src="../../../public/img/icon (3).png" alt />
          退款/售后
        </li>
      </ul>

      <div class="user_order">
        <div class="user_li">
          <i class="i_icon">
            <img src="../../../public/img/iconbtn (4).png" alt />
          </i>
          <span class="i_font">我的优惠券</span>
          <span class="i_fontx">7张</span>
          <i class="i_icon1 iconfont icon-jiantou"></i>
        </div>
      </div>
      <div class="user_order">
        <div class="user_li">
          <i class="i_icon">
            <img src="../../../public/img/iconbtn (5).png" alt />
          </i>
          <span class="i_font">推荐有奖</span>
          <span class="i_fontx"></span>
          <i class="i_icon1 iconfont icon-jiantou"></i>
        </div>
      </div>
      <div class="user_order">
        <div class="user_li">
          <i class="i_icon">
            <img src="../../../public/img/iconbtn (1).png" alt />
          </i>
          <span class="i_font">在线客服</span>
          <span class="i_fontx"></span>
          <i class="i_icon1 iconfont icon-jiantou"></i>
        </div>
      </div>
      <div class="user_order">
        <div class="user_li">
          <i class="i_icon">
            <img src="../../../public/img/o (1).png" alt />
          </i>
          <span class="i_font">帮助与反馈</span>
          <span class="i_fontx"></span>
          <i class="i_icon1 iconfont icon-jiantou"></i>
        </div>
      </div>
      <div class="user_order">
        <div class="user_li">
          <i class="i_icon">
            <img src="../../../public/img/o (2).png" alt />
          </i>
          <span class="i_font">设置</span>
          <span class="i_fontx">关于我们</span>
          <i class="i_icon1 iconfont icon-jiantou"></i>
        </div>
      </div>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      adduserState: ''
    }
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      const loginState = vm.$store.state.loginState // state: { // 需要管理的组件状态loginState: ''},
      vm.adduserState = vm.$store.state.userInfo.substring(0, 3) + "****" + vm.$store.state.userInfo.substring(7, 11)// 赋值给个人
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

<style lang="scss">
.myinfo {
  padding: 0.1rem;
  display: flex;
  // flex: 1;
  border-bottom: 0.1rem solid #f8f8f8;
  li {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    color: #999;
    img {
      width: 0.2rem;
      height: 0.18rem;
      margin: 0.05rem 0;
    }
  }
}
.user_order {
  position: relative;
  .user_li {
    padding: 0 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 0.4rem;
    .i_icon {
      left: 0.1rem;
      top: 0.08rem;
    }
    .i_icon1 {
      right: 0.2rem;
    }
    .i_fontx {
      font-size: 0.14rem;
      color: #999;
    }
    .i_font {
      font-size: 0.14rem;
    }
    i {
      position: absolute;
      img {
        width: 0.22rem;
        height: 0.22rem;
      }
    }
  }
}

.user {
  height: 2.5rem;
  width: 100%;
  background: url("../../../public/img/user-bg..jpg") center no-repeat;
  background-size: 100% 100%;
  .user_banner_content {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 25%;
    .user_img {
      width: 0.58rem;
      height: 0.58rem;
      border-radius: 50%;
      background: url("../../../public/img/a91f9651a598cb74212e176d3a08759a.jpg")
        center no-repeat;
      background-size: 100% 100%;
    }
    span {
      margin-top: 0.05rem;
      color: #fff;
    }
  }
}
</style>
