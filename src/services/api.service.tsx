import axios from "axios";
import {LoginType} from "../models/LoginType.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {'Content-Type': 'application/json'}
})

const login = async ({username, password, expiresInMins}:LoginType): Promise<IUserWithTokens> => {
   const {data} = await axiosInstance.post('/login', {username, password, expiresInMins})
    localStorage.setItem('user', data)
    console.log(data)
    return data
}

const loadAuthTodos = async () => {

 return await axiosInstance.get('/auth/resources', {})
}

export {
    login,
    loadAuthTodos
}