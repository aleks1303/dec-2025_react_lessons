import axios from "axios";
import {LoginType} from "../models/LoginType.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {ITodos} from "../models/ITodos.ts";
import {ITodosModelBase} from "../models/ITodosModelBase.ts";
import {getLocalStorage} from "./helpers.tsx";
import {ITokenPair} from "../models/ITokenPair.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {'Content-Type': 'application/json'}
})

axiosInstance.interceptors.request.use((request) => {
    if (request.method?.toUpperCase() === "GET") {
        request.headers.Authorization = 'Bearer ' + getLocalStorage<IUserWithTokens>('user').accessToken
    }
    return request
})

export const loadAuthTodos = async (): Promise<ITodos[]> => {
    const {data: {todos}} = await axiosInstance.get<ITodosModelBase>('/todos')
    return todos
}


export const login =  async ({username, password, expiresInMins}:LoginType): Promise<IUserWithTokens[]> => {
    const {data: userWithTokens} = await axiosInstance.post('/login', {username, password, expiresInMins});
    localStorage.setItem('user', JSON.stringify(userWithTokens))
    console.log(userWithTokens)
    return userWithTokens
}

 export const refresh = async () => {
    const user = getLocalStorage<IUserWithTokens>('user')
 const {data: {refreshToken, accessToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
     refreshToken: user.refreshToken, expiresInMins: 1});
    user.accessToken = accessToken;
    user.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(user))
     console.log(accessToken)
     console.log(refreshToken)
    return user

}

