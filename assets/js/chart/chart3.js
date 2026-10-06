document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("chart3", {
    chart: {
      type: "spline",
    },
    title: {
      text: "Intensitas Curah Hujan",
    },
    xAxis: {
      categories: [
        "17 Jul",
        "18 Jul",
        "19 Jul",
        "20 Jul",
        "21 Jul",
        "22 Jul",
        "23 Jul",
      ],
      title: {
        text: "Tanggal",
      },
    },
    yAxis: {
      title: {
        text: "Curah Hujan (mm)",
      },
      labels: {
        format: "{value} mm",
      },
      plotLines: [
        {
          color: "red",
          value: 50, // misalnya ambang bahaya banjir
          width: 2,
          dashStyle: "Dash",
          label: {
            text: "Siaga Banjir (50 mm)",
            align: "left",
            style: {
              color: "red",
              // fontWeight: "bold",
            },
          },
        },
      ],
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: " mm",
    },
    series: [
      {
        name: "Curah Hujan Hari Ini",
        data: [22, 48, 35, 60, 40, 70, { y: 55, marker: { fillColor: "red" } }], // <- Ganti dengan data real harian
      },
    ],
  });
});
