<template>
  <footer class="footer">
    <ul>
      <router-link to= "/" tag="li">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to= "/kind" tag="li">
        <i class="iconfont icon-fenlei"></i>
        <span>分类</span>
      </router-link>
      <router-link to= "/mouseshop" tag="li">
        <i class="iconfont icon-songguo"></i>
        <span>松鼠币商城</span>
      </router-link>
      <router-link to= "/cart" tag="li">
        <i class="iconfont icon-tubiaolunkuo-"></i>
        <span>购物车</span>
      </router-link>
      <router-link to= "/user" tag="li">
        <i class="iconfont icon-gerenzhongxin"></i>
        <span>个人中心</span>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  computed: {
    totaNum() {
      // return this.$store.getters.totalNum
    }
  }
}
</script>

<style lang="scss">
@import "@/lib/reset.scss";

.footer {
  @include rect(100%, 0.5rem);
  @include background-color(#fff);
  @include border(1px 0 0 0, #b2b2b2, solid);
  ul {
    display: flex;
    align-items: center;
    @include rect(100%, 0.5rem);
    li {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      height: 100%;
      span{
        font-size: 0.11rem;
        color: #585858;
      }
      i{
        font-size: 20px;
        line-height: 30px;
        color: #585858;
      }
    }
  }
}
</style>
