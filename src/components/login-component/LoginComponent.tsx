import {useEffect} from "react";
import {login} from "../../services/api.service.tsx";


const LoginComponent = () => {
    useEffect(() => {
            login({
           username: 'noahh',
           password: 'noahhpass',
           expiresInMins: 1
        })
    }, []);
    return (
        <div>

        </div>
    );
};

export default LoginComponent;
