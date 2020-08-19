<template>
  <div>
	<group-title>样品</group-title>
    <grid :cols="cols" >
      <grid-item label="Grid" v-for="menus in menu">
        <img slot="icon" src="../assets/icon/icon_nav_button.png" :label="menus.label">
      </grid-item>
    </grid>
	<group-title>企业</group-title>
	<grid :cols="cols" >
	  <grid-item label="Grid" v-for="menus in menu">
	    <img slot="icon" src="../assets/icon/icon_nav_button.png" :label="menus.label">
	  </grid-item>
	</grid>
  </div>
</template>

<script>
import { Grid, GridItem ,GroupTitle } from 'vux'

export default {
  components: {
    Grid,
    GridItem,
	GroupTitle
  },
  data(){
	  return{
		  cols : 4,
		  menu:[
			  {icon: '',label: '标题1',link : '/redir'},
			  {icon: '',label: '标题2',link : '/redir'},
			  {icon: '',label: '标题3',link : '/redir'},
			  {icon: '',label: '标题4',link : '/redir'},
			  {icon: '',label: '标题5',link : '/redir'},
			  {icon: '',label: '标题6',link : '/redir'},
			  {icon: '',label: '标题7',link : '/redir'},
			  {icon: '',label: '标题8',link : '/redir'},
			  {icon: '',label: '标题9',link : '/redir'},
			  {icon: '',label: '标题10',link : '/redir'},
		  ],
	  }
  }
}

</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
