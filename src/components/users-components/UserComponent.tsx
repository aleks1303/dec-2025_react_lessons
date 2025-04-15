import {IUser} from "../../models/IUsers.ts";
import {FC} from "react";
import {useNavigate} from "react-router-dom";

type MyPropsUserType = {
    item: IUser
}

const UserComponent:FC<MyPropsUserType> = ({item}) => {
    const navigate = useNavigate();
    const fnNavigate = () => {
        return navigate('details', {state:item})
    }
    return (
        <div>
            <div>{item.id}. {item.name} {item.username}</div>
            <button onClick={fnNavigate}></button>
        </div>
    );
};

export default UserComponent;