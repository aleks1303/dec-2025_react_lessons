import {IUser} from "../../models/IUser.ts";
import {FC} from "react";


type MyPropsUser = {
    item: IUser
}

const UserComponent: FC<MyPropsUser> = ({item}) => {
    return (
        <div>
            <div>{item.name} {item.username} {item.id}
               <h2>{item.email}</h2>
            </div>
            <hr/>
        </div>
    );
};

export default UserComponent;