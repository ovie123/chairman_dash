  function (e, t, n) {
    'use strict';
    n.r(t);
    var i = n(5),
      r = n.n(i),
      a =
        (n(205),
        function () {
          return Math.round(100 * Math.random());
        }),
      o = r.a.helpers.color,
      l =
        (o(window.chartColors.red).alpha(0.5).rgbString(),
        window.chartColors.red,
        a(),
        a(),
        a(),
        a(),
        a(),
        a(),
        a(),
        o(window.chartColors.blue).alpha(0.5).rgbString(),
        window.chartColors.blue,
        a(),
        a(),
        a(),
        a(),
        a(),
        a(),
        a()),
      s = {
        type: 'pie',
        data: {
          datasets: [
            {
              data: [a(), a(), a(), a(), a()],
              backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
              ],
              label: 'Dataset 1',
            },
          ],
          labels: ['Da Collections YTD', 'Orange', 'Yellow', 'Green', 'Blue'],
        },
        options: { responsive: !0 },
      },
      d =
        ((l = {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
          ],
          datasets: [
            {
              label: 'Dataset 1',
              backgroundColor: window.chartColors.red,
              data: [a(), a(), a(), a(), a(), a(), a()],
            },
            {
              label: 'Dataset 2',
              backgroundColor: window.chartColors.blue,
              data: [a(), a(), a(), a(), a(), a(), a()],
            },
            {
              label: 'Dataset 3',
              backgroundColor: window.chartColors.green,
              data: [a(), a(), a(), a(), a(), a(), a()],
            },
          ],
        }),
        {
          type: 'radar',
          data: {
            labels: [
              ['Eating', 'Dinner'],
              ['Drinking', 'Water'],
              'Sleeping',
              ['Designing', 'Graphics'],
              'Coding',
              'Cycling',
              'Running',
            ],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: o(window.chartColors.red)
                  .alpha(0.2)
                  .rgbString(),
                borderColor: window.chartColors.red,
                pointBackgroundColor: window.chartColors.red,
                data: [a(), a(), a(), a(), a(), a(), a()],
              },
              {
                label: 'My Second dataset',
                backgroundColor: o(window.chartColors.blue)
                  .alpha(0.2)
                  .rgbString(),
                borderColor: window.chartColors.blue,
                pointBackgroundColor: window.chartColors.blue,
                data: [a(), a(), a(), a(), a(), a(), a()],
              },
            ],
          },
          options: {
            legend: { position: 'top' },
            title: { display: !1, text: 'Chart.js Radar Chart' },
            scale: { ticks: { beginAtZero: !0 } },
          },
        }),
      u = {
        type: 'doughnut',
        data: {
          datasets: [
            {
              data: [a(), a(), a(), a(), a()],
              backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
              ],
              label: 'Dataset 1',
            },
          ],
          labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        },
        options: {
          responsive: !0,
          legend: { position: 'top' },
          title: { display: !1, text: 'Chart.js Doughnut Chart' },
          animation: { animateScale: !0, animateRotate: !0 },
        },
      },
      c = {
        type: 'doughnut',
        data: {
          datasets: [
            {
              data: [a(), a(), a(), a(), a()],
              backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
              ],
              label: 'Dataset 1',
            },
          ],
          labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          legend: { display: !1 },
          title: { display: !1, text: 'Chart.js Doughnut Chart' },
          animation: { animateScale: !0, animateRotate: !0 },
        },
      },
      h = {
        data: {
          datasets: [
            {
              data: [a(), a(), a(), a(), a()],
              backgroundColor: [
                o(chartColors.red).alpha(0.5).rgbString(),
                o(chartColors.orange).alpha(0.5).rgbString(),
                o(chartColors.yellow).alpha(0.5).rgbString(),
                o(chartColors.green).alpha(0.5).rgbString(),
                o(chartColors.blue).alpha(0.5).rgbString(),
              ],
              label: 'My dataset',
            },
          ],
          labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        },
        options: {
          responsive: !0,
          legend: { position: 'right' },
          title: { display: !1, text: 'Chart.js Polar Area Chart' },
          scale: { ticks: { beginAtZero: !0 }, reverse: !1 },
          animation: { animateRotate: !1, animateScale: !0 },
        },
      },
      p = {
        type: 'line',
        data: {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
          ],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: window.chartColors.red,
              borderColor: window.chartColors.red,
              data: [a(), a(), a(), a(), a(), a(), a()],
              fill: !1,
            },
            {
              label: 'My Second dataset',
              fill: !1,
              backgroundColor: window.chartColors.blue,
              borderColor: window.chartColors.blue,
              data: [a(), a(), a(), a(), a(), a(), a()],
            },
          ],
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          title: { display: !1, text: 'Chart.js Line Chart' },
          legend: { display: !1 },
          layout: { padding: { left: 10, right: 10, top: 10, bottom: 0 } },
          tooltips: { mode: 'index', intersect: !1 },
          hover: { mode: 'nearest', intersect: !0 },
          pointBackgroundColor: '#fff',
          pointBorderColor: window.chartColors.blue,
          pointBorderWidth: '2',
          scales: {
            xAxes: [
              {
                display: !1,
                scaleLabel: { display: !0, labelString: 'Month' },
              },
            ],
            yAxes: [
              {
                display: !1,
                scaleLabel: { display: !0, labelString: 'Value' },
              },
            ],
          },
        },
      },
      f = {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: o(window.chartColors.red).alpha(0.5).rgbString(),
            borderColor: window.chartColors.red,
            borderWidth: 1,
            data: [a(), a(), a(), a(), a(), a(), a()],
          },
          {
            label: 'Dataset 2',
            backgroundColor: o(window.chartColors.blue).alpha(0.5).rgbString(),
            borderColor: window.chartColors.blue,
            data: [a(), a(), a(), a(), a(), a(), a()],
          },
        ],
      };
    window.onload = function () {
      if (document.getElementById('canvas')) {
        var e = document.getElementById('canvas').getContext('2d');
        window.myBar = new r.a(e, {
          type: 'bar',
          data: l,
          options: {
            responsive: !0,
            legend: { position: 'top' },
            title: { display: !1, text: 'Chart.js Bar Chart' },
          },
        });
      }
      if (document.getElementById('chart-area')) {
        var t = document.getElementById('chart-area').getContext('2d');
        window.myPie = new r.a(t, s);
      }
      if (document.getElementById('doughnut-chart')) {
        var n = document.getElementById('doughnut-chart').getContext('2d');
        window.myDoughnut = new r.a(n, u);
      }
      if (document.getElementById('doughnut-chart-2')) {
        var i = document.getElementById('doughnut-chart-2').getContext('2d');
        window.myDoughnut = new r.a(i, c);
      }
      if (document.getElementById('doughnut-chart-3')) {
        var a = document.getElementById('doughnut-chart-3').getContext('2d');
        window.myDoughnut = new r.a(a, c);
      }
      if (
        (document.getElementById('radar-chart') &&
          (window.myRadar = new r.a(document.getElementById('radar-chart'), d)),
        document.getElementById('polar-chart'))
      ) {
        var o = document.getElementById('polar-chart');
        window.myPolarArea = r.a.PolarArea(o, h);
      }
      if (document.getElementById('line-chart')) {
        var m = document.getElementById('line-chart').getContext('2d');
        window.myLine = new r.a(m, p);
      }
      if (document.getElementById('chart-horiz-bar')) {
        var g = document.getElementById('chart-horiz-bar').getContext('2d');
        window.myHorizontalBar = new r.a(g, {
          type: 'horizontalBar',
          data: f,
          options: {
            elements: { rectangle: { borderWidth: 2 } },
            responsive: !0,
            legend: { position: 'right' },
            title: { display: !1, text: 'Chart.js Horizontal Bar Chart' },
          },
        });
      }
      if (document.getElementById('stacked-bars-chart')) {
        var _ = document.getElementById('stacked-bars-chart').getContext('2d');
        window.myBar = new r.a(_, {
          type: 'bar',
          data: l,
          options: {
            title: { display: !0, text: 'Chart.js Bar Chart - Stacked' },
            tooltips: { mode: 'index', intersect: !1 },
            responsive: !0,
            scales: { xAxes: [{ stacked: !0 }], yAxes: [{ stacked: !0 }] },
          },
        });
      }
    };
  },
  function();