import {useEffect, useState} from "react";

export const useDummy = <T,>(url: string, defaultValue:T) => {
    const [users, setUsers] = useState<T>(defaultValue)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(response => {
                setUsers(response)
            });
    }, [url]);
    return users
}