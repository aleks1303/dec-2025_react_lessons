import {IUser} from "../models/IUser.ts";
import {ICart} from "../models/ICart.ts";


const baseUrl = import.meta.env.VITE_BASE_URL

const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
      const {users} = await  fetch(baseUrl+ '/users')
            .then(res => res.json())
        return users
    }
}
const cartService = {
    getCartOfUser: async (userId: string): Promise<ICart[]> => {
       const {carts} = await fetch(baseUrl +'/carts/user/' + userId)
            .then(res => res.json())
        return carts
    }
}

export {
    userService,
    cartService
}