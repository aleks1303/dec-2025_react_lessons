import {ICharacter} from "../../models/ICharacter.ts";
import {FC} from "react";

type PropsCharacterType = {
    item: ICharacter
}

const UserComponent:FC<PropsCharacterType> = ({item}) => {
    return (
        <div>
            <div>{item.name}</div>
        </div>
    );
};

export default UserComponent;