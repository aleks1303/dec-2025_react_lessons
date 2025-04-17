import {IUser} from "../../models/user-models/IUser.ts";
import {FC} from "react";
import {useNavigate} from "react-router-dom";

type PropsUserType = {
    item: IUser
}

const UserComponent: FC<PropsUserType> = ({item}) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('users/' + item.id + '/carts', {state: {item}})
    }
    return (

        <div>
            <div>{item.id}. {item.username} {item.firstName}</div>
            <button className={'border-1'} onClick={handleNavigate}>user`s carts</button>

        </div>
    );
};

export default UserComponent;