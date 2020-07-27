export default {
  color: ['#fa653c'],
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
      boundaryGap: false,
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
      data: [82, 93, 91, 93, 129, 133, 132, 82, 93, 90, 93, 129],
      type: 'line',
      smooth: true,
      areaStyle: {},
    },
  ],
}
