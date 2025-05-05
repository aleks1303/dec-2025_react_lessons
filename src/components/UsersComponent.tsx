import {useFetch} from "../hooks/useFetch.tsx";
import {IUser} from "../models/IUser.ts";


const UsersComponent = () => {
    const users = useFetch<IUser[]>('https://jsonplaceholder.typicode.com/users', []);
    return (
        <div>
            {users.map(user => (<div key={user.id}>{user.id}. {user.name}</div>))}
        </div>
    );
};

export default UsersComponent;