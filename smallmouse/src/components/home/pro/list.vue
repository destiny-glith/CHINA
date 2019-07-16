<template>
  <div class="prolist">
    <div class="list">
      <ul>
        <li @click="type = 'v-a'">推荐</li>
        <li @click="type = 'v-b'">坚果/果干</li>
        <li @click="type = 'v-c'">量版组合</li>
        <li @click="type = 'v-d'">肉铺/海鲜</li>
        <li @click="type = 'v-e'">休闲食品</li>
        <li @click="type = 'v-f'">潮礼</li>
        <li @click="type = 'v-g'">茶饮</li>
        <li @click="type = 'v-h'">周边</li>
      </ul>
    </div>
    <component :is="type"></component>
  </div>
</template>

<script>
import One from '@/components/home/pro/one.vue'
import Two from '@/components/home/pro/two.vue'
import Three from '@/components/home/pro/three.vue'
import Four from '@/components/home/pro/four.vue'
import Five from '@/components/home/pro/five.vue'
import Six from '@/components/home/pro/six.vue'
import Seven from '@/components/home/pro/seven.vue'
import Eight from '@/components/home/pro/eight.vue'

export default {
  data () {
    return {
      type: 'v-a'
    }
  },
  components: {
    'v-a': One,
    'v-b': Two,
    'v-c': Three,
    'v-d': Four,
    'v-e': Five,
    'v-f': Six,
    'v-g': Seven,
    'v-h': Eight
  }
}
</script>

<style lang="scss">
.prolist {
  width: 100%;
  height: auto;
  .list {
    width: 100%;
    height: 0.4rem;
    ul {
      width: 150%;
      height: 0.4rem;
      overflow-x: auto;
      li {
        height: 100%;
        width: auto;
        float: left;
      }
    }
  }
}
</style>
