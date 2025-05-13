import {IUser} from "../../models/IUser.ts";
import {FC} from "react";
import {Link} from "react-router-dom";

type PropsUserType = {
    item: IUser
}
const UserComponent:FC<PropsUserType> = ({item}) => {

    return (
        <div>
            <Link to={'details'} state={item}>{item.id} {item.name} {item.username}</Link>
        </div>
    );
};

export default UserComponent;