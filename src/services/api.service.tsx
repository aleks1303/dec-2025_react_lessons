import axios from "axios";
import {LoginType} from "../models/LoginType.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {ITodosModelBase} from "../models/ITodosModelBase.ts";
import {ITodos} from "../models/ITodos.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {'Content-Type': 'application/json'}
})


const getUserFromLS = <T,> (key: string) => {
    const object = localStorage.getItem(key) || ''
    if (!object) {
        return {} as T
    } const parse = JSON.parse(object)
    return parse as T

}


axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + getUserFromLS<IUserWithTokens>('user').accessToken
    }
    return requestObject
})

const login = async ({username, password, expiresInMins}:LoginType): Promise<IUserWithTokens> => {
   const {data} = await axiosInstance.post('/login', {username, password, expiresInMins})
    localStorage.setItem('user', data)
    console.log(data)
    return data
}



const loadAuthTodos = async (): Promise<ITodos[]> => {
  const {data: {todos}} = await axiosInstance.get<ITodosModelBase>('/todos')
    return todos
}


export {
    login,
    loadAuthTodos
}