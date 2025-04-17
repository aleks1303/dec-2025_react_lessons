import {useEffect, useState} from "react";
import {IUser} from "../../models/UsersModel.ts";
import {getAll} from "../../services/generate.api.servive.tsx";
import {IGenerateType} from "../../models/GenerateModel.ts";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAll<IGenerateType & {users: IUser[]}>('/users').then(response => {
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