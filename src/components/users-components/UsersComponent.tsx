import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {userService} from "../../services/api.service.tsx";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
      userService.getUsers().then((allUsers) => {
          setUsers(allUsers)
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

export default UsersComponent;