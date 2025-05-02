
import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";


// інформація о useCallback знаходиться в UserComponent
// в useCallback необхідно додати [] - залежності, вони і будуть слідкувати за змінами
// і при необхідності переренджуватись
const UsersComponent = () => {

    const fn = useCallback(() => {
        console.log('this is fn')
    }, [])
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(value => setUsers(value));
    }, []);
    console.log('users')
    return (
        <div>
            UsersComponent
            <UserComponent fn={fn}/>
        </div>
    );
};

export default UsersComponent;