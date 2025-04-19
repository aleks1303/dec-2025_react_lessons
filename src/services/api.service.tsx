import {ICharacter} from "../models/ICharacter.ts";

const characterService = {
    getAllCharacter: async (page:string): Promise<ICharacter[]> => {
      const {results} = await fetch('https://rickandmortyapi.com/api/character?page=' + page)
            .then((response) => response.json())
       return results
    }
}


export {
    characterService
}