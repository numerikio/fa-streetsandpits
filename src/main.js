// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(VueAxios, axios)

export const HTTP = axios.create({
  baseURL: Vue.prototype.$baseHost + 'crm',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf8'
  },
  responseEncoding: 'utf8'
})

HTTP.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
HTTP.interceptors.response.use(function (response) {
  return response
}, function (error) {
  console.log(error)
  if (error.response.status === 401) {
    if (Vue.prototype.$baseHost.includes('cloud') || Vue.prototype.$baseHost.includes('itua')) {
      window.location.reload()
    }
  }
  return Promise.reject(error)
})
