import {useForm} from "react-hook-form";

type PropsFormType = {
    username: string,
    password: string,
    age: number
}

const FormComponent = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<PropsFormType>({
        mode: "onChange"
    });

    const handleForm = (value: PropsFormType) => {
        console.log(value)
    }
    const classBaseButton = 'border-1 w-20 m-2 block'
    const classDisabled = 'opacity-50 cursor-not-allowed'
    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>
                <label >
                    <input className={'border-1 w-45 m-2 block'} type="text" {...register('username',
                        {required: {value:true, message: 'name is required'},
                            minLength: {value: 3, message: 'name too small'},
                    })} />
                    {errors.username && <p>{errors.username.message}</p>}
                </label>
                <label >
                    <input className={'border-1 w-45 m-2 block'} type="text" {...register('password',
                        {required: {value:true, message: 'name is required'},
                        minLength: {value: 4, message: 'password too short'},
                            maxLength: {value: 9, message: 'password too long'}
                        })} />
                    {errors.password && <p>{errors.password.message}</p>}
                </label>
                <label >
                    <input className={'border-1 w-45 m-2 block'} type="number" {...register('age',
                        {required: true,
                            min: {value: 1, message: 'age too small'},
                            max: {value: 120, message: 'age too big'}
                        }
                    )} />
                    {errors.age && <p>{errors.age.message}</p>}
                </label>
                <button disabled={!isValid} className={`${classBaseButton} ${!isValid ? classDisabled : ''}`}>sent</button>
            </form>
        </div>
    );
};

export default FormComponent;