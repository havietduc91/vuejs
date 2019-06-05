<template>
  <div class="chart-list-wrapper">
    <table-header></table-header>
    <search-filter></search-filter>
    <div style="clear: both;"></div>
    <chart-list-table></chart-list-table>
  </div>
</template>

<script type = "text/javascript" >
  import TableHeader from './TableHeader';
  import ChartListTable from './Table';
  import SearchFilter from './SearchFilter';
  export default {
    components: {
      TableHeader,
      ChartListTable,
      SearchFilter,
    }
  };
</script>
<style>
  .chart-list-wrapper {
    margin-top: 20px;
    background-color: #FFF;
  }
</style>