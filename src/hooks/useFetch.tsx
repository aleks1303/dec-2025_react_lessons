import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";

export const useFetch = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(response => setUsers(response));
    }, []);
    return users
}