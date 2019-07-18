import Vue from 'vue'
import Router from 'vue-router'
import Streets from '../components/Streets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Streets',
      component: Streets
    }
  ]
})
