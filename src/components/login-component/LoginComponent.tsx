import {useForm} from "react-hook-form";
import {ILoginData} from "../../models/ILoginData.ts";
import {login} from "../../services/api.service.tsx";

const LoginComponent = () => {
    const {handleSubmit, register} = useForm<ILoginData>();
    const handleForm = async (data: FormData) => {
        try {
            const user = await login({...data, expiresInMins:1})
            console.log('Успіх', user)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>
                <label>
                    <input type="text"/>
                </label>
                <label>
                    <input type="text"/>
                </label>
                <button>sign in</button>
            </form>
        </div>
    );
};

export default LoginComponent;