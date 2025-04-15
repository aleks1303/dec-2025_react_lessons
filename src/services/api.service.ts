import {IUser} from "../models/IUsers.ts";
import {urls} from "../constants/urls.tsx";
import {IPost} from "../models/IPost.ts";



const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
     return await  fetch(urls.users.allUsers)
            .then((response) => response.json())
    }
}
const postService = {
    getPostOfUserById: async (id:number):Promise<IPost[]> => {
        return await fetch(urls.posts.postOfUserByID(id))
            .then((response) => response.json())

    }
}
export {
    userService,
    postService
}