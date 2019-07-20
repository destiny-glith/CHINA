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
  // props:['iss']
}
</script>