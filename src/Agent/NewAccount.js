import { Button, Form, Input, Select, InputNumber, Row, Col, message } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

const NewAccount = () => {

    const [form] = Form.useForm();
    const [sexe, setSexe] = useState()
    const [nom, setNom] = useState()
    const [prenom, setPrenom] = useState()
    const [fullname, setFullname] = useState()
    const [tele, setTele] = useState()
    const [email, setEmail] = useState("")
    const [solde, setSolde] = useState()
    const [numCompte, setNumCompte] = useState()

    useEffect(() => {
        generateNumCard()
    }, [])

    const generateNumCard = () => {
        let num = ""
        for (let i = 0; i < 16; i++) {
            num += Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        }

        setNumCompte(num)
    }

    const onHandleChangeSexe = (value) => {
        setSexe(value)
    }

    const onHandleChangeNom = (e) => {
        setNom(e.target.value)

    }

    const onHandleChangePrenom = (e) => {
        setPrenom(e.target.value)

    }


    const onHandleChangeTele = (e) => {
        setTele(e.target.value)

    }

    const onHandleChangeEmail = (e) => {
        setEmail(e.target.value)

    }

    const onHandleChangeSolde = (value) => {
        setSolde(value)

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
    const onSubmitForm = async (e) => {

        await setFullname(nom + ' ' + prenom)


        const client = {
            fullname,
            email,
            'gsm': tele,
            'titre': sexe,
            solde
        }

        axios.post("http:/", client)
            .then(res => success())
            .catch(err => error())

        console.log(client)

    }

    const reset = () => {

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
                        <h1>Infos Client</h1>

                        <Form.Item label="Sexe" required tooltip="This is a required field">
                            <Select

                                showSearch
                                placeholder="Mr/Mme/Mlle"
                                optionFilterProp="children"
                                onChange={onHandleChangeSexe}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        value: 'Mr',
                                        label: 'Mr',
                                    },
                                    {
                                        value: 'Mme',
                                        label: 'Mme',
                                    },
                                    {
                                        value: 'Mlle',
                                        label: 'Mlle',
                                    },

                                ]}
                            />
                        </Form.Item>

                        <Form.Item label="Nom" required tooltip="This is a required field">
                            <Input placeholder="" value={nom} onChange={onHandleChangeNom} />
                        </Form.Item>

                        <Form.Item label="Prénom" required tooltip="This is a required field">
                            <Input placeholder="" value={prenom} onChange={onHandleChangePrenom} />
                        </Form.Item>

                        <Form.Item label="email" required tooltip="This is a required field">
                            <Input placeholder="" value={email} onChange={onHandleChangeEmail} />
                        </Form.Item>

                        <Form.Item label="Téléphone" required tooltip="This is a required field">
                            <Input placeholder="" value={tele} onChange={onHandleChangeTele} />
                        </Form.Item>


                    </Col>
                    <Col span={9} offset={2}>
                        <h1>Info Compte</h1>

                        <Form.Item label="Numéro Compte" required tooltip="This is a required field">
                            <Input value={numCompte} readOnly />
                        </Form.Item>
                        
                        <Form.Item label="Solde Initial" required tooltip="This is a required field">

                            <InputNumber
                                prefix="MAD"
                                onChange={onHandleChangeSolde}
                                style={{ width: '100%' }}
                            />
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