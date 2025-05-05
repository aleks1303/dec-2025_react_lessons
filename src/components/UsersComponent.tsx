import {useDummy} from "../hooks/useDummy.tsx";
import {IUserBase} from "../models/IUserModel/IUserBase.ts";


const UsersComponent = () => {
    const {users} = useDummy<IUserBase>('https://dummyjson.com/users', {users:[], limit:0, skip:0, total: 0});
    return (
        <div>
            {
            users.map(user => (<div key={user.id}>{user.id} {user.firstName} {user.lastName}</div>))
            }
        </div>
    );
};

export default UsersComponent;