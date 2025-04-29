import {useEffect} from "react";
import {login} from "../../services/api.service.tsx";


const LoginComponent = () => {
    useEffect(() => {
        login({
            username:'michaelw',
            password:'michaelwpass',
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