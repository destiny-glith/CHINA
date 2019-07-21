<template>
  <div class="container">
    <van-popup v-model="show" position="bottom" :style="{ height: '100%' }" :duration="0.5">
      <van-nav-bar title="登录" left-text="返回" left-arrow @click-left="onClickBack" />
      <div class="main" :verify="btnuseFn()">
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
          <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            :right-icon="passwordIcon"
            :error-message="passwordState"
            required
          />
          <!-- <van-button type="primary" size="normal" :block="true">下一步</van-button> -->
          <van-button
            type="primary"
            size="normal"
            :block="true"
            @click="login"
            :disabled="btnflag"
            :style="{background: btnColor,borderColor:btnColor}"
          >登录</van-button>
          <div class="logintog">
            <router-link to="/register" tag="span">快速注册</router-link>
            <router-link to="/findpwd" tag="span">忘记密码?</router-link>
          </div>
        </van-cell-group>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Button, Field, Popup, Cell, CellGroup } from 'vant'
import { Icon } from 'vant'
import { Dialog } from 'vant'
import { Toast } from 'vant'
Vue.use(NavBar) // 头部nav
Vue.use(Field) // input用户密码库
Vue.use(Button) // 按钮
Vue.use(Icon) // 提示icon
Vue.use(Popup) //弹出
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(Cell).use(CellGroup)

export default {
  data () {
    return {
      phone: '',
      password: '',
      show: false,
      sms: '',
      code: 'a*a*a*',
      btnflag: true,
      btnColor: '#ccc'
      // min: 0.5
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.show = true
    })
  },
  methods: {
    onClickBack () { // 事件返回
      this.$router.go(-2)
    },
    login () {
      if (/^1[3456789]\d{9}$/.test(this.phone) && this.password.length > 5) {
        fetch("http://localhost:8000/login", {
          method: 'post',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: "username=" + this.phone + "&password=" + this.password
        }).then(res => res.json()).then(data => {
          // console.log(data)
          if (data === 1) {
            this.$router.back()
            // localStorage.setItem('isLogin', 'ok')
            // this.$store.commit('changeLoginSatate', 'ok') // 1
            this.$store.commit('changeLoginSatate', { result: 'ok' })// 提交用户账号到状态管理器
            this.$store.commit('addUserInfo', { result: this.phone })// 登录成功提交用户账号到状态管理器
            // this.$store.commit({ // 3
            //   type:'changeLoginSatate', 
            //   result : 'ok'})
            // this.$store.commit({ // 4
            //   type: CHANGE_LOGIN_STATE,
            //   result: 'ok'            })
          } else if (data === 0) {
            Dialog.confirm({
              title: '提示',
              message: '改用户还未注册是否注册'
            }).then(() => {
              // on confirm
              this.$router.push('/register')
            }).catch(() => {
              // on cancel
            })
          } else if (data === 2) {
            Toast('密码错误')
          }
        })
      }
    },
    btnuseFn () { // 如果输入的手机号符合正则，发送验证码的框框才会可以点击
      if (/^1[3456789]\d{9}$/.test(this.phone) && this.password.length > 5) {
        this.btnflag = false
        this.btnColor = '#07c160'
        this.data1 = ''
      } else {
        this.btnflag = true
        this.btnColor = '#ccc'
      }
    }
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
    },
    passwordIcon () {
      if (this.password === '') {
        return null
      }
      if (this.password.length > 5) {
        return 'passed'
      }
    },
    passwordState () {
      if (this.password === '') {
        return null
      }
      if (this.password.length < 5) {
        return '密码长度不能小于5'
      } else {
        return null
      }
    }
  }
}
</script>

<style lang="scss">
.logintog {
  height: 0.3rem;
  width: 100%;
  // background-color: red;
  display: flex;
  justify-content: space-between;
  padding: 0 0.07rem;
  align-items: center;
  span {
    font-size: 0.12rem;
  }
}
</style>
