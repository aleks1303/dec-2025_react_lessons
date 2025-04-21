import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {userService} from "../../services/api.service.tsx";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    const [query] = useSearchParams({page:'1'});
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const page = query.get('page') || '1' ;
            userService.getAllUsers(page)
            .then((response) => {
                setUsers(response)
            });
    }, [query]);
    return (
        <div>
            {
                users.map(user => ( <UserComponent key={user.id} item={user}/>))
            }
        </div>
    );
};

export default UsersComponent;