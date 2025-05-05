import {useDummy} from "../hooks/useDummy.tsx";
import {IUser} from "../models/IUser.ts";


const UsersComponent = () => {
    const users = useDummy<IUser[]>('https://dummyjson.com/users', []);
    return (
        <div>
            {
            users.map(user => (<div key={user.id}>{user.id} {user.firstName} {user.lastName}</div>))
            }
        </div>
    );
};

export default UsersComponent;