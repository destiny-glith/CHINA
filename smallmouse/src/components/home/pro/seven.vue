<template>
  <van-tabs @click="onClick">
    <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
  </van-tabs>
</template>

<script>
export default {
  props: {
    tip: {
      type: String
    }
  },
  methods: {
    onClick(name, title) {
      console.log(title);
      
    }
  }
}
</script>