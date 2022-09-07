import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AuthActionsType, authReducer} from './reucers/authReducer';

const rootReducer = combineReducers({
    auth: authReducer
})

// @ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, applyMiddleware(thunk))


export type AppRootActionType = AuthActionsType

export type ThunkApp<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AppRootActionType>;

export type TypedDispatch = ThunkDispatch<AppRootStateType, unknown, AppRootActionType>;

export const useAppDispatch = (): TypedDispatch => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

export type AppRootStateType = ReturnType<typeof store.getState>;