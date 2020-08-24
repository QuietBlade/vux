<template>
	<div>
		<group>
			<cell title="我的账户">
				<img slot="icon" width="30" style="display:block;margin-right:5px;" :src="userModel.headimgurl">
				<span class="vertical-middle" > {{userModel.nickname}} </span>
			</cell>
			<cell title="余额" value="0.01"></cell>
			<cell title="用户" >
				<x-button v-if="!userModel.phone" mini type="primary" @click.native="bindUser()"> 绑定用户 </x-button>
				<span v-else> {{ userModel.phone }}</span>
			</cell>
			<cell is-link link="/api/modifyPassword" title="修改密码"> </cell>
			<x-button type="primary" @click.native="bindPhone()">点击事件</x-button>
			<cell title="msg"> {{msg}}</cell>
		</group>
	</div>
	
</template>

<script>
	import {
		XInput,Cell,Badge,XButton
	} from 'vux'

	import api from '../axios/api.js'

	export default {
		data() {
			return {
				msg: 'Hello,world',
				userModel: {
					openid : "",
					phone: "",
					headimgurl : "",
					nickname : "",
				}
			}
		},
		methods:{
			bindUser(){
				// this.$set(this.userModel,'phone','15555555555')
				// api.getAccount({openid : 'test'}).then( response => {
				//	console.log(response.data)
				// })
				
				this.$router.push("/action/bindAccount")
			},
			
		},
		created(){
			// this.userModel = this.$store.state.userModel
			// this.userModel.phone = '15555555555'
			api.getAccount({openid : 'test'}).then( response => {
					this.userModel = response.data
			})
			
		},
		components: {
			XInput,Cell,Badge,XButton
		}
	}
</script>

<style>
</style>
