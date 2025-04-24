import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";


const FormComponent = () => {
    const {register, handleSubmit} = useForm<ICar>();
    const createCar = (formData: ICar) => {
        console.log(formData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(createCar)}>
                <input type="text" {...register('brand')}/>
                <input type="text" {...register('price')} />
                <input type="text"{...register('year')}/>
            </form>
        </div>
    );
};

export default FormComponent;