import {IUser} from "../../models/IUser.ts";
import {FC} from "react";

type PropsUserType = {
    item: IUser
}
const UserComponent:FC<PropsUserType> = ({item}) => {
    return (
        <div>
            <div>{item.id}. {item.name}</div>
        </div>
    );
};

export default UserComponent;