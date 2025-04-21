import {IUser} from "../models/IUser.ts";

const userService = {
    getAllUsers: async (page:string): Promise<IUser[]> => {
        const limit = 30
        const skip = (+page) - limit
      const {users} = await  fetch(`https://dummyjson.com/users?skip${skip}&limit${limit}`)
            .then(res => res.json())
        return users
    }
}

export {
    userService
}