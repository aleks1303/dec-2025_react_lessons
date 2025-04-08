import {IModelSimpsons} from "../models/IModelSimpsons.ts";
import {FC, ReactNode} from "react";

type SimpsonType = {
    simpson: IModelSimpsons
    children: ReactNode
}
const CharacterComponent: FC<SimpsonType> = ({simpson, children}) => {
    return (
        <div className={'m-6'}>
            <h2 className={'text-2xl'}>{simpson.name} {simpson.surname}</h2>
            <h3> вік: {simpson.age}</h3>
            {children}
            <img src={simpson.photo} alt={simpson.name}/>
            <hr/>
        </div>
    );
};

export default CharacterComponent;