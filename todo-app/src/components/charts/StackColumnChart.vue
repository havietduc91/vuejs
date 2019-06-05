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
          value1: 20,
          value2: 5,
        },
        {
          category: "2018-12",
          value1: 15,
          value2: 5,
        },
        {
          category: "2019-01",
          value1: 13,
          value2: 5,
        },
        {
          category: "2019-02",
          value1: 21,
          value2: 4,
        },
        {
          category: "2019-03",
          value1: 22,
          value2: 5,
        },
        {
          category: "2019-04",
          value1: 20,
          value2: 4,
        },
        {
          category: "2019-05",
          value1: 19,
          value2: 6,
        },
        {
          category: "2019-06",
          value1: 18,
          value2: 4,
        },
        {
          category: "2019-07",
          value1: 21,
          value2: 4,
        },
        {
          category: "2019-08",
          value1: 18,
          value2: 3,
        },
        {
          category: "2019-09",
          value1: 22,
          value2: 2,
        },
        {
          category: "2019-10",
          value1: 23,
          value2: 3,
        }
      ];

      chart.colors.step = 2;
      chart.padding(30, 30, 10, 30);


      // add & custom legend
      chart.legend = new am4charts.Legend();
      chart.legend.useDefaultMarker = true;
      chart.legend.itemContainers.template.togglable = false;
      let markerTemplate = chart.legend.markers.template;
      let marker = chart.legend.markers.template.children.getIndex(0);
      marker.cornerRadius(0,0,0,0);
      markerTemplate.width = 25;
      markerTemplate.height = 7;

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "category";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.minGridDistance = chart.data.length;

      console.log(chart.data.length)

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      // valueAxis.title.text = "Monthly Sales";
      valueAxis.min = 0;
      valueAxis.max = 30;
      valueAxis.strictMinMax = true;
      valueAxis.calculateTotals = true;
      valueAxis.renderer.minGridDistance = 20;
      // valueAxis.renderer.minWidth = 35;


      let series1 = chart.series.push(new am4charts.ColumnSeries());
      series1.columns.template.width = am4core.percent(50);
      series1.tooltip.getFillFromObject = false;
      series1.tooltip.background.fill = am4core.color("#fff");
      series1.tooltip.label.fill = am4core.color("#000");
      series1.columns.template.tooltipPosition = "pointer";
      series1.columns.template.stroke = am4core.color("#0672FF");
      series1.columns.template.fill = am4core.color("#0672FF");
      series1.tooltip.background.cornerRadius = 0
      // series1.tooltip.background.pointerLength = 0;
      // let hs = series1.columns.template.states.create("hover");
      // hs.properties.fill = am4core.color("#367B25");
      series1.columns.template.tooltipHTML =
        `
        <div class="title-left">AWS Cost - {category}</div>
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
                <td align="left">Additional Service Cost</td>
                <td align="right">{value2}</td>
            </tr>
        </table>
        `;
      series1.name = "Cloud Service Cost";
      series1.dataFields.categoryX = "category";
      series1.dataFields.valueY = "value1";
      // series1.dataFields.valueYShow = "totalPercent";
      series1.dataItems.template.locations.categoryX = 0.5;
      series1.stacked = true;

      let bullet1 = series1.bullets.push(new am4charts.LabelBullet());
      bullet1.interactionsEnabled = false;

      let series2 = chart.series.push(new am4charts.ColumnSeries());
      series2.columns.template.width = am4core.percent(50);
      series2.tooltip.getFillFromObject = false;
      series2.tooltip.background.fill = am4core.color("#fff");
      series2.tooltip.label.fill = am4core.color("#000");
      series2.tooltip.background.cornerRadius = 0;
      series2.columns.template.tooltipPosition = "pointer";
      series2.columns.template.stroke = am4core.color("#C5DEFF");
      series2.columns.template.fill = am4core.color("#C5DEFF");
      series2.columns.template.tooltipHTML =
        `
        <div class="title-left">AWS Cost - {category}</div>
        <br>
        <table>
            <tr>
                <th align="left" class="tooltip-padding-div-legend">
                    <div class="div-legend-csc"></div>
                </th>
                <td align="left" class="tooltip-padding-name">Cloud Service Cost</td>
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
      series2.name = "Additional Service Cost";
      series2.dataFields.categoryX = "category";
      series2.dataFields.valueY = "value2";
      // series2.dataFields.valueYShow = "totalPercent";
      // series2.dataItems.template.locations.categoryX = 0.5;
      series2.stacked = true;
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
        background-color: rgba(103, 183, 220, 1);
    }
    .div-legend-asc {
        width: 10px;
        height: 10px;
        background-color: rgba(103, 113, 220, 1);
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
