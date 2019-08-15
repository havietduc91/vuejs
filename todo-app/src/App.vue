<template>
  <div id="app">
    <AppNavigation v-sticky></AppNavigation>
    <a href="#" v-scroll-to="'#element'">Scroll to #element</a>
    <TotalPriceComponent/>
    <StackColumnChart></StackColumnChart>
    <BaseStackedBarChart></BaseStackedBarChart>
    <InvoiceWrapperLayout type="charge_list" />
    <!--<InvoiceWrapperLayout type="invoice_detail" />-->
    <TodoList v-bind:todos="todos" />
    <CreateTodo v-on:add-todo="addTodo" />
    <div class="hello" ref="chartdiv"></div>
    <BasePieChart />
    <BaseXYChart />
    <BaseAlert show>Default Alert</BaseAlert>
    <BaseCounter />
    <SampleForm/>
    <SampleTable style="margin-top: 20px;"/>

    <div id="element">
      Hi. I'm #element. {{ message }}
    </div>
    <AppNavigation v-sticky:bottom />
  </div>
</template>
<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

// Commpn component
import AppNavigation from './components/common/AppNavigation'

// Todo list samples
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'
import { mapGetters } from 'vuex'

// Am charts samples
import BasePieChart from './components/charts/BasePieChart'
import BaseStackedBarChart from './components/charts/BaseStackedBarChart'
import BaseXYChart from './components/charts/BaseXYChart'
import StackColumnChart from './components/charts/StackColumnChart'

// Vue boostrap samples
import BaseAlert from './components/boostrap-samples/BaseAlert'
import SampleForm from './components/SampleForm'
import SampleTable from './components/boostrap-samples/BaseTable'

// Invoice application
import InvoiceWrapperLayout from './components/invoice/InvoiceWrapperLayout'
import TotalPriceComponent from './components/price/TotalPriceComponent'

// Base counter component
import BaseCounter from './components/BaseCounter'

Vue.use(VueScrollTo)

export default {
  name: 'app',
  components: {
    AppNavigation,
    TodoList,
    CreateTodo,
    StackColumnChart,
    BasePieChart,
    BaseStackedBarChart,
    BaseXYChart,
    BaseAlert,
    SampleForm,
    SampleTable,
    InvoiceWrapperLayout,
    TotalPriceComponent,
    BaseCounter
  },
  methods: {
    addTodo (todo) {
      this.todos.push(todo)
    }
  },
  computed: {
    ...mapGetters({
      todos: 'getTodos'
    })
  },
  data: function () {
    return {
      message: 'Hello Vue.js!'
    }
  },
  created () {
  },
  mounted () {
    this.message = 'Hello I changed'
  },
  updated () {
    VueScrollTo.scrollTo('#element', 10000, {})
  }
}
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  body {
    margin: 0;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
    line-height: 60px;
  }
</style>
<style lang="scss">
  @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
</style>
