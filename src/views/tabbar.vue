<template>
	<div class="view-box">
		<tabbar>
			<tabbar-item selected link="/" @on-item-click="echoPath($event)">
				<img slot="icon" src="../assets/icon/icon_nav_button.png">
				<span slot="label">功能一浏</span>
			</tabbar-item>
			<tabbar-item link="/orderlist" @on-item-click="echoPath($event)" >
				<img slot="icon" src="../assets/icon/icon_nav_article.png">
				<span slot="label">订单查询</span>
			</tabbar-item>
			<tabbar-item link="/myCent" show-dot @on-item-click="echoPath($event)">
				<img slot="icon" src="../assets/icon/icon_nav_cell.png">
				<span slot="label">个人中心</span>
			</tabbar-item>
		</tabbar>
	</div>
</template>

<script>
	import {
		Tabbar,
		TabbarItem
	} from 'vux'
	export default {
		components: {
			Tabbar,
			TabbarItem,
		},
		methods:{
			echoPath(enevt){
				// console.log(enevt)
			}
		}
	}
</script>
