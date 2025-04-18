import {IUser} from "../../models/users-models/IUser.ts";
import {FC} from "react";
import {useNavigate} from "react-router-dom";


type PropsUserType = {
    item: IUser
}


const UserComponent:FC<PropsUserType> = ({item}) => {

    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/users/' + item.id + '/carts')
    }

    return (
        <div>
            <div>{item.id}. {item.firstName} {item.lastName} </div>
            <button onClick={handleOnClick} className={'border-1 p-1'}>carts</button>
        </div>
    );
};

export default UserComponent;