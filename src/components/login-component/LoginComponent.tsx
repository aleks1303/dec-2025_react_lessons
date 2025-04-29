import {useEffect} from "react";
import {login} from "../../services/api.service.tsx";

const LoginComponent = () => {
    useEffect(() => {
        login({
            username: 'sophiab',
            password: 'sophiabpass',
            expiresInMins:1
        })
    }, []);
    return (
        <div>
            LoginComponent
        </div>
    );
};

export default LoginComponent;
