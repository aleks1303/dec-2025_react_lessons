import {IUser} from "../../models/IUser.ts";
import {FC} from "react";

type MyPropsUser = {
    item: IUser
}

const UserComponent: FC<MyPropsUser> = ({item}) => {
    return (
        <div>
            <h2>{item.id}. {item.name} {item.username}</h2>
        </div>
    );
};

export default UserComponent;