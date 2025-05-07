import {IUser} from "../models/interfaces/IUser.ts";

export const getAllUsers = async ():Promise<IUser[]> => {
  return await  fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
}




export const postService = {
    getAllPosts: async () => {
     return await fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
    }
}