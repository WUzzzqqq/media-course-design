<template>
  <h1>{{ msg }}</h1>
  <input v-model="a">
  <button @click="sub">sss</button>
</template>

<script>
export default{
  data(){
    return{
      msg:'Hello World!',
      a:""
    }
  },
  methods:{
    sub(){
      console.log(this.a);
    }
  }
}
</script>