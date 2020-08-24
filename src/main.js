// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import router from './router/index.js'
import { AjaxPlugin,Group,GroupTitle,Icon,ToastPlugin } from 'vux'

// http请求入口
// import './axios/index'

// 全局组件

Vue.use(AjaxPlugin)
Vue.use(VueRouter)
Vue.use(ToastPlugin)
Vue.component('group',Group)
Vue.component('icon', Icon)
Vue.component('group-title',GroupTitle)


FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  router,
  render: h => h(App),
  store //添加存储
}).$mount('#app-box')
