import { Col, Row, Card, Table, Divider, Button, Drawer } from 'antd';
import React, { useState } from 'react';
import { Container } from 'reactstrap';

const GestionClient = () => {
  // State to manage the visibility of the Drawer and selected client details
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  // Function to show the Drawer with selected client data
  const showDrawer = (record) => {
    setSelectedClient(record);
    setIsDrawerVisible(true);
  };

  // Function to close the Drawer
  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setSelectedClient(null);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Prenom',
      dataIndex: 'prenom',
      key: 'prenom',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button type='primary' onClick={() => showDrawer(record)}>
          View
        </Button>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Prospect 1',
      prenom: 'FirstName1',
      email: 'prospect1@example.com',
      details: 'Details about Prospect 1',
    },
    {
      key: '2',
      name: 'Prospect 2',
      prenom: 'FirstName2',
      email: 'prospect2@example.com',
      details: 'Details about Prospect 2',
    },
  ];

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Row gutter={16}>
            <Col xs={24} xl={6} style={{ paddingTop: '12px' }}>
              <Card title="Test">...</Card>
            </Col>
            <Col xs={24} xl={6} style={{ paddingTop: '12px' }}>
              <Card title="Test">...</Card>
            </Col>
            <Col xs={24} xl={6} style={{ paddingTop: '12px' }}>
              <Card title="Test">...</Card>
            </Col>
            <Col xs={24} xl={6} style={{ paddingTop: '12px' }}>
              <Card title="Test">...</Card>
            </Col>

            <Divider orientation='right'>
              <Button type='primary'>Ajouter Client</Button>
            </Divider>

            <Col span={24}>
              <Table columns={columns} dataSource={data} rowKey="key" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Drawer component for viewing client details */}
      <Drawer
        title="Client Details"
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
        width={400}
      >
        {selectedClient ? (
          <div>
            <p><strong>Name:</strong> {selectedClient.name}</p>
            <p><strong>Prenom:</strong> {selectedClient.prenom}</p>
            <p><strong>Email:</strong> {selectedClient.email}</p>
            <p><strong>Details:</strong> {selectedClient.details}</p>
          </div>
        ) : (
          <p>No details available</p>
        )}
      </Drawer>
    </>
  );
};

export default GestionClient;
