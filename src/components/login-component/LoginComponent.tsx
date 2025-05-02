import {useForm} from "react-hook-form";
import {ILoginData} from "../../models/ILoginData.ts";
import {login, loginOut} from "../../services/api.service.tsx";

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

    const classInput = 'border-1 w-40 m-2 block';
    const classLabel = 'justify-center flex'
    return (
        <div className={'flex justify-center'}>
            <form onSubmit={handleSubmit(handleForm)}>
                <label className={classLabel} htmlFor={'username'}>username
                </label>
                <input className={classInput} type="text" {...register('username')} />
                <label className={classLabel} htmlFor={'password'}>password
                </label>
                <input className={classInput} type="text" {...register('password')} />
                <button className={classInput}>sign in</button>
                <button className={classInput} onClick={loginOut}>Exit</button>
            </form>
        </div>
    );
};

export default LoginComponent;