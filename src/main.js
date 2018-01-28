// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
Vue.use(Element)
import 'font-awesome/css/font-awesome.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
import layout from './components/layout'
import IndexPage from './pages/index'

Vue.config.productionTip = false

//实例化 VueRouter
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    layout
  },

  template: '<layout/>'

})
