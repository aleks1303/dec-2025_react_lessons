import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [item, setItem] = useState<IUser | null>(null)
    useEffect(() => {
       const fetchUsers = async () => {
           const users = await getUsers();
           setUsers(users)
       }
       fetchUsers()
    }, []);

    const data = (item: IUser) => {
        setItem(item)
    }
    return (
        <div>
            {
                users.map(user => <UserComponent data={data} key={user.id} item={user}/>)
            }

                <div>{item?.company.name} {item?.phone}</div>

        </div>
    );
};

export default UsersComponent;