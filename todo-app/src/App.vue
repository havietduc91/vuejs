<template>
  <div id="app">
    <app-navigation v-sticky></app-navigation>
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:add-todo="addTodo"></create-todo>
    <div class="hello" ref="chartdiv"></div>
    <pie-chart></pie-chart>
    <x-y-chart></x-y-chart>
    <alert show>Default Alert</alert>
    <form-sample/>
    <grid-sample/>
    <table-sample style="margin-top: 20px;"/>
    <app-navigation v-sticky:bottom></app-navigation>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<script>
//Commpn component
import AppNavigation from './components/common/AppNavigation'

//Todo list samples
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'
import { mapGetters } from 'vuex'

//Am charts samples
import PieChart from './components/charts/PieChart'
import XYChart from './components/charts/XYChart'

//Vue boostrap samples
import Alert from './components/boostrap-samples/Alert'
import FormSample from './components/FormSample'
import TableSample from './components/boostrap-samples/Table'

//Ag grid samples
import GridSample from './components/grid/GridSample'

export default {
  name: 'app',
  components: {
    AppNavigation,
    TodoList,
    CreateTodo,
    PieChart,
    XYChart,
    Alert,
    FormSample,
    TableSample,
    GridSample,
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
}
</script>
<style>
  body {
    margin: 0;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
    line-height: 60px;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
<style lang="scss">
  @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
</style>
