import {useForm} from "react-hook-form";


type PropsFormType = {
    name: string,
    lastName: string,
    age: number
}

const FormsComponent = () => {
    const {handleSubmit, register, formState: {errors}}  = useForm<PropsFormType>();
    const handleForm = (formData: PropsFormType) => {
        console.log(formData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>
                <input className={'border-1 w-40 m-2'} type="text" {...register('name', {required: "поле обов'язкове"})} />
                {errors.name && <p>{errors.name.message}</p>}

                <input className={'border-1 w-40 m-2'} type="text" {...register('lastName', {required: "поле обов'язкове"})}/>
                {errors.lastName && <p>{errors.lastName.message}</p>}

                <input className={'border-1 w-40 m-2'} type="number" {...register('age', {required: "поле обов'язкове"})} />
                {errors.age && <p>{errors.age.message}</p>}

                <button className={'border-1 w-20 m-2'}>sent</button>
            </form>
        </div>
    );
};

export default FormsComponent;