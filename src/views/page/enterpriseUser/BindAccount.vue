<template>
  <div style="margin: 10px;">
      <!-- 账号绑定页面 -->
      <group>
        <cell title="微信号">
          <label style="font-size:13px">{{userModel.openid}}</label>
        </cell>
        <x-input title="用户名" placeholder="请输入用户名" type="text"
        novalidat placeholder-align="right" text-align="right"
        v-model="userModel.user"  :max="16"
        ></x-input>
        
        <x-input title="密码" placeholder="请输入密码" :type="show.type"
        novalidat :show-clear="false" placeholder-align="right" text-align="right"
        v-model="userModel.pass"  :max="16"
        > <img slot="right" :src="show.src" style="padding-left: 10px;padding-top: 2px;" @click="checkType()"/> </x-input>
      </group>
      <group>
        <x-button type="primary" @click.native="bindAccount()">绑定</x-button>
      </group>
      
  </div>
</template>

<script>
import { XInput, XButton, Cell,Box } from 'vux'
import api from '@/axios/api.js'

export default {
  data(){
    return {
      userModel :{
        openid : '',
        user : '',
        pass : '',
      },
      show:{
        type: 'password',
        show : require('@/assets/icon/hidePass.png'),
        hide : require('@/assets/icon/showPass.png'),
        src: require('@/assets/icon/hidePass.png'),
      }
    }
  },
  methods:{
    checkType(){
      switch(this.show.type){
        case 'password' :
          this.show.type = 'text'; this.show.src = this.show.hide; break;
        case 'text' :
          this.show.type = 'password' ; this.show.src = this.show.show; break;
      }
    },
    clearUser(){
      this.userModel.user = ''
    },
    bindAccount(){
      api.bindAccount(this.userModel).then(res =>{
        console.log(res)
      })
    }
  },
  created(){
    let _this = this
    setTimeout(function(){
      _this.userModel.openid = _this.$store.state.userModel.openid
      console.log(_this.$store.state)
    },1000)
  },
  components:{
    XInput, XButton, Cell , XButton , api
  }
}
</script>

<style>

</style>