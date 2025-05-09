import {IUser} from "../models/IUser.ts";

const baseUrl = 'https://jsonplaceholder.typicode.com'


export const userService = {
    getAllUsers: async ():Promise<IUser[]> => {
      return  await fetch(baseUrl + '/users')
            .then((response) => response.json())

    }
}