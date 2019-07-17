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
              <span class="iconfont icon-tubiaolunkuo-" id="icon"></span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tip: {
      type: String
    }
  },
  methods: {
    goDetail (val) {
      this.$router.push({name:'detail' ,params:{id :val} })
      // this.$router.push('/detail/' + id) //id由函数获得
      // this.$router.push({ name: 'detail', params: { id: id } }) // 另一种方法
      // this.$router.push({ path: '/detail/' + id }) // 另一种方法
    }
  },
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
      namelists: []
    }
  },
  mounted () {
    fetch('http://10.11.56.226:8000/getkind').then(res => res.json()).then((data) => {
      // console.log(this.tip)
      this.samllimg = data[0]['data']['floors'][0]['products'][0]['tags'][0]['pic']
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
