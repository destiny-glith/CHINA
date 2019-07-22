<template>
  <div>
    <!-- 第一张图片 -->
    <div class="index_banner">
      <img :src="index_banner" alt />
    </div>
    <!-- 标题 -->
    <div v-for="(item,index) of namelists" :key="index">
      <div class="main_floor">
        <div class="hezi"></div>
        <p>{{item['title']}}</p>
      </div>

      <div class="main_index">
        <ul>
          <li v-for="(itm,idx) of item['products']" :key="idx" @click="goDetail(itm['productId'])">
            <div class="itemimg">
              <div class="bigimg">
                <img :src="itm['pic']" alt />
              </div>
              <div class="smallimg">
                <img :src="samllimg" alt />
              </div>
            </div>
            <p class="itemtit">{{itm['alias']}}</p>
            <p class="itemliang">{{itm['name']}}</p>
            <p class="itemscall">
              <span class="redfont">{{itm['salesPrice']}}</span>
              <span class="oldfont">{{itm['marketPrice']}}</span>
              <span
                class="iconfont icon-tubiaolunkuo-"
                id="icon"
                @click="sendState(itm['pic'],itm['name'],itm['salesPrice'],itm['productId'],$event,flag=true)"
              ></span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)

export default {
  data () {
    return {
      index_banner: '',
      main_floor: '',
      bao1: [],
      bigimg: '',
      samllimg: '',
      itemtit: '',
      // type: ''
      itemliang: '',
      itemsacll: '',
      namelists: [],
      // num: 1
      obj: {},
      lis: [],
      userinfo: this.$store.state.userInfo

    }
  },
  props: {
    tip: {
      type: String,

    }
  },
  methods: {
    goDetail (val) {
      this.$router.push({ name: 'detail', params: { id: val } })
      // this.$router.push('/detail/' + id) //id由函数获得
      // this.$router.push({ name: 'detail', params: { id: id } }) // 另一种方法
      // this.$router.push({ path: '/detail/' + id }) // 另一种方法
    },
    sendState (pic, name, sale, proid, enent, flag) {
      event.stopPropagation()
      if (this.$store.state.loginState === "ok") {
        let result = { pic, name, sale, proid, flag, num }
        if (!localStorage.getItem('cars')) { //1如果触发时没有本地数据 就将新创建的对象obj和新创建的lis购物车作为新的放进本地
          this.lis.push(result)
          this.obj[this.userinfo] = this.lis
          localStorage.setItem('cars', JSON.stringify(this.obj))
        } else { // 2否则就是有本地  如果有本地 下一步
          let dic = JSON.parse(localStorage.getItem('cars'))
          if (dic[this.userinfo] !== undefined) { // 2.1如果本地obj[此时的用户] ！==undefined 说明这个用户里的购物车有数据
            this.lis = dic[this.userinfo] //有数据就将老数据赋值给 购物车lis
            let flag = false
            this.lis.map(item => { // 循环老数据，看老数据里的名字与 新添加的 result名字是否有重复
              if (item.name === result.name) {  //2.1.1如果有重复就将老数据的num+1
                item.num += 1
                flag = true //2.1.2并且给flag赋值true 让外面的购物车不要添加进去
              }
            })
            if (!flag) { // 2.1.3如果flag等于flase就说明老数据没有此商品，正常添加
              this.lis.push(result)
              flag = false
            }
            dic[this.userinfo] = this.lis // 最后一步 重新赋值给dic对象
            localStorage.setItem('cars', JSON.stringify(dic)) //解析
          } else {
            this.lis.push(result) //2.2如果老数据里没有这个账户。就说明他没有购物车数据，此时就要重新给他添加数据了
            dic[this.userinfo] = this.lis
            localStorage.setItem('cars', JSON.stringify(dic))
          }
        }
        Toast('成功加入购物车')
      } else {
        this.$router.push('/login')
      }
    }
  },
  mounted () {
    fetch('http://106.14.213.84:8000/getkind').then(res => res.json()).then((data) => {
      // console.log(data[0])
      this.samllimg = data[0]['data']['floors'][0]['products'][0]['tags'][0]['pic']
      // console.log(this.samllimg);
      if (this.tip === '肉脯/海鲜') {
        this.index_banner = data[0]['data']['banner']['pic'] // 第一张图
        this.main_floor = data[0]['data']['floors'][0]['title'] // 标题
        let bao = data[0]['data']['floors'][0]['products']
        for (let a = 0; a < bao.length; a++) { // 循环遍历
          this.bao1.push(bao[a])
        }
        // console.log(this.bao1)
        let namelist = data[0]['data']['floors']
        // 拿出数据一123二233434三7787878,v-for嵌套循环（item，index）of this.namelists,(itm,idx) of item.**
        for (let o = 0; o < namelist.length; o++) {
          this.namelists.push(namelist[o])
        }
      }
      if (this.tip === '坚果/果干') {
        this.index_banner = data[1]['data']
        // console.log(this.index_banner)
        this.index_banner = data[1]['data']['banner']['pic'] // 第一张图
        this.main_floor = data[1]['data']['floors'][0]['title'] // 标题
        let bao = data[1]['data']['floors'][0]['products']
        for (let a = 0; a < bao.length; a++) { // 循环遍历
          this.bao1.push(bao[a])
        }
        // console.log(this.bao1)
        let namelist = data[1]['data']['floors']
        // 拿出数据一123二233434三7787878，v-for嵌套循环（item，index）of this.namelists,(itm,idx) of item.**
        for (let o = 0; o < namelist.length; o++) {
          this.namelists.push(namelist[o])
        }
      }
      if (this.tip === '量贩组合') {
        this.index_banner = data[2]['data']
        // console.log(this.index_banner)
        this.index_banner = data[2]['data']['banner']['pic'] // 第一张图
        this.main_floor = data[2]['data']['floors'][0]['title'] // 标题
        let bao = data[2]['data']['floors'][0]['products']
        for (let a = 0; a < bao.length; a++) { // 循环遍历
          this.bao1.push(bao[a])
        }
        // console.log(this.bao1)
        let namelist = data[2]['data']['floors']
        // 拿出数据一123二233434三7787878，v-for嵌套循环（item，index）of this.namelists,(itm,idx) of item.**
        for (let o = 0; o < namelist.length; o++) {
          this.namelists.push(namelist[o])
        }
      }
      if (this.tip === '休闲零食') {
        this.index_banner = data[3]['data']
        // console.log(this.index_banner)
        this.index_banner = data[3]['data']['banner']['pic'] // 第一张图
        this.main_floor = data[3]['data']['floors'][0]['title'] // 标题
        let bao = data[3]['data']['floors'][0]['products']
        for (let a = 0; a < bao.length; a++) { // 循环遍历
          this.bao1.push(bao[a])
        }
        // console.log(this.bao1)
        let namelist = data[3]['data']['floors']
        // 拿出数据一123二233434三7787878，v-for嵌套循环（item，index）of this.namelists,(itm,idx) of item.**
        for (let o = 0; o < namelist.length; o++) {
          this.namelists.push(namelist[o])
        }
      }
      if (this.tip === '潮礼') {
        this.index_banner = data[4]['data']
        console.log(this.index_banner)
        this.index_banner = data[4]['data']['banner']['pic'] // 第一张图
        this.main_floor = data[4]['data']['floors'][0]['title'] // 标题
        let bao = data[4]['data']['floors'][0]['products']
        for (let a = 0; a < bao.length; a++) { // 循环遍历
          this.bao1.push(bao[a])
        }
        // console.log(this.bao1)
        let namelist = data[4]['data']['floors']
        // 拿出数据一123二233434三7787878，v-for嵌套循环（item，index）of this.namelists,(itm,idx) of item.**
        for (let o = 0; o < namelist.length; o++) {
          this.namelists.push(namelist[o])
        }
      }
      if (this.tip === '茶饮') {
        this.index_banner = data[5]['data']
        console.log(this.index_banner)
        this.index_banner = data[5]['data']['banner']['pic'] // 第一张图
        this.main_floor = data[5]['data']['floors'][0]['title'] // 标题
        let bao = data[5]['data']['floors'][0]['products']
        for (let a = 0; a < bao.length; a++) { // 循环遍历
          this.bao1.push(bao[a])
        }
        let namelist = data[5]['data']['floors']
        // 拿出数据一123二233434三7787878，v-for嵌套循环（item，index）of this.namelists,(itm,idx) of item.**
        for (let o = 0; o < namelist.length; o++) {
          this.namelists.push(namelist[o])
        }
      }
      if (this.tip === '周边') {
        this.index_banner = data[4]['data']
        // console.log(this.index_banner)
        this.index_banner = data[6]['data']['banner']['pic'] // 第一张图
        this.main_floor = data[6]['data']['floors'][0]['title'] // 标题
        let bao = data[6]['data']['floors'][0]['products']
        for (let a = 0; a < bao.length; a++) { // 循环遍历
          this.bao1.push(bao[a])
        }
        // console.log(this.bao1)
        let namelist = data[6]['data']['floors']
        // 拿出数据一123二233434三7787878,v-for嵌套循环（item，index）of this.namelists,(itm,idx) of item.**
        for (let o = 0; o < namelist.length; o++) {
          this.namelists.push(namelist[o])
        }
      }
    })
  }
}
</script>

<style lang="scss">
</style>
