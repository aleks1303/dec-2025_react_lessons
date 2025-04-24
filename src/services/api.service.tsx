import axios from "axios";
import {ICar} from "../models/ICar.ts";

const baseUrl = import.meta.env.VITE_BASE_URL

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {'Content-Type': 'application/json'}
})

const getAllCars = async ():Promise<ICar[]> => {
  return await  axiosInstance.get('/cars')
      .then(value => value.data)
}





export {
    getAllCars
}