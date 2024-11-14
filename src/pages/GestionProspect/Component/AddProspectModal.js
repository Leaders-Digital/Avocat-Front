import React from 'react'
import { Col, DatePicker, Divider, Form, Input, Modal, Select,Row } from "antd";

const AddProspectModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onCancel={onClose} onOk={onClose} title='Ajouter Porspect'>
         <Form
      name="layout-multiple-horizontal"
      layout="horizontal"
      
    >
      <Divider orientation=''></Divider>

      <Row gutter={16}>
    {/* Left Column */}
    <Col span={12}>
      <Form.Item name="nom" rules={[{ required: true }]}>
        <Input placeholder="Nom" />
      </Form.Item>

      <Form.Item name="prenom" rules={[{ required: true }]}>
        <Input placeholder="Prénom" />
      </Form.Item>

      <Form.Item name="telephone" rules={[{ required: true }]}>
        <Input placeholder="Téléphone" />
      </Form.Item>

      <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Entrez un email valide.' }]}>
        <Input placeholder="Email" />
      </Form.Item>
    </Col>

    {/* Right Column */}
    <Col span={12}>
      <Form.Item name="adresse" rules={[{ required: true }]}>
        <Input placeholder="Adresse" />
      </Form.Item>

      <Form.Item name="entreprise">
        <Input placeholder="Entreprise" />
      </Form.Item>

      <Form.Item name="statut" rules={[{ required: true }]}>
        <Select placeholder="Statut">
          <Select.Option value="Nouveau">Nouveau</Select.Option>
          <Select.Option value="Contacté">Contacté</Select.Option>
          <Select.Option value="En attente">En attente</Select.Option>
        </Select>
      </Form.Item>

      {/* <Form.Item name="dateCreation">
        <DatePicker placeholder="Date de création" style={{ width: '100%' }} />
      </Form.Item> */}

      <Form.Item name="notes">
        <Input.TextArea placeholder="Notes" />
      </Form.Item>
    </Col>
  </Row>

      
    </Form>
    </Modal>
  )
}

export default AddProspectModal