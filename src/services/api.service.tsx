import {IUser} from "../models/IUser.ts";
import {IPost} from "../models/IPost.ts";
import {IComment} from "../models/IComments.ts";

const baseUrl = import.meta.env.VITE_BASE_URL


export const userService = {
    getAllUsers: async ():Promise<IUser[]> => {
      return  await fetch(baseUrl + '/users')
            .then((response) => response.json())

    },
    getUserById: async (id:string): Promise<IUser> => {
       return await fetch(baseUrl + '/users/' + id)
            .then((response) => response.json())
    }
}

export const postsService = {
    getAllPosts: async ():Promise<IPost[]> => {
        return  await  fetch(baseUrl + '/posts')
            .then((response) => response.json())

    }
}

export const commentsService = {
    getAllComments: async ():Promise<IComment[]> => {
      return await fetch(baseUrl + '/comments')
            .then((response) => response.json())
    }
}