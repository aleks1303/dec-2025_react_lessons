import {useEffect, useState} from "react";

export const useFetch = <T,> (url:string) => {
    const [users, setUsers] = useState<T>();
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(response =>
            {setUsers(response)});
    }, [url]);
    return users
}