import React from 'react';
import {profileAPI} from '../commons/api/api';
const SET_PROFILE_DATA = "SET_PROFILE_DATA";


let initialState = {
    languages:[],
    city:'',
    social:[],
    isFetching:false


}

const profileReducer=(state=initialState,action)=>{

    switch(action.type){
        case SET_PROFILE_DATA:
            return{
                ...state,
                languages:[...action.data.data.languages],
                city:action.data.data.city,
                social:[...action.data.data.social],
                isFetching:true

            }
        default:
            return state
    }

}

export const setProfileData = (data) => ({ type: SET_PROFILE_DATA, data})

export const getProfileDataThunk = (userId) => (dispatch) => {
    profileAPI.getDataProfile(userId).then(response => {
        if (response.data.status === "ok") {
            dispatch(setProfileData(response.data))
        }
    })
}

export default profileReducer