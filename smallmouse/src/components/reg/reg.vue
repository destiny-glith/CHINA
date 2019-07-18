<template>
  <div>
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
        <van-button type="primary" size="normal" :block="true">下一步</van-button>
      </van-cell-group>
    </div>
  </div>
</template>