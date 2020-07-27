import React, { useContext, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd'

// const originData = []

// for (let i = 0; i < 100; i += 1) {
//   originData.push({
//     key: i.toString(),
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   })
// }

const ProductTable = ({ dataSource, fetchProducts }) => {
  const [form] = Form.useForm()
  // const [data, setData] = useState(originData)
  const [editingKey, setEditingKey] = useState('')

  useEffect(() => {
    console.log('dataSource = ', dataSource)
  }, [dataSource])

  const edit = record => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    })
    setEditingKey(record.key)
  }

  const cancel = () => {
    setEditingKey('')
  }

  // const save = async key => {
  //   try {
  //     const row = await form.validateFields()
  //     const newData = [...data]
  //     const index = newData.findIndex(item => key === item.key)

  //     if (index > -1) {
  //       const item = newData[index]
  //       newData.splice(index, 1, { ...item, ...row })
  //       setData(newData)
  //       setEditingKey('')
  //     } else {
  //       newData.push(row)
  //       setData(newData)
  //       setEditingKey('')
  //     }
  //   } catch (errInfo) {
  //     console.log('Validate Failed:', errInfo)
  //   }
  // }

  const handleEditState = item => {
    console.log('handleEditState = ', item)
    const productsUrl = `http://utility.turingdigital.com.tw/v1/products/${item.id}`

    const state = item.state === '已上架' ? '未上架' : '已上架'
    console.log('state = ', state)

    axios
      .put(productsUrl, {
        state,
      })
      .then(function(response) {
        const { data } = response
        console.log('handleEditState response = ', data)
        fetchProducts()
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  const handleProductEdit = item => {
    console.log('handleProductEdit = ', item)
  }

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      // width: '20%',
      // render: text => <a>{text}</a>,
    },
    {
      title: 'id',
      dataIndex: 'p_id',
      key: 'p_id',
    },
    {
      title: 'category',
      dataIndex: 'category',
      key: 'category',
    },
    // {
    //   title: '店鋪名稱',
    //   dataIndex: 'store_name',
    //   key: 'store_name',
    // },
    // {
    //   title: '佣金比例',
    //   dataIndex: 'rakeback',
    //   key: 'rakeback',
    //   render: text => `${text * 100}%`,
    // },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    // {
    //   title: '預估佣金',
    //   dataIndex: 'rake',
    //   key: 'rake',
    // },
    {
      title: 'created_at',
      dataIndex: 'created_at',
      key: 'created_at',
    },
    // {
    //   title: '產品狀態',
    //   dataIndex: 'state',
    //   key: 'state',
    // },
    // {
    //   title: '產品操作',
    //   dataIndex: 'edit_state',
    //   key: 'edit_state',
    //   render: (item, record) => {
    //     const { state } = record
    //     const confirmTitle = `確定${state.slice(1, 3)}?`
    //     const stateTitle = state === '未上架' ? '上架產品' : '下架產品'

    //     return (
    //       <Popconfirm title={confirmTitle} onConfirm={() => handleEditState(record)}>
    //         <a>{stateTitle}</a>
    //       </Popconfirm>
    //     )
    //   },
    // },
    {
      title: 'action',
      dataIndex: 'edit',
      render: (_, record) => (
        <button
          className="button_edit"
          type="button"
          disabled={editingKey !== ''}
          onClick={() => handleProductEdit(record)}
          style={{
            marginRight: 8,
            color: '#1890ff',
            textDecoration: 'none',
            backgroundColor: 'transparent',
            outline: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s',
            border: '0',
          }}
        >
          Edit
        </button>
      ),
    },
  ]

  // const totalData = [
  //   {
  //     key: '1',
  //     productName: '【水哦X果貿吳媽家】獨家聯名－千歲豬腳麵線禮盒★限量組數',
  //     productId: 'djk334',
  //     productCategory: '豬腳麵線禮盒',
  //     shopName: '水哦X果貿吳媽家',
  //     bonusProportion: '5%',
  //     price: 'NT 399',
  //     preBonus: 'NT 59',
  //     date: '2020-01-01',
  //     productStatus: '未上架',
  //     productOperat: '立即上架',
  //   },
  // ]

  return (
    <Form form={form} component={false}>
      <Table
        bordered
        dataSource={dataSource}
        columns={columns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  )
}

ProductTable.propTypes = {
  dataSource: PropTypes.array.isRequired,
  fetchProducts: PropTypes.func.isRequired,
}

export default ProductTable
