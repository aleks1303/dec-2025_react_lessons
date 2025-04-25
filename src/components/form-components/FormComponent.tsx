import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.service.tsx";


const FormComponent = () => {
    const {register, handleSubmit} = useForm<ICar>({
        mode:'all'
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
                </label>

                <label>
                    <input className={baseClassInput} type="number" {...register('price')} placeholder={'price'}/>
                </label>

                <label>
                    <input className={baseClassInput} type="number"{...register('year')} placeholder={'year'}/>
                </label>
                <button className={baseClassButton}>sent</button>
            </form>
        </div>
    );
};

export default FormComponent;





