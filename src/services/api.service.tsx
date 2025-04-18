import {IResult} from "../models/IResult.ts";


const userService = {
    getAllUsers: async (page: string): Promise<IResult[]> => {
      const {results} = await  fetch('https://rickandmortyapi.com/api/character?page='+ page )
            .then(res => res.json())
        return results
    }
}

export {
    userService
}