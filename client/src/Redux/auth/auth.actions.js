
import axios from "axios"
import {
    AUTH_LOGIN_LOADING,
    AUTH_LOGIN_ERROR,
    AUTH_LOGIN_SUCCESS,
    AUTH_SIGNUP_ERROR,
    AUTH_SIGNUP_LOADING,
    AUTH_SIGNUP_SUCCESS,
    FETCH_USERDETAILS_LOADING,
    FETCH_USERDETAILS_ERROR,
    FETCH_USERDETAILS_SUCCESS,
    USER_LOGOUT
} from "./auth.types"


export const userSignup = (creds) => async (dispatch) => {
    dispatch({type: AUTH_SIGNUP_LOADING});
    try{
        let response = await axios.post("https://outstanding-pike-toga.cyclic.app/auth/signup", creds).then((res)=> res).then((e)=> e);
        dispatch({type: AUTH_SIGNUP_SUCCESS});
        return response.data;
    }catch(e){
        dispatch({type: AUTH_SIGNUP_ERROR, payload: e.response.data})
    }
}

export const userLogin = (creds) => async (dispatch) => {
    dispatch({type: AUTH_LOGIN_LOADING});
    try{
        let response = await axios.post("https://outstanding-pike-toga.cyclic.app/auth/login", creds).then((res)=> res).then((e)=> e);
        if(response.data.status)
            dispatch({type: AUTH_LOGIN_SUCCESS, payload: response.data.userId});
        else
            throw response.data.message
        // console.log(response);
        return response.data;
    }catch(e){
        dispatch({type: AUTH_LOGIN_ERROR, payload:e.response.data.message})
    }
}

export const fetchUserDetails = (id) => async (dispatch) => {
    dispatch({type:FETCH_USERDETAILS_LOADING});
    try{
        let response = await axios.get(`https://outstanding-pike-toga.cyclic.app/auth/${id}`).then((res)=> res).catch((e)=> e);
        dispatch({type: FETCH_USERDETAILS_SUCCESS, payload : response.data})
    }catch(e){
        dispatch({type: FETCH_USERDETAILS_ERROR, payload: e.response.data});
    }
}


export const userLogout = () =>{
    return{type: USER_LOGOUT};
}