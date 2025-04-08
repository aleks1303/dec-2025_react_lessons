import {IUser} from "../../models/IUser.ts";
import {FC} from "react";

type MyPropsUsers = {
    item: IUser,
    data:(item: IUser) => void

}
const UserComponent: FC<MyPropsUsers> = ({item, data}) => {
    return (
            <div className={'m-2'}>
                <div>{item.id}. {item.name} {item.username}</div>
                <button className={'border-1 p-1'} onClick={() => {
                    data(item)
                }}>data</button>
                <hr/>
            </div>

    );
};

export default UserComponent;