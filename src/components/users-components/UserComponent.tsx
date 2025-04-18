import {IResult} from "../../models/IResult.ts";
import {FC} from "react";

type PropsUserType = {
    item: IResult
}

const UserComponent:FC<PropsUserType> = ({item}) => {
    return (
        <>
            <div>{item.name}</div>
            <img src={item.image} alt={item.name}/>
        </>
    );
};

export default UserComponent;