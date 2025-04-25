import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.service.tsx";
import {joiResolver} from "@hookform/resolvers/joi";
import {useValidator} from "../../validator/CarValidator.ts";


const FormComponent = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode:'all',
        resolver: joiResolver(useValidator)
    });
    const createCar = (formData: ICar) => {
       addCar(formData)
    }
    const baseClassInput = 'border-1 w-40 m-2'
    const baseClassButton = 'border-1 w-20 m-2'

    return (
        <div>
            <form onSubmit={handleSubmit(createCar)}>
                <label>
                    <input className={baseClassInput} type="text" {...register('brand')} placeholder={'brand'}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>

                <label>
                    <input className={baseClassInput} type="number" {...register('price')} placeholder={'price'}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </label>

                <label>
                    <input className={baseClassInput} type="number"{...register('year')} placeholder={'year'}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>
                <button className={baseClassButton}>sent</button>
            </form>
        </div>
    );
};

export default FormComponent;





