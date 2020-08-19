import Vue from 'vue'
import Router from 'vue-router'
import functionAll from '@/components/functionAll'
import myCent from '@/components/myCent.vue'
import orderlist from '@/components/order.vue'
//import tabbar from '@/components/tabbar'

// Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: '功能一览',
		component: functionAll
	}, {
		path: '/orderlist',
		name: '订单查询',
		component: orderlist
	}, {
		path: '/myCent',
		name: '个人中心',
		component: myCent
	}]
})
