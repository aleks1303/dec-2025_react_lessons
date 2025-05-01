import {useForm} from "react-hook-form";
import {ILoginData} from "../../models/ILoginData.ts";
import {login} from "../../services/api.service.tsx";

const LoginComponent = () => {
    const {handleSubmit, register} = useForm<ILoginData>();
    const handleForm = async (data: ILoginData) => {
        try {
            const user = await login({...data, expiresInMins:1})
            console.log('Успіх', user)
        } catch (e) {
            console.log(e)
        }
    }

    const classInput = 'border-1 w-40 m-2 block'
    const classButton = 'border-1 w-20 m-2 block'
    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>
                <label htmlFor={'username'}>username
                    <input className={classInput} type="text" {...register('username')} />
                </label>
                <label htmlFor={'password'}>password
                    <input className={classInput} type="text" {...register('password')} />
                </label>
                <button className={classButton}>sign in</button>
            </form>
        </div>
    );
};

export default LoginComponent;