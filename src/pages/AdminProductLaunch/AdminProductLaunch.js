import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Card, Col, Row, Button, Form, Modal, Input, Radio } from 'antd'
import ProductTable from './ProductTable'
// import AdminLayout from '../../components/AdminLayout/AdminLayout'
import LayoutWrapper from '../../components/layoutWrapper'
import ProductModalForm from './ProductModalForm'
import CollectionCreateForm from './CollectionCreateForm'

import './AdminProductLaunch.scss'

const AdminProductLaunch = (props) => {
  const { rolePath } = props
  const [visible, setVisible] = useState(false)
  const [products, setProducts] = useState([
    {
    "id": 1,
    "name": "aaa",
    "p_id": "111",
    "price": 15,
    "rakeback": 0.01,
    "created_at": "2020-04-27T06:36:29.000Z",
    "updated_at": "2020-07-27T13:49:45.000Z",
    "rake": 2,
    "state": "未上架",
    "category": 'Accessories',
    "store_name": null,
    "created_by": "訂單"
    },
    {
    "id": 2,
    "name": "bbb",
    "p_id": "222",
    "price": 15,
    "rakeback": 0.01,
    "created_at": "2020-04-27T06:36:29.000Z",
    "updated_at": "2020-06-16T08:43:41.000Z",
    "rake": 2,
    "state": "已上架",
    "category": 'Accessories',
    "store_name": null,
    "created_by": "訂單"
    },
    {
    "id": 3,
    "name": "ccc",
    "p_id": "333",
    "price": 15,
    "rakeback": 0.01,
    "created_at": "2020-04-27T06:36:29.000Z",
    "updated_at": "2020-06-23T06:37:25.000Z",
    "rake": 2,
    "state": "已上架",
    "category": 'Furniture',
    "store_name": null,
    "created_by": "訂單"
    },
    {
    "id": 4,
    "name": "ddd",
    "p_id": "444",
    "price": 230,
    "rakeback": 0.01,
    "created_at": "2020-04-29T03:39:04.000Z",
    "updated_at": "2020-04-29T03:39:04.000Z",
    "rake": 2,
    "state": "未上架",
    "category": 'Furniture',
    "store_name": null,
    "created_by": "訂單"
    },
    {
    "id": 5,
    "name": "eee",
    "p_id": "555",
    "price": 260,
    "rakeback": 0.01,
    "created_at": "2020-04-29T03:39:04.000Z",
    "updated_at": "2020-04-29T03:39:04.000Z",
    "rake": 2,
    "state": "未上架",
    "category": 'Furniture',
    "store_name": null,
    "created_by": "訂單"
    },
    ])

  const fetchProducts = useCallback(() => {
  //   const productsUrl = `http://utility.turingdigital.com.tw/v1/products`

  //   axios
  //     .get(productsUrl)
  //     .then(function(response) {
  //       let { data } = response
  //       data = data.map(item => ({
  //         ...item,
  //         key: item.id,
  //       }))
  //       console.log('products response = ', data)
  //       setProducts(data)
  //     })
  //     .catch(function(error) {
  //       console.log(error)
  //     })
  }, [])

  const addProducts = useCallback(() => {
    // const productsUrl = `http://utility.turingdigital.com.tw/v1/products`
    // axios
    //   .post(productsUrl, {
    //     category: null,
    //     created_by: '訂單',
    //     id: 1,
    //     key: 1,
    //     name: 'test',
    //     p_id: '12345',
    //     price: 15,
    //     rake: 2,
    //     rakeback: 0.01,
    //     state: '未上架',
    //     store_name: null,
    //   })
    //   .then(function(response) {
    //     const { data } = response
    //     console.log('addProducts = ', data)
    //     setVisible(false)
    //   })
    //   .catch(function(error) {
    //     console.log(error)
    //   })
  }, [])

  // useEffect(() => {
  //   fetchProducts()
  // }, [fetchProducts])

  const showModal = () => {
    setVisible(true)
  }

  const onCreate = values => {
    // console.log('onCreate')
    // console.log('Received values of form: ', values)

    // const productsUrl = `http://utility.turingdigital.com.tw/v1/products`
    // const postData = {
    //   created_by: '訂單', // 有哪幾種分類
    //   state: '未上架',
    //   ...values,
    // }
    // console.log('postData = ', postData)
    // axios
    //   .post(productsUrl, postData)
    //   .then(function(response) {
    //     const { data } = response
    //     console.log('addProducts = ', data)
    //     // setVisible(false)
    //   })
    //   .catch(function(error) {
    //     console.log(error)
    //   })

    // setVisible(false)
  }

  const handleAddProductOk = form => {
    console.log('handleAddProductOk')
    setVisible(false)
    // form
    //   .validateFields()
    //   .then(values => {
    //     // form.resetFields()
    //     console.log('values = ', values)
    //     onCreate(values)
    //   })
    //   .catch(info => {
    //     console.log('Validate Failed:', info)
    //   })
    // addProducts()
  }

  const handleAddProductCancel = () => {
    console.log('handleAddProductCancel')
    setVisible(false)
  }

  // const handleAdd = () => {
  //   const { count, dataSource } = this.state
  //   const newData = {
  //     key: count,
  //     name: `Edward King ${count}`,
  //     age: 32,
  //     address: `London, Park Lane no. ${count}`,
  //   }
  //   this.setState({
  //     dataSource: [...dataSource, newData],
  //     count: count + 1,
  //   })
  // }

  return (
    <div>
      <LayoutWrapper rolePath={rolePath} selectedKeys="2">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
              <h1>Product list</h1>
              <div style={{ display: 'flex', margin: '30px 0' }}>
                <Button type="primary" onClick={showModal}>
                  Add product
                </Button>
                <ProductModalForm
                  visible={visible}
                  handleAddProductOk={handleAddProductOk}
                  handleAddProductCancel={handleAddProductCancel}
                  onCreate={onCreate}
                  onCancel={() => {
                    setVisible(false)
                  }}
                />
                {/* <CollectionCreateForm
                  visible={visible}
                  onCreate={onCreate}
                  onCancel={() => {
                    setVisible(false)
                  }}
                /> */}
              </div>
              <ProductTable dataSource={products} fetchProducts={fetchProducts} />
            </Card>
          </Col>
        </Row>
      </LayoutWrapper>
    </div>
  )
}

export default AdminProductLaunch
