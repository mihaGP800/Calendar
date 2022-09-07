import {FC} from 'react';

import {Navigate, Route, Routes} from 'react-router-dom';
import {AppRoutePaths} from './appRoutes';
import {Calendar} from '../../pages/calendar/Calendar';
import {Login} from '../../pages/login/Login';
import {App} from '../../App';
import {AuthCheck} from '../AuthCheck/AuthCheck';
import {NotFound} from '../../pages/NotFound/NotFound';


export const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path={AppRoutePaths.INDEX}>
                <Route index
                      element={
                          <AuthCheck>
                              <Calendar/>
                          </AuthCheck>}/>
            </Route>
            <Route path={AppRoutePaths.LOGIN} element={<Login/>}/>
            <Route path={AppRoutePaths.NOT_FOUND} element={<NotFound/>}/>
            <Route path={AppRoutePaths.RANDOM}
                   element={<Navigate to={AppRoutePaths.NOT_FOUND}/>}/>
        </Routes>
    )
};
