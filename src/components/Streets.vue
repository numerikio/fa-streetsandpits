<template>
  <div class="">
    <h1>list of sreets</h1>

    <input type="text" v-model="street.name" class="text" />

      <input type="button" class="butn" value="Add street" v-on:click="addSreet(street)">

      <div class="myBox" v-for="item in tableData" :key="item.id">
        <h3> {{item.name}}</h3>
        <ul id="example-2">
          <li v-for="i in item.pitList" :key="i.id">
            {{i.id}}
          </li>
        </ul>
      </div>

  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
  name: 'Streets',
  data () {
    return {
      street: {id: null, name: null, pitList: []}
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
        this.add(street)
        /* street.name = null */
      } else {
        console.log('input err')
      }
    }
  }
}
</script>

<style scoped>

  .myBox {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    width: 150px;
    height: 100px;
    border: 2px solid rgba(15, 255, 126, 0.91);
    -webkit-border-radius: 10px;
    border-radius: 10px;
    font: normal 14px/1 "Times New Roman", Times, serif;
    color: rgba(0,0,0,1);
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }

  .text {
    padding: 9px;
    font-size: 21px;
    border-width: 2px;
    border-color: #2ecc20;
    background-color: #FFFFFF;
    color: #1b1b1b;
    border-style: hidden;
    border-radius: 17px;
    box-shadow: 4px 5px 9px rgba(66,66,66,.75);
    text-shadow: 0px 0px 5px rgba(66,66,66,.75);
  }
  .text:focus {
    outline:none;
  }

  .butn {
    background: #34d95a;
    background-image: -webkit-linear-gradient(top, #34d95a, #3db82b);
    background-image: -moz-linear-gradient(top, #34d95a, #3db82b);
    background-image: -ms-linear-gradient(top, #34d95a, #3db82b);
    background-image: -o-linear-gradient(top, #34d95a, #3db82b);
    background-image: linear-gradient(to bottom, #34d95a, #3db82b);
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    font-family: Arial;
    color: #ffffff;
    font-size: 21px;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
  }

  .butn:hover {
    background: #8af016;
    background-image: -webkit-linear-gradient(top, #8af016, #75e809);
    background-image: -moz-linear-gradient(top, #8af016, #75e809);
    background-image: -ms-linear-gradient(top, #8af016, #75e809);
    background-image: -o-linear-gradient(top, #8af016, #75e809);
    background-image: linear-gradient(to bottom, #8af016, #75e809);
    text-decoration: none;
  }
  .butn:focus {
    outline:none;
  }

</style>
