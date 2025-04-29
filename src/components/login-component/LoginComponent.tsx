import {useEffect} from "react";
import {login} from "../../services/api.service.tsx";


const LoginComponent = () => {
    useEffect(() => {
        login()
    }, []);
    return (
        <div>
            LoginComponent
        </div>
    );
};

export default LoginComponent;