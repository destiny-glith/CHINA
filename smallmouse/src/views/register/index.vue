<template>
  <div class="container">
    <van-popup v-model="show" position="bottom" :style="{ height: '100%' }" :duration="min">
      <van-nav-bar
        title="注册"
        left-text="返回"
        right-text="登录"
        left-arrow
        @click-left="onClickBack"
        @click-right="onClickLgin"
      />
      <div class="main">
        <van-cell-group>
          <van-field
            v-model="phone"
            required
            clearable
            label="手机号"
            :right-icon="phonIcon"
            placeholder="请输入手机号"
            :error-message="phoneState"
          />
          <!-- :error-message="phoneState" phoneState()通过v-model判断计算属性-->
          <van-field v-model="sms" center clearable label="验证码" placeholder="请输入短信验证码">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
          <van-button type="primary" size="normal" block="true">下一步</van-button>
        </van-cell-group>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Button, Field, Popup, Cell, CellGroup } from 'vant'
import { Icon } from 'vant'
Vue.use(NavBar) // 头部nav
Vue.use(Field) // input用户密码库
Vue.use(Button) // 按钮
Vue.use(Icon) // 提示icon
Vue.use(Popup) //弹出
Vue.use(Cell).use(CellGroup)

export default {
  data () {
    return {
      phone: '',
      show: false,
      sms: '',
      min: 0.5
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.show = true
    })
  },
  computed: {
    phoneState () {
      if (this.phone === "") {
        return ""
      } else if (!(/^1[3456789]\d{9}$/.test(this.phone))) {
        return "手机号格式错误"
      } else {
        return ""
      }
    },
    phonIcon () {
      if (this.phone === "") {
        return ""
      } else if (/^1[3456789]\d{9}$/.test(this.phone)) {
        return "passed"
      } else {
        return ""
      }
    }
  },
  methods: {
    onClickBack () { // 事件返回
      this.$router.back()
    },
    onClickLgin () { // 事件登录
      console.log('121')
    }
  }
}
</script>

<style lang="scss">
</style>
