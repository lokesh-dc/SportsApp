
import axios from "axios"

import {
    AUTH_LOGIN_LOADING,
    AUTH_LOGIN_ERROR,
    AUTH_LOGIN_SUCCESS,
    AUTH_SIGNUP_ERROR,
    AUTH_SIGNUP_LOADING,
    AUTH_SIGNUP_SUCCESS
} from "./auth.types"


export const userSignup = (creds) => async (dispatch) => {
    dispatch({type: AUTH_SIGNUP_LOADING});
    try{
        let response = await axios.post("http://localhost:8080/auth/signup", creds).then((res)=> res).then((e)=> e);
        dispatch({type: AUTH_SIGNUP_SUCCESS});
        return response.data;
    }catch(e){
        dispatch({type: AUTH_SIGNUP_ERROR, payload: e.response.data})
    }
}

export const userLogin = (creds) => async (dispatch) => {
    dispatch({type: AUTH_LOGIN_LOADING});
    try{
        let response = await axios.post("http://localhost:8080/auth/login", creds).then((res)=> res).then((e)=> e);
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