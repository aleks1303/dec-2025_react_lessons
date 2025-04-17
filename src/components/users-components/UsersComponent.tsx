import {useEffect, useState} from "react";
import {IUser} from "../../models/user-models/IUser.ts";
import {serviceApi} from "../../services/api.service.tsx";
import UserComponent from "./UserComponent.tsx";
import {IUserGeneral} from "../../models/user-models/IUserGeneral.ts";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        serviceApi.getAllUsers().then(({users}: IUserGeneral) => {
            setUsers(users)
        })
    }, []);
    return (
        <div>
            {users.map(user => <UserComponent key={user.id} item={user}/>)}
        </div>
    );
};

export default UsersComponent;