import { useForm } from "react-hook-form";
import { deleteCarById } from "../../services/api.service";

type FormData = {
    id: number;
};

const DeleteCarForm = () => {
    const { register, handleSubmit } = useForm<FormData>({ mode: "all" });

    const handleDelete = async ({ id }: FormData) => {
        try {
            await deleteCarById(id);
            alert(`🚗 Авто з ID ${id} видалено успішно`);
        } catch (e) {

            alert(`❌ Помилка при видаленні авто з ID ${id}`);
            console.log(e)
        }
    };

    const inputClass = "border border-gray-400 px-2 py-1";
    const buttonClass = "bg-red-500 text-white px-4 py-2 rounded ";

    return (
        <form onSubmit={handleSubmit(handleDelete)} className="text-center">
            <input
                className={inputClass}
                type="number"
                {...register("id", { required: true })}
                placeholder="ID авто"
            />
            <button type="submit" className={buttonClass}>
                🗑 Видалити авто
            </button>
        </form>
    );
};

export default DeleteCarForm;