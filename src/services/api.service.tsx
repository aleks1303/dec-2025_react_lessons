import {IUser} from "../models/interfaces/IUser.ts";

const baseUrl = 'https://jsonplaceholder.typicode.com'


export const getAllUsers = async ():Promise<IUser[]> => {
  return await  fetch(baseUrl + '/users')
        .then((response) => response.json())
}




export const postService = {
    getAllPosts: async () => {
     return await fetch(baseUrl + '/posts')
            .then((response) => response.json())
    }
}