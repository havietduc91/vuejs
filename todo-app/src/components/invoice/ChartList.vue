<template>
  <div class="chart-list-wrapper">
    <table-header></table-header>
    <chart-list-table></chart-list-table>
  </div>
</template>

<script type = "text/javascript" >
  import TableHeader from './TableHeader';
  import ChartListTable from './chart-list-table/ChartListTable';
  export default {
    components: {
      TableHeader,
      ChartListTable,
    }
  };
</script>
<style>

</style>