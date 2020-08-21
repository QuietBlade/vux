<template>
  <div>
      <!-- 账号绑定页面 -->
      <group>
        <group-title> {{ msg }} </group-title>
        <span> {{ userModel.name }} </span>
        <button @click="test()"> 按钮 </button>
      </group>
  </div>
</template>

<script>
//improt 
export default {
  data(){
    return {
      msg : '123456',
      userModel :{
        //name : ''
      }
    }
  },
  methods:{
    test(){
      //console.log(this.msg)
      this.msg = '123'
      this.userModel.name = 'world'
    }
  }
}
</script>

<style>

</style>