import axios from "axios";
import {
    EVENTS_FETCH_ERROR,
    EVENTS_FETCH_LOADING,
    EVENTS_FETCH_SUCCESS,
    EVENT_ADD_ERROR,
    EVENT_ADD_LOADING,
    EVENT_ADD_SUCCESS,
    FETCH_SINGLE_EVENT_LOADING,
    FETCH_SINGLE_EVENT_SUCCESS
} from "./events.types"


export const fetchEvents = ({sort=1, city=""}) => async (dispatch) => {
    dispatch({type: EVENTS_FETCH_LOADING});
    try{
        const response = await axios.get(`http://localhost:8080/events?sort=${sort}&city=${city}`).then((res)=> res).catch((e)=> e);
        dispatch({type: EVENTS_FETCH_SUCCESS, payload: response.data});
    }catch(e){
        dispatch({type: EVENTS_FETCH_ERROR, payload: e.response.data.message});
    }
}

export const fetchParticularEvent = (id) => async (dispatch) => {
    dispatch({type: FETCH_SINGLE_EVENT_LOADING});
    try{
        const response = await axios.get(`http://localhost:8080/events/${id}`).then((res)=> res).catch((e)=> console.log(e));
        dispatch({type: FETCH_SINGLE_EVENT_SUCCESS, payload: response.data});
    }catch(e){
        dispatch({type: FETCH_SINGLE_EVENT_SUCCESS, payload: e.response.data.message});
    }
}

export const createEvent = (eventDetail) => async (dispatch) => {
    dispatch({type: EVENT_ADD_LOADING});
    try{
        await axios.post("http://localhost:8080/events", eventDetail).then((res)=> res).catch((e)=> console.log(e));
        dispatch({type: EVENT_ADD_SUCCESS});
        fetchEvents();
    }catch(e){
        dispatch({type: EVENTS_FETCH_ERROR, payload: e.response})
    }
}

export const joinEvent = ({id,userId}) => async (dispatch) => {
    dispatch({type: EVENT_ADD_LOADING});
    try{
        await axios.patch(`http://localhost:8080/events/${id}`, {userId}).then((res)=> res).catch((e)=> console.log(e));
        dispatch({type: EVENT_ADD_SUCCESS});
        fetchEvents();
    }catch(e){
        dispatch({type: EVENT_ADD_ERROR})
    }
}