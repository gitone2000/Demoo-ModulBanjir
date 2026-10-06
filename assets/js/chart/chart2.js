document.addEventListener("DOMContentLoaded", function () {
  const gaugeOptions = {
    
    chart: {
      type: "solidgauge",
    },
    title: { text: "" },

    pane: {
      center: ["50%", "85%"],
      size: "140%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor: "#f0f0f0",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "arc",
      },
    },
    tooltip: {
      enabled: false,
    },
    yAxis: {
      stops: [
        [0.1, "#33ff00ff"], // green
        [0.5, "#fbff00ff"], // yellow
        [0.9, "#ff0000ff"], // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      labels: {
        y: 16,
      },
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
        },
      },
    },
    credits: {
      enabled: false,
    },
  };

  // Kecepatan Air
  const chartSpeed = Highcharts.chart(
    "chart2-speed",
    Highcharts.merge(gaugeOptions, {
      yAxis: { min: 0, max: 100 },
      title: { text: "Kecepatan Air" },
      series: [
        {
          name: "Kecepatan",
          data: [45],
          dataLabels: {
            format:
              '<div style="text-align:center"><span style="font-size:22px">{y:.1f}</span><br/><span style="font-size:12px;opacity:0.6">m/s</span></div>',
          },
        },
      ],
    })
  );

  const chartHeight = Highcharts.chart(
    "chart2-rain",
    Highcharts.merge(gaugeOptions, {
      yAxis: { min: 0, max: 500 },
      title: { text: "Ketinggian Air" },
      series: [
        {
          name: "Ketinggian",
          data: [120],
          dataLabels: {
            format:
              '<div style="text-align:center"><span style="font-size:22px">{y:.1f}</span><br/><span style="font-size:12px;opacity:0.6">cm</span></div>',
          },
        },
      ],
    })
  );

  // Ambil elemen lampu
  const lampGreen = document.querySelector(".lamp.green");
  const lampYellow = document.querySelector(".lamp.yellow");
  const lampRed = document.querySelector(".lamp.red");

  function updateLamps() {
    const rainVal = chartHeight.series[0].points[0].y;
    const speedVal = chartSpeed.series[0].points[0].y;
    const rainMax = chartHeight.yAxis[0].max;
    const speedMax = chartSpeed.yAxis[0].max;

    // Threshold 95% dari max
    const rainFull = rainVal >= rainMax * 0.95;
    const speedFull = speedVal >= speedMax * 0.95;

    // Reset lampu
    lampGreen.classList.remove("on");
    lampYellow.classList.remove("on");
    lampRed.classList.remove("on");

    // Nyalakan sesuai kondisi
    if (rainFull) lampGreen.classList.add("on");
    if (speedFull) lampYellow.classList.add("on");
    if (rainFull && speedFull) {
      lampRed.classList.add("on");
    }
  }

  // Auto-update (simulasi data)
  setInterval(() => {
    let val1 = chartSpeed.series[0].points[0];
    let inc1 = (Math.random() - 0.5) * 10;
    let newVal1 = Math.max(0, Math.min(100, val1.y + inc1));
    val1.update(newVal1);

    let val2 = chartHeight.series[0].points[0];
    let inc2 = (Math.random() - 0.5) * 30;
    let newVal2 = Math.max(0, Math.min(500, val2.y + inc2));
    val2.update(newVal2);

    updateLamps();
  }, 3000);
});
