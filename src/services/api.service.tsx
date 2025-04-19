import {ICharacter} from "../models/ICharacter.ts";

const baseUrl = import.meta.env.VITE_BASE_URL

const serviceCharacter = {
    getAllCharacter: async (page: string): Promise<ICharacter[]> => {
      const {results} = await  fetch(baseUrl +'/api/character?page=' + page)
            .then((response) => response.json())
        return results
    }
}

export {
    serviceCharacter
}