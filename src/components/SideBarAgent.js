import { useState } from 'react';
import { Layout,Menu } from "antd";
import { SwapOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';
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
   
    getItem('Comptes', 'sub1', <UsergroupDeleteOutlined />, [
      getItem(<Link to="CreateAccount" >Nouveau</Link>, '6'), 
      getItem(<Link to="ListAccount" >List</Link>, '7')
    ]),
    
    getItem('Transferts', 'sub2', <SwapOutlined />, [
        getItem(<Link to="transfert" >Nouveau</Link>, '8'), 
        getItem(<Link to="ListAccount" >Historique</Link>, '9')
      ]),
  ];


const SideBarAgent = () => {
  
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

export default SideBarAgent;