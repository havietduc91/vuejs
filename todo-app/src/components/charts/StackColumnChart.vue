<template>
    <div id="chartDiv" style="width: 100%; height: 400px;"></div>
</template>
<script>
  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4charts from "@amcharts/amcharts4/charts";
  import am4themes_animated from "@amcharts/amcharts4/themes/animated";
  am4core.useTheme(am4themes_animated);

  export default {
    mounted() {
      let chart = am4core.create("chartDiv", am4charts.XYChart);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

      chart.data = [
        {
          category: "2018-11",
          value1: 28000,
          value2: 1500,
        },
        {
          category: "2018-12",
          value1: 29000,
          value2: 1500,
        },
        {
          category: "2019-01",
          value1: 30000,
          value2: 1500,
        },
        {
          category: "2019-02",
          value1: 20000,
          value2: 1500,
        },
        {
          category: "2019-03",
          value1: 20100,
          value2: 1800,
        },
        {
          category: "2019-04",
          value1: 20005,
          value2: 1580,
        },
        {
          category: "2019-05",
          value1: 20900,
          value2: 1500,
        },
        {
          category: "2019-06",
          value1: 28000,
          value2: 1500,
        },
        {
          category: "2019-07",
          value1: 20000,
          value2: 1300,
        },
        {
          category: "2019-08",
          value1: 20200,
          value2: 1500,
        },
        {
          category: "2019-09",
          value1: 27500,
          value2: 1500,
        },
        {
          category: "2019-10",
          value1: 20000,
          value2: 1800,
        }
      ];

      chart.colors.step = 2;
      chart.padding(30, 30, 10, 30);

      //  format number
      chart.numberFormatter.numberFormat = "$#a";

      // create and custom legend
      chart.legend = new am4charts.Legend();
      chart.legend.useDefaultMarker = true;
      chart.legend.itemContainers.template.togglable = false;
      chart.legend.itemContainers.template.focusable = false;
      let markerTemplate = chart.legend.markers.template;
      let marker = chart.legend.markers.template.children.getIndex(0);
      marker.cornerRadius(0,0,0,0);
      marker.stroke = am4core.color("#0672FF")
      markerTemplate.width = 25;
      markerTemplate.height = 7;

      // create and custom categoryAxis
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "category";
      // categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.minGridDistance = chart.data.length;

      // create and custom valueAxis
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.calculateTotals = true;
      valueAxis.renderer.minGridDistance = 50;

      // create and custom series1
      let series1 = chart.series.push(new am4charts.ColumnSeries());
      series1.columns.template.width = am4core.percent(50);
      series1.tooltip.getFillFromObject = false;
      series1.tooltip.background.fill = am4core.color("#fff");
      series1.tooltip.label.fill = am4core.color("#000");
      series1.columns.template.tooltipPosition = "pointer";
      series1.stroke = am4core.color("#0672FF");
      series1.fill = am4core.color("#0672FF");
      series1.tooltip.background.cornerRadius = 0
      series1.columns.template.tooltipHTML =
        `
        <div class="title-left">ACB Cost - {category}</div>
        <br>
        <table>
            <tr>
                <th align="left" class="tooltip-padding-div-legend">
                    <div class="div-legend-csc"></div>
                </th>
                <td align="left" class="tooltip-padding-name">{name}</td>
                <td align="right">{value1}</td>
            </tr>
            <tr>
                <th align="left">
                    <div class="div-legend-asc"></div>
                </th>
                <td align="left">Bee Cost</td>
                <td align="right">{value2}</td>
            </tr>
        </table>
        `;
      series1.name = "Acc Cost";
      series1.dataFields.categoryX = "category";
      series1.dataFields.valueY = "value1";
      series1.dataItems.template.locations.categoryX = 0.5;
      series1.stacked = true;

      // create and custom bullet1
      let bullet1 = series1.bullets.push(new am4charts.LabelBullet());
      bullet1.interactionsEnabled = false;

      // create and custom series2
      let series2 = chart.series.push(new am4charts.ColumnSeries());
      series2.columns.template.width = am4core.percent(50);
      series2.tooltip.getFillFromObject = false;
      series2.tooltip.background.fill = am4core.color("#fff");
      series2.tooltip.label.fill = am4core.color("#000");
      series2.tooltip.background.cornerRadius = 0;
      series2.columns.template.tooltipPosition = "pointer";
      series2.stroke = am4core.color("#C5DEFF");
      series2.fill = am4core.color("#C5DEFF");
      series2.columns.template.tooltipHTML =
        `
        <div class="title-left">AWS Cost - {category}</div>
        <br>
        <table>
            <tr>
                <th align="left" class="tooltip-padding-div-legend">
                    <div class="div-legend-csc"></div>
                </th>
                <td align="left" class="tooltip-padding-name">Acc Cost</td>
                <td align="right">{value1}</td>
            </tr>
            <tr>
                <th align="left">
                    <div class="div-legend-asc"></div>
                </th>
                <td align="left">{name}</td>
                <td align="right">{value2}</td>
            </tr>
        </table>
        `;
      series2.name = "Bee Cost";
      series2.dataFields.categoryX = "category";
      series2.dataFields.valueY = "value2";
      series2.stacked = true;

      // create and custom bullet2
      let bullet2 = series2.bullets.push(new am4charts.LabelBullet());
      bullet2.interactionsEnabled = false;
    },
    beforeDestroy() {
    }
  }
</script>
<style lang="scss">
    .div-legend-csc {
        width: 10px;
        height: 10px;
        background-color: #0672FF;
    }
    .div-legend-asc {
        width: 10px;
        height: 10px;
        background-color: #C5DEFF;
    }
    .tooltip-padding-div-legend {
        padding-right: 5px !important;
    }
    .tooltip-padding-name {
        padding-right: 70px !important;
    }
    .title-left {
        font-weight: bold;
        text-align: left;
    }
</style>
