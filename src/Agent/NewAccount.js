import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Checkbox, Row, Col, Select, message } from 'antd';
import axios from 'axios';
import { useState } from 'react';

const NewAccount = () => {

    const [form] = Form.useForm();
    const [nom, setNom] = useState()
    const [ville, setVille] = useState()
    const [adresse, setAdresse] = useState()
    const [tele, setTele] = useState()
    const [statut, setStatut] = useState(false)

    const onHandleChangeNom = (e) => {
        setNom(e.target.value)

    }

    const onHandleChangeVille = (value) => {
        setVille(value)

    }
    const onHandleChangeAdresse = (e) => {
        setAdresse(e.target.value)

    }

    const onHandleChangeTele = (e) => {
        setTele(e.target.value)

    }

    const onHandleChangeStatut = (e) => {
        setStatut(!statut)

    }


    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Enregistrement est ajouté',
        });
    };

    const error = () => {
        messageApi.open({
          type: 'error',
          content: 'This is an error message',
        });
      };

    //submit
    const onSubmitForm = (e) => {
        let agence = {
            nomAgence: nom,
            villeAgence: ville,
            adresseAgence: adresse,
            telephoneAgence: tele,
            active: statut
        }

                

        /*
            axios.port('http:',agence)
            .then((res)=>success())
            .catch(err=>error())

        
        */



    }

    const reset = () => {
        setNom("")
        setVille("")
        setAdresse("")
        setTele("")
        setStatut(false)
    }

    return (
        <div>
            {contextHolder}
            <Form
                form={form}
                layout="vertical"
                onFinish={onSubmitForm}


            >

                <Row>
                    <Col span={9} >
                        <Form.Item label="Nom d'agene" required tooltip="This is a required field">
                            <Input placeholder="" value={nom} onChange={onHandleChangeNom} />
                        </Form.Item>

                    </Col>
                    <Col span={9} offset={2}>

                        <Form.Item
                            label="Adresse"
                            required
                            tooltip={{
                                title: 'Tooltip with customize icon',
                                icon: <InfoCircleOutlined />,
                            }}
                        >
                            <Input placeholder="" value={adresse} onChange={onHandleChangeAdresse} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={9} >
                        <Form.Item label="Ville" required tooltip="This is a required field">
                            <Select
                                showSearch
                                placeholder="Choisissez une Ville"
                                optionFilterProp="children"
                                onChange={onHandleChangeVille}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        value: 'Safi',
                                        label: 'Safi',
                                    },
                                    {
                                        value: 'Marrakech',
                                        label: 'Marrakech',
                                    },
                                    {
                                        value: 'Agadir',
                                        label: 'Agadir',
                                    },
                                    {
                                        value: 'Casablanca',
                                        label: 'Casablanca',
                                    },
                                    {
                                        value: 'Khnifra',
                                        label: 'Khnifra',
                                    },
                                    {
                                        value: 'Teznit',
                                        label: 'Teznit',
                                    }
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="Téléphone" required tooltip="This is a required field">
                            <Input placeholder="input placeholder" value={tele} onChange={onHandleChangeTele} />
                        </Form.Item>

                    </Col>
                    <Col span={9} offset={2}>

                        <Form.Item
                            label="Statut"
                            tooltip={{
                                title: 'Tooltip with customize icon',
                                icon: <InfoCircleOutlined />,
                            }}
                        >
                            <Checkbox onChange={onHandleChangeStatut} >Active</Checkbox>
                        </Form.Item>
                    </Col>
                </Row>



                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ marginRight: "15px" }} >Enregistrer</Button>
                    <Button danger type="primary" onClick={reset} >Annuler</Button>
                </Form.Item>
            </Form>
        </div>
    );


}


export default NewAccount