import axios from "axios";
import {IUser} from "../models/IUser.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

type LoginData = {
    username: string,
    password: string,
    expiresInMins: number
}


export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUser[]> => {
   const {data} = await axiosInstance.post<IUser>('/login')

}