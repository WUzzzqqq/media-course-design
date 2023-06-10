<template>
  <el-input v-model="msg"></el-input><br>
  <el-button @click="pop">测试</el-button>
  <baidu-map :center="center" :zoom="zoom" @ready="handler"></baidu-map>
</template>

<style>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
<script>

import {ElMessage} from "element-plus";

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
    },
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  }
}
</script>