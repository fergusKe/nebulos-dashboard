export default {
  color: ['#75AFF9', 'orange'],
  dataView: { show: true },
  title: {
    // text: '統計銷售額',
    // subtext: '纯属虚构',
  },
  tooltip: {
    trigger: 'axis',
  },
  toolbox: {
    show: false, // 關閉數據視圖
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  legend: {
    data: ['Sales', 'Pageview'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  calculable: true,
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Sales',
      data: [1239, 833, 432, 393, 529, 1330, 132, 961, 393, 529, 1093, 829],
      type: 'line',
    },
    {
      name: 'Pageview',
      data: [282, 1032, 391, 923, 578, 133, 132, 489, 793, 290, 393, 1290],
      type: 'line',
    },
  ],
}
