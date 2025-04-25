import {useForm} from "react-hook-form";
import {deleteCarOfId} from "../../services/api.service.tsx";

type FormData = {
    id: number
}

const FormDeleteComponent = () => {
    const {handleSubmit, register} = useForm<FormData>({
        mode:'all'
    });

    const deleteCar = async ({id}: FormData) => {
      try{
          await deleteCarOfId(id)
          alert(`Машину по id ${id} успішно видалено`)
      } catch (e){
          console.log(e)
      }
    }
    const classInput = 'border-1 w-40 m-2 block'
    const classButton = 'border-1 bg-red-400 text-white w-40 m-2 block'

    return (
        <div>
            <form onSubmit={handleSubmit(deleteCar)}>
                <input className={classInput} type="number" {...register('id', {required: true})} placeholder={'enter ID'}  />
                <button className={classButton}>delete</button>
            </form>
        </div>
    );
};

export default FormDeleteComponent;