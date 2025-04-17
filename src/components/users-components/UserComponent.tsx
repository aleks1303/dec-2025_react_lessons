import {IUser} from "../../models/IUser.ts";
import {FC} from "react";


type PropsUsersType = {
    item: IUser
}


const UserComponent:FC<PropsUsersType> = ({item}) => {

    return (
        <div>
            <div>{item.username}</div>
        </div>
    );
};

export default UserComponent;