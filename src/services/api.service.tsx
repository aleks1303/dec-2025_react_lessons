import {IUser} from "../models/IUser.ts";

const userService = {
    getAllUsers: async (page: string):Promise<IUserJson[]>  => {
        const limit = 30;
        const skip = limit * (+page) - limit
      const {users} = await fetch('https://jsonplaceholder.typicode.com/users?skip=' + skip)
            .then((response) => response.json())
        return users
    }
}
export {userService}