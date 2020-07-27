export default {
  color: ['#6eb9ff', '#6efff2', '#c2ff80', '#f4c04a', '#ff6f6f'],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Accessories', 'Furniture', 'Bags', 'Clothes', 'stationery'],
  },
  series: [
    {
      name: 'sales',
      type: 'pie',
      radius: '85%',
      center: ['50%', '50%'],
      emphasis: {
        label: {
          show: true,
          fontSize: '30',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: true,
      },
      data: [
        { value: 335, name: 'Accessories' },
        { value: 310, name: 'Furniture' },
        { value: 234, name: 'Bags' },
        { value: 135, name: 'Clothes' },
        { value: 1548, name: 'Stationery' },
      ],
    },
  ],
}
