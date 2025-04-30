import {useEffect} from "react";
import {loadAuthTodos} from "../../services/api.service.tsx";


const AuthResourcesComponent = () => {
    useEffect(() => {
        loadAuthTodos().then(response => {
            console.log(response)
        })
    }, []);
    return (
        <div>
            AuthResourcesComponent
        </div>
    );
};

export default AuthResourcesComponent;