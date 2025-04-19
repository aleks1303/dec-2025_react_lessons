import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICharacter} from "../../models/ICharacter.ts";
import {serviceCharacter} from "../../services/api.service.tsx";
import CharacterComponent from "./CharacterComponent.tsx";


const CharactersComponent = () => {
    const [query] = useSearchParams({page: '1'});
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    useEffect(() => {
      const page = query.get('page')
        serviceCharacter.getAllCharacter(page || '')
            .then((response) => {
                setCharacters(response)
            });
    }, [query]);
    return (
        <div>
            {
                characters.map(character => (<CharacterComponent key={character.id} item={character}/>))
            }
        </div>
    );
};

export default CharactersComponent;