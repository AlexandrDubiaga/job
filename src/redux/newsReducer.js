import React from 'react';
import {newsAPI} from '../commons/api/api';
const GET_NEWS = "GET_NEWS";


let initialState = {
news:[],
isFetching:false
}

const newsReducer=(state=initialState,action)=>{

    switch(action.type){
        case GET_NEWS:
            debugger
            return{
                ...state,
                news:[...action.data.data],
                isFetching:true
            }
        default:
            return state
    }

}

export const getNewsData = (data) => ({ type: GET_NEWS, data})


export const getNewsThunk = () => (dispatch) => {
    newsAPI.getNews().then(response => {
        if (response.data.status === "ok") {
            dispatch(getNewsData(response.data))
        }
    })
}

export default newsReducer