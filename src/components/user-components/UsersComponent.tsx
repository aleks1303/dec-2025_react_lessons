import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {userService} from "../../services/api.service.tsx";


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
                users.map(user => ( <div>{user.id}. {user.firstName} {user.lastName}</div>))
            }
        </div>
    );
};

export default UsersComponent;