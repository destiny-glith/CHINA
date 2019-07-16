<template>
  <div>
    <!-- 第一张图片 -->
    <div class="index_banner">
      <img :src="index_banner" alt />
    </div>
    <!-- 标题 -->
    <div class="main_floor">
      <div class="hezi"></div>
      <p>{{main_floor}}</p>
    </div>
    <div class="main_index">
      <ul>
        <li v-for="(item,index) of bao1" :key="index">
          <div class="itemimg">
            <div class="bigimg">
              <img :src="item['pic']" alt />
            </div>
            <div class="smallimg">
              <img :src="samllimg" alt />
            </div>
          </div>
          <p class="itemtit">{{item['alias']}}</p>
          <p class="itemliang">{{item['name']}}</p>
          <p class="itemscall">
            <span></span>
            <span></span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  
</style>
