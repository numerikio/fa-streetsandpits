import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
export const HTTP = axios.create({
  baseURL: 'http://localhost:8082/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf8'
  },
  responseEncoding: 'utf8'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
