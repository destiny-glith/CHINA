<template>
  <div>{{tip}}</div>
</template>

<script>
import { log } from 'util';
export default {
  data () {
    return {

    }
  },
  props:['tip'],
  mounted () {
    fetch('http://10.11.56.226:8000/rob').then(res => res.json()).then(data => {
      // console.log(data);
      
    })
  },
}
</script>