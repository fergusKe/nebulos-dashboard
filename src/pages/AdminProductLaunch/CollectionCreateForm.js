import React from 'react'
import PropTypes from 'prop-types'
import { Form, Modal, Input, InputNumber } from 'antd'

const CollectionCreateForm = ({ visible, onCreate }) => {
  const [form] = Form.useForm()

  function onChange(value) {
    console.log('changed', value)
  }

  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields()
            onCreate(values)
          })
          .catch(info => {
            console.log('Validate Failed:', info)
          })
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
        </Form.Item>
        <Form.Item name="asd" label="Asd">
          <Input defaultValue={7} placeholder="5" />
          {/* <input type="number" /> */}
        </Form.Item>
      </Form>
    </Modal>
  )
}

CollectionCreateForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
}

export default CollectionCreateForm
