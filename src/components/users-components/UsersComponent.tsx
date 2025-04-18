import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IResult} from "../../models/IResult.ts";
import {userService} from "../../services/api.service.tsx";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    const [query] = useSearchParams({page: '1'});
    const [users, setUsers] = useState<IResult[]>([])
    useEffect(() => {
        const page = query.get('page')
            userService.getAllUsers(page || '')
            .then(result => {
                setUsers(result)
            })
    }, [query]);
    return (
        <div>
            {users.map(user => (<UserComponent key={user.id} item={user}/>))}
        </div>
    );
};

export default UsersComponent;