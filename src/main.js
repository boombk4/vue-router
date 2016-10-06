// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VueRouter)
import App from './App'
import Hello from './components/Hello'
import Test from './components/Test'

const router = new VueRouter({
  routes: [
    { path: '/', component: Hello },
    { path: '/test', component: Test }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
