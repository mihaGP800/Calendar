import React, {FC} from 'react';
import {Layout, Row} from 'antd';

export const Navbar: FC = () => {
    return (
        <Layout.Header>
            <Row justify='end'>
                <div style={{color: 'white'}}>Header</div>
            </Row>
        </Layout.Header>
    );
}