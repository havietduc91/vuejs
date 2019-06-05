<template>
  <div style="margin-top: 20px;">
    <b-container>
      <b-row>
        <b-col>
          <ag-grid-vue style="height: 400px;"
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
                {headerName: 'Org Hierarchy', field: 'orgHierarchy', sortable: true, filter: true},
                {headerName: 'Job Title', field: 'jobTitle', sortable: true, filter: true },
                {headerName: 'Service Charge', field: 'serviceCharge', sortable: true, filter: true },
                {headerName: 'Usage Mount', field: 'usageMount', sortable: true, filter: true },
                {headerName: 'CF Discount', field: 'cfDiscount', sortable: true, filter: true },
                {headerName: 'CF Charge', field: 'cfCharge', sortable: true, filter: true },
                {headerName: 'Employment Type', field: 'employmentType', sortable: true, filter: true }
            ];
            this.rowData = [
                {
                    orgHierarchy: ["Erica Rogers"],
                    jobTitle: "CEO",
                    serviceCharge: "$2.2121.4214.21",
                    usageMount: "$2.111.4214.21",
                    cfDiscount: "$2",
                    cfCharge: "$10",
                    employmentType: "Permanent"
                },
                {
                    orgHierarchy: ["Erica Rogers", "Malcolm Barrett"],
                    jobTitle: "Exec. Vice President",
                    serviceCharge: "$2.2121.4214.21",
                    usageMount: "$2.111.4214.21",
                    cfDiscount: "$2",
                    cfCharge: "$10",
                    employmentType: "Permanent"
                },
                {
                    orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker"],
                    jobTitle: "Director of Operations",
                    serviceCharge: "$2.2121.4214.21",
                    usageMount: "$2.111.4214.21",
                    cfDiscount: "$2",
                    cfCharge: "$10",
                    employmentType: "Permanent"
                },
                {
                    orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker", "Brittany Hanson"],
                    jobTitle: "Fleet Coordinator",
                    serviceCharge: "$2.2121.4214.21",
                    usageMount: "$2.111.4214.21",
                    cfDiscount: "$2",
                    cfCharge: "$10",
                    employmentType: "Permanent"
                },
                {
                    orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker", "Brittany Hanson", "Leah Flowers"],
                    jobTitle: "Parts Technician",
                    serviceCharge: "$2.2121.4214.21",
                    usageMount: "$2.111.4214.21",
                    cfDiscount: "$2",
                    cfCharge: "$10",
                    employmentType: "Contract"
                },
                {
                    orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker", "Brittany Hanson", "Tammy Sutton"],
                    jobTitle: "Service Technician",
                    serviceCharge: "$2.2121.4214.21",
                    usageMount: "$2.111.4214.21",
                    cfDiscount: "$2",
                    cfCharge: "$10",
                    employmentType: "Contract"
                },
                {
                    orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker", "Derek Paul"],
                    jobTitle: "Inventory Control",
                    serviceCharge: "$2.2121.4214.21",
                    usageMount: "$2.111.4214.21",
                    cfDiscount: "$2",
                    cfCharge: "$10",
                    employmentType: "Permanent"
                },
                {
                    orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland"],
                    jobTitle: "VP Sales",
                    serviceCharge: "$2.2121.4214.21",
                    usageMount: "$2.111.4214.21",
                    cfDiscount: "$2",
                    cfCharge: "$10",
                    employmentType: "Permanent"
                },
                {
                    orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland", "Morris Hanson"],
                    jobTitle: "Sales Manager",
                    serviceCharge: "$2.2121.4214.21",
                    usageMount: "$2.111.4214.21",
                    cfDiscount: "$2",
                    cfCharge: "$10",
                    employmentType: "Permanent"
                },
                {
                    orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland", "Todd Tyler"],
                    jobTitle: "Sales Executive",
                    serviceCharge: "$2.2121.4214.21",
                    usageMount: "$2.111.4214.21",
                    cfDiscount: "$2",
                    cfCharge: "$10",
                    employmentType: "Contract"
                },
                {
                    orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland", "Bennie Wise"],
                    jobTitle: "Sales Executive",
                    serviceCharge: "$2.2121.4214.21",
                    usageMount: "$2.111.4214.21",
                    cfDiscount: "$2",
                    cfCharge: "$10",
                    employmentType: "Contract"
                },
                {
                    orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland", "Joel Cooper"],
                    jobTitle: "Sales Executive",
                    serviceCharge: "$2.2121.4214.21",
                    usageMount: "$2.111.4214.21",
                    cfDiscount: "$2",
                    cfCharge: "$10",
                    employmentType: "Permanent"
                }
            ];
        }
    }
</script>