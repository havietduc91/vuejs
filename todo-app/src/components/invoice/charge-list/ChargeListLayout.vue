<template>
  <div class="charge-list-wrapper">
    <InvoiceTableHeader activeTab="charge_list"/>
    <InvoiceSearchFilter/>
    <div style="clear: both;"></div>
    <ChargeListTable/>
  </div>
</template>

<script type = "text/javascript" >
import ChargeListTable from './ChargeListTable'
import InvoiceTableHeader from '../common/InvoiceTableHeader'
import InvoiceSearchFilter from '../common/InvoiceSearchFilter'
export default {
  name: 'ChargeListLayout',
  components: {
    InvoiceSearchFilter,
    ChargeListTable,
    InvoiceTableHeader
  }
}
</script>
<style>
  .charge-list-wrapper {
    margin-top: 20px;
    background-color: #FFF;
  }
</style>
