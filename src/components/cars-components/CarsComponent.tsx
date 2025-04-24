import {useEffect, useState} from "react";
import {ICar} from "../../models/ICar.ts";
import {getAllCars} from "../../services/api.service.tsx";
import CarComponent from "./CarComponent.tsx";


const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        getAllCars().then(response => {
            setCars(response)
        })
    }, []);
    return (
        <div>
            {
                cars.map(car => (<CarComponent key={car.id} item={car}/>))
            }
        </div>
    );
};

export default CarsComponent;