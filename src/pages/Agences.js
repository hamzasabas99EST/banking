import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';



const data = [
    {}
];

const Agences = () => {

    //state agences
    const [agences, setAgences] = useState([
        {
            key: 'agence.id',
            nom: 'agence.nom',
            ville: 'agence.villeAgence',
            addresse: 'agence.adresseAgence',
            tele: 'agence.telephoneAgence',
            statut: 'agence.active'
        }
    ])

    //Searche
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    useEffect(() => {
        getAgences()
    })

    //get agences
    const getAgences = () => {
        axios.get("http://localhost:/")
            .then(res => setAgences(res.data))
            .catch(err => console.log(err))
    }


    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'Nom',
            dataIndex: 'nom',
            key: 'nom',
            width: '20%',
            ...getColumnSearchProps('nom'),
        },
        {
            title: 'Ville',
            dataIndex: 'ville',
            key: 'ville',
            width: '20%',
            ...getColumnSearchProps('ville'),
        },
        {
            title: 'Addresse',
            dataIndex: 'addresse',
            key: 'addresse',
            ...getColumnSearchProps('addresse'),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Téléphone',
            dataIndex: 'tele',
            key: 'tele',
            width: '20%',
            ...getColumnSearchProps('tele'),
        },
        {
            title: 'Statut',
            dataIndex: 'statut',
            key: 'statut',
            width: '20%',
            ...getColumnSearchProps('statut'),
        },

    ];
    return <Table columns={columns} 
        dataSource={agences}
    />;




}

export default Agences;