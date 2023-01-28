import Layout from "antd/es/layout/layout";

const {Footer}=Layout

const FooterPage = () => {

    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Copyright © {new Date().getFullYear()} ENSAS
        </Footer>
    );
}

export default FooterPage;