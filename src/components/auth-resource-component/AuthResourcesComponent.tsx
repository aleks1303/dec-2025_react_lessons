import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {loadAuthUsers} from "../../services/api.service.tsx";
import AuthResourceComponent from "./AuthResourceComponent.tsx";


const AuthResourcesComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        loadAuthUsers().then(response => {
            setUsers(response)
        })
    }, []);
    return (
        <div>
            {
                users.map(user => (<AuthResourceComponent key={user.id} item={user}/>))
            }
        </div>
    );
};

export default AuthResourcesComponent;