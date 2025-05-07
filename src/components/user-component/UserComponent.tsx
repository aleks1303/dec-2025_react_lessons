import {IUser} from "../../models/interfaces/IUser.ts";
import {FC} from "react";

type PropsUserType = {
    item:IUser
}

const UserComponent:FC<PropsUserType> = ({item}) => {
    return (
        <div>
            {item.id}. {item.name} {item.username}
        </div>
    );
};

export default UserComponent;