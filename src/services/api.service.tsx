import axios from "axios";
import {ILoginData} from "../models/ILoginData.ts";
import {IUserWithToken} from "../models/IUserWithToken.ts";
import {IQuote} from "../models/IQuote.ts";
import {IQuotesBase} from "../models/IQuotesBase.ts";
import {getUserLocalStorage} from "./helpers.tsx";
import {ITokenPair} from "../models/ITokenPair.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {'Content-Type': 'application/json'}
})

axiosInstance.interceptors.request.use((request) => {
    if (request.method?.toUpperCase() === "GET") {
        request.headers.Authorization = 'Bearer ' + getUserLocalStorage().accessToken
    }
    return request
})


export const login = async ({username, password, expiresInMins}: ILoginData): Promise<IUserWithToken[]> => {
    const {data: userWithToken} = await axiosInstance.post('/login', {username, password, expiresInMins});
    localStorage.setItem('user', JSON.stringify(userWithToken))
    return userWithToken
}

export const loginOut =() => {
    return  localStorage.removeItem('user');
}

export const loadAuthQuotes = async (page: string): Promise<IQuote[]> => {
    const limit = 30
    const skip = limit * (+page) - limit
    const {data: {quotes}} = await axiosInstance.get<IQuotesBase>('/quotes?'+ skip);
    return quotes
}

export const refresh = async () => {
    const user = getUserLocalStorage()
    const {
        data: {
            accessToken,
            refreshToken
        }
    } = await axiosInstance.post<ITokenPair>('/refresh', {refreshToken: user.refreshToken, expiresInMins: 1})
    user.accessToken = accessToken;
    user.refreshToken = refreshToken
    localStorage.setItem('user', JSON.stringify(user))
    console.log(accessToken)
    console.log(refreshToken)
}


