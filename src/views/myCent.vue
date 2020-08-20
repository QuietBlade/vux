<template>
	<div>
		<group>
			<cell title="我的账户">
				<span class="vertical-middle" >  </span>
			</cell>
			<cell title="余额" value="0.01"></cell>
			<cell is-link link="/api/modifyPhone" :value="userModel.phone" title="电话号码" >
				<badge v-if="userModel.phone.length == 0"></badge>
			</cell>
			<cell is-link link="/api/modifyPassword" title="修改密码"> </cell>
			<button  @click="test()"> 测试 </button>
		</group>
	</div>
	
</template>

<script>
	import {
		XInput,Cell,Badge
	} from 'vux'
	
	export default {
		data() {
			return {
				msg: 'Hello,world',
				userModel: {
					'phone': '',
					'verycode': '',
					'wxopenID': '',
				}
			}

		},
		methods:{
			test(){
				// this.$store.commit('increment')
				console.log(this.account.getUserAccount());
				// console.log(this.$store.state)
			}
			
		},
		created(){
			//this.userModel = ;
		},
		components: {
			XInput,Cell,Badge
		}
	}
</script>

<style>
</style>
