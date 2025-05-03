
import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

const UsersComponent = () => {

    const foo  = useCallback(() => {
        console.log('foo')
    }, [])
    console.log('Users')
    const [users, setUsers] = useState([])



    //useMemo використовується для запобігання додаткового рендеру, якщо
    // є великі обчислювання (Фільтрація, сортування, великі списки)
    // не слід використовувати просто так, якщо немає потреби
    // в середині useMemo викликається функція і вона повертає необхідні значення
    // useMemo також слідкує за залежностями

    const arr:number[] = useMemo(() => {
        return [11,222,33,3,44,33]
    }, [])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(response => {
                setUsers(response)
            });
    }, []);
    return (
        <div>
            UsersComponent
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};

export default UsersComponent;