import "./styles.css";
import { customerConfig, getUTCEpoch } from "./utility";
import dataa from "./data";

var params = {
  credits: {
    enabled: false
  },
  chart: {
    type: "spline",
    height: 480
  },
  legend: {
    enabled: false
  },
  xAxis: {
    type: "datetime",
    ordinal: false,
    dateTimeLabelFormats: {
      hour: "%l %p",
      day: "%Y/%m/%d ",
      week: "%Y/%m/%d ",
      month: "%Y/%m",
      year: "%Y"
    },
    events: {}
  },
  yAxis: [
    {
      title: {
        text: "POAI [W/m2]"
      },
      opposite: true,
      min: 0,
      labels: {
        format: "{value} W/m2"
      }
    },
    {
      title: {
        text: "Power (kW)"
      },
      opposite: false,
      min: 0,
      labels: {
        format: "{value} kW"
      }
    },
    {
      title: {
        text: "Temperature (°C)"
      },
      opposite: true,
      min: 0,
      labels: {
        format: "{value} °C"
      }
    }
  ],
  navigator: {
    enabled: true,
    margin: 2,
    adaptToUpdatedData: false,
    series: {
      includeInCSVExport: false,
      data: [[1559260800000, null], [1569992557000, null]]
    }
  },
  navigation: {
    buttonOptions: {
      enabled: false
    }
  },
  scrollbar: {
    enabled: false,
    liveRedraw: false
  },
  tooltip: {
    valueSuffix: " A",
    shared: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    },
    series: {
      turboThreshold: 10000,
      marker: {
        enabled: null
      }
    }
  },
  rangeSelector: {
    enabled: false
  },
  series: [
    {
      dataGrouping: {
        enabled: false
      },
      id: "7932_insolation",
      name: "poa1 (Insolation)",
      color: "#2cec5f",
      dashStyle: "LongDash",
      yAxis: 0,
      tooltip: {
        valueSuffix: " W/m2"
      },
      isGraphEnabled: true,
      visible: true,
      gapSize: 1
    },
    {
      dataGrouping: {
        enabled: false
      },
      id: "7592_power",
      name: "PCS1 (Power)",
      color: "#dc0797",
      dashStyle: "ShortDot",
      yAxis: 1,
      tooltip: {
        valueSuffix: " kW"
      },
      isGraphEnabled: true,
      visible: true,
      gapSize: 1
    },
    {
      dataGrouping: {
        enabled: false
      },
      id: "7592_temperature",
      name: "PCS1 (Temperature)",
      color: "#dc0797",
      dashStyle: "Solid",
      yAxis: 2,
      tooltip: {
        valueSuffix: " °C",
        valueDecimals: 1
      },
      isGraphEnabled: true,
      visible: true,
      gapSize: 1
    },
    {
      dataGrouping: {
        enabled: false
      },
      id: "7593_power",
      name: "PCS2 (Power)",
      color: "#01a378",
      dashStyle: "ShortDot",
      yAxis: 1,
      tooltip: {
        valueSuffix: " kW"
      },
      isGraphEnabled: true,
      visible: true,
      gapSize: 1
    },
    {
      dataGrouping: {
        enabled: false
      },
      id: "7593_temperature",
      name: "PCS2 (Temperature)",
      color: "#01a378",
      dashStyle: "Solid",
      yAxis: 2,
      tooltip: {
        valueSuffix: " °C",
        valueDecimals: 1
      },
      isGraphEnabled: true,
      visible: true,
      gapSize: 1
    },
    {
      dataGrouping: {
        enabled: false
      },
      id: "7594_power",
      name: "PCS3 (Power)",
      color: "#273f59",
      dashStyle: "ShortDot",
      yAxis: 1,
      tooltip: {
        valueSuffix: " kW"
      },
      isGraphEnabled: true,
      visible: true,
      gapSize: 1
    },
    {
      dataGrouping: {
        enabled: false
      },
      id: "7594_temperature",
      name: "PCS3 (Temperature)",
      color: "#273f59",
      dashStyle: "Solid",
      yAxis: 2,
      tooltip: {
        valueSuffix: " °C",
        valueDecimals: 1
      },
      isGraphEnabled: true,
      visible: true,
      gapSize: 1
    }
  ]
};
var chart = Highcharts.stockChart("app", params);
// var chart = $("#app").highcharts("StockChart", params);
Object.keys(dataa).forEach(key => chart.get(key).update({ data: dataa[key] }));

var plotBand = [
  { color: "lightgrey", from: 1569777891000, to: 1569821871000 },
  { color: "lightgrey", from: 1569864291000, to: 1569908271000 },
  { color: "lightgrey", from: 1569950691000, to: 1569994671000 },
  { color: "lightgrey", from: 1570037091000, to: 1570081071000 }
];
var xAxis = chart.xAxis[0];
plotBand.forEach(function(plotBand) {
  xAxis.addPlotBand(plotBand);
});
