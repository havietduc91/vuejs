<template>
  <div class="price-wrapper-layout">
    <b-container>
      <b-col>
        <b-row>
          <b-col
            md="3"
            style="box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);background: #ffffff;"
          >
            <div>
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
            <div>
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
                <b-col style="text-align: left ">
                  <b-row>
                    <span
                      :class="showCollapse ? 'collapsed' : null"
                      :aria-expanded="showCollapse ? 'true' : 'false'"
                      aria-controls="collapse-4"
                      @click="showCollapse = !showCollapse">
                      <font-awesome-icon icon="sort-down"></font-awesome-icon></span>Total discount
                  </b-row></b-col>
                <b-col style="text-align: right ">-$31,412.42</b-col>
              </b-row>
              <b-collapse id="collapse-4" v-model="showCollapse" class="mt-2">
                <b-row align-h="between">
                  <b-col style="text-align: left ">Cloud Usage Amount</b-col>
                  <b-col style="text-align: right ">$7.129.91</b-col>
                </b-row>
              </b-collapse>
            </div>
          </b-col>
          <b-col md="9"></b-col>
        </b-row>
      </b-col>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'TotalPriceComponent',
  data () {
    return {
      showCollapse: true
    }
  }
}
</script>

<style>
.price-wrapper-layout {
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #f5f6fa;
}
</style>
