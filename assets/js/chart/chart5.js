document.addEventListener("DOMContentLoaded", function () {
  function generateInitialData() {
    const data = [];
    const now = Date.now();
    for (let i = -10; i <= 0; i++) {
      const time = now + i * 5000; // interval 2 detik (sesuai gauge)
      const value = chartKetinggian2 ? chartKetinggian2.series[0].points[0].y : 0;
      data.push([time, parseFloat(value.toFixed(1))]);
    }
    return data;
  }

  Highcharts.chart("chart5", {
    chart: {
      type: "area",
      zoomType: "x",
      events: {
        load: function () {
          const chart = this;
          setInterval(() => {
            if (chartKetinggian2) {
              const x = Date.now();
              const y = chartKetinggian2.series[0].points[0].y;
              const shift = chart.series[0].data.length >= 30;
              chart.series[0].addPoint([x, y], true, shift);
            }
          }, 2000); // sama seperti update gauge
        },
      },
    },
    title: { text: "Riwayat Ketinggian Air <br/> TEGALOMBO" },
    xAxis: {
      type: "datetime",
      title: { text: "Waktu" },
      labels: {
      formatter: function () {
      const date = new Date(this.value);
      // Format ke 2 digit jam:menit:detik WIB
      return (
        ("0" + date.getHours()).slice(-2) + ":" +
        ("0" + date.getMinutes()).slice(-2) + " WIB"
      );
    }
    }
    },
    yAxis: {
      title: { text: "Ketinggian (cm)" },
      min: 0,
      max: 1500,
      plotLines: [{
        color: "red",
        width: 2,
        value: 750,
        dashStyle: "Dash",
        label: {
          text: "Siaga Banjir ( 750cm )",
          align: "left",
          style: { color: "red" },
        },
      }],
    },
    tooltip: {
      xDateFormat: "%H:%M",
      shared: true,
      valueSuffix: " cm",
    },
    plotOptions: {
      area: {
        marker: { enabled: false },
        fillOpacity: 0.5,
      },
    },
    series: [{
      name: "Ketinggian",
      data: generateInitialData(),
    }],
    credits: { enabled: false },
  });
});
