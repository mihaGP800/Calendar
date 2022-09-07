enum AuthActions {
    SET_AUTH = 'AUTH/SET-AUTH'
}

const initState = {
    isAuth: false
}

type AuthStateType = typeof initState

export const authReducer = (state: AuthStateType = initState, {
    type,
    payload
}: AuthActionsType): AuthStateType => {
    switch (type) {
        case AuthActions.SET_AUTH:
            return {...state, ...payload}
        default:
            return state
    }
}

export const setAuth = (isAuth: boolean) =>
    ({type: AuthActions.SET_AUTH, payload: {isAuth}} as const)


export type AuthActionsType = ReturnType<typeof setAuth>