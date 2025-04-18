import {IUser} from "../../models/IUser.ts";
import {FC} from "react";
import {Link} from "react-router-dom";

type PropsUserType = {
    item: IUser

}
const UserComponent:FC<PropsUserType> = ({item}) => {
    return (
        <div>
            <Link to={'/users/' + item.id + '/carts'} state={item}>
                <div> {item.id}. {item.lastName} {item.firstName}</div>
            </Link>
        </div>
    );
};

export default UserComponent;