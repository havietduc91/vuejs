<template>
  <div class='chart-list-table'>
    <b-container>
      <b-row>
        <b-col>
          <div style='height: 100%; padding-top: 30px; box-sizing: border-box;'>
            <ag-grid-vue style='width: 100%; height: 100%;' class='ag-theme-balham' id='myGrid'
                       :gridOptions='gridOptions'
                       @grid-ready='onGridReady'
                       :columnDefs='columnDefs'
                       :rowData='rowData'
                       :treeData='true'
                       :animateRows='true'
                       :groupDefaultExpanded='groupDefaultExpanded'
                       :getDataPath='getDataPath'
                       :autoGroupColumnDef='autoGroupColumnDef'></ag-grid-vue>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { AgGridVue } from 'ag-grid-vue'
import BCol from 'bootstrap-vue/esm/components/layout/col'

// import { LicenseManager } from 'ag-grid-enterprise';
// LicenseManager.setLicenseKey('[TRIAL]_5_August_2019_[v2]_MTU2NDk2MzIwMDAwMA==cf4a41f302a394c24b79f5eddf332451');

export default {
  name: 'InvoiceDetailTable',
  components: {
    BCol,
    AgGridVue
  },
  data: function () {
    return {
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      columnDefs: null,
      rowData: null,
      groupDefaultExpanded: null,
      getDataPath: null,
      autoGroupColumnDef: null
    }
  },
  beforeMount () {
    this.gridOptions = {}
    this.columnDefs = [{ field: 'jobTitle' }, { field: 'employmentType' }]
    this.rowData = [
      {
        orgHierarchy: ['Erica Rogers'],
        jobTitle: 'CEO',
        employmentType: 'Permanent'
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett'],
        jobTitle: 'Exec. Vice President',
        employmentType: 'Permanent'
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker'],
        jobTitle: 'Director of Operations',
        employmentType: 'Permanent'
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker', 'Brittany Hanson'],
        jobTitle: 'Fleet Coordinator',
        employmentType: 'Permanent'
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker', 'Brittany Hanson', 'Leah Flowers'],
        jobTitle: 'Parts Technician',
        employmentType: 'Contract'
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker', 'Brittany Hanson', 'Tammy Sutton'],
        jobTitle: 'Service Technician',
        employmentType: 'Contract'
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker', 'Derek Paul'],
        jobTitle: 'Inventory Control',
        employmentType: 'Permanent'
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland'],
        jobTitle: 'VP Sales',
        employmentType: 'Permanent'
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland', 'Morris Hanson'],
        jobTitle: 'Sales Manager',
        employmentType: 'Permanent'
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland', 'Todd Tyler'],
        jobTitle: 'Sales Executive',
        employmentType: 'Contract'
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland', 'Bennie Wise'],
        jobTitle: 'Sales Executive',
        employmentType: 'Contract'
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland', 'Joel Cooper'],
        jobTitle: 'Sales Executive',
        employmentType: 'Permanent'
      }
    ]
    this.groupDefaultExpanded = -1
    this.getDataPath = data => {
      return data.orgHierarchy
    }
    this.autoGroupColumnDef = {
      headerName: 'Organisation Hierarchy',
      cellRendererParams: { suppressCount: true }
    }
  },
  mounted () {
    this.gridApi = this.gridOptions.api
    this.gridColumnApi = this.gridOptions.columnApi
  },
  methods: {
    onFilterTextBoxChanged () {
      this.gridApi.setQuickFilter(document.getElementById('filter-text-box').value)
    },
    onGridReady (params) {
      params.api.sizeColumnsToFit()
    }
  }
}
</script>
