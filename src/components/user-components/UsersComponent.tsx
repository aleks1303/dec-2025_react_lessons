import {useEffect, useState} from "react";
import {userService} from "../../services/api.service.ts";
import {IUserGeneral} from "../../models/users-models/IUserGeneral.ts";
import {IUser} from "../../models/users-models/IUser.ts";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
       userService.getAllUsers()
            .then(({users}: IUserGeneral) => {
                setUsers(users)
            });
    }, []);
    return (
        <div>
            {
                users.map(user =>  <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;