import {useForm} from "react-hook-form";
import {LoginData} from "../../models/LoginData.ts";
import {login} from "../../services/api.service.tsx";


const LoginComponent = () => {


   const {handleSubmit, register} = useForm<LoginData>({mode:'all'});

   const handleForm = async (data: LoginData) => {
       try {
           const user = await login({...data, expiresInMins:1})
           console.log(user)
       }catch (e) {
           console.log(e)
       }
   }

    // const {handleSubmit, register} = useForm<LoginData>({mode:'all'});
    //
    // const handleForm = async (data: LoginData) => {
    //    try{
    //        const user = await login({...data});
    //        console.log("Успішний вхід:", user);
    //    } catch (e) {
    //        console.log('Причина входу', e)
    //    }
    // }

    const classInput = 'border-1 w-40 block'
    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>
                <label htmlFor={'username'}>username</label>
                <input className={classInput} type="text" {...register('username')} />
                <label htmlFor={'password'}>password</label>
                <input className={classInput} type="text" {...register('password')} />
                <button className={classInput}>sign in</button>
            </form>
        </div>
    );
};

export default LoginComponent;