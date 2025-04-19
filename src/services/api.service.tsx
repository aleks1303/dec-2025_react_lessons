import {IUser} from "../models/IUser.ts";

const userService = {
    getAllUsers: async (page: string):Promise<IUser[]>  => {
        const limit = 30;
        const skip = limit * (+page) - limit
      const {users} = await fetch('https://dummyjson.com/users?skip=' + skip)
            .then((response) => response.json())
        return users
    }
}
export {userService}