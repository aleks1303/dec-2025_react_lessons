import {useEffect, useState} from "react";
import {IUserJs} from "../../../models/users-js/IUserJs.ts";
import {serviceJSPh} from "../../../services/api.service.ts";
import UserJSComponent from "./UserJSComponent.tsx";


const UsersJSComponent = () => {
    const [users, setUsers] = useState<IUserJs[]>([]);
    useEffect(() => {
        serviceJSPh.getAllUsersJs().then(response => {
            setUsers(response)
        })
    }, []);
    return (
        <div>
            {
                users.map(user => <UserJSComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersJSComponent;