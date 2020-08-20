<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> {{msg}} </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
	<button @click="get"> <h1>按钮</h1></button>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
	name: 'HelloFromVux',
  components: {
    Group,
    Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods:{
	  get(){
		  this.$http.post('/api').then(({data}) => {
		        console.log(data)
		      });
			console.log(this.$route);
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
