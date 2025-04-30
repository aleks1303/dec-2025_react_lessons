import {useForm} from "react-hook-form";
import {IUserWithToken} from "../../models/IUser.ts";


const LoginComponent = () => {
    const {handleSubmit, register, formState:{errors}} = useForm<IUserWithToken>({mode:'all'});
    return (
        <div>

        </div>
    );
};

export default LoginComponent;