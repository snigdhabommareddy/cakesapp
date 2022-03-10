import axios from "axios"

export var snigdha=axios.create({
    baseURL:"https://apifromashu.herokuapp.com/api"
})

snigdha.interceptors.request.use((request)=>{
    request.headers["authtoken"]=localStorage.token
    return request
})