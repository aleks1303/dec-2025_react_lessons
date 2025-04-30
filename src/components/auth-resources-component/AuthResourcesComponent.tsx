import {useEffect} from "react";
import {loadAuthTodos} from "../../services/api.service.tsx";


const AuthResourcesComponent = () => {
    useEffect(() => {
        loadAuthTodos()
    }, []);
    return (
        <div>
            AuthResourcesComponent
        </div>
    );
};

export default AuthResourcesComponent;