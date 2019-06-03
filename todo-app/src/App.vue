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
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  name: 'app',
  components: {
    TodoList,
    CreateTodo
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
  mounted() {
      let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

      chart.paddingRight = 20;

      let data = [];
      let visits = 10;
      for (let i = 1; i < 366; i++) {
          visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
          data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
      }

      chart.data = data;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";

      series.tooltipText = "{valueY.value}";
      chart.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      this.chart = chart;
  },

  beforeDestroy() {
      if (this.chart) {
          this.chart.dispose();
      }
  }
}
</script>
