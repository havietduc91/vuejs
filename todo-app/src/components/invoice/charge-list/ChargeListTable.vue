<template>
  <div class='chart-list-table'>
    <b-container>
      <b-row>
        <b-col>
          <ag-grid-vue style='height: 400px;'
            class='ag-theme-balham'
            :columnDefs='columnDefs'
            rowSelection='multiple'
            :pagination='true'
            :rowData='rowData'>
          </ag-grid-vue>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { AgGridVue } from 'ag-grid-vue'
import BCol from 'bootstrap-vue/esm/components/layout/col'

export default {
  name: 'App',
  data () {
    return {
      columnDefs: null,
      rowData: null
    }
  },
  components: {
    BCol,
    AgGridVue
  },
  beforeMount () {
    this.columnDefs = [
      {
        headerName: 'Athlete',
        field: 'athlete',
        width: 150,
        checkboxSelection: true,
        sortable: true
      },
      {
        headerName: 'Age',
        field: 'age',
        width: 90,
        sortable: true
      },
      {
        headerName: 'Country',
        field: 'country',
        width: 120,
        sortable: true
      },
      {
        headerName: 'Year',
        field: 'year',
        width: 90,
        sortable: true
      },
      {
        headerName: 'Date',
        field: 'date',
        width: 110,
        sortable: true
      },
      {
        headerName: 'Sport',
        field: 'sport',
        width: 110,
        sortable: true
      },
      {
        headerName: 'Gold',
        field: 'gold',
        width: 100,
        sortable: true
      },
      {
        headerName: 'Silver',
        field: 'silver',
        width: 100,
        sortable: true
      },
      {
        headerName: 'Bronze',
        field: 'bronze',
        width: 100,
        sortable: true
      },
      {
        headerName: 'Total',
        field: 'total',
        width: 100,
        sortable: true
      }
    ]
    fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json')
      .then((result) => { result.json() })
      .then((rowData) => { this.rowData = rowData })
  }
}
</script>
