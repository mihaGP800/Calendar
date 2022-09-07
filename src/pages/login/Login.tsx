import React, {FC} from 'react';
import {Layout, Row} from 'antd';
import s from './Login.module.sass'
import {LoginForm} from '../../components/loginForm/LoginForm';

export const Login: FC = () => {
    return (
        <Layout>
            <Row justify='center'
                 align='middle'
                 className={s.container}>
                <LoginForm/>
            </Row>
        </Layout>
    );
}