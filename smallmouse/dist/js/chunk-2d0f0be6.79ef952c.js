(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0be6"],{"9e59":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("van-popup",{style:{height:"100%"},attrs:{position:"bottom",duration:.5},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("van-nav-bar",{attrs:{title:"忘记密码","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickBack}}),n("div",{staticClass:"main",attrs:{verify:t.btnuseFn()}},[n("van-cell-group",[n("van-field",{attrs:{required:"",clearable:"",label:"手机号","right-icon":t.phonIcon,placeholder:"请输入手机号","error-message":t.phoneState},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),n("van-field",{attrs:{center:"",clearable:"",label:"验证码",placeholder:"请输入验证码"},model:{value:t.sms,callback:function(e){t.sms=e},expression:"sms"}},[n("van-button",{style:{background:t.btnColor,borderColor:t.btnColor},attrs:{slot:"button",size:"small",type:"primary",disabled:t.btnflag},on:{click:t.sendCode},slot:"button"},[t._v("获取验证码")])],1),n("van-field",{attrs:{type:"password",label:"新密码",placeholder:"请输入密码","right-icon":t.passwordIcon,"error-message":t.passwordState,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("van-button",{style:{background:t.pwdColor,borderColor:t.pwdColor},attrs:{type:"primary",size:"normal",block:!0,disabled:t.pwdBtnflag,ver:t.pwdFn()},on:{click:t.findpwd}},[t._v("确认")])],1)],1)],1)],1)},s=[],a=(n("c194"),n("7744")),r=(n("0653"),n("34e9")),i=(n("e7e5"),n("d399")),c=(n("e17f"),n("2241")),l=(n("8a58"),n("e41f")),d=(n("c3a6"),n("ad06")),h=(n("66b9"),n("b650")),u=(n("be7f"),n("565f")),p=(n("5246"),n("6b41")),f=n("2b0e");f["a"].use(p["a"]),f["a"].use(u["a"]),f["a"].use(h["a"]),f["a"].use(d["a"]),f["a"].use(l["a"]),f["a"].use(c["a"]),f["a"].use(i["a"]),f["a"].use(a["a"]).use(r["a"]);var b={data:function(){return{phone:"",password:"",show:!1,sms:"",code:"a*a*a*",btnflag:!0,pwdBtnflag:!0,btnColor:"#ccc",pwdColor:"#ccc"}},beforeRouteEnter:function(t,e,n){n(function(t){t.show=!0})},methods:{onClickBack:function(){this.$router.back()},sendCode:function(){var t=this;fetch("http://106.14.213.84:8000/verify?username="+this.phone).then(function(t){return t.json()}).then(function(e){0===e?c["a"].confirm({title:"提示",message:"改用户还未注册是否注册"}).then(function(){t.$router.push("/register")}).catch(function(){}):1===e&&fetch("https://www.daxunxun.com/users/sendCode?tel="+t.phone).then(function(t){return t.json()}).then(function(e){0===e?Object(i["a"])("该手机号注册失败"):1===e?Object(i["a"])("验证码为"+t.code):(Object(i["a"])("验证码发送成功"),t.code=e.code)})})},findpwd:function(){var t=this;this.sms!==this.code?Object(i["a"])("验证码不对哦"):/^1[3456789]\d{9}$/.test(this.phone)&&this.password.length>5&&this.sms.length>4&&fetch("http://106.14.213.84:8000/findpwd",{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"username="+this.phone+"&newpwd="+this.password}).then(function(t){return t.json()}).then(function(e){0===e?Object(i["a"])("修改失败"):1===e&&c["a"].confirm({title:"提示",message:"修改成功，是否立即登录"}).then(function(){t.$router.push("/login")}).catch(function(){})})},btnuseFn:function(){/^1[3456789]\d{9}$/.test(this.phone)?(this.btnflag=!1,this.btnColor="#07c160",this.data1=""):(this.btnflag=!0,this.btnColor="#ccc")},pwdFn:function(){/^1[3456789]\d{9}$/.test(this.phone)&&this.password.length>5&&this.sms.length>4?(this.pwdBtnflag=!1,this.pwdColor="#07c160",this.data1=""):(this.pwdBtnflag=!0,this.pwdColor="#ccc")}},computed:{phoneState:function(){return""===this.phone?"":/^1[3456789]\d{9}$/.test(this.phone)?"":"手机号格式错误"},phonIcon:function(){return""===this.phone?"":/^1[3456789]\d{9}$/.test(this.phone)?"passed":""},passwordIcon:function(){return""===this.password?null:this.password.length>5?"passed":void 0},passwordState:function(){return""===this.password?null:this.password.length<5?"密码长度不能小于5":null}}},w=b,m=n("2877"),g=Object(m["a"])(w,o,s,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d0f0be6.79ef952c.js.map