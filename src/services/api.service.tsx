import {urls} from "../constants/urls.tsx";
import {IUser} from "../models/IUser.ts";

const userService = {

    getUsers:async (): Promise< IUser[]> => {
       return await fetch(urls.users.allUsers)
            .then((response) => response.json())
    },
    getUser: async (id:number): Promise<IUser> => {
        return await fetch(urls.users.byId(id))
            .then((response) => response.json())

    }


}

export {
    userService
}