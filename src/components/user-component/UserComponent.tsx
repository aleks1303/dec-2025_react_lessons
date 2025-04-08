import {IUser} from "../../models/IUser.ts";
import {FC} from "react";


type MyPropType = {
    item:IUser
}

const UserComponent: FC<MyPropType> = ({item}) => {
    return (
        <div>
            {item.id}. {item.name} {item.username}
        </div>
    );
};

export default UserComponent;