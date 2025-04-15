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
            {/*<Link to={'details'} state={item}>*/}
            {/*    <div>{item.id}. {item.name} {item.username}</div>*/}
            {/*</Link>*/}
            <button className={'border-1 p-1'} onClick={fnNavigate}>details</button>
        </div>
    );
};

export default UserComponent;