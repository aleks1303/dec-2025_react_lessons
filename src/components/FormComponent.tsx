import {useState} from "react";


interface IPropForm {
    username:string,
    password: string
}

const FormComponent = () => {
    const [FormState, setFormState] = useState<IPropForm>({
        username:'',
        password:''
    })



    return (
        <div>
            <form>
                <input className={'border-1 m-3'} type="text" name="username"/>
                <input className={'border-1'}  type="text" name="password"/>
                <button className={'border-1 m-2 w-15'}>sent</button>
            </form>
        </div>
    );
};

export default FormComponent;