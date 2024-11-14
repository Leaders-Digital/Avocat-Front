import { Row,Col,Card, Divider, Button, Table } from 'antd'
import React, { useState } from "react";
import { Container } from 'reactstrap'
import AffectModel from './Components/AffectModel';

const GestionAffaires = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const hideModal = () => {
      setIsModalVisible(false);
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
            <Button type='primary' onClick={showModal}>
              Affecter
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
              <Button type='primary'>Ajouter Affaire</Button>
            </Divider>

            <Col span={24}>
              <Table columns={columns} dataSource={data} rowKey="key" />
            </Col>

            
          </Row>

          <AffectModel visible={isModalVisible} onClose={hideModal} />
            </Container>
        </div>

    )
}

export default GestionAffaires