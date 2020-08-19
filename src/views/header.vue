<template>
	<x-header slot="header" style="width:100%;left:0;top:0;z-index:100;" :title="title"
	 :left-options="{showBack: isShowBack}">
	</x-header>
</template>

<script>
	import {
		XHeader
	} from 'vux'
	export default {
		data() {
			return {
				ShowNav: true,
				//showBack: true,
			}
		},
		props: ['title','isShowBack'],
		components: {
			XHeader,
		},
	}
</script>
