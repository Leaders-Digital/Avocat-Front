import React from 'react'
import { Divider, Form, Input, Modal } from "antd";

const AddProspectModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onCancel={onClose} onOk={onClose} title='Ajouter Porspect'>
         <Form
      name="layout-multiple-horizontal"
      layout="horizontal"
      
    >
      <Divider orientation=''></Divider>

      <Form.Item  name="nom" rules={[{ required: true }]}>
        <Input placeholder='Nom'/>
      </Form.Item>

      <Form.Item  name="prenom" rules={[{ required: true }]} >
        <Input placeholder='Prenom'/>
      </Form.Item>

      <Form.Item  name="tel" rules={[{ required: true }]}>
        <Input placeholder='Téléphone'/>
      </Form.Item>

      <Form.Item  name="email" rules={[{ required: true }]}>
        <Input placeholder='Email'/>
      </Form.Item>

     

      <Form.Item  name="adresse" rules={[{ required: true }]}>
        <Input placeholder='Adresse'/>
      </Form.Item>


      
    </Form>
    </Modal>
  )
}

export default AddProspectModal