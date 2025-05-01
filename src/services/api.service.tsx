import axios from "axios";
import {ILoginData} from "../models/ILoginData.ts";
import {IUserWithToken} from "../models/IUserWithToken.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {'Content-Type': 'application/json'}
})

export const login = async ({username, password, expiresInMins}: ILoginData): Promise<IUserWithToken[]> => {
    const {data: userWithToken} = await axiosInstance.post('/login', {username, password, expiresInMins});
    localStorage.setItem('user', JSON.stringify(userWithToken))
    return userWithToken
}
