<template>
  <div style="margin-top: 20px;">
    <b-container>
      <b-row>
        <b-col>
          <ag-grid-vue style="width: 600px; height: 500px;"
                       class="ag-theme-balham"
                       :columnDefs="columnDefs"
                       rowSelection="multiple"
                       :rowData="rowData">
          </ag-grid-vue>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import { AgGridVue } from "ag-grid-vue";
  import BCol from "bootstrap-vue/esm/components/layout/col";

  export default {
    name: 'App',
    data() {
      return {
        columnDefs: null,
        rowData: null
      }
    },
    components: {
      BCol,
      AgGridVue
    },
    beforeMount() {
      this.columnDefs = [
        {headerName: 'Make', field: 'make', sortable: true, filter: true, checkboxSelection: true},
        {headerName: 'Model', field: 'model', sortable: true, filter: true },
        {headerName: 'Price', field: 'price', sortable: true, filter: true }
      ];
      fetch('https://api.myjson.com/bins/15psn9')
          .then(result => result.json())
          .then(rowData => this.rowData = rowData);
    }
  }
</script>