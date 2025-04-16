import {useEffect, useState} from "react";
import {IUserJs} from "../../../models/users-js/IUserJs.ts";
import {serviceJSPh} from "../../../services/api.service.ts";
import UserJsonComponent from "./UserJsonComponent.tsx";


const UsersJsonComponent = () => {
    const [users, setUsers] = useState<IUserJs[]>([]);
    useEffect(() => {
        serviceJSPh.getAllUsersJs().then(response => {
            setUsers(response)
        })
    }, []);
    return (
        <div className={'bg-yellow-100'}>
            {
                users.map(user => <UserJsonComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersJsonComponent;