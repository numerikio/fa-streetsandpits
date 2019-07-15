import {HTTP} from '../../../main'

const state = {
 // url: '/street/',
  url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
  tableData: [],
  itemDefault: null,
  loading: false,
  isShowForm: false
}

const getters = {
}

const actions = {
  list ({commit, state}, isReload) {
    if (state.tableData.length === 0 || isReload) {
      commit('SET_IS_LOADING', true)
      HTTP.get(state.url).then((response) => {
        commit('SET_TABLE_DATA', response.data)
      }).catch(e => {
      }).finally(() => (
        commit('SET_IS_LOADING', false)
      ))
    }
  },
  add ({state, commit}, payload) {
    commit('SET_IS_LOADING', true)
    HTTP.post(state.url, payload).then((response) => {
      commit('ADD', response.data)
    }).catch(e => {
    }).finally(() => {
      commit('SET_IS_LOADING', false)
      commit('SET_IS_SHOW_FORM', false)
    })
  },
  edit ({state, commit}, payload) {
    commit('SET_IS_LOADING', true)
    HTTP.put(state.url, payload).then((response) => {
      commit('EDIT', response.data)
    }).catch(e => {
    }).finally(() => {
      commit('SET_IS_LOADING', false)
      commit('SET_IS_SHOW_FORM', false)
    })
  },
  remove ({state, commit}, payload) {
    commit('SET_IS_LOADING', true)
    HTTP.put(state.url, payload).then((response) => {
      commit('REMOVE', response.data)
    }).catch(e => {
    }).finally(() => (
      commit('SET_IS_LOADING', false)
    ))
  }
}

const mutations = {
  SET_ITEM_DEFAULT (state, payload) {
    state.itemDefault = payload
  },
  SET_IS_SHOW_FORM (state, payload) {
    state.isShowForm = payload
  },
  SET_IS_LOADING (state, payload) {
    state.loading = payload
  },
  SET_TABLE_DATA (state, payload) {
    if (payload !== '' && payload !== null && payload !== undefined) {
      state.tableData = payload
    } else {
      state.tableData = []
    }
  },
  ADD (state, payload) {
    state.tableData.push(payload)
  },
  EDIT (state, payload) {
    let index = state.tableData.indexOf(state.tableData.find(todo => todo.id === payload.id))
    Object.assign(state.tableData[index], payload)
  },
  REMOVE (state, payload) {
    let index = state.tableData.indexOf(state.tableData.find(todo => todo.id === payload.id))
    Object.assign(state.tableData[index], payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
