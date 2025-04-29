import axios from "axios";
import {IUser} from "../models/IUser.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})



export const login = async (): Promise<IUser[]> => {
    await axiosInstance.post<IUser>('user')
}