import axios from "axios";
import {LoginType} from "../models/LoginType.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {ITodosModelBase} from "../models/ITodosModelBase.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {'Content-Type': 'application/json'}
})

const login = async ({username, password, expiresInMins}: LoginType): Promise<IUserWithTokens[]> => {
const {data} = await axiosInstance.post<ITodosModelBase>('/login', {username, password, expiresInMins})
   

}

export {
    login
}