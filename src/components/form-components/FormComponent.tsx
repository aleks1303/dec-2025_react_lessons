import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";


const FormComponent = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<ICar>();
    const createCar = (formData: ICar) => {
        console.log(formData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </form>
        </div>
    );
};

export default FormComponent;