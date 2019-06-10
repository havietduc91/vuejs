<template>
  <!--<div class="price-wrapper-layout">-->
    <!--<b-container>-->
      <!--<b-col>-->
        <!--<b-row>-->
          <!--<b-col-->
            <!--md="3"-->
            <!--style="box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);background: #ffffff;"-->
          <!--&gt;-->
            <!--<div>-->
              <!--<b-row align-h="start">-->
                <!--<b-col md="6" align-self="start" style="text-align: left ">-->
                  <!--<div>-->
                    <!--<p>Invoices Summary</p>-->
                    <!--<p>Month to Date</p>-->
                    <!--<p>Value month to date</p>-->
                  <!--</div>-->
                <!--</b-col>-->
              <!--</b-row>-->
              <!--<b-row align-h="end">-->
                <!--<b-col md="6" style="text-align: right ">-->
                  <!--<div>-->
                    <!--<p>12.5% $7,129.91</p>-->
                    <!--<p>W8,1235,869.60</p>-->
                  <!--</div>-->
                <!--</b-col>-->
              <!--</b-row>-->
            <!--</div>-->
            <!--<div>-->
              <!--<b-row align-h="between">-->
                <!--<b-col style="text-align: left ">Cloud Usage Amount</b-col>-->
                <!--<b-col style="text-align: right ">$7.129.91</b-col> </b-row-->
              <!--&gt;<b-row align-h="between">-->
                <!--<b-col style="text-align: left ">Cloud Usage Amount</b-col>-->
                <!--<b-col style="text-align: right ">$7.129.91</b-col> </b-row-->
              <!--&gt;<b-row align-h="between">-->
                <!--<b-col style="text-align: left ">Cloud Usage Amount</b-col>-->
                <!--<b-col style="text-align: right ">$7.129.91</b-col> </b-row-->
              <!--&gt;<b-row align-h="between">-->
                <!--<b-col style="text-align: left ">Cloud Usage Amount</b-col>-->
                <!--<b-col style="text-align: right ">$7.129.91</b-col>-->
              <!--</b-row>-->
              <!--<b-row align-h="between">-->
                <!--<b-col style="text-align: left ">-->
                  <!--<b-row>-->
                    <!--<span-->
                      <!--:class="showCollapse ? 'collapsed' : null"-->
                      <!--:aria-expanded="showCollapse ? 'true' : 'false'"-->
                      <!--aria-controls="collapse-4"-->
                      <!--@click="showCollapse = !showCollapse">-->
                      <!--<font-awesome-icon icon="sort-down"></font-awesome-icon></span>Total discount-->
                  <!--</b-row></b-col>-->
                <!--<b-col style="text-align: right ">-$31,412.42</b-col>-->
              <!--</b-row>-->
              <!--<b-collapse id="collapse-4" v-model="showCollapse" class="mt-2">-->
                <!--<b-row align-h="between">-->
                  <!--<b-col style="text-align: left ">Cloud Usage Amount</b-col>-->
                  <!--<b-col style="text-align: right ">$7.129.91</b-col>-->
                <!--</b-row>-->
              <!--</b-collapse>-->
            <!--</div>-->
          <!--</b-col>-->
          <!--<b-col md="9"></b-col>-->
        <!--</b-row>-->
      <!--</b-col>-->
    <!--</b-container>-->
  <!--</div>-->
    <div class="price-wrapper-layout">
        <b-container>
            <b-col
                    sm="4"
                    class="screen-price-summary"
            >
                <p class="p-invoices-summary">Invoices Summary</p>
                <div class="p-month-to-date">Month to Date</div>
                <p class="p-date mt-1">2019-03-01 - 2019-03-30</p>
                <p class="p-price-dolar">
                    <span>12.5%</span>
                    <span class="span-price-dolar">$7,129.91</span>
                </p>
                <p class="p-price-won">W8,135,869.60</p>
                <b-row>
                    <b-col></b-col>
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
  },
  methods: {
  }
}
</script>
<style lang="scss">
.price-wrapper-layout {
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #f5f6fa;
  font-size: 10px;
    .screen-price-summary {
        background-color: #fff;
        padding: 10px 20px;
        .p-invoices-summary {
            opacity: .5;
            font-weight: bold;
            text-align: left;
            margin-bottom: 0 !important;
        }
        .p-month-to-date {
            font-size: 18px;
            font-weight: bold;
            text-align: left;
            margin-bottom: 0 !important;
            border-bottom: 1px solid;
            border-color: #E9E9E9;
            padding: 0 !important;
            width: 37%;
        }
        .p-date {
            font-weight: bold;
            text-align: left;
            opacity: .5;
        }
        .p-price-dolar {
            text-align: right;
            margin-bottom: 0 !important;
            .span-price-dolar {
                margin-left: 10px;
                font-weight: bold;
                font-size: 24px;
            }
        }
        .p-price-won {
            text-align: right;
            opacity: .7;
            font-size: 20px;
        }
    }

}
</style>
