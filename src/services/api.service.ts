import {IUserGeneral} from "../models/users-models/IUserGeneral.ts";
import {ICartGeneral} from "../models/carts-models/ICartGeneral.ts";

const baseUrl = import.meta.env.VITE_BASE_URL

const userService = {
    getAllUsers: async (): Promise<IUserGeneral> => {
      return await  fetch(baseUrl + '/users')
            .then(res => res.json())
    }
}

const cartService = {
    getCartsOfUser: async (userId: string):Promise<ICartGeneral> => {
      return await  fetch(baseUrl + '/carts/user/'+ userId)
            .then(res => res.json())
    }
}

export {
    userService,
    cartService
}