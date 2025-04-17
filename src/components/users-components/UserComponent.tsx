import {IUser} from "../../models/UsersModel.ts";
import {FC} from "react";

type PropsUserType = {
    item: IUser
}

const UserComponent:FC<PropsUserType> = ({item}) => {
    return (
        <div>
            {item.username}
        </div>
    );
};

export default UserComponent;