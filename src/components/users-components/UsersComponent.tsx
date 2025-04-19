import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {ICharacter} from "../../models/ICharacter.ts";
import {characterService} from "../../services/api.service.tsx";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    const [query] = useSearchParams({page:'1'});
    const [characters, setCharacter] = useState<ICharacter[]>([])
    useEffect(() => {
        const page = query.get('page')
        characterService.getAllCharacter(page || '')
            .then((response) => {
                setCharacter(response)
            });
    }, [query]);
    return (
        <div>
            {
                characters.map(character => (<UserComponent key={character.id} item={character}/>))
            }
        </div>
    );
};

export default UsersComponent;