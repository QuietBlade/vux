<template>
	<div>
		<group>
			<cell title="我的账户">
				<img slot="icon" width="30" style="display:block;margin-right:5px;" :src="userModel.headimgurl">
				<span class="vertical-middle" > {{userModel.nickname}} </span>
			</cell>
			<cell title="余额" value="0.01"></cell>
			<cell title="电话号码" >
				<x-button v-if="!userModel.phone" mini type="primary" @click.native="bindPhone()"> 绑定手机 </x-button>
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
	
	import { Toast  } from "vux";
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
			bindPhone(){
				// this.$set(this.userModel,'phone','15555555555')
				api.getAccount({openid : 'test'}).then( response => {
					console.log(response.data)
				})
			},
		},
		created(){
			this.userModel = this.$store.state.userModel
			this.userModel.phone = '15555555555'

			// console.log(this.$store.state.userModel)
			
			// this.userModel = this.$store.state.userModel
			// this.$set(this.userModel,'phone','15555555555')
			//this.msg = "123"
			// console.log(typeof this.$store.state.userModel)
			
		},
		components: {
			XInput,Cell,Badge,XButton,Toast
		}
	}
</script>

<style>
</style>
