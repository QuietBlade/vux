import Vuex from 'vuex'
import Router from 'vue-router'
import Vue from 'vue'
import store from '../store'

import functionAll from '@/views/functionAll'
import myCent from '@/views/myCent.vue'
import orderlist from '@/views/order.vue'
import BindAccount from '@/views/page/enterpriseUser/BindAccount.vue'


Vue.use(Router)

const routes = [{
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
},{
	path: '/action/BindAccount',
	name: '绑定账户',
	component: BindAccount
}]

const router = new Router({
	routes // (缩写) 相当于 routes: routes
})

router.beforeEach(function (to, from, next) {
	// store.commit('updateLoadingStatus', {isLoading: true})
	// console.log(store.state)
	if( to.path != '/myCent' )
		if ( to.meta.token == undefined ){
			// router.push("/myCent")
		}
 	next()
})

router.afterEach(function (to) {
	// store.commit('updateLoadingStatus', {isLoading: false})
})

export default router