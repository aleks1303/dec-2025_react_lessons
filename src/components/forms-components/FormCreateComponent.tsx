import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.service.tsx";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validator/carValidator.tsx";


const FormCreateComponent = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<ICar>({
        mode:'all',
        resolver: joiResolver(carValidator)
    });
    const handleForm = (car:ICar) => {
        try {
            addCar(car)
            alert('the car was added successfully')
        }
        catch (e){
            alert('the car was not added')
            console.log(e)
        }

    }
    const classInput = 'border-1 w-40 m-2 block'
    const classButton = 'border-1 w-20 m-2'
    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>
                <label>
                    <input className={classInput} type="text" {...register('brand')} placeholder={'brand of car'}/>
                    {errors.brand && <p>{errors.brand.message}</p>}
                </label>

                <label>
                    <input className={classInput} type="number" {...register('price')} placeholder={'price'}/>
                    {errors.price && <p>{errors.price.message}</p>}
                </label>

                <label>
                    <input className={classInput} type="number" {...register('year')} placeholder={'year'}/>
                    {errors.year && <p>{errors.year.message}</p>}
                </label>

                <button className={classButton}>add Car</button>
            </form>
        </div>
    );
};

export default FormCreateComponent;