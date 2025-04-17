import {IUserGeneral} from "../models/user-models/IUserGeneral.ts";
import {ICartGeneral} from "../models/cart-models/ICartGeneral.ts";

const baseUrl = import.meta.env.VITE_BASE_URL

const serviceApi = {
    getAllUsers: async (): Promise<IUserGeneral> => {
        return  await fetch(baseUrl + '/users').then(response => response.json())

    },
    getCartsOfUser: async (userId:number):Promise <ICartGeneral> => {
      return await  fetch(baseUrl +'/carts'+'/user/'+userId )
            .then((response) => response.json())
    }
}


export {
    serviceApi
}