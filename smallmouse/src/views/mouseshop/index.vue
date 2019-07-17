<template>
  <div class="container">
    <!-- 头部 -->
    <!-- 头部 -->
    <div class="header">
      <h3>松树币商城</h3>
    </div>
    <!-- 内容 -->
    <!-- 内容 -->
    <div class="main">
      <!-- 头部 -->
      <div class="head">
        <h3>我的松鼠币</h3>
        <span>0</span>
        <p>松鼠好礼等你来拿~</p>
        <div>登录/注册</div>
      </div>
      <!-- 第二图片 -->
      <!-- 第二图片 -->
      <div class="listimg">
        <div>
          <!-- <img src="../../img/img01.png" alt=""> -->
          <div>
            <p>购物袋</p>
            <span>想要的都在这</span>
          </div>
        </div>
        <div>
          <!-- <img src="../../img/img01.png" alt=""> -->
          <div>
            <p>我的兑换</p>
            <span>查看松鼠币兑换订单</span>
          </div>
        </div>
      </div>
      <!-- 一个小导航 -->
      <!-- 一个小导航 -->
      <div class="nav">
        <p>兑换中心</p>
        <span>0</span>
      </div>
      <!-- 内容 -->
      <!-- 内容 -->
      <div class="man">
        <div>
            <!-- <img src="../../img/man01.png" alt=""> -->
            <p>会员福利满148减15</p>
            <span>每人限兑1000件</span>
            <span>100</span>
        </div>
        <div>
            <!-- <img src="../../img/man01.png" alt=""> -->
            <p>会员福利满148减15</p>
            <span>每人限兑1000件</span>
            <span>100</span>
        </div>
        <div>
            <!-- <img src="../../img/man01.png" alt=""> -->
            <p>会员福利满148减15</p>
            <span>每人限兑1000件</span>
            <span>100</span>
        </div>
        <div>
            <!-- <img src="../../img/man01.png" alt=""> -->
            <p>会员福利满148减15</p>
            <span>每人限兑1000件</span>
            <span>100</span>
        </div>
        <div>
            <!-- <img src="../../img/man01.png" alt=""> -->
            <p>会员福利满148减15</p>
            <span>每人限兑1000件</span>
            <span>100</span>
        </div>
        <div>
            <!-- <img src="../../img/man01.png" alt=""> -->
            <p>会员福利满148减15</p>
            <span>每人限兑1000件</span>
            <span>100</span>
        </div>
        <div>
            <!-- <img src="../../img/man01.png" alt=""> -->
            <p>会员福利满148减15</p>
            <span>每人限兑1000件</span>
            <span>100</span>
        </div>
        <div>
            <!-- <img src="../../img/man01.png" alt=""> -->
            <p>会员福利满148减15</p>
            <span>每人限兑1000件</span>
            <span>100</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/lib/reset.scss";
.header {
  background-color: #FFFFFF;
  color: #000000;
  border-bottom: 1px solid #CCCCCC;
  h3 {
    display: block;
    font-size: 17px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    line-height: 0.44rem;
  }
}
.main {
  background-color: #FFFFFF;
  .head {
    @include rect(100%, 1.5rem);
    background-color: #ffff;
    border-bottom: 1px solid #CCCCCC;
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 12px;
      font-weight: 300;
      display: flex;
      justify-content: center;
      line-height: 0.44rem;
    }
    span {
      font-size: 22px;
      font-weight: 500;
      display: flex;
      justify-content: center;
      line-height: 0.34rem;
      color: red;
    }
    p {
      font-size: 13px;
      font-weight: 500;
      display: flex;
      justify-content: center;
      line-height: 0.24rem;
    }
    div {
      font-size: 13px;
      font-weight: 500;
      line-height: 0.3rem;
      background-color: #77BC1F;
      border-radius: 0.3rem;
      @include rect(0.8rem, 0.3rem);
      justify-content: center;
      display: flex;
      margin: 0.1rem auto;
      color: #FFFFFF;
    }
  }
  .listimg {
    @include rect(100%, 0.38rem);
    @include flexbox();
    border-bottom: 1px solid #CCCCCC;
    >div {
      @include rect(50%, 0.38rem);
      border-right: 1px solid #CCCCCC;
      @include flexbox();
      img {
        @include rect(0.3rem, 0.38rem);
        margin-left: 0.1rem;
      }
      div {
        @include flexbox();
        flex-direction: column;
        margin-left: 0.1rem;
        p {
          font-size: 10px;

        }
        span {
          font-size: 8px;
        }
      }
    }
  }
  .nav {
    @include rect(100%, 0.35rem);
    @include flexbox();
    background-color: #F9F9F9;
    p {
      @include rect(0.7rem, 0.35rem);
      margin-left: 0.1rem;
      @include flexbox();
      align-items: center;
    }
    span {
      @include rect(0.2rem, 0.35rem);
      @include flexbox();
      align-items: center;
    }
  }
  .man {
    @include rect(100%, auto);
    @include flexbox();
    flex-wrap: wrap;
    background-color: #ccc;
    >div {
      @include rect(49.3%, 1.90rem);
      // @include flex-direction(columns);
      background-color: #ffff;
      margin: 0.02rem 0;
      img {
        margin: 0.20rem 0.36rem 0.15rem 0.35rem;
      }
      p {
        @include flexbox();
        justify-content: center;
        font-size: 10px;
      }
      span:nth-child(3) {
        font-size: 12px;
        display: block;
        margin-left: 0.2rem;

      }
      span:nth-child(4) {
        font-size: 10px;
        display: block;
         margin-left: 0.2rem;
      }
    }
    >div:nth-child(odd) {
      margin-right: 4px;
    }
  }

}
</style>
