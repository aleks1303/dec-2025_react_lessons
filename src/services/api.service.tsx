import axios from "axios";
import {ICar} from "../models/ICar.ts";

const baseUrl = import.meta.env.VITE_BASE_URL

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {'Content-Type': 'application/json'}
})

const getAllCars= async (): Promise<ICar[]> => {
    const {data} = await axiosInstance.get('/cars');
    return data
}

const addCar = async (car: ICar): Promise<ICar> => {
    return await axiosInstance.post('/cars', car)
}

const deleteCarOfId = async (id:number) => {
    return await axiosInstance.delete('/cars/' + id)
}


export {
    getAllCars,
    addCar,
    deleteCarOfId
}