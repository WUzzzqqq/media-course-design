<template>
  <el-input v-model="msg"></el-input><br>
  <el-button @click="pop">测试</el-button>
  <b-map height="100vh" :enable-scroll-wheel-zoom="true">
    <b-zoom></b-zoom>
    <b-scale></b-scale>
    <b-location anchor="BMAP_ANCHOR_TOP_RIGHT"></b-location>
  </b-map>
</template>

<style>
</style>
<script>

import {ElMessage} from "element-plus"


export default{

  data(){
    return{
      msg:'ss',
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods:{
    pop(){

      ElMessage({
        message: '你好,'+this.msg,
        type: 'info'
      })
    }
  }
}
</script>