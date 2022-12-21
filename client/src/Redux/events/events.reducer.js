import {
    EVENTS_FETCH_ERROR,
    EVENTS_FETCH_LOADING,
    EVENTS_FETCH_SUCCESS,
    EVENT_ADD_ERROR,
    EVENT_ADD_LOADING,
    EVENT_ADD_SUCCESS
} from "./events.types"


const initState = {
    loading : false,
    error : null,
    data : []
}

export const eventReducer = (state=initState, {type, payload}) => {
    switch(type){
        case EVENTS_FETCH_LOADING:
            return{
                ...state,
                loading : true,
                error: null,
            }
        case EVENTS_FETCH_ERROR:
            return{
                ...state,
                loading : false,
                error : payload
            }
        case EVENTS_FETCH_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                data : payload
            }
        case EVENT_ADD_LOADING:
            return{
                ...state,
                loading : true,
                error: null,
            }
        case EVENT_ADD_ERROR:
            return{
                ...state,
                loading : false,
                error : payload
            }
        case EVENT_ADD_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
            }
        default : 
            return state;
    }
}