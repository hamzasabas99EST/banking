import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import FooterPage from '../components/Footer';
import SideBarAgent from '../components/SideBarAgent';

const { Header, Content } = Layout;

const MainAgent = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <SideBarAgent />
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Agent</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <FooterPage />
            </Layout>
        </Layout>
    )
}

export default MainAgent