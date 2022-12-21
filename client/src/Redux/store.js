import { legacy_createStore, applyMiddleware, combineReducers, compose } from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./auth/auth.reducer"
import { eventReducer } from "./events/events.reducer"

const rootReducer = combineReducers({
    auth: authReducer,
    events : eventReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)) )

