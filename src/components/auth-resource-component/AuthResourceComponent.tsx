import {IUser} from "../../models/IUser.ts";
import {FC} from "react";

type PropAuthUser = {
    item: IUser
}

const AuthResourceComponent:FC<PropAuthUser> = ({item}) => {
    return (
        <div>
            {item.id}. {item.firstName} {item.lastName}
        </div>
    );
};

export default AuthResourceComponent;