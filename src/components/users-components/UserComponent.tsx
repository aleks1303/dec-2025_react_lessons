import {IUser} from "../../models/IUser.ts";
import {FC} from "react";
import {useNavigate} from "react-router-dom";

type MyPropsUserType = {
    item: IUser
}
const UserComponent:FC <MyPropsUserType> = ({item}) => {
    const navigate = useNavigate();
    const fnNavigate = () => {
        navigate('details', {state: item})
    }
    return (
        <div>
            {/*<Link to={'details'} state={item}><h2>{item.id}. {item.name} {item.username}</h2></Link>*/}

            <h2>{item.id}. {item.name} {item.username}</h2>
            <button className={'border-1 p-1'} onClick={fnNavigate}>details</button>

        </div>
    );
};

export default UserComponent;