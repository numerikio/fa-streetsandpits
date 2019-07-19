<template>
  <div>
    <b-container>
      <h1>list of sreets</h1>
      <b-form-input v-model="street.name"></b-form-input>
      <b-button v-on:click="addSreet(street)">Add street</b-button>
    </b-container>
    <br>
    <b-container :key="item.id" class="" v-for="item in tableData">
      <div class="bg bg-secondary">
        <h3> {{item.name}}</h3>
        <b-button v-on:click="addTip(item)" variant="warning">add pit <span class="badge badge-light">{{item.pitList.length}}</span>
        </b-button>

        <b-button v-b-modal="modalId(item.id)" variant="info">details</b-button>

        <b-modal :id="'modal' + item.id" :title="item.name">
          <div :key="i.id" v-for="i in item.pitList">
            {{i.id}}<b-button variant="danger" v-on:click="deletePit(i)">delete</b-button>
          </div>
        </b-modal>
      </div>
      <br>
    </b-container>

  </div>

</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Streets',
  data () {
    return {
      street: {
        id: null,
        name: null,
        pitList: []
      }
    }
  },
  created () {
    this.loadTableData(false)
  },
  computed: {
    ...mapState('streets_module/streets', {
      tableData: 'tableData',
      itemDefault: 'itemDefault',
      loading: 'loading',
      isShowFormAddOrEdit: 'isShowForm'
    })
  },
  methods: {
    ...mapActions('streets_module/streets', {
      list: 'list',
      add: 'add',
      edit: 'edit',
      remove: 'remove'
    }),

    loadTableData (isReload) {
      isReload = true
      this.list(isReload)
    },
    addSreet (street) {
      if (street.name !== null) {
        console.log(street.name)
        this.add(street)
      } else {
        console.log('input err')
      }
    },
    addTip (item) {
      this.edit(item.id)
    },
    deletePit (i) {
      this.remove(i.id)
    },
    modalId (i) {
      return 'modal' + i
    }
  }
}
</script>

<style scoped>

  h3 {
    color: white;

  }

</style>
