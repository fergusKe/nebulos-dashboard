import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Modal, InputNumber } from 'antd'

const ProductModalForm = ({ visible, handleAddProductOk, handleAddProductCancel, onCreate }) => {
  const [form] = Form.useForm()
  const [formPrice, setFormPrice] = useState(0)
  const [formRakeback, setFormRakeback] = useState(5)
  const [formRake, setFormRake] = useState(0)

  useEffect(() => {
    form.setFieldsValue({
      price: formPrice,
      rakeback: formRakeback,
      rake: formRake,
    })
  }, [form, formPrice, formRake, formRakeback])

  const changeRakeback = rakeback => {
    const rake = (formPrice * rakeback) / 100
    console.log('rakeback = ', rakeback)
    console.log('rake = ', rake)
    setFormRakeback(rakeback)
    setFormRake(rake)
  }

  const changePrice = price => {
    console.log('price = ', price)
    const rake = (price * formRakeback) / 100
    console.log('rake = ', rake)
    setFormPrice(price)
    setFormRake((price * formRakeback) / 100)
  }

  return (
    <Modal
      getContainer={false}
      title="Add Product"
      okText="Add"
      cancelText="Cancel"
      visible={visible}
      onCancel={handleAddProductCancel}
      onOk={() => handleAddProductOk(form)}
    >
      <Form
        // labelCol={{
        //   span: 4,
        // }}
        // wrapperCol={{
        //   span: 18,
        // }}
        form={form}
        name="form_in_modal"
        layout="horizontal"
      >
        <Form.Item
          label="name"
          name="name"
          rules={[
            {
              required: true,
              message: '請輸入產品名稱',
            },
          ]}
        >
          <Input placeholder="product name" />
        </Form.Item>
        {/* <Form.Item
          label="id"
          name="p_id"
          rules={[
            {
              required: true,
              message: 'product',
            },
          ]}
        >
          <Input placeholder="123456" />
        </Form.Item> */}

        <Form.Item
          label="category"
          name="category"
          rules={[
            {
              required: true,
              message: '請輸入產品類別',
            },
          ]}
        >
          <Input placeholder="Accessories" />
        </Form.Item>
        {/* <Form.Item
          label="店鋪名稱"
          name="store_name"
          rules={[
            {
              required: true,
              message: '請輸入店鋪名稱',
            },
          ]}
        >
          <Input placeholder="果貿吳媽家" />
        </Form.Item> */}
        <Form.Item
          label="price"
          name="price"
          rules={[
            {
              required: true,
              message: '請輸入目前售價',
            },
          ]}
        >
          <InputNumber
            min={0}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            value={formPrice}
            onChange={changePrice}
          />
        </Form.Item>
        {/* <Form.Item
          label="佣金比例"
          name="rakeback"
          rules={[
            {
              required: true,
              message: '請輸入佣金比例',
            },
          ]}
        >
          <InputNumber
            min={0}
            max={100}
            formatter={value => `${value}%`}
            parser={value => value.replace('%', '')}
            value={formRakeback}
            onChange={changeRakeback}
          />
        </Form.Item> */}
        {/* <Form.Item
          label="預估佣金"
          name="rake"
        >
          <InputNumber
            disabled
            min={0}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            value={formRake}
          />
        </Form.Item> */}
        {/* <Form.Item label="上架時間">
        <DatePicker />
      </Form.Item> */}
        {/* <Form.Item label="商品狀態" name="state" className="form-item-last">
      <Select defaultValue="未上架">
        <Select.Option key="未上架" value="未上架">
          未上架
        </Select.Option>
        <Select.Option key="已上架" value="已上架">
          已上架
        </Select.Option>
      </Select>
    </Form.Item> */}
      </Form>
    </Modal>
  )
}

ProductModalForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleAddProductOk: PropTypes.func.isRequired,
  handleAddProductCancel: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
}

export default ProductModalForm
