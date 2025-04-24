import {useForm} from "react-hook-form";


const FormComponent = () => {
    useForm()
    return (
        <div>
            <form>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </form>
        </div>
    );
};

export default FormComponent;