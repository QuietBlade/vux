<template>
	<div id="app">
		<header-nav :title="this.$route.name" :isShowBack="isShowBack"></header-nav>
		<div class="weui_tab">
			<div class="weui_tab_bd">
				<router-view></router-view>
			</div>
		</div>
		<tabbar></tabbar>
	</div>
</template>

<script>
import Tabbar from '@/components/tabbar.vue'
import headerNav from '@/components/header.vue'
export default {
  components: {
	Tabbar,headerNav
  },
  data(){
	  return{
		isShowBack : true,
	  }
  },
  created(){
	  this.isShowBack = false
	  var res = this.account.getUserAccount1()
	  console.log(res)
  },
  watch:{
	  //监听路由，首页不显示返回按钮
	$route(to,from){
		switch(to.path){
			case '/':
			case '/myCent':
			case '/orderlist': 
				this.isShowBack = false; 
				break;
			default:
				this.isShowBack = true;
				break;
		}
		//设置动态标题
		document.title = '检测院 | ' + to.name;
	}
},
}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';

	body {
		background-color: #fbf9fe;
	}
</style>
