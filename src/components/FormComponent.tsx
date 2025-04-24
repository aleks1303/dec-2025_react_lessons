import {useForm} from "react-hook-form";
import {IUser} from "../models/IUser.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../user-validator/user.validator.tsx";


const FormComponent = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<IUser>(
        {
            mode:'all',
            resolver: joiResolver(userValidator)
        }
    );
    const handleForm = (data: IUser) => {
        console.log(data)
    }
    const baseClassInput = 'border-1 w-40 block m-2';
    const baseClassButton = 'border-1 w-20 block m-2';




    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>
                <label>
                    <input className={baseClassInput} type="text" {...register('name')} />
                    {errors.name && errors.name.message}
                </label>
                <label>
                    <input className={baseClassInput} type="text" {...register('username')} />
                    {errors.username && errors.username.message}
                </label>
                <label>
                    <input className={baseClassInput} type="number" {...register('age')} />
                    {errors.age && errors.age.message}
                </label>
                <button className={baseClassButton}>sent</button>
            </form>
        </div>
    );
};

export default FormComponent;