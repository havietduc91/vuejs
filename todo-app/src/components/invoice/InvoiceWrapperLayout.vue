<template>
  <div class="invoice-wrapper-layout">
    <b-container>
      <b-row>
        <b-col cols="3"></b-col>
        <b-col cols="9">
          {{type}}
          <div v-if="type === 'charge_list'" key="type">
            <ChargeListLayout />
          </div>
          <div v-else-if="type === 'invoice_detail'" key="type">
            <InvoiceDetailLayout />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script type = "text/javascript" >
import ChargeListLayout from './charge-list/ChargeListLayout'
import InvoiceDetailLayout from './invoice-detail/InvoiceDetailLayout'
import BCol from 'bootstrap-vue/esm/components/layout/col'

export default {
  name: 'InvoiceWrapperLayout',
  props: {
    type: String
  },
  components: {
    BCol,
    ChargeListLayout,
    InvoiceDetailLayout
  }
}
</script>
<style>
  .invoice-wrapper-layout {
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #F5F6FA
  }
</style>
