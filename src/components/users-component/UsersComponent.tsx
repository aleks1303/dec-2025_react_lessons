import {useEffect, useState} from "react";
import UserComponent from "../user-component/UserComponent.tsx";
import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.service.ts";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
      const fetchUsers = async () => {
          const users = await getUsers();
          setUsers(users)
      }
      fetchUsers()
        return () => {
            console.log('done')
        }
    }, []);
    return (
        <div>
            {
                users.map((user, index) => (
                    <UserComponent key={index} item={user}/>
                ))
            }
        </div>
    );
};

export default UsersComponent;