import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductResponseType} from "../models/IProductResponseType.ts";
import {getLocalStorage} from "./helpers.tsx";
import {ITokensPair} from "../models/ITokensPair.ts";


type LoginData = {
    username:string,
    password:string,
    expiresInMins: number
}

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})



axiosInstance.interceptors.request.use((requestObject) => {
    if(requestObject.method?.toUpperCase() === "GET") {
        requestObject.headers.Authorization = 'Bearer ' + getLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject
})



const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
 const {data: userWithTokens} = await  axiosInstance.post('/login', {username, password, expiresInMins});
 localStorage.setItem('user', JSON.stringify(userWithTokens))
    console.log(userWithTokens)
 return userWithTokens
}




const loadAuthProducts = async (): Promise<IProduct[]> => {
const {data} = await axiosInstance.get<IProductResponseType>('/products')
    console.log(data)
  return data.products
}


const refresh = async () => {
    const iUserWithToken = getLocalStorage<IUserWithTokens>('user')
  const {data: {accessToken, refreshToken} } =  await axiosInstance.post<ITokensPair>('refresh', {refreshToken:iUserWithToken.refreshToken, expiresInMins: 1})
    console.log(accessToken);
    console.log(refreshToken)
    iUserWithToken.accessToken = accessToken;
    iUserWithToken.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithToken))
}



export {
    login,
    loadAuthProducts,
    refresh
}