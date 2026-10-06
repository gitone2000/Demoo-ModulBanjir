document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart(
    "chart1",
    {
      chart: {
        type: "gauge",
        alignTicks: false,
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },

      title: {
        text: "Tekanan Air",
      },

      pane: {
        startAngle: -150,
        endAngle: 150,
      },

      // Dua sumbu: satu untuk kpa, satu untuk bar
      yAxis: [
        {
          min: 0,
          max: 200,
          lineColor: "#2caffe",
          tickColor: "#2caffe",
          minorTickColor: "#2caffe",
          offset: -25,
          lineWidth: 2,
          labels: {
            distance: -20,
            rotation: "auto",
          },
          title: {
            // text: "Ketinggian (cm)",
            style: { color: "#2caffe" },
          },
          endOnTick: false,
        },
        {
          min: 0,
          max: 2,
          tickPosition: "outside",
          lineColor: "#d66",
          lineWidth: 2,
          minorTickPosition: "outside",
          tickColor: "#d66",
          minorTickColor: "#d66",
          labels: {
            distance: 12,
            rotation: "auto",
          },
          offset: -20,
          title: {
            // text: "Tekanan (kPa)",
            style: { color: "#d66" },
          },
          endOnTick: false,
        },
      ],

      series: [
        {
          name: "Tekanan",
          data: [80], // nilai awal cm
          tooltip: {
            valueSuffix: " kPa",
          },
          dataLabels: {
            formatter: function () {
              return (
                '<span style="color:#2caffe">' +
                this.y.toFixed(1) +
                " kPa</span><br/>" +
                '<span style="color:#d66">' +
                (this.y * 0.01).toFixed(2) +
                " bar</span>"
              );
            },
            backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
              stops: [
                [0, "#fefefe"],
                [1, "#eee"],
              ],
            },
            style: {
              textOutline: "none",
            },
          },
        },
      ],
    },
    // function (chart) {
    //   // Tambahkan legend manual ke dalam chart
    //   chart.renderer
    //     .text(
    //       '<div style="color:#2caffe; font-weight:bold;">&#9679; Ketinggian (cm)</div> &nbsp; ' +
    //         '<div style="color:#d66; font-weight:bold;">&#9679; Tekanan (kPa)</div>',
    //       chart.chartWidth / 2 - 145, // posisi X (disesuaikan)
    //       chart.chartHeight - 5 // posisi Y (disesuaikan)
    //     )
    //     .css({
    //       fontSize: "12px",
    //       textAlign: "center",
    //     })
    //     .add();
    //   // Simulasi data real-time
    //   setInterval(function () {
    //     if (chart.axes) {
    //       const point = chart.series[0].points[0];
    //       const inc = Math.round((Math.random() - 0.5) * 10);
    //       let newVal = point.y + inc;

    //       if (newVal < 0 || newVal > 200) {
    //         newVal = point.y - inc;
    //       }

    //       point.update(newVal);
    //     }
    //   }, 3000);
    // }
    function (chart) {
      const textElement = chart.renderer
        .text(
          '<span style="color:#2caffe; font-weight:bold;">&#9679; Tekanan (kPa)</span> &nbsp; ' +
            '<span style="color:#d66; font-weight:bold;">&#9679; Tekanan (bar)</span>',
          0, // sementara mulai dari kiri
          chart.chartHeight - 5
        )
        .css({
          fontSize: "12px",
          textAlign: "center",
        })
        .add();

      // Ambil ukuran lebar teks
      const bbox = textElement.getBBox();

      // Hitung ulang posisi X agar teks berada di tengah
      const centerX = chart.chartWidth / 2 - bbox.width / 2;
      textElement.attr({ x: centerX });

      // Simulasi data real-time
      setInterval(function () {
        if (chart.axes) {
          const point = chart.series[0].points[0];
          const inc = Math.round((Math.random() - 0.5) * 10);
          let newVal = point.y + inc;

          if (newVal < 0 || newVal > 200) {
            newVal = point.y - inc;
          }

          point.update(newVal);
        }
      }, 3000);
    }
  );
});
