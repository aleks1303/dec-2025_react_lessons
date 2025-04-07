import {IUser} from "../models/IUser.ts";

const getUsers = async (): Promise<IUser[]> => {
  return  await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
}
export {
    getUsers
}