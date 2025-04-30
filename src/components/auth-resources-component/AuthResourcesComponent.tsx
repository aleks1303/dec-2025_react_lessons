import {useEffect} from "react";
import {loadAuthTodos, refresh} from "../../services/api.service.tsx";


const AuthResourcesComponent = () => {
    useEffect(() => {
        loadAuthTodos().then(response => {
            console.log(response)
        }).catch(reason => {
                console.log(reason)
                refresh()
                    .then(() => loadAuthTodos())
                    .then(response => {
                        console.log(response)
                    })
            }
        )
    }, []);
    return (
        <div>
            AuthResourcesComponent
        </div>
    );
};

export default AuthResourcesComponent;