import axios from "axios";
import {
    EVENTS_FETCH_ERROR,
    EVENTS_FETCH_LOADING,
    EVENTS_FETCH_SUCCESS,
    FETCH_SINGLE_EVENT_LOADING,
    FETCH_SINGLE_EVENT_SUCCESS
} from "./events.types"


export const fetchEvents = () => async (dispatch) => {
    dispatch({type: EVENTS_FETCH_LOADING});
    try{
        const response = await axios.get("http://localhost:8080/events").then((res)=> res).catch((e)=> e);
        dispatch({type: EVENTS_FETCH_SUCCESS, payload: response.data});
    }catch(e){
        dispatch({type: EVENTS_FETCH_ERROR, payload: e.response.data.message});
    }
}

export const fetchParticularEvent = (id) => async (dispatch) => {
    dispatch({type: FETCH_SINGLE_EVENT_LOADING});
    try{
        const response = await axios.get(`http://localhost:8080/events/${id}`).then((res)=> res).catch((e)=> e);
        dispatch({type: FETCH_SINGLE_EVENT_SUCCESS, payload: response.data});
    }catch(e){
        dispatch({type: FETCH_SINGLE_EVENT_SUCCESS, payload: e.response.data.message});
    }
}

