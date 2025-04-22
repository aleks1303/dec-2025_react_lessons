import {useForm} from "react-hook-form";


type PropsFormType = {
    username: string,
    password: string,
    age: number
}

const FormComponent = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<PropsFormType>();

    const handleForm = (formData: PropsFormType) => {
        console.log(formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>
                <input className={'border-1 w-40 m-2'} type="text" {...register('username', {required: "поле обов'язкове"})} />
                {errors.username && <p>{errors.username.message}</p>}
                <input className={'border-1 w-40 m-2'}  type="text" {...register('password', {required: "поле обов'язкове"})}/>
                {errors.password && <p>{errors.password.message}</p>}
                <input className={'border-1 w-40 m-2'}  type="text" {...register('age', {required: "поле обов'язкове"})}/>
                {errors.age && <p>{errors.age.message}</p>}
                <button className={'border-1 w-20 m-2'} >sent</button>
            </form>
        </div>
    );
};

export default FormComponent;