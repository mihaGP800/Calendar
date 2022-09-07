import {FC, ReactElement} from 'react';

import {Navigate} from 'react-router-dom';
import {AppRoutePaths} from '../appRoutes/appRoutes';


type Props = {
    children?: ReactElement;
};

export const AuthCheck: FC<Props> = ({children}) => {
    const isAuth = true
    if (!isAuth) return <Navigate to={AppRoutePaths.LOGIN}/>;
    return children || null;
};
