import {IUser} from "../../models/IUser.ts";
import {FC} from "react";

type PropUserType = {
    item: IUser
}

const UserComponent:FC<PropUserType> = ({item}) => {
    return (
        <div>
            {item.id} {item.firstName} {item.lastName}
        </div>
    );
};

export default UserComponent;