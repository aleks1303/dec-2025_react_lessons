import {IUser} from "../models/IUser.ts";

const baseUrl = import.meta.env.VITE_BASE_URL

const userService = {
    getAllUsers: async (page:string): Promise<IUser[]> => {
        const limit = 30
        const skip = ((+page) - 1) * limit
      const {users} = await  fetch(baseUrl + `/users?skip=${skip}&limit=${limit}`)
            .then(res => res.json())
        return users
    }
}
export {
    userService
}