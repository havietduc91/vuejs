<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/to-do-list">To Do List</router-link> |
      <router-link to="/hello-world">Hello world</router-link>
    </div>
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:add-todo="addTodo"></create-todo>
    <div class="hello" ref="chartdiv"></div>
    <pie-chart></pie-chart>
    <x-y-chart></x-y-chart>
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
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'
import { mapGetters } from 'vuex'

//Code for chart
import PieChart from './components/charts/PieChart'
import XYChart from './components/charts/XYChart'

export default {
  name: 'app',
  components: {
    TodoList,
    CreateTodo,
    PieChart,
    XYChart,
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
