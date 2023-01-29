import { Button, message, Steps, theme, Form, Input, Row, Col, Select, InputNumber, Switch } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

const steps = [
    {
        title: 'First',
        content: 'First-content',
    },
    {
        title: 'Second',
        content: 'Second-content',
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];

const FormTransfert = () => {

    const [form] = Form.useForm();

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    //mount clients
    const [clients,setClients]=useState([])

    //state data
    const [donneur,setDonneur]=useState('SABAS')
    const [beneficaire,setBeneficaire]=useState('SABAS')
    const [type,setType]=useState()
    const [montant,setMontant]=useState()
    const [motif,setMotif]=useState()
    const [notification,setNotification]=useState(false)
    

    //getClients

     const getClients=()=>{
        /*axios.get("http://localhost:8080/")
        .then(res=>setClients(res.data))
        .catch(err=>console.log(err))*/
     }

     useEffect(()=>{
        getClients()
     },[])

    //end Clients

    //steps
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    const contentStyle = {

        lineHeight: '300px',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
        padding: "10px 50px",

    };
    //end of steps

    //handle inputs
    const onChangeDonneur=(val)=>{
        setDonneur(val)
    }

    const onChangeBeneficaire=(val)=>{
        setBeneficaire(val)
    }

    const onChangeType=(val)=>{
        setType(val)
    }

    const onChangeMontant=(value)=>{
        setMontant(value)
    }

    const onChangeMotif=(e)=>{
        setMotif(e.target.value)
    }

    const onChangeNotification=()=>{
        setNotification(!notification)
    }

    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Enregistrement est ajouté',
        });
    };

    const onSubmit=async()=>{
        let gab=false
        if(type==="GAB Boa") gab=true

        const transfert={
            donneur,
            beneficaire,
            type,
            montant,
            motif,
            gab,
            notification

        }
        success()

        /**
         axios.post('http:localhost:8080/',transfert){}
        */
    }



    return (
        <>
            {contextHolder}
            <Steps current={current} items={items} />
            <Form
                form={form}
                layout="vertical"
                onFinish={onSubmit}

            >
                <div style={contentStyle}>
                    <Row>
                        {current === 0 &&
                            <>
                                <Col span={9} offset={1}>

                                    <Form.Item label="Nom Donneur" required tooltip="This is a required field">
                                        <Select
                                            showSearch
                                            optionFilterProp="children"
                                            onChange={onChangeDonneur}
                                            value={donneur}
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={clients.map(client=>({value:client.fullname,label:client.fullname}))}
                                        />
                                    </Form.Item>
                                    <Form.Item label="Type de transfert" required tooltip="This is a required field">
                                        <Select
                                            showSearch
                                            optionFilterProp="children"
                                            onChange={onChangeType}
                                            value={type}
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={[
                                                {
                                                    value: 'Walet',
                                                    label: 'Walet',
                                                },
                                                {
                                                    value: 'GAB Boa',
                                                    label: 'GAB Boa',
                                                },

                                            ]}
                                        />
                                    </Form.Item>


                                </Col>
                                <Col span={9} offset={1}>
                                    <Form.Item label="Nom Beneficaire" required tooltip="This is a required field">
                                        <Select
                                            showSearch
                                            optionFilterProp="children"
                                            onChange={onChangeBeneficaire}
                                            value={beneficaire}
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={clients.map(client=>({value:client.fullname,label:client.fullname}))}
                                        />
                                    </Form.Item>

                                </Col>
                            </>
                        }

                        {current === 1 &&
                            <>
                                <Col span={9} offset={1}>
                                    <Form.Item label="Montant" required tooltip="This is a required field">

                                        <InputNumber
                                            onChange={onChangeMontant}
                                            value={montant}
                                            prefix="MAD"
                                            style={{ width: '100%' }}
                                        />
                                    </Form.Item>

                                </Col>
                                <Col span={9} offset={1}>
                                    <Form.Item label="Motif" required tooltip="This is a required field">
                                        <Input placeholder="" 
                                            onChange={onChangeMotif}
                                            value={motif}
                                        />
                                    </Form.Item>

                                </Col>
                            </>
                        }
                        {current === 2 &&
                            <>
                                <Col span={4} offset={4}>
                                    <Form.Item label="Notification" required tooltip="This is a required fie">
                                        <Switch onChange={onChangeNotification}/>
                                    </Form.Item>
                                </Col>
                                <Col span={4} offset={4}>
                                    <Form.Item label="GAB BOA" required tooltip="This is a required fie">
                                        <Switch disabled={true} checked={type==="GAB Boa" ? true : false} />
                                    </Form.Item>
                                </Col>
                            </>
                        }

                    </Row>
                </div>

                <div
                    style={{
                        marginTop: 24,
                    }}
                >
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" htmlType='submit'>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={() => prev()}
                        >
                            Previous
                        </Button>
                    )}
                </div>

            </Form>
        </>
    );
}

export default FormTransfert