import {Layout} from 'antd';
import React from 'react';
import './App.css';
import {AppRouter} from './router/appRoutes/AppRouter';
import {Navbar} from './components/navbar/Navbar';

export const App = () => {
    return (
        <Layout>
            <Navbar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
}
