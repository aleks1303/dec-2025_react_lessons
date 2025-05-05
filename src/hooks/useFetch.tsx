import {useEffect, useState} from "react";


export const useFetch = <T,> (url:string, defaultValue :T) => {
    const [object, setObject] = useState(defaultValue);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(response => {
                setObject(response)
            });
    }, [url]);
    return object
}