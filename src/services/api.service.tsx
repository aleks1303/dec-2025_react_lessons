import axios from "axios";
import {LoginData} from "../models/LoginData.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";



const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})




export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
  const {data: userWithTokens} = await axiosInstance.post('/login', {username, password, expiresInMins});
    localStorage.setItem('user', JSON.stringify(userWithTokens))
    console.log(userWithTokens)
    return userWithTokens
}

export const loadAuthPosts = () => {

}