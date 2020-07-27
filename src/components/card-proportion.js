import React from 'react'
import { Card, Col, Row, Tabs, Progress } from 'antd'
import Barchart from './barchart'
import pageviewProportion from '../pages/ReportCart/data/pageview-proportion-config'
import pageviewConversion from '../pages/ReportCart/data/pageview-conversion-config'

import './card.scss'

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

class Proportion extends React.Component {
  render() {
    return (
      <div className="site-card-wrapper">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card title="Percentage of sales category" bordered={false}>
              <Barchart option={pageviewProportion} />
            </Card>
          </Col>
          <Col span={24}>
            <Card title="Commodity conversion rate" bordered={false} style={{ minheight: '300px' }}>
              <Col span={24}>
                <Tabs defaultActiveKey="1" onChange={callback} style={{ backgroundColor: '#fff' }}>
                  <TabPane tab="Accessories" key="1">
                    <div style={{ margin: '20px 0 -10px 0' }}>
                      <p>
                        conversion rate
                        <span style={{ marginLeft: '10px' }}>
                          <Progress type="circle" percent={23} width={80} />
                        </span>
                      </p>
                    </div>
                    <Barchart option={pageviewConversion} style={{ margin: '10px 0 30px 0' }} />
                  </TabPane>
                  <TabPane tab="Furniture" key="2">
                    <div style={{ margin: '20px 0 -10px 0' }}>
                      <p>
                        conversion rate
                        <span style={{ marginLeft: '10px' }}>
                          <Progress type="circle" percent={14} width={80} />
                        </span>
                      </p>
                    </div>
                    <Barchart option={{
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
      data: [1039, 533, 732, 293, 729, 1030, 432, 661, 893, 329, 1293, 529],
      type: 'line',
    },
    {
      name: 'Pageview',
      data: [282, 1032, 691, 923, 278, 133, 432, 889, 793, 590, 393, 1090],
      type: 'line',
    },
  ],
}} style={{ margin: '10px 0 30px 0' }} />
                  </TabPane>
                  <TabPane tab="Bags" key="3">
                    <div style={{ margin: '20px 0 -10px 0' }}>
                      <p>
                        conversion rate
                        <span style={{ marginLeft: '20px' }}>
                          <Progress type="circle" percent={21} width={80} />
                        </span>
                      </p>
                    </div>
                    <Barchart option={{
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
      data: [739, 833, 632, 393, 829, 1130, 632, 961, 193, 329, 793, 829],
      type: 'line',
    },
    {
      name: 'Pageview',
      data: [282, 1032, 691, 923, 578, 533, 132, 389, 793, 490, 393, 1290],
      type: 'line',
    },
  ],
}} style={{ margin: '10px 0 30px 0' }} />
                  </TabPane>
                  <TabPane tab="Clothes" key="4">
                    <div style={{ margin: '20px 0 -10px 0' }}>
                      <p>
                        conversion rate
                        <span style={{ marginLeft: '10px' }}>
                          <Progress type="circle" percent={19} width={80} />
                        </span>
                      </p>
                    </div>
                    <Barchart option={{
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
      data: [1139, 933, 832, 293, 429, 1330, 932, 261, 593, 529, 693, 829],
      type: 'line',
    },
    {
      name: 'Pageview',
      data: [282, 1032, 791, 1123, 278, 733, 332, 489, 793, 290, 893, 1290],
      type: 'line',
    },
  ],
}} style={{ margin: '10px 0 30px 0' }} />
                  </TabPane>
                  <TabPane tab="Stationery" key="5">
                    <div style={{ margin: '20px 0 -10px 0' }}>
                      <p>
                        conversion rate
                        <span style={{ marginLeft: '10px' }}>
                          <Progress type="circle" percent={35} width={80} />
                        </span>
                      </p>
                    </div>
                    <Barchart option={{
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
      data: [1239, 833, 432, 593, 329, 1330, 132, 561, 593, 229, 1493, 1029],
      type: 'line',
    },
    {
      name: 'Pageview',
      data: [282, 1032, 591, 923, 278, 433, 832, 389, 993, 490, 393, 1290],
      type: 'line',
    },
  ],
}} style={{ margin: '10px 0 30px 0' }} />
                  </TabPane>
                </Tabs>
              </Col>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Proportion
