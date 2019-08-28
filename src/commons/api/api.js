import axios from "axios";


const instance = axios.create({
    baseURL:"https://mysterious-reef-29460.herokuapp.com/api/v1/"

});


export const authAPI={
    loginUser(data){
        return instance.post(`validate`,{
            email:data.email,
            password:data.password
        })},



}


export const profileAPI={
    getDataProfile(userId){
        return instance.get(`user-info/${userId}`)}
}

export const newsAPI={
    getNews(){
        return instance.get(`news`)}
}



