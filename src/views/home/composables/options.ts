export const option1 = {
  chart: {
    type: "spline",
    zoomType: "x",
    // 允许平移
    panning: true,
  },
  title: {
    text: "风速变化趋势图",
  },
  subtitle: {
    text: "2009年10月6日和7日两地风速情况",
  },
  xAxis: {
    type: "datetime",
    labels: {
      overflow: "justify",
    },
  },
  yAxis: {
    title: {
      text: "风 速 (m/s)",
    },
    min: 0,
    minorGridLineWidth: 0,
    gridLineWidth: 0,
    alternateGridColor: null,
    plotBands: [
      {
        // Light air
        from: 0.3,
        to: 1.5,
        color: "rgba(68, 170, 213, 0.1)",
        label: {
          text: "轻空气",
          style: {
            color: "#606060",
          },
        },
      },
      {
        // Light breeze
        from: 1.5,
        to: 3.3,
        color: "rgba(0, 0, 0, 0)",
        label: {
          text: "微风",
          style: {
            color: "#606060",
          },
        },
      },
      {
        // Gentle breeze
        from: 3.3,
        to: 5.5,
        color: "rgba(68, 170, 213, 0.1)",
        label: {
          text: "柔和风",
          style: {
            color: "#606060",
          },
        },
      },
      {
        // Moderate breeze
        from: 5.5,
        to: 8,
        color: "rgba(0, 0, 0, 0)",
        label: {
          text: "温和风",
          style: {
            color: "#606060",
          },
        },
      },
      {
        // Fresh breeze
        from: 8,
        to: 11,
        color: "rgba(68, 170, 213, 0.1)",
        label: {
          text: "清新风",
          style: {
            color: "#606060",
          },
        },
      },
      {
        // Strong breeze
        from: 11,
        to: 14,
        color: "rgba(0, 0, 0, 0)",
        label: {
          text: "强风",
          style: {
            color: "#606060",
          },
        },
      },
      {
        // High wind
        from: 14,
        to: 15,
        color: "rgba(68, 170, 213, 0.1)",
        label: {
          text: "狂风",
          style: {
            color: "#606060",
          },
        },
      },
    ],
  },
  tooltip: {
    valueSuffix: " m/s",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    spline: {
      lineWidth: 4,
      states: {
        hover: {
          lineWidth: 5,
        },
      },
      marker: {
        enabled: false,
      },
      pointInterval: 3600000, // one hour
      pointStart: Date.UTC(2009, 9, 6, 0, 0, 0),
    },
  },
  series: [
    {
      name: "Hestavollane",
      data: [
        4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 7.4, 6.9, 7.1, 7.9, 7.9,
        7.5, 6.7, 7.7, 7.7, 7.4, 7.0, 7.1, 5.8, 5.9, 7.4, 8.2, 8.5, 9.4, 8.1,
        10.9, 10.4, 10.9, 12.4, 12.1, 9.5, 7.5, 7.1, 7.5, 8.1, 6.8, 3.4, 2.1,
        1.9, 2.8, 2.9, 1.3, 4.4, 4.2, 3.0, 3.0,
      ],
    },
    {
      name: "Voll",
      data: [
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.3, 0.0, 0.0, 0.4,
        0.0, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.6, 1.2, 1.7,
        0.7, 2.9, 4.1, 2.6, 3.7, 3.9, 1.7, 2.3, 3.0, 3.3, 4.8, 5.0, 4.8, 5.0,
        3.2, 2.0, 0.9, 0.4, 0.3, 0.5, 0.4,
      ],
    },
  ],
  navigation: {
    menuItemStyle: {
      fontSize: "10px",
    },
  },
}

export const option2 = {
  chart: {
    type: "column",
    zoomType: "x",
    // 允许平移
    panning: true,
  },
  title: {
    text: "月平均降雨量",
  },
  subtitle: {
    text: "数据来源: WorldClimate.com",
  },
  xAxis: {
    categories: [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月",
    ],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: "降雨量 (mm)",
    },
  },
  tooltip: {
    // head + 每个 point + footer 拼接成完整的 table
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      borderWidth: 0,
    },
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: "东京",
      data: [
        49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
        95.6, 54.4,
      ],
    },
    {
      name: "纽约",
      data: [
        83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6,
        92.3,
      ],
    },
    {
      name: "伦敦",
      data: [
        48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2,
      ],
    },
    {
      name: "柏林",
      data: [
        42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1,
      ],
    },
  ],
}

export const itemList = [
  {
    img: "/src/assets/img/home-main1.png",
    title: "首屏可见",
    subtitle: 0.88,
    content: 1.56,
  },
  {
    img: "/src/assets/img/home-main2.png",
    title: "DOM Ready",
    subtitle: 0.88,
    content: 1.56,
  },
  {
    img: "/src/assets/img/home-main3.png",
    title: "页面Onload",
    subtitle: -0.88,
    content: 3.69,
  },
  {
    img: "/src/assets/img/home-main1.png",
    title: "采样PV",
    subtitle: 0.88,
    content: 0.69,
  },
]
