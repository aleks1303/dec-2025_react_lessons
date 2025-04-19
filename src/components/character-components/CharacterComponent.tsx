import {ICharacter} from "../../models/ICharacter.ts";
import {FC} from "react";

type PropsCharacter = {
    item: ICharacter
}

const CharacterComponent:FC<PropsCharacter> = ({item}) => {
    return (
        <div>
            <div>{item.name}</div>
            <img src={item.image} alt={item.name}/>
        </div>
    );
};

export default CharacterComponent;