import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getAll} from "../../services/genarate.api.service.tsx";
import {IGenerateDummy} from "../../models/IGenerateDummy.ts";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAll<IGenerateDummy & {users: IUser[]}>('/users').then(response => {
            setUsers(response.users)
        })
    }, []);
    return (
        <div>
            {users.map(user => <UserComponent key={user.id} item={user}/>)}
        </div>
    );
};

export default UsersComponent;