import { Divider, Form, Modal, Select } from 'antd'
import { Option } from 'antd/es/mentions'
import React from 'react'

const AffectModel = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onCancel={onClose} onOk={onClose} title="Affecter Affaire">

        <Divider></Divider>
    
    <Form.Item
        name="client"
        label="Client"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Client"
     
          allowClear
        >
          <Option value="male">flen ben flen</Option>
          <Option value="female">flen ben flen</Option>
          <Option value="other">flen ben flen</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="client"
        label="Avocat"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Avocat"
     
          allowClear
        >
          <Option value="male">flen ben flen</Option>
          <Option value="female">flen ben flen</Option>
          <Option value="other">flen ben flen</Option>
        </Select>
      </Form.Item>

  </Modal>
  )
}

export default AffectModel