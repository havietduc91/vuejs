<template>
  <div>
    <div id='chartdiv' style='width: 100% height: 400px'></div>
  </div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
am4core.useTheme(am4themesAnimated)

export default {
  name: 'BaseStackedBarChart',
  mounted () {
    // Create chart instance
    var chart = am4core.create('chartdiv', am4charts.XYChart)

    chart.data = [{
      'category': 'One',
      'value1': 1,
      'value2': 5,
      'value3': 3,
      'value4': 3
    }, {
      'category': 'Two',
      'value1': 2,
      'value2': 5,
      'value3': 3,
      'value4': 4
    }, {
      'category': 'Three',
      'value1': 3,
      'value2': 5,
      'value3': 4,
      'value4': 4
    }, {
      'category': 'Four',
      'value1': 4,
      'value2': 5,
      'value3': 6,
      'value4': 4
    }, {
      'category': 'Five',
      'value1': 3,
      'value2': 5,
      'value3': 4,
      'value4': 4
    }, {
      'category': 'Six',
      'value1': 8,
      'value2': 7,
      'value3': 10,
      'value4': 4
    }, {
      'category': 'Seven',
      'value1': 10,
      'value2': 8,
      'value3': 6,
      'value4': 4
    }]

    chart.cursor = new am4charts.XYCursor()

    /* Create legend and enable default markers */
    chart.legend = new am4charts.Legend()
    chart.legend.useDefaultMarker = true

    /* Remove square from marker template */
    let marker = chart.legend.markers.template
    marker.disposeChildren()
    marker.width = 40
    marker.height = 40

    /* Add custom image instead */
    let flag = marker.createChild(am4core.Image)
    flag.width = 40
    flag.height = 40
    flag.verticalCenter = 'top'
    flag.horizontalCenter = 'left'
    flag.adapter.add('href', function (href, target) {
      if (target.dataItem && target.dataItem.dataContext && target.dataItem.dataContext.dummyData) {
        return target.dataItem.dataContext.dummyData.flag
      } else {
        return href
      }
    })

    chart.colors.step = 2

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'category'
    categoryAxis.renderer.grid.template.location = 0

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.min = 0
    valueAxis.renderer.minWidth = 35

    let series1 = chart.series.push(new am4charts.ColumnSeries())
    series1.columns.template.width = am4core.percent(80)
    series1.columns.template.tooltipText = '{name}: {valueY.value}'
    series1.name = 'Denmark'
    series1.dataFields.categoryX = 'category'
    series1.dataFields.valueY = 'value1'
    series1.stacked = true
    series1.dummyData = {
      flag: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/flag_denmark.svg'
    }

    let series2 = chart.series.push(new am4charts.ColumnSeries())
    series2.columns.template.width = am4core.percent(80)
    series2.columns.template.tooltipText = '{name}: {valueY.value}'
    series2.name = 'Sweden'
    series2.dataFields.categoryX = 'category'
    series2.dataFields.valueY = 'value2'
    series2.stacked = true
    series2.dummyData = {
      flag: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/flag_sweden.svg'
    }

    let series3 = chart.series.push(new am4charts.ColumnSeries())
    series3.columns.template.width = am4core.percent(80)
    series3.columns.template.tooltipText = '{name}: {valueY.value}'
    series3.name = 'Norway'
    series3.dataFields.categoryX = 'category'
    series3.dataFields.valueY = 'value3'
    series3.stacked = true
    series3.dummyData = {
      flag: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/flag_norway.svg'
    }

    let series4 = chart.series.push(new am4charts.ColumnSeries())
    series4.columns.template.width = am4core.percent(80)
    series4.columns.template.tooltipText = '{name}: {valueY.value}'
    series4.name = 'Finland'
    series4.dataFields.categoryX = 'category'
    series4.dataFields.valueY = 'value4'
    series4.stacked = true
    series4.dummyData = {
      flag: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/flag_finland.svg'
    }

    this.chart = chart
  },

  beforeDestroy () {
    if (this.chart) {
      this.chart.dispose()
    }
  }
}
</script>
<style>
  #chartdiv {
    width: 100%;
    height: 900px;
  }
</style>
