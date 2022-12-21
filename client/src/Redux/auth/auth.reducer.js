import {
    AUTH_LOGIN_LOADING,
    AUTH_LOGIN_ERROR,
    AUTH_LOGIN_SUCCESS,
    AUTH_SIGNUP_ERROR,
    AUTH_SIGNUP_LOADING,
    AUTH_SIGNUP_SUCCESS,
    FETCH_USERDETAILS_LOADING,
    FETCH_USERDETAILS_ERROR,
    FETCH_USERDETAILS_SUCCESS
} from "./auth.types"


const initState = {
    loading : false,
    error : null,
    isAuth : false,
    userId : null,
    userDetails : null
}

export const authReducer = (state=initState, {type, payload}) => {
    switch(type){
        case AUTH_LOGIN_LOADING:
            return{
                ...state,
                loading : true,
                error: null,
            }
        case AUTH_LOGIN_ERROR:
            return{
                ...state,
                loading : false,
                error : payload
            }
        case AUTH_LOGIN_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                isAuth: true,
                userId : payload
            }
        case AUTH_SIGNUP_LOADING:
            return{
                ...state,
                loading : true,
                error: null,
            }
        case AUTH_SIGNUP_ERROR:
            return{
                ...state,
                loading : false,
                error : payload
            }
        case AUTH_SIGNUP_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
            }
        case FETCH_USERDETAILS_LOADING:
            return{
                ...state,
                loading : true,
                error: null,
            }
        case FETCH_USERDETAILS_ERROR:
            return{
                ...state,
                loading : false,
                error : payload
            }
        case FETCH_USERDETAILS_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                userDetails : payload
            }
        default : 
            return state;
    }
}