import axios from "axios";
import {LoginData} from "../models/LoginData.ts";
import {IUser} from "../models/IUser.ts";
import {IUserBase} from "../models/IUserBase.ts";
import {IUserWithToken} from "../models/IUserWithToken.ts";
import {getLocalStorage} from "./helpers.tsx";
import {ITokenPair} from "../models/ITokenPair.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {'Content-Type': 'application/json'}
})


axiosInstance.interceptors.request.use((request) => {
    if (request.method?.toUpperCase() === "GET") {
        request.headers.Authorization = 'Bearer ' + getLocalStorage<IUserWithToken>('user').accessToken
    }
    return request
})



export const login = async ({username, password, expiresInMins}: LoginData): Promise<LoginData> => {
    const {data: userWithTokens} = await axiosInstance.post('/login', {username, password, expiresInMins});
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens
}

export const loadAuthUsers = async (): Promise<IUser[]> => {
    const {data: {users}} = await axiosInstance.get<IUserBase>('/users');
    return users
}

export const refresh = () => {
    const user = getLocalStorage<IUserWithToken>('user')
    const {accessToken, refreshToken} = axiosInstance.post('/refresh', {refreshToken:user.refreshToken, expiresInMins:1});
    user.accessToken = accessToken;
    user.refreshToken = refreshToken
}