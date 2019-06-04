<template>
  <div style="margin-top: 20px;">
    <b-container>
      <b-row>
        <b-col>
          <ag-grid-vue style="width: 600px; height: 500px;"
                       class="ag-theme-balham"
                       :columnDefs="columnDefs"
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
        {headerName: 'Make', field: 'make'},
        {headerName: 'Model', field: 'model'},
        {headerName: 'Price', field: 'price'}
      ];

      this.rowData = [
        {make: 'Toyota', model: 'Celica', price: 35000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Porsche', model: 'Boxter', price: 72000}
      ];
    }
  }
</script>