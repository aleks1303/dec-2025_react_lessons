import {FormEvent, useState} from "react";


interface IPropForm {
    username:string,
    password: string
}

const FormComponent = () => {
    const [formState, setFormState] = useState<IPropForm>({
        username:'foobar',
        password:'1111'
    })

const handleChange = (e: FormEvent<HTMLFormElement>) => {
     e.preventDefault()
}

const handleUsernameChange = (e:FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement
        setFormState({...formState, username: input.value})
}
const handlePasswordChange = (e:FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    setFormState({...formState, password: input.value})
}
    return (
        <div>
            <form onSubmit={handleChange}>
                <input className={'border-1 m-3'} type="text" name="username"  value={formState.username} onChange={handleUsernameChange}/>
                <input className={'border-1'}  type="text" name="password" value={formState.password} onChange={handlePasswordChange}/>
                <button className={'border-1 m-2 w-15'}>sent</button>
            </form>
        </div>
    );
};

export default FormComponent;