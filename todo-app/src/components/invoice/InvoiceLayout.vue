<template>
  <div class="invoice-layout">
    <b-container>
      <b-row>
        <b-col cols="3"></b-col>
        <b-col cols="9">
          <chart-list />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script type = "text/javascript" >
    import ChartList from './chart-list/Layout';
    import BCol from "bootstrap-vue/esm/components/layout/col";

    export default {
        components: {
            BCol,
            ChartList,
        },
    };
</script>
<style>
  .invoice-layout {
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #F5F6FA
  }
</style>