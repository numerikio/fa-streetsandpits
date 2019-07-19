import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import streets from './modules/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex, BootstrapVue)

export default new Vuex.Store({
  strict: false,
  modules: {
    'streets_module': streets
  }
})
