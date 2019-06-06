<template>
  <div class="invoice-detail-wrapper">
    <InvoiceTableHeader activeTab="invoice_detail"/>
    <InvoiceSearchFilter/>
    <div style="clear: both;"></div>
    <InvoiceDetailTable/>
  </div>
</template>

<script type = "text/javascript" >
import InvoiceTableHeader from '../common/InvoiceTableHeader'
import InvoiceDetailTable from './InvoiceDetailTable'
import InvoiceSearchFilter from '../common/InvoiceSearchFilter'
export default {
  name: 'InvoiceDetailLayout',
  components: {
    InvoiceTableHeader,
    InvoiceSearchFilter,
    InvoiceDetailTable
  }
}
</script>
<style>
  .invoice-detail-wrapper {
    margin-top: 20px;
    background-color: #FFF;
  }
</style>
