import {urlDummy, urlJs} from "../urls/url.ts";
import {IUserJs} from "../models/users-js/IUserJs.ts";
import {IUsersDummy} from "../models/users-dummy/IUsersDummy.ts";


const serviceJSPh = {
    getAllUsersJs: async (): Promise<IUserJs[]> => {
      return await  fetch(urlJs.allUsersJs)
            .then((response) => response.json())

    }
}

const serviceDummy = {
    getAllUsersDummy: async (): Promise<IUsersDummy[]> => {
      const {users} = await  fetch(urlDummy.allUsersDummy)
            .then((response) => response.json())
        return users
    }
}






export {
    serviceJSPh,
    serviceDummy
}