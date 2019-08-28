import React from 'react';
import { combineReducers,createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import appReducer from './appReducer';
import { reducer as formReducer } from 'redux-form';
import profileReducer from "./profileReducer";
import newsReducer from "./newsReducer";


const rootReducer = combineReducers({
    app:appReducer,
    form:formReducer,
    profileData:profileReducer,
    newsData:newsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))   