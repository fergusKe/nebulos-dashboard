export default {
  color: ['#75AFF9'],
  dataView: { show: false },
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
  calculable: true,
  xAxis: [
    {
      type: 'category',
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'pageview',
      type: 'bar',
      data: [125.0, 142.9, 171.0, 123.2, 125.6, 76.7, 135.6, 162.2, 92.6, 120.0, 86.4, 123.3],
      markLine: {
        data: [{ type: 'average', name: '平均值' }],
      },
    },
  ],
}
