<template>
  <el-input v-model="msg"></el-input><br>
  <el-button @click="pop">测试</el-button>
</template>

<script>

import {ElMessage} from "element-plus";

export default{

  data(){
    return{
      msg:'ss'
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