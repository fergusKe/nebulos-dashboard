import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Table, DatePicker, Radio, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import moment from 'moment'

const { RangePicker } = DatePicker

const columns = [
  {
    title: 'date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'order',
    dataIndex: 'orderNumber',
    key: 'orderNumber',
  },
  {
    title: 'amount',
    dataIndex: 'orderAmount',
    key: 'orderAmount',
  },
  {
    title: 'click',
    dataIndex: 'hitNumber',
    key: 'hitNumber',
  },
  {
    title: 'sales',
    dataIndex: 'bonus',
    key: 'bonus',
  },
]

const dataSource = [
  {
    date: '2020-04-28',
    orderNumber: 124,
    orderAmount: 6782,
    hitNumber: 35366,
    bonus: 86643,
  },
  {
    date: '2020-05-02',
    orderNumber: 241,
    orderAmount: 3631,
    hitNumber: 85427,
    bonus: 345714,
  },
  {
    date: '2020-06-08',
    orderNumber: 642,
    orderAmount: 4321,
    hitNumber: 64313,
    bonus: 743366,
  },
]

const today = dayjs().format('dddd')

function getThisWeekStart() {
  if (today === 'Monday') {
    return dayjs()
  }
  if (today === 'Tuesday') {
    return dayjs().subtract(1, 'days')
  }
  if (today === 'Wednesday') {
    return dayjs().subtract(2, 'days')
  }
  if (today === 'Thursday') {
    return dayjs().subtract(3, 'days')
  }
  if (today === 'Friday') {
    return dayjs().subtract(4, 'days')
  }
  if (today === 'Saturday') {
    return dayjs().subtract(5, 'days')
  }
  if (today === 'Sunday') {
    return dayjs().subtract(6, 'days')
  }
}

const thisWeekStart = getThisWeekStart().format('YYYY-MM-DD')
const thisWeekEnd = dayjs().format('YYYY-MM-DD')
const lastWeekStart = getThisWeekStart()
  .subtract(1, 'week')
  .format('YYYY-MM-DD')
const lastWeekEnd = getThisWeekStart()
  .subtract(1, 'day')
  .format('YYYY-MM-DD')
const lastMonthStart = dayjs()
  .subtract(1, 'month')
  .format('YYYY-MM-DD')
const lastMonthEnd = dayjs().format('YYYY-MM-DD')
const lastSeasonStart = dayjs()
  .subtract(3, 'month')
  .format('YYYY-MM-DD')
const lastSeasonEnd = dayjs().format('YYYY-MM-DD')
const lastYearStart = dayjs()
  .subtract(1, 'year')
  .format('YYYY-MM-DD')
const lastYearEnd = dayjs().format('YYYY-MM-DD')

const PromotionOverviewTable = props => {
  // const { dataSource } = props
  const [start, setStart] = useState(thisWeekStart)
  const [end, setEnd] = useState(thisWeekEnd)
  // const dataSource = [{"2020-04-28":{"total_order":4,"total_revenue":140,"total_bonus":1.8,"total_click":1},"2020-06-04":{"total_order":8,"total_revenue":280,"total_bonus":3.6000000000000005,"total_click":1},"2020-04-29":{"total_order":6,"total_revenue":7696,"total_bonus":66.05999999999999,"total_click":1},"2020-04-30":{"total_order":4,"total_revenue":1930,"total_bonus":10.100000000000001,"total_click":1}}]

  // console.log('summary = ', dataSource)

  // useEffect(() => {
  //   fetchSummary(thisWeekStart, thisWeekEnd, 'day')
  // }, [fetchSummary])

  const onPickerChange = (date, dateString) => {
    // console.log('data', date, 'dateString', dateString)
    setStart(dateString[0])
    setEnd(dateString[1])
  }

  const onRadioChange = e => {
    const { value } = e.target
    // console.log('value = ', value)

    if (value === 'thisWeek') {
      setStart(thisWeekStart)
      setEnd(thisWeekEnd)
    }

    if (value === 'lastWeek') {
      setStart(lastWeekStart)
      setEnd(lastWeekEnd)
    }

    if (value === 'lastMonth') {
      setStart(lastMonthStart)
      setEnd(lastMonthEnd)
    }

    if (value === 'lastSeason') {
      setStart(lastSeasonStart)
      setEnd(lastSeasonEnd)
    }

    if (value === 'lastYear') {
      setStart(lastYearStart)
      setEnd(lastYearEnd)
    }
  }

  const onSubmit = () => {
    // console.log('submit')
    // fetchSummary(start, end, 'day')
  }
  return (
    <div>
      <div className="search-wrap" style={{ backgroundColor: '#eae6e6', padding: '30px', borderRadius: '10px' }}>
        <span>Interval：</span>
        <RangePicker
          style={{ marginBottom: '10px', width: '350px' }}
          onChange={onPickerChange}
          // defaultValue={[moment(thisWeekStart, 'YYYY-MM-DD'), moment(thisWeekEnd, 'YYYY-MM-DD')]}
          value={[moment(start, 'YYYY-MM-DD'), moment(end, 'YYYY-MM-DD')]}
        />
        <span>
          <Radio.Group defaultValue="thisWeek" onChange={onRadioChange} style={{ border: 'none' }}>
            <Radio.Button value="thisWeek">This week</Radio.Button>
            <Radio.Button value="lastWeek">Last week</Radio.Button>
            <Radio.Button value="lastMonth">One month</Radio.Button>
            <Radio.Button value="lastSeason">One season</Radio.Button>
            <Radio.Button value="lastYear">One year</Radio.Button>
          </Radio.Group>
        </span>
        <div className="btn-wrap">
          <Button type="primary" icon={<SearchOutlined />} style={{ margin: '10px 20px 0px 0' }} onClick={onSubmit}>
            Search
          </Button>
          {/* <Button style={{ margin: '10px 0 0px 0', backgroundColor: '#8c8c8c', color: 'white', border: 'none' }}>
            匯出報表
          </Button> */}
        </div>
      </div>
      <Table dataSource={dataSource} columns={columns} size="default"></Table>
    </div>
  )
}

PromotionOverviewTable.propTypes = {
  // dataSource: PropTypes.array.isRequired,
  // fetchSummary: PropTypes.func.isRequired,
}

export default PromotionOverviewTable
