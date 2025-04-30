import {login} from "../../services/api.service.tsx";


const LoginComponent = () => {
    login({
        username:'alexanderj',
        password:'alexanderjpass',
        expiresInMins:1
    })
    return (
        <div>

        </div>
    );
};

export default LoginComponent;