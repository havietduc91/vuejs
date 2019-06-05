<template>
  <div style="margin-top: 20px; margin-bottom: 20px;">
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
    import ChartList from './ChartList';
    import BCol from "bootstrap-vue/esm/components/layout/col";

    export default {
        components: {
            BCol,
            ChartList,
        },
    };
</script>