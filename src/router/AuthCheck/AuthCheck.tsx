import {FC, ReactElement} from 'react';

import {Navigate} from 'react-router-dom';
import {AppRoutePaths} from '../appRoutes/appRoutes';
import {useAppSelector} from '../../store/store';


type Props = {
    children?: ReactElement;
};

export const AuthCheck: FC<Props> = ({children}) => {
    const isAuth = useAppSelector(state => state.auth.isAuth)

    if (!isAuth) return <Navigate to={AppRoutePaths.LOGIN}/>;
    return children || null;
};
