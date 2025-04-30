
import axios from "axios";
import {LoginData} from "../models/LoginData.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IComment} from "../models/IComment.ts";
import {ICommentBase} from "../models/ICommentBase.ts";
import {getLocalStorage} from "./helpers.tsx";
import {ITokenPair} from "../models/ITokenPair.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {'Content-Type': 'application/json'}
})

axiosInstance.interceptors.request.use((request) => {
    if (request.method?.toUpperCase() === 'GET') {
        request.headers.Authorization = 'Bearer ' + getLocalStorage<IUserWithTokens>('user').accessToken
    }
    return request
});



export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens[]> => {
   const {data: userWithToken} = await axiosInstance.post('/login', {username, password, expiresInMins})
    localStorage.setItem('user', JSON.stringify(userWithToken))
    console.log(userWithToken)
    return userWithToken
}

export const loadAuthComments = async (): Promise<IComment[]> => {
    const {data: {comments}} = await axiosInstance.get<ICommentBase>('/comments')
    return comments
}


export const refresh = async () => {
    const user = getLocalStorage<IUserWithTokens>('user')
   const {data: {accessToken, refreshToken}} =  await axiosInstance.post<ITokenPair>('/refresh',
       {refreshToken: user.refreshToken, expiresInMins: 1});
    user.accessToken = accessToken;
    user.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(user))
}


