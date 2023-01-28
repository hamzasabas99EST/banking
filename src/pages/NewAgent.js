import { InfoCircleOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Form, Input, Row, Col, Select, message } from 'antd';
import axios from 'axios';
import { useState } from 'react';


const agences = [
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
]

const NewAgent = () => {

    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const [username,setUsername]=useState()
    const [name,setName]=useState()
    const [password,setPassword]=useState()
    const [agence,setAgence]=useState()

    const onHandleChangeUsername=(e)=>{
        setUsername(e.target.value)
    }

    const onHandleChangeName=(e)=>{
        setName(e.target.value)
    }

    const onHandleChangePwd=(e)=>{
        setPassword(e.target.value)
    }

    const onHandleChangeAgence=(value)=>{
        setAgence(value)
    }
    
    const onSubmitForm=()=>{
        let agent={username,name,agence,password}

        /*axios.post("http:",agent)
        .then(res=> success())
        .catch(err=>error())*/
        
       
    }    

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

                        <Form.Item label="Nom Complet" required tooltip="This is a required field">
                            <Input placeholder="input placeholder" value={name} onChange={onHandleChangeName}/>
                        </Form.Item>

                        <Form.Item label="Agence" required tooltip="This is a required field">
                            <Select
                                showSearch
                                placeholder="Choisissez une Ville"
                                optionFilterProp="children"
                                onChange={onHandleChangeAgence}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={agences.map(agence=>({value:agence.value,label:agence.label})) }
                            />
                        </Form.Item>

                    </Col>
                    <Col span={9} offset={2}>

                        <Form.Item label="Nom d'utilisateur" required tooltip="This is a required field">
                            <Input placeholder="input placeholder" value={username} onChange={onHandleChangeUsername} />
                        </Form.Item>
                        
                        <Form.Item
                            label="Mot de passe"
                            required
                            tooltip={{
                                title: 'Tooltip with customize icon',
                                icon: <InfoCircleOutlined />,
                            }}
                        >
                            <Input.Password
                                placeholder="input password"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                value={password} 
                                onChange={onHandleChangePwd}
                            />
                        </Form.Item>
                    </Col>
                </Row>



                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ marginRight: "15px" }} >Enregistrer</Button>
                    <Button danger type="primary"  >Annuler</Button>
                </Form.Item>
            </Form>
        </div>
    );


}


export default NewAgent