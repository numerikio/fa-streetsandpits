<template>
  <div class="">
    <h1>list of sreeets</h1>

  </div>
</template>

<script>

  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'Streets',
    data() {
    },
    created() {
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
      loadTableData(isReload) {
        isReload = true
        this.list(isReload)
      },
    }
  }
</script>

<style scoped>

</style>
