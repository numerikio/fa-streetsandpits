import Vue from 'vue'
import Vuex from 'vuex'

import streets from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  modules: {
    'streets_module': streets
  }
})
