<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
   // we are now passing the data to the todo component to render the todo list
    <TodoListItem
      v-bind:key="todo.title"
      v-on:delete-todo="deleteTodo"
      v-on:complete-todo="completeTodo"
      v-for="todo in todos"
      v-bind:todo="todo"
    />
  </div>
</template>

<script type = "text/javascript" >

import TodoListItem from './TodoListItem'

export default {
  name: 'TodoList',
  props: {
    todos: [
      {
        title: String,
        project: String,
        done: Boolean
      }
    ]
  },
  components: {
    TodoListItem
  },
  methods: {
    deleteTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
    },
    completeTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos[todoIndex].done = true
    }
  }
}
</script>
