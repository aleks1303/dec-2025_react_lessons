import {IUser} from "../models/IUsers.ts";
import {urls} from "../constants/urls.tsx";



const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
     return await  fetch(urls.users.allUsers)
            .then((response) => response.json())
    }
}
export {
    userService
}