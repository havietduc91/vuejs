<template>
  <div style="margin-top: 20px;">
    <b-container>
      <b-row>
        <b-col>
          <ag-grid-vue style="height: 400px;"
            class="ag-theme-balham"
            :columnDefs="columnDefs"
            rowSelection="multiple"
            :pagination="true"
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
                {
                    headerName: "Athlete",
                    field: "athlete",
                    width: 150,
                    checkboxSelection: true
                },
                {
                    headerName: "Age",
                    field: "age",
                    width: 90
                },
                {
                    headerName: "Country",
                    field: "country",
                    width: 120
                },
                {
                    headerName: "Year",
                    field: "year",
                    width: 90
                },
                {
                    headerName: "Date",
                    field: "date",
                    width: 110
                },
                {
                    headerName: "Sport",
                    field: "sport",
                    width: 110
                },
                {
                    headerName: "Gold",
                    field: "gold",
                    width: 100
                },
                {
                    headerName: "Silver",
                    field: "silver",
                    width: 100
                },
                {
                    headerName: "Bronze",
                    field: "bronze",
                    width: 100
                },
                {
                    headerName: "Total",
                    field: "total",
                    width: 100
                }
            ];
            fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json')
                .then(result => result.json())
                .then(rowData => this.rowData = rowData);
        }
    }
</script>