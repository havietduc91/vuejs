<template>
  <b-col>
    <b-row >
      <b-col md="3" style="box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2)">
        <div style="background: #ffffff;">
          <b-row align-h="start">
            <b-col md="6" align-self="start" style="text-align: left ">
              <div>
                <p>Invoices Summary</p>
                <p>Month to Date</p>
                <p>Value month to date</p>
              </div>
            </b-col>
          </b-row>
          <b-row align-h="end">
            <b-col md="6" style="text-align: right ">
              <div>
                <p>12.5% $7,129.91</p>
                <p>W8,1235,869.60</p>
              </div>
            </b-col>
          </b-row>
        </div>
        <div style="background: #f5f5f5">
          <b-row align-h="between">
            <b-col style="text-align: left ">Cloud Usage Amount</b-col>
            <b-col style="text-align: right ">$7.129.91</b-col> </b-row
          ><b-row align-h="between">
            <b-col style="text-align: left ">Cloud Usage Amount</b-col>
            <b-col style="text-align: right ">$7.129.91</b-col> </b-row
          ><b-row align-h="between">
            <b-col style="text-align: left ">Cloud Usage Amount</b-col>
            <b-col style="text-align: right ">$7.129.91</b-col> </b-row
          ><b-row align-h="between">
            <b-col style="text-align: left ">Cloud Usage Amount</b-col>
            <b-col style="text-align: right ">$7.129.91</b-col>
          </b-row>
          <b-row align-h="between">
            <b-col style="text-align: left ">Total discount</b-col>
            <b-col style="text-align: right ">-$31,412.42</b-col>
          </b-row>
        </div>
      </b-col>
      <b-col md="9"></b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "TotalPriceComponent"
};
</script>

<style scoped></style>
