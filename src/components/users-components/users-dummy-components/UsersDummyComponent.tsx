import {useEffect, useState} from "react";
import {IUsersDummy} from "../../../models/users-dummy/IUsersDummy.ts";
import {serviceDummy} from "../../../services/api.service.ts";
import UserDummyComponent from "./UserDummyComponent.tsx";


const UsersDummyComponent = () => {
    const [users, setUsers] = useState<IUsersDummy[]>([]);
    useEffect(() => {
        serviceDummy.getAllUsersDummy().then(response => {
            setUsers(response)
        })
    }, []);
    return (
        <div className={'bg-gray-200'}>
            {
               users.map(user => <UserDummyComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersDummyComponent;

