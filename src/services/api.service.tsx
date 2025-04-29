import axios from "axios";
import {IUserWithToken} from "../models/IUserWithTokens.ts";


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

type loginData = {
    username: string,
    password: string,
    expiresInMins: number
}

export const login = async ({username, password, expiresInMins}: loginData): Promise<IUserWithToken[]> => {
  const {data: userWithTokens} = await  axiosInstance.post<IUserWithToken>('/login', {username, password, expiresInMins});
  localStorage.setItem('user',)
    console.log(userWithTokens)
   return userWithTokens
}