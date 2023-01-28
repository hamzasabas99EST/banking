import { useState } from 'react';
import { Layout,Menu } from "antd";
import { BankOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const {Sider}=Layout

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
      
    };
  }

const items = [
    getItem ('Agences', 'sub1', <BankOutlined />, [
      getItem(<Link to="CreateAgence" >Nouveau</Link>, '3'),
      getItem(<Link to="ListAgence" >List</Link>, '4'),
    ]),
    getItem('Agents', 'sub2', <UsergroupDeleteOutlined />, [
      getItem(<Link to="CreateAgent" >Nouveau</Link>, '6'), 
      getItem(<Link to="ListAgent" >List</Link>, '7')
    ]),
  ];


const SideBar = () => {
  
    const [collapsed, setCollapsed] = useState(false);
  
    
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div
                style={{
                    height: 32,
                    margin: 16,
                    background: 'rgba(255, 255, 255, 0.2)',
                }}
            />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    );
}

export default SideBar;