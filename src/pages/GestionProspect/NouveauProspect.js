import { Button, Card, Col, Divider, Row, Table, Collapse, Checkbox, DatePicker, Select } from 'antd';
import React, { useState } from 'react';
import { Container } from 'reactstrap';
import AddProspectModal from './Component/AddProspectModal';

const { Panel } = Collapse;
const { Option } = Select;


const NouveauProspect = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  // Sample data for the table
  const data = [
    {
      key: '1',
      name: 'Prospect 1',
      age: 32,
      address: 'New York No. 1 Lake Park',
      details: 'Details about Prospect 1',
    },
    {
      key: '2',
      name: 'Prospect 2',
      age: 42,
      address: 'London No. 1 Lake Park',
      details: 'Details about Prospect 2',
    },
  ];

  // Columns for the table
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },

    {
      title: 'Prenom',
      dataIndex: 'name',
      key: 'name',
    },

    {
      title: 'Email',
      dataIndex: 'name',
      key: 'name',
    },
    
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Checkbox
        >
          Valider
        </Checkbox>

        <EyeOutlined />
      ),
    },

  ];

  // Function to render the expanded row
  const expandedRowRender = (record) => {
    return (
      <div style={{ marginTop: '10px' }}>

        <Checkbox style={{ marginRight: '10px' }}>Appel Téléphone </Checkbox>

        <Checkbox style={{ marginRight: '10px' }}> RDV </Checkbox>

        <DatePicker style={{ marginRight: '30px' }} />

     
          <span>Prise de Décision: </span>
          <Select
            style={{ width: 160, marginLeft: '10px' }}
            placeholder="Sélectionner"
          >
            <Option value="interesser">Intéressé</Option>
            <Option value="nonInteresser">Non Intéressé</Option>
            <Option value="cible">Cible</Option>
            <Option value="nonCible">Non Cible</Option>
          </Select>
   
      </div>
    );
  };

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Row gutter={16}>
            <Col xs={24} xl={6} style={{ paddingTop: '12px' }}>
              <Card title="Test">
                ...
              </Card>
            </Col>
            <Col xs={24} xl={6} style={{ paddingTop: '12px' }}>
              <Card title="Test">
                ...
              </Card>
            </Col>
            <Col xs={24} xl={6} style={{ paddingTop: '12px' }}>
              <Card title="Test">
                ...
              </Card>
            </Col>
            <Col xs={24} xl={6} style={{ paddingTop: '12px' }}>
              <Card title="Test">
                ...
              </Card>
            </Col>

            <Divider orientation="right">
              <Button
                type="primary"
                style={{ backgroundColor: '#DCC151', borderColor: '#DCC151' }}
                onClick={showModal}
              >
                Ajouter Prospect
              </Button>
            </Divider>

            {/* Modal Component */}
            <AddProspectModal visible={isModalVisible} onClose={hideModal} />

            {/* Table with collapsible rows */}
            <Col span={24}>
              <Table
                columns={columns}
                dataSource={data}
                expandable={{
                  expandedRowRender,
                }}
                rowKey="key"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NouveauProspect;
