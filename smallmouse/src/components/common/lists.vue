<template>
  <ul>
    <li v-for="(item,index) of iss" :key="index">
      <div class="itemimg">
        <div class="bigimg">
          <img :src="item['thumbUrl']" alt />
        </div>
        <div class="smallimg">
          <img src alt />
        </div>
      </div>
      <p class="itemtit">{{item['alias']}}</p>
      <p class="itemliang">{{item['productName']}}</p>
      <p class="itemscall">
        <span class="redfont">{{item['matchPrice']}}</span>
        <span class="oldfont">{{item['marketPrice']}}</span>
        <span class="iconfont icon-tubiaolunkuo-" id="icon"></span>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props:['iss']
}
</script>

<style lang="scss">
.itemscall {
  position: relative;
  .oldfont {
    padding: 0 8px;
    padding: 0.01rem 0.08rem 0;
    font-size: 0.12rem;
    color: #999;
    text-decoration: line-through;
  }
  #icon {
    font-size: 24px;
    position: absolute;
    color: green;
    top: -6px;
    right: 0.1rem;
    bottom: -0.05rem;
  }
  .redfont {
    color: #ee2e52;
    padding: 0.01rem 0.08rem 0;
    font-size: 13px;
    margin: 0 4px 0 0;
  }
}

.main_index {
  width: 100%;
  height: 100%;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #f8f8f8;
    // flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 1.57rem;
      height: 2.17rem;
      background-color: #fff;
      margin-top: 0.06rem;
      .itemimg {
        width: 100%;
        height: 1.57rem;
        position: relative;
        .bigimg {
          width: 100%;
          height: 1.57rem;
          background-color: #333;
          img {
            width: 100%;
            height: 1.57rem;
          }
        }
        .smallimg {
          width: 0.39rem;
          height: 0.39rem;
          position: absolute;
          left: 0;
          top: 0;
          padding: 0.01rem;
          img {
            width: 0.39rem;
            height: 0.39rem;
          }
        }
      }
      .itemtit {
        padding: 0.01rem 0.08rem 0;
        font-size: 12px;
      }
      .itemliang {
        padding: 0.01rem 0.08rem 0;
        font-size: 8px;
        color: #777;
      }
    }
  }
}
</style>