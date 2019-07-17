<template>
  <div class="container">
    <div class="header">
      <span>分类</span>
      <span>发现</span>
      <p><i class="iconfont icon-sousuo1"></i></p>
    </div>
    <div class="main">
      <div class="nav">
        <div   class="nav-left" v-for="(item, index) of listdate" :key="index">
          占贷{{item}}
        </div>
      </div>
      <div class="contentt">
        <div v-for="(item, index) of listdata" :key="index">
          <!-- <p><img src="../../img/man01.png" alt=""></p> -->
          <span>图片{{item}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listdata: [ 1, 2, 3, 4, 5, 5, 7, 8, 91, 1, 1, 23, 4, 9, 8, 3, 4, 2, 2, 2, 2, 1, 2, 3, 4, 5, 5, 7, 8, 91, 1, 1, 23, 4, 9, 8, 3, 4, 2, 2, 2, 2 ],
      listdate: [ 1, 2, 3, 4, 5, 5, 7, 8, 91, 1, 1, 23, 4, 9, 8, 3, 4, 2, 2, 2, 2, 1, 2, 3, 4, 5, 5, 7, 8, 91, 1, 1, 23, 4, 9, 8, 3, 4, 2, 2, 2, 2 ]
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
@import "@/lib/reset.scss";
.header {
  background-color: #FFFFFF;
  color: #000000;
  border-bottom: 1px solid #CCCCCC;
  @include flexbox();
  span:nth-child(1) {
    @include rect(1.03rem, 0.44rem);
    @include flexbox();
    justify-content: center;
    margin-left: 0.44rem;
    line-height: 0.44rem;
  }
   span:nth-child(2) {
    @include rect(1.03rem, 0.44rem);
    @include flexbox();
    justify-content: center;
    line-height: 0.44rem;
  }
  p {
  @include flexbox();
  @include flex();
  justify-content: center;
  line-height: 0.44rem;
  color: green;
  i {
    font-size: 20px;
    }
  }
}
.main {
  @include flexbox();
  .nav {
    // @include flexbox();
    @include rect(20%,auto);
    background-color: blue;
    // flex-direction: column;
    overflow: auto;
    div {
      border-bottom: 1px solid #CCCCCC;
      @include rect(100%, 0.5rem);
      @include flexbox();
      justify-content: center;
      line-height: 0.5rem;
    }
  }
  .contentt {
    @include flexbox();
    @include rect(80%,auto);
    background-color: yellow;
    flex-wrap: wrap;
    // flex-direction: column;
    overflow: auto;
    div {
      @include rect(33%, 0.88rem);
      border-bottom: 1px solid #CCCCCC;
      p {
        @include rect(100%, 0.68rem);
        img {
          @include rect(100%, 100%);
        }
      }
      span {
        @include rect(100%, 0.28rem);
         @include flexbox();
         justify-content: center;

      }
      &.router-link-active {
        // li.router-link-active {}
        @include color(#f66);
      }
    }
  }
}
</style>
