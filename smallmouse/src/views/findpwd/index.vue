<template>
  <div class="container">
    <van-popup v-model="show" position="bottom" :style="{ height: '100%' }" :duration="0.5">
      <van-nav-bar title="忘记密码" left-text="返回" left-arrow @click-left="onClickBack" />
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
          <van-field v-model="sms" center clearable label="验证码" placeholder="请输入验证码">
            <van-button
              slot="button"
              size="small"
              type="primary"
              @click="sendCode"
              :disabled="btnflag"
              :style="{background: btnColor,borderColor:btnColor}"
            >获取验证码</van-button>
          </van-field>
          <van-field
            v-model="password"
            type="password"
            label="新密码"
            placeholder="请输入密码"
            :right-icon="passwordIcon"
            :error-message="passwordState"
            required
          />
          <!-- :error-message="phoneState" phoneState()通过v-model判断计算属性-->
          <!-- <van-field v-model="sms" center clearable label="验证码" placeholder="请输入短信验证码">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>-->
          <!-- <van-button type="primary" size="normal" :block="true">下一步</van-button> -->
          <van-button
            type="primary"
            size="normal"
            :block="true"
            @click="findpwd"
            :disabled="pwdBtnflag"
            :style="{background: pwdColor,borderColor:pwdColor}"
            :ver="pwdFn()"
          >确认</van-button>
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
      pwdBtnflag: true,
      btnColor: '#ccc',
      pwdColor: '#ccc'
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
      this.$router.back()
    },
    sendCode () {

      fetch("http://106.14.213.84:8000/verify?username=" + this.phone).then(res => res.json()).then(data => {
        // console.log(data);

        if (data === 0) {
          Dialog.confirm({
            title: '提示',
            message: '改用户还未注册是否注册'
          }).then(() => {
            // on confirm
            this.$router.push('/register')
          }).catch(() => {
            // on cancel
          })
        } else if (data === 1) {
          fetch("https://www.daxunxun.com/users/sendCode?tel=" + this.phone)
            .then(res => res.json())
            .then(data => {
              // console.log(data) //获取到的值0,获取失败，1已经注册，其他code
              if (data === 0) {
                Toast('该手机号注册失败')
              } else if (data === 1) {
                Toast('验证码为' + this.code)
              } else {
                Toast('验证码发送成功')
                this.code = data.code
              }
            })
        }
      })
    },
    findpwd () {
      if (this.sms !== this.code) {
        Toast('验证码不对哦')
      } else if (/^1[3456789]\d{9}$/.test(this.phone) && this.password.length > 5 && this.sms.length > 4) {
        fetch("http://106.14.213.84:8000/findpwd", {
          method: 'post',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: "username=" + this.phone + "&newpwd=" + this.password
        }).then(res => res.json()).then(data => {
          // console.log(data);
          if (data === 0) {
            Toast('修改失败');
          } else if (data === 1) {
            Dialog.confirm({
              title: '提示',
              message: '修改成功，是否立即登录'
            }).then(() => {
              // on confirm
              this.$router.push('/login')
            }).catch(() => {
              // on cancel
            })
          }
        })
      }
    },
    btnuseFn () { // 如果输入的手机号符合正则，发送验证码的框框才会可以点击
      if (/^1[3456789]\d{9}$/.test(this.phone)) {
        this.btnflag = false
        this.btnColor = '#07c160'
        this.data1 = ''
      } else {
        this.btnflag = true
        this.btnColor = '#ccc'
      }
    },
    pwdFn () { // 如果输入的手机号符合正则，发送验证码的框框才会可以点击
      if (/^1[3456789]\d{9}$/.test(this.phone) && this.password.length > 5 && this.sms.length > 4) {
        this.pwdBtnflag = false
        this.pwdColor = '#07c160'
        this.data1 = ''
      } else {
        this.pwdBtnflag = true
        this.pwdColor = '#ccc'
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
</style>
