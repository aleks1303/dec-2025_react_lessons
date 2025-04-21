import {IUser} from "../../models/IUser.ts";
import {FC} from "react";

type PropsUser ={
    item:IUser
}
const UserComponent:FC<PropsUser> = ({item}) => {
    return (
        <div>
            {item.id}. {item.firstName} {item.lastName}
        </div>
    );
};

export default UserComponent;