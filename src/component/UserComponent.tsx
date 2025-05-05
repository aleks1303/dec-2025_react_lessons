import {IUser} from "../models/IUser.ts";
import {FC} from "react";

type PropsUser = {
    item: IUser
}
const UserComponent:FC<PropsUser> = ({item}) => {
    return (
        <div>
            {item.id}. {item.name}
            </div>
    );
};

export default UserComponent;