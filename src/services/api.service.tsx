import axios from "axios";
import {LoginData} from "../models/LoginData.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IPost} from "../models/IPost.ts";
import {IPostModelType} from "../models/IPostModelType.ts";


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

export const getLocalStorage = <T,> (key: string) => {
    const object = localStorage.getItem(key) || '';
    if(!object) {
        return {} as T
    }
    const parse = JSON.parse(object).accessToken
    return parse as T
}

axiosInstance.interceptors.request.use((requestObject) => {
    if(requestObject.method?.toUpperCase() === "GET") {
        requestObject.headers.Authorization = 'Bearer ' + getLocalStorage('user')
    }
    return requestObject
})






export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
  const {data: userWithTokens} = await axiosInstance.post('/login', {username, password, expiresInMins});
    localStorage.setItem('user', JSON.stringify(userWithTokens))
    console.log(userWithTokens)
    return userWithTokens
}

export const loadAuthPosts = async ():Promise<IPost[]> => {
  const {data: {posts} } = await axiosInstance.get<IPostModelType>('/posts')
    return posts
}















// export const loadAuthPosts = async (): Promise<IPost[]> => {
//     const {data} = await  axiosInstance.get<IPostModelType>('/posts')
//     return data.posts
// }

// const getLocalStorage = <T,> (key: string) => {
//   const object =  localStorage.getItem(key) || '';
//   if (!object) {
//       return {} as T
//   }
//   const parse = JSON.parse(object)
//     return parse as T
// }
//
//
//
// axiosInstance.interceptors.request.use((requestObject) => {
//     if (requestObject.method?.toUpperCase() === "GET") {
//         requestObject.headers.Authorization = 'Bearer ' + getLocalStorage<IUserWithTokens>('user').accessToken
//     }
//     return requestObject
// })
