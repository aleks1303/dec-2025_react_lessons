import {useEffect, useState} from "react";
import {IUser} from "../../models/IUsers.ts";
import UserComponent from "./UserComponent.tsx";
import {userService} from "../../services/api.service.ts";


const UsersComponents = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getAllUsers().then((users) => {
            setUsers(users)
        })
    }, []);
    return (
        <div>
            {
                users.map(user => (<UserComponent key={user.id} item={user}/>))
            }
        </div>
    );
};

export default UsersComponents;