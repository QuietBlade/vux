<template>
	<div id="app">
		<header-nav :title="this.$route.name" :isShowBack="true"></header-nav>
		<router-view></router-view>
		<tabbar></tabbar>
	</div>
</template>

<script>
import Tabbar from './views/tabbar.vue'
export default {
  components: {
	Tabbar
  },
  data(){
	  return{
		
	  }
  }
}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';

	body {
		background-color: #fbf9fe;
	}
</style>
