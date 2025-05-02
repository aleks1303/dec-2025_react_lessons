import UserComponent from "./UserComponent.tsx";
import {useEffect, useState} from "react";


const UsersComponent = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(value => {setUsers(value)});
    }, []);
    console.log('users component')
    return (
        <div>
            UsersComponent
            <UserComponent/>
        </div>
    );
};

export default UsersComponent;