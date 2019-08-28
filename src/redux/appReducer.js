import React from 'react';
import { stopSubmit } from 'redux-form';
import {authAPI} from '../commons/api/api';
const SET_USER_DATA = "SET_USER_DATA";
const FETCHING = "FETCHING";


let initialState = {
    isAutoraized:false,
    idAuthUser:null,
    toogleFetching:false
}

const appReducer=(state=initialState,action)=>{
 
        switch(action.type){
            case SET_USER_DATA:
                return{
                    ...state,
                    idAuthUser:action.data.data.id,
                    isAutoraized:action.isAuth,
            }
            case FETCHING:
                    return{
                        ...state,
                        toogleFetching:action.action
                }
            default:
                    return state
        }
    
}

export const setAuthUserData = (data, isAuth) => ({ type: SET_USER_DATA, data, isAuth })

export const toogleIsFetching = (action) => ({ type: FETCHING, action })

export const loginMeThunk = (data) => (dispatch) => {
    authAPI.loginUser(data).then(response => {
        if (response.data.status === "ok") {
                dispatch(setAuthUserData(response.data,true))
        } else{
            dispatch(toogleIsFetching(false))
            dispatch(stopSubmit("login", { _error: response.data.status }));
            dispatch(stopSubmit("login", { _error: response.data.message }));
            
        }
    })
}

export default appReducer