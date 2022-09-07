import React, {FC} from 'react';
import {Layout, Menu, MenuProps, Row} from 'antd';
import s from './navbar.module.sass'
import {useNavigate} from 'react-router-dom';
import {AppRoutePaths} from '../../router/appRoutes/appRoutes';
import {useAppSelector} from '../../store/store';


let items = [
    {label: 'Login', key: 'Login'}, // remember to pass the key prop
    {label: 'Logout', key: 'Logout'}, // which is required
];


export const Navbar: FC = () => {

    const isAuth = useAppSelector(state => state.auth.isAuth)

    const navigate = useNavigate()

    const onClick: MenuProps['onClick'] = e => {
        if (e.key === 'Login') {
            navigate(AppRoutePaths.LOGIN)
        }
        if (e.key === 'Logout') {
            console.log('You\'re Logout')
        }
    }
    items = isAuth ? items.slice(1, 2) : items.slice(0, 1)

    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth && <div className={s.name}>USER_NAME</div>}
                <Menu items={items}
                      onClick={onClick}
                      mode="horizontal"
                      theme='dark'
                      selectable={false}
                      className={s.menu}>
                </Menu>
            </Row>
        </Layout.Header>
    );
}